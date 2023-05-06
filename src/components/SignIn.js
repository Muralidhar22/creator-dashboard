import Link from "next/link";
import { Lato } from 'next/font/google';
import Image from "next/image";

const lato = Lato({ subsets: ['latin'], weight: ["100","300","400","700","900"] })

const SignIn = () => {
    return (
        <div className="w-96 p-2">
            <h1 className="font-bold text-2xl mb-1 flex justify-between items-center">
               <span>Sign In</span>
               <Link className="text-sm font-medium text-[#346BD5]" href="/dashboard">Link to dashboard &gt;</Link>
            </h1>
            <span className={`mb-3 block ${lato.className}`}>Sign in to your account</span>
            <div className={`${lato.className} flex-col md:flex-row mb-5 gap-5 md:gap-0 w-full flex justify-around items-center`}>
                <button className="bg-white cursor-pointer rounded-3xl px-3 p-2 flex items-center gap-3">
                    <span>
                        <Image
                            src="google-icon.svg"
                            width={12}
                            height={12}
                            alt="google icon"
                        />
                    </span>
                    <span className="opacity-50 text-sm">
                    Sign in with Google
                        
                    </span>
                </button>
                <button className="cursor-pointer bg-white rounded-3xl p-2 px-3 flex items-center gap-3">
                    <span>
                        <Image
                            src="apple-icon.svg"
                            width={12}
                            height={12}
                            alt="google icon"
                        />
                    </span>
                    <span className="opacity-50 text-sm">
                    Sign in with Apple
                        
                    </span>
                </button>
            </div>
            <div className={`bg-white p-8 rounded-xl ${lato.className}`}>
                <form onSubmit={(e) => e.preventDefault()}>
                    <label className="block font-bold mb-1">Email address</label>
                    <input type="email" className="block w-full mb-5 p-2 rounded-xl bg-gray-200 outline-none" />
                    <label className="block mb-1 font-bold">Password</label>
                    <input type="password" className="block w-full mb-5 p-2 rounded-xl bg-gray-200 outline-none"/>
                    <Link className="text-[#346BD5]" href="#">Forgot password?</Link>
                    <button className="block w-full p-3 rounded-md bg-black text-white font-bold text-xl mt-7">Sign In</button>
                </form>
            </div>
            <p className={`${lato.className} mt-7 text-center`}>
               <span className="opacity-70">Don&apos;t have an account?</span>&nbsp;
                <span>
                    <Link className="text-[#346BD5]" href="#">Register here</Link>
                </span>
            </p>
        </div>
    )
}

export default SignIn;