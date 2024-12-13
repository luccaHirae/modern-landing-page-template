"use client";

import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button, ButtonProps } from "@/components/Button";
import logoImage from "@/assets/images/sphereal-logo.svg?url";
import { Orbit } from "@/components/Orbit";

export const navItems = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
];

export const loginItems = [
  {
    buttonVariant: "tertiary",
    name: "Login",
    href: "#login",
  },
  {
    buttonVariant: "primary",
    name: "Sign Up",
    href: "#sign-up",
  },
] satisfies {
  name: string;
  href: string;
  buttonVariant: ButtonProps["variant"];
}[];

export const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen((prev) => !prev);
  };

  return (
    <>
      <header className="border-b border-gray-200/20 relative z-40">
        <div className="container">
          <div className="h-18 lg:h-20 flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <div
                className="size-10 bg-gray-200 bg-[conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))]"
                style={{
                  maskImage: `url(${logoImage.src})`,
                  maskSize: "contain",
                }}
              ></div>
              <div className="font-extrabold text-2xl">sphereal.ai</div>
            </div>

            <div className="h-full hidden lg:block">
              <nav className="h-full">
                {navItems.map(({ name, href }) => (
                  <a
                    key={name}
                    href={href}
                    className="px-10 relative font-bold text-xs tracking-widest text-gray-400 uppercase h-full inline-flex items-center 
                  before:content-[''] before:absolute before:bottom-0 before:h-2 before:w-px before:bg-gray-200/20 before:left-0
                  last:after:absolute last:after:bottom-0 last:after:h-2 last:after:w-px last:after:bg-gray-200/20 last:after:right-0"
                  >
                    {name}
                  </a>
                ))}
              </nav>
            </div>

            <div className="hidden lg:flex gap-4">
              {loginItems.map(({ name, buttonVariant }) => (
                <Link href="/" key={name}>
                  <Button variant={buttonVariant}>{name}</Button>
                </Link>
              ))}
            </div>

            <div className="flex items-center lg:hidden">
              <button
                onClick={toggleMobileNav}
                className="size-10 rounded-lg border-2 border-transparent [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_content-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))_border-box] relative"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={twMerge(
                      "w-4 h-0.5 bg-gray-100 -translate-y-1 transition duration-300",
                      isMobileNavOpen && "translate-y-0 rotate-45"
                    )}
                  ></div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={twMerge(
                      "w-4 h-0.5 bg-gray-100 translate-y-1 transition duration-300",
                      isMobileNavOpen && "translate-y-0 -rotate-45"
                    )}
                  ></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMobileNavOpen && (
        <div className="fixed overflow-hidden top-18 left-0 bottom-0 right-0 bg-gray-950 z-30">
          <div className="absolute-center isolate -z-10">
            <Orbit />
          </div>

          <div className="absolute-center isolate -z-10">
            <Orbit className="size-[350px]" />
          </div>

          <div className="absolute-center isolate -z-10">
            <Orbit className="size-[500px]" />
          </div>

          <div className="absolute-center isolate -z-10">
            <Orbit className="size-[650px]" />
          </div>

          <div className="absolute-center isolate -z-10">
            <Orbit className="size-[800px]" />
          </div>

          <div className="container h-full">
            <nav className="flex flex-col items-center gap-4 py-8 h-full justify-center">
              {navItems.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  className="h-10 text-xs font-bold text-gray-400 uppercase tracking-widest"
                >
                  {name}
                </a>
              ))}

              {loginItems.map(({ name, href, buttonVariant }) => (
                <Link href={href} key={name} className="w-full max-w-xs">
                  <Button
                    variant={buttonVariant}
                    className="w-full"
                    onClick={toggleMobileNav}
                  >
                    {name}
                  </Button>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
