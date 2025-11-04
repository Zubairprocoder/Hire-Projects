import React, { useState, useEffect } from "react";
const Content = () => {
    const [animate, setAnimate] = useState(false);
    const [reset, setReset] = useState(false);
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
        { p: "Branding", src: "https://cdn.prod.website-files.com/687093791857daf2b2090c68/688b9e09d32f9f878b9f63bd_Right%20Arrow.svg" },
        { p: "Web Development", src: "https://cdn.prod.website-files.com/687093791857daf2b2090c68/688b9e09d32f9f878b9f63bd_Right%20Arrow.svg" },
        { p: "Web Design", src: "https://cdn.prod.website-files.com/687093791857daf2b2090c68/688b9e09d32f9f878b9f63bd_Right%20Arrow.svg" },
        { p: "Marketing", src: "https://cdn.prod.website-files.com/687093791857daf2b2090c68/688b9e09d32f9f878b9f63bd_Right%20Arrow.svg" },
    ]
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
    const triggerAnimation = () => setAnimate(true);
    return (
        <>
            <main className="mt-4 h-[2240px] overflow-hidden w-full container mx-auto">
                <div className="sideright flex items-center justify-around gap-3">
                    <div className="side">
                        <div className="">
                            <svg
                                width="60"
                                height="60"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.1126 9.23891L15.4645 10.5506C17.3978 11.3071 18.3645 11.6853 18.3325 12.2853C18.3004 12.8853 17.2916 13.1605 15.2739 13.7107C14.6732 13.8746 14.3728 13.9565 14.1646 14.1648C13.9563 14.3731 13.8743 14.6734 13.7105 15.2742C13.1603 17.2918 12.8851 18.3007 12.2851 18.3327C11.6851 18.3647 11.3068 17.3981 10.5503 15.4647L9.23867 12.1128C8.44659 10.0887 8.05059 9.07666 8.5635 8.56375C9.07642 8.05083 10.0884 8.44683 12.1126 9.23891Z"
                                    stroke="black"
                                    stroke-linejoin="round"
                                ></path>
                                <path
                                    d="M9.04808 5.90258C9.22625 6.19824 9.61033 6.2935 9.906 6.11535C10.2017 5.9372 10.2969 5.5531 10.1187 5.25745L9.04808 5.90258ZM5.2577 10.1185C5.55335 10.2967 5.93744 10.2014 6.11559 9.90575C6.29374 9.61009 6.19848 9.226 5.90282 9.04784L5.2577 10.1185ZM4.79175 7.08317C4.79175 5.81752 5.81777 4.7915 7.08341 4.7915V3.5415C5.12742 3.5415 3.54175 5.12716 3.54175 7.08317H4.79175ZM7.08341 4.7915C7.91628 4.7915 8.64608 5.23544 9.04808 5.90258L10.1187 5.25745C9.5 4.23056 8.3725 3.5415 7.08341 3.5415V4.7915ZM5.90282 9.04784C5.23568 8.64584 4.79175 7.91605 4.79175 7.08317H3.54175C3.54175 8.37225 4.23081 9.49975 5.2577 10.1185L5.90282 9.04784Z"
                                    fill="black"
                                ></path>
                                <path
                                    d="M11.8763 6.77899C11.8982 7.12347 12.1952 7.38497 12.5397 7.36306C12.8842 7.34115 13.1457 7.04414 13.1238 6.69966L11.8763 6.77899ZM6.70106 13.1236C7.04556 13.1454 7.34252 12.8838 7.36437 12.5394C7.38621 12.1949 7.12465 11.8979 6.78016 11.8761L6.70106 13.1236ZM2.29175 7.08868C2.29175 4.43928 4.43955 2.2915 7.08895 2.2915V1.0415C3.74921 1.0415 1.04175 3.74891 1.04175 7.08868H2.29175ZM7.08895 2.2915C9.63425 2.2915 11.7171 4.27422 11.8763 6.77899L13.1238 6.69966C12.9229 3.54088 10.2981 1.0415 7.08895 1.0415V2.2915ZM6.78016 11.8761C4.27496 11.7173 2.29175 9.63434 2.29175 7.08868H1.04175C1.04175 10.2982 3.54176 12.9233 6.70106 13.1236L6.78016 11.8761Z"
                                    fill="black"
                                ></path>
                            </svg>
                            <span className="px-10 text-[#1e1e1e]">Hello Folk</span>
                        </div>
                        <h2 className="text-2xl font-semibold mt-2">
                            Freelance Web Designer from Los Angeles
                        </h2>
                        <p className="mt-2">
                            I specialize in delivering designs that are not only visually
                            striking but also impactful.
                        </p>
                        <div className="flex gap-6 mt-6">
                            {/* Button 1 */}
                            <button
                                className="relative flex items-center gap-3 px-8  h-12 text-center cursor-pointer   bg-black text-white font-semibold rounded-lg overflow-hidden"
                                onMouseEnter={triggerAnimation}
                                onFocus={triggerAnimation}
                            >
                                <span
                                    className={`transition-transform ${animate
                                        ? "duration-300 -translate-y-12"
                                        : reset
                                            ? "duration-500 translate-y-0"
                                            : "translate-y-0"
                                        }`}
                                >
                                    Let’s talk
                                </span>
                                <span
                                    className={`transition-transform text-4xl ${animate
                                        ? "duration-300 translate-x-12"
                                        : reset
                                            ? "duration-500 translate-x-0"
                                            : "translate-x-0"
                                        }`}
                                >
                                    →
                                </span>
                            </button>

                            {/* Button 2 */}
                            <button
                                className="relative flex items-center gap-3 px-8 h-12 bg-white text-black font-semibold border border-black rounded-lg cursor-pointer overflow-hidden"
                                onMouseEnter={triggerAnimation}
                                onFocus={triggerAnimation}
                            >
                                <span
                                    className={`transition-transform ${animate
                                        ? "duration-300 -translate-y-12"
                                        : reset
                                            ? "duration-500 translate-y-0"
                                            : "translate-y-0"
                                        }`}
                                >
                                    Download CV
                                </span>
                                <span
                                    className={`transition-transform text-4xl ${animate
                                        ? "duration-300 translate-x-12"
                                        : reset
                                            ? "duration-500 translate-x-0"
                                            : "translate-x-0"
                                        }`}
                                >
                                    →
                                </span>
                            </button>
                        </div>
                        {/* images */}
                        <div className="images mt-6 relative h-25">
                            <img
                                src="https://cdn.prod.website-files.com/687093791857daf2b2090c68/688344e499f7cdd68005ff5b_Satisfied%20client%2001.webp"
                                alt="pic boys"
                                width={50}
                                height={50}
                                className="rounded-full cursor-pointer absolute transition-transform duration-300 hover:scale-110"
                            />
                            <img
                                src="https://cdn.prod.website-files.com/687093791857daf2b2090c68/688344e499f7cdd68005ff59_Satisfied%20client%2002.webp"
                                alt="pic boys"
                                width={50}
                                height={50}
                                className="rounded-full cursor-pointer absolute z-1 left-10 transition-transform duration-300 hover:scale-110"
                            />
                            <img
                                src="https://cdn.prod.website-files.com/687093791857daf2b2090c68/688344e499f7cdd68005ff55_Satisfied%20client%2003.webp"
                                alt="pic boys"
                                width={50}
                                height={50}
                                className="rounded-full cursor-pointer absolute z-2 left-21 transition-transform duration-300 hover:scale-110"
                            />
                            <img
                                src="https://cdn.prod.website-files.com/687093791857daf2b2090c68/6883c1c5aedff03f6da19d25_Ellipse%2010.webp"
                                alt="pic boys"
                                width={50}
                                height={50}
                                className="rounded-full cursor-pointer absolute z-2 left-31 transition-transform duration-300 hover:scale-110"
                            />
                            <div className="text-[16px] bg-black text-white rounded-full cursor-pointer w-13 h-13 absolute left-40 z-5 flex items-center justify-center">
                                98%
                            </div>
                        </div>
                        <div className=" font-medium pb-1.5">
                            Loved by founders globally
                        </div>
                        <p>5K Clients Word-Wide</p>
                    </div>
                    <div className="flex ">
                        <div className="">
                            <img
                                src="https://cdn.prod.website-files.com/687093791857daf2b2090c68/68a5f806a9d2add52beaf575_Resume%20Nova%20Hero%20Image-p-500.webp"
                                alt="boy pic"
                            />
                            <div className="bg-[#323232] flex flex-col gap-2 items-start px-4 p-2 rounded-b-xl">
                                <img
                                    src="https://cdn.prod.website-files.com/687093791857daf2b2090c68/689b7d88772a73afb1940c69_Hero%20ratings.webp"
                                    alt="pic"
                                    width={120}
                                />
                                <p className="text-[#c8c8c8] text-md font-medium ">
                                    Rated by 5K+ global clients and 20 companies
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <marquee behavior="alternate" direction="left" scrollamount="6">
                    ✨ I am a passionate full-stack developer 💻 | I love building
                    responsive web apps 🌐 | React and TailwindCSS are my favorite tools
                    ⚛️ | I enjoy solving complex problems 💡 | Always learning new web
                    technologies 🚀 | Coding is my creative outlet ❤️
                </marquee>
                {/* About me */}
                <div className="bg-[#323232] rounded-xl text-[#fff] p-4">
                    <h3 className=" uppercase font-bold">- About Me</h3>
                    <div className="flex">
                        <p className="font-medium text-md pt-2">
                            I’m Ethan Riley, your creative partner in design. For me, design
                            is all about creating experiences that really connect with people.
                            It’s not just looking good
                        </p>
                        <img
                            src="https://cdn.prod.website-files.com/687093791857daf2b2090c68/68a5f806a9d2add52beaf575_Resume%20Nova%20Hero%20Image-p-500.webp"
                            alt="boys"
                            width={150}
                            className="rounded-xl"
                        />
                    </div>

                    <div className="flex gap-4 mt-6">
                        {btns.map((btn, i) => (
                            <button
                                key={i}
                                className="px-6 py-3 text-white rounded-lg transition duration-300 hover:opacity-90"
                                style={{ backgroundColor: "#4D4D4D" }} // 👈 Tailwind custom color inline
                            >
                                {btn}
                            </button>
                        ))}
                    </div>
                    <div className="flex  items-center justify-center gap-2 mt-6">
                        {textpr.map((item, i) => (
                            <div
                                key={i}
                                className="flex  items-center gap-2  text-white px-3 py-2 rounded-2xl  hover:scale-105 transition-transform duration-300"
                            >
                                <h2 className="text-3xl font-bold">{item.id}</h2>
                                <p className="text-sm  mt-2 text-start">{item.p}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SERVICE */}
                <div className="flex flex-col gap-4 mt-5">
                    <h3 className=" uppercase font-bold">- MY SERVICE</h3>
                    <h2 className="font-semibold text-xl">Professional Service Solutions</h2>
                    <div className="flex gap-6 mt-6">
                        {/* Button 1 */}
                        <button
                            className="relative flex items-center gap-3 px-8  h-12 text-center cursor-pointer   bg-black text-white font-semibold rounded-lg overflow-hidden"
                            onMouseEnter={triggerAnimation}
                            onFocus={triggerAnimation}
                        >
                            <span
                                className={`transition-transform ${animate
                                    ? "duration-300 -translate-y-12"
                                    : reset
                                        ? "duration-500 translate-y-0"
                                        : "translate-y-0"
                                    }`}
                            >
                                Hire Me
                            </span>
                            <span
                                className={`transition-transform text-4xl ${animate
                                    ? "duration-300 translate-x-12"
                                    : reset
                                        ? "duration-500 translate-x-0"
                                        : "translate-x-0"
                                    }`}
                            >
                                →
                            </span>
                        </button>

                        {/* Button 2 */}
                        <button
                            className="relative flex items-center gap-3 px-8 h-12 bg-white text-black font-semibold border border-black rounded-lg cursor-pointer overflow-hidden"
                            onMouseEnter={triggerAnimation}
                            onFocus={triggerAnimation}
                        >
                            <span
                                className={`transition-transform ${animate
                                    ? "duration-300 -translate-y-12"
                                    : reset
                                        ? "duration-500 translate-y-0"
                                        : "translate-y-0"
                                    }`}
                            >
                                Watch Video
                            </span>
                            <span
                                className={`transition-transform text-4xl ${animate
                                    ? "duration-300 translate-x-12"
                                    : reset
                                        ? "duration-500 translate-x-0"
                                        : "translate-x-0"
                                    }`}
                            >
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.99984 18.3333C14.6022 18.3333 18.3332 14.6023 18.3332 9.99996C18.3332 5.39759 14.6022 1.66663 9.99984 1.66663C5.39746 1.66663 1.6665 5.39759 1.6665 9.99996C1.6665 14.6023 5.39746 18.3333 9.99984 18.3333Z" stroke="black" stroke-width="1.25"></path>
                                    <path d="M7.9165 9.33321V10.6669C7.9165 11.933 7.9165 12.566 8.2963 12.8219C8.67609 13.0777 9.1955 12.7946 10.2344 12.2285L11.4579 11.5615C12.7081 10.8802 13.3332 10.5395 13.3332 10C13.3332 9.46054 12.7081 9.11987 11.4579 8.43854L10.2344 7.77166C9.1955 7.20546 8.67609 6.92236 8.2963 7.17822C7.9165 7.43409 7.9165 8.06712 7.9165 9.33321Z" fill="black"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className="flex items-center justify-around gap-3 p-3 w-full">
                        <div className="flex  flex-col gap-5  w-1/2">
                            {linkspt.map((linkspt, i) => (
                                <div className="flex items-center cursor-pointer justify-between gap-3 w-full bg-[#F5F5F5] rounded-md">
                                    <a href="#Branding" className=" font-medium text-xl">
                                        {linkspt.p}
                                    </a>
                                    <a href="#">
                                        <img src={linkspt.src} width={40} alt="arrow" className="rounded-full border p-2" />
                                    </a>
                                </div>
                            ))}
                        </div>
                        <img src="https://cdn.prod.website-files.com/687093791857daf2b2090c68/6892294bb1f6b631388be253_RW%2004-p-500.webp" alt="product pic" className="rounded-xl w-100" wid />

                    </div>
                </div>

            </main>
        </>
    );
};

export default Content;
