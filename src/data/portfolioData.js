import {
  FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone, FaBirthdayCake,
  FaCode, FaMicrochip, FaRobot, FaBluetoothB, FaProjectDiagram, FaChartLine,
  FaCogs, FaTint, FaCar, FaLayerGroup, FaTools, FaPython, FaCuttlefish,
  FaRaspberryPi, FaCertificate, FaAward
} from 'react-icons/fa';
import { SiStmicroelectronics, SiArduino, SiAutodesk, SiCplusplus } from 'react-icons/si';

export const personalInfo = {
  name: "Md. Shishir Mondol",
  firstName: "Shishir",
  lastName: "Mondol",
  title: "Electrical & Electronic Engineering Undergraduate",
  email: "postbox.shishir@gmail.com",
  phone: "+8801722990975",
  location: "Rajshahi, Bangladesh",
  github: "ssr.mndl",
  linkedin: "md-shishir-mondol",
  age: "22",
  languages: [
    { name: "Bangla", level: "Native" },
    { name: "English", level: "Full Professional" }
  ],
  profileSummary: "I am a motivated and detail-oriented Electrical and Electronic Engineering undergraduate at Rajshahi University of Engineering and Technology (RUET), with hands-on experience gained through academic projects, industrial training, and extracurricular involvement. I enjoy working collaboratively, adapting to new challenges, and applying my problem-solving abilities to practical situations. I am committed to continuous learning, maintaining a strong work ethic, and communicating effectively in professional environments. I am eager to contribute positively to an organization while building a successful and meaningful career.",
  resumeUrl: "/resume.pdf"
};

export const navLinks = [
  { name: "Home", href: "hero" },
  { name: "About", href: "about" },
  { name: "Education", href: "education" },
  { name: "Projects", href: "projects" },
  { name: "Experience", href: "experience" },
  { name: "Skills", href: "skills" },
  { name: "Contact", href: "contact" },
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/ssr.mndl", icon: "FaGithub" },
  { name: "LinkedIn", url: "https://linkedin.com/in/md-shishir-mondol", icon: "FaLinkedin" },
  { name: "Email", url: "mailto:postbox.shishir@gmail.com", icon: "FaEnvelope" },
];

