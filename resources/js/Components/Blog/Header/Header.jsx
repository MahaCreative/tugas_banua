import clsx from "clsx";
import React, { useEffect, useState } from "react";

// const bgAnimation = document.getElementById("bgAnimation");

// const numberOfColorBoxes = 400;
// for (let i = 0; i < numberOfColorBoxes; i++) {
//     const colorBox = document.createElement("div");
//     colorBox.classList.add("colorBox");
//     bgAnimation.append(colorBox);
// }
function Header({ children, background = false }) {
    const [colorBoxes, setColorBoxes] = useState([]);
    const numberOfColorBoxes = 46;
    const colorBoxElements = [];
    for (let i = 0; i < numberOfColorBoxes; i++) {
        colorBoxElements.push(
            <div
                key={i}
                className="colorBox bg-slate-950 hover:bg-slate-900 shadow-sm shadow-slate-700/30 border border-slate-800/10"
            />
        );
    }
    const [selectedElements, setSelectedElements] = useState([]);

    useEffect(() => {
        const colorBoxes = document.querySelectorAll(".colorBox");
        const numberOfElementsToChange = 7;
        const selectedIndices = [];

        while (selectedIndices.length < numberOfElementsToChange) {
            const randomIndex = Math.floor(Math.random() * colorBoxes.length);
            if (!selectedIndices.includes(randomIndex)) {
                selectedIndices.push(randomIndex);
            }
        }

        const selectedElementsArray = Array.from(selectedIndices).map(
            (index) => colorBoxes[index]
        );
        setSelectedElements(selectedElementsArray);
    }, []);

    useEffect(() => {
        selectedElements.forEach((element) => {
            element.classList.remove("bg-slate-950");
            element.classList.add("bg-slate-900");
        });
    }, [selectedElements]);

    return (
        <div className="relative   bg-slate-950 h-[60vh] sm:h-[90vh]  flex justify-center flex-col  transition-all duration-300 ease-linear">
            <div className=" bgAnimation ">{colorBoxElements}</div>
            <div className="absolute left-0 bottom-0 backdrop:blur-sm flex justify-center items-center h-[100%]">
                <div className="relative h-full px-4 md:p-16 grid-cols-1 lg:grid-cols-2 gap-3  transition-all duration-300 ease-linear">
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

function Subtitle({ children, sizeTeaser = "xl" }) {
    return (
        <div className="w-full md:w-[100%]  transition-all duration-300 ease-linear">
            <h3
                className={
                    "font-fira text-gray-500 font-light text-lg md:text-xl lg:text-3xl"
                }
            >
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
