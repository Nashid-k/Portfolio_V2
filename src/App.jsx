// import { useEffect, useState, useCallback, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   ExternalLink, Github, Linkedin, Mail, FileText, Menu, X,
//   ShoppingCart, Layers, CloudRain, ListChecks, Cloud, Type, Code, Clock
// } from "lucide-react";

// const projects = [
//   {
//     id: "featured-project-1",
//     title: "BlogHub — Full Stack Blogging Platform",
//     description: "A comprehensive multi-user blogging platform with role-based access controls, secure JWT authentication, full CRUD operations, and real-time analytics dashboards. Features input validation, CORS management, and responsive mobile-first UI design. Built with modern security best practices.",
//     tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Context API", "bcryptjs"],
//     github: "https://github.com/Nashid-k/BlogHub",
//     external: null,
//     icon: <Code size={40} />
//   },
//   {
//     id: "featured-project-2",
//     title: "Fashion E-commerce Platform",
//     description: "Complete e-commerce solution with Razorpay payment processing, inventory management, Google OAuth and OTP-based authentication. Features admin dashboards for product/order tracking, analytics, and secure cloud deployment on AWS EC2 with comprehensive security configurations.",
//     tech: ["Node.js", "Express.js", "MongoDB", "EJS", "Razorpay", "AWS EC2", "Google OAuth"],
//     github: "https://github.com/Nashid-k/First_Project_Ecommerce",
//     external: null,
//     icon: <ShoppingCart size={40} />
//   },
//   {
//     id: "featured-project-3",
//     title: "Netflix Clone — Streaming Platform",
//     description: "Full-featured streaming service recreation with TMDB API integration, advanced search and filtering capabilities, personalized recommendations, dynamic content delivery, and real-time user watch history tracking. Built with modern state management using Zustand.",
//     tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Zustand", "TMDB API"],
//     github: "https://github.com/Nashid-k/netflix-clone",
//     external: null,
//     icon: <Layers size={40} />
//   }
// ];

// const otherProjects = [
//   {
//     title: "Marketplace Clone (OLX-style)",
//     description: "Real-time product listing platform with advanced search and filtering, Firebase authentication, location-based queries, responsive UI with modular components and efficient state management.",
//     tech: ["React.js", "Firebase", "Tailwind CSS", "Context API"],
//     github: "https://github.com/Nashid-k/olx-clone_updated",
//     external: "https://olx-demo-delta.vercel.app"
//   },
//   {
//     title: "Job Listing Platform",
//     description: "Scalable job portal with React frontend and Node.js backend, featuring REST APIs and responsive design using Tailwind CSS for optimal user experience.",
//     tech: ["React", "Node.js", "Express", "Tailwind CSS"],
//     github: "https://github.com/Nashid-k/JobList_Application",
//     external: null
//   },
//   {
//     title: "Weather Dashboard",
//     description: "Geolocation-aware weather dashboard using OpenWeather API with dynamic updates, auto-location weather detection, and real-time data visualization.",
//     tech: ["React", "OpenWeather API", "Geolocation"],
//     github: "https://github.com/Nashid-k/weather_react",
//     external: null
//   },
//   {
//     title: "TypeScript CRUD Tool",
//     description: "Type-safe CRUD application implementing React and TypeScript best practices with maintainable state management and modular design architecture.",
//     tech: ["React", "TypeScript", "Tailwind CSS"],
//     github: "https://github.com/Nashid-k/CRUD_App",
//     external: null
//   },
//   {
//     title: "Digital Clock with Alarm",
//     description: "Multi-theme digital clock with Web Audio API integration, smooth animations, real-time alarms, and responsive mobile-friendly user interface.",
//     tech: ["HTML5", "CSS3", "JavaScript", "Web Audio API"],
//     github: "https://github.com/Nashid-k/Digital_Clock",
//     external: "https://nashid-k.github.io/Digital_Clock/"
//   },
//   {
//     title: "Advanced Todo Application",
//     description: "Feature-rich task management app with session storage persistence, category organization, and clean UI design.",
//     tech: ["React", "Session Storage", "Tailwind CSS"],
//     github: "https://github.com/Nashid-k/TODO_react",
//     external: "https://todo-react-6qtxru3ph-nashids-projects-e27665ac.vercel.app/"
//   },
//   {
//     title: "Calculator Application",
//     description: "Responsive calculator with clean design and real-time input/output display, built with vanilla JavaScript.",
//     tech: ["HTML5", "CSS3", "JavaScript"],
//     github: "https://github.com/Nashid-k/Calculator",
//     external: "https://nashid-k.github.io/Calculator/"
//   },
//   // Static clones for learning progression
//   {
//     title: "Kiwi Static Clone",
//     description: "Static clone of Kiwi website built with HTML and CSS.",
//     tech: ["HTML", "CSS"],
//     github: "https://github.com/Nashid-k/kiwi",
//     external: "https://nashid-k.github.io/kiwi/"
//   },
//   {
//     title: "Huawei Static Clone",
//     description: "Static clone of Huawei website using HTML and CSS.",
//     tech: ["HTML", "CSS"],
//     github: "https://github.com/Nashid-k/huawei",
//     external: "https://nashid-k.github.io/huawei/"
//   },
//   {
//     title: "Appy Fizz Responsive Clone",
//     description: "Responsive clone of Appy Fizz using HTML, CSS, JS, Bootstrap, and media queries.",
//     tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Media Queries"],
//     github: "https://github.com/Nashid-k/APPY-FIZZ-RESPONSIVE",
//     external: "https://nashid-k.github.io/APPY-FIZZ-RESPONSIVE/"
//   },
//   {
//     title: "First Responsive Portfolio",
//     description: "Responsive portfolio using HTML, CSS, Google Form submission, Bootstrap, and media queries.",
//     tech: ["HTML", "CSS", "Bootstrap", "Google Forms", "Media Queries"],
//     github: "https://github.com/Nashid-k/personal-website",
//     external: "https://nashid-k.github.io/personal-website/"
//   }
// ];

