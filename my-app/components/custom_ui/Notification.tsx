import Image from "next/image"

export default function Notification(){
    return (
        <div className="float-right mx-9 my-14"><Image
        src="/Notification.svg"
                width={24}
                height={24}
                alt="Notice"/></div>
    )
}