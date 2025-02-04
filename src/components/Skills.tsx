import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-8 shadow-sm"
        >
          <p className="text-lg text-center text-gray-700 italic">
            Maybe I'll add some content here in the future, but with ChatGPT... 
            I kinda have all technical skills at this point. 😎
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;