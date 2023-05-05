import React from 'react';
import Navbar from "@/components/Navbar";
import {Container} from "@mui/material";
import Player from "@/components/Player";
import Head from "next/head";

interface MainLayoutProps {
    title?: string;
    description?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({children, title,description }) => {
    return (
        <>
            <Head>
                <title>{title || "Musical platform"}</title>
                <meta name="description" content={"Music platform. Here you can upload your tracks and share them with others" + description} />
            </Head>
            <Navbar />
            <Container style={{margin: '90px auto'}}>
                {children}
            </Container>
            <Player />
        </>
    );
};

export default MainLayout;