// const experiences = [
//   {
//     company: "Self-Learning & Independent Development",
//     title: "Focused Upskilling During Recovery",
//     range: "November 2024 — Present",
//     url: "",
//     description: [
//       "Dedicated personal study and project work to broaden expertise in JavaScript, TypeScript and modern frameworks",
//       "Developed multiple full-stack MERN applications simulating real-world requirements with production-ready features",
//       "Contributed to over 50 open-source repositories, refining code quality and best practices",
//       "Explored scalable system design, microservices architecture, and database optimization strategies",
//       "Prepared rigorously for technical interviews to align with current industry demands and modern development practices"
//     ]
//   },
//   {
//     company: "Brototype — MERN Stack Program",
//     title: "Full Stack Development Intern",
//     range: "December 2023 — November 2024",
//     url: "https://www.brototype.com/",
//     description: [
//       "Completed intensive 1,000+ hour MERN stack training with project-based deliverables and hands-on learning",
//       "Engineered 8+ production-ready web applications, covering comprehensive front-end to backend integration",
//       "Advanced React skills including hooks, lifecycle management, performance optimization, and modern patterns",
//       "Designed scalable REST APIs using Node.js and Express.js with seamless MongoDB integration",
//       "Implemented robust authentication systems using JWT, OAuth, and encrypted password storage with security best practices",
//       "Collaborated in Agile teams using Git workflows, participating in code review sessions and pair programming",
//       "Handled deployments on AWS and Vercel, managing CI/CD pipelines and environment variables for production environments"
//     ]
//   },
//   {
//     company: "Hajee A. P. Bava & Co. (HAPBCO)",
//     title: "Industrial Technician",
//     range: "March 2022 — November 2023",
//     url: "https://hapbco.co",
//     description: [
//       "Installed and maintained complex industrial machinery, ensuring timely project completion and quality standards",
//       "Coordinated with engineering teams to meet critical project milestones and maintain high-quality deliverables",
//       "Troubleshot technical issues efficiently, improving system uptime and operational reliability",
//       "Enforced strict adherence to safety protocols in demanding industrial environments",
//       "Developed strong problem-solving skills and attention to detail in high-pressure situations"
//     ]
//   },
//    {
//     company: "KPA Crusher Private Limited",
//     title: "Accountant",
//     range: "February 2020 — February 2022",
//     url: "",
//     description: [
//       "Managed daily bookkeeping operations, invoice processing, and comprehensive expense reconciliation",
//       "Generated detailed audit reports and ensured compliance with regulatory standards and financial protocols",
//       "Improved accuracy and timeliness of financial record maintenance through systematic processes",
//       "Coordinated with operations teams to align financial tracking with business objectives",
//       "Developed analytical skills and attention to detail that later proved valuable in programming and debugging"
//     ]
//   }
// ];

// // Simplified custom cursor component
// const CustomCursor = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isPointer, setIsPointer] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const [isDesktop, setIsDesktop] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
//     setIsDesktop(mediaQuery.matches);

