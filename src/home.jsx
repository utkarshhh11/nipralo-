import React from 'react'
import Navbar from './components/navbar.jsx'
import plane from './assets/plane.png'
import bg from './assets/bg.png'
import ScrollStack from "./components/ScrollStack.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAward,
    faMedal,
    faTruckFast
} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import Carousel from "./components/Carousel.jsx";
import {CardHoverEffectDemo} from "./components/CardHoverEffectDemo.jsx"
import Footer from './components/footer.jsx'
import TestimonialsSection from "./components/TestimonialsSection.jsx";
import map from '../src/assets/map.webp'




const home = () => {
    return (
        <div>
            <Navbar />
            <div className='h-216 w-screen '>
                <video
                    src="https://www.pexels.com/download/video/37847138/"
                    autoPlay
                    loop
                    muted
                ></video>
            </div>
            <div className='h-200 w-screen bg-cover  bg-center justify-items-center pt-7' style={{ backgroundImage: `url(${plane})` }}>

                <div className="h-50 w-200  flex justify-start items-center">
                    <div className=" h-50 w-50 flex-row">

                        <div className=' h-25 font-bold text-amber-600 text-center pt-13 border-b-4 border-amber-600 '>
                            ABOUT US
                        </div>
                        <div className='h-25 font-bold text-amber-600 text-center  pt-5'>
                            PENTA FREIGHT
                        </div>
                    </div>

                    <div className="ml-4 text-[19px] text-gray-400">
                        <p>Penta Freight provides reliable <span className='font-bold text-black'>logistics solutions</span>, specializing in <br /> temperature-sensitive shipments. We  ensure safe, <span className='font-bold text-black'>on-time delivery</span> <br /> worldwide. Trust us for seamless supply chain management.</p>
                    </div>
                </div>
            </div>
            <div className='h-70 w-screen flex-row justify-center text-center' style={{ backgroundImage: `url(${bg})` }}>

                <h4 className='text-amber-600 text-3xl font-bold pt-10'>Our Philosophy</h4>
                <p className='text-white pt-10 text-16'>Customer satisfaction drives everything we do. Every shipment is a promise, and we deliver it with precision, care, and <br />professionalism. With expert resources,  we ensure safe, timely transport, building lasting partnerships founded on trust and <br /> excellence.
                </p>

                <button className='text-white h-9 w-25 text-20 font-bold rounded-sm bg-amber-600 mt-10'>Read More</button>


            </div>
            <div className='h-300 w-screen bg-white'>
                <div className='h-65 w-screen  flex col-auto'>
                    <div className='h-65 w-200  flex-row '>

                        <div className='h-16 w-200  flex justify-center gap-2 mt-4 pt-6'>
                            <p className='pt-1.5  ml-15'>●</p>
                            <span className='h-10 w-30 border-2 border-gray-200 rounded-4xl text-[22px] pl-5 mr-70'>
                                Services</span>

                        </div>
                        <div className=''>
                            <p className='ml-55 mt-1 text-[40px]'>Seamless Solutions for <br />
                                <p className='text-gray-400 mt-1 text-[40px]'>Every Logistics Need</p></p>

                        </div>
                    </div>

                    <div className='flex items-center'>
                        <p className='ml-27 mb-9 '>Tailored logistics solutions for timely, cost-effective deliveries <br />across air, sea, and multimodal transport.</p>
                    </div>

                </div>

                <ScrollStack />

                <div className='h-50 w-screen bg-white flex justify-center '>
                    <div className="h-70 w-80 border-r-2 border-gray-200 flex flex-col pt-5">

                        <div className="flex items-center gap-2 mt-4">
                            <p className="text-xl ml-4">●</p>

                            <span className="h-10 w-30 border-2 border-gray-200 rounded-full flex items-center justify-center text-[22px]">
                                Why Us
                            </span>
                        </div>

                        <p className="mt-4 px-4 text-4xl">
                            Why choose <br /> <span className='text-4xl text-gray-500 '>Penta Freight.</span>
                        </p>

                    </div>
                    <div className='h-70 w-80 border-r-2 border-gray-200'>

                        <div className='h-25 w-80  pt-9 pl-7'>
                            <FontAwesomeIcon icon={faMedal} className="text-5xl" />
                        </div>
                        <div className='pl-10'>
                            <p className='text-black text-[20px]'>Comprehensive Solutions</p>
                            <p className=' text-gray-400'>Full-spectrum logistics services <br /> including air, sea, and multimodal <br />transport for seamless handling <br /> of your cargo.</p>
                        </div>
                    </div>
                    <div className='h-70 w-80 border-r-2 border-gray-200'>

                        <div className='h-25 w-80  pt-9 pl-7'>
                            <FontAwesomeIcon icon={faAward} className="text-5xl" />
                        </div>
                        <div className='pl-10'>
                            <p className='text-black text-[20px]'>Expertise and Experience</p>
                            <p className=' text-gray-400'>Over 30+ years of experience <br />with skilled customs agents <br /> ensuring accurate clearance and <br /> secure delivery.</p>
                        </div>
                    </div>
                    <div className='h-70 w-80 '>

                        <div className='h-25 w-80  pt-9 pl-10'>
                            <FontAwesomeIcon icon={faTruckFast} className="text-5xl" />
                        </div>
                        <div className='pl-10'>
                            <p className='text-black text-[20px]'>State-of-the-Art Facilities</p>
                            <p className=' text-gray-400'>Advanced transit warehouse with <br /> specialized storage and a fleet of <br /> reefer and general trucks for <br />efficient nationwide transport.</p>
                        </div>
                    </div>
                </div>
                <div className=' mt-26 h-100 w-screen flex flex-row' style={{ backgroundImage: `url(${bg})` }}>

                    <div className=' ml-40 h-100 w-150  '>
                        <h4 className='text-amber-600 text-3xl font-bold pt-30'>Our Achievements</h4>
                        <p className='text-white pt-10 text-16'>Over 31+ years of excellence, trusted globally, delivering reliable <br /> logistics solutions with precision.
                        </p>
                    </div>
                    <div className="h-100  w-160  grid grid-cols-2 gap-4 pt-10">
                        <div >
                            <h1 className='text-gray-300 text-4xl mt-3 font-bold'>
                                7+
                            </h1>
                            <p className='text-gray-300 text-[24px]'>Strategic Domestic Offices</p>
                        </div>

                        <div>
                            <h1 className='text-gray-300 text-4xl mt-3 font-bold'>USA</h1>
                            <p className='text-gray-300 text-[24px]'>Global presence</p>
                        </div>

                        <div>
                            <h1 className='text-gray-300 text-4xl mt-3'>200+</h1>
                            <p className='text-gray-300 text-[24px]'>Logistics Experts</p>
                        </div>

                        <div >
                            <h1 className='text-gray-300 text-4xl mt-3'>50+</h1>
                            <p className='text-gray-300 text-[24px]'>Awards & Accolades</p>
                        </div>
                    </div>
                </div>

                <div>
                    
                </div>

                <div>
                    <TestimonialsSection/>
                </div>
                

                <div className='h-130 w-screen flex-row justify-center text-center' style={{ backgroundImage: `url(${bg})` }}>
                    <h4 className='text-amber-600 text-3xl font-bold pt-10'> Certifications</h4>
                    <p className='text-white pt-10 text-16'>Certified excellence, ensuring compliance, quality, and global logistics reliability.
                    </p>
                    <div className='h-70 w-280 ml-50 mt-10  '>
                        <Carousel />
                    </div>
                </div>


                <div className='h-30 w-screen bg-white'>

                    <div className='h-65 w-screen  flex-row '>

                        <div className='h-16 w-200  flex justify-center gap-2 mt-4 pt-6'>
                            <p className='pt-1.5 '>●</p>
                            <span className='h-10 w-30 border-2 border-gray-200 rounded-4xl text-[22px] pl-5 mr-85'>
                                Awards</span>

                        </div>
                        <div className=''>
                            <p className='ml-40 mt-1 text-[40px]'>Proudly Recognized with Prestigious 
                                <p className='text-gray-400 mt-1 text-[40px]'>Awards and Accolades.</p></p>

                        </div>
                        
                    </div>
                </div>
                <div className='  mt-30 '>
                    <CardHoverEffectDemo/>
                </div>
                 <div className=' mt-10 h-190 w-screen flex-row justify-center text-center' style={{ backgroundImage: `url(${bg})` }}>

                <h4 className='text-amber-600 text-3xl font-bold pt-10'>Our Global Footprint</h4>

                <img src={map} alt=""  className='h-160 ml-25 w-300'/>
            </div>

          <div className='h-200 w-screen'>
              <Footer/>
          </div>


            </div>
           
        </div>
    )
}

export default home
