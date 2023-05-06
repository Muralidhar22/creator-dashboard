import Image from 'next/image';
import CountUp from 'react-countup';

const NumbersCard = ({ bgColor, number, title, icon }) => {

    return (
    <>
        <div style={{ backgroundColor: bgColor }} className="rounded-md p-5 flex flex-col rounded-xl p-3">
          <div className="self-end">
            <Image
              src={icon}
              width={18}
              height={18}
              alt={title}
            />
          </div>
          <div className="flex flex-col">
              <div className="text-sm">{title}</div>
              <CountUp
                  className="font-bold text-2xl"
                  duration={3}
                  end={number}
                  />
          </div>
        </div>
    </>
  )   
}

export default NumbersCard;