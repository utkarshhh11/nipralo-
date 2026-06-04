import React from "react";

const Footer = () => {
    return (
        <>
            <div className="w-full  py-10 px-6 h-160">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-80">

                    <div className=" p-4  bg-white">
                        <h3 className="text-xl font-bold">Our <span className="text-amber-600">India</span> Offices</h3>
                        <p className="text-gray-600 mt-2">
                            Penta Freight delivers seamless <br /> logistics across India, with branches <br /> in key cities for your convenience.
                        </p>
                    </div>

                    <div className=" p-4 bg-white">
                        <h3 className="text-xl font-bold">Mumbai</h3>
                        <p className="text-gray-600 mt-2 hover:text-amber-600">
                            902, 'A' Wing, Times Square, <br />
                            Andheri-Kurla Road, Marol,<br />
                            Andheri (East), Mumbai 400 059 <br />
                            +91 22-6222-6222
                        </p>
                    </div>

                    <div className=" p-4  bg-white">
                        <h3 className="text-xl font-bold ">Ahmedabad</h3>
                        <p className="text-gray-600 mt-2  hover:text-amber-600">
                            D21 The Address, True Value<br />
                            West Gate, SG highway,<br />
                            Ahmedabad 380 009<br />
                            +91 7940227900
                        </p>
                    </div>

                    <div className=" p-4  bg-white">
                        <h3 className="text-xl font-bold">Bengaluru</h3>
                        <p className="text-gray-600 mt-2  hover:text-amber-600">
                            205, 2nd floor,<br />
                            Connection point H.A.L Airport<br />
                            Exit Road, Bangalore 560 017<br />
                            +91 80-4112-5590
                        </p>
                    </div>

                    <div className=" p-4  bg-white">
                        <h3 className="text-xl font-bold">Chennai</h3>
                        <p className="text-gray-600 mt-2  hover:text-amber-600">
                            Flat no.A1, 1st floor,<br />
                            No 24 Vembuli Amman koil Street,<br />
                            Palavanthangal Chennai- 600 114<br />
                            +91-44-22241462/ 1464
                        </p>
                    </div>

                    <div className=" p-4  bg-white">
                        <h3 className="text-xl font-bold">Delhi</h3>
                        <p className="text-gray-600 mt-2  hover:text-amber-600">
                            Penta Freight Pvt. Ltd. Khasra No.<br />
                            10/1/10/2, 11/5/1, No. 4, Samalkha,<br />
                            Old Delhi – Gurgaon Road, Opposite<br />
                            Primary School, New Delhi – 110 037<br />
                            +91 11-4078-2222
                        </p>
                    </div>

                    <div className=" p-4  bg-white">
                        <h3 className="text-xl font-bold">Hyderabad</h3>
                        <p className="text-gray-600 mt-2  hover:text-amber-600">
                            G-27 & 28, Cargo Satellite Building,<br />
                            Rajiv Gandhi International Airport,<br />
                            Shamshabad 501 218, Telangana, India<br />
                            +91 40-2400-4048                    </p>
                    </div>

                    <div className=" p-4  bg-white">
                        <h3 className="text-xl font-bold">Kolkata</h3>
                        <p className="text-gray-600 mt-2  hover:text-amber-600">
                            131, Jangalpur Road, near airport,<br />
                            Gate No. 3, Motilal Colony, P.O Rajbari,<br />
                            Kolkata 700 081, West Bengal<br />
                            +91 33-2514-7089                    </p>
                    </div>
                    <div className=" p-4  bg-white">
                        <h3 className="text-xl font-bold">Our <span className="text-amber-600">USA</span> Office</h3>
                        <p className="text-gray-600 mt-2  hover:text-amber-600">
                            Penta Freight has expanded its <br /> operations globally, beginning with  <br />the USA, to offer continuous support  <br />across continents.                   </p>
                    </div>
                    <div className=" p-4  bg-white">
                        <h3 className="text-xl font-bold">Chicago</h3>
                        <p className="text-gray-600 mt-2  hover:text-amber-600">
                            Penta Freight Pvt.Ltd 5100 Newport Dr. <br />
                            Sute 4, Rolling Meadows, IL 60008 USA <br />
                            +040 234 6559/+224 434 2154</p>
                    </div>
                </div>

            </div>
            <div className="mt-10">
                <hr className="border-gray-300 w-300 ml-50" />

                <div className="flex flex-col md:flex-row justify-between items-center py-6 text-gray-600 text-sm">
                    <p className="ml-50">
                        © 2026 Penta Freight. All Rights Reserved. Developed by Nipralo
                    </p>

                    <div className="flex gap-6 mt-4 md:mt-0 mr-40">
                        <a href="#" className="hover:text-amber-600 ">
                            Privacy Policy
                        </a>
                        <p className=" text-gray-400 ">
                              ●  
                        </p>

                        <a href="#" className="hover:text-amber-600 ">
                            Terms and Conditions
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;