//     const handleMediaChange = (e) => setIsDesktop(e.matches);
//     mediaQuery.addEventListener('change', handleMediaChange);
//     return () => mediaQuery.removeEventListener('change', handleMediaChange);
//   }, []);

//   const updateMousePosition = useCallback((e) => {
//     setMousePosition({ x: e.clientX, y: e.clientY });
//   }, []);

//   const updateCursorType = useCallback((e) => {
//     const target = e.target;
//     const isClickable = target.matches('a, button, [role="button"], input, textarea, select, [onclick], .cursor-pointer') ||
//                        target.closest('a, button, [role="button"], input, textarea, select, [onclick], .cursor-pointer');
//     setIsPointer(isClickable);
//   }, []);

//   useEffect(() => {
//     if (!isDesktop) return;

//     const handleMouseEnter = () => {
//       setIsVisible(true);
//       document.body.style.cursor = 'none';
//     };

//     const handleMouseLeave = () => {
//       setIsVisible(false);
//       document.body.style.cursor = 'auto';
//     };

//     document.addEventListener('mousemove', updateMousePosition, { passive: true });
//     document.addEventListener('mouseenter', handleMouseEnter);
//     document.addEventListener('mouseleave', handleMouseLeave);
//     document.addEventListener('mouseover', updateCursorType, { passive: true });

//     return () => {
//       document.removeEventListener('mousemove', updateMousePosition);
//       document.removeEventListener('mouseenter', handleMouseEnter);
//       document.removeEventListener('mouseleave', handleMouseLeave);
//       document.removeEventListener('mouseover', updateCursorType);
//       document.body.style.cursor = 'auto';
//     };
//   }, [isDesktop, updateMousePosition, updateCursorType]);

//   if (!isDesktop || !isVisible) return null;

//   return (
//     <>
//       {/* Main cursor dot - simplified */}
//       <div 
//         className="fixed w-2 h-2 bg-teal-400 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-75"
//         style={{
//           left: mousePosition.x - 4,
//           top: mousePosition.y - 4,
//           transform: `scale(${isPointer ? 1.5 : 1})`,
//         }}
//       />
      
//       {/* Cursor ring - simplified */}
//       <div 
//         className="fixed w-8 h-8 border border-teal-400/40 rounded-full pointer-events-none z-[9998] transition-transform duration-150"
//         style={{
//           left: mousePosition.x - 16,
//           top: mousePosition.y - 16,
//           transform: `scale(${isPointer ? 1.5 : 1})`,
//         }}
//       />
//     </>
//   );
// };

// export default function Portfolio() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrollY, setScrollY] = useState(0);
//   const [isDesktop, setIsDesktop] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
//     setIsDesktop(mediaQuery.matches);

//     const handleMediaChange = (e) => setIsDesktop(e.matches);
//     mediaQuery.addEventListener('change', handleMediaChange);
//     return () => mediaQuery.removeEventListener('change', handleMediaChange);
//   }, []);

//   // Throttled scroll handler
//   useEffect(() => {
//     let ticking = false;
//     const handleScroll = () => {
//       if (!ticking) {
//         requestAnimationFrame(() => {
//           setScrollY(window.scrollY);
//           ticking = false;
//         });
//         ticking = true;
//       }
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = useCallback((sectionId) => {
//     document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
//     setIsMenuOpen(false);
//   }, []);

//   // Memoized animation variants to prevent recreation
//   const fadeInUp = useMemo(() => ({
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.5 }
//   }), []);

//   const staggerContainer = useMemo(() => ({
//     initial: { opacity: 0 },
//     animate: { 
//       opacity: 1,
//       transition: { staggerChildren: 0.1 }
//     }
//   }), []);

//   return (
//     <div 
//       className="min-h-screen bg-slate-900 text-slate-100 selection:bg-teal-300 selection:text-teal-900" 
//       style={{ cursor: isDesktop ? 'none' : 'auto' }}
//     >
//       {/* Custom Cursor */}
//       <CustomCursor />

//       {/* Simplified Background Pattern */}
//       <div className="fixed inset-0 z-0 opacity-50">
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:40px_40px]" />
//       </div>

//       {/* Navigation */}
//       <header className={`fixed top-0 z-50 w-full px-6 py-6 lg:px-12 transition-all duration-300 ${
//         scrollY > 100 
//           ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' 
//           : 'bg-transparent'
//       }`}>
//         <nav className="flex items-center justify-between">
//           <motion.div {...fadeInUp}>
//             <a
//               href="/"
//               className="text-lg font-mono text-teal-400 hover:text-teal-300 transition-colors cursor-pointer"
//             >
//               Nashid
//             </a>
//           </motion.div>

