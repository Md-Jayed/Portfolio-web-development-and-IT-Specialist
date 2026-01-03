import { Skill, Experience, Education, Project, Review } from './types';

export const PERSONAL_INFO = {
  name: "MD JAYED HOSSEN",
  title: "Web Developer & IT Support Specialist",
  location: "Az Zahra, Jeddah, Saudi Arabia",
  email: "jayedmd1122@gmail.com",
  phone: "+966 572321849",
  github: "github.com/Md-Jayed",
  linkedin: "linkedin.com/in/md-jayed-hossen",
  fiverr: "fiverr.com/jayed320",
  behance: "behance.net/mdjayedhossen1",
  photoUrl: "https://d3k81ch9hvuctc.cloudfront.net/company/W7Ep9x/images/0ee3fd4f-be97-4ff6-ab91-9aa1decba8f3.png"
};

export const SKILLS: Skill[] = [
  { name: "React.js", category: "Development" },
  { name: "Node.js", category: "Development" },
  { name: "JavaScript", category: "Development" },
  { name: "HTML5/CSS", category: "Development" },
  { name: "PHP/Python", category: "Development" },
  { name: "Django", category: "Development" },
  { name: "WordPress", category: "Development" },
  { name: "Shopify", category: "Development" },
  { name: "SQL/MongoDB", category: "Development" },
  
  { name: "IT Troubleshooting", category: "IT & Networking" },
  { name: "Network Support (LAN/Wi-Fi)", category: "IT & Networking" },
  { name: "Hardware Maintenance", category: "IT & Networking" },
  { name: "Windows OS Config", category: "IT & Networking" },
  { name: "Cybersecurity", category: "IT & Networking" },
  { name: "Remote Support", category: "IT & Networking" },
  
  { name: "Photoshop", category: "Design & Tools" },
  { name: "Illustrator", category: "Design & Tools" },
  { name: "Data Visualization", category: "Design & Tools" },
  
  { name: "N8N Automations", category: "AI & Automation" },
  { name: "AI Agent & Automation", category: "AI & Automation" },
  { name: "Machine Learning", category: "AI & Automation" },
  { name: "All AI Tools", category: "AI & Automation" }
];

export const PROJECTS: Project[] = [
  {
    title: "Poridheo",
    url: "https://www.poridheo.com/",
    description: "Premium fashion e-commerce platform built for high performance and seamless user experience.",
    tags: ["WordPress", "E-commerce", "SEO"]
  },
  {
    title: "Big Lake Candy Company",
    url: "https://biglakecandy.com/",
    description: "USA-based candy store optimized for speed and high conversion rates on Shopify.",
    tags: ["Shopify", "UI/UX", "Performance"]
  },
  {
    title: "Mandar Is",
    url: "https://mandar.is",
    description: "Sophisticated brand website showcasing modern web design principles and responsive layouts.",
    tags: ["Web Design", "Responsive", "Branding"]
  },
  {
    title: "Award Carpet Cleaning",
    url: "https://awardcarpetcleaning.ca/",
    description: "Service-oriented business website with advanced booking features and local SEO optimization.",
    tags: ["Business", "Booking System", "Canada"]
  }
];

export const REVIEWS: Review[] = [
  {
    name: "ella778",
    location: "Canada",
    text: "Hayes delivered exceptional service, going above and beyond to ensure that the website met the highest standards of quality. His attention to detail and commitment to excellence resulted in a beautifully crafted site."
  },
  {
    name: "wsidom0fages",
    location: "United States",
    text: "He helped me build my shop and answered any questions or requests I had"
  },
  {
    name: "abshirsalad",
    location: "Gambia",
    text: "The BEST designer in Fiverr . . . He care his listens his customer & will always tries his best to solve any issues that customer may have. Many thanks to his service . . . no money can buy !"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Lead Developer (Freelance)",
    company: "Big Lake Candy Company – USA",
    location: "Remote",
    period: "Mar 2023 - Present",
    description: [
      "Improved Shopify store speed, increasing customer engagement and performance.",
      "Managed and updated 200+ products and website content for optimal store organization.",
      "Resolved complex technical issues, reducing customer support requests significantly.",
      "Implemented mobile responsiveness and fixed layout issues for better user experience.",
      "Saved the team time by solving daily website and technical problems quickly."
    ]
  },
  {
    role: "Lead Developer (Freelancer)",
    company: "UrbanCraf Fashion Retail Pvt. Ltd. – India",
    location: "Remote",
    period: "Jun 2023 - Aug 2025",
    description: [
      "Created a modern WordPress website that increased online visibility and brand trust.",
      "Improved website speed and SEO, helping the site rank better and load faster.",
      "Added custom features that reduced manual work for staff members.",
      "Delivered website updates on time, ensuring a problem-free online presence.",
      "Increased user engagement through clean layout and intuitive navigation."
    ]
  },
  {
    role: "Freelancer (Level Two Seller)",
    company: "Fiverr Marketplace – Global",
    location: "Remote",
    period: "Jun 2019 - Present",
    description: [
      "Completed 110+ projects for international clients in the USA, India, and UAE.",
      "Built fast and responsive websites that helped clients get more leads and customers.",
      "Developed e-commerce stores that improved product sales and user experience.",
      "Set up N8N automations that helped clients save hours of work each week.",
      "Maintained strong repeat clients through clear communication and quality delivery."
    ]
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    degree: "BSc in Computer Science and Engineering",
    institution: "BGC Trust University",
    gpa: "3.51 / 4.0",
    date: "Dec 2022"
  }
];