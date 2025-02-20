import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mahir Barot",
  initials: "MB",
  url: "https://mahirbarot.com",
  location: "Vadodara, Gujarat",
  locationLink: "https://www.google.com/maps/place/vadodara",
  description:
    "Experienced Full Stack Developer with a strong background in web development, Python software development, and database management. Proven track record of leading innovative projects and delivering impactful solutions. Seeking to leverage technical and leadership skills in a dynamic tech industry role.",
  summary:
    "Results-driven Full Stack Developer with expertise in web development, Python software development, and database management. Adept at leading innovative projects and delivering high-impact solutions. Seeking to apply technical and leadership skills in a dynamic tech industry role.",
  avatarUrl: "/image.png",
  skills: [
    "C#",
    "Python",
    "JavaScript",
    "SQL",
    "Firebase Realtime DB",
    "Oracle",
    "Flask",
    "React",
    "Streamlit",
    "Git",
    "GitHub",
    "Visual Studio",
    "PyCharm",
    "Windows",
    "Linux",
    "Ubuntu",
    "Microsoft Azure Fundamentals (AZ-900)",
    "Microsoft Azure Administrator (AZ-104)",
    "AWS Introduction to Cloud",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mahirbarot.connect@gmail.com",
    tel: "+91 9725-328-105",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mahirbarot",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/mahirbarot",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "UCI",
      href: "https://uci.com",
      badges: [],
      location: "Vadodara",
      title: "Full Stack Developer",
      logoUrl: "/UCI.png",
      start: "Aug 2024",
      end: "Current",
      description:
        "Led the AI team in delivering innovative solutions, including a Smart City Management system leveraging React, Next.js, and Python for real-time data visualization and decision-making. Developed a Proof of Concept (POC) for Forestry Management for the NYC Parks Department, showcasing AI-driven insights for resource optimization. Built an RFP Response Generator in Azure AI Studio, utilizing Python for advanced data cleaning and preprocessing to streamline proposal generation. Ensured successful project delivery by managing cross-functional teams, integrating modern technologies, and adhering to tight deadlines.",
    },
    {
      company: "Multidots",
      href: "https://multidots.com",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/multidots.png",
      start: "Jan 2024",
      end: "Jun 2024 (0.5 yr)",
      description:
        "Spearheaded the development of 20+ industry-level projects using React, SCSS, and PHP for Gutenberg in WordPress. Designed and deployed custom WordPress themes and plugins, enhancing site performance and functionality. Directed the deployment of live websites on Apache servers, ensuring smooth delivery using in-house tools.",
    },
    {
      company: "Neuralbee",
      href: "https://neuralbee.com",
      badges: [],
      location: "Remote",
      title: "Software Engineer & Founder",
      logoUrl: "/neuralbee.png",
      start: "Nov 2022",
      end: "Dec 2023 (1.1 yr)",
      description:
        "Built AI solutions integrating OpenAI’s API, enabling natural language processing and text-to-image diffusion in Python. Optimized backend development using Flask and Firebase, achieving scalable and efficient systems. Conducted data cleaning and preprocessing for advanced machine learning models.",
    },
    {
      company: "Freelance",
      href: "#",
      badges: [],
      location: "Vadodara, Remote Clients",
      title: "ReactJS Developer",
      logoUrl: "/freelance.png",
      start: "May 2021",
      end: "Dec 2022 (1.5 yr)",
      description:
        "Delivered tailored websites for clients, including JHP Foods (Restaurant Business) and Ease at Homes (Real Estate Developer, Australia). Championed end-to-end development, achieving customer satisfaction and repeat business.",
    },
  ],
  education: [
    {
      school: "Navrachna University",
      href: "https://navrachanauniversity.edu.in",
      degree: "B.Tech in Computer Science",
      logoUrl: "/navrachna.png",
      start: "2021",
      end: "2024",
      cgpa: "9.51/10 CGPA (Gold Medalist)",
    },
    {
      school: "Parul University",
      href: "https://paruluniversity.ac.in",
      degree: "Diploma in Information Technology",
      logoUrl: "/parul.png",
      start: "2018",
      end: "2021",
      cgpa: "10/10 CGPA (University Topper)",
    },
  ],
  projects: [
    {
      title: "AI-Driven Site Generation (Neuralbee)",
      href: "#",
      dates: "Jan 2023 - May 2023",
      active: true,
      description:
        "Developed a SaaS platform to generate websites based on user prompts in under 35 seconds. Integrated multiple AI models and APIs, attracting venture capital interest.",
      technologies: [
        "React",
        "Next.js",
        "Python",
        "Flask",
        "Firebase",
        "Streamlit",
      ],
      links: [],
      image: "",
      video: "./nyc-demo.mp4",
    },
    {
      title: "Copilot-Style Code Generation Tool",
      href: "#",
      dates: "Jan 2023 - May 2023",
      active: true,
      description:
        "Built an AI-powered tool to enhance developer productivity by providing real-time code suggestions using language models.",
      technologies: [
        "React",
        "Next.js",
        "Python",
        "Flask",
        "Firebase",
        "Streamlit",
      ],
      links: [],
      image: "",
      video: "./nyc-2.mp4",
    },
    {
      title: "Automated Machine Learning (AutoML)",
      href: "#",
      dates: "Jan 2023 - May 2023",
      active: true,
      description:
        "Streamlined data science pipelines by developing an AutoML system for exploratory data analysis, model selection, and training.",
      technologies: [
        "React",
        "Next.js",
        "Python",
        "Flask",
        "Firebase",
        "Streamlit",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "House Price Prediction",
      href: "#",
      dates: "Jan 2023 - May 2023",
      active: true,
      description:
        "Implemented regression models (Linear, Lasso, Ridge) on Streamlit for accurate real estate market insights.",
      technologies: [
        "React",
        "Next.js",
        "Python",
        "Flask",
        "Firebase",
        "Streamlit",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
  honorsAndAwards: [
    {
      title: "Devang Mehta IT Awards",
      year: "2023",
      description: "Recognized for outstanding contributions to the IT field.",
    },
    {
      title: "Hackathon Hack4Change",
      year: "2022",
      description: "Achieved 4th place among 75 teams across Gujarat.",
    },
    {
      title: "University Topper (B.Tech)",
      year: "2024",
      description: "Consistently ranked first in the Computer Science program.",
    },
    {
      title: "Diploma Achievements",
      year: "2021",
      description: "Secured 1st rank at Gujarat Technological University.",
    },
  ],
  leadership: [
    {
      title: "Coding and Tech Workshops",
      description:
        "Administered coding and tech workshops at Navrachna University, mentoring over 50 students in machine learning and web development.",
    },
    {
      title: "Hackathon Coordination",
      description:
        "Coordinated university-level hackathons, fostering collaboration and innovation among participants.",
    },
    {
      title: "Technical Blogging",
      description:
        "Authored technical blogs on Medium, reaching a niche audience and promoting tech awareness.",
    },
    {
      title: "Community Contributions",
      description:
        "Contributed to community-led initiatives on GitHub and Kaggle, driving collaborative learning and innovation.",
    },
  ],
} as const;