export const educationData = [
  {
    id: 1,
    degree: "B.Sc. in Electrical & Electronic Engineering",
    institution: "Rajshahi University of Engineering & Technology (RUET)",
    period: "2022 - Present",
    cgpa: "3.46",
    description: "Pursuing Bachelor of Science in Electrical and Electronic Engineering with focus on embedded systems, signal processing, and power systems.",
    achievements: [
      "Active member of IEEE RUET Student Branch",
      "Participated in various technical workshops and competitions",
      "Involved in multiple research and project works"
    ]
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Lalmonirhat Govt College",
    period: "2018 - 2020",
    cgpa: "5.00",
    description: "Completed Higher Secondary education in Science group with outstanding academic performance.",
    achievements: [
      "GPA 5.00 (Perfect Score)",
      "Science group with focus on Physics, Chemistry, and Mathematics"
    ]
  },
  {
    id: 3,
    degree: "Secondary School Certificate (SSC)",
    institution: "Aditmari G.S. Model School",
    period: "2013 - 2018",
    cgpa: "5.00",
    description: "Completed Secondary education in Science group with outstanding academic performance.",
    achievements: [
      "GPA 5.00 (Perfect Score)",
      "Science group with focus on general sciences and mathematics"
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Signal Analyzer (STM32)",
    category: "Embedded Systems",
    description: "Capstone Project 2 - A comprehensive signal analysis tool built using STM32 microcontroller for real-time signal processing and analysis.",
    fullDescription: "This capstone project involves designing and implementing a signal analyzer using STM32 microcontroller. The system can capture, process, and display various signal parameters including frequency, amplitude, and waveform characteristics in real-time.",
    technologies: ["STM32", "C/C++", "MATLAB", "Signal Processing"],
    image: null,
    github: "https://github.com/ssr.mndl",
    features: [
      "Real-time signal capture and analysis",
      "Frequency and amplitude measurement",
      "Waveform visualization",
      "FFT analysis capabilities"
    ]
  },
  {
    id: 2,
    title: "Integrated Digital Oscilloscope & Function Generator",
    category: "Embedded Systems",
    description: "A combined digital oscilloscope and function generator system for signal measurement and generation applications.",
    fullDescription: "An integrated system combining a digital oscilloscope for signal measurement and a function generator for signal generation. Designed for educational and laboratory applications.",
    technologies: ["STM32", "C/C++", "PCB Design", "Signal Processing"],
    image: null,
    github: "https://github.com/ssr.mndl",
    features: [
      "Dual-channel oscilloscope functionality",
      "Multiple waveform generation (sine, square, triangle)",
      "Adjustable frequency and amplitude",
      "LCD display for signal visualization"
    ]
  },
  {
    id: 3,
    title: "Automated Soil Moisture Monitoring System",
    category: "IoT",
    description: "An IoT-based system for real-time soil moisture monitoring and automated irrigation control.",
    fullDescription: "An IoT-based automated system that monitors soil moisture levels in real-time and controls irrigation accordingly. Uses sensors to detect moisture and triggers water supply when needed.",
    technologies: ["Arduino", "IoT", "Sensors", "C/C++"],
    image: null,
    github: "https://github.com/ssr.mndl",
    features: [
      "Real-time soil moisture monitoring",
      "Automated irrigation control",
      "Wireless data transmission",
      "Mobile app integration"
    ]
  },
  {
    id: 4,
    title: "Signal Generator using R-2R DAC",
    category: "Embedded Systems",
    description: "A precision signal generator utilizing R-2R ladder DAC architecture for accurate waveform generation.",
    fullDescription: "Designed and implemented a signal generator using R-2R ladder DAC architecture. Capable of generating various waveforms with precise control over frequency and amplitude.",
    technologies: ["C/C++", "PCB Design", "Analog Electronics", "STM32"],
    image: null,
    github: "https://github.com/ssr.mndl",
    features: [
      "Multiple waveform generation",
      "R-2R ladder DAC implementation",
      "Adjustable frequency and amplitude",
      "Low-cost design"
    ]
  },
  {
    id: 5,
    title: "Automated Tomato Sorting Machine",
    category: "Embedded Systems",
    description: "An automated system for sorting tomatoes based on size, color, and quality using sensors and actuators.",
    fullDescription: "Designed and built an automated tomato sorting machine that uses color sensors and size detection mechanisms to sort tomatoes by quality and ripeness. The system uses conveyor belts and actuators for physical sorting.",
    technologies: ["Arduino", "Sensors", "Actuators", "C/C++"],
    image: null,
    github: "https://github.com/ssr.mndl",
    features: [
      "Color-based sorting",
      "Size detection mechanism",
      "Automated conveyor system",
      "Quality classification"
    ]
  },
  {
    id: 6,
    title: "Autonomous Line Follower Robot",
    category: "Embedded Systems",
    description: "An autonomous robot capable of following a designated path using infrared sensors and PID control.",
    fullDescription: "Designed and built an autonomous line follower robot using IR sensors for path detection and PID control algorithm for smooth navigation. The robot can follow complex paths with high accuracy.",
    technologies: ["Arduino", "Sensors", "PID Control", "C/C++"],
    image: null,
    github: "https://github.com/ssr.mndl",
    features: [
      "IR sensor-based line detection",
      "PID control for smooth navigation",
      "High accuracy path following",
      "Adjustable speed control"
    ]
  },
  {
    id: 7,
    title: "555 Timer PCB Design",
    category: "Embedded Systems",
    description: "PCB design project featuring a 555 timer IC-based circuit for various timing and oscillation applications.",
    fullDescription: "Designed a complete PCB layout for a 555 timer IC-based circuit. The design includes power regulation, timing components, and output stages for various timing and oscillation applications.",
    technologies: ["Eagle", "PCB Design", "Analog Electronics"],
    image: null,
    github: "https://github.com/ssr.mndl",
    features: [
      "Complete PCB layout design",
      "Astable and monostable modes",
      "Adjustable frequency output",
      "Compact form factor"
    ]
  },
  {
    id: 8,
    title: "Home Automation with Bluetooth",
    category: "IoT",
    description: "A Bluetooth-controlled home automation system for controlling lights, fans, and appliances via smartphone.",
    fullDescription: "Developed a Bluetooth-based home automation system that allows users to control home appliances wirelessly using a smartphone application. The system uses Arduino and Bluetooth modules for communication.",
    technologies: ["Arduino", "Bluetooth", "IoT", "C/C++"],
    image: null,
    github: "https://github.com/ssr.mndl",
    features: [
      "Smartphone control via Bluetooth",
      "Control lights, fans, and appliances",
      "Energy monitoring",
      "Low-cost implementation"
    ]
  }
];

export const experienceData = [
  {
    id: 1,
    title: "Industrial Trainee",
    company: "Siliconova Limited",
    location: "Dhaka, Bangladesh",
    period: "02/03/2025 – 07/03/2025",
    description: "Completed industrial training at Siliconova Limited, gaining hands-on experience in the electronics manufacturing industry.",
    responsibilities: [
      "Assisted in the design and testing of electronic circuits and PCB assemblies",
      "Worked with automated manufacturing equipment and quality control processes",
      "Participated in troubleshooting and debugging of electronic systems",
      "Collaborated with engineering team on product development and testing",
      "Gained exposure to industry-standard EDA tools and manufacturing workflows"
    ],
    skills: ["PCB Design", "Circuit Testing", "Quality Control", "Manufacturing Processes"],
    icon: "FaMicrochip"
  }
];

export const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C/C++", level: 85, icon: "SiCplusplus" },
      { name: "Python", level: 75, icon: "FaPython" },
      { name: "MATLAB", level: 70, icon: "FaChartLine" }
    ]
  },
  {
    category: "Hardware Platforms",
    skills: [
      { name: "Arduino", level: 90, icon: "SiArduino" },
      { name: "STM32", level: 75, icon: "SiStmicroelectronics" },
      { name: "Raspberry Pi", level: 65, icon: "FaRaspberryPi" }
    ]
  },
  {
    category: "EDA Tools",
    skills: [
      { name: "Eagle", level: 80, icon: "SiAutodesk" },
      { name: "Cadence", level: 60, icon: "FaLayerGroup" },
      { name: "AutoCAD", level: 65, icon: "SiAutodesk" }
    ]
  },
  {
    category: "Other Tools & Technologies",
    skills: [
      { name: "Verilog", level: 70, icon: "FaMicrochip" },
      { name: "Simulink", level: 65, icon: "FaChartLine" },
      { name: "LOGO! Soft Comfort", level: 60, icon: "FaCogs" }
    ]
  }
];

