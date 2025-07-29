import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Mail,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const Hero = ({ onSectionChange }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    onSectionChange("home");
  }, [onSectionChange]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/anjali-kumari94",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/anjali-kumari-b91299251/",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <section
  id="home"
  className="pt-20 md:pt-24 lg:pt-28 min-h-screen flex items-center justify-center relative overflow-hidden"
>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900/50 via-dark-800/30 to-dark-900/50" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="gradient-text">Hello, I'm</span>
              <br />
              <span className="text-white">Anjali Kumari</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-4">
              Full Stack Developer
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Crafting digital experiences with modern technologies and creative
              solutions. Specializing in React, Node.js, and cloud architecture.
            </p>
          </motion.div>

          {/* Animated typing effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mb-12"
          >
            <div className="inline-flex items-center space-x-2 text-lg text-primary-400">
              <span>I build</span>
              <div className="relative">
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0"
                >
                  Web Applications
                </motion.span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="absolute inset-0"
                >
                  Mobile Apps
                </motion.span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                  className="absolute inset-0"
                >
                  3D Experiences
                </motion.span>
              </div>
            </div>
          </motion.div>

          {/* Call to action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold flex items-center space-x-2 hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
            >
              <span>View My Work</span>
              <ArrowDown className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex items-center justify-center space-x-6 mb-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                className="p-3 rounded-full bg-white/10 hover:bg-primary-500/20 border border-white/20 hover:border-primary-500/50 transition-all duration-300"
              >
                <social.icon className="w-6 h-6 text-gray-300 hover:text-primary-400" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={scrollToAbout}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-2 rounded-full bg-white/10 hover:bg-primary-500/20 border border-white/20 hover:border-primary-500/50 transition-all duration-300"
            >
              <ArrowDown className="w-6 h-6 text-gray-300 hover:text-primary-400" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
