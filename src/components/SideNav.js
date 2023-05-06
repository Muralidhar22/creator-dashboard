import Image from "next/image";
import Link from "next/link";


const SideNav = () => {
    return (
          <>
            <div className="lg:hidden absolute top-10 left-10 z-30">
                <Image
                    src="https://cdn-icons-png.flaticon.com/512/7710/7710488.png"
                    width={32}
                    height={32}
                    alt="hamburger icon"
                />
            </div>
            <aside className="bg-black fixed top-0 left-0 h-full z-50 lg:z-0 lg:relative text-white lg:rounded-3xl lg:p-12 flex flex-col justify-between">
                <div className="flex flex-col gap-10">
                    <Link href="/" className="text-4xl font-bold">Board.</Link>
                    <ul className="flex flex-col gap-7">
                        <li className="cursor-pointer text-lg items-center flex gap-5">
                            <span className="w-4">
                                <Image
                                    src="dashboard.svg"
                                    width={18}
                                    height={18}
                                    alt="dashboard icon"
                                />
                            </span>
                            <span className="font-bold">
                                Dashboard
                            </span>
                        </li>
                        <li className="cursor-pointer text-lg items-center flex gap-5">
                        <span className="w-4">
                                <Image
                                    src="transactions.svg"
                                    width={18}
                                    height={18}
                                    alt="transaction icon"
                                />
                            </span>
                            <span>
                                Transactions
                            </span>
                            
                        </li>
                        <li className="cursor-pointer text-lg items-center flex gap-5">
                        <span className="w-4">
                                <Image
                                    src="schedule.svg"
                                    width={18}
                                    height={18}
                                    alt="schedule icon"
                                />
                            </span>
                            <span>
                                Schedules
                            </span>
                            
                        </li>
                        <li className="cursor-pointer text-lg items-center flex gap-5">
                            <span className="w-4">
                                <Image
                                    src="user.svg"
                                    width={18}
                                    height={18}
                                    alt="user icon"
                                />
                            </span>
                            <span>
                                Users
                            </span>
                            </li>
                        <li className="cursor-pointer text-lg font-normal items-center flex gap-5">
                        <span className="w-4">
                                <Image
                                    src="settings.svg"
                                    width={18}
                                    height={18}
                                    alt="setting icon"
                                />
                            </span>
                            <span>
                                Settings
                            </span>
                            
                        </li>
                    </ul>
                </div>
                <div className="text-sm flex flex-col gap-2">
                    <div>Help</div>
                     <div>Contact Us</div>
                </div>
            </aside>
        </>
    )
}

export default SideNav;