
const logotext = "Amritansu";
const meta = {
    title: "Amritansu Aditya",
    description: "I am Amritansu Aditya, Machine Learning and Full stack devloper(MERN Developer).",
};

const introdata = {
    title: "I'm Amritansu Aditya",
    animated: {
        first: "Building intelligent AI systems",
        second: "Crafting fast, responsive web apps",
        third: "Solving real-world problems with code"
        },
    description: "I'm a Machine Learning and MERN developer with a passion for building intelligent systems and scalable web apps. I love coding in C++, Python, JavaScript, React, and Node.js.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "a'bit about my self",
    aboutme: "I’m a passionate Machine Learning enthusiast and Full Stack Developer (MERN) with a strong drive to build impactful, scalable solutions. I thrive on tackling complex problems and love working on projects that demand both creativity and technical depth. A fast learner and adaptive team player, I enjoy collaborating to turn ideas into reality. Always curious, I continuously explore new technologies to sharpen my skills and stay ahead in the ever-evolving tech landscape.",
};


const skills = [
  // --- Core Programming ---
  { name: "Python", value: 95 },
  { name: "C++", value: 95 },
  { name: "JavaScript (ES6+)", value: 95 },

  // --- Frontend ---
  { name: "React.js", value: 90 },
  { name: "Zustand", value: 80 },

  // --- Backend & API ---
  { name: "Node.js", value: 95 },
  { name: "Express.js", value: 90 },
  { name: "MongoDB", value: 90 },

  // --- Machine Learning & AI ---
  { name: "PyTorch", value: 80 },
  { name: "Scikit-learn", value: 80 },

  
  // --- DevOps / Tools ---
  { name: "Git & GitHub", value: 90 },
  { name: "Postman", value: 85 },

];



const dataportfolio = [
  {
    title: "GPT-2 Rebuild",
    description: "Implemented GPT-2 from scratch using PyTorch. Includes BPE tokenizer, training loop, and transformer architecture.",
    link: "https://github.com/Amritansu-Adi/GPT_2",
    tags: ["AI", "PyTorch", "Transformer"],
    bgColorLight: "#a995ffff", // soft violet
    bgColorDark: "#8b5cf6",  // violet
  },
  {
    title: "NanoGPT",
    description: "Minimal GPT architecture reimplementation for quick experimentation and fine-tuning on custom datasets.",
    link: "https://github.com/Amritansu-Adi/NanoGPT",
    tags: ["NLP", "MiniGPT", "PyTorch"],
    bgColorLight: "#9cf7ffff", // light cyan
    bgColorDark: "#06b6d4",  // cyan
  },
  {
    title: "makemore (Auto-regressive Model)",
    description: "Built character-level name generator using custom transformer blocks and training loop.",
    link: "https://github.com/Amritansu-Adi/Autoregressive--NLP-model-makemore",
    tags: ["Auto-regressive", "PyTorch", "NLP"],
    bgColorLight: "#fff79bff", // light amber
    bgColorDark: "#f59e0b",  // amber
  },
  {
    title: "MERN Chat App",
    description: "Real-time messaging app using React, Node.js, MongoDB, and Socket.IO. Features include group chat, auth, and notifications.",
    link: "https://github.com/Amritansu-Adi/MERN-Chat-App",
    live: "https://mern-chat-app-1-buzi.onrender.com/",
    tags: ["MERN", "Socket.IO", "Real-time"],
    bgColorLight: "#a9fed2ff", // light green
    bgColorDark: "#10b981",  // green
  },
  {
    title: "ELNS (Client Project)",
    description: "Client dashboard for result publication built using React, Node.js, Express, and MongoDB.",
    link: "https://github.com/Amritansu-Adi/ELNS",
    live: "https://elns-ugte.onrender.com",
    tags: ["MERN", "Client", "Dashboard"],
    bgColorLight: "#96c4ffff", // light blue
    bgColorDark: "#3b82f6",  // blue
  },
  {
    title: "Disaster Relief Platform",
    description: "Web platform to visualize and manage relief logistics using maps and coordination tools.",
    link: "https://github.com/Amritansu-Adi/DisRef",
    tags: ["Relief", "GeoTools", "WebApp"],
    bgColorLight: "#faa4a4ff", // light red
    bgColorDark: "#ef4444",  // red
  },
  {
    title: "Chef Claude (Recipe Generator)",
    description: "Recipe generation app using ingredient input and LLM API responses.",
    link: "https://github.com/Amritansu-Adi/Recipe-Generator",
    tags: ["API", "Prompting", "Frontend"],
    bgColorLight: "#ff9dd4ff", // light pink
    bgColorDark: "#ec4899",  // pink
  },
  {
    title: "Investomedia",
    description: "Finance dashboard with NASDAQ stock trends, price analysis, and curated news feed.",
    link: "https://amritansu-adi.github.io/investomedia/",
    live: "https://amritansu-adi.github.io/investomedia/",
    tags: ["Finance", "Stocks", "Frontend"],
    bgColorLight: "#ffdbabff", // light orange
    bgColorDark: "#f97316",  // orange
  },
];


const contactConfig = {
    YOUR_EMAIL: "amritansaditya1@gmail.com",
    YOUR_FONE: "+918340664121",
    description: "I'm available on the platforms below — feel free to reach out anytime!",
    YOUR_SERVICE_ID: "amritansu_adi",
    YOUR_TEMPLATE_ID: "template_tvucwc9",
    YOUR_USER_ID: "k7tlclrU2q2BKorNi",
};

const socialprofils = {
    github: "https://github.com/Amritansu-Adi/",
    linkedin: "https://www.linkedin.com/in/amritansu-adi/",
    instagram: "https://www.instagram.com/lm10amri/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};