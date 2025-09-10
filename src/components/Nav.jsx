import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // install lucide-react for icons

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full absolute z-20 bg-transparent text-blue-800">
      <div className="flex justify-between items-center px-6 md:px-12 py-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-blue-900 font-[MaShanZheng] text-3xl md:text-4xl"
        >
          Bank
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-lg  p-2 rounded-xl ">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-bold"
                  : "hover:text-blue-500 transition"
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/personal-loan"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-bold"
                  : "hover:text-blue-500 transition"
              }
            >
              Personal Loan
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/security"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-bold"
                  : "hover:text-blue-500 transition"
              }
            >
              Security
            </NavLink>
          </li>
        </ul>

        {/* CTA Button (desktop only) */}
        <div className="hidden md:block">
          <button className="border border-white px-5 py-2 rounded-2xl hover:bg-white hover:text-blue-800 transition">
            Sign Up
          </button>
        </div>

        {/* Hamburger (mobile only) */}
        <button
          className="md:hidden text-blue-900"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg rounded-b-2xl">
          <ul className="flex flex-col gap-4 px-6 py-6 text-lg">
            <li>
              <NavLink
                to="/about"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-bold" : "hover:text-blue-500"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/personal-loan"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-bold" : "hover:text-blue-500"
                }
              >
                Personal Loan
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/security"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-bold" : "hover:text-blue-500"
                }
              >
                Security
              </NavLink>
            </li>
            <li>
              <button className="w-full border border-blue-800 px-5 py-2 rounded-2xl hover:bg-blue-800 hover:text-white transition">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
