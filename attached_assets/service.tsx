import Div from "./div"

interface ServiceProps {
  num: string
  title: string
  desc: string
  data: string[]
}

const Service = ({ num, title, desc, data }: ServiceProps) => {
  return (
    <Div animate className="text-white border-b border-[#333333] flex flex-col gap-2 md:gap-4 2xl:gap-5 pb-7">
      <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px]">{num}.</div>
      <div className="text-[28px] 2xl:text-[34px] text-primary uppercase">{title}</div>
      <div className="hidden md:flex flex-wrap gap-[10px]">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#252525] rounded-lg py-[10px] px-[17px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px]"
          >
            {item}
          </div>
        ))}
      </div>
      <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-[#CCCCCC]">{desc}</div>
    </Div>
  )
}

export default Service

