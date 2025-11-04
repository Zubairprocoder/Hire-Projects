import React from "react";
import { FaFacebookF, FaTimes, FaLinkedinIn, FaDribbble } from "react-icons/fa";

import {
    LuUser,
    LuHeartHandshake,
    LuBookOpen,
    LuTrophy,
    LuAward,
    LuBrush,
} from "react-icons/lu";

const Sidebar = () => {
    return (
        <aside className="bg-gray-200 container mx-auto w-64 rounded-xl  h-[1040px]  shadow-md p-3 mt-6">
            {/* Profile Section */}
            <div className="relative text-center pb-5 h-45">
                {/* 🔹 Background Image with Shadow */}
                <div
                    className="rounded-md h-32 w-full absolute top-0 left-0 right-0 shadow-lg bg-center bg-no-repeat bg-cover"
                    style={{
                        backgroundImage:
                            "url('https://cdn.prod.website-files.com/687093791857daf2b2090c68/6883253b6b5903135e4c2493_Nav%20top%20layer.webp')",
                    }}
                />

                {/* 🔹 Profile Image with Deep Shadow */}
                <div className="relative flex flex-col items-center">
                    <img
                        src="https://cdn.prod.website-files.com/687093791857daf2b2090c68/68a4cd42f93a9ab64dc78c98_Resume%20Nova%20Nav%20Image.webp"
                        alt="Profile"
                        className="w-24 h-24 rounded-full  border-white shadow-2xl absolute top-20 transition-transform hover:scale-105 hover:shadow-[0_0_25px_rgba(0,0,0,0.4)]"
                    />
                </div>
            </div>
            <h2 className="font-serif font-medium pt-3 text-lg text-black text-center">
                Ethan Riley
            </h2>
            {/* 🔹 Social Icons Box */}
            <div className="flex items-center justify-center gap-4 mt-4 bg-gray-800 rounded-lg p-3 shadow-md">
                <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-800 transition">
                    <FaFacebookF size={14} />
                </div>
                <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-800 transition">
                    <FaTimes size={14} />
                </div>
                <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-800 transition">
                    <FaLinkedinIn size={14} />
                </div>
                <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-800 transition">
                    <FaDribbble size={14} />
                </div>
            </div>
            {/* Nav Links */}
            <div class="nav-link-holder bg-white dark:bg-gray-800 shadow-lg rounded-xl  flex flex-col gap-5 p-3  mt-12">

                {/* <!-- About Me --> */}
                <a aria-label="about me" href="#about-me" class="nav-link-button flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-shadow shadow-sm hover:shadow-md">
                    <div class="nav-link-icon w-6 h-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 17" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                            <path d="M10.3332 5.33333C10.3332 3.49239 8.84077 2 6.99984 2C5.15889 2 3.6665 3.49239 3.6665 5.33333C3.6665 7.17427 5.15889 8.66667 6.99984 8.66667C8.84077 8.66667 10.3332 7.17427 10.3332 5.33333Z" stroke="currentColor" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M2.3335 13.3332C2.3335 10.7558 4.42284 8.6665 7.00016 8.6665C7.85016 8.6665 8.6471 8.89377 9.3335 9.29084" stroke="currentColor" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M13.4591 9.95611L13.0441 9.54105C12.7673 9.26431 12.3187 9.26431 12.0419 9.54105L9.8094 11.7736C9.51267 12.0703 9.3104 12.4483 9.22807 12.8598L9 14.0002L10.1403 13.7721C10.5519 13.6898 10.9299 13.4875 11.2266 13.1908L13.4591 10.9582C13.7359 10.6815 13.7359 10.2328 13.4591 9.95611Z" stroke="currentColor" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </div>
                    <div>About Me</div>
                </a>

                {/* <!-- My Service --> */}
                <a href="#my-service" class="nav-link-button flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-shadow shadow-sm hover:shadow-md">
                    <div class="nav-link-icon w-6 h-6">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.9448 10.8906C15.5786 7.55091 14.8671 4.23843 12.975 3.07781C11.1872 1.98119 9.62691 2.42311 8.68958 3.12705L7.99985 3.64276M12.9448 10.8906C12.3126 11.6921 11.4878 12.4953 10.4403 13.2706C9.40951 14.0336 8.89411 14.415 7.99998 14.415C7.10585 14.415 6.59046 14.0336 5.55967 13.2706C0.147792 9.26497 0.678692 4.51699 3.02494 3.07781C4.81271 1.98119 6.37306 2.42311 7.31038 3.12705L7.99985 3.64276M12.9448 10.8906L9.26138 6.71157C9.11058 6.54051 8.85818 6.50368 8.66478 6.62453L7.20738 7.53544C6.69451 7.85597 6.02887 7.78384 5.59658 7.36084C5.02556 6.80212 5.08317 5.86683 5.71845 5.38241L7.99985 3.64276" stroke="#525252" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </div>
                    <div>My Service</div>
                </a>

                {/* <!-- Why Choose --> */}
                <a href="#why-choose-me" class="nav-link-button flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-shadow shadow-sm hover:shadow-md">
                    <div class="nav-link-icon w-6 h-6">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.96385 4.41504L6.38921 11.8054C6.2639 12.3935 6.33287 12.6137 6.76478 13.036L8.51151 14.744C8.74178 14.9691 8.85691 15.0817 8.99998 15.0817C9.14305 15.0817 9.25818 14.9691 9.48845 14.744L11.2352 13.036C11.6671 12.6137 11.736 12.3935 11.6108 11.8054L10.0361 4.41504" stroke="#525252" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M7.03785 2.49789C6.99292 2.14863 6.97045 1.974 7.07285 1.86127C7.17532 1.74854 7.35645 1.74854 7.71872 1.74854H10.2813C10.6435 1.74854 10.8247 1.74854 10.9271 1.86127C11.0295 1.974 11.0071 2.14863 10.9621 2.49789L10.9283 2.76141C10.8332 3.49999 10.7857 3.86928 10.5483 4.10886C10.5097 4.14779 10.4679 4.18362 10.4233 4.21598C10.1492 4.4152 9.76612 4.4152 8.99998 4.4152C8.23385 4.4152 7.85078 4.4152 7.57665 4.21598C7.53212 4.18362 7.49032 4.14779 7.45172 4.10886C7.21425 3.86928 7.16678 3.49999 7.07172 2.7614L7.03785 2.49789Z" stroke="#525252" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M6.66658 10.415C6.26141 10.8767 5.91832 11.0817 5.66658 11.0817C5.34366 11.0817 4.76232 10.268 4.50431 9.67864C4.38324 9.40211 4.32272 9.26384 4.33476 9.08891C4.34679 8.91397 4.42608 8.78604 4.58465 8.53017C5.48134 7.08331 7.0096 5.76246 7.99993 4.41504" stroke="#525252" stroke-linejoin="round"></path>
                        </svg>
                    </div>
                    <div>Why Choose</div>
                </a>

                {/* <!-- Case Study --> */}
                <a href="#case-study" class="nav-link-button flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-shadow shadow-sm hover:shadow-md">
                    <div class="nav-link-icon w-6 h-6">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.33765 14.4149H6.40362C4.01345 14.4149 2.81837 14.4149 2.07584 13.6583C1.33331 12.9016 1.33331 11.6838 1.33331 9.2482C1.33331 6.81262 1.33331 5.59482 2.07584 4.83818C2.81837 4.08154 4.01345 4.08154 6.40362 4.08154H8.93878C11.3289 4.08154 12.524 4.08154 13.2666 4.83818C13.8378 5.42034 13.9696 6.27548 14 7.7482" stroke="#525252" stroke-linecap="round"></path>
                            <path d="M11.4073 9.25161C11.5304 9.13821 11.5919 9.08154 11.6667 9.08154C11.7414 9.08154 11.8029 9.13821 11.926 9.25161L12.4011 9.68934C12.4585 9.74221 12.4872 9.76868 12.5229 9.78174C12.5585 9.79488 12.5975 9.79334 12.6755 9.79028L13.3175 9.76508C13.4827 9.75854 13.5654 9.75534 13.6221 9.80294C13.6787 9.85054 13.6897 9.93254 13.7118 10.0965L13.8003 10.7533C13.8105 10.8293 13.8156 10.8672 13.8341 10.8996C13.8526 10.932 13.8827 10.9557 13.9429 11.0031L14.4599 11.4101C14.5878 11.5108 14.6518 11.5611 14.6645 11.6331C14.6771 11.7051 14.6342 11.7743 14.5483 11.9127L14.1977 12.4777C14.1575 12.5424 14.1375 12.5747 14.1311 12.6113C14.1247 12.6477 14.1327 12.685 14.1485 12.7594L14.2877 13.4117C14.3218 13.5719 14.3389 13.6521 14.3022 13.7157C14.2655 13.7793 14.1876 13.8047 14.0318 13.8555L13.4147 14.0565C13.3411 14.0804 13.3043 14.0924 13.2756 14.1167C13.2469 14.1411 13.2291 14.1755 13.1935 14.2441L12.892 4.8251C12.8151 14.9732 12.7767 15.0472 12.7067 15.0727C12.6367 15.0983 12.5597 15.0663 12.4056 15.0024L11.8133 14.7567C11.7409 14.7267 11.7048 14.7117 11.6667 14.7117C11.6285 14.7117 11.5924 14.7267 11.52 14.7567L10.9277 15.0024C10.7737 15.0663 10.6966 15.0983 10.6266 15.0727C10.5566 15.0472 10.5182 14.9732 10.4413 14.8251L10.1399 14.2441C10.1043 14.1755 10.0865 14.1411 10.0577 14.1167C10.029 14.0924 9.9922 14.0804 9.91867 14.0565L9.30154 13.8555C9.14574 13.8047 9.0678 13.7793 9.03114 13.7157C8.9944 13.6521 9.01154 13.5719 9.04567 13.4117L9.1848 12.7594C9.20067 12.685 9.2086 12.6477 9.2022 12.6113C9.1958 12.5747 9.1758 12.5424 9.13567 12.4777L8.785 11.9127C8.69914 11.7743 8.6562 11.7051 8.66887 11.6331C8.68154 11.5611 8.74554 11.5108 8.87347 11.4101L9.39047 11.0031C9.45067 10.9557 9.48074 10.932 9.49927 10.8996C9.51774 10.8672 9.52287 10.8293 9.53307 10.7533L9.62154 10.0965C9.6436 9.93254 9.6546 9.85054 9.71127 9.80294C9.76794 9.75534 9.8506 9.75854 10.0159 9.76508L10.6578 9.79028C10.7358 9.79334 10.7748 9.79488 10.8105 9.78174C10.8461 9.76868 10.8748 9.74221 10.9322 9.68934L11.4073 9.25161Z" stroke="#525252"></path>
                            <path d="M10.6665 4.08187L10.6003 3.87583C10.2703 2.84913 10.1053 2.33578 9.7124 2.04216C9.3196 1.74854 8.7978 1.74854 7.7542 1.74854H7.5788C6.5352 1.74854 6.0134 1.74854 5.62058 2.04216C5.22774 2.33578 5.06274 2.84913 4.73273 3.87583L4.6665 4.08187" stroke="#525252"></path>
                        </svg>
                    </div>
                    <div>Case Study</div>
                </a>

                {/* <!-- Feature Project --> */}
                <a href="#featured-project" class="nav-link-button flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-shadow shadow-sm hover:shadow-md">
                    <div class="nav-link-icon w-6 h-6">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.987 5.09229C9.987 5.09229 10.3203 5.42562 10.6537 6.09229C10.6537 6.09229 11.7125 4.42562 12.6537 4.09229" stroke="#525252" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M6.66321 1.76264C4.99757 1.69212 3.71073 1.884 3.71073 1.884C2.89816 1.9421 1.34095 2.39765 1.34097 5.05811C1.34098 7.69595 1.32374 10.9479 1.34097 12.2443C1.34097 13.0364 1.83138 14.8839 3.52882 14.9829C5.59205 15.1033 9.30847 15.1289 11.0136 14.9829C11.4701 14.9572 12.9897 14.5989 13.1821 12.9455C13.3813 11.2326 13.3417 10.0422 13.3417 9.75888" stroke="#525252" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M14.6667 5.09212C14.6667 6.93307 13.1729 8.42548 11.3301 8.42548C9.48739 8.42548 7.99359 6.93307 7.99359 5.09212C7.99359 3.25118 9.48739 1.75879 11.3301 1.75879C13.1729 1.75879 14.6667 3.25118 14.6667 5.09212Z" stroke="#525252" stroke-linecap="round"></path>
                            <path d="M4.65363 9.09229H7.32027" stroke="#525252" stroke-linecap="round"></path>
                            <path d="M4.65363 11.7588H9.98694" stroke="#525252" stroke-linecap="round"></path>
                        </svg>
                    </div>
                    <div>Feature Project</div>
                </a>

                {/* <!-- Award --> */}
                <a href="#award" class="nav-link-button flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-shadow shadow-sm hover:shadow-md">
                    <div class="nav-link-icon w-6 h-6">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 8.41504V12.415" stroke="#525252" stroke-linecap="round"></path>
                            <path d="M7.99998 12.415C6.88425 12.415 5.91312 13.0897 5.41175 14.085C5.17229 14.5604 5.51591 15.0817 5.97249 15.0817H10.0274C10.484 15.0817 10.8276 14.5604 10.5882 14.085C10.0868 13.0897 9.11571 12.415 7.99998 12.415Z" stroke="#525252" stroke-linecap="round"></path>
                            <path d="M3.33331 3.74854H2.65645C1.99877 3.74854 1.66993 3.74854 1.46676 3.99556C1.26359 4.24258 1.32317 4.51918 1.44233 5.0724C1.66994 6.12911 2.16363 7.05747 2.83258 7.74854" stroke="#525252" stroke-linecap="round"></path>
                            <path d="M12.6667 3.74854H13.3436C14.0012 3.74854 14.3301 3.74854 14.5332 3.99556C14.7364 4.24258 14.6768 4.51918 14.5577 5.0724C14.3301 6.12911 13.8364 7.05747 13.1674 7.74854" stroke="#525252" stroke-linecap="round"></path>
                            <path d="M7.99998 8.4152C10.5773 8.4152 12.6666 6.33727 12.6666 3.77401C12.6666 3.70679 12.6652 3.63991 12.6624 3.57339C12.6339 2.90724 12.6196 2.57417 12.1682 2.16135C11.7167 1.74854 11.2164 1.74854 10.216 1.74854H5.78395C4.78349 1.74854 4.28326 1.74854 3.83179 2.16135C3.38032 2.57416 3.36608 2.90724 3.33759 3.57339C3.33475 3.63991 3.33331 3.70679 3.33331 3.77401C3.33331 6.33727 5.42265 8.4152 7.99998 8.4152Z" stroke="#525252" stroke-linecap="round"></path>
                        </svg>
                    </div>
                    <div>Award</div>
                </a>

                {/* <!-- Design Skill --> */}
                <a href="#design-skill" class="nav-link-button flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-shadow shadow-sm hover:shadow-md">
                    <div class="nav-link-icon w-6 h-6">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.6665 5.8335C2.6665 3.94788 2.6665 3.00507 3.33598 2.41928C4.00544 1.8335 5.08294 1.8335 7.2379 1.8335H8.76177C10.9167 1.8335 11.9942 1.8335 12.6637 2.41928C13.3332 3.00507 13.3332 3.94788 13.3332 5.8335V11.8335H2.6665V5.8335Z" stroke="#525252" stroke-linejoin="round"></path>
                            <path d="M2 11.8335H14" stroke="#525252" stroke-linecap="round"></path>
                            <path d="M7.13248 4.21043C7.95262 4.09289 9.31162 4.13991 8.18688 5.26828C6.78102 6.67875 4.67226 9.85244 7.13248 8.79457C9.59275 7.73677 10.6473 8.44197 9.59288 9.49984" stroke="#525252" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M8 11.8335V14.5002" stroke="#525252" stroke-linecap="round"></path>
                            <path d="M3.3335 15.1668L5.3335 11.8335" stroke="#525252" stroke-linecap="round"></path>
                            <path d="M12.6665 15.1668L10.6665 11.8335" stroke="#525252" stroke-linecap="round"></path>
                        </svg>
                    </div>
                    <div>Design Skill</div>
                </a>

                {/* <!-- Testimonial --> */}
                <a href="#testimonial" class="nav-link-button flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-shadow shadow-sm hover:shadow-md">
                    <div class="nav-link-icon w-6 h-6">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.15171 2.71132L10.3249 5.07712C10.4849 5.40645 10.9115 5.72233 11.2715 5.78282L13.3979 6.13903C14.7578 6.36755 15.0778 7.36227 14.0978 8.34353L12.4447 10.0103C12.1647 10.2926 12.0114 10.837 12.098 11.2269L12.5714 13.2902C12.9446 14.9234 12.0847 15.5552 10.6516 14.7016L8.65845 13.512C8.29851 13.2969 7.70525 13.2969 7.33858 13.512L5.34549 14.7016C3.91898 15.5552 3.05241 14.9167 3.42571 13.2902L3.89899 11.2269C3.98564 10.837 3.83233 10.2926 3.55235 10.0103L1.89921 8.34353C0.925979 7.36227 1.23928 6.36755 2.59913 6.13903L4.72556 5.78282C5.07885 5.72233 5.50547 5.40645 5.66545 5.07712L6.83865 2.71132C7.47858 1.42761 8.51845 1.42761 9.15171 2.71132Z" stroke="#525252" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </div>
                    <div>Testimonial</div>
                </a>

                {/* <!-- Connect Me --> */}
                <a href="#connect-me" class="nav-link-button flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-shadow shadow-sm hover:shadow-md">
                    <div class="nav-link-icon w-6 h-6">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.00845 13.4911C4.6834 15.0863 6.67742 14.4482 7.47502 13.8022C7.88768 13.4679 8.07322 13.2518 8.23268 13.0923C8.79102 12.5738 8.75515 12.0554 8.39222 11.6407C8.24702 11.4747 7.31548 10.5799 6.42217 9.66263C5.95956 9.19996 5.64052 8.87303 5.36774 8.60983C5.00244 8.24569 4.68341 7.82816 4.20485 7.84009C3.76617 7.84009 3.44713 8.22696 3.04833 8.62576C2.58956 9.08449 2.25074 9.66263 2.1311 10.1811C1.77218 11.6965 2.3305 12.7732 3.00845 13.4911ZM3.00845 13.4911L1.3335 15.166" stroke="#525252" stroke-linecap="round"></path>
                            <path d="M12.9913 3.50973C11.3159 1.91377 9.32881 2.56387 8.53101 3.21024C8.11821 3.54466 7.93268 3.76084 7.77308 3.92044C7.21461 4.43912 7.25055 4.9578 7.61355 5.37276C7.66575 5.43246 7.81968 5.58642 8.03688 5.80179M12.9913 3.50973C13.6695 4.22791 14.2354 5.3169 13.8763 6.83306C13.7567 7.35172 13.4178 7.93012 12.9589 8.38912C12.56 8.78812 12.2409 9.17512 11.8021 9.17512C11.3233 9.18712 11.0749 8.84092 10.7095 8.47665M12.9913 3.50973L14.6668 1.83398M8.03688 5.80179C8.42388 6.18546 9.01188 6.764 9.58415 7.35172C10.0469 7.81465 10.4367 8.21332 10.7095 8.47665M8.03688 5.80179L7.00781 6.83731M10.7095 8.47665L9.66848 9.49298" stroke="#525252" stroke-linecap="round"></path>
                        </svg>
                    </div>
                    <div>Connect Me</div>
                </a>

            </div>
            <div className="bg-white p-3 shadow-lg rounded-xl flex-col flex gap-3 mt-5">
                <div class="text-16px black px-3">Top Rate on:</div>
                <div className="flex p-3 gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                        <g clip-path="url(#clip0_424_1045)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 -0.5C7.7614 -0.5 10 1.73857 10 4.5V-0.5H15C17.7614 -0.5 20 1.73857 20 4.5C20 7.2614 17.7614 9.5 15 9.5C17.7614 9.5 20 11.7386 20 14.5C20 15.8712 19.4481 17.1134 18.5543 18.0167L18.5355 18.0355L18.5189 18.052C17.6154 18.9471 16.3723 19.5 15 19.5C13.637 19.5 12.3015 18.9546 11.4995 18.0702C11.4878 18.0588 11.4761 18.0471 11.4644 18.0355C11.4535 18.0246 11.4426 18.0136 11.4318 18.0026C10.5462 17.1005 10 15.864 10 14.5C10 17.2614 7.7614 19.5 5 19.5C2.23857 19.5 0 17.2614 0 14.5V9.5H5C2.23857 9.5 0 7.2614 0 4.5C0 1.73857 2.23857 -0.5 5 -0.5ZM9 4.5C9 6.70915 7.20915 8.5 5 8.5V0.5C7.20915 0.5 9 2.29086 9 4.5ZM19 14.5C19 12.2908 17.2092 10.5 15 10.5C12.7908 10.5 11 12.2908 11 14.5H19ZM1 10.5V14.5C1 16.7092 2.79086 18.5 5 18.5C7.20915 18.5 9 16.7092 9 14.5V10.5H1ZM11 8.5V0.5H15C17.2092 0.5 19 2.29086 19 4.5C19 6.70915 17.2092 8.5 15 8.5H11Z" fill="#525252"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_424_1045">
                                <rect width="20" height="20" fill="white"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                    <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_424_1046)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7779 5.34265C11.9556 4.79325 10.9889 4.5 10 4.5V-0.5C11.9778 -0.5 13.9112 0.08649 15.5557 1.1853C17.2002 2.28411 18.4819 3.84591 19.2388 5.67315C19.9956 7.5004 20.1937 9.5111 19.8078 11.4509C19.422 13.3907 18.4696 15.1726 17.0711 16.5711C15.6726 17.9696 13.8907 18.922 11.9509 19.3078C10.0111 19.6937 8.0004 19.4956 6.17315 18.7388C4.34591 17.9819 2.78411 16.7002 1.6853 15.0557C0.58649 13.4112 0 11.4778 0 9.5H5C5 10.4889 5.29325 11.4556 5.84265 12.2779C6.39205 13.1001 7.17295 13.7309 8.0866 14.1194C9.0002 14.4979 10.0055 14.5969 10.9754 14.4039C11.9453 14.211 12.8363 13.7348 13.5356 13.0356C14.2348 12.3363 14.711 11.4453 14.9039 10.4754C15.0969 9.50555 14.9979 8.5002 14.6194 7.5866C14.2409 6.67295 13.6001 5.89205 12.7779 5.34265Z" fill="#525252"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 -0.499998C5 0.156612 4.87067 0.806792 4.6194 1.41342C4.36812 2.02005 3.99983 2.57124 3.53553 3.03554C3.07124 3.49983 2.52005 3.86813 1.91342 4.1194C1.30679 4.37067 0.656607 4.5 2.18555e-07 4.5L0 9.5C1.31322 9.5 2.61358 9.24135 3.82684 8.7388C5.0401 8.23625 6.1425 7.49965 7.07105 6.57105C7.99965 5.6425 8.73625 4.5401 9.2388 3.32684C9.74135 2.11358 10 0.813217 10 -0.5L5 -0.499998Z" fill="#525252"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_424_1046">
                                <rect width="20" height="20" fill="white"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                    <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_424_1047)">
                            <path d="M19.9725 10.25H16.4002C13.2798 10.25 10.7502 12.7796 10.7502 15.9V19.4723C15.6752 19.1071 19.6073 15.175 19.9725 10.25Z" fill="#525252"></path>
                            <path d="M9.25015 19.4723V15.9C9.25015 12.7796 6.72055 10.25 3.60013 10.25H0.027832C0.392999 15.175 4.32518 19.1071 9.25015 19.4723Z" fill="#525252"></path>
                            <path d="M19.9725 8.75014C19.6073 3.82518 15.6752 -0.107001 10.7502 -0.472168V3.10013C10.7502 6.22054 13.2798 8.75014 16.4002 8.75014H19.9725Z" fill="#525252"></path>
                            <path d="M9.25015 -0.472168C4.32518 -0.107001 0.392999 3.82518 0.027832 8.75014H3.60013C6.72055 8.75014 9.25015 6.22054 9.25015 3.10013V-0.472168Z" fill="#525252"></path>
                            <path d="M6.7915 9.49967C8.17775 8.80702 9.3075 7.67727 10.0001 6.29102C10.6928 7.67727 11.8225 8.80702 13.2088 9.49967C11.8225 10.1923 10.6928 11.322 10.0001 12.7083C9.3075 11.322 8.17775 10.1923 6.7915 9.49967Z" fill="#525252"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_424_1047">
                                <rect width="20" height="20" fill="white"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                </div>


            </div>

        </aside>
    );
};

export default Sidebar;
