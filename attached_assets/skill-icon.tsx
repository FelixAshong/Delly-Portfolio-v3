import Image from "next/image"

interface SkillIconProps {
  path: string
  alt?: string
}

const SkillIcon = ({ path, alt = "Skill" }: SkillIconProps) => {
  return (
    <div className="flex items-center justify-center w-[70px] md:w-[90px] 2xl:w-[110px] h-[70px] md:h-[90px] 2xl:h-[110px] rounded-full bg-[#292929] hover:bg-[#333] transition-colors">
      <Image
        src={path || "/placeholder.svg"}
        alt={alt}
        width={58}
        height={58}
        className="w-[34px] md:w-[44px] 2xl:w-[58px]"
      />
    </div>
  )
}

export default SkillIcon

