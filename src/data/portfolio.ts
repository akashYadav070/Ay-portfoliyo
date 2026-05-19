import rentRideImg from "../assets/rentRideImg.jpg";
import hospitalImg from "../assets/hospitalImg.jpg";
import jecrcCertificate from "../assets/certificates/image1.png";

export const certificates = [
  {
    title: "Certificate of Accomplishment",
    subtitle: "MERN Full Stack Live Project",
    issuer: "CollegeDekho / ImaginXP / JECRC University",
    project: "Gatherly – An Event Management Website",
    date: "Mar 27, 2025 – Jul 30, 2025",
    description:
      "Successfully completed a live project based on MERN Full Stack under the guidance of Industry Expert Mr. Rajesh Chaudhari.",
    image: jecrcCertificate,
    certificateUrl: "/certificates/JECRC-Akash-Yadav.pdf",
  },
];

export const personal = {
  name: "Akash Yadav",
  title: "Full Stack MERN Developer",
  location: "Jagatpura, Jaipur, Rajasthan, India",
  email: "akash.yadav7782@gmail.com",
  phone: "+91 7023565109",
  linkedin: "https://linkedin.com/in/akash-yadav-1a9754321",
  github: "https://github.com/akashYadav070",
  summary:
    "Full Stack Developer with hands-on experience in building web applications using JavaScript, Node.js, Express.js, React, and MongoDB. Skilled in backend API development, database management, and creating responsive user interfaces. Passionate about solving real-world problems through scalable and efficient software solutions.",
};

export const skills = [
  { category: "Languages", items: ["C", "C++", "JavaScript", "Java (Basic)"] },
  { category: "Frontend", items: ["HTML", "CSS", "React.js", "Tailwind CSS", "Bootstrap"] },
  { category: "Backend", items: ["Node.js", "Express.js"] },
  { category: "Database", items: ["MongoDB", "SQL (Basic)"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Postman"] },
  {
    category: "Core Concepts",
    items: ["REST APIs", "CRUD Operations", "JWT Auth", "Mongoose"],
  },
];

export const experience = [
  {
    company: "Car Dekho",
    role: "Full Stack Developer Intern",
    duration: "May 2026 – Present",
    location: "Jaipur, Rajasthan",
    points: [
      "Developed full-stack web applications using MongoDB, Express.js, React, and Node.js.",
      "Built REST APIs and implemented JWT-based authentication.",
      "Created responsive user interfaces with Tailwind CSS and Bootstrap.",
      "Performed CRUD operations and integrated MongoDB using Mongoose.",
      "Used GitHub for version control and deployed applications on Vercel and Render.",
    ],
  },
];

export const projects = [
  {
    title: "Rent-A-Ride – Self Drive Car Rental Platform",
    image: rentRideImg,

    description:
      "A self-drive car rental platform enabling users to browse, check availability, and book vehicles online with secure auth.",
    points: [
      "Built backend REST APIs with Node.js & Express.js",
      "Implemented vehicle availability and booking logic",
      "Created a fully responsive frontend with React",
    ],
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    demo: "https://self-drive-car.pages.dev",
    github: "https://github.com/akashYadav070/Self-Drive-Car.git",
  },
  {
    title: "Hospital Management System",
    image: hospitalImg,
    description:
      "A hospital record management system to manage patient and staff data with structured backend services.",
    points: [
      "Backend services with Node.js & Express.js",
      "Structured data handling for patient & staff records",
      "Secure CRUD operations across modules",
    ],
    tags: ["Node.js", "Express", "MongoDB"],
     demo: "https://1df93343.hospital-management-system-bmu.pages.dev/",
    github: "https://github.com/akashYadav070/Hospital-Management-System",
  },
];

export const education = [
  { degree: "MCA", school: "JECRC University" },
  { degree: "BCA", school: "University of Rajasthan" },
  { degree: "Senior Secondary (12th)", school: "RBSE" },
  { degree: "Secondary (10th)", school: "RBSE" },
];

export const languages = ["Hindi", "English", "Punjabi", "Haryanvi"];
