// import React from "react";

import { useState } from "react";
import Navlink from "../Navlink/Navlink";
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile", name: "Profile" },
    ];

    return (
        <nav className="bg-sky-700 p-6">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="text-2xl md:hidden"
            >
                {isOpen === true ? <IoMdClose></IoMdClose> : <LuMenu></LuMenu>}
            </div>

            <ul
                className={`md:flex gap-6 absolute duration-1000 bg-sky-700 px-6 md:static
                    ${isOpen ? "top-14" : "-top-60"}
                    `}
            >
                {routes.map((route) => (
                    <Navlink key={route.id} route={route}></Navlink>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
