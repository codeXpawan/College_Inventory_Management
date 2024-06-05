import Image from "next/image"

export default function User(){
    return (
        <div className="mr-9 my-12 float-right"><Image
        src="/Profile.svg"
                width={40}
                height={40}
                alt="User Profile"/></div>
    )
}