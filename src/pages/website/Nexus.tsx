import heoImg from "../../assets/cube/cu.png";
import dasImg from "../../assets/cube/dascub.png";

import { MdOutlineDashboard } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { LuUsers } from "react-icons/lu";
import { FaHamburger, FaLock } from "react-icons/fa";
import { GiHamburger, GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
const Nexus = () => {
  return (
    <div className="overflow-hidden bg-gray-100 px-4 font-sans">
      <Header />
      <Hero />
      <CardSection />
      <BuildS />
    </div>
  );
};
const Header = () => {
  const [menu, showMenu] = useState(false);
  const links = [
    { name: "Product", link: "" },
    { name: "Solutions", link: "" },
    { name: "Pricing", link: "" },
    { name: "Resources", link: "" },
    { name: "Company", link: "" },
  ];
  return (
    <header className="mx-auto flex max-w-5xl items-center justify-between py-6">
      <div>Nexus</div>
      <nav className="hidden md:block">
        <ul className="flex items-center justify-center gap-4 *:list-none">
          {links.map((n) => (
            <li
              className="cursor-pointer text-sm tracking-tight text-gray-600 hover:text-gray-950"
              key={n.name}
            >
              {n.name}
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden items-center gap-5 md:flex">
        <button className="rounded-md px-4 py-2 hover:bg-gray-100 hover:text-gray-950">
          Login
        </button>
        <button className="rounded-md bg-gray-950 px-4 py-2 text-gray-50 hover:bg-gray-800">
          Sign up
        </button>
      </div>
      <div
        onClick={() => showMenu((pre) => !pre)}
        className="relative md:hidden"
      >
        <GiHamburgerMenu />
        {menu && (
          <nav className="absolute top-8 right-2 md:hidden">
            <ul className="w-44 flex-col items-center justify-center rounded-lg bg-gray-300 p-6 *:list-none *:text-gray-950">
              {links.map((n) => (
                <li
                  className="cursor-pointer py-1 text-left text-sm tracking-tight"
                  key={n.name}
                >
                  {n.name}
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
    <section className="mx-auto max-w-5xl font-sans">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="space-y-2">
          <div className="my-3 flex items-center gap-4 rounded-full text-xs">
            <span className="rounded-full border border-gray-300 px-3 py-1 text-xs">
              NEW
            </span>
            <span className="font-medium text-gray-400">
              Introducing Nexus 2.0 →
            </span>
          </div>
          <h1 className="text-4xl font-bold md:text-5xl">
            Simplify. Organize. Achieve.
          </h1>
          <p className="my-5 w-72 text-sm text-gray-600">
            Nexus helps teams streamline workflows, manage projects, and deliver
            results faster than ever.
          </p>
          <div className="flex gap-4">
            <button className="rounded-md bg-gray-950 px-4 py-2 text-gray-50 hover:bg-gray-800">
              Get Started Free
            </button>
            <button className="rounded-md px-4 py-2 hover:bg-gray-100">
              Watch Demo
            </button>
          </div>
        </div>
        <div className="">
          <img
            style={{
              WebkitMaskImage:
                "radial-gradient(circle, black 60%, transparent 61%)",
              maskImage: "radial-gradient(circle, black 60%, transparent 61%)",
            }}
            className="mask-radial-from-100% mask-radial-at-center"
            src={heoImg}
            alt="cube image"
          />
        </div>
      </div>
    </section>
  );
};
const CardSection = () => {
  const features = [
    {
      id: 1,
      icon: MdOutlineDashboard,
      title: "All-in-One Workspace",
      description: "Everything you need in a single, streamlined workspace.",
    },
    {
      id: 2,
      icon: VscGraph,
      title: "Powerful Analytics",
      description:
        "Gain insights with real-time data and customizable dashboards.",
    },
    {
      id: 3,
      icon: LuUsers,
      title: "Seamless Collaboration",
      description:
        "Work together in real-time and keep everyone on the same page.",
    },
    {
      id: 4,
      icon: FaLock,
      title: "Enterprise-Grade Security",
      description:
        "Enterprise-grade security to keep your data safe and private.",
    },
  ];
  return (
    <section className="mx-auto max-w-5xl py-10">
      <div className="grid grid-cols-1 border border-neutral-300 md:grid-cols-4">
        {features.map((f) => (
          <div className="border-r-2 border-gray-300 px-4 py-6" key={f.title}>
            <div className="w-fit rounded-lg bg-gray-100 p-4">
              <f.icon />
            </div>
            <h3 className="mt-4 mb-6 text-lg font-semibold">{f.title}</h3>
            <p className="text-xs text-gray-600">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
const BuildS = () => {
  return (
    <section className="mx-auto max-w-5xl py-32">
      <div className="flex flex-col justify-center md:flex-row">
        <div className="space-y-8">
          <h3 className="w-96 text-4xl font-semibold md:text-5xl">
            Build for modern teams
          </h3>
          <p className="w-64 text-sm text-gray-800">
            From startups to enterprises, Nexus adapts to your workflow and
            scales with your ambitions.
          </p>
          <div className="my-5">
            <button className="rounded-md bg-gray-950 px-4 py-2 text-gray-50 hover:bg-gray-800">
              Get Started Free →
            </button>
          </div>
        </div>
        <div>
          <img src={dasImg} alt="dashboard image" />
        </div>
      </div>
    </section>
  );
};
export default Nexus;
