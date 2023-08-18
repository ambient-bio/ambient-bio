import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer
        className="wow fadeInUp relative z-10 bg-offWhite pt-16 md:pt-20 lg:pt-24"
        data-wow-delay=".1s"
      >
        <div className="container">
          <div className="flex">
            <div className="w-6/12 lg:w-4/12 xl:w-5/12">
              <div className="mb-6 max-w-[360px] lg:mb-8">
                <p className="text-xs md:text-sm font-extralight leading-relaxed text-darkBlue">
                ©2023 Ambient, Inc.
                </p>
              </div>
            </div>

            <div className="w-1/12 lg:w-2/12 xl:w-2/12"></div>

            <div className="w-1/12 lg:w-2/12 xl:w-2/12"></div>

            <div className="w-4/12 lg:w-4/12 xl:w-3/12 text-right">
              <div className="mb-2 lg:mb-8">
                <div className="">
                  <Link href="/" className="inline-block">
                    <Image
                      src="./ambient_squicles.svg"
                      alt="logo"
                      className=""
                      width={150}
                      height={1}
                    />
                  </Link>
                </div>     
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
