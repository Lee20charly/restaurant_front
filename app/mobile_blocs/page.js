"use client";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Section1 } from "../components/mobile_blocs/Section1";
import { Section2 } from "../components/mobile_blocs/Section2";
import { Section3 } from "../components/mobile_blocs/Section3";
import { Section7 } from "../components/mobile_blocs/Section7";

export default function blocs () {
    return(
        <div>
            <Header />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section7 />
            <Footer />

        </div>
    );
}