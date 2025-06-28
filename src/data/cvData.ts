export const profileData = {
  name: "KHS",
  title: "Chief Crypto Viber",
  location: "Metaverse, World",
  email: "hot@hotmail.com",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  twitter: "https://x.com/elonmusk"
};

export const timelineData = [
  {
    id: "1",
    title: "Senior Software Engineer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "2022 - Present",
    startDate: "2022-03-01",
    description: "Leading a team of 5 engineers in developing scalable web applications using React, Node.js, and AWS. Responsible for technical architecture decisions and mentoring junior developers.",
    achievements: [
      "Reduced application load time by 40% through performance optimization",
      "Led the migration from legacy PHP system to modern React/Node.js stack",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
      "Mentored 3 junior developers who were promoted to mid-level positions"
    ],
    type: "work" as const
  },
  {
    id: "2",
    title: "Master of Science in Computer Science",
    company: "Stanford University",
    location: "Stanford, CA",
    period: "2020 - 2022",
    startDate: "2020-09-01",
    description: "Specialized in Machine Learning and Distributed Systems. Conducted research on neural network optimization techniques under Prof. Sarah Chen.",
    achievements: [
      "GPA: 3.9/4.0, Summa Cum Laude",
      "Published 2 papers in top-tier ML conferences",
      "Teaching Assistant for CS229 Machine Learning",
      "President of Women in Computer Science organization"
    ],
    type: "education" as const
  },
  {
    id: "3",
    title: "Software Engineer",
    company: "InnovateLab Inc.",
    location: "Palo Alto, CA",
    period: "2019 - 2022",
    startDate: "2019-06-01",
    description: "Developed full-stack applications for fintech clients using React, Python, and PostgreSQL. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    achievements: [
      "Built 3 production applications serving 10k+ daily active users",
      "Implemented real-time data processing pipeline handling 1M+ transactions",
      "Optimized database queries reducing response time by 35%",
      "Led code review process improving code quality metrics by 25%"
    ],
    type: "work" as const
  },
  {
    id: "4",
    title: "Bachelor of Science in Computer Engineering",
    company: "UC Berkeley",
    location: "Berkeley, CA",
    period: "2015 - 2019",
    startDate: "2015-08-01",
    description: "Comprehensive study in computer systems, software engineering, and electrical engineering. Active member of several technical organizations and hackathon participant.",
    achievements: [
      "GPA: 3.8/4.0, Dean's List for 6 semesters",
      "Winner of Berkeley Hackathon 2018 - Best Technical Innovation",
      "Vice President of Association for Computing Machinery (ACM)",
      "Completed internships at Google and Microsoft"
    ],
    type: "education" as const
  },
  {
    id: "5",
    title: "Software Engineering Intern",
    company: "Google",
    location: "Mountain View, CA",
    period: "Summer 2018",
    startDate: "2018-06-01",
    description: "Worked on Google Cloud Platform team developing internal tooling for container orchestration. Gained experience with large-scale distributed systems.",
    achievements: [
      "Developed monitoring dashboard used by 200+ internal users",
      "Contributed to open-source Kubernetes project",
      "Received 'Outstanding Intern' recognition from team lead",
      "Full-time offer extended for post-graduation"
    ],
    type: "work" as const
  },
  {
    id: "6",
    title: "Junior Developer",
    company: "StartupXYZ",
    location: "San Jose, CA",
    period: "2017 - 2019",
    startDate: "2017-09-01",
    description: "Part-time role during university focusing on frontend development using React and TypeScript. Helped build the company's first web application from scratch.",
    achievements: [
      "Built responsive web interface with 98% lighthouse performance score",
      "Implemented user authentication and authorization system",
      "Created reusable component library adopted across all products",
      "Collaborated with UX team to improve user engagement by 45%"
    ],
    type: "work" as const
  }
];

export const achievementsData = [
  {
    id: "2",
    title: "Tech Excellence Award",
    description: "Company-wide recognition for outstanding technical leadership and innovation in software development.",
    year: "2023",
    type: "award" as const
  },
  {
    id: "3",
    title: "Women in Tech Leadership Award",
    description: "Regional recognition for promoting diversity and inclusion in technology workplace.",
    year: "2022",
    type: "recognition" as const
  },
  {
    id: "4",
    title: "Best Paper Award - ML Conference",
    description: "Academic recognition for research contribution in neural network optimization techniques.",
    year: "2021",
    type: "award" as const
  }
];

export const publicationsData = [
  {
    id: "1",
    title: "Optimizing Neural Network Performance in Distributed Systems",
    description: "Published in International Conference on Machine Learning (ICML). Co-authored with Prof. Sarah Chen, Stanford University.",
    year: "2022",
    type: "publication" as const,
    icon: "google-scholar",
    url: "https://scholar.google.com/scholar?q=Optimizing+Neural+Network+Performance+in+Distributed+Systems"
  },
  {
    id: "2",
    title: "Scalable Real-time Data Processing Architecture",
    description: "Technical whitepaper published in IEEE Transactions on Parallel and Distributed Systems.",
    year: "2021",
    type: "publication" as const,
    icon: "google-scholar",
    url: "https://scholar.google.com/scholar?q=Scalable+Real-time+Data+Processing+Architecture"
  },
  {
    id: "3",
    title: "Modern Frontend Development Best Practices",
    description: "Technical blog series on Medium with 50k+ views, covering React performance optimization and TypeScript patterns.",
    year: "2021",
    type: "publication" as const
  },
  {
    id: "4",
    title: "Machine Learning for Financial Fraud Detection",
    description: "Research paper presented at FinTech Innovation Summit, discussing ML applications in financial security.",
    year: "2020",
    type: "publication" as const,
    icon: "arxiv",
    url: "https://arxiv.org/abs/2001.08361"
  }
];

export const certificationsData = [
  {
    id: "1",
    title: "AWS Solutions Architect Professional",
    description: "Advanced certification demonstrating expertise in designing distributed applications and systems on AWS platform.",
    year: "2023",
    type: "certification" as const
  }
];