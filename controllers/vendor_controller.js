import User from '../models/users-schema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const createVendor = async (req, res) => {
    try {
        const { email, phone, password } = req.body;
        if (!email || !phone || !password) {
            return res.status(400).json({
                status: 'fail',
                message: 'Please provide all the required fields'
            });
        }
        const isVendor = await User.findOne({ email });
        if (isVendor) {
            return res.status(400).json({
                status: 'fail',
                message: 'Vendor already exists'
            });
        }
        const hashedPass = await bcrypt.hash(password, 10);
        const vendor1 = {
            email,
            phone,
            password: hashedPass
        };
        const newVendor = new User(vendor1);
        await newVendor.save();

        return res.status(201).json({
            status: 'success',
            message: 'Vendor created successfully'
        });

    } catch (error) {
        console.log("There was an error while creating the Vendor", error);
        return res.status(500).json({
            status: 'fail',
            message: 'Error creating the Vendor',
            error: error.message
        });
    }
}


export const loginVendor = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                status: 'fail',
                message: 'Please provide email and password'
            });
        }
        const findVendor = await User.findOne({ email });
        if (!findVendor) {
            return res.status(400).json({
                status: 'fail',
                message: 'Vendor not found'
            });
          }
        const comparePass = await bcrypt.compare(password, findVendor.password);
        if (!comparePass) {
            return res.status(400).json({
                status: 'fail',
                message: 'Invalid password'
            });
        }
        const tokenPayload = { id: findVendor._id, email: findVendor.email };
        const jsonToken = jwt.sign(tokenPayload, process.env.SECRET_KEY, { expiresIn: '1d' });

        return res.status(200).json({
            status: 'success',
            message: 'User logged in successfully',
            token: `Bearer ${jsonToken}`,
            user: {
                id: findVendor._id,
                email: findVendor.email
            }
        });
    } catch (error) {
        console.log("There was an error while logging in", error);
        return res.status(500).json({
            status: 'fail',
            message: 'Error logging in',
            error: error.message
        });
    }
};