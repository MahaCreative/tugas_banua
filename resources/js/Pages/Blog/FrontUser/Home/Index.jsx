import Header from "@/Components/Blog/Header/Header";
import ContainerContent from "@/Components/Container/ContainerContent";

import BlogLayout from "@/Layouts/Blog/BlogLayout";
import React from "react";

export default function Index(props) {
    const tugas = props.tugas
    console.log(tugas);
    return (
        <div className="relative">
            <Header background={true}>
                <div className="relative w-[90%] md:w-[70%] lg:w-[60vw] h-[100%] flex flex-col justify-center items-center">
                    <Header.Title size="8xl">
                        Banua Edu Center
                    </Header.Title>
                    <Header.Subtitle sizeTeaser="xl">
                        Jadilah orang yang menguasai teknologi bukan orang yang di kuasai oleh teknologi
                    </Header.Subtitle>
                </div>
                {/* <div className="w-1/2">
                    <Header.HeaderImage source={"./Image/contoh.png"} />
                </div> */}
            </Header>

            <div className="">
                <ContainerContent title_content={"Tugas Coreldraw"}>
                    {tugas.map((item, key) =>

                        <ContainerContent.Kontent title={item.nama_tugas} image={'./storage/' + item.foto_tugas} routes={route('view-tugas', item.slug)} />)}

                </ContainerContent>

            </div>
        </div>
    );
}
Index.layout = (page) => <BlogLayout children={page} />;
