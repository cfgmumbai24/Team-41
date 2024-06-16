const adminonly = async(req,res,next) =>{
    if(req.user&&req.user.role==='admin'){
        next();
    }
    else{
        return res.status(403).json({
            status:'fail',
            message:'Access denied, Admins only!'
        });
    }

}
export default adminonly;