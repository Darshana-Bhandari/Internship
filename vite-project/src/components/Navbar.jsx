import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav className="bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          MyLogo
        </div>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 font-medium md:flex">
          <li>
            <Link
              to="/"
              className="transition hover:text-blue-600"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="transition hover:text-blue-600"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/service"
              className="transition hover:text-blue-600"
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="transition hover:text-blue-600"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700 md:block">
          Login
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t md:hidden">
          <ul className="flex flex-col gap-4 p-6">
            <li>
              <Link to="/" className="block hover:text-blue-600">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="block hover:text-blue-600">
                About
              </Link>
            </li>

            <li>
              <Link to="/services" className="block hover:text-blue-600">
                Services
              </Link>
            </li>

            <li>
              <Link to="" className="block hover:text-blue-600">
                Contact
              </Link>
            </li>

            <button className="rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700">
              Login
            </button>
          </ul>
        </div>
      )}
    </nav>
    </>

  );
};

export default Navbar;