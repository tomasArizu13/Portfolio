import { setQuaternionFromProperEuler } from "three/src/math/MathUtils";
import {
    mobile,
    backend,
    phyton,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    sql,
    meta,
    starbucks,
    tesla,
    shopify,
    nike,
    jobit,
    tripguide,
    threejs,
    firebase,
    instagramreplic
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Journey",
    },
    {
      id: "projects",
      title: "Projects"
      },
    {
      id: "contact",
      title: "Contact",
    },
    
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native",
      icon: mobile,
    },
    {
      title: "Backend",
      icon: backend,
    },
    {
      title: "Frontend",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "sql",
      icon: sql,
    },
    {
      name: "firebase",
      icon: firebase,
    },

  ];
  
  const experiences = [
    {
      title: "Front-End",
      company_name: "Digital House",
      icon: html,
      iconBg: "#383E56",
      date: "March 2022 - July 2022",
      points: [
        "HTML (HyperText Markup Language): Know how to create web page structures using HTML for content and semantics.",
        "CSS (Cascading Style Sheets): Be able to design and style web pages using CSS for design, presentation and animation.",
        "JavaScript: Master the JavaScript programming language to add interactivity and dynamism to web pages, including DOM manipulation and event handling.",
      ],
    },
    {
      title: "Back-End",
      company_name: "Digital House",
      icon: javascript,
      iconBg: "#E6DEDD",
      date: "Jul 2022 - Nov 2022",
      points: [
        "Programming Languages: Proficiency in one or more backend programming languages such as Node.js, depending on the specific requirements of the project or organization.",
        "Database Management: Knowledge of database management systems (DBMS) such as MySQL, SQL Server to efficiently store and manage data for web applications.",
        "Server-side Frameworks: Familiarity with server-side frameworks Express (Node.js), to expedite the development process and ensure scalability and security.",
      ],
    },
    {
      title: "React and React Native",
      company_name: "Digital House",
      icon: reactjs,
      iconBg: "#383E56",
      date: " Mar 2023 - Jul 2023 (also doing a course in Udemy)",
      points: [
        "Proficiency in React and React Native: Mastery of React.js and React Native, including the use of components, states, props, lifecycle, routing, state management with Redux or Context API, and understanding of React Native basics for the development of mobile applications.",
        "Firebase Authentication and Authorization: Knowledge of implementing user authentication and authorization systems using Firebase Authentication, including email/password authentication, social logins (Google, Facebook, etc.), and securing resources with custom claims or rules.",
        "Debugging and Performance Optimization: Ability to debug and troubleshoot React and React Native applications using development tools.",
      ],
    },
    {
      title: "React Developer and Three js",
      icon: threejs,
      iconBg: "#E6DEDD",
      date: "Mar 2024 - Present",
      points: [
        "Coming soon..."
      ],
    },
  ];
  
  const projects = [
    {
      name: "Nike Store",
      description:
        "Web-based platform that allows users to search for some models of nike shoes and see the catalogue, new offers and discounts",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: nike,
      source_code_link: "https://github.com/",
    },
    {
      name: "Instagram",
      description:
        "Web application that enables users to create an account, login and register, also upload photos with the computer camera at the moment, search for other users, see your own profile with your images upload and have a home page with the other users post, likes and comments.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: instagramreplic,
      source_code_link: "https://github.com/",
    },
   /*{{
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    }}*/
  ];

  
  export { services, technologies, experiences,projects};