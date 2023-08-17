"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center bg-offWhite h-16 ${
          sticky
            ? "!fixed !z-[9999] shadow-sticky !transition bg-ambientBlue"
            : "absolute"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-32 lg:w-44 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full pt-10 lg:pt-20 ${
                  sticky ? "py-10 lg:py-20" : "py-18"
                } `}
              >
                <Image
                  src="/ambient_square_1.svg"
                  alt="logo"
                  width={208}
                  height={1}
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
