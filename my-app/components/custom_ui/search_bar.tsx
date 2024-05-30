import Image from "next/image"
import { Input } from "../ui/input"
export default function SerachBar(){
    return (
        <div className="flex justify-center flex-col w-[574px] h-[44px] border rounded-[4px] border-[#1570EF]">
            <div className="flex ml-2 text-[#1570EF] text-base"><Image 
                src="/Search.svg"
                width={24}
                height={24}
                alt="Search Bar"
            />
            <Input placeholder="Search product, supplier, order"/></div>
        </div>
    )
}