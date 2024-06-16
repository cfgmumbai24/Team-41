import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from './assets/images/img1.jpeg';
import image2 from './assets/images/img2.jpeg';
import Navbar from './components/Navbar';

const Homepage = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    };

    return (
        <div>
            <Navbar />
            {/* Scrolling Image Section */}
            <section className="overflow-x-hidden">
                <Slider {...settings}>
                    <div>
                        <img src={image1} alt="Scrolling Image 1" className="w-full h-auto" />
                    </div>
                    <div>
                        <img src={image2} alt="Scrolling Image 2" className="w-full h-auto" />
                    </div>
                </Slider>
            </section>

            {/* Working Section */}
            <section>
                <h2 className="text-2xl font-bold my-4 text-center">Work we do</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5  p-2">
                    <div className="card m-auto w-72 border border-gray-300 rounded-lg shadow-md p-4">
                        <div className="card-body">
                            <h5 className="card-title text-xl font-semibold">Education</h5>
                            <p className="card-text">Aman Day Care Center | Balwadi</p>
                        </div>
                    </div>

                    <div className="card m-auto w-72 border border-gray-300 rounded-lg shadow-md p-4">
                        <div className="card-body">
                            <h5 className="card-title text-xl font-semibold">LIVELIHOOD</h5>
                            <p className="card-text">Black Gold Rope for Life | Skill Development</p>
                        </div>
                    </div>

                    <div className="card m-auto w-72 border border-gray-300 rounded-lg shadow-md p-4">
                        <div className="card-body">
                            <h5 className="card-title text-xl font-semibold">WOMEN EMPOWERMENT</h5>
                            <p className="card-text">Entrepreneurship and Skill Development | Women's Empowerment Project</p>
                        </div>
                    </div>

                    <div className="card m-auto w-72 border border-gray-300 rounded-lg shadow-md p-4">
                        <div className="card-body">
                            <h5 className="card-title text-xl font-semibold">HEALTHCARE</h5>
                            <p className="card-text">Dental Camp | General Medical Camp</p>
                        </div>
                    </div>

                    <div className="card m-auto w-72 border border-gray-300 rounded-lg shadow-md p-4">
                        <div className="card-body">
                            <h5 className="card-title text-xl font-semibold">DISASTER RELIEF</h5>
                            <p className="card-text">Covid19 | Earthquake | Food relief program | Drought Relief</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Review Section */}
            <section>
                <h2 className="text-2xl font-bold my-4  text-center">Success stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 overflow-x-auto justify-evenly">
                    {/* Review Card 1 */}
                    <div className="card m-auto w-72 border border-gray-300 rounded-lg shadow-md p-4">
                        <div className="card-body">
                            <h5 className="card-title text-xl font-semibold">A Journey from Poverty to Prosperity</h5>
                            <p className="card-text">"Before EAGL came to our village, I struggled to provide for my children. We often went days without enough food  Lorem ipsum dolor sit amet consectetur adipisicing elitn unorvonni iggt..."</p>
                            <a href="#" className="btn btn-primary mt-2 inline-block bg-blue-500 text-white py-2 px-4 rounded">Read More</a>
                        </div>
                    </div>

                    {/* Review Card 2 */}
                    <div className="card m-auto w-72 border border-gray-300 rounded-lg shadow-md p-4">
                        <div className="card-body">
                            <h5 className="card-title text-xl font-semibold">Creating Entrepreneurs in Underserved Communities</h5>
                            <p className="card-text">"Joining the Goat NGO's initiative was a turning point in my life. With the seed funding and training they provided,...."</p>
                            <a href="#" className="btn btn-primary mt-2 inline-block bg-blue-500 text-white py-2 px-4 rounded">Read More</a>
                        </div>
                    </div>

                    <div className="card m-auto w-72 border border-gray-300 rounded-lg shadow-md p-4">
                        <div className="card-body">
                            <h5 className="card-title text-xl font-semibold">Ensuring Food Security for Vulnerable Families</h5>
                            <p className="card-text">"The introduction of goats into our farm has significantly improved our food security. The milk from the goats is rich in nutrients..."</p>
                            <a href="#" className="btn btn-primary mt-2 inline-block bg-blue-500 text-white py-2 px-4 rounded">Read More</a>
                        </div>
                    </div>

                    <div className="card m-auto w-72 border border-gray-300 rounded-lg shadow-md p-4">
                        <div className="card-body">
                            <h5 className="card-title text-xl font-semibold">Women’s Empowerment through Livestock Ownership</h5>
                            <p className="card-text">"Receiving goats from the NGO has empowered me in ways I never imagined. As a woman in a patriarchal society, I had little economic power..."</p>
                            <a href="#" className="btn btn-primary mt-2 inline-block bg-blue-500 text-white py-2 px-4 rounded">Read More</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-5 mt-5 border border-gray-300 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold  text-center">Why Your Support Matters</h2>
                <p>
                    These stories are just a glimpse of the transformative impact our Goat NGO is making. Every donation helps us provide more families with the resources and training they need to become self-sufficient and prosperous. By funding our programs, you are not only helping individuals but also fostering sustainable development in entire communities.
                </p>
            </section>

            {/* Join Us in Making a Difference Section */}
            <section className="p-5 mt-5 border border-gray-300 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold  text-center">Join Us in Making a Difference</h2>
                <p>
                    Your contribution can change lives. With your support, we can continue to empower more families, boost local economies, and ensure food security in the most vulnerable regions. Together, we can build a brighter, more sustainable future for all, and be a part of this incredible journey of transformation and hope.
                </p>
                <p>
                    <a href="#" className="btn btn-primary mt-2 inline-block mt-5 bg-blue-500 text-white py-2 px-4 rounded">Donate Now</a>
                </p>
            </section>

            <footer className="p-1 mt-1 bg-black border-t border-gray-300 text-center text-white">
                <p>&copy; 2024 Goat NGO. All rights reserved.
                    <a href="#" className="text-white ml-2">Privacy Policy</a> |
                    <a href="#" className="text-white ml-2">Terms of Service</a>
                </p>
            </footer>
        </div>
    );
};

export default Homepage;
