import { Search, UsersRound, House, ChartPie, Settings, MessageCircleQuestion, LogOut, Bell, CirclePlus} from 'lucide-react'
import React from 'react'

const iconStyle = "flex-center w-[48px] h-[48px] rounded-lg text-[#390053] hover:bg-[#390053] hover:text-stone-50 cursor-pointer";
const dashboard = () => {
  return (
    <div className='flex h-screen'>
        <header className='w-[80px] flex h-screen flex-col justify-between items-center p-5 border'>
            <div className='flex-center flex-col'>
                <h1 className='text-[24px] font-[900] text-[#6a0dad] my-4'>AJO</h1>
                <nav>
                    <ul className='flex flex-col gap-1'>
                    <li className={`${iconStyle} bg-[#f0e8f6] text-[#9b5cc0]`}><Search/></li>
                    <li className={iconStyle}><UsersRound/></li>
                    <li className={iconStyle}><House/></li>
                    <li className={iconStyle}><ChartPie/></li>
                    <li className={iconStyle}><Settings/></li>
                </ul>
                </nav>
            </div>
            <div>
                <ul className='flex flex-col gap-1'>
                    <li className={iconStyle}><MessageCircleQuestion/></li>
                    <li className={iconStyle}><LogOut/></li>
                    <li className='bg-[#ccc] h-[1px] mb-5'></li>
                </ul>
            </div>
        </header>
        <section  className='w-[100%]'>
            <div className='flex w-[100%] h-[85px] justify-between px-10 pt-5 border'>
            <h1 className='text-[20px] font-[600] mt-4'>Welcome back, Tofunmi</h1>
            <div>
                <ul className='flex-center gap-5'>
                    <li className='flex-center rounded-full overflow-hidden'><img src="/avatar.jpg" alt="avatar" className='w-[48px] h-[48px] object-cover'/></li>
                    {/* <span className="flex w-3 h-3 me-3 bg-blue-600 rounded-full ml-[-20px] mt-[25px]"></span> */}
                    <li className='w-[48px] h-[48px] flex-center bg-[#E8EAF6] text-[#390053] rounded-full hover:bg-[#390053] hover:text-stone-50 cursor-pointer' ><Bell /></li>
                </ul>
            </div>
        </div>
        <div className='flex items-center pt-5 flex-col h-[230px]'>
            <div className='flex justify-between w-[704px]'>
                <h1 className='text-[40px] font-[600] mb-4 ml-10'>&nbsp;&nbsp;Àjọ begins with trust.  
                <br/>
                Start saving with yours’</h1>
                <div className='flex-center flex-col'>
                    <img src="/plus.png" alt="plus" className='w-[56px] h-[56px]'/>
                    <p className='text-[14px] font-[600] text-[#424242] mt-2'>CREATE NEW AJO</p>
                </div>
            </div>
            <div className='flex items-center gap-2 px-4 rounded-lg w-[704px] h-[48px] bg-[#FAF9FC] shadow-md'>
                <span><Search className='w-[24px] h-[24px] text-[#ccc] '/></span>
                <input className='outline-none w-[100%] bg-transparent' type="text" placeholder='SEARCH FOR CIRCLES...'/>
            </div>
        </div>
        <div className='bg-[#F6F1FB] h-[354px] py-5 px-10'>
            <h1 className='font-[600] text-[20px]'>Recommended Circles</h1>
            <h1 className='font-[300] text-[20px]'>Circles tailored to your preferences</h1>
        </div>
        </section>
    </div>
  )
}

export default dashboard