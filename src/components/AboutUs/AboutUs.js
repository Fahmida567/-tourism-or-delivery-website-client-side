import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className='mb-5'>

            <div className='text-center m-5'>
                <h1>About Us</h1>
            </div>

            <div className='row'>
                <div className="col-md-6 m-auto">
                    <div className=" m-5 w-75 ">
                        <h1 className="card-title">Worlds Best Travel Advisor from 2009</h1>
                        <p className="card-text">Travel dates back to antiquity where wealthy Greeks and Romans would travel for leisure to their summer homes and villas in cities such as Pompeii and Baiae.[9] While early travel tended to be slower, more dangerous, and more dominated by trade and migration, cultural and technological advances over many years have tended to mean that travel has become easier and more accessible.[10] Mankind has come a long way in transportation since Christopher Columbus sailed to the new world from Spain in 1492, an expedition which took over 10 weeks to arrive at the final destination; to the 21st century where aircraft allow travel from Spain to the United States overnight.</p>
                        <div>
                            <button className='btn btn-warning px-5 text-white'>Find More</button>
                        </div>

                    </div>
                </div>

                <div className="col-md-6 text-center ">
                    <img className='about-img  p-2 ' src="https://viewfinder.expedia.com/wp-content/uploads/2019/07/895081824.jpg" alt="..." />
                </div>


            </div>
            <div>
                <div className=' my-5'>
                    <h4 className='text-center  opacity-50'>REVIEWS </h4>
                    <h1 className='text-center'>Top Reviews</h1>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 mx-5">
                    <div className="col">
                        <div className="card box shadow-lg pb-3 mb-5 bg-body card-border">
                            <img src="https://tse3.mm.bing.net/th?id=OIP.3FemBUxBq0wRQruIP0M6MgHaHa&pid=Api&P=0&w=300&h=300" className="review-img rounded-circle" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center "><b>Name :</b> Eiana disuza </h5>
                                <h5 className="card-title text-center opacity-75">New Zealand's South Island brims with majestic landscapes at every turn, from dramatic mountains to fjords to glaciers. Here, you can admire the mountains of Fiordland National Park, a UNESCO World Heritage Site, from hiking trails or a boat on Milford Sound. At night, journey to the University of Canterbury's Mount John Observatory to gaze at the starry skies. You can also indulge your inner daredevil in Queenstown, explore two of the most accessible glaciers in the world on the island's west coast or sample delicious food and wine in the Marlborough region. :)</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card box shadow-lg pb-3 mb-5 bg-body card-border">
                            <img src="https://yt3.ggpht.com/a/AATXAJxJJf_AjnW4m81jEtMF_0KQAum8OK7EPOhPPkWLBw=s900-c-k-c0xffffffff-no-rj-mo" className=" review-img rounded-circle" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center "><b>Name :</b> Jack Colsey</h5>
                                <h5 className="card-title text-center opacity-75">The magnetic City of Light draws visitors from around the globe who come to see iconic attractions like the Eiffel Tower, the Louvre and the Arc de Triomphe. But what travelers really fall in love with are the city's quaint cafes, vibrant markets, trendy shopping districts and unmistakable je ne sais quoi charm. Get lost wandering along Paris' cobblestone streets, or grab a croissant and relax on the banks of the Seine for hours. If you're up for a quick daytrip, head about 15 miles southwest of the city center to another must-see attraction: the Palace of Versailles. </h5>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card box shadow-lg pb-3 mb-5 bg-body card-border">
                            <img src="http://www.toledoblade.com/image/2012/02/07/ca664,801,1689,2259/Paige-Willey.jpg" className="review-img rounded-circle" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center "><b>Name :</b> Rose fanandey  </h5>
                                <h5 className="card-title text-center opacity-75">London is a world unto itself. The eclectic neighborhoods, which are home to a blend of historical landmarks and modern-day attractions, can keep you occupied for days. If it's your first time in London, plan to visit the Tower of London, Tate Modern, Buckingham Palace or the British Museum before sitting down to a classic afternoon tea. The best time to travel to London is during the warmer months, but be warned that this is also the busiest and most expensive time of year. </h5>
                            </div>
                        </div>
                    </div>



                </div>
            </div>


        </div>



    );
};

export default AboutUs;
