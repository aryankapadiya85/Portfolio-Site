import React, { useMemo, useRef } from "react";
import { createRoot } from "react-dom/client";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown, ArrowUpRight, ArrowUp, Github, Linkedin, Mail, ExternalLink,
  Code2, Sparkles, Globe, Database, Smartphone, Bot, Menu, X, Download
} from "lucide-react";
import { Sandpack } from "@codesandbox/sandpack-react";
import "./styles.css";

const projects = [
  {
    title: "SARTE",
    type: "3D Jewellery Experience",
    description: "A premium interactive jewellery storefront concept with immersive 3D visuals and motion.",
    stack: ["React", "Three.js", "R3F", "Framer Motion"],
    accent: "violet",
    image: "/sarte-new.png?v=1",
    inProgress: true
  },
  {
    title: "Online Food Ordering",
    type: "Full-Stack Web App",
    description: "A dynamic platform for browsing menus and placing orders, featuring user authentication, order tracking, and an admin dashboard.",
    stack: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    accent: "cyan",
    image: "/food-new.png",
    link: "https://github.com/aryankapadiya85/Online-Food-Ordering-System"
  },
  {
    title: "QuickChat",
    type: "AI Android Application",
    description: "A Gemini-powered chat application with a polished mobile interface and conversational UI.",
    stack: ["Java", "Android", "Gemini API", "OkHttp"],
    accent: "orange",
    image: "/chat.jpg"
  },
  {
    title: "AI Resume Builder UI",
    type: "Frontend Application",
    description: "A sleek, dimensional web interface for the AI Resume Tailoring Engine. Features an immersive dark mode design and smooth micro-animations.",
    stack: ["React", "Vite", "Framer Motion", "CSS"],
    accent: "violet",
    image: "/resumeai-ui.png",
    link: "https://github.com/aryankapadiya85/Ai-Resume-Builder"
  }
];

const skills = [
  ["React", "Frontend", Code2],
  ["JavaScript", "Frontend", Globe],
  ["Three.js", "3D Web", Sparkles],
  ["HTML & CSS", "Web", Code2],
  ["Python", "Programming", Bot],
  ["REST APIs", "Backend", Database],
  ["Git & GitHub", "Tools", Github],
  ["Responsive UI", "Design", Smartphone]
];


function CodeWindow() {
  return (
    <motion.div
      className="code-window"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div className="code-header">
        <div className="mac-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="code-title">developer.json</div>
      </div>
      <div className="code-body">
        <pre>
          <code>
            <span className="punctuation">{'{'}</span>
            <br />
            {'  '}<span className="variable">"name"</span><span className="punctuation">:</span> <span className="string">"Aryan Kapadiya"</span><span className="punctuation">,</span>
            <br />
            {'  '}<span className="variable">"role"</span><span className="punctuation">:</span> <span className="string">"Web Developer"</span><span className="punctuation">,</span>
            <br />
            {'  '}<span className="variable">"skills"</span><span className="punctuation">:</span> <span className="punctuation">[</span>
            <br />
            {'    '}<span className="string">"React"</span><span className="punctuation">,</span> <span className="string">"JavaScript"</span><span className="punctuation">,</span> <span className="string">"TypeScript"</span><span className="punctuation">,</span>
            <br />
            {'    '}<span className="string">"Node.js"</span><span className="punctuation">,</span> <span className="string">"PHP"</span><span className="punctuation">,</span> <span className="string">"Frontend"</span>
            <br />
            {'  '}<span className="punctuation">]</span><span className="punctuation">,</span>            <br />
            {'  '}<span className="variable">"status"</span><span className="punctuation">:</span> <span className="string">"Available for opportunities"</span><span className="punctuation">,</span>
            <br />
            {'  '}<span className="variable">"passion"</span><span className="punctuation">:</span> <span className="string">"Building premium web experiences"</span>
            <br />
            <span className="punctuation">{'}'}</span>
          </code>
        </pre>
      </div>
    </motion.div>
  );
}

function Magnetic({ children }) {
  const ref = useRef(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      style={{ display: "inline-block" }}
    >
      {children}
    </motion.div>
  );
}

function CustomCursor() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);
  const [isHidden, setIsHidden] = React.useState(false);

  React.useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      const target = e.target;

      if (target.closest && target.closest('.playground-wrapper')) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      if (target.tagName === 'A' || target.tagName === 'BUTTON' || (target.closest && target.closest('a')) || (target.closest && target.closest('button'))) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      animate={{
        x: mousePosition.x - (isHovering ? 20 : 8),
        y: mousePosition.y - (isHovering ? 20 : 8),
        scale: isHovering ? 1.5 : 1,
        opacity: isHidden ? 0 : 1,
        backgroundColor: isHovering ? "transparent" : "var(--c1)",
        border: isHovering ? "1px solid var(--c1)" : "none"
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: isHovering ? 40 : 16,
        height: isHovering ? 40 : 16,
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999
      }}
    />
  );
}

