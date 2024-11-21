"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import logo from "../../../public/logo.svg"

import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div
            className="hero h-[640px] md:h-[700px]"
            style={{
                backgroundImage: "url(https://www.gstatic.com/youtube/img/promos/growth/ytp_lp2_background_web_4098x2304.jpg)", opacity: 0.8
            }} data-aos="fade-down" data-aos-duration="1000">
            <div className="hero-content text-center mt-10">
                <div className=" w-[90%] mx-auto md:w-[80%] lg:w-full">
                    <div className='flex justify-center mb-7 md:mb-5'>
                        {/* <Image src="/logo.svg" width="300" height="300" alt="" className='w-56 md:w-72' /> */}
                        <Image src={logo} alt="" className='w-56 md:w-72' />
                    </div> 
                    {/* text-[1.5rem]    custom_320:text-[1.4rem]  custom_412:text-[1.5rem]    */}
                    <h1 className="mb-10 
                    custom_320:text-[1.7rem]  
                    custom_412:text-[1.7rem]    
                    md:text-[3.1rem] lg:text-[4rem] font-bold leading-tight md:leading-[1.25]">¿Por qué tus competidores están consiguiendo tus clientes y tú no?
                    </h1>

                    <p className="mb-5 text-lg leading-6 text-center">¿Sabías que el 70% de los usuarios solo hace clic en los primeros resultados de Google?</p>
                    <p className="mb-5 text-lg leading-6 text-center"> ¿Dónde estás tú? </p>


                    {/* <p className="mb-5 text-lg leading-6 md:w-[90%] mx-auto lg:w-full">70% de los usuarios hace clic en uno de los primeros cinco resultados de Google <br className='hidden lg:grid' />
                        Si no inviertes en SEO, ellos se llevan tus oportunidades</p> */}
                    {/*

                 Previous button
                 
                  <Link href="https://calendly.com/d/cqjr-4dn-xcf/presentacion-analisis-seo?month=2024-10" target='_blank'><button className="btn bg-[#0556BF] btn-lg rounded-full w-full md:w-[20rem] text-white mb-10 mt-7">Quiero mi análisis SEO GRATIS</button></Link> 
                               
                 
                 */}
                    {/* <p className="mb-5 text-lg leading-6">Or save money with a <span className='text-[#065FD4]'>family or student plan</span>  </p>

                    <p className='text-xs leading-5'>Recurring billing. <br />
                        <span className='text-[#065FD4]'> Restrictions apply.</span> </p> */}
                    <Link href="https://calendly.com/d/cmv6-9mf-gnq/presentacion-analisis-seo" target='_blank'>
                        <button
                            // className='meeting_btn'
                            className='cta-button hover:bg-[#FF9F42] rounded-full mt-7 uppercase'
                        //className="btn bg-[#FF6F00] hover:bg-[#E05B00] btn-lg px-4 pt-7 pb-11 rounded-lg w-full md:w-[21rem] text-[#FFFFFF] mb-10 mt-7 uppercase border-none"
                        >Obtén tu ANÁLISIS SEO GRATIS ahora</button></Link>

                    <small className='text-[19px] md:text-lg font-normal block my-7'>Empieza a ganar clientes hoy mismo.</small>
                </div>
            </div>

        </div>
    );
};

export default Banner;