export const organizationsData = [
  {
    id: 1,
    name: "LDA (Leadership Development Association)",
    role: "Vice-President",
    period: "2025 - Present",
    description: "Leading organizational activities and member development programs at LDA, focusing on leadership skills and professional growth.",
    activities: [
      "Organizing leadership workshops and training sessions",
      "Managing team operations and member coordination",
      "Developing leadership curriculum and activities"
    ]
  },
  {
    id: 2,
    name: "PALS (Professional Association of Leadership Students)",
    role: "Former Vice-President",
    period: "2025 - 2026",
    description: "Served as Vice-President, overseeing professional development initiatives and student leadership programs.",
    activities: [
      "Coordinated professional development workshops",
      "Led team management and event planning",
      "Facilitated student leadership programs"
    ]
  },
  {
    id: 3,
    name: "PUSSA (Palli Unnayan Shongho Shahid Abdur Rab)",
    role: "Former Joint Secretary",
    period: "2025 - 2026",
    description: "Served as Joint Secretary, managing administrative tasks and coordinating organizational activities.",
    activities: [
      "Managed administrative and documentation tasks",
      "Coordinated organizational events and meetings",
      "Facilitated communication between departments"
    ]
  }
];

export const certificationsData = [
  {
    id: 1,
    title: "Workshop on IoT",
    issuer: "RUET",
    date: "2024",
    description: "Certificate of Appreciation for participation in the Workshop on Internet of Things organized by RUET.",
    type: "Workshop"
  },
  {
    id: 2,
    title: "Python Programming Course",
    issuer: "IICT, RUET",
    date: "Dec 2024 - Feb 2025",
    description: "Completed a comprehensive Python programming course covering fundamentals to advanced concepts.",
    type: "Course"
  }
];

export const statsData = [
  { label: "Projects Completed", value: 8, icon: "FaProjectDiagram" },
  { label: "Certifications", value: 2, icon: "FaCertificate" },
  { label: "Technical Skills", value: 15, icon: "FaCode" },
  { label: "Organizations", value: 3, icon: "FaAward" }
];
