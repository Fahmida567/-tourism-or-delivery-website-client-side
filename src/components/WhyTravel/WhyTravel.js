import React from 'react';
import './WhyTravel.css';

const WhyTravel = () => {
    return (
        <div className='my-5 mx-5'>
            <div>
                <h1 className='text-center '>Why Travel With us?</h1>
            </div>
            <div>
                <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
                    <div className="col">
                        <div className="card box shadow-lg pb-3 mb-5 bg-body card-border">
                            <img src="https://tse4.mm.bing.net/th?id=OIP.nQEXjUN__ICJLQEZbNh0xgHaDt&pid=Api&P=0&w=308&h=155" className="images" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">We Have 1000+ WordWide Guides</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card box shadow-lg pb-3 mb-5 bg-body card-border">
                            <img src="https://holidaysdot.com/wp-content/uploads/2018/11/People-Travel.jpg" className="images" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">We Have 100% Trusted Tour Agency</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card box shadow-lg pb-3 mb-5 bg-body card-border">
                            <img src="http://www.my-holiday-numbers.co.uk/wp-content/uploads/2016/11/millenial-travel.jpg" className="images" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">12+ Years of Travel Experience</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card box shadow-lg pb-3 mb-5 bg-body card-border">
                            <img src="https://tse4.mm.bing.net/th?id=OIP.fBasGTqmXcIfs5EUTUlLcwHaFj&pid=Api&P=0&w=224&h=169" className="images" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">100% of Our Travelers are Happy</h5>
                            </div>
                        </div>
                    </div>



                </div>

            </div>
        </div>

    );
};

export default WhyTravel;