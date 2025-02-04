import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Contact</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <a
            href="mailto:Mwarshowsky71@gmail.com"
            className="flex flex-col items-center p-6 bg-white rounded-xl hover:bg-secondary/50 transition-colors shadow-sm"
          >
            <Mail className="w-6 h-6 mb-4 text-primary" />
            <span className="text-sm text-muted-foreground">Email</span>
            <span className="text-center">Mwarshowsky71@gmail.com</span>
          </a>
          <a
            href="tel:+16109559144"
            className="flex flex-col items-center p-6 bg-white rounded-xl hover:bg-secondary/50 transition-colors shadow-sm"
          >
            <Phone className="w-6 h-6 mb-4 text-primary" />
            <span className="text-sm text-muted-foreground">Phone</span>
            <span>(610) 955-9144</span>
          </a>
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm">
            <MapPin className="w-6 h-6 mb-4 text-primary" />
            <span className="text-sm text-muted-foreground">Location</span>
            <span className="text-center">Philadelphia, PA</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;