
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, Github, Linkedin, Mail, FileText, Menu, X,
  ShoppingCart, Layers, CloudRain, ListChecks, Cloud, Type, Code, Clock
} from "lucide-react";

const projects = [
  {
    id: "featured-project-1",
    title: "Fashion Full-Stack E-commerce Platform",
    description: "A complete e-commerce platform with Google login, email OTP authentication, dynamic cart system, Razorpay payment integration, admin dashboard for product and order management, and secure user sessions. Built with Node.js, Express, and MongoDB for backend, and EJS for templating. Hosted on AWS.",
    tech: ["Node.js", "Express", "MongoDB", "EJS", "Razorpay", "AWS"],
    github: "https://github.com/Nashid-k/First_Project_Ecommerce",
    external: null,
    icon: <ShoppingCart size={40} />
  },
  {
    id: "featured-project-2", 
    title: "OLX Clone",
    description: "A marketplace clone featuring product listings, advanced search functionality, and user interactions. Implemented with modern React patterns and Firebase integration.",
    tech: ["React", "Tailwind CSS", "Firebase"],
    github: "https://github.com/Nashid-k/olx-clone_updated",
    external: "https://olx-demo-delta.vercel.app/home",
    icon: <Layers size={40} />
  },
  {
    id: "featured-project-3",
    title: "Netflix Full-Stack Clone",
    description: "A full-stack streaming platform featuring movie browsing, detailed cast pages with movie listings, seamless search/filter for both movies and actors, and global state management using Zustand. Built with React frontend, Node.js/Express backend, and MongoDB for storage. Integrated with TMDB API for real-time content.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Zustand", "TMDB API", "CSS3"],
    github: "https://github.com/Nashid-k/netflix-clone",
    external: null,
    icon: <Code size={40} />
  }
];



const otherProjects = [
  {
    title: "Advanced Todo Application",
    description: "Feature-rich task management app with session storage persistence, category organization, and clean UI design.",
    tech: ["React", "Session Storage", "Tailwind CSS"],
    github: "https://github.com/Nashid-k/TODO_react",
    external: "https://todo-react-6qtxru3ph-nashids-projects-e27665ac.vercel.app/"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with dynamic data visualization, geolocation support, and OpenWeather API integration.",
    tech: ["React", "OpenWeather API", "Geolocation"],
    github: "https://github.com/Nashid-k/weather_react",
    external: null
  },
  {
    title: "TypeScript CRUD App",
    description: "Clean implementation of CRUD operations with React and TypeScript for type-safe development and better code maintainability.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Nashid-k/CRUD_App",
    external: null
  },
  {
    title: "Digital Clock with Alarm",
    description: "Feature-rich digital clock with real-time updates, theme toggle, and advanced alarm system using Web Audio API.",
    tech: ["HTML5", "CSS3", "JavaScript", "Web Audio API"],
    github: "https://github.com/Nashid-k/Digital_Clock",
    external: "https://nashid-k.github.io/Digital_Clock/"
  },
  {
    title: "Job Listing Application",
    description: "Modern job listing platform with React frontend and Node.js backend, featuring clean design and responsive layout.",
    tech: ["React", "Node.js", "Express", "Tailwind CSS"],
    github: "https://github.com/Nashid-k/JobList_Application",
    external: null
  },
  {
    title: "Calculator Application",
    description: "Responsive calculator with clean design and real-time input/output display, built with vanilla JavaScript.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Nashid-k/Calculator",
    external: "https://nashid-k.github.io/Calculator/"
  },
  // New projects added here:
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
    company: "Self‑Taught Journey",
    title: "Full Stack Developer",
    range: "2023 — Present",
    url: "",
    description: [
      "Built 9+ full‑stack web applications using MERN stack with focus on user experience and performance",
      "Developed e‑commerce platforms with payment integration, user authentication, and admin dashboards",
      "Mastered modern React patterns, state management (Redux, Zustand), and TypeScript for type‑safe development",
      "Overcame significant health challenges (Bell's Palsy) and rebuilt technical skills demonstrating resilience and adaptability"
    ]
  },
  {
    company: "Hajee A. P. Bava & Company (HAPBCO)",
    title: "Millwright Fitter",
    range: "2022 — 2023",
    url: "https://hapbco.co",
    description: [
      "Worked on erection and assembly of heavy industrial machinery—boilers, conveyors, pipelines and structural steel—across large‑scale projects in cement, petrochemical, steel, and power plant sectors",
      "Performed precision alignments, mechanical installations, and conveyor fabrication following strict quality and safety protocols",
      "Collaborated with engineering and project management teams to ensure timely commissioning of major plant equipment"
    ]
  },
  {
    company: "KPA Crusher Private Limited (Beta Crusher)",
    title: "Accountant",
    range: "2020 — 2022",
    url: "",
    description: [
      "Managed day‑to‑day financial operations including bookkeeping, ledgers, and invoice processing for stone crushing operations at Pulikkal, Malappuram",
      "Prepared periodic financial statements, expense reconciliations and supported audit documentation to ensure transparency and compliance",
      "Coordinated with operations team to align finances with production schedules, cost tracking and budgeting"
    ]
  }
];