//           {/* Desktop Navigation */}
//           <motion.div
//             {...fadeInUp}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="hidden lg:flex items-center space-x-8"
//           >
//             {[
//               { id: 'about', label: '01. About' },
//               { id: 'experience', label: '02. Experience' },
//               { id: 'work', label: '03. Work' },
//               { id: 'contact', label: '04. Contact' }
//             ].map(({ id, label }) => (
//               <button
//                 key={id}
//                 onClick={() => scrollToSection(id)}
//                 className="text-sm font-mono text-slate-300 hover:text-teal-300 transition-colors cursor-pointer"
//               >
//                 {label}
//               </button>
//             ))}
//             <a
//               href="/Nashid_Resume.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="ml-4 px-4 py-2 text-sm font-mono text-teal-400 border border-teal-400 rounded hover:bg-teal-400/10 transition-colors cursor-pointer"
//             >
//               Resume
//             </a>
//           </motion.div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="lg:hidden p-2 text-teal-400 cursor-pointer"
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </nav>

//         {/* Mobile Navigation */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, x: '100%' }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: '100%' }}
//               transition={{ type: 'tween', duration: 0.3 }}
//               className="fixed top-0 right-0 bottom-0 z-50 w-2/3 bg-slate-800 lg:hidden"
//             >
//               <div className="flex flex-col h-full p-6">
//                 <button
//                   onClick={() => setIsMenuOpen(false)}
//                   className="self-end p-2 text-teal-400 mb-8 cursor-pointer"
//                 >
//                   <X size={24} />
//                 </button>
//                 <nav className="flex flex-col space-y-8 font-mono text-lg">
//                   {[
//                     { id: 'about', label: '01. About' },
//                     { id: 'experience', label: '02. Experience' },
//                     { id: 'work', label: '03. Work' },
//                     { id: 'contact', label: '04. Contact' }
//                   ].map(({ id, label }) => (
//                     <button
//                       key={id}
//                       onClick={() => scrollToSection(id)}
//                       className="text-left text-slate-300 hover:text-teal-300 cursor-pointer"
//                     >
//                       {label}
//                     </button>
//                   ))}
//                   <a
//                     href="/Nashid_Resume.pdf"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-block w-fit px-4 py-2 text-teal-400 border border-teal-400 rounded hover:bg-teal-400/10 cursor-pointer"
//                   >
//                     Resume
//                   </a>
//                 </nav>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </header>

//       {/* Social Links */}
//       <div className="fixed bottom-0 left-6 hidden lg:block z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 1 }}
//           className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:bg-slate-400 after:mt-6"
//         >
//           {[
//             { href: "https://github.com/Nashid-k", icon: Github },
//             { href: "https://linkedin.com/in/nashid-k-080909273/", icon: Linkedin },
//             { href: "mailto:nashidk1999@gmail.com", icon: Mail }
//           ].map(({ href, icon: Icon }, index) => (
//             <a
//               key={index}
//               href={href}
//               target={href.startsWith('mailto:') ? undefined : "_blank"}
//               rel={href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
//               className="text-slate-400 hover:text-teal-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
//             >
//               <Icon size={20} />
//             </a>
//           ))}
//         </motion.div>
//       </div>

//       {/* Email */}
//       <div className="fixed bottom-0 right-6 hidden lg:block z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 1 }}
//           className="flex flex-col items-center after:content-[''] after:block after:w-px after:h-24 after:bg-slate-400 after:mt-6"
//         >
//           <a
//             href="mailto:nashidk1999@gmail.com"
//             className="font-mono text-sm text-slate-400 hover:text-teal-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
//             style={{ writingMode: 'vertical-rl' }}
//           >
//             nashidk1999@gmail.com
//           </a>
//         </motion.div>
//       </div>

//       <main className="relative z-10">
//         {/* Hero Section */}
//         <section className="min-h-screen flex items-center px-6 lg:px-12 max-w-7xl mx-auto">
//           <div className="max-w-4xl">
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="font-mono text-teal-400 mb-5 text-base lg:text-lg"
//             >
//               Hi, my name is
//             </motion.p>
            
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               className="text-5xl lg:text-7xl font-bold text-slate-200 mb-4"
//             >
//               Nashid.
//             </motion.h1>
            
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               className="text-4xl lg:text-6xl font-bold text-slate-400 mb-6"
//             >
//               I build things for the web.
//             </motion.h2>
            
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.5 }}
//               className="max-w-2xl text-lg text-slate-400 mb-12 leading-relaxed"
//             >
//               I'm a full-stack developer specializing in building exceptional digital experiences. 
//               Currently, I'm focused on creating accessible, user-centered products using modern web technologies 
//               and the MERN stack.
//             </motion.p>
            
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.6 }}
//             >
//               <button
//                 onClick={() => scrollToSection('work')}
//                 className="px-7 py-4 text-teal-400 border border-teal-400 rounded font-mono hover:bg-teal-400/10 transition-colors cursor-pointer"
//               >
//                 Check out my work!
//               </button>
//             </motion.div>
//           </div>
//         </section>

