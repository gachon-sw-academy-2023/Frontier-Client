import Header from "@/pages/Landing/Header";
import Hero from "@/pages/Landing/Hero";
import database from "@/mocks/database";
import { useEffect } from "react";

const Landing = () => {
    useEffect(() => console.log(database.card.getAll()));
    return (
        <>
            <Header />
            <Hero />
        </>
    );
};

export default Landing;
