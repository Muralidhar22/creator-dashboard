import Image from "next/image";
import { Lato } from 'next/font/google';

const lato = Lato({ subsets: ['latin'], weight: ["100","300","400","700","900"] })

const NavBar = () => {
    
    return (
            <nav className="flex items-center justify-between">
                <header>
                    <h1 className="font-bold lg:block hidden text-2xl">Dashboard</h1>
                </header>
                <div className="flex gap-3 items-center">
                    <div className={`bg-white px-2 py-1 rounded-2xl border flex items-center ${lato.className}`}>
                        <input type="search" placeholder="Search..." className="outline-none" />
                        <Image
                            width={15}
                            height={15}
                            src="search.svg"
                            alt="search icon"
                        />
                    </div>
                    <div>
                        <Image 
                            src="notificationbell.svg"
                            width={18}
                            height={18}
                            alt="notification bell icon"
                        />
                    </div>
                    <div>
                        <Image 
                            src="user.svg"
                            width={24}
                            height={24}
                            alt="user icon"
                        />
                    </div>
                </div>
            </nav>
    )
}

export default NavBar;