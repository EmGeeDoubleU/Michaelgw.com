import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-background rounded-xl p-6 shadow-sm"
        >
          <div className="flex items-start gap-4">
            <GraduationCap className="w-6 h-6 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">Drexel University</h3>
              <p className="text-muted-foreground">College of Computing & Informatics</p>
              <p className="text-muted-foreground">Major in Software Engineering</p>
              <p className="mt-2">Class of September 2025</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;