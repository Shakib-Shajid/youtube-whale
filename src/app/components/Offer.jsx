import Image from 'next/image';
import React from 'react';

const Offer = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-2 max-w-5xl lg:max-w-7xl custom_1080:max-w-5xl xl:max-w-6xl custom_1440:max-w-7xl custom_1600:max-w-7xl  mx-auto lg:mt-10'>
             {/* <div className='grid grid-cols-1 lg:grid-cols-4 gap-5  mx-auto'> */}

            {/* 1st */}
            <div className="card card-compact w-72 md:w-80 lg:w-96 custom_1080:w-[16rem] custom_1440:w-[20rem] custom_1600:w-80 h-full mx-auto text-center lg:text-start ">
                <figure className="w-full h-32 flex justify-center items-center">
                    <Image src="https://www.gstatic.com/youtube/img/promos/growth/premium_lp2_small_feature_Ad-free_light_tablet_600x444.webp" width="100" height="100" alt="" className="object-contain" />
                </figure>
                <div className="card-body ">
                    <p className='text-base leading-[1.38rem]'>Estar en los primeros resultados de búsqueda aumenta la exposición de la empresa</p>
                    
                </div>
            </div>

            {/* 2nd */}
            <div className="card card-compact w-72 md:w-80 lg:w-96 custom_1080:w-[16rem] custom_1440:w-[20rem] custom_1600:w-80 h-full mx-auto text-center lg:text-start">
                <figure className="w-full h-32 flex justify-center items-center">
                    <Image src="https://www.gstatic.com/youtube/img/promos/growth/premium_lp2_small_feature_DownloadMultiple_light_tablet_600x508.webp" width="100" height="100" alt="" className="object-contain" />
                </figure>
                <div className="card-body ">
                    <p className='text-base leading-[1.38rem]'>Atrae visitantes interesados en los productos o servicios ofrecidos</p>
                    
                </div>
            </div>

            {/* 3rd */}
            <div className="card card-compact w-72 md:w-80 lg:w-96 custom_1080:w-[16rem] custom_1440:w-[20rem] custom_1600:w-80 h-full mx-auto text-center lg:text-start">
                <figure className="w-full h-32 flex justify-center items-center">
                    <Image src="https://www.gstatic.com/youtube/img/promos/growth/premium_lp2_small_feature_PictureInPicture_light_tablet_600x764.webp" width="100" height="100" alt="" className="object-contain" />
                </figure>
                <div className="card-body ">
                    <p className='text-base leading-[1.38rem]'>Los usuarios tienden a confiar más en los sitios bien posicionados</p>
                    
                </div>
            </div>

            {/* 4th */}
            <div className="card card-compact w-72 md:w-80 lg:w-96 custom_1080:w-[16rem] custom_1440:w-[20rem] custom_1600:w-80 h-full mx-auto text-center lg:text-start">
                <figure className="w-full h-32 flex justify-center items-center">
                    <Image src="https://www.gstatic.com/youtube/img/promos/growth/premium_lp2_small_feature_UnlimitedMusic_light_tablet_600x505.webp" width="100" height="100" alt="" className="object-contain" />
                </figure>
                <div className="card-body ">
                    <p className='text-base leading-[1.38rem]'> Permite evaluar y ajustar estrategias para maximizar el retorno de inversión</p>
                    
                </div>
            </div>
        </div>



    );
};

export default Offer;







