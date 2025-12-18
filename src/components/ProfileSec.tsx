import Image from "next/image";
import Link from "next/link";

const ProfileSec = () => {
  return (
    <section className="mt-15" aria-labelledby="owner-heading">
      <div className="flex gap-7.5">
        <figure className="size-[70px] relative rounded-[100px] overflow-hidden">
          <Image fill alt="Profile photo of xyz" src={"/img/michele.jpg"} />
        </figure>
        <div>
          <h3 id="owner-heading">
            <Link href={"#"} className="hover:underline">
              Owned by Michele G
            </Link>
          </h3>
          <div
            className="flex items-center gap-1.5"
            aria-label="Rating: 4 out of 5 stars"
          >
            <Image
              height={20}
              width={108}
              src={"/svg/stars.svg"}
              alt="Rental item rating"
              aria-hidden="true"
            />
            <span>(4)</span>
          </div>
          <button
            className="px-3 py-2.5 border border-accent-blue rounded-sm transition-transform duration-150 ease-in hover:scale-101 mt-7 cursor-pointer"
            aria-label="Chat with xyz"
          >
            Chat with Michele G
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileSec;
