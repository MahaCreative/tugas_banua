import { Link } from "@inertiajs/react";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Optional: add a blur effect while loading

function ContainerContent({deskripsi, title_content, children }) {
    return (
        <div className="bg-slate-950 px-4 md:px-8 lg:px-16 py-2 border-b border-white/10 border-dashed ">
            <div className="my-6">
                <h3 className="text-slate-200 font-fira text-lg md:text-xl lg:text-2xl font-bold">
                    {title_content}
                </h3>
                <p className="text-slate-200 text-xs md:text-md lg:text-lg font-fira font-extralight ">
                    {deskripsi}
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4 lg:gap-8 transition-all duration-300 ease-in-out">
                {children}
            </div>
        </div>
    );
}

function Kontent({ image, title, teaser, tags, routes, timeShow = true, countArticleShow=false }) {
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
                        <Link href={routes} className="text-slate-200 hover:text-blue-700">
                            <h1 className="font-fira text-sm md:text-md lg:text-lg font-bold">
                                {title}
                            </h1>
                        </Link>
                        {timeShow && <p className="text-slate-200/80 text-[8pt] font-extralight px-3 py-1 rounded-bg bg-slate-800 rounded-full">
                            13 Jan 2017
                        </p>}
                        {countArticleShow && <p className="text-slate-200/80 text-[8pt] font-extralight px-3 py-1 rounded-bg bg-slate-800 rounded-full">
                            12 Article
                        </p>}
                    </div>
                    <div className="flex items-end">
                        <p className="text-slate-200/50 font-fira font-light text-[8pt] line-clamp-2 md:line-clamp-3 lg:line-clamp-4">
                            {teaser} { " "}
                        </p>
                        <Link href={routes} className="mx-3 text-blue-500 text-[8pt] hover:text-slate-200">
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
        <Link className="px-2 py-1 rounded-lg bg-slate-800  my-3 text-blue-700 hover:bg-slate-700 hover:text-slate-200 transition duration-300 shadow-md hover:shadow-gray-700 text-[8pt]">
            {children}
        </Link>
    );
}

ContainerContent.Kontent = Kontent;
ContainerContent.Tag = Tag;
export default ContainerContent;
