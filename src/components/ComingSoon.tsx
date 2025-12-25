import { motion } from "framer-motion";
import { Clock, Bell } from "lucide-react";

const upcomingExams = [
  { name: "UPTET", nameHindi: "उत्तर प्रदेश शिक्षक पात्रता परीक्षा" },
  { name: "DSSSB", nameHindi: "दिल्ली अधीनस्थ सेवा चयन बोर्ड" },
  { name: "BSTET", nameHindi: "बिहार राज्य शिक्षक पात्रता परीक्षा" },
  { name: "BPSC TRE", nameHindi: "बिहार शिक्षक भर्ती परीक्षा" },
  { name: "PGT Science", nameHindi: "स्नातकोत्तर शिक्षक विज्ञान" },
];

const ComingSoon = () => {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            More <span className="gradient-text">Coming Soon</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We're expanding to help you prepare for more teaching exams
          </p>
        </motion.div>

        {/* Coming Soon Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {upcomingExams.map((exam, index) => (
            <motion.div
              key={exam.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group"
            >
              <div className="relative p-6 rounded-xl bg-muted/30 border border-border/30 text-center transition-all duration-300 hover:border-primary/30 hover:bg-muted/50">
                {/* Pulse glow effect */}
                <div className="absolute inset-0 rounded-xl pulse-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Coming Soon Tag */}
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-medium mb-3">
                  <Clock className="w-3 h-3" />
                  Coming Soon
                </div>

                {/* Exam Name */}
                <h3 className="font-bold text-lg mb-1">{exam.name}</h3>
                <p className="text-xs text-muted-foreground leading-tight">
                  {exam.nameHindi}
                </p>

                {/* Notify button (appears on hover) */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <button className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                    <Bell className="w-3 h-3" />
                    Notify Me
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
