"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Java</li>
                <li>Spring/SpringBoot</li>
                <li>Elastic Search</li>
                <li>JavaScript/TypeScript</li>
                <li>Angular</li>
                <li>React</li>
                <li>Solidity</li>
                <li>EthersJS/Web3JS</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>1st Unified High School of Elefsina, Athens</li>
                <li>Department of Informatics and Telecommunications
                    at University of the Peloponnese</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>Ethereum Blockchain Developer Bootcamp With Solidity (2023) - Udemy</li>
                <li>HyperLedger Fabric 2.x Network Design & Setup - Udemy</li>
                <li>Ethereum and Solidity: The Complete Developer's Guide - Udemy</li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/about.png" width={1000} height={1000} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        As a full-stack web developer, I specialize in crafting interactive web applications and web3 Dapp applications.
                        My expertise includes Spring, SpringBoot, Elastic Search, JavaScript, TypeScript, React, Angular, Solidity, EthersJs, Web3JS, and Git.
                        A quick learner, I'm always expanding my knowledge.
                        I thrive as a team player and look forward to collaborating on creating outstanding applications.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            {" "}
                            Certifications{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;