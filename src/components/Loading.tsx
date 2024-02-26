import { getStaticURL } from "@/utils/constants";
import Image from "next/image";

export const Loading = () => {
    return (
        <div className="flex items-center justify-center bg-black w-full h-full">
            <Image
                src={`${getStaticURL()}/assets/images/about.png`}
                alt="Logo"
                height={100}
                width={100}
                className="w-24 h-24"
            />
        </div>
    )
}