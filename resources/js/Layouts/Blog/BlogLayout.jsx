import Navbar from "@/Components/Blog/Navbar/Navbar";
import React from "react";

export default function BlogLayout({ children }) {
    return <div className="w-full h-full bg-slate-900">
        <Navbar/>
        {children}</div>;
}
