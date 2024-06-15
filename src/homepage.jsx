import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from './assets/images/img1.jpeg';
import image2 from './assets/images/img2.jpeg';

const Homepage = () => {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
        };
    
        return (
            <div>
                {/* Scrolling Image Section */}
                <section style={{ overflowX: 'hidden' }}>
                    <Slider {...settings}>
                        <div>
                            <img src={image1} alt="Scrolling Image 1" style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div>
                            <img src={image2} alt="Scrolling Image 2" style={{ width: '100%', height: 'auto' }} />
                        </div>
                    </Slider>
                </section>

            {/* Working Section */}
            <section>
                <h2>Work we do</h2>
                <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', padding: '2px 2px' }}>
                    <div className="card" style={{ width: '18rem', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                        <div className="card-body">
                            <h5 className="card-title">Education</h5>
                            <p className="card-text">Aman Day Care Center | Balwadi</p>
                        </div>
                    </div>

                    <div className="card" style={{ width: '18rem', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                        <div className="card-body">
                            <h5 className="card-title">LIVELIHOOD</h5>
                            <p className="card-text">Black Gold Rope for Life | Skill Development</p>
                        </div>
                    </div>

                    <div className="card" style={{ width: '18rem', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                        <div className="card-body">
                            <h5 className="card-title">WOMEN EMPOWERMENT</h5>
                            <p className="card-text">Entrepreneurship and Skill Development | Womens Empowerment Project</p>
                        </div>
                    </div>

                    <div className="card" style={{ width: '18rem', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                        <div className="card-body">
                            <h5 className="card-title">HEALTHCARE</h5>
                            <p className="card-text">Dental Camp | General Medical Camp</p>
                        </div>
                    </div>

                    <div className="card" style={{ width: '18rem', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                        <div className="card-body">
                            <h5 className="card-title">DISASTER RELIEF</h5>
                            <p className="card-text">Covid19 | Earthquake | Food relief program | Drought Relief</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Review Section */}
            <section>
                <h2>Success stories</h2>
                <div style={{ display: 'flex', gap: '20px', overflowX: 'auto' }}>
                    {/* Review Card 1 */}
                    <div className="card" style={{ width: '18rem', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                        <div className="card-body">
                            <h5 className="card-title">A Journey from Poverty to Prosperity</h5>
                            <p className="card-text">"Before EAGL came to our village, I struggled to provide for my children. We often went days without enough food..."</p>
                            <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                    </div>

                    {/* Review Card 2 */}
                    <div className="card" style={{ width: '18rem', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                        <div className="card-body">
                            <h5 className="card-title">Creating Entrepreneurs in Underserved Communities</h5>
                            <p className="card-text">"Joining the Goat NGO's initiative was a turning point in my life. With the seed funding and training they provided,...."</p>
                            <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                    </div>

                    <div className="card" style={{ width: '18rem', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                        <div className="card-body">
                            <h5 className="card-title">Ensuring Food Security for Vulnerable Families</h5>
                            <p className="card-text">"The introduction of goats into our farm has significantly improved our food security. The milk from the goats is rich in nutrients..."</p>
                            <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                    </div>

                    <div className="card" style={{ width: '18rem', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                        <div className="card-body">
                            <h5 className="card-title">Women’s Empowerment through Livestock Ownership</h5>
                            <p className="card-text">"Receiving goats from the NGO has empowered me in ways I never imagined. As a woman in a patriarchal society, I had little economic power..."</p>
                            <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: '20px', marginTop: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <h2>Why Your Support Matters</h2>
                <p>
                    These stories are just a glimpse of the transformative impact our Goat NGO is making. Every donation helps us provide more families with the resources and training they need to become self-sufficient and prosperous. By funding our programs, you are not only helping individuals but also fostering sustainable development in entire communities.
                </p>
            </section>

            {/* Join Us in Making a Difference Section */}
            <section style={{ padding: '20px', marginTop: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <h2>Join Us in Making a Difference</h2>
                <p>
                    Your contribution can change lives. With your support, we can continue to empower more families, boost local economies, and ensure food security in the most vulnerable regions. Together, we can build a brighter, more sustainable future for all.
                </p>
                <p>
                    <a href="#" className="btn btn-primary">Donate Now</a> and be a part of this incredible journey of transformation and hope.
                </p>
            </section>

            <footer style={{ padding: '5px', marginTop: '5px', backgroundColor: 'black', borderTop: '1px solid #ccc', textAlign: 'center', color: 'white' }}>
                <p>&copy; 2024 Goat NGO. All rights reserved.<a href="#" style={{ color: 'white', marginLeft: '5px' }}>Privacy Policy</a> | <a href="#" style={{ color: 'white', marginLeft: '5px' }}>Terms of Service</a></p>
            </footer>

        </div>
    );
};

export default Homepage;