//         {/* About Section */}
//         <section id="about" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="flex items-center text-2xl lg:text-3xl font-bold text-slate-200 mb-8">
//               <span className="font-mono text-base lg:text-lg text-teal-400 mr-4">01.</span>
//               About Me
//               <div className="ml-4 h-px bg-slate-600 flex-1 max-w-xs"></div>
//             </h2>

//             <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
//               <div className="lg:col-span-2 space-y-4">
//                 <p className="text-slate-400">
//                   Hello! I'm Nashid, and I enjoy creating things that live on the internet. 
//                   My journey into web development started from a non-technical background in operations 
//                   and accounting, which gives me a unique perspective on building practical, business-oriented solutions.
//                 </p>

//                 <p className="text-slate-400">
//                   I'm a self-taught developer who has overcome significant challenges, including a health setback 
//                   with Bell's Palsy, which taught me resilience and the importance of perseverance. 
//                   This experience strengthened my problem-solving abilities and adaptability.
//                 </p>

//                 <p className="text-slate-400">
//                   Today, I focus on building accessible, inclusive products and digital experiences 
//                   using modern technologies. I've built everything from e-commerce platforms to 
//                   streaming service clones, always with an emphasis on user experience and clean code.
//                 </p>

//                 <p className="text-slate-400 mb-6">
//                   Here are a few technologies I've been working with recently:
//                 </p>

//                 <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 font-mono text-sm text-slate-400">
//                   {[
//                     "JavaScript (ES6+)", "TypeScript", "React", "Node.js", "Express", "MongoDB",
//                     "PostgreSQL", "Firebase", "AWS (EC2)", "Git & GitHub", "Tailwind CSS", "Bootstrap"
//                   ].map((tech) => (
//                     <div key={tech} className="flex items-center">
//                       <span className="text-teal-400 mr-2">▹</span>
//                       {tech}
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="relative">
//                 <div className="relative max-w-xs mx-auto lg:mx-0">
//                   <div className="bg-teal-400 rounded absolute -inset-4 -rotate-6"></div>
//                   <div className="relative bg-slate-800 rounded overflow-hidden">
//                     <img
//                       src="/profile.jpg"
//                       alt="Nashid"
//                       className="w-full h-auto filter grayscale hover:grayscale-0 transition-all duration-300"
//                     />
//                     <div className="absolute inset-0 bg-teal-400/20 hover:bg-transparent transition-colors duration-300"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </section>

//         {/* Experience Section */}
//         <section id="experience" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="flex items-center text-2xl lg:text-3xl font-bold text-slate-200 mb-12">
//               <span className="font-mono text-base lg:text-lg text-teal-400 mr-4">02.</span>
//               Where I've Learned
//               <div className="ml-4 h-px bg-slate-600 flex-1 max-w-xs"></div>
//             </h2>

//             <div className="max-w-3xl space-y-8">
//               {experiences.map((exp, index) => (
//                 <div key={index} className="border-b border-slate-700 pb-8 last:border-b-0">
//                   <h3 className="text-xl font-semibold text-slate-200 mb-2">
//                     <span>{exp.title}</span>
//                     {exp.company && (
//                       <>
//                         <span className="text-teal-400"> @ </span>
//                         {exp.url ? (
//                           <a
//                             href={exp.url}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-teal-400 hover:underline cursor-pointer"
//                           >
//                             {exp.company}
//                           </a>
//                         ) : (
//                           <span className="text-teal-400">{exp.company}</span>
//                         )}
//                       </>
//                     )}
//                   </h3>
                  
//                   <p className="font-mono text-sm text-slate-400 mb-6">{exp.range}</p>
                  
//                   <ul className="space-y-3">
//                     {exp.description.map((item, i) => (
//                       <li key={i} className="flex text-slate-400">
//                         <span className="text-teal-400 mr-3 flex-shrink-0">▹</span>
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </section>

//         {/* Featured Projects */}
//         <section id="work" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="flex items-center text-2xl lg:text-3xl font-bold text-slate-200 mb-16">
//               <span className="font-mono text-base lg:text-lg text-teal-400 mr-4">03.</span>
//               Some Things I've Built
//               <div className="ml-4 h-px bg-slate-600 flex-1 max-w-xs"></div>
//             </h2>

//             <div className="space-y-16">
//               {projects.map((project, index) => (
//                 <div
//                   key={project.id}
//                   className="group relative bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 hover:bg-slate-800/70 transition-all duration-300"
//                 >
//                   <div className="flex flex-col lg:flex-row lg:items-center gap-8">
//                     <div className="flex-shrink-0">
//                       <div className="w-20 h-20 bg-slate-700 rounded-lg flex items-center justify-center text-teal-400 group-hover:bg-slate-600 transition-colors duration-300">
//                         {project.icon}
//                       </div>
//                     </div>
                    
//                     <div className="flex-1">
//                       <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
//                         <div>
//                           <p className="font-mono text-teal-400 text-sm mb-2">Featured Project</p>
//                           <h3 className="text-2xl font-semibold text-slate-200 mb-3">{project.title}</h3>
//                         </div>
                        
//                         <div className="flex gap-4 flex-shrink-0">
//                           <a
//                             href={project.github}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-slate-400 hover:text-teal-400 transition-colors"
//                           >
//                             <Github size={20} />
//                           </a>
//                           {project.external && (
//                             <a
//                               href={project.external}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="text-slate-400 hover:text-teal-400 transition-colors"
//                             >
//                               <ExternalLink size={20} />
//                             </a>
//                           )}
//                         </div>
//                       </div>
                      
//                       <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>
                      
//                       <ul className="flex flex-wrap gap-3 font-mono text-sm text-slate-400">
//                         {project.tech.map((tech, i) => (
//                           <li key={i} className="bg-slate-700/50 px-3 py-1 rounded">{tech}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </section>

//         {/* Other Projects */}
//         <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl font-bold text-slate-200 mb-4">Other Noteworthy Projects</h2>
//             <a
//               href="https://github.com/Nashid-k"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-teal-400 font-mono hover:underline cursor-pointer"
//             >
//               view the archive
//             </a>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {otherProjects.map((project, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="bg-slate-800 p-6 rounded hover:-translate-y-2 transition-transform duration-300"
//               >
//                 <div className="flex justify-between items-center mb-4">
//                   <div className="text-teal-400">
//                     <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M22 16.74l-7.1-4.73 7.1-4.74V16.74zm-9.02-4.74L2 7.26v9.48L12.98 12z" fill="currentColor"/>
//                     </svg>
//                   </div>
//                   <div className="flex gap-2">
//                     <a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-slate-400 hover:text-teal-400 transition-colors cursor-pointer"
//                     >
//                       <Github size={18} />
//                     </a>
//                     {project.external && (
//                       <a
//                         href={project.external}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-slate-400 hover:text-teal-400 transition-colors cursor-pointer"
//                       >
//                         <ExternalLink size={18} />
//                       </a>
//                     )}
//                   </div>
//                 </div>
                
//                 <h3 className="text-xl font-semibold text-slate-200 mb-3">{project.title}</h3>
//                 <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                
//                 <ul className="flex flex-wrap gap-2 font-mono text-xs text-slate-400">
//                   {project.tech.map((tech, i) => (
//                     <li key={i}>{tech}</li>
//                   ))}
//                 </ul>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section id="contact" className="py-24 px-6 lg:px-12 max-w-2xl mx-auto text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.6 }}
//           >
//             <p className="font-mono text-teal-400 mb-4">04. What's Next?</p>
//             <h2 className="text-4xl lg:text-5xl font-bold text-slate-200 mb-6">Get In Touch</h2>
//             <p className="text-slate-400 mb-12 text-lg leading-relaxed">
//               Although I'm not currently looking for any new opportunities, my inbox is always open. 
//               Whether you have a question or just want to say hi, I'll try my best to get back to you!
//             </p>
//             <a
//               href="mailto:nashidk1999@gmail.com"
//               className="inline-block px-7 py-4 text-teal-400 border border-teal-400 rounded font-mono hover:bg-teal-400/10 transition-colors cursor-pointer"
//             >
//               Say Hello
//             </a>
//           </motion.div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="pb-12 px-6 lg:px-12 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="lg:hidden flex justify-center space-x-6 mb-6">
//             {[
//               { href: "https://github.com/Nashid-k", icon: Github },
//               { href: "https://linkedin.com/in/nashid-k", icon: Linkedin },
//               { href: "mailto:nashidk1999@gmail.com", icon: Mail }
//             ].map(({ href, icon: Icon }, index) => (
//               <a
//                 key={index}
//                 href={href}
//                 target={href.startsWith('mailto:') ? undefined : "_blank"}
//                 rel={href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
//                 className="text-slate-400 hover:text-teal-300 transition-colors cursor-pointer"
//               >
//                 <Icon size={24} />
//               </a>
//             ))}
//           </div>
          
//           <p className="text-slate-400 font-mono text-sm">
//             Built with ❤️ using guidance from Claude AI
//           </p>

//           <p className="text-slate-500 font-mono text-xs mt-2">
//             Designed & Built by Nashid K
//           </p>
//         </motion.div>
//       </footer>
//     </div>
//   );
// }








import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Github, Linkedin, Mail, FileText, Menu, X,
  ExternalLink, Code, Briefcase, User, BookOpen, Send
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll("section");
      let currentSection = "home";
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          currentSection = section.id;
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  }, []);

  // Projects data
  const projects = [
    {
      id: "resume-project",
      title: "Interactive Resume Builder",
      description: "A modern, responsive resume builder that creates professional PDF resumes with real-time preview. Features customizable templates, export functionality, and a clean UI.",
      tech: ["React", "TypeScript", "Tailwind CSS", "PDF Generation", "Context API"],
      github: "https://github.com/Nashid-k/resume-builder",
      external: "https://resume-builder-nashid.vercel.app/",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: "bloghub",
      title: "BlogHub — Full Stack Blogging Platform",
      description: "A comprehensive multi-user blogging platform with role-based access controls, secure JWT authentication, full CRUD operations, and real-time analytics dashboards.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Context API"],
      github: "https://github.com/Nashid-k/BlogHub",
      external: null,
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: "ecommerce",
      title: "Fashion E-commerce Platform",
      description: "Complete e-commerce solution with Razorpay payment processing, inventory management, Google OAuth and OTP-based authentication.",
      tech: ["Node.js", "Express.js", "MongoDB", "EJS", "Razorpay", "AWS EC2"],
      github: "https://github.com/Nashid-k/First_Project_Ecommerce",
      external: null,
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: "netflix",
      title: "Netflix Clone — Streaming Platform",
      description: "Full-featured streaming service recreation with TMDB API integration, advanced search and filtering capabilities, and personalized recommendations.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Zustand", "TMDB API"],
      github: "https://github.com/Nashid-k/netflix-clone",
      external: null,
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: "marketplace",
      title: "Marketplace Clone (OLX-style)",
      description: "Real-time product listing platform with advanced search and filtering, Firebase authentication, and location-based queries.",
      tech: ["React.js", "Firebase", "Tailwind CSS", "Context API"],
      github: "https://github.com/Nashid-k/olx-clone_updated",
      external: "https://olx-demo-delta.vercel.app",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: "jobportal",
      title: "Job Listing Platform",
      description: "Scalable job portal with React frontend and Node.js backend, featuring REST APIs and responsive design.",
      tech: ["React", "Node.js", "Express", "Tailwind CSS"],
      github: "https://github.com/Nashid-k/JobList_Application",
      external: null,
      image: "/api/placeholder/400/250",
      featured: false
    }
  ];

  // Experience data
  const experiences = [
    {
      company: "Self-Learning & Independent Development",
      title: "Focused Upskilling During Recovery",
      range: "November 2024 — Present",
      description: [
        "Dedicated personal study and project work to broaden expertise in JavaScript, TypeScript and modern frameworks",
        "Developed multiple full-stack MERN applications simulating real-world requirements with production-ready features",
        "Contributed to over 50 open-source repositories, refining code quality and best practices"
      ]
    },
    {
      company: "Brototype — MERN Stack Program",
      title: "Full Stack Development Intern",
      range: "December 2023 — November 2024",
      description: [
        "Completed intensive 1,000+ hour MERN stack training with project-based deliverables and hands-on learning",
        "Engineered 8+ production-ready web applications, covering comprehensive front-end to backend integration",
        "Advanced React skills including hooks, lifecycle management, performance optimization, and modern patterns"
      ]
    }
  ];

  // Skills data
  const skills = {
    frontend: ["React.js", "Next.js", "JavaScript ES6+", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
    backend: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Middleware", "Server Design"],
    database: ["MongoDB", "PostgreSQL", "Query Optimization", "Indexing", "Mongoose"],
    tools: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Render", "AWS EC2"],
    other: ["Responsive Design", "Problem Solving", "Agile Methodology", "UI/UX Principles"]
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-teal-600 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            Nashid K
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["about", "skills", "projects", "experience", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`font-medium transition-colors ${activeSection === item ? "text-teal-600" : "text-slate-700 hover:text-teal-500"}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors flex items-center gap-2"
            >
              <FileText size={16} />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 overflow-hidden"
            >
              <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
                {["about", "skills", "projects", "experience", "contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`py-2 font-medium text-left ${activeSection === item ? "text-teal-600" : "text-slate-700"}`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 text-teal-600 font-medium flex items-center gap-2"
                >
                  <FileText size={16} />
                  Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
        <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              Full Stack Developer
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              I build exceptional digital experiences using modern web technologies with a focus on performance and accessibility.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection("projects")}
                className="px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 border border-teal-600 text-teal-600 rounded-md hover:bg-teal-50 transition-colors"
              >
                Contact Me
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:w-2/5 flex justify-center"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 bg-teal-100 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <div className="w-full h-full bg-teal-200 flex items-center justify-center text-teal-600">
                <User size={96} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12 text-slate-900"
          >
            About Me
          </motion.h2>
          
          <div className="max-w-3xl mx-auto text-lg text-slate-700 leading-relaxed">
            <p className="mb-6">
              I'm a passionate Full Stack Developer with expertise in the MERN stack, specializing in building 
              scalable web applications with modern technologies. My journey into development started from 
              non-technical backgrounds in operations and accounting, which gives me a unique perspective 
              on creating practical, business-oriented solutions.
            </p>
            <p className="mb-6">
              I've successfully delivered 12+ production applications, including AI-powered SaaS platforms, 
              e-commerce solutions, and role-based access control systems. I'm particularly skilled at 
              database optimization, having improved query performance by up to 70% through indexing 
              and optimization techniques.
            </p>
            <p>
              When I'm not coding, I enjoy learning about new technologies, contributing to open-source 
              projects, and solving complex problems. I believe in writing clean, maintainable code and 
              creating user experiences that are both beautiful and functional.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-100">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12 text-slate-900"
          >
            Skills & Technologies
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4 text-teal-600 capitalize">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {items.map((skill) => (
                    <li key={skill} className="flex items-center">
                      <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12 text-slate-900"
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-slate-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-teal-100 overflow-hidden">
                  <div className="w-full h-full bg-teal-200 flex items-center justify-center text-teal-600">
                    <Code size={64} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-slate-700 hover:text-teal-600 transition-colors"
                      >
                        <Github size={18} />
                        Code
                      </a>
                    )}
                    {project.external && (
                      <a 
                        href={project.external} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-slate-700 hover:text-teal-600 transition-colors"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-semibold text-center mb-8 text-slate-900">Other Projects</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(p => !p.featured).map((project) => (
                <div key={project.id} className="bg-slate-50 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-semibold mb-2 text-slate-900">{project.title}</h4>
                  <p className="text-sm text-slate-600 mb-3">{project.description}</p>
                  
                  <div className="flex gap-3">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-teal-600 transition-colors"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.external && (
                      <a 
                        href={project.external} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-teal-600 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-100">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12 text-slate-900"
          >
            Experience & Education
          </motion.h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{exp.title}</h3>
                    <p className="text-teal-600">{exp.company}</p>
                  </div>
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full">
                    {exp.range}
                  </span>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex">
                      <span className="text-teal-500 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Software Engineering Fellowship</h3>
                  <p className="text-teal-600">Brototype (1000+ hrs Full Stack Program)</p>
                </div>
                <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full">
                  Dec 2023 – Nov 2024
                </span>
              </div>
              
              <ul className="space-y-2">
                <li className="flex">
                  <span className="text-teal-500 mr-2">•</span>
                  Completed 8+ full-stack apps, mastering authentication, payments, and cloud deployment
                </li>
                <li className="flex">
                  <span className="text-teal-500 mr-2">•</span>
                  Improved database query performance by 70% with indexing and optimization
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12 text-slate-900"
          >
            Get In Touch
          </motion.h2>
          
          <div className="max-w-md mx-auto bg-slate-50 p-8 rounded-lg shadow-sm">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
            
            <div className="mt-8 pt-6 border-t border-slate-200 flex justify-center space-x-6">
              <a 
                href="https://github.com/Nashid-k" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-teal-600 transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/nashid-k-080909273" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-teal-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:nashidk1999@gmail.com" 
                className="text-slate-500 hover:text-teal-600 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 text-slate-200">
        <div className="container mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} Nashid K. All rights reserved.</p>
          <p className="mt-2 text-sm text-slate-400">
            Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