function LinkedinStats() {
  return (
    <div className="social-stats">
      <div className="social-header">
        <Linkedin size={16} /> <span>LinkedIn Network</span>
      </div>
      <div className="social-grid">
        <div className="social-stat">
          <h4>200+</h4>
          <span>Connections</span>
        </div>
        <div className="social-stat">
          <h4>1.2K</h4>
          <span>Followers</span>
        </div>
        <div className="social-stat">
          <h4>10+</h4>
          <span>Endorsements</span>
        </div>
      </div>
    </div>
  );
}

function Timeline() {
  const timelineData = [
    {
      year: "2024 — Present",
      title: "Master of Computer Applications (MCA)",
      company: "University / Institute",
      description: "Focusing on advanced computing, software engineering, and full-stack development."
    },
    {
      year: "2023 — 2024",
      title: "Freelance Web Developer",
      company: "Independent",
      description: "Built responsive websites and web apps for clients using React, JavaScript, and Tailwind CSS."
    },
    {
      year: "2020 — 2023",
      title: "Bachelor of Computer Applications (BCA)",
      company: "University / Institute",
      description: "Graduated with a strong foundation in programming, databases, and computer networks."
    }
  ];

  return (
    <div className="timeline">
      {timelineData.map((item, i) => (
        <motion.div
          className="timeline-item" key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
        >
          <div className="timeline-dot" />
          <div className="timeline-content">
            <span className="timeline-year">{item.year}</span>
            <h3>{item.title}</h3>
            <span className="timeline-company">{item.company}</span>
            <p>{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function LivePlayground() {
  const code = `export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1 style={{ color: '#f97316' }}>Hello, Recruiter!</h1>
      <p>I'm Aryan. Edit this code right now and see it update live.</p>
      <button 
        style={{ 
          background: '#f97316', 
          border: 'none', 
          padding: '10px 20px', 
          color: '#000', 
          cursor: 'pointer',
          fontWeight: 'bold',
          marginTop: 10
        }}
        onClick={() => alert('It works!')}
      >
        Click Me
      </button>
    </div>
  )
}`;

  return (
    <div className="playground-wrapper">
      <Sandpack
        template="react"
        theme="dark"
        options={{
          showNavigator: false,
          showTabs: false,
          editorHeight: 400,
        }}
        files={{
          "/App.js": code
        }}
      />
    </div>
  );
}

function TechMarquee() {
  const techs = [
    "REACT", "TYPESCRIPT", "JAVASCRIPT", "NODE.JS",
    "PHP", "MYSQL", "TAILWIND CSS", "HTML5",
    "CSS3", "FIGMA", "GIT", "NEXT.JS"
  ];

  const marqueeItems = [...techs, ...techs, ...techs, ...techs];

  return (
    <div className="marquee-container">
      <motion.div
        className="marquee-track"
        animate={{ x: [0, "-50%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {marqueeItems.map((tech, i) => (
          <React.Fragment key={i}>
            <span className="marquee-item">{tech}</span>
            <span className="marquee-separator">✦</span>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

function RevealBlock({ children, delay = 0 }) {
  return (
    <span style={{ overflow: "hidden", display: "inline-block", verticalAlign: "bottom", paddingBottom: "5px" }}>
      <motion.span
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1], delay }}
        style={{ display: "inline-block" }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function BlogSection() {
  const blogPosts = [
    {
      title: "How I optimized my 3D React Portfolio",
      date: "Sep 28, 2026",
      tag: "Performance",
      link: "#",
      readTime: "5 min read"
    },
    {
      title: "Understanding React Server Components",
      date: "Aug 15, 2026",
      tag: "React",
      link: "#",
      readTime: "8 min read"
    },
    {
      title: "Building Micro-Animations with Framer Motion",
      date: "Jul 02, 2026",
      tag: "UI/UX",
      link: "#",
      readTime: "4 min read"
    }
  ];

  return (
    <div className="blog-grid">
      {blogPosts.map((post, i) => (
        <motion.a 
          href={post.link} 
          onClick={(e) => { if(post.link === "#") e.preventDefault(); }}
          className="blog-card" 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <div className="blog-meta">
            <span>{post.date}</span>
            <span className="blog-tag">{post.tag}</span>
          </div>
          <h3>{post.title}</h3>
          <div className="blog-footer">
            <span>{post.readTime}</span>
            <ArrowUpRight size={16} />
          </div>
        </motion.a>
      ))}
    </div>
  );
}

function App() {
  const [open, setOpen] = React.useState(false);
  const [showResume, setShowResume] = React.useState(false);

  const nav = ["About", "Skills", "Projects", "Writing", "Contact"];
  const close = () => setOpen(false);

  return (
    <div className="app">
      <CustomCursor />
      <header className="nav">
        <a href="#home" className="brand" onClick={close}>
          <span>AK</span>
          <b>ARYAN<span>.</span></b>
        </a>
        <button className={`hamburger ${open ? 'active' : ''}`} onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          <span />
          <span />
          <span />
        </button>
        <nav className="nav-links">
          {nav.map(item => (
            <Magnetic key={item}><a href={`#${item.toLowerCase()}`} onClick={close}>{item}</a></Magnetic>
          ))}
          <Magnetic><a className="nav-cta" href="#contact" onClick={close}>Let's Talk <ArrowUpRight size={15} /></a></Magnetic>
        </nav>
        <AnimatePresence>
          {open && (
            <motion.nav
              className="mobile-nav"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
            >
              {nav.map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={close}>{item}</a>
              ))}
              <a className="nav-cta" href="#contact" onClick={close}>Let's Talk <ArrowUpRight size={15} /></a>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .7 }}
              className="eyebrow"
            >
              <span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .8, delay: .1 }}
            >
              I build <em>digital</em><br />
              experiences that<br />
              <strong>stand out.</strong>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: .8, delay: .25 }}
              className="hero-text"
            >
              I'm <b>Aryan Kapadiya</b>, a web developer focused on modern interfaces,
              interactive 3D experiences and practical products.
            </motion.p>
            <div className="hero-actions">
              <Magnetic><a href="#projects" className="button primary">Explore my work <ArrowDown size={17} /></a></Magnetic>
              <Magnetic><a href="https://github.com/aryankapadiya85" target="_blank" rel="noreferrer" className="button ghost"><Github size={17} /> GitHub</a></Magnetic>
              <Magnetic><button onClick={() => setShowResume(true)} className="button ghost"><ExternalLink size={17} /> View Resume</button></Magnetic>
              <Magnetic><a href="/Aryan_Kapadiya_Resume_v2%20(1).pdf" download className="button ghost"><Download size={17} /> Download CV</a></Magnetic>
            </div>
            <div className="mini-proof">
              <span>React</span><i>•</i><span>TypeScript</span><i>•</i><span>JavaScript</span><i>•</i><span>Python</span>
            </div>
          </div>
          <div className="hero-visual" style={{ position: 'relative' }}>

            <div className="scene-frame" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 10 }}><CodeWindow /></div>
            <div className="scene-label label-one">01 / CREATIVE WEB</div>
            <div className="scene-label label-two">INTERACTIVE × CODE</div>
          </div>
          <a href="#about" className="scroll-cue"><ArrowDown size={16} /> SCROLL TO EXPLORE</a>
        </section>

        <section id="about" className="section about">
          <div className="section-head">
            <span className="kicker"><RevealBlock>01 — ABOUT</RevealBlock></span>
            <h2><RevealBlock>Developer with a</RevealBlock><br /><span><RevealBlock delay={0.1}>builder's mindset.</RevealBlock></span></h2>
          </div>
          <div className="about-grid">
            <div className="about-lead">
              <p className="big-copy">
                I enjoy turning ideas into <span>fast, useful and memorable web experiences.</span>
              </p>
              <LinkedinStats />
            </div>
            <div className="about-body">
              <p>
                I'm an MCA student building my career in web development. My focus is on
                creating polished frontend experiences with React and JavaScript while
                exploring backend APIs, 3D web and AI-powered products.
              </p>
              <p>
                I learn by building real projects — from 3D storefronts and responsive
                websites to AI applications and automation workflows.
              </p>
              <Magnetic><a href="#contact" className="text-link">Work with me <ArrowUpRight size={17} /></a></Magnetic>
            </div>
          </div>
        </section>

        <section id="experience" className="section experience">
          <div className="section-head row-head">
            <div><span className="kicker"><RevealBlock>02 — JOURNEY</RevealBlock></span><h2><RevealBlock>Experience &</RevealBlock><br /><span><RevealBlock delay={0.1}>Education.</RevealBlock></span></h2></div>
            <p>My academic background and professional timeline.</p>
          </div>
          <Timeline />
        </section>

        <section id="skills" className="section skills">
          <div className="section-head row-head">
            <div><span className="kicker"><RevealBlock>03 — TOOLKIT</RevealBlock></span><h2><RevealBlock>What I</RevealBlock> <span><RevealBlock delay={0.1}>work with.</RevealBlock></span></h2></div>
            <p>Technologies I use to turn concepts into working digital products.</p>
          </div>
          <TechMarquee />
        </section>

        <section id="projects" className="section projects">
          <div className="section-head row-head">
            <div><span className="kicker"><RevealBlock>04 — SELECTED WORK</RevealBlock></span><h2><RevealBlock>Things I've</RevealBlock> <span><RevealBlock delay={0.1}>built.</RevealBlock></span></h2></div>
            <p>Real project concepts combining design, development and emerging technology.</p>
          </div>
          <div className="project-list">
            {projects.map((p, i) => (
              <motion.article
                className={`project-card ${p.accent}`} key={p.title}
                initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: .55, delay: i * .08 }}
                onClick={() => { if(p.link) window.open(p.link, '_blank', 'noreferrer'); }}
                style={{ cursor: p.link ? 'pointer' : 'default' }}
              >
                <div className="project-number">0{i + 1}</div>
                <div className="project-image"><img src={p.image} alt={p.title} /></div>
                <div className="project-main">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <span className="project-type" style={{ marginBottom: 0 }}>{p.type}</span>
                    {p.inProgress && <span className="in-progress-badge">In Progress</span>}
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="tags">{p.stack.map(s => <span key={s}>{s}</span>)}</div>
                </div>
                <Magnetic>
                  {p.link ? (
                    <a href={p.link} target="_blank" rel="noreferrer" className="project-arrow" onClick={(e) => e.stopPropagation()} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <ArrowUpRight size={30} />
                    </a>
                  ) : (
                    <div className="project-arrow"><ArrowUpRight size={30} /></div>
                  )}
                </Magnetic>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="playground" className="section playground">
          <div className="section-head row-head">
            <div><span className="kicker"><RevealBlock>05 — PLAYGROUND</RevealBlock></span><h2><RevealBlock>Live</RevealBlock> <span><RevealBlock delay={0.1}>Code Editor.</RevealBlock></span></h2></div>
            <p>Go ahead and change the code below. See the results instantly.</p>
          </div>
          <LivePlayground />
        </section>

        <section id="writing" className="section writing">
          <div className="section-head row-head">
            <div><span className="kicker"><RevealBlock>06 — WRITING</RevealBlock></span><h2><RevealBlock>What I'm</RevealBlock> <span><RevealBlock delay={0.1}>learning.</RevealBlock></span></h2></div>
            <p>Thoughts on software engineering, UI design, and emerging technologies.</p>
          </div>
          <BlogSection />
        </section>

        <section className="section statement">
          <div className="statement-inner">
            <Sparkles size={30} />
            <h2><RevealBlock>Good websites are not just <i>seen.</i></RevealBlock><br />
              <RevealBlock delay={0.1}>They're <span>experienced.</span></RevealBlock></h2>
          </div>
        </section>

        <section id="contact" className="section contact">
          <span className="kicker"><RevealBlock>07 — CONTACT</RevealBlock></span>
          <h2><RevealBlock>Have an idea?</RevealBlock><br /><span><RevealBlock delay={0.1}>Let's build it.</RevealBlock></span></h2>
          <p>I'm open to web-development opportunities, freelance projects and collaborations.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}>
            <a className="email-link" href="mailto:aryankapadiya2502@gmail.com">
              aryankapadiya2502@gmail.com <ArrowUpRight size={22} />
            </a>
            <a className="email-link" href="tel:+917096980565">
              +91 7096980565 <ArrowUpRight size={22} />
            </a>
          </div>
          <div className="socials">
            <Magnetic><a href="https://github.com/aryankapadiya85" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a></Magnetic>
            <Magnetic><a href="https://www.linkedin.com/in/aryan-kapadiya/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a></Magnetic>
            <Magnetic><button onClick={() => setShowResume(true)}><ExternalLink size={18} /> View Resume</button></Magnetic>
            <Magnetic><a href="/Aryan_Kapadiya_Resume_v2%20(1).pdf" download><Download size={18} /> Download CV</a></Magnetic>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Aryan Kapadiya</span>
        <span>Designed & built with React + Three.js</span>
        <a href="#home"><ArrowUp size={15} /> Back to top</a>
      </footer>

      <AnimatePresence>
        {showResume && (
          <motion.div
            className="resume-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button className="close-resume" onClick={() => setShowResume(false)}><X size={24} /></button>
            <div className="resume-modal-content">
              <iframe src="/Aryan_Kapadiya_Resume_v2%20(1).pdf" title="Resume PDF Viewer" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
