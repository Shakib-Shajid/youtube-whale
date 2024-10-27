import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div
            className="hero h-[640px] md:h-[700px]"
            style={{
                backgroundImage: "url(https://www.gstatic.com/youtube/img/promos/growth/ytp_lp2_background_web_4098x2304.jpg)",
            }}>
            <div className="hero-content text-center mt-10">
                <div className=" w-[90%] mx-auto md:w-[80%] lg:w-full">
                    <div className='flex justify-center mb-5'>
                        <Image src="/logo.svg" width="300" height="300" alt="" className='w-56 md:w-72'/>
                    </div>
                    {/* text-[1.5rem]    custom_320:text-[1.4rem]  custom_412:text-[1.5rem]    */}
                    <h1 className="mb-10 
                    custom_320:text-[1.7rem]  
                    custom_412:text-[1.7rem]    
                    md:text-[3.1rem] lg:text-[4rem] font-bold leading-tight md:leading-[1.25]">
                        ¿Tus competidores están <br className='hidden lg:grid' /> robando tus clientes?
                    </h1>

                    <p className="mb-5 text-lg leading-6">El 70% de los usuarios hace clic en uno de los primeros cinco resultados de Google</p>
                    <p className="mb-5 text-lg leading-6">Si no inviertes en SEO, ellos se llevan tus oportunidades </p>


                    {/* <p className="mb-5 text-lg leading-6 md:w-[90%] mx-auto lg:w-full">70% de los usuarios hace clic en uno de los primeros cinco resultados de Google <br className='hidden lg:grid' />
                        Si no inviertes en SEO, ellos se llevan tus oportunidades</p> */}
                    <button className="btn bg-[#0556BF] btn-lg rounded-full w-full md:w-[20rem] text-white mb-10 mt-7">Quiero mi análisis SEO GRATIS</button>
                    {/* <p className="mb-5 text-lg leading-6">Or save money with a <span className='text-[#065FD4]'>family or student plan</span>  </p>

                    <p className='text-xs leading-5'>Recurring billing. <br />
                        <span className='text-[#065FD4]'> Restrictions apply.</span> </p> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;


