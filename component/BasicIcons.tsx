import React from 'react'
import { LuSchool } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";
import { LuBoxes } from "react-icons/lu";
import { LuBrickWall } from "react-icons/lu";
import { LuBadgeInfo } from "react-icons/lu";
import { LuHouse } from "react-icons/lu";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { LuContact } from "react-icons/lu";
import { LuFolderOpen } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";
import { IoMdCheckmark } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";
import { LuMapPin } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";
import { LuAtSign } from "react-icons/lu";
import { MdOutlineWavingHand } from "react-icons/md";
import { MdErrorOutline } from "react-icons/md";
import { RiInstagramLine } from "react-icons/ri";




 export const IconsAndLabels = {
    school: LuSchool,
    cart: LuShoppingCart,
    boxes: LuBoxes,
    wall: LuBrickWall,
    about: LuBadgeInfo,
    home: LuHouse,
    work: LuBriefcaseBusiness,
    contact: LuContact,
    folder: LuFolderOpen,
    code: FaCode,
    github: FaGithub,
    live: FaRegDotCircle,
    dot: GoDot,
    filledDot: GoDotFill,
    checkMark: IoMdCheckmark,
    arrowRight: GoArrowRight,
    location:LuMapPin,
    phone: LuPhone,
    email:LuAtSign,
    hand: MdOutlineWavingHand,
    exclamation: MdErrorOutline,
    insta: RiInstagramLine,

    
    
}
type PropType = {
    label: keyof typeof IconsAndLabels;
    className?: string;
}
const BasicIcons = ({label,className}:PropType ) => {
    const Icon = IconsAndLabels[label];
  return (
    <div>
        <Icon className={className? className: 'text-xl'} />
    </div>
  )
}

export default BasicIcons