// Enhanced Custom Cursor Component
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if device supports hover (desktop/laptop)
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsDesktop(mediaQuery.matches);

    const handleMediaChange = (e) => {
      setIsDesktop(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    let rafId;
    
    const updateMousePosition = (e) => {
      // Use requestAnimationFrame for smoother animations
      rafId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
      document.body.style.cursor = 'none';
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      document.body.style.cursor = 'auto';
    };

    const updateCursorType = (e) => {
      const target = e.target;
      const isClickable = target.matches('a, button, [role="button"], input, textarea, select, [onclick], .cursor-pointer') ||
                         target.closest('a, button, [role="button"], input, textarea, select, [onclick], .cursor-pointer');
      setIsPointer(isClickable);
    };

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', updateCursorType);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', updateCursorType);
      document.body.style.cursor = 'auto';
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [isDesktop]);

  if (!isDesktop || !isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed w-3 h-3 bg-teal-400 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: mousePosition.x - 6,
          top: mousePosition.y - 6,
        }}
        animate={{
          scale: isPointer ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      />
      
      {/* Cursor ring */}
      <motion.div
        className="fixed w-8 h-8 border-2 border-teal-400/60 rounded-full pointer-events-none z-[9998]"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
        animate={{
          scale: isPointer ? 1.8 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.8
        }}
      />
      
      {/* Large glow effect */}
      <motion.div
        className="fixed w-24 h-24 rounded-full pointer-events-none z-[9997]"
        style={{
          left: mousePosition.x - 48,
          top: mousePosition.y - 48,
          background: 'radial-gradient(circle, rgba(45, 212, 191, 0.15) 0%, rgba(45, 212, 191, 0.08) 40%, transparent 70%)',
        }}
        animate={{
          scale: isPointer ? 1.3 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 25,
          mass: 1.2
        }}
      />

      {/* Extra large ambient glow */}
      <motion.div
        className="fixed w-40 h-40 rounded-full pointer-events-none z-[9996]"
        style={{
          left: mousePosition.x - 80,
          top: mousePosition.y - 80,
          background: 'radial-gradient(circle, rgba(45, 212, 191, 0.08) 0%, rgba(45, 212, 191, 0.03) 30%, transparent 60%)',
        }}
        animate={{
          scale: isPointer ? 1.2 : 1,
          opacity: isVisible ? 0.8 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 30,
          mass: 1.5
        }}
      />

      {/* Click ripple effect */}
      <AnimatePresence>
        {isPointer && (
          <motion.div
            className="fixed w-16 h-16 border-2 border-teal-400/40 rounded-full pointer-events-none z-[9995]"
            style={{
              left: mousePosition.x - 32,
              top: mousePosition.y - 32,
            }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ 
              scale: 1.2, 
              opacity: [0, 0.6, 0],
            }}
            exit={{ scale: 1.5, opacity: 0 }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatDelay: 0.5,
              ease: "easeOut"
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if device supports hover (desktop/laptop)
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsDesktop(mediaQuery.matches);

    const handleMediaChange = (e) => {
      setIsDesktop(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div 
      className="min-h-screen bg-slate-900 text-slate-100 selection:bg-teal-300 selection:text-teal-900" 
      style={{ cursor: isDesktop ? 'none' : 'auto' }}
    >
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Background Pattern */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full px-6 py-6 lg:px-12">
        <nav className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="/"
              className="text-lg font-mono text-teal-400 hover:text-teal-300 transition-colors cursor-pointer"
            >
              Nashid
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden lg:flex items-center space-x-8"
          >
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-mono text-slate-300 hover:text-teal-300 transition-colors cursor-pointer"
            >
              <span className="text-teal-400">01.</span> About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-sm font-mono text-slate-300 hover:text-teal-300 transition-colors cursor-pointer"
            >
              <span className="text-teal-400">02.</span> Experience
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="text-sm font-mono text-slate-300 hover:text-teal-300 transition-colors cursor-pointer"
            >
              <span className="text-teal-400">03.</span> Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-mono text-slate-300 hover:text-teal-300 transition-colors cursor-pointer"
            >
              <span className="text-teal-400">04.</span> Contact
            </button>
            <a
              href="/Nashid_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 text-sm font-mono text-teal-400 border border-teal-400 rounded hover:bg-teal-400/10 transition-colors cursor-pointer"
            >
              Resume
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-teal-400 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-2/3 bg-slate-800 lg:hidden"
            >
              <div className="flex flex-col h-full p-6">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="self-end p-2 text-teal-400 mb-8 cursor-pointer"
                >
                  <X size={24} />
                </button>
                <nav className="flex flex-col space-y-8 font-mono text-lg">
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-left text-slate-300 hover:text-teal-300 cursor-pointer"
                  >
                    <span className="text-teal-400">01.</span> About
                  </button>
                  <button
                    onClick={() => scrollToSection('experience')}
                    className="text-left text-slate-300 hover:text-teal-300 cursor-pointer"
                  >
                    <span className="text-teal-400">02.</span> Experience
                  </button>
                  <button
                    onClick={() => scrollToSection('work')}
                    className="text-left text-slate-300 hover:text-teal-300 cursor-pointer"
                  >
                    <span className="text-teal-400">03.</span> Work
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-left text-slate-300 hover:text-teal-300 cursor-pointer"
                  >
                    <span className="text-teal-400">04.</span> Contact
                  </button>
                  <a
                    href="/Nashid_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-fit px-4 py-2 text-teal-400 border border-teal-400 rounded hover:bg-teal-400/10 cursor-pointer"
                  >
                    Resume
                  </a>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Social Links */}
      <div className="fixed bottom-0 left-6 hidden lg:block z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:bg-slate-400 after:mt-6"
        >
          <a
            href="https://github.com/Nashid-k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-teal-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/nashid-k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-teal-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:nashidk1999@gmail.com"
            className="text-slate-400 hover:text-teal-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </div>

      {/* Email */}
      <div className="fixed bottom-0 right-6 hidden lg:block z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-col items-center after:content-[''] after:block after:w-px after:h-24 after:bg-slate-400 after:mt-6"
        >
          <a
            href="mailto:nashidk1999@gmail.com"
            className="font-mono text-sm text-slate-400 hover:text-teal-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            style={{ writingMode: 'vertical-rl' }}
          >
            nashidk1999@gmail.com
          </a>
        </motion.div>
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-mono text-teal-400 mb-5 text-base lg:text-lg"
            >
              Hi, my name is
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold text-slate-200 mb-4"
            >
              Nashid.
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl lg:text-6xl font-bold text-slate-400 mb-6"
            >
              I build things for the web.
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="max-w-2xl text-lg text-slate-400 mb-12 leading-relaxed"
            >
              I'm a full-stack developer specializing in building exceptional digital experiences. 
              Currently, I'm focused on creating accessible, user-centered products using modern web technologies 
              and the MERN stack.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <button
                onClick={() => scrollToSection('work')}
                className="px-7 py-4 text-teal-400 border border-teal-400 rounded font-mono hover:bg-teal-400/10 transition-colors cursor-pointer"
              >
                Check out my work!
              </button>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="flex items-center text-2xl lg:text-3xl font-bold text-slate-200 mb-8">
              <span className="font-mono text-base lg:text-lg text-teal-400 mr-4">01.</span>
              About Me
              <div className="ml-4 h-px bg-slate-600 flex-1 max-w-xs"></div>
            </h2>

            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              <div className="lg:col-span-2 space-y-4">
                <p className="text-slate-400">
                  Hello! I'm Nashid, and I enjoy creating things that live on the internet. 
                  My journey into web development started from a non-technical background in operations 
                  and accounting, which gives me a unique perspective on building practical, business-oriented solutions.
                </p>

                <p className="text-slate-400">
                  I'm a self-taught developer who has overcome significant challenges, including a health setback 
                  with Bell's Palsy, which taught me resilience and the importance of perseverance. 
                  This experience strengthened my problem-solving abilities and adaptability.
                </p>

                <p className="text-slate-400">
                  Today, I focus on building accessible, inclusive products and digital experiences 
                  using modern technologies. I've built everything from e-commerce platforms to 
                  streaming service clones, always with an emphasis on user experience and clean code.
                </p>

                <p className="text-slate-400 mb-6">
                  Here are a few technologies I've been working with recently:
                </p>

                <div className="grid grid-cols-2 gap-2 font-mono text-sm text-slate-400">
                  <div className="flex items-center">
                    <span className="text-teal-400 mr-2">▹</span>
                    JavaScript (ES6+)
                  </div>
                  <div className="flex items-center">
                    <span className="text-teal-400 mr-2">▹</span>
                    TypeScript
                  </div>
                  <div className="flex items-center">
                    <span className="text-teal-400 mr-2">▹</span>
                    React
                  </div>
                  <div className="flex items-center">
                    <span className="text-teal-400 mr-2">▹</span>
                    Node.js
                  </div>
                  <div className="flex items-center">
                    <span className="text-teal-400 mr-2">▹</span>
                    MongoDB
                  </div>
                  <div className="flex items-center">
                    <span className="text-teal-400 mr-2">▹</span>
                    PostgreSQL
                  </div>
                </div>
                
              </div>

              <div className="relative">
                <div className="relative max-w-xs mx-auto lg:mx-0">
                  <div className="bg-teal-400 rounded absolute -inset-4 -rotate-6"></div>
                  <div className="relative bg-slate-800 rounded overflow-hidden">
                    <img
                      src="/profile.jpg"
                      alt="Nashid"
                      className="w-full h-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-teal-400/20 hover:bg-transparent transition-colors duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="flex items-center text-2xl lg:text-3xl font-bold text-slate-200 mb-12">
              <span className="font-mono text-base lg:text-lg text-teal-400 mr-4">02.</span>
              Where I've Learned
              <div className="ml-4 h-px bg-slate-600 flex-1 max-w-xs"></div>
            </h2>

            <div className="max-w-3xl">
              {experiences.map((exp, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-xl font-semibold text-slate-200 mb-2">
                    <span>{exp.title}</span>
                    {exp.company && (
                      <>
                        <span className="text-teal-400"> @ </span>
                        {exp.url ? (
                          <a
                            href={exp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-400 hover:underline cursor-pointer"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          <span className="text-teal-400">{exp.company}</span>
                        )}
                      </>
                    )}
                  </h3>
                  
                  <p className="font-mono text-sm text-slate-400 mb-6">{exp.range}</p>
                  
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex text-slate-400">
                        <span className="text-teal-400 mr-3 flex-shrink-0">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Featured Projects */}
        <section id="work" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="flex items-center text-2xl lg:text-3xl font-bold text-slate-200 mb-16">
              <span className="font-mono text-base lg:text-lg text-teal-400 mr-4">03.</span>
              Some Things I've Built
              <div className="ml-4 h-px bg-slate-600 flex-1 max-w-xs"></div>
            </h2>

            <div className="space-y-16">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 hover:bg-slate-800/70 transition-all duration-300`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                    {/* Icon Section */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-slate-700 rounded-lg flex items-center justify-center text-teal-400 group-hover:bg-slate-600 transition-colors duration-300">
                        {project.icon}
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                        <div>
                          <p className="font-mono text-teal-400 text-sm mb-2">Featured Project</p>
                          <h3 className="text-2xl font-semibold text-slate-200 mb-3">{project.title}</h3>
                        </div>
                        
                        <div className="flex gap-4 flex-shrink-0">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-teal-400 transition-colors"
                          >
                            <Github size={20} />
                          </a>
                          {project.external && (
                            <a
                              href={project.external}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-400 hover:text-teal-400 transition-colors"
                            >
                              <ExternalLink size={20} />
                            </a>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>
                      
                      <ul className="flex flex-wrap gap-3 font-mono text-sm text-slate-400">
                        {project.tech.map((tech, i) => (
                          <li key={i} className="bg-slate-700/50 px-3 py-1 rounded">{tech}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Other Projects */}
        <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-200 mb-4">Other Noteworthy Projects</h2>
            <a
              href="https://github.com/Nashid-k"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 font-mono hover:underline"
            >
              view the archive
            </a>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 p-6 rounded hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="text-teal-400">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.74l-7.1-4.73 7.1-4.74V16.74zm-9.02-4.74L2 7.26v9.48L12.98 12z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-teal-400 transition-colors"
                    >
                      <Github size={18} />
                    </a>
                    {project.external && (
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-teal-400 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-slate-200 mb-3">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                
                <ul className="flex flex-wrap gap-2 font-mono text-xs text-slate-400">
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 lg:px-12 max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-teal-400 mb-4">04. What's Next?</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-200 mb-6">Get In Touch</h2>
            <p className="text-slate-400 mb-12 text-lg leading-relaxed">
              Although I'm not currently looking for any new opportunities, my inbox is always open. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a
              href="mailto:nashidk1999@gmail.com"
              className="inline-block px-7 py-4 text-teal-400 border border-teal-400 rounded font-mono hover:bg-teal-400/10 transition-colors"
            >
              Say Hello
            </a>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="pb-12 px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="lg:hidden flex justify-center space-x-6 mb-6">
            <a
              href="https://github.com/Nashid-k"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-teal-300 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/nashid-k"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-teal-300 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:nashidk1999@gmail.com"
              className="text-slate-400 hover:text-teal-300 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <p className="text-slate-400 font-mono text-sm">
            Built with ❤️ using guidance from Claude AI
          </p>

          <p className="text-slate-500 font-mono text-xs mt-2">
            Designed & Built by Nashid K
          </p>

        </motion.div>
      </footer>
    </div>
  );
}