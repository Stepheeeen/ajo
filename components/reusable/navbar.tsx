import { Bell } from "lucide-react"

// TopBar Component
export const Navbar = ({ userName = "Tofunmi" }) => {
    return (
        <div className='flex md:h-[85px] justify-between items-center px-6 md:px-8 pt-5 md:border w-full'>
            <h1 className='text-[22px] font-[600] mt-4'><span className="font-medium md:font-[600]">Welcome back,</span> {userName}</h1>
            <div>
                <ul className='flex-center gap-5'>
                    <li className='flex-center rounded-full overflow-hidden'>
                        <img src="/avatar.jpg" alt="avatar" className='w-[48px] h-[48px] object-cover' />
                    </li>
                    {/* <span className="flex w-3 h-3 me-3 bg-blue-600 rounded-full ml-[-20px] mt-[25px]"></span> */}
                    <li className='w-[48px] h-[48px] flex-center bg-[#E8EAF6] text-[#390053] rounded-full hover:bg-[#390053] hover:text-stone-50 cursor-pointer'>
                        <Bell />
                    </li>
                </ul>
            </div>
        </div>
    )
}