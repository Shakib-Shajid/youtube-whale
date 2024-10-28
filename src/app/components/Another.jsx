import Image from 'next/image';
import React from 'react';

const Another = () => {
    return (
        <div>
            <div className='w-[90%] mx-auto flex flex-col md:flex-row my-10 '>
                <div
                    className="hero lg:w-[50%] rounded-t-3xl md:rounded-r-none md:rounded-l-3xl"
                    style={{
                        backgroundImage: "url(https://www.gstatic.com/youtube/img/promos/growth/premium_lp2_large_feature_MusicModuleSquare_text_background_tablet_1284x1875.jpg)",
                    }}>
                    <div className=' text-white  w-[80%] px-2 py-10' >
                        <Image src="/logo.svg" width="200" height="200" alt="" />
                        <h3 className='text-4xl leading-snug font-bold my-5'>¿Pero qué son SEO y SEM? </h3>
                        <p className='text-base'>El <span className='font-bold'>SEO (Search Engine Optimization)</span> mejora el posicionamiento orgánico de un sitio web mediante la optimización de contenido y estructura. Es una estrategia a largo plazo que genera tráfico
                            gratuito y construye credibilidad. El <span className='font-bold'>SEM (Search Engine Marketing)</span>, en cambio, utiliza publicidad
                            pagada para obtener resultados inmediatos y segmentados, ideal para campañas específicas y
                            lanzamientos rápidos.
                            <br /><br />
                            El <span className='font-bold'>SEO</span> es perfecto para una presencia online sostenible, mientras que el <span className='font-bold'>SEM</span> es útil para generar
                            tráfico rápido y pruebas de mercado. La combinación de ambos maximiza beneficios: el SEO
                            construye una base sólida y el SEM proporciona un impulso inmediato. Juntos, aseguran una
                            cobertura completa y optimización continua, clave para una estrategia de marketing
                            digital efectiva.
                        </p>
                    </div>
                </div>

                <Image src="https://www.gstatic.com/youtube/img/promos/growth/premium_lp2_large_feature_MusicModuleSquare_tablet_640x550.webp" width="700" height="200" alt="" className='rounded-b-3xl md:rounded-l-none md:rounded-r-3xl -mt-1 md:-mt-0 -ml-0 md:-ml-1 md:w-[50%]' />
            </div>

        </div>

    );
};

export default Another;