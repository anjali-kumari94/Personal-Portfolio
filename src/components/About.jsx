import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Mail, Phone, Download } from "lucide-react";

const About = ({ onSectionChange }) => {
  useEffect(() => {
    onSectionChange("about");
  }, [onSectionChange]);

  const personalInfo = [
    { icon: Calendar, label: "Birthday", value: "March 27, 2004" },
    { icon: MapPin, label: "Location", value: "Patna,Bihar,INDIA" },
    { icon: Mail, label: "Email", value: "anjalikumari27032004@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 6201048284" },
  ];

  const experience = [
    {
      year: "2024 - Present",
      title: " Full Stack Developer",
      Project: "Full stack blog",
      description:
        "Development of scalable full stack-blog  web applications using React, Node.js, and cloud technologies.",
    },
    {
      year: "2025",
      title: "Full Stack Developer",
      Project: "Mern-chat-app",
      description:
        "Built and maintained mern-chat web applications, focusing on user experience and performance optimization.",
    },
    {
      year: "2025",
      title: "Frontend Developer",
      Project: "E-commerce, frontend local-Find",
      description:
        "Created responsive and interactive user interfaces using modern JavaScript frameworks and CSS.",
    },
  ];

  const education = [
    {
      year: "2022 - 2025",
      degree: "Bachelor of Computer Application (BCA)",
      school: " Manipal University Jaipur",
      description:
        "Specialized in Software Engineering with focus on web development and database systems.",
    },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate full-stack developer with expertise in modern web
            technologies and cloud architecture. I love creating innovative
            solutions that make a difference.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Personal Information
              </h3>
              <div className="space-y-4">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                About Me
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a dedicated full-stack developer with over 5 years of
                experience in creating innovative digital solutions. My passion
                lies in building scalable applications that solve real-world
                problems while providing exceptional user experiences.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community. I believe in continuous learning and
                staying up-to-date with the latest industry trends.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold flex items-center space-x-2 hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Experience & Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Experience */}
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l-2 border-primary-500/30"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-500 rounded-full" />
                    <div className="mb-2">
                      <span className="text-primary-400 text-sm font-medium">
                        {exp.year}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-primary-300 font-medium mb-2">
                      {exp.company}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l-2 border-primary-500/30"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-500 rounded-full" />
                    <div className="mb-2">
                      <span className="text-primary-400 text-sm font-medium">
                        {edu.year}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-primary-300 font-medium mb-2">
                      {edu.school}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "2+", label: "Years Experience" },
            { number: "5+", label: "Projects Completed" },
            { number: "50+", label: "Leet code questions solved" },
            {
              number: "100%",
              label:
                "Problem solving and researching/learning new technologies",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
