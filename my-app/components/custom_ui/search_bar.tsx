import Image from "next/image"
import { Input } from "../ui/input"
export default function SerachBar(){
    return (
        <div className="flex text-[#1570EF] justify-center flex-col w-[574px] h-[44px] border rounded-[4px] border-[#1570EF]">
            <div className="flex ml-2  text-base"><Image 
                src="/Search.svg"
                width={24}
                height={24}
                alt="Search Bar"
            />
            <Input className=" placeholder:text-[#1570EF] focus-visible:ring-[#1570EF]" placeholder="Search product, supplier, order"/></div>
        </div>
    )
}