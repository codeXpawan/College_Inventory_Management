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
                <h3 className="mx-3 text-lg font-semibold text-foreground">
                    Sidebar

                </h3>
                <div className="">
                    

                </div>

            </div>

        </aside>
    )
}