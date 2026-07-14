import {
    SiReact,
    SiTailwindcss,
    SiJavascript,
    SiPython,
    SiDjango,
    SiPostgresql,
  } from "react-icons/si";
  
  // Screenshots (replace these later)
  import portfolio from "../assets/projects/portfolio.png";
  import edtech from "../assets/projects/edtech.png";
  import parking from "../assets/projects/parking.png";
  import training from "../assets/projects/training.png";
  import homestay from "../assets/projects/homestay.png";
  
  const studentProjects = [
    {
      id: 1,
  
      title: "Portfolio Website",
  
      image: portfolio,
  
      color: "#4ECDC4",
  
      status: "Completed",
  
      technologies: [
        {
          name: "React",
          icon: SiReact,
        },
        {
          name: "Tailwind",
          icon: SiTailwindcss,
        },
        {
          name: "JavaScript",
          icon: SiJavascript,
        },
      ],
  
      description:
        "Modern responsive portfolio website built with React and Tailwind CSS.",
  
      github: "#",
  
      live: "#",
  
      features: [
        "Responsive Design",
        "Animated UI",
        "Student Zone",
        "CMS Integration",
      ],
    },
  
    {
      id: 2,
  
      title: "EdTech Management System",
  
      image: edtech,
  
      color: "#5B8DEF",
  
      status: "Completed",
  
      technologies: [
        {
          name: "Python",
          icon: SiPython,
        },
        {
          name: "Django",
          icon: SiDjango,
        },
        {
          name: "PostgreSQL",
          icon: SiPostgresql,
        },
      ],
  
      description:
        "Role based Training Management System with attendance, reports and faculty dashboard.",
  
      github: "#",
  
      live: "#",
  
      features: [
        "Attendance",
        "Reports",
        "Faculty Module",
        "Admin Panel",
      ],
    },
  
    {
      id: 3,
  
      title: "Parking Slot Detection",
  
      image: parking,
  
      color: "#FF6B6B",
  
      status: "Completed",
  
      technologies: [
        {
          name: "Python",
          icon: SiPython,
        },
      ],
  
      description:
        "Deep Learning project to detect available parking slots from CCTV footage.",
  
      github: "#",
  
      live: "#",
  
      features: [
        "Computer Vision",
        "Deep Learning",
        "Real-time Detection",
      ],
    },
  
    {
      id: 4,
  
      title: "Training Management",
  
      image: training,
  
      color: "#FFD166",
  
      status: "Completed",
  
      technologies: [
        {
          name: "Python",
          icon: SiPython,
        },
        {
          name: "Django",
          icon: SiDjango,
        },
      ],
  
      description:
        "Training management platform with faculty allocation and daily work reports.",
  
      github: "#",
  
      live: "#",
  
      features: [
        "Daily Work",
        "Faculty Assignment",
        "Attendance",
      ],
    },
  
    {
      id: 5,
  
      title: "Homestay Booking",
  
      image: homestay,
  
      color: "#9B5DE5",
  
      status: "Completed",
  
      technologies: [
        {
          name: "Python",
          icon: SiPython,
        },
        {
          name: "Django",
          icon: SiDjango,
        },
      ],
  
      description:
        "Online homestay booking system with room reservation and payment flow.",
  
      github: "#",
  
      live: "#",
  
      features: [
        "Booking",
        "Payments",
        "Admin Dashboard",
      ],
    },
  ];
  
  export default studentProjects;