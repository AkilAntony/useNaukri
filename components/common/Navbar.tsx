"use client";

import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const menus = [
    {
      name: "Sign up",
      href: "/signup",
    },
  ];

  return (
    <nav className="bg-white/10  backdrop-blur-lg ">
      <ul className="flex gap-5 text-[14px] items-center section-wrapper p-3 justify-end">
        <li>
          <button
            onClick={() => router.push("/login")}
            className="bg-blue-300 hover:border-blue-600 border border-transparent transition-all duration-300 rounded-full px-5 cursor-pointer py-1"
          >
            Login
          </button>
        </li>

        <li>
          <button className="border border-transparent hover:border-gray-600 bg-gray-200 rounded-full px-5 cursor-pointer py-1">
            Register
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
