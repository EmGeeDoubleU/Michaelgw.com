import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const skills = [
    "Software Engineer",
    "Entrepreneur",
    "Full Stack Developer",
    "Problem Solver"
  ];

  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-center text-center px-4 py-20 bg-gradient-to-b from-blue-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="inline-block px-3 py-1 text-sm font-medium bg-blue-100/80 text-blue-700 rounded-full hover:bg-blue-200/80 transition-colors"
            >
              {skill}
            </motion.span>
          ))}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Michael Grant Warshowsky
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
          Passionate about learning, tackling hard problems, and building innovative solutions.
          Currently focused on software engineering and entrepreneurship.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            asChild
            className="rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
          >
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2" />
              View GitHub Profile
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;