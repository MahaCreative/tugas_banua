import { Link } from "@inertiajs/react";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Optional: add a blur effect while loading

function ContainerContent({ title_content, children }) {
    return (
        <div className="bg-slate-950 px-4 md:px-8 lg:px-16 py-2 border-b border-white/10 border-dashed ">
            <div className="my-6">
                <h1 className="text-white font-fira text-2xl font-bold">
                    {title_content}
                </h1>
                <p className="text-white font-fira text-white/50">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Cumque, quas quisquam.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4 lg:gap-8 transition-all duration-300 ease-in-out">
                {children}
            </div>
        </div>
    );
}

function Kontent({ image, title, teaser, tags }) {
    return (
        <div className="">
            <div className="w-full rounded-lg overflow-hidden  flex flex-col">
                <div className="">
                    <LazyLoadImage
                        src="./Image/contoh.png"
                        alt=""
                        effect="blur"
                        className="lg:h-[34vh] w-full rounded-md object-cover object-center"
                    />
                </div>
                <div className="my-3 w-full">
                    <div className="flex justify-between items-center">
                        <Link className="text-white hover:text-blue-700">
                            <h2 className="font-fira text-lg font-bold">
                                Lorem Impsum Dolor
                            </h2>
                        </Link>
                        <p className="text-white/80 text-[8pt] font-extralight px-3 py-1 rounded-bg bg-slate-800 rounded-full">
                            13 Jan 2017
                        </p>
                    </div>
                    <div className="flex items-end">
                        <p className="text-white/50 font-fira font-light text-[8pt] line-clamp-2 md:line-clamp-3 lg:line-clamp-4">
                            Lorem ipsum, dolor consectetur adipisicing elit. A
                            est delectus maxime magnam, saepe ad eos at
                            officiis! Iusto totam obcaecati maxime mollitia
                            omnis laudantium voluptatibus voluptates dignissimos
                            quas.{" "}
                        </p>
                        <Link className="text-blue-500 text-[8pt] hover:text-white">
                            Selengkapnya
                        </Link>
                    </div>
                    <div className="my-3 flex gap-3">{tags}</div>
                </div>
            </div>
        </div>
    );
}

function Tag({ children }) {
    return (
        <Link className="px-2 py-1 rounded-lg bg-slate-800  my-3 text-blue-700 hover:bg-slate-700 hover:text-white transition duration-300 shadow-md hover:shadow-gray-700 text-[8pt]">
            {children}
        </Link>
    );
}

ContainerContent.Kontent = Kontent;
ContainerContent.Tag = Tag;
export default ContainerContent;
