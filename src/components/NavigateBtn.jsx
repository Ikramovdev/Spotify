import React from 'react'
import { ArrowIcon } from '../assets/images/Icon'
import { useNavigate } from 'react-router-dom'

const NavigateBtn = () => {
    const navigate = useNavigate()
    return (
        <div className='flex items-center space-x-[22px] py-5 px-10'>
            <button onClick={() => navigate(-1)} className='navigateBtn w-[40px] h-[40px] rounded-full flex items-center justify-center hover:scale-[1.3] duration-300'><ArrowIcon /></button>
            <button onClick={() => navigate(+1)} className='navigateBtn w-[40px] h-[40px] rounded-full flex items-center justify-center rotate-[180deg] hover:scale-[1.3] duration-300'><ArrowIcon /></button>
        </div>
    )
}

export default NavigateBtn