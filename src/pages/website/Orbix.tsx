import React, { useState } from "react";
import { HiMiniWallet } from "react-icons/hi2";
import orbix from "../../assets/orbix/orbix.png";
import { cn } from "../../libs/utils";
import { GiHamburgerMenu } from "react-icons/gi";

const Orbix = () => {
  return (
    <div className="mx-auto max-w-5xl bg-neutral-100/20">
      <Header />
      <Hero />
    </div>
  );
};
const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const links = [
    { name: "Home", link: "" },
    { name: "Features", link: "" },
    { name: "Pricing", link: "" },
    { name: "Support", link: "" },
    { name: "Contact", link: "" },
  ];
  return (
    <header className="flex items-center justify-between px-4 py-4">
      <div className="flex items-center justify-center gap-1">
        <span>
          <HiMiniWallet className="size-6 text-teal-500" />
        </span>
        <span className="text-xl font-bold selection:bg-teal-500">Orbix</span>
      </div>
      <nav className="hidden md:block">
        <ul className="flex items-center gap-6">
          {links.map((l) => (
            <li
              className="cursor-pointer list-none text-xs font-semibold hover:text-teal-500"
              key={l.name}
            >
              {l.name}
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden md:block">
        <button className="rounded-xl bg-neutral-900 px-5 py-2 text-neutral-50">
          Get Started
        </button>
      </div>
      <div
        onClick={() => setShowMenu((pre) => !pre)}
        className="relative cursor-pointer rounded-md bg-teal-100 p-2 md:hidden"
      >
        <GiHamburgerMenu />
        {showMenu && (
          <nav className="absolute top-10 right-5 rounded-md bg-teal-200 p-4">
            <ul className="w-28">
              {links.map((l) => (
                <li
                  className="cursor-pointer list-none py-2 text-right text-sm font-semibold hover:text-teal-500"
                  key={l.name}
                >
                  {l.name}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};
const Hero = () => {
  return (
    <section className="font-roboto flex flex-col items-center justify-between selection:bg-teal-500 md:flex-row">
      <div className="w-sm space-y-6">
        <h1 className="w-xs pt-6 text-4xl font-semibold md:w-full md:py-0 md:text-5xl/14">
          {" "}
          Get Easy Access to Your Crypto with{" "}
          <span className="relative border border-neutral-300 px-1 text-teal-500 selection:text-neutral-900">
            Orbix Wallet
            <Ball className="-top-1 -left-1" />
            <Ball className="-bottom-1 -left-1" />
            <Ball className="-top-1 -right-1" />
            <Ball className="-right-1 -bottom-1" />
          </span>
        </h1>
        <p className="text-neutral-500 selection:bg-teal-500 selection:text-neutral-900">
          Your all-in-one crypto wallet to send, receive, and swap digital
          assets—anytime, anywhere.
        </p>
        <div className="flex items-center gap-5">
          <button className="rounded-2xl border bg-teal-500 px-4 py-3 text-sm font-semibold text-neutral-50 hover:bg-teal-400">
            Download App Now
          </button>
          <button className="rounded-2xl border border-gray-200 px-4 py-3 text-sm font-semibold text-neutral-500 hover:text-neutral-600">
            Access From Web
          </button>
        </div>
        <div>
          <div className="mt-10 flex items-center gap-5 md:mt-16">
            <span className="text-2xl font-bold">4.7</span>{" "}
            <span className="text-sm">App Store Ratings</span>
            <span className="text-2xl font-bold">4.8</span>{" "}
            <span className="text-sm">Google Play Ratings</span>
          </div>
        </div>
      </div>
      <div className="mt-10 md:mt-0">
        <img src={orbix} alt="orbix hero image" />
      </div>
    </section>
  );
};
const Ball = ({ className }: { className: string }) => {
  return (
    <div
      className={cn(
        "absolute size-3 rounded-full border-2 border-neutral-500 bg-neutral-100",
        className,
      )}
    ></div>
  );
};
export default Orbix;
