import Link from "next/link";
 import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  return (
    <>
    <ToastContainer/>
      <header className="w-full px-3 py-2 md:w-[70%] mx-auto shadow-md">
        <nav className="w-full flex justify-between items-center">
          <Link href={"/"} className="font-bold text-2xl">
            Curd App
          </Link>
          <ul className="flex gap-x-4 font-semibold">
            <li>
              <Link href={"/home"}>Home</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
