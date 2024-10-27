import React from 'react';

const FAQ = () => {
    return (
        //  
        <div className='bg-stone-100 w-[96%] lg:w-[80%] rounded-3xl mx-auto my-10 py-5' data-aos="flip-left">
            <h3 className='text-3xl md:text-5xl font-bold py-5 w-[88%] lg:w-[96%] mx-auto'>Preguntas frecuentes</h3>
            <div className='w-[96%] lg:w-[98%] mx-auto rounded-2xl '>
                <div className="collapse collapse-arrow mb-5">
                    <input type="checkbox" name="my-accordion-2" />
                    <div className="collapse-title text-base md:text-lg font-bold">¿Cuánto tiempo tardaré en ver resultados con SEO? </div>
                    <div className="collapse-content text-[#606060]">
                        <p>Los resultados de SEO pueden tardar de 3 a 6 meses en ser visibles, ya que es una estrategia a
                            largo plazo que requiere tiempo para construir autoridad y relevancia en los motores de búsqueda.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow mb-5">
                    <input type="checkbox" name="my-accordion-2" />
                    <div className="collapse-title text-base md:text-lg font-bold">¿Cuándo debería usar SEM en lugar de SEO? </div>
                    <div className="collapse-content text-[#606060]">
                        <p>El SEM es ideal para generar tráfico rápido, como en el lanzamiento de un nuevo producto o una
                            promoción temporal. Es útil cuando se necesitan resultados inmediatos y segmentados.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow mb-5">
                    <input type="checkbox" name="my-accordion-2" />
                    <div className="collapse-title text-base md:text-lg font-bold">¿Es mejor usar SEO o SEM? </div>
                    <div className="collapse-content text-[#606060]">
                        <p>No hay una respuesta única; ambos tienen sus beneficios. El SEO es mejor para una estrategia a
                            largo plazo y sostenible, mientras que el SEM es útil para obtener resultados rápidos. La
                            combinación de ambos maximiza los beneficios.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow mb-5">
                    <input type="checkbox" name="my-accordion-2" />
                    <div className="collapse-title text-base md:text-lg font-bold">¿Cuánto cuesta implementar SEO y SEM?</div>
                    <div className="collapse-content text-[#606060]">
                        <p>El coste del SEO varía según la complejidad del sitio y la competencia, pero generalmente implica
                            una inversión inicial y mantenimiento continuo. El SEM, por otro lado, requiere un presupuesto
                            constante para los anuncios, con costes que dependen de la competencia por las palabras clave y
                            la duración de las campañas.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow mb-5">
                    <input type="checkbox" name="my-accordion-2" />
                    <div className="collapse-title text-base md:text-lg font-bold">¿Cómo se mide el éxito de SEO y SEM? </div>
                    <div className="collapse-content text-[#606060]">
                        <p>El éxito del SEO se mide mediante métricas como el tráfico orgánico, la posición en los resultados
                            de búsqueda y las conversiones. Para el SEM, se utilizan métricas como el CTR (Click-Through
                            Rate), el CPC (Cost Per Click) y el ROI (Return on Investment). Ambas estrategias deben ser
                            monitoreadas y ajustadas regularmente para maximizar su efectividad.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow mb-5">
                    <input type="checkbox" name="my-accordion-2" />
                    <div className="collapse-title text-base md:text-lg font-bold">¿Puedo hacer SEO yo mismo? </div>
                    <div className="collapse-content text-[#606060]">
                        <p>El SEO incluye aspectos técnicos como la optimización de la velocidad del sitio, la estructura del
                            código, la configuración del servidor y la implementación de etiquetas y metadatos. Estos
                            elementos requieren conocimientos especializados en desarrollo web y análisis de datos, por lo
                            que es recomendable contar con profesionales experimentados para obtener los
                            mejores resultados.</p>
                    </div>
                </div>
                {/* <div className="collapse mb-5">
                    <input type="checkbox" name="my-accordion-2" />
                    <div className="collapse-title text-sm font-bold leading-6">Have other questions? <br />
                        Visit the <span className='text-[#065FD4]'>YouTube Help Center</span></div>

                </div> */}
            </div>
        </div >
    );
};

export default FAQ;