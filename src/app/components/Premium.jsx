import Link from 'next/link';
import React from 'react';
import { IoIosSearch } from "react-icons/io";


const Premium = () => {
    return (
        <div className='text-center my-20 w-[80%] mx-auto' data-aos="fade-down">
            <h2 className='text-4xl md:text-5xl font-bold'>¿Quieres saber cómo mejorar tu SEO gratis? </h2>
            <p className='my-10 text-lg leading-6'>Descubre en qué fallas y cómo mejorar tu SEO con nuestro análisis GRATIS. ¡Es rápido y sin compromiso!</p>
            <Link href="https://calendly.com/d/cmv6-9mf-gnq/presentacion-analisis-seo" target='_blank'><button className="cta-button rounded-full hover:bg-[#FF9F42]"><IoIosSearch className='inline text-2xl mr-2'/>Solicita tu análisis SEO GRATIS ahora</button></Link>
            {/* <p className='text-xs'>Recurring billing. <br />
                <span className='text-[#065FD4]'> Restrictions apply.</span> </p> */}
        </div>
    );
};

export default Premium;