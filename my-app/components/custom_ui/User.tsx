import Image from "next/image"

export default function User(){
    return (
        <div className=" mr-6 my-12"><Image
        src="/Profile.svg"
                width={40}
                height={40}
                alt="User Profile"/></div>
    )
}