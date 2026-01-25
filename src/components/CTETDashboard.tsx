import { motion } from "framer-motion";
import { Atom, Beaker, Leaf, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SubjectCard from "./SubjectCard";

const LOCKED = true; // 🔒 master switch

const subjects = [
  {
    title: "Physics",
    titleHindi: "भौतिक विज्ञान",
    icon: Atom,
    color: "physics",
    description: "Force, motion, light, sound, electricity and magnetism concepts for CTET.",
    chaptersCount: 12,
  },
  {
    title: "Chemistry",
    titleHindi: "रसायन विज्ञान",
    icon: Beaker,
    color: "chemistry",
    description: "Matter, elements, compounds, chemical reactions simplified.",
    chaptersCount: 10,
  },
  {
    title: "Biology",
    titleHindi: "जीव विज्ञान",
    icon: Leaf,
    color: "biology",
    description: "Living organisms, human body, environment and ecosystem.",
    chaptersCount: 14,
  },
  {
    title: "Science Pedagogy",
    titleHindi: "विज्ञान शिक्षाशास्त्र",
    icon: BookOpen,
    color: "pedagogy",
    description: "Teaching methodology, NCF guidelines, assessment strategies.",
    chaptersCount: 8,
  },
];

const CTETDashboard = () => {
  const navigate = useNavigate();

  const handleSubjectClick = (subject: string) => {
    if (LOCKED) return; // ❌ no navigation

    const routes: Record<string, string> = {
      Physics: "/physics",
      Chemistry: "/chemistry",
      Biology: "/biology",
      "Science Pedagogy": "/pedagogy",
    };

    navigate(routes[subject] || "/");
  };

  return (
    <section className="relative py-24 px-4">
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            CTET Paper II (Class 6-8)
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="gradient-text">Subject</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete chapter-wise study material with free downloadable PDFs in Hindi & English
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((subject, index) => (
            <SubjectCard
              key={subject.title}
              {...subject}
              index={index}
              locked={LOCKED}          // 🔒 pass lock state
              onClick={() => handleSubjectClick(subject.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTETDashboard;
