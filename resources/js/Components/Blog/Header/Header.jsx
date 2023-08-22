import clsx from "clsx";
import React, { useState } from "react";

// const bgAnimation = document.getElementById("bgAnimation");

// const numberOfColorBoxes = 400;
// for (let i = 0; i < numberOfColorBoxes; i++) {
//     const colorBox = document.createElement("div");
//     colorBox.classList.add("colorBox");
//     bgAnimation.append(colorBox);
// }
function Header({ children, background = false }) {
    const [colorBoxes, setColorBoxes] = useState([]);
    const numberOfColorBoxes = 400;
    const colorBoxElements = [];
    for (let i = 0; i < numberOfColorBoxes; i++) {
        colorBoxElements.push(
            <div
                key={i}
                className="colorBox bg-slate-950 hover:bg-slate-950 shadow-sm shadow-slate-700/30"
            />
        );
    }
    return (
        <div className="relative   bg-slate-950 h-[40vh] sm:h-[90vh]  flex justify-center flex-col  transition-all duration-300 ease-linear">
            <div className=" bgAnimation ">{colorBoxElements}</div>
            {/* {background && (
                <div className="absolute top-0 left-0 w-full h-full">
                    <img
                        src="./Image/bg.jpg"
                        alt=""
                        className="w-full h-full object-center object-cover"
                    />
                </div>
            )} */}
            {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-950/80 to-slate-900/90"></div>{" "} */}
            <div className="absolute left-0 bottom-0 backdrop:blur-sm flex justify-center items-center">
                <div className="flex px-4 md:p-16 py-16 grid-cols-1 lg:grid-cols-2 gap-3 items-center justify-between transition-all duration-300 ease-linear">
                    {children}
                </div>
            </div>
        </div>
    );
}

function Title({ children, size = "7xl" }) {
    return (
        <div className="w-full  transition-all duration-300 ease-linear">
            <h1
                className={`'font-fira text-white font-bold text-lg md:text-5xl lg:text-${size} '`}
            >
                {children}
            </h1>
        </div>
    );
}

function Subtitle({ children, size = "text-md" }) {
    return (
        <div className="w-full md:w-[100%]  transition-all duration-300 ease-linear">
            <h3 className={`font-fira text-gray-500 font-light text-${size}`}>
                {children}
            </h3>
        </div>
    );
}
function HeaderImage({ source }) {
    return (
        <div className="bg-red-500 w-[100%] rounded-lg overflow-hidden shadow-md shadow-black/50  transition-all duration-300 ease-linear">
            <img src={source} />
        </div>
    );
}
Header.Title = Title;
Header.Subtitle = Subtitle;
Header.HeaderImage = HeaderImage;
export default Header;
