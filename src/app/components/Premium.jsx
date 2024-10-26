import React from 'react';

const Premium = () => {
    return (
        <div className='text-center my-20 w-[80%] mx-auto'>
            <h2 className='text-4xl md:text-5xl font-bold'>Try Premium now</h2>
            <p className='my-10 text-lg leading-6'>BDT 239.00/month • Cancel anytime</p>
            <button className="btn bg-[#0556BF] btn-lg rounded-full text-white mb-10 w-full md:w-[15rem]">Get YouTube Premium</button>
            <p className='text-xs'>Recurring billing. <br />
                <span className='text-[#065FD4]'> Restrictions apply.</span> </p>
        </div>
    );
};

export default Premium;