import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Eye,
  Code,
  Database,
  Cloud,
  Palette,
} from "lucide-react";
import ecommerceLogo from "../assets/ecommerce logo.png";
import mernChatLogo from "../assets/mern-chatlogo.png";
import taskManagerLogo from "../assets/taskmanager logo.png";
import cloudDashboardLogo from "../assets/cloud dashboard logo.png";
import gameEngineLogo from "../assets/game enginelogo.png";
import portfolioLogo from "../assets/3d-portfolio.png";
import blogLogo from "../assets/fullstacl-blog logo.png";

const Projects = ({ onSectionChange }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    onSectionChange("projects");
  }, [onSectionChange]);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "3d", label: "3D Projects" },
    { id: "ai", label: "AI/ML" },
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      image: ecommerceLogo,
      description:
        "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      liveUrl: "https://localfinds.netlify.app/",
      githubUrl: "https://github.com/anjali-kumari94",
      features: [
        "User Authentication",
        "Payment Processing",
        "Admin Dashboard",
        "Real-time Updates",
      ],
      icon: Code,
    },
    {
      id: 2,
      title: "3D Portfolio Website",
      category: "3d",
      image: portfolioLogo,
      description:
        "Interactive 3D portfolio website built with Three.js and React. Features dynamic 3D scenes, particle effects, and smooth animations.",
      technologies: ["Three.js", "React", "WebGL", "GSAP", "Vite"],
      liveUrl: "https://portfolio-anj.netlify.app/",
      githubUrl: "https://github.com/anjali-kumari94",
      features: [
        "3D Scenes",
        "Particle Effects",
        "Interactive Elements",
        "Responsive Design",
      ],
      icon: Palette,
    },
    {
      id: 3,
      title: "AI Chat Application",
      category: "ai",
      image: mernChatLogo,
      description:
        "Intelligent chat application powered by machine learning. Features natural language processing and real-time conversation capabilities.",
      technologies: [
        "Node.js",
        "express",
        "React",
        "javascript",
        "CSS",
        "Mongodb",
      ],
      liveUrl: "https://merncha.netlify.app/",
      githubUrl: "https://github.com/anjali-kumari94",
      features: [
        "Natural Language Processing",
        "Real-time Chat",
        "Sentiment Analysis",
        "Multi-User Support",
      ],
      icon: Cloud,
    },
    {
      id: 4,
      title: "Mobile Task Manager",
      category: "mobile",
      image: taskManagerLogo,
      description:
        "Cross-platform mobile application for task management with offline capabilities and cloud synchronization.",
      technologies: [
        "React Native",
        "Firebase",
        "Redux",
        "AsyncStorage",
        "Push Notifications",
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/anjali-kumari94",
      features: [
        "Offline Support",
        "Cloud Sync",
        "Push Notifications",
        "Task Categories",
      ],
      icon: Database,
    },
    {
      id: 5,
      title: "Cloud Infrastructure Dashboard",
      category: "web",
      image: cloudDashboardLogo,
      description:
        "Comprehensive dashboard for monitoring and managing cloud infrastructure across multiple providers.",
      technologies: ["Vue.js", "AWS SDK", "Docker", "Kubernetes", "GraphQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/anjali-kumari94",
      features: [
        "Multi-cloud Support",
        "Real-time Monitoring",
        "Resource Management",
        "Cost Analytics",
      ],
      icon: Cloud,
    },
    {
      id: 6,
      title: "3D Game Engine",
      category: "3d",
      image: gameEngineLogo,
      description:
        "Custom 3D game engine built from scratch with WebGL. Supports physics, lighting, and advanced rendering techniques.",
      technologies: [
        "WebGL",
        "JavaScript",
        "Three.js",
        "Cannon.js",
        "Web Workers",
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/anjali-kumari94",
      features: [
        "Physics Engine",
        "Advanced Lighting",
        "Particle Systems",
        "Performance Optimization",
      ],
      icon: Code,
    },
    {
      id: 7,
      title: "Full Stack-Blog Project",
      category: "web",
      image: blogLogo,
      description:
        "A dynamic full stack blog application allowing users to create, edit, and delete posts. Features authentication, rich text editing, and a responsive design. Built with EJS templating, JavaScript, HTML, CSS, and MongoDB for persistent storage.",
      technologies: ["EJS", "JavaScript", "HTML", "CSS", "MongoDB"],
      liveUrl: "https://fullstack-blog-project-flxy.onrender.com/",
      githubUrl: "https://github.com/anjali-kumari94",
      features: [
        "User Authentication",
        "Create/Edit/Delete Posts",
        "Rich Text Editor",
        "Responsive Design",
        "MongoDB Storage",
      ],
      icon: Code,
    },
  ];

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my latest work, featuring web applications, mobile
            apps, and innovative 3D experiences.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-primary-500 text-white shadow-lg shadow-primary-500/25"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-effect rounded-2xl overflow-hidden card-hover cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image or Icon */}
                <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title + " logo"}
                      className="absolute inset-0 w-full h-full object-contain"
                      style={{ background: "transparent", padding: 0 }}
                    />
                  ) : (
                    <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center">
                      <project.icon className="w-8 h-8 text-primary-400" />
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary-500/20 text-primary-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl, "_blank");
                      }}
                      className="flex-1 px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium hover:bg-primary-600 transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Live Demo</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, "_blank");
                      }}
                      className="flex-1 px-4 py-2 border border-primary-500 text-primary-400 rounded-lg text-sm font-medium hover:bg-primary-500 hover:text-white transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="glass-effect rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">
                      {selectedProject.title}
                    </h3>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="space-y-6">
                    <p className="text-gray-300 leading-relaxed">
                      {selectedProject.description}
                    </p>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedProject.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-2 h-2 bg-primary-500 rounded-full" />
                            <span className="text-gray-300 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary-500/20 text-primary-300 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4 pt-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                          window.open(selectedProject.liveUrl, "_blank")
                        }
                        className="flex-1 px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors duration-300 flex items-center justify-center space-x-2"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>View Live</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                          window.open(selectedProject.githubUrl, "_blank")
                        }
                        className="flex-1 px-6 py-3 border border-primary-500 text-primary-400 rounded-lg font-medium hover:bg-primary-500 hover:text-white transition-colors duration-300 flex items-center justify-center space-x-2"
                      >
                        <Github className="w-5 h-5" />
                        <span>View Code</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
