import React from 'react';
import { FaUser } from "react-icons/fa";


const Price = () => {
    return (
        <div data-aos="fade-down">
            <h3 className='text-center text-2xl lg:text-5xl font-bold my-10 lg:my-20'>Nuestros clientes hablan: <br /> Esta podría ser tu opinión <br className=' md:hidden' />muy pronto </h3>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-5xl custom_1080:max-w-5xl xl:max-w-6xl custom_1440:max-w-7xl custom_1600:max-w-7xl lg:max-w-7xl mx-auto'>
                {/* 1st */}
                <div className="card bg-base-100 w-72 md:w-80 lg:w-96 xl:w-80 custom_1080:w-[19rem] custom_1440:w-[24rem] custom_1600:w-96 mx-auto shadow-2xl rounded-3xl">
                    <div className="card-body p-5">
                        <div className='flex gap-4 items-center border-b-2 border-blue-500 rounded-2xl shadow-lg py-2 pb-4 justify-center text-center'>
                            <div className=''>
                                <h2 className=" text-xl font-bold flex items-center gap-3  justify-center text-blue-700">
                                    Clara Méndez
                                    <br />
                                </h2>
                                <p className='text-gray-600'>Fundadora de tienda online </p>
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
                        <p className='text-center leading-[1.75]'>&quot;Mi tienda online estaba estancada hasta que contacté con Whale Lagoon. No solo mejoraron mi posicionamiento en Google, sino que también me ayudaron a entender cómo atraer a los clientes correctos. El cambio ha sido espectacular.
                            &quot;</p>
                    </div>
                </div>

                {/* 2nd */}
                <div className="card bg-base-100 w-72 md:w-80 lg:w-96 xl:w-80 custom_1080:w-[19rem] custom_1440:w-[24rem] custom_1600:w-96 mx-auto shadow-2xl rounded-3xl">
                    <div className="card-body p-5">
                        <div className='flex gap-4 items-center border-b-2 border-blue-500 rounded-2xl shadow-lg py-2 pb-4 justify-center text-center'>
                            <div className=''>
                                <h2 className=" text-xl font-bold flex items-center gap-3 justify-center text-blue-700">
                                    Pablo Rodríguez
                                    <br />
                                </h2>
                                <p className='text-gray-600'>Gerente de Marketing</p>
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
                        <p className='text-center leading-loose'>&quot;Desde que comenzamos a trabajar con Whale Lagoon, nuestro tráfico web ha crecido un 120% en solo tres meses. La profesionalidad y el enfoque estratégico del equipo son impresionantes. ¡Recomendados al 100%!&quot;</p>
                    </div>
                </div>

                {/* 3rd */}
                <div className="card bg-base-100 w-72 md:w-80 lg:w-96 xl:w-80 custom_1080:w-[19rem] custom_1440:w-[24rem] custom_1600:w-96 mx-auto shadow-2xl rounded-3xl">
                    <div className="card-body p-5">
                        <div className='flex gap-4 items-center border-b-2 border-blue-500 rounded-2xl shadow-lg py-2 pb-4 justify-center text-center'>
                            <div className=''>
                                <h2 className=" text-xl font-bold flex items-center gap-3 text-blue-700">
                                    Diana Carrión
                                    <br />
                                </h2>
                                <p className='text-gray-600'>CEO y fundadora</p>
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
                        <p className='text-center leading-[1.75]'>&quot;Estoy muy contenta con el equipo que gestiona mi estrategia digital 😊 gracias por ayudarme a seguir creciendo.&quot;</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Price;