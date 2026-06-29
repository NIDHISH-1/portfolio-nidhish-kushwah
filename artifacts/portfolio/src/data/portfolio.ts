export const PORTFOLIO_DATA = {
  personal: {
    name: "Nidhish Kushwah",
    role: "Backend Developer & AI Enthusiast",
    tagline: "Turning Ideas into Intelligent Solutions.",
    status: "🟢 Open to Technical Internships",
    location: "Indore, India",
    email: "kushwahnidhish@gmail.com",
    resumeUrl: "https://drive.google.com/uc?export=download&id=1FEXesVyU-vSvegozKXiojkOmOCV54Icb",
    about: "I am a passionate Backend Developer with a strong interest in Artificial Intelligence, Cybersecurity, and modern software development. I enjoy designing secure, scalable, and efficient backend systems that solve real-world problems while delivering seamless user experiences. My technical interests include building AI-powered applications, developing RESTful APIs, implementing secure software engineering practices, and exploring emerging technologies that create meaningful impact.\n\nI am a continuous learner who enjoys taking on challenging projects, participating in hackathons, and collaborating with teams to transform innovative ideas into practical solutions. I believe in writing clean, maintainable code and following industry best practices to build reliable software. My goal is to grow as a software engineer by continuously expanding my knowledge, contributing to impactful projects, and leveraging technology to solve complex real-world challenges.",
    stats: [
      { label: "Years Coding", value: "2+" },
      { label: "Projects", value: "4" },
      { label: "Hackathons", value: "3" },
      { label: "Research Paper", value: "1" },
    ],
  },
  social: {
    github: "https://github.com/NIDHISH-1",
    linkedin: "https://www.linkedin.com/in/nidhish-kushwah-153162392",
    leetcode: "https://leetcode.com/u/IY8Bpo8Zm7/",
    hackerrank: "https://www.hackerrank.com/kushwahnidhish/",
  },
  education: [
    {
      institution: "Acropolis Institute of Technology and Research",
      degree: "B.Tech CSE (AI & ML)",
      year: "2nd Year | Expected 2028",
      cgpa: "7.5/10",
      coursework: ["Data Structures & Algorithms", "OOP (Java)", "DBMS", "OS", "Computer Networks", "Software Engineering", "Web Development", "Artificial Intelligence", "Cyber Security"],
    }
  ],
  skills: {
    "Programming Languages": [
      { name: "Python", level: "Intermediate", progress: 70 },
      { name: "C++", level: "Intermediate", progress: 65 }
    ],
    "Data Science / AI": [
      { name: "NumPy", level: "Advanced", progress: 85 },
      { name: "Pandas", level: "Intermediate", progress: 75 },
      { name: "scikit-learn", level: "Intermediate", progress: 70 },
      { name: "matplotlib", level: "Intermediate", progress: 65 },
      { name: "OpenCV", level: "Intermediate", progress: 60 },
      { name: "TensorFlow", level: "Intermediate", progress: 50 }
    ],
    "Backend": [
      { name: "FastAPI", level: "Intermediate", progress: 75 },
      { name: "Node.js", level: "Intermediate", progress: 70 },
      { name: "Express.js", level: "Intermediate", progress: 70 }
    ],
    "Frontend": [
      { name: "React.js", level: "Intermediate", progress: 75 },
      { name: "Tailwind CSS", level: "Intermediate", progress: 80 },
      { name: "CSS", level: "Intermediate", progress: 80 }
    ],
    "Database": [
      { name: "MongoDB", level: "Intermediate", progress: 75 },
      { name: "MySQL", level: "Intermediate", progress: 70 }
    ],
    "Tools & DevOps": [
      { name: "VS Code", level: "Advanced", progress: 90 },
      { name: "Git & GitHub", level: "Advanced", progress: 85 },
      { name: "Chrome DevTools", level: "Advanced", progress: 80 },
      { name: "GitHub Actions", level: "Beginner", progress: 40 }
    ],
    "Soft Skills": [
      "Problem Solving", "Analytical Thinking", "Team Collaboration", "Effective Communication", 
      "Critical Thinking", "Adaptability", "Time Management", "Leadership", "Creativity"
    ]
  },
  projects: [
    {
      title: "PhishGuard AI",
      category: "Cybersecurity",
      status: "Completed",
      description: "An AI-powered phishing detection system that analyzes suspicious URLs and emails to identify potential phishing attacks. Provides real-time risk assessment, explainable AI insights, and security recommendations.",
      features: ["AI-powered phishing detection", "Real-time URL & email analysis", "Risk scoring", "Threat intelligence integration", "User-friendly dashboard"],
      tech: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "Google Gemini API", "MongoDB", "JWT", "bcrypt"],
      github: "https://github.com/NIDHISH-1/PhishGuard-AI",
      live: "https://elite-staff-ai--kushwahnidhish.replit.app/",
      duration: "2 months | Solo"
    },
    {
      title: "DSA Tracker",
      category: "Web",
      status: "Completed",
      description: "A productivity platform for DSA preparation. Track solved problems, categorize by topic and difficulty, monitor progress with statistics, and maintain daily streaks.",
      features: ["User Auth", "Add/Edit/Delete Problems", "Topic-wise Categorization", "Difficulty Levels", "Progress Dashboard", "Search/Filter", "Daily Streak Tracking", "Personal Notes"],
      tech: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "bcrypt"],
      github: "",
      live: "https://dsa-visualizer--nidhishlegend.replit.app",
      duration: "1 month | Solo"
    },
    {
      title: "Career Copilot",
      category: "AI",
      status: "In Progress",
      description: "An intelligent career development platform that provides personalized resume feedback, interview preparation, skill recommendations, and career roadmaps using AI.",
      features: ["AI Career Recommendations", "Resume Analysis", "Learning Roadmaps", "Mock Interview Prep", "Skill Gap Analysis", "Job Role Recommendations", "Progress Dashboard"],
      tech: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "Google Gemini API", "MongoDB", "JWT", "bcrypt"],
      github: "https://github.com/NIDHISH-1/careercopilpot",
      live: "",
      duration: "3–4 months | Solo"
    },
    {
      title: "Face Recognition Attendance System",
      category: "AI",
      status: "In Progress",
      description: "Automates attendance tracking using computer vision and facial recognition. Captures live images, detects/recognizes registered faces, marks attendance in real time. Anti-proxy mechanism included.",
      features: ["AI Face Detection", "Real-Time Attendance Marking", "Secure Registration", "High Accuracy Matching", "Attendance Reports", "Admin Dashboard", "Contactless Process"],
      tech: ["HTML", "CSS", "JavaScript", "Python", "Flask", "OpenCV", "Face Recognition", "MySQL"],
      github: "https://github.com/NIDHISH-1/Face_recognitionBasedAttendencesystem",
      live: "",
      duration: "2 months | Solo"
    }
  ],
  experience: [
    {
      type: "Research",
      title: "Published Research Paper in GACC Book",
      topic: "Panini's Astadhyayi (linguistics meets computation/AI)",
      description: "A unique achievement exploring the intersection of ancient linguistics and modern computational models."
    },
    {
      type: "Freelance",
      title: "Video Editing",
      topic: "Freelance Creative Work",
      description: "Produced engaging video content, demonstrating creativity, storytelling, and proficiency with professional editing software."
    }
  ],
  certifications: [
    {
      title: "Python For Data Science",
      issuer: "NPTEL",
      year: "2023"
    },
    {
      title: "Natural Language Processing",
      issuer: "NPTEL",
      year: "2024"
    },
    {
      title: "Fundamentals of AI & ML",
      issuer: "Infosys Springboard",
      year: "2024"
    }
  ],
  hackathons: [
    {
      name: "Intel AI Hackathon",
      position: "🥈 2nd Place",
      role: "Team Leader",
      project: "PhishGuard AI — AI-powered phishing detection system",
      highlight: true
    },
    {
      name: "Summer of Code Hackathon",
      position: "Participant",
      role: "Team Leader",
      project: "Career Copilot — AI-powered career guidance platform",
      highlight: false
    },
    {
      name: "Smart India Hackathon (SIH) 2025",
      position: "Selected in Internal Round",
      role: "Team Member",
      project: "Collaborated on innovative software solution for real-world problem statement",
      highlight: false
    }
  ]
};
