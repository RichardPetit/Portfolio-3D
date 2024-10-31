import { meta, shopify, starbucks, tesla, human, wild, lapeyre, oc, scalian, axians } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
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
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
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
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
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
        title: "Développeur C# .NET",
        company_name: "Human Immobilier",
        icon: human,
        iconBg: "#0c4b84",
        date: "Depuis Mai 2022 -",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Développeur Python (cdd 1 mois) ",
        company_name: "Axians",
        icon: axians,
        iconBg: "#0460dc",
        date: "Avril 2022",
        points: [
            "Développement de fonctionnalités et maintenance d'outils interne en Python.",
        ],
    },
    {
        title: "Formation OpenClassrooms",
        company_name: "OpenClassrooms",
        icon: oc,
        iconBg: "#7353eb",
        date: "Novembre 2020 - Fevrier 2022",
        points: [
            "Formation en ligne, sur du PHP Symphony avec titre de Développeur Web à la clef (diplôme de niveau 6, bac +3/4).",
            "Réalisation d'un site Wordpress d'annonces immobilières.",
            "Réalisation du cahier des charges et du site d'un festival de cinéma.",
            "Réalisation d'un blog en PHP (architecture MVC)",
            "Réalisation d'un site communautaires (Symfony 5).",
            "Réalisation d'un service Web exposant une Api.",
            "Amélioration d'une application existante (ToDo &Co).",
        ],
    },
    {
        title: "Développeur PHP (stage rémunéré)",
        company_name: "Scalian",
        icon: scalian,
        iconBg: "#47247f",
        date: "Mars 2020 - Juin 2020",
        points: [
            "Réalisation d'un projet Wordpress dans lequel il m'a fallut réaliser un questionnaire à tableau multiple",
            "Réalisation d'un plugin OTP",
        ],
    },
    {
        title: "Formation de développeur Developer",
        company_name: "Wild Code School",
        icon: wild,
        iconBg: "#ec6c6c",
        date: "Septembre 2019 - Février 2020",
        points: [
            "Formation intensive de 5 mois au cours de laquels j'ai appris à développer en PHP Symfony.",
            "J'ai pu réaliser différents projets en groupe durant cette formation pour des clients fictifs, et le dernier pour des clients réels afin de fournir un MVP ",
            "et ainsi permettre à ces clients de présenter leur projet aux banques et le faire financer.",
            " Le site vitrine d'un bar (client fictif);",
            " Une site interne à la WildCodeSchool de questions/réponses similaire à SatckOverflow ;",
            " Un jeu de type memory en utilisant l'api de la NASA \"Pic of the day\" durant un hackathon de 28 heures;",
            " Un jeu de type \"Livre dont vous êtes le héros\" durant un hackathon de 28 heures;",
            " Le site type \"AlloCiné\" permettant d'ajouter des séries, films ou  animés, de les classerpar genre, de les noter etc;",
            " Le site de mise en relation entre particuliers voulant organiser un évènement (mariage, anniversaires, pôt de départ etc) et des prestataires (location de lieu, foodtruck, location de jeux). Ce projet était afin de réaliser les MVP (Produit Minimum Viable en français) pour des clients réels. Ces clients ont pu réaliser leur projet et on créés \"Tcheen\"",
        ],
    },
    {
        title: "Vendeur, SAV puis coordinateur de chantier",
        company_name: "Lapeyre",
        icon: lapeyre,
        iconBg: "#ac1c2c",
        date: "Avril 2014 - Aout 2019",
        points: [
            "Au cours des 5 années passées chez Lapeyre, j'ai pu occuper différents postes tels que Vendeur (2 mois), Conseiller SAV(2 ans) puis Deviseur/Coordinateur de chantiers (3 ans).",
            "J'ai eu à acquérir des connaissances techniques sur les produits, à gérer des clients mécontents et à traiter leur problèmes, ainsi qu'à faire le lien entre le magasin, les artisans sur les chantiers, et les usines ou fournisseurs afin de pallier au maximums aux aléas qui peuvent retarder voire annuler un chantier, trouver des solutions en cas de problèmes et satisfaire au mieux les clients du magasin.",
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
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];