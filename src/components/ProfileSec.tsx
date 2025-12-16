import Image from "next/image";
import Link from "next/link";

const ProfileSec = () => {
  return (
    <section className="mt-15">
      <div className="flex gap-7.5">
        <div className="size-[70px] relative rounded-[100px] overflow-hidden">
          <Image fill alt="Change this later" src={"/img/michele.jpg"} />
        </div>
        <div>
          <Link href={"#"} className="hover:underline">Owned by Michele G</Link>
          <div className="flex items-center gap-1.5">
            <Image
              height={20}
              width={108}
              src={"/svg/stars.svg"}
              alt="Rental item rating"
            />
            <span>(4)</span>
          </div>
          <button className="px-3 py-2.5 border border-accent-blue rounded-sm transition-transform duration-150 ease-in hover:scale-101 mt-7 cursor-pointer">Chat with Michele G</button>
        </div>
      </div>
    </section>
  );
};

export default ProfileSec;
