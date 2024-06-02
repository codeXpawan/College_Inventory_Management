import Image from "next/image"
import { Input } from "@/components/ui/input"
export default function search_bar(){
    return (
        <div className="flex text-[#1570EF] justify-center flex-col w-[574px] h-[44px] border rounded-[4px] border-[#1570EF]">
            <div className="flex ml-2  text-base"><Image 
                src="/Search.svg"
                width={24}
                height={24}
                alt="Search Bar"
            />
            <input className=" placeholder:text-[#1570EF] h-full w-full ml-2 focus:outline-none" placeholder="Search product, supplier, order"/></div>
        </div>
    )
}