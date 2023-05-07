import Chart from "@/components/Chart";
import NavBar from "@/components/NavBar";
import NumbersCard from "@/components/NumbersCard";
import PieChart from "@/components/PieChart";
import Schedule from "@/components/Schedule";
import SideNav from "@/components/SideNav";
import { Lato } from 'next/font/google';

const lato = Lato({ subsets: ['latin'], weight: ["100","300","400","700","900"] })

const Dashboard = () => {
    return (
        <>
           <div className="lg:grid lg:grid-cols-[0.2fr_1fr] gap-16 p-2 md:p-5 lg:p-10 min-h-screen">
            <div className="hidden lg:block">   
                <SideNav /> 
            </div>
                <div>
                    <div className="mb-8 flex md:block gap-2">
                        <SideNav />
                        <NavBar />
                    </div>
                    <div className={`grid grid-cols-1 sm:grid-cols2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-8 ${lato.className}`}>
                        <NumbersCard 
                            bgColor="#DDEFE0"
                            title="Total Revenues"
                            number={2129430}
                            icon="revenue.svg"
                        />
                        <NumbersCard 
                            bgColor="#F4ECDD"
                            title="Total Transactions"
                            number={1520}
                            icon="transaction-dark.svg"
                        />
                        <NumbersCard 
                            bgColor="#EFDADA"
                            title="Total Likes"
                            number={9721}
                            icon="likes.svg"
                        />
                        <NumbersCard
                            bgColor="#DEE0EF"
                            title="Total Users"
                            number={892}
                            icon="userscount.svg"
                        />
                    </div>
                    <div className="mb-8">
                     <Chart />
                    </div>
                    <div className="grid lg:grid-cols-[1fr_1fr] grid-rows-[300px] gap-10">
                        <PieChart />
                        <Schedule />
                    </div>
                </div>
           </div>
        </>
    )
}

export default Dashboard;