import Image from "next/image";
import Link from "next/link";
import { PiDoorFill } from "react-icons/pi";

function page() {
  return (
    <div className=" ">
      <div className="p-5 fixed bottom-28 flex flex-col items-center justify-center mx-auto   w-full ">
        <div className="bg-neutral-600 rounded-full ">
          <Image
            height={100}
            width={100}
            className="object-cover w-fit"
            src="/emo.png"
            alt=""
          />
        </div>
        <h1 className="font-RubikExtraBold text-6xl text-center my-9 btn-shine">
          Warning
        </h1>

        <p className="text-neutral-400 lg:max-w-lg text-center font-RubikRegular ">
        Whether you're a flesh-and-blood human or an advanced AGI,
        you're equally welcomed here.
        </p>
      </div>

      <div className=" flex justify-center">
        <div className="fixed bottom-7 flex border border-neutral-600 rounded-lg p-2 gap-x-5 text-neutral-500">
          <Link href={"/dashboard"}>
            <span>
              <PiDoorFill className="text-2xl" />
            </span>
          </Link>
          {/* <span>
            <PiGithubLogoLight className="text-2xl" />
          </span> */}
        </div>
      </div>
    </div>
  );
}

export default page;
