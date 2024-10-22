import {  ovaledge, MAQ } from "../assets/images";
import {
    anime,
    contact,
    sql,
    PowerBI,
    Azure,
    AI,
    css,
    cseg,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    python,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Backend",
    },
    {
        imageUrl: PowerBI,
        name: "PowerBI",
        type: "Backend",
    },

    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: Azure,
        name: "Azure",
        type: "Cloud Services",
    },
    {
        imageUrl: AI,
        name: "AI",
        type: "Machine Learning & Artificial Intelligence",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Web Developer Intern",
        company_name: "OvalEdge India Pvt. Ltd.",
        icon: ovaledge,
        iconBg: "#fbc3bc",
        date: "Jun 2021 - Sept 2021",
        points: [
            "Developing and maintaining web applications using HTML, CSS, JQuery and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Debugging and resolving web application issues, efficiently managing over 50 support requests related to bugs and performance",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "MAQ Software",
        icon: MAQ,
        iconBg: "#accbe1",
        date: "Jun 2022 - Dec 2023",
        points: [
            "Developing and maintaining PowerBI reports and dashboards, utilizing data modeling, visualization techniques, and advanced DAX queries",
            "Engineering data pipelines using Azure Data Factory to extract data from multiple sources like Blob Storage, SQL DB and on-premise databases",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Conducting end-to-end checks using validation pivots, developing comprehensive test cases using Azure DevOps to ensure data validity"
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/ArushiG11',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/arushi-gupta11/',
    }
];

export const projects = [
    // {
    //     iconUrl: pricewise,
    //     theme: 'btn-back-red',
    //     name: 'Amazon Price Tracker',
    //     description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
    //     link: 'https://github.com/adrianhajdin/pricewise',
    // },
    // {
    //     iconUrl: threads,
    //     theme: 'btn-back-green',
    //     name: 'Full Stack Threads Clone',
    //     description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    //     link: 'https://github.com/adrianhajdin/threads',
    // },
    {
        iconUrl: AI,
        theme: 'btn-back-blue',
        name: 'Grid World',
        description: 'Developed and solved complex Markov Decision Process (MDP) simulations to model interactions between an agent and aliens in a stochastic environment.',
        link: 'https://github.com/ArushiG11/Grid-World',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Social Moments - A MERN-Based Social Media Platform',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/ArushiG11/Moments',
    },
    {
        iconUrl: anime,
        theme: 'btn-back-black',
        name: 'Anime Analysis',
        description: 'Analyzed trends in popular genres and user preferences using SQL for querying and Matplotlib for data visualization,identifying key insights such as genre popularity shifts.',
        link: 'https://github.com/ArushiG11/Anime-Data-Analysis',
    },
    {
        iconUrl: cseg,
        theme: 'btn-back-yellow',
        name: 'Customer Personality Analysis',
        description: 'Analyzed customer personality data using R to uncover behavior patterns and preferences, leveraging libraries such as dplyr and ggplot2.',
        link: 'https://github.com/ArushiG11/Customer-Segmentation',
    }
];