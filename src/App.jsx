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








import { useEffect, useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, Github, Linkedin, Mail, FileText, Menu, X,
  ShoppingCart, Layers, Code
} from "lucide-react";

const projects = [
  {
    id: "featured-project-1",
    title: "BlogHub — Full Stack Blogging Platform",
    description: "A comprehensive multi-user blogging platform with role-based access controls, secure JWT authentication, full CRUD operations, and real-time analytics dashboards. Features input validation, CORS management, and responsive mobile-first UI design. Built with modern security best practices.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Context API", "bcryptjs"],
    github: "https://github.com/Nashid-k/BlogHub",
    external: null,
    icon: <Code size={48} />
  },
  {
    id: "featured-project-2",
    title: "Fashion E-commerce Platform",
    description: "Complete e-commerce solution with Razorpay payment processing, inventory management, Google OAuth and OTP-based authentication. Features admin dashboards for product/order tracking, analytics, and secure cloud deployment on AWS EC2 with comprehensive security configurations.",
    tech: ["Node.js", "Express.js", "MongoDB", "EJS", "Razorpay", "AWS EC2", "Google OAuth"],
    github: "https://github.com/Nashid-k/First_Project_Ecommerce",
    external: null,
    icon: <ShoppingCart size={48} />
  },
  {
    id: "featured-project-3",
    title: "Netflix Clone — Streaming Platform",
    description: "Full-featured streaming service recreation with TMDB API integration, advanced search and filtering capabilities, personalized recommendations, dynamic content delivery, and real-time user watch history tracking. Built with modern state management using Zustand.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Zustand", "TMDB API"],
    github: "https://github.com/Nashid-k/netflix-clone",
    external: null,
    icon: <Layers size={48} />
  }
];

const otherProjects = [
  {
    title: "Marketplace Clone (OLX-style)",
    description: "Real-time product listing platform with advanced search and filtering, Firebase authentication, location-based queries, responsive UI with modular components and efficient state management.",
    tech: ["React.js", "Firebase", "Tailwind CSS", "Context API"],
    github: "https://github.com/Nashid-k/olx-clone_updated",
    external: "https://olx-demo-delta.vercel.app"
  },
  {
    title: "Job Listing Platform",
    description: "Scalable job portal with React frontend and Node.js backend, featuring REST APIs and responsive design using Tailwind CSS for optimal user experience.",
    tech: ["React", "Node.js", "Express", "Tailwind CSS"],
    github: "https://github.com/Nashid-k/JobList_Application",
    external: null
  },
  {
    title: "Weather Dashboard",
    description: "Geolocation-aware weather dashboard using OpenWeather API with dynamic updates, auto-location weather detection, and real-time data visualization.",
    tech: ["React", "OpenWeather API", "Geolocation"],
    github: "https://github.com/Nashid-k/weather_react",
    external: null
  },
  {
    title: "TypeScript CRUD Tool",
    description: "Type-safe CRUD application implementing React and TypeScript best practices with maintainable state management and modular design architecture.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Nashid-k/CRUD_App",
    external: null
  },
  {
    title: "Digital Clock with Alarm",
    description: "Multi-theme digital clock with Web Audio API integration, smooth animations, real-time alarms, and responsive mobile-friendly user interface.",
    tech: ["HTML5", "CSS3", "JavaScript", "Web Audio API"],
    github: "https://github.com/Nashid-k/Digital_Clock",
    external: "https://nashid-k.github.io/Digital_Clock/"
  },
  {
    title: "Advanced Todo Application",
    description: "Feature-rich task management app with session storage persistence, category organization, and clean UI design.",
    tech: ["React", "Session Storage", "Tailwind CSS"],
    github: "https://github.com/Nashid-k/TODO_react",
    external: "https://todo-react-6qtxru3ph-nashids-projects-e27665ac.vercel.app/"
  },
  {
    title: "Calculator Application",
    description: "Responsive calculator with clean design and real-time input/output display, built with vanilla JavaScript.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Nashid-k/Calculator",
    external: "https://nashid-k.github.io/Calculator/"
  },
  {
    title: "Kiwi Static Clone",
    description: "Static clone of Kiwi website built with HTML and CSS.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/Nashid-k/kiwi",
    external: "https://nashid-k.github.io/kiwi/"
  },
  {
    title: "Huawei Static Clone",
    description: "Static clone of Huawei website using HTML and CSS.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/Nashid-k/huawei",
    external: "https://nashid-k.github.io/huawei/"
  },
  {
    title: "Appy Fizz Responsive Clone",
    description: "Responsive clone of Appy Fizz using HTML, CSS, JS, Bootstrap, and media queries.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Media Queries"],
    github: "https://github.com/Nashid-k/APPY-FIZZ-RESPONSIVE",
    external: "https://nashid-k.github.io/APPY-FIZZ-RESPONSIVE/"
  },
  {
    title: "First Responsive Portfolio",
    description: "Responsive portfolio using HTML, CSS, Google Form submission, Bootstrap, and media queries.",
    tech: ["HTML", "CSS", "Bootstrap", "Google Forms", "Media Queries"],
    github: "https://github.com/Nashid-k/personal-website",
    external: "https://nashid-k.github.io/personal-website/"
  }
];

const experiences = [
  {
    company: "Self-Learning & Independent Development",
    title: "Focused Upskilling During Recovery",
    range: "November 2024 — Present",
    url: "",
    description: [
      "Dedicated personal study and project work to broaden expertise in JavaScript, TypeScript and modern frameworks",
      "Developed multiple full-stack MERN applications simulating real-world requirements with production-ready features",
      "Contributed to over 50 open-source repositories, refining code quality and best practices",
      "Explored scalable system design, microservices architecture, and database optimization strategies",
      "Prepared rigorously for technical interviews to align with current industry demands and modern development practices"
    ]
  },
  {
    company: "Brototype — MERN Stack Program",
    title: "Full Stack Development Intern",
    range: "December 2023 — November 2024",
    url: "https://www.brototype.com/",
    description: [
      "Completed intensive 1,000+ hour MERN stack training with project-based deliverables and hands-on learning",
      "Engineered 8+ production-ready web applications, covering comprehensive front-end to backend integration",
      "Advanced React skills including hooks, lifecycle management, performance optimization, and modern patterns",
      "Designed scalable REST APIs using Node.js and Express.js with seamless MongoDB integration",
      "Implemented robust authentication systems using JWT, OAuth, and encrypted password storage with security best practices",
      "Collaborated in Agile teams using Git workflows, participating in code review sessions and pair programming",
      "Handled deployments on AWS and Vercel, managing CI/CD pipelines and environment variables for production environments"
    ]
  },
  {
    company: "Hajee A. P. Bava & Co. (HAPBCO)",
    title: "Industrial Technician",
    range: "March 2022 — November 2023",
    url: "https://hapbco.co",
    description: [
      "Installed and maintained complex industrial machinery, ensuring timely project completion and quality standards",
      "Coordinated with engineering teams to meet critical project milestones and maintain high-quality deliverables",
      "Troubleshot technical issues efficiently, improving system uptime and operational reliability",
      "Enforced strict adherence to safety protocols in demanding industrial environments",
      "Developed strong problem-solving skills and attention to detail in high-pressure situations"
    ]
  },
  {
    company: "KPA Crusher Private Limited",
    title: "Accountant",
    range: "February 2020 — February 2022",
    url: "",
    description: [
      "Managed daily bookkeeping operations, invoice processing, and comprehensive expense reconciliation",
      "Generated detailed audit reports and ensured compliance with regulatory standards and financial protocols",
      "Improved accuracy and timeliness of financial record maintenance through systematic processes",
      "Coordinated with operations teams to align financial tracking with business objectives",
      "Developed analytical skills and attention to detail that later proved valuable in programming and debugging"
    ]
  }
];

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsDesktop(mediaQuery.matches);

    const handleMediaChange = (e) => setIsDesktop(e.matches);
    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  const updateMousePosition = useCallback((e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  const updateCursorType = useCallback((e) => {
    const target = e.target;
    const isClickable = target.matches('a, button, [role="button"], input, textarea, select, [onclick], .cursor-pointer') ||
                       target.closest('a, button, [role="button"], input, textarea, select, [onclick], .cursor-pointer');
    setIsPointer(isClickable);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseEnter = () => {
      setIsVisible(true);
      document.body.style.cursor = 'none';
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      document.body.style.cursor = 'auto';
    };

    document.addEventListener('mousemove', updateMousePosition, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', updateCursorType, { passive: true });

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', updateCursorType);
      document.body.style.cursor = 'auto';
    };
  }, [isDesktop, updateMousePosition, updateCursorType]);

  if (!isDesktop || !isVisible) return null;

  return (
    <>
      <div 
        className="fixed w-3 h-3 bg-violet-600 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 6,
          top: mousePosition.y - 6,
          transform: `scale(${isPointer ? 0.5 : 1})`,
        }}
      />
      <div 
        className="fixed w-10 h-10 border-2 border-violet-600/40 rounded-full pointer-events-none z-[9998] transition-transform duration-150 ease-out"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          transform: `scale(${isPointer ? 1.2 : 1})`,
        }}
      />
    </>
  );
};

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsDesktop(mediaQuery.matches);

    const handleMediaChange = (e) => setIsDesktop(e.matches);
    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  }, []);

  const fadeInUp = useMemo(() => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeOut' }
  }), []);

  const staggerContainer = useMemo(() => ({
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }), []);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans selection:bg-violet-500 selection:text-white" style={{ cursor: isDesktop ? 'none' : 'auto' }}>
      <CustomCursor />
      <div className="fixed inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#7C3AED_2px,transparent_2px)] bg-[size:24px_24px]" />
      </div>

      <header className={`fixed top-0 z-50 w-full px-4 py-4 lg:px-12 transition-all duration-300 ${scrollY > 100 ? 'bg-gray-900/90 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div {...fadeInUp}>
            <a href="/" className="text-xl font-extrabold text-violet-500 hover:text-violet-400 transition-colors">Nashid</a>
          </motion.div>
          <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="hidden lg:flex items-center gap-8">
            {[{ id: 'about', label: 'About' }, { id: 'experience', label: 'Experience' }, { id: 'work', label: 'Work' }, { id: 'contact', label: 'Contact' }].map(({ id, label }) => (
              <button key={id} onClick={() => scrollToSection(id)} className="text-sm font-medium text-gray-300 hover:text-violet-400 transition-colors">
                {label}
              </button>
            ))}
            <a href="/Nashid_Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm font-medium text-white bg-violet-600 rounded-lg hover:bg-violet-700 transition-colors">
              Resume
            </a>
          </motion.div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-violet-500" aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} transition={{ type: 'tween', duration: 0.3 }} className="fixed top-0 right-0 bottom-0 z-50 w-3/4 bg-gray-800 shadow-xl lg:hidden">
              <div className="flex flex-col p-6">
                <button onClick={() => setIsMenuOpen(false)} className="self-end p-2 text-violet-500 mb-6">
                  <X size={24} />
                </button>
                <nav className="flex flex-col gap-6 text-lg font-medium">
                  {[{ id: 'about', label: 'About' }, { id: 'experience', label: 'Experience' }, { id: 'work', label: 'Work' }, { id: 'contact', label: 'Contact' }].map(({ id, label }) => (
                    <button key={id} onClick={() => scrollToSection(id)} className="text-left text-gray-300 hover:text-violet-400">
                      {label}
                    </button>
                  ))}
                  <a href="/Nashid_Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-white bg-violet-600 rounded-lg hover:bg-violet-700">Resume</a>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="fixed top-1/2 right-4 transform -translate-y-1/2 hidden lg:flex flex-col gap-4 z-10">
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
          {[{ href: "https://github.com/Nashid-k", icon: Github }, { href: "https://linkedin.com/in/nashid-k-080909273/", icon: Linkedin }, { href: "mailto:nashidk1999@gmail.com", icon: Mail }].map(({ href, icon: Icon }, index) => (
            <a key={index} href={href} target={href.startsWith('mailto:') ? undefined : "_blank"} rel={href.startsWith('mailto:') ? undefined : "noopener noreferrer"} className="text-gray-400 hover:text-violet-400 hover:scale-110 transition-all duration-300">
              <Icon size={24} />
            </a>
          ))}
        </motion.div>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <section className="min-h-screen flex items-center justify-center py-16">
          <motion.div {...staggerContainer} className="text-center max-w-3xl">
            <motion.p {...fadeInUp} className="text-base text-violet-400 mb-4">Hello, I'm</motion.p>
            <motion.h1 {...fadeInUp} transition={{ delay: 0.1 }} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight">Nashid</motion.h1>
            <motion.h2 {...fadeInUp} transition={{ delay: 0.2 }} className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-300 mb-6">Building Innovative Web Solutions</motion.h2>
            <motion.p {...fadeInUp} transition={{ delay: 0.3 }} className="text-base sm:text-lg text-gray-400 mb-8 leading-relaxed">
              I'm a full-stack developer dedicated to crafting accessible, high-performance web applications using the MERN stack and modern tools.
            </motion.p>
            <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
              <button onClick={() => scrollToSection('work')} className="px-6 py-3 text-white bg-violet-600 rounded-lg hover:bg-violet-700 transition-colors text-sm font-medium">Discover My Projects</button>
            </motion.div>
          </motion.div>
        </section>

        <section id="about" className="py-16">
          <motion.div {...staggerContainer}>
            <motion.h2 {...fadeInUp} className="text-3xl sm:text-4xl font-extrabold text-white mb-10 text-center">About Me</motion.h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="relative h-80 lg:h-[32rem] rounded-2xl overflow-hidden shadow-xl">
                <img src="/profile.jpg" alt="Nashid" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                <div className="absolute inset-0 bg-violet-600/20 hover:bg-transparent transition-colors duration-300"></div>
              </motion.div>
              <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="space-y-5">
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Hey there! I'm Nashid, passionate about creating web solutions that make a difference. My journey from operations and accounting to development gives me a unique perspective on building user-centric applications.
                </p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Overcoming challenges like Bell's Palsy has honed my resilience and problem-solving skills, pushing me to create inclusive, accessible digital experiences.
                </p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  I specialize in building everything from e-commerce platforms to streaming services, always prioritizing clean code and exceptional user experiences.
                </p>
                <p className="text-gray-300 font-medium text-sm sm:text-base">My Tech Stack:</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-gray-400">
                  {["JavaScript (ES6+)", "TypeScript", "React", "Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "AWS (EC2)", "Git & GitHub", "Tailwind CSS", "Bootstrap"].map((tech) => (
                    <div key={tech} className="flex items-center"><span className="text-violet-400 mr-2">•</span>{tech}</div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section id="experience" className="py-16">
          <motion.div {...staggerContainer}>
            <motion.h2 {...fadeInUp} className="text-3xl sm:text-4xl font-extrabold text-white mb-10 text-center">My Experience</motion.h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              {experiences.map((exp, index) => (
                <motion.div key={index} {...fadeInUp} transition={{ delay: index * 0.1 }} className="bg-gray-800/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {exp.title} {exp.company && <span>@ {exp.url ? <a href={exp.url} target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">{exp.company}</a> : exp.company}</span>}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">{exp.range}</p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-300">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex"><span className="text-violet-400 mr-2">•</span>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="work" className="py-16">
          <motion.div {...staggerContainer}>
            <motion.h2 {...fadeInUp} className="text-3xl sm:text-4xl font-extrabold text-white mb-10 text-center">Featured Projects</motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div key={project.id} {...fadeInUp} transition={{ delay: index * 0.1 }} className="bg-gray-800/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-violet-400">{project.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white">{project.title}</h3>
                      <p className="text-xs text-gray-400">Featured Project</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 text-xs text-violet-400 bg-violet-600/20 rounded-full">{tech}</span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-400"><Github size={20} /></a>
                    {project.external && <a href={project.external} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-400"><ExternalLink size={20} /></a>}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="py-16">
          <motion.div {...staggerContainer}>
            <motion.h2 {...fadeInUp} className="text-3xl sm:text-4xl font-extrabold text-white mb-10 text-center">Other Projects</motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div key={index} {...fadeInUp} transition={{ delay: index * 0.1 }} className="bg-gray-800/50 p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-3">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-violet-400"><path d="M22 16.74l-7.1-4.73 7.1-4.74V16.74zm-9.02-4.74L2 7.26v9.48L12.98 12z" fill="currentColor"/></svg>
                    <div className="flex gap-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-400"><Github size={18} /></a>
                      {project.external && <a href={project.external} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-400"><ExternalLink size={18} /></a>}
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-xs text-gray-300 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 text-xs text-gray-400">
                    {project.tech.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="text-center mt-8">
              <a href="https://github.com/Nashid-k" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline text-sm">View All Projects</a>
            </motion.div>
          </motion.div>
        </section>

        <section id="contact" className="py-16 text-center">
          <motion.div {...staggerContainer}>
            <motion.p {...fadeInUp} className="text-base text-violet-400 mb-4">Let's Talk</motion.p>
            <motion.h2 {...fadeInUp} transition={{ delay: 0.1 }} className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Get In Touch</motion.h2>
            <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="max-w-xl mx-auto text-base text-gray-300 mb-8">
              I'm always open to new opportunities, questions, or a quick chat. Reach out, and I'll respond as soon as I can!
            </motion.p>
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <a href="mailto:nashidk1999@gmail.com" className="px-6 py-3 text-white bg-violet-600 rounded-lg hover:bg-violet-700 transition-colors text-sm font-medium">Say Hello</a>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <footer className="py-8 px-4 sm:px-6 lg:px-12 text-center">
        <motion.div {...fadeInUp}>
          <div className="lg:hidden flex justify-center gap-6 mb-6">
            {[{ href: "https://github.com/Nashid-k", icon: Github }, { href: "https://linkedin.com/in/nashid-k", icon: Linkedin }, { href: "mailto:nashidk1999@gmail.com", icon: Mail }].map(({ href, icon: Icon }, index) => (
              <a key={index} href={href} target={href.startsWith('mailto:') ? undefined : "_blank"} rel={href.startsWith('mailto:') ? undefined : "noopener noreferrer"} className="text-gray-400 hover:text-violet-400">
                <Icon size={24} />
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-400">Built with ❤️ using guidance from Claude AI</p>
          <p className="text-xs text-gray-500 mt-2">Designed & Built by Nashid K</p>
        </motion.div>
      </footer>
    </div>
  );
}
