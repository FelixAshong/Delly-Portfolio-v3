"use client"

import { motion } from "framer-motion"
import Div from "./div"
import CountUp from "react-countup"

const achievements = [
  {
    value: 10,
    suffix: "+",
    text: "Projects Completed",
  },
  {
    value: 15,
    suffix: "+",
    text: "Happy Clients",
  },
  {
    value: 3,
    suffix: "+",
    text: "Years Experience",
  },
  {
    value: 100,
    suffix: "%",
    text: "Client Satisfaction",
  },
]

const Achievements = () => {
  return (
    <div className="mt-[100px]">
      <Div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-[20px] md:gap-[40px]">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="w-full h-[180px] flex flex-col justify-center items-center gap-2 bg-[#1A1A1A] rounded-[20px] border border-[#252525] p-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-[40px] md:text-[50px] 2xl:text-[60px] font-oswald text-primary">
              <CountUp end={achievement.value} duration={3} enableScrollSpy={true} scrollSpyDelay={0.5} />
              {achievement.suffix}
            </div>
            <div className="text-[14px] md:text-[16px] 2xl:text-[18px] text-center text-[#CCCCCC]">
              {achievement.text}
            </div>
          </motion.div>
        ))}
      </Div>
    </div>
  )
}

export default Achievements

