import Header from "@/pages/Landing/Header";
import Hero from "@/pages/Landing/Hero";
import database from "@/mocks/database";
import { useEffect } from "react";

const Landing = () => {
    useEffect(() => console.log(database.user.getAll()));
    return (
        <>
            <Header />
            <Hero />
        </>
    );
};

export default Landing;
