
import React from 'react';
import styles from "../page.module.css";
import Link from "next/link";

interface Source {
    author: string;
    title: string;
    website: string;
    date: string;
    link: string;
    publisher?: string;
}[];

const sources: Source[] = [
    {
        author: "Faber, Scott",
        title: "The Toxic Twelve Chemicals and Contaminants in Cosmetics",
        website: "Environmental Working Group",
        date: "5 May 2020",
        link: "https://www.webmd.com/beauty/features/harmful-chemicals-in-your-cosmetics"
    },
    {
        author: "Hoff, Victoria",
        title: "20 Ingredients a Clean Cosmetic Chemist Would Avoid",
        website: "Byrdie",
        date: "21 June 2021",
        link: "https://www.byrdie.com/toxic-beauty-ingredients-4782646"
    },
    {
        author: "Lopez, Irene",
        title: "Are Harmful Chemicals Hiding in Your Cosmetics?",
        website: "Radiance by WebMD",
        date: "9 Sept. 2021",
        link: "https://www.webmd.com/beauty/features/harmful-chemicals-in-your-cosmetics"
    }
];

const generateMLACitations = (sources: Source[]) => {
    let citations = "";

    for (let i = 0; i < sources.length; i++) {
        const source = sources[i];
        const citation = `${source.author}. "${source.title}." <i>${source.website}</i>, ${source.publisher ? source.publisher + ', ' : ''
            }${source.date}, <div className={styles.sourceLinkDivider}/> 
      <a className={styles.source} href="${source.link}">${source.link}</a>`;

        citations += `<li>${citation}</li>\n`;
    }

    return citations;
};

const Citations: React.FC = () => {
    const formattedCitations = generateMLACitations(sources);

    return <ul className={styles.sourceNames} dangerouslySetInnerHTML={{ __html: formattedCitations }} />;
};

export default Citations;