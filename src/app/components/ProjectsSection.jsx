"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "Elefsinian Mysteries Apartments",
        description: "Hotel Management Site w/ Next.js, React, Sanity.io, Tailwind, Stripe",
        image: "/images/projects/3.png",
        tag: ["All", "Web2"],
        gitUrl: "/",
        previewUrl: "https://www.elefsinianmysteriesapartments.gr/",
    },
    {
        id: 5,
        title: "Phase 10",
        description: "NFT Collection Minting and Staking Website with ReactJS",
        image: "/images/projects/2.png",
        tag: ["All", "Web3"],
        gitUrl: "/",
        previewUrl: "https://www.phase10.gr/",
    },
    {
        id: 2,
        title: "LeetCode Clone with React",
        description: "w/ Next JS, TypeScript, Tailwind CSS, Firebase",
        image: "/images/projects/4.png",
        tag: ["All", "Web2"],
        gitUrl: "https://github.com/tzafff/LeetClone",
        previewUrl: "https://leet-clone-sigma.vercel.app/",
    },

    {
        id: 6,
        title: "Web3 Kickstarter Replica React",
        description: "w/ React, NextJS, Web3.js, Solidity on Goerli TestNet",
        image: "/images/projects/5.png",
        tag: ["All", "Web3"],
        gitUrl: "https://github.com/tzafff/Ethereum-and-Solidity-Project/tree/main/Kickstart",
        previewUrl: "https://kickstarter.netlify.app/",
    },
    {
        id: 7,
        title: "Web3 Lottery Dapp",
        description: "w/ NextJs, Tailwind CSS, and Solidity on Goerli TestNet",
        image: "/images/projects/6.png",
        tag: ["All", "Web3"],
        gitUrl: "https://github.com/tzafff/dapplottery-youtube",
        previewUrl: "https://dapplottery-six.vercel.app/",
    },
    {
        id: 13,
        title: "Provably Random Raffle Contract",
        description: "w/ Solidity, Foundry toolchain, Using ChainLink VRF (for Randomness) & ChainLink Automation (Time based trigger), Deployed on Sepolia TestNet",
        image: "/images/projects/13.png",
        tag: ["All", "Web3"],
        gitUrl: "https://github.com/tzafff/foundry-smart-contract-lottery-f23/tree/master",
        previewUrl: "https://github.com/tzafff/foundry-smart-contract-lottery-f23/tree/master",
    },
    {
        id: 15,
        title: "ECommerce React Application",
        description: "w/ Next.js 14 (Sanity v3, Stripe, JavaScript,  Auth, CMS)",
        image: "/images/projects/15.png",
        tag: ["All", "Web2"],
        gitUrl: "/",
        previewUrl: "https://nextjs-sanity-ecomm1.vercel.app/",
    },
    {
        id: 14,
        title: "BLOG Site",
        description: "w/ Next.js 14 (Sanity v3, TypeScript, Tailwind CSS, Auth, CMS)",
        image: "/images/projects/14.png",
        tag: ["All", "Web2"],
        gitUrl: "https://github.com/tzafff/sanity-nextjs-blog",
        previewUrl: "https://tzaff-blog3.vercel.app/",
    },
    {
        id: 3,
        title: "Youtube Replica with React",
        description: "w/ ReactJS Google API",
        image: "/images/projects/7.png",
        tag: ["All", "Web2"],
        gitUrl: "https://github.com/tzafff/Youtube-Replica-React",
        previewUrl: "https://youtube-rep.netlify.app/",
    },
    {
        id: 4,
        title: "Book Store Project",
        description: "w/ MERN Stack (MongoDB, Express, React, Node.js)",
        image: "/images/projects/8.png",
        tag: ["All", "Web2"],
        gitUrl: "https://github.com/tzafff/MERN-Book-Store-Application",
        previewUrl: "https://mern-project-frontend-iota.vercel.app/",
    },
    {
        id: 11,
        title: "Web3 Replica of Amazon.",
        description: "Full-Stack Dapp using Solidity, Ether.js, Hardhat, and React JS on Sepolia TestNet",
        image: "/images/projects/11.png",
        tag: ["All", "Web3"],
        gitUrl: "https://github.com/tzafff/dappazon",
        previewUrl: "https://dappazon-five.vercel.app/",
    },
    {
        id: 12,
        title: "Web3 Replica of TicketMaster",
        description: "Full-Stack Dapp using Solidity, Ether.js, Hardhat, and React JS on Sepolia TestNet",
        image: "/images/projects/12.png",
        tag: ["All", "Web3"],
        gitUrl: "https://github.com/tzafff/tokenmaster",
        previewUrl: "https://tokenmaster3.vercel.app/",
    },
    {
        id: 10,
        title: "Web3 Discord Server Dapp",
        description: "Full-Stack Dapp using Solidity, Ether.js, Hardhat, and React JS on Sepolia TestNet",
        image: "/images/projects/10.png",
        tag: ["All", "Web3"],
        gitUrl: "https://github.com/tzafff/dappcord",
        previewUrl: "https://dappcord3.vercel.app/",
    },
    {
        id: 8,
        title: "Web3 Chai Buy Dapp",
        description: "Full-Stack Dapp using Solidity, Ether.js, Hardhat, and React JS on Goerli TestNet",
        image: "/images/projects/9.png",
        tag: ["All", "Web3"],
        gitUrl: "https://github.com/tzafff/Full-Stack-Dapps",
        previewUrl: "https://tzaff-coffee.netlify.app/",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web2"
                    isSelected={tag === "Web2"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web3"
                    isSelected={tag === "Web3"}
                />
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectsSection;