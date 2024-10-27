import React from 'react';
import { FaUser } from "react-icons/fa";


const Price = () => {
    return (
        <div>
            <h3 className='text-center text-2xl lg:text-5xl font-bold my-10 lg:my-20'>¿Cuál es la opinión de  <br /> nuestros clientes? </h3>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-5xl custom_1080:max-w-5xl xl:max-w-6xl custom_1440:max-w-7xl custom_1600:max-w-7xl lg:max-w-7xl mx-auto'>
                {/* 1st */}
                <div className="card bg-base-100 w-72 md:w-80 lg:w-96 xl:w-80 custom_1080:w-[19rem] custom_1440:w-[24rem] custom_1600:w-96 mx-auto shadow-2xl rounded-3xl"> 
                    <div className="card-body p-5">
                        <div className='flex gap-4 items-center border-b-2 border-blue-500 rounded-2xl shadow-lg py-2 pb-4 justify-center text-center'>
                            <div className=''>
                                <h2 className=" text-xl font-bold flex items-center gap-3  justify-center text-blue-700">
                                    Laura Martínez
                                    <br />
                                </h2>
                                <p className='text-gray-600'>Directora de Marketing</p>
                            </div>
                        </div>
                        {/* <div>
                            <small className='text-[#606060] font-bold'>Monthly</small>
                            <h5 className='text-lg'>BDT 239.00/month</h5>
                            <small className='text-[#065FD4]'>Restrictions apply.</small>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn w-full rounded-full bg-[#0556BF] text-white text-lg">Get YouTube Premium</button>
                        </div> */}
                        <p className='text-center leading-[1.75]'>&quot;Desde que contratamos a Whale Lagoon, hemos visto una mejora significativa en nuestra posición
                            frente a la competencia. Su análisis detallado y estrategias personalizadas nos han permitido
                            superar a nuestros principales competidores. ¡Altamente recomendados!&quot;</p>
                    </div>
                </div>

                {/* 2nd */}
                <div className="card bg-base-100 w-72 md:w-80 lg:w-96 xl:w-80 custom_1080:w-[19rem] custom_1440:w-[24rem] custom_1600:w-96 mx-auto shadow-2xl rounded-3xl"> 
                    <div className="card-body p-5">
                        <div className='flex gap-4 items-center border-b-2 border-blue-500 rounded-2xl shadow-lg py-2 pb-4 justify-center text-center'>
                            <div className=''>
                                <h2 className=" text-xl font-bold flex items-center gap-3 justify-center text-blue-700">
                                    Carlos Gómez
                                    <br />
                                </h2>
                                <p className='text-gray-600'>Gerente de Proyectos</p>
                            </div>
                        </div>
                        {/* <div>
                            <small className='text-[#606060] font-bold'>Monthly</small>
                            <h5 className='text-lg'>BDT 449.00/month</h5>
                            <small className='text-[#606060]'>Add up to 5 family members (ages 13+) in your household. <span className='text-[#065FD4]'>Restrictions apply.</span></small>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn w-full rounded-full bg-[#b5cbe8] text-[#065FD4] text-lg">Get Family Plan</button>
                        </div> */}
                        <p className='text-center leading-loose'>&quot;Necesitábamos resultados rápidos y Whale Lagoon no nos decepcionó. En tiempo récord,
                            optimizaron nuestra campaña y logramos un ROI impresionante. Su eficiencia y rapidez son
                            inigualables.&quot;</p>
                    </div>
                </div>

                {/* 3rd */}
                <div className="card bg-base-100 w-72 md:w-80 lg:w-96 xl:w-80 custom_1080:w-[19rem] custom_1440:w-[24rem] custom_1600:w-96 mx-auto shadow-2xl rounded-3xl"> 
                    <div className="card-body p-5">
                        <div className='flex gap-4 items-center border-b-2 border-blue-500 rounded-2xl shadow-lg py-2 pb-4 justify-center text-center'>
                            <div className=''>
                                <h2 className=" text-xl font-bold flex items-center gap-3 text-blue-700">
                                    Ana Rodríguez
                                    <br />
                                </h2>
                                <p className='text-gray-600'>CEO</p>
                            </div>
                        </div>
                        {/* <div>
                            <small className='text-[#606060] font-bold'>Monthly</small>
                            <h5 className='text-lg'>BDT 139.00/month</h5>
                            <small className='text-[#606060]'>Eligible students only. Annual verification required. <span className='text-[#065FD4]'>Restrictions apply.</span></small>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn w-full rounded-full bg-[#b5cbe8] text-[#065FD4] text-lg"><RiShareBoxLine className='text-2xl' />Get Student Plan</button>
                        </div> */}
                        <p className='text-center leading-[1.75]'>&quot;Nuestra empresa estaba en un punto muerto en ventas hasta que empezamos a trabajar con
                            Whale Lagoon. En pocos meses, nuestras ventas comenzaron a crecer de nuevo gracias a sus
                            estrategias de SEO y SEM. ¡Estamos muy agradecidos!&quot;</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Price;