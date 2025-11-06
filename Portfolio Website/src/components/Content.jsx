import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
const Content = () => {
  const [animate, setAnimate] = useState(null);

  const [reset, setReset] = useState(false);
  const [email, setEmail] = useState("");
  const [hovered, setHovered] = useState(null);
  const handleSend = () => {
    if (email.trim() === "") {
      alert("Please enter your email first!");
      return;
    }
    const handleHover = (key) => {
      setAnimate(key);
      setTimeout(() => setAnimate(null), 1000); // 1s ke baad reset
    };

    localStorage.setItem("userEmail", email);
    alert("✅ Email saved locally!");
    setEmail("");
  };
  const texts = [
    "I am a passionate full-stack developer.",
    "I love building responsive web apps.",
    "React and TailwindCSS are my favorite tools.",
    "I enjoy solving complex problems.",
    "Always learning new web technologies.",
    "Coding is my creative outlet.",
  ];
  const btns = [
    "Client satisfaction rate",
    "Business transformed",
    "Experience and Expertise",
  ];
  const textpr = [
    { id: "98%", p: "Delivering measurable financial impact." },
    { id: "99+", p: "Helping companies grow, perform better." },
    { id: "14+", p: "Trusted and recommended by clients." },
  ];
  const linkspt = [
    {
      p: "Branding",
      src: "https://cdn.prod.website-files.com/687093791857daf2b2090c68/688b9e09d32f9f878b9f63bd_Right%20Arrow.svg",
    },
    {
      p: "Web Development",
      src: "https://cdn.prod.website-files.com/687093791857daf2b2090c68/688b9e09d32f9f878b9f63bd_Right%20Arrow.svg",
    },
    {
      p: "Web Design",
      src: "https://cdn.prod.website-files.com/687093791857daf2b2090c68/688b9e09d32f9f878b9f63bd_Right%20Arrow.svg",
    },
    {
      p: "Marketing",
      src: "https://cdn.prod.website-files.com/687093791857daf2b2090c68/688b9e09d32f9f878b9f63bd_Right%20Arrow.svg",
    },
  ];
  const caseStudies = [
    {
      src: "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68a876ae79392bd4aef404c1_C-01-p-500.webp",
      title: "Smarter Flight Booking UX",
      description:
        "Led design for SaaS dashboards, landing pages, and mobile apps",
      challenge: "Led design for SaaS dashboards, landing pages, mobile apps",
      solution: "Led design for SaaS dashboards, landing pages, mobile apps",
      stats: [
        { percent: "60%", text: "Increase subscriber" },
        { percent: "40%", text: "Grow new user to Contact Us" },
      ],
    },
    {
      src: "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68a876b77104fdfdaaba3e82_C-02-p-500.webp",
      title: "Driving Digital Growth",
      description: "Driving Digital Growth leverages technology, innovation.",
      challenge: "Led design for SaaS dashboards, landing pages, mobile apps",
      solution: "Led design for SaaS dashboards, landing pages, mobile apps",
      stats: [
        { percent: "60%", text: "Increase subscriber" },
        { percent: "40%", text: "Grow new user to Contest Us" },
      ],
    },
    {
      src: "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68a876b7307554a4498a1040_C-03-p-500.webp",
      title: "Designing Future Success",
      description:
        "Led design for SaaS dashboards, landing pages, and mobile apps",
      challenge: "Led design for SaaS dashboards, landing pages, mobile apps",
      solution: "Led design for SaaS dashboards, landing pages, mobile apps.",
      stats: [
        { percent: "60%", text: "Increase subscriber" },
        { percent: "40%", text: "Grow new user to Contest Us" },
      ],
    },
  ];
  const products = [
    {
      src: "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68a216d4d57a91ab2e4173fe_Feture%2001-p-500.webp",
      title: "Horizon Tec Product",
      description:
        "Crafting visually stunning, user-centered websites tailored",
      arrow:
        "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68851c2d5632001a61927f54_Right%20arrow%20servise.svg",
    },
    {
      src: "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68a216d2d7ac585cdf07fff1_Feture%2002-p-500.webp",
      title: "Creative Identity",
      description: "Built modern visuals enhancing brand enhancement",
      arrow:
        "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68851c2d5632001a61927f54_Right%20arrow%20servise.svg",
    },
    {
      src: "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68a216d4d39a1a3d6c9ac6b0_Feture%2003-p-500.webp",
      title: "Commerce Website",
      description: "Designed seamless shopping experience online",
      arrow:
        "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68851c2d5632001a61927f54_Right%20arrow%20servise.svg",
    },
    {
      src: "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68a216d4c5eac90a7ee31923_Feture%2004-p-500.webp",
      title: "AI Startup Landing",
      description: "Created engaging landing showcasing AI beautiful",
      arrow:
        "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68851c2d5632001a61927f54_Right%20arrow%20servise.svg",
    },
    {
      src: "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68a216d27fc9a0ca071aff59_Feture%2005-p-500.webp",
      title: "Marketing Campain",
      description: "Delivered strategies driving measurable increment",
      arrow:
        "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68851c2d5632001a61927f54_Right%20arrow%20servise.svg",
    },
    {
      src: "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68a216d2d9e7cdc52d40aa5c_Feture%2006-p-500.webp",
      title: "Mobile App UI",
      description: "Designed intuitive interface for usability and UI",
      arrow:
        "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68851c2d5632001a61927f54_Right%20arrow%20servise.svg",
    },
  ];
  const awards = [
    {
      companyImg:
        "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68935632d5e6ef16ea4d9747_Holo%20Tech%20Ltd.webp",
      companyName: "Pixel Nova",
      role: "Senior UI/UX Designer",
      awardImg:
        "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68935632d5e6ef16ea4d9750_Award%2001.webp",
      year: "2024 | 2025",
      awardText: "2x Award",
    },
    {
      companyImg:
        "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68935632d5e6ef16ea4d9741_Gold%20Winner.webp",
      companyName: "Designora",
      role: "Senior UI/UX Designer",
      awardImg:
        "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68935632d5e6ef16ea4d9753_Award%2002.webp",
      year: "2022 | 2023",
      awardText: "Award",
    },
    {
      companyImg:
        "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68935632d5e6ef16ea4d9744_Genuine%20Nova%20Flow.webp",
      companyName: "VibeForge",
      role: "Senior UI/UX Designer",
      awardImg:
        "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68935632d5e6ef16ea4d974d_Award%2003.webp",
      year: "2020 | 2021",
      awardText: "Award",
    },
    {
      companyImg:
        "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68935632d5e6ef16ea4d9744_Genuine%20Nova%20Flow.webp",
      companyName: "NovaCraft",
      role: "Senior UI/UX Designer",
      awardImg:
        "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68935632d5e6ef16ea4d974a_Award%2004.webp",
      year: "2019 | 2019",
      awardText: "Award",
    },
  ];
  const designServices = [
    {
      title: "UI / UX Design",
      description:
        "Focused on creating intuitive, user-centered designs backed by research, testing, and strong visual logic.",
      skills: ["Wireframing", "Prototyping", "Usability", "Interaction"],
    },
    {
      title: "Graphic Design",
      description:
        "Designing visuals that communicate clearly and align with brand strategy, from logos to layouts.",
      skills: ["Typography", "Branding", "Illustration", "Layout"],
    },
    {
      title: "Sketch Skills",
      description:
        "Focused on creating intuitive, user-centered designs backed by research, testing, and strong visual logic.",
      skills: ["Symbols", "Artboards", "Prototyping", "Components"],
    },
    {
      title: "Front-End Dev",
      description:
        "Focused on creating intuitive, user-centered designs backed by research, testing, and strong visual logic.",
      skills: ["Webflow", "HTML", "CSS", "JavaScript"],
    },
  ];

  const infiniteText = texts.join(" ⚡ ");
  useEffect(() => {
    if (animate) {
      // 2s ke baad reset trigger
      const timer = setTimeout(() => {
        setReset(true); // reverse animation
        setAnimate(false);
      }, 500);

      // half-second baad reset state clear
      const resetTimer = setTimeout(() => setReset(false), 500);

      return () => {
        clearTimeout(timer);
        clearTimeout(resetTimer);
      };
    }
  }, [animate]);

  // Function to trigger animation
 
  return (
    <>
     
    </>
  );
};

export default Content;
