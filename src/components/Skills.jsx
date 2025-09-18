import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Cloud,
  Palette,
  Smartphone,
  Globe,
} from "lucide-react";

const Skills = ({ onSectionChange }) => {
  useEffect(() => {
    onSectionChange("skills");
  }, [onSectionChange]);

  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95, color: "#61DAFB" },
        { name: "JavaScript", level: 90, color: "#F7DF1E" },
        { name: "HTML/CSS", level: 95, color: "#E34F26" },
        { name: "Next.js", level: 85, color: "#000000" },
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 90, color: "#339933" },
        { name: "Python", level: 85, color: "#3776AB" },
        { name: "Express.js", level: 88, color: "#000000" },
        { name: "MongoDB", level: 82, color: "#47A248" },
        { name: "PostgreSQL", level: 80, color: "#336791" },
        { name: "GraphQL", level: 75, color: "#E10098" },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 85, color: "#FF9900" },
        { name: "Docker", level: 80, color: "#2496ED" },
        { name: "Kubernetes", level: 70, color: "#326CE5" },
        { name: "CI/CD", level: 85, color: "#FF6B6B" },
        { name: "Terraform", level: 75, color: "#7B42BC" },
        { name: "Linux", level: 80, color: "#FCC624" },
      ],
    },
    {
      icon: Globe,
      title: "Other Technologies",
       skills: [
        { name: "Git", level: 85, color: "#000000" },
        { name: "Github", level: 90, color: "#990000" },
        { name: "Generative-AI", level: 90, color: "#F7931A" },
        { name: "LLM", level: 90, color: "#FF6B6B" },
        { name: "REST APIs", level: 90, color: "#FF6B6B" },
        { name: "Microservices", level: 80, color: "#FF6B6B" },
      ],
    },
  ];

  const technologies = [
     "React",
    "Node.js",
    "Python",
    "AWS",
    "Docker",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
    "Next.js",
    "Express.js",
    "Kubernetes",
    "Terraform",
    "Git",
    "MySQL",
    "Generative-AI",
  ];

  return (
    <section id="skills" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and the
            technologies I work with daily.
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6 card-hover"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-primary-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <motion.div
                        className="h-2 rounded-full"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-8 gradient-text text-center">
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="skill-badge cursor-pointer"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-primary-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">
              Clean Code
            </h4>
            <p className="text-gray-400 text-sm">
              Writing maintainable, scalable, and well-documented code following
              best practices.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-primary-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">
              Problem Solving
            </h4>
            <p className="text-gray-400 text-sm">
              Analytical thinking and creative solutions for complex technical
              challenges.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cloud className="w-8 h-8 text-primary-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">
              Architecture
            </h4>
            <p className="text-gray-400 text-sm">
              Designing scalable system architectures and cloud-native
              solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
