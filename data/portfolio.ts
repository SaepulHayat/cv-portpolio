import { PersonalInfo, Education, Experience, Project, Skill } from '@/types/portfolio';

export const PERSONAL_INFO: PersonalInfo = {
    name: "Saepul Hayat",
    title: "Full Stack Developer | Final-Year Informatics Engineering Student",
    location: "Bandung, Jawa Barat 40914",
    email: "saepulhayat1122@email.com",
    phone: "+62 85715524122",
    linkedin: "www.linkedin.com/in/saepul-hayatt-003647368",
    portfolio: "saepul-portfolio.vercel.app",
    about: "I am a final-year Informatics Engineering student at Widyatama University with a strong interest in Full Stack development. Through the Fullstack Web Development program at RevoU, I gained hands-on experience building projects using Flask, PostgreSQL, and React. I have developed RESTful APIs, login systems, and handled database integration. With my technical foundation and strong motivation to grow, I am confident I can be a valuable asset to your company."
};

export const EDUCATION_DATA: Education[] = [
    {
        institution: "RevoU",
        degree: "Full-stack Web Development Program",
        period: "October 2024 – Present",
        description: "Learned end-to-end web development including front-end (HTML, CSS, JavaScript, React) and back-end (Python, Flask, PostgreSQL). Completed collaborative projects, applied agile methodologies, and developed responsive web applications from scratch.",
        highlights: [
            "Mastered full-stack development with React and Flask",
            "Applied Agile methodologies in team projects",
            "Built responsive web applications from scratch"
        ]
    },
    {
        institution: "Widyatama University",
        degree: "Informatics Engineering",
        period: "February 2023 – Present",
        gpa: "3.2/4.0",
        description: "Bachelor's Degree in Informatics Engineering. Bachelor's Thesis: Development of Web-Based Web Blog System Using PHP, CodeIgniter, MySQL",
        highlights: [
            "GPA: 3.2/4.0",
            "Developing thesis on web blog system",
            "Strong foundation in computer science principles"
        ]
    }
];

export const EXPERIENCE_DATA: Experience[] = [
    // Dapat ditambah pengalaman kerja real ketika ada
];

export const PROJECTS_DATA: Project[] = [
    {
        title: "Revobank API Project",
        type: "RevoU",
        period: "April 2025",
        description: "RevoU Group Project - Digital Banking Simulation",
        background: "As part of a capstone group project at RevoU, we needed to build a comprehensive digital banking simulation that could handle real-world banking operations securely and efficiently.",
        methodology: "Built a RESTful API for digital banking simulation using Flask. Implemented endpoints for user authentication and transactions, ensured data protection, and collaborated using Git and Agile sprints.",
        results: [
            "Successfully implemented secure user authentication system",
            "Built transaction processing with data validation",
            "Delivered scalable API architecture using Flask",
            "Applied Agile methodology for team collaboration"
        ],
        technologies: ["Python", "Flask", "PostgreSQL", "Git", "Postman"],
        githubUrl: "https://github.com/SaepulHayat/final_project_Full Stack.git"
    },
    {
        title: "Web Log Application Project",
        type: "Academic",
        period: "September 2024",
        description: "Widyatama University Academic Project - Blog Management System",
        background: "Developed a comprehensive blog management system as part of academic requirements, focusing on MVC architecture and database integration.",
        methodology: "Built using PHP (CodeIgniter) and MySQL. The system includes user login, article CRUD operations, and follows MVC architecture pattern for clean code structure.",
        results: [
            "Implemented complete CRUD operations for blog posts",
            "Built secure user authentication system",
            "Applied MVC architecture for maintainable code",
            "Integrated MySQL database with optimized queries"
        ],
        technologies: ["PHP", "CodeIgniter", "MySQL", "HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/SaepulHayat/web-log.git"
    }
];

export const SKILLS_DATA: Skill[] = [
    {
        category: "Frontend",
        items: ["HTML", "CSS", "JavaScript", "React.js", "Next.js"],
        icon: "code",
        color: "from-blue-500 to-blue-600"
    },
    {
        category: "Full Stack",
        items: ["Python", "Flask", "PHP", "CodeIgniter"],
        icon: "server",
        color: "from-green-500 to-green-600"
    },
    {
        category: "Database",
        items: ["PostgreSQL", "MySQL"],
        icon: "database",
        color: "from-purple-500 to-purple-600"
    },
    {
        category: "Tools",
        items: ["Git", "GitHub", "Postman", "VS Code"],
        icon: "�",
        color: "from-orange-500 to-orange-600"
    },
    {
        category: "Soft Skills",
        items: ["Communication", "Teamwork", "Problem Solving", "Quick Learning"],
        icon: "device",
        color: "from-pink-500 to-pink-600"
    }
];
