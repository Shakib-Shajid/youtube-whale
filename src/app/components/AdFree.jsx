import Image from 'next/image';
import React from 'react';

const AdFree = () => {
    return (
        <div className='my-24 lg:mb-10'>
            <h2 
                className='text-3xl md:text-5xl font-bold text-center w-[90%] mx-auto md:w-full' 
                data-aos="fade-down"
            >
                De la calle principal a la primera página de Google
            </h2>

            {/* Section 1 */}
            <section 
                className='flex flex-col-reverse md:flex-row gap-5 md:gap-10 items-center justify-evenly w-[80%] mx-auto mt-10' 
                data-aos="fade-up"
            >
                <div className='md:w-[50%]'>
                    <h3 className='font-bold text-3xl md:text-5xl'>El auge del comercio electrónico</h3>
                    <p className='text-[#606060] my-5 text-lg leading-6'>
                        El comercio electrónico ha superado a las ventas en tiendas físicas, 
                        con más del <span className='font-bold'>60% de las grandes empresas</span> generando la mayor parte de sus ingresos online. 
                        La comodidad y accesibilidad del comercio digital, aceleradas por la pandemia, 
                        han sido claves en este cambio.
                    </p>
                </div>
                <div className='md:w-[50%]'>
                    <Image 
                        src="/adFree_1.png" 
                        width="4000" 
                        height="1000" 
                        alt="E-commerce growth graph" 
                        className='rounded-3xl'
                    />
                </div>
            </section>

            {/* Section 2 */}
            <section 
                className='flex flex-col md:flex-row gap-5 md:gap-10 items-center justify-evenly w-[80%] mx-auto' 
                data-aos="fade-right"
            >
                <div className='md:w-[50%]'>
                    <Image 
                        src="/adFree_2.png" 
                        width="4000" 
                        height="1000" 
                        alt="Digital vs physical store illustration" 
                        className='rounded-3xl'
                    />
                </div>
                <div className='md:w-[50%]'>
                    <h3 className='font-bold text-3xl md:text-5xl'>Del escaparate físico al digital</h3>
                    <p className='text-[#606060] my-5 text-lg leading-6'>
                        Antes, las empresas competían por tener la mejor tienda en la calle más concurrida. 
                        Hoy, <span className='font-bold'>aparecer en los primeros resultados de Google</span> 
                        es el nuevo escaparate. Esto ofrece a pequeños y medianos negocios la oportunidad de 
                        competir con grandes marcas, atrayendo miles de visitantes a sus sitios web.
                    </p>
                </div>
            </section>

            {/* Section 3 */}
            <section 
                className='flex flex-col-reverse md:flex-row gap-5 md:gap-10 items-center justify-evenly w-[80%] mx-auto' 
                data-aos="fade-down"
            >
                <div className='md:w-[50%]'>
                    <h3 className='font-bold text-3xl md:text-5xl'>SEO y SEM: Herramientas clave</h3>
                    <p className='text-[#606060] my-5 text-lg leading-6'>
                        Para lograr esta visibilidad, las empresas utilizan <span className='font-bold'>SEO</span> 
                        (optimización para motores de búsqueda) y <span className='font-bold'>SEM</span> 
                        (marketing en motores de búsqueda). Por ejemplo, con <span className='font-bold'>SEO</span>, 
                        un negocio local puede aparecer primero al buscar 
                        <em> &quot;pastelería artesanal&quot; </em> en su ciudad. Mientras tanto, con 
                        <span className='font-bold'> SEM</span>, puede pagar para asegurarse de estar en la parte superior cuando 
                        alguien busque <em>&quot;tartas de boda&quot;</em>. Ambas estrategias son esenciales para atraer y convertir 
                        visitantes en clientes.
                    </p>
                </div>
                <div className='md:w-[50%]'>
                    <Image 
                        src="/adFree_3.png" 
                        width="4000" 
                        height="1000" 
                        alt="SEO vs SEM infographic" 
                        className='rounded-3xl'
                    />
                </div>
            </section>
        </div>
    );
};

export default AdFree;
