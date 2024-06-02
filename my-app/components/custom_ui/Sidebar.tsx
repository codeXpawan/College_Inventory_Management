import Image from "next/image"
import { Button } from "@/components/ui/button"

export function sidebar() {
    return (
        <aside className="w-[320px] max-w-xs h-screen fixed left-0 top-0 z-40 border-r bg-[#D9D9D9]">
            <div className="h-full px-3 py-4">
                <div className="flex justify-center items-center h-40">
                    <Image
                        src="/Logo.svg"
                        width={258}
                        height={91}
                        alt="Logo" />
                </div>
                <div className="pl-[18px]">
                    <Button className="w-[186px] h-[56px] bg-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-[#1570EF] text-bg-[#1570EF] flex justify-start ">
                    <Image
                        src="/Home(1).svg"
                         className="hover:Home-[#1570EF]"
                        width={24}
                        height={24}
                        alt="Home" />
                        <h1 className="pl-[10px]" >Dashboard</h1>
                       
                    </Button>
                    <Button className="w-[186px] h-[56px] bg-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-[#1570EF] text-bg-[#1570EF] flex justify-start ">
                    <Image
                        src="/Inventory.svg"
                         className="hover:Home-[#1570EF]"
                        width={24}
                        height={24}
                        alt="inventory" />
                         <h1 className="pl-[10px]" > Inventory</h1>
                      
                    </Button>
                    <Button className="w-[186px] h-[56px] bg-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-[#1570EF] text-bg-[#1570EF] flex justify-start ">
                    <Image
                        src="/Group 11.svg"
                         className="hover:Home-[#1570EF]"
                        width={24}
                        height={24}
                        alt="departments" />
                         <h1 className="pl-[10px]" > Departments</h1>
                      
                    </Button>
                    <Button className="w-[186px] h-[56px] bg-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-[#1570EF] text-bg-[#1570EF] flex justify-start ">
                    <Image
                        src="/Report.svg"
                         className="hover:Home-[#1570EF]"
                        width={24}
                        height={24}
                        alt="Home" />
                         <h1 className="pl-[10px]" >     Reports</h1>
                  
                    </Button>
                    <Button className="w-[186px] h-[56px] bg-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-[#1570EF] text-bg-[#1570EF] flex justify-start">
                    <Image
                        src="/Suppliers.svg"
                         className="hover:Home-[#1570EF]"
                        width={24}
                        height={24}
                        alt="role" />
                         <h1 className="pl-[10px]" >Roles and Access</h1>
                       
                    </Button>
                    <Button className="w-[186px] h-[56px] bg-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-[#1570EF] text-bg-[#1570EF]  flex justify-start ">
                    <Image
                        src="/Order.svg"
                         className="hover:Home-[#1570EF]"
                        width={24}
                        height={24}
                        alt="Home" />
                         <h1 className="pl-[10px]" > Orders</h1>
                      
                    </Button>
                    <Button className="w-[186px] h-[56px] bg-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-[#1570EF] text-bg-[#1570EF]  flex  justify-start ">
                    <Image
                        src="/Manage Store.svg"
                         className="hover:Home-[#1570EF]"
                        width={24}
                        height={24}
                        alt="Manage" />
                         <h1 className="pl-[10px]" >Manage Store</h1>
                       
                    </Button>
                </div>
                <div className=" absolute bottom-0 pl-[18px] ">
                    <Button className="w-[186px] h-[56px] bg-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-[#1570EF] text-bg-[#1570EF] flex justify-start ">
                    <Image
                        src="/Settings.svg"
                         className="hover:[#D9D9D9]"
                        width={24}
                        height={24}
                        alt="setting" />
                         <h1 className="pl-[10px]" >Setting</h1>
                       
                    </Button>
                    <Button className="w-[186px] h-[56px] bg-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-[#1570EF] text-bg-[#1570EF] flex justify-start ">
                    <Image
                        src="/Vector.svg"
                         className="hover:logout-[#D9D9D9]"
                        width={24}
                        height={24}
                        alt="logout" />
                         <h1 className="pl-[10px]" > Log Out</h1>
                      
                    </Button>


                </div>
            </div>
        </aside>
    )
}