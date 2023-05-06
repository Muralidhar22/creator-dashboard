const Schedule = () => {
    return (
        <div className="p-8 rounded-xl bg-white p-8 rounded-xl">
          <div className="flex items-center mb-5 justify-between">
          <h1 className="font-bold text-lg">Today's schedule</h1>
            <span className="text-sm cursor-pointer opacity-40">
                See All&nbsp;
                <span className="font-bold">&gt;</span>
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <div className="pl-3 border-l-[5px] border-[#9BDD7C]">
                <h3 className="opacity-60 font-semibold">Meeting with suppliers from Kuta Bali</h3>
                <span className="text-sm opacity-60">14.00-15.00</span>
                <p className="text-sm opacity-60">at Sunset Road, Kuta, Bali</p>
            </div>
            <div className="pl-3 border-l-[5px] border-[#6972C3]">
                <h3 className="opacity-60 font-semibold">Check operation at Giga Factory 1</h3>
                <span className="text-sm opacity-60">18.00-20.00</span>
                <p className="text-sm opacity-60">at Central Jakarta</p>
            </div>
          </div>
        </div>
    )
}

export default Schedule;