import Image from 'next/image';
import React from 'react';

const AdFree = () => {
    return (
        <div className='my-24 lg my-20:lg:my-36'>
            <h2 className='text-4xl md:text-5xl font-bold text-center w-[90%] mx-auto md:w-full'>De la calle principal a la primera página de Google</h2>

            <section className='flex flex-col-reverse md:flex-row gap-10 items-center justify-evenly w-[80%] mx-auto my-20'>
                <div className='md:w-[50%]'>
                    <h3 className='font-bold text-3xl md:text-5xl'>El auge del comercio electrónico </h3>
                    <p className='text-[#606060] my-5 text-lg leading-6'>El comercio electrónico ha superado a las ventas en tiendas físicas, con más del 60% de las
                        grandes empresas generando la mayor parte de sus ingresos online. La comodidad y accesibilidad
                        del comercio digital, aceleradas por la pandemia, han sido claves en este cambio.
                    </p>
                </div>
                <div className='md:w-[50%]'>
                    <Image src="https://www.gstatic.com/youtube/img/promos/growth/premium_lp2_large_feature_AdFree_light_tablet_632x455.webp" width="1300" height="1200" alt="" />
                </div>
            </section>


            <section className='flex flex-col md:flex-row gap-10 items-center justify-evenly w-[80%] mx-auto my-20'>

                <div className='md:w-[50%]'>
                    <Image src="https://www.gstatic.com/youtube/img/promos/growth/premium_lp2_large_feature_UnlimitedDownloads_light_tablet_632x615.webp" width="1500" height="1200" alt="" />
                </div>

                <div className='md:w-[50%]'>
                    <h3 className='font-bold text-3xl md:text-5xl'>Del escaparate físico al digital </h3>
                    <p className='text-[#606060] my-5 text-lg leading-6'>Antes, las empresas competían por tener la mejor tienda en la calle más concurrida. Hoy, la lucha es por aparecer en los primeros resultados de Google. La visibilidad online es el nuevo escaparate,
                        atrayendo a miles de visitantes a los sitios web.</p>
                </div>
            </section>


            <section className='flex flex-col-reverse md:flex-row gap-10 items-center justify-evenly w-[80%] mx-auto my-20'>
                <div className='md:w-[50%]'>
                    <h3 className='font-bold text-3xl md:text-5xl'>SEO y SEM: Herramientas clave </h3>
                    <p className='text-[#606060] my-5 text-lg leading-6'>Para lograr esta visibilidad, las empresas utilizan SEO (optimización para motores de búsqueda) y SEM (marketing en motores de búsqueda). El SEO mejora el posicionamiento orgánico, mientras
                        que el SEM utiliza publicidad pagada. Ambas estrategias son esenciales para atraer y convertir
                        visitantes en clientes.</p>
                </div>

                <div className='md:w-[50%]'>
                    <Image src="https://www.gstatic.com/youtube/img/promos/growth/premium_lp2_large_feature_BackgroundPlay_light_tablet_632x624.webp" width="1500" height="1200" alt="" />
                </div>
            </section>

        </div>
    );
};

export default AdFree;