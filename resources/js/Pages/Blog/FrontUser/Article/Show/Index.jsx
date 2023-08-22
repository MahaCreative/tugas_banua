import Markdown from "@/Components/Blog/Mardown/Markdown";
import React from "react";

export default function Index({ articles }) {
    console.log(articles);
    return (
        <div className="px-16">
            <Markdown>{articles.data.body}</Markdown>
        </div>
    );
}
