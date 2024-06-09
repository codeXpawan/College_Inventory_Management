
import React from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
type Props = {
    title: string;
    className?: string;
}
export default function PageTitle({title, className }: Props) {
    return <h1 className={cn("text-2*1 font-semibold flex ", className)}>
       
        {title}
        {/* <ChevronRight /> */}
        </h1>
}