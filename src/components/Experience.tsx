import { motion } from "framer-motion";
import { Calendar, Building2 } from "lucide-react";

const experiences = [
  {
    company: "WithBelay",
    role: "Board Member, Founder",
    period: "March 2024 - Present",
    location: "Philadelphia, PA",
    description: [
      "Stepped down as CEO, promoting the COO to lead the company",
      "Took a position on the company's board to continue providing strategic guidance",
      "Facilitated a smooth leadership transition, ensuring continued company growth and stability"
    ]
  },
  {
    company: "WithBelay",
    role: "CEO, Founder",
    period: "January 2020 - March 2024",
    location: "Philadelphia, PA",
    description: [
      "Raised $6M in funding with initial valuation of $28.5M through effective pitch decks",
      "Negotiated and secured a deal with Lexington National for E&S product paper",
      "Setup the insurance agency and reinsurance captive subsidiaries",
      "Designed and set up options trading desks within the reinsurance captive to hedge risk"
    ]
  },
  {
    company: "CourseDog",
    role: "Software Engineer / Lead Researcher",
    period: "July 2018 - June 2019",
    location: "New York City, NY",
    description: [
      "Co-led the development of the initial algorithm used for academic scheduling using Python",
      "Wrote python scripts for client data integration",
      "Worked on the development of the course management systems functionality"
    ]
  },
  {
    company: "Children's Hospital of Philadelphia",
    role: "Data Analyst (NTP)",
    period: "June 2017 - May 2019",
    location: "Philadelphia, PA",
    description: [
      "Utilized MatLab to analyze large amounts of data",
      "Compiled detailed graphs and descriptions on the data to be used in publications",
      "Successfully interpreted data in order to draw conclusions for managerial action and strategy",
      "Proposed solutions to improve system efficiencies and reduce total expenses",
      "Optimized data collection procedures and generated reports"
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mt-1">
                    <Building2 className="w-4 h-4" />
                    <span>{exp.company}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;