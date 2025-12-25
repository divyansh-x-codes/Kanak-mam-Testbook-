import { motion } from "framer-motion";
import { Youtube, Instagram, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const TeacherSection = () => {
  return (
    <section className="relative py-32 px-4 bg-[#FBF8F2] overflow-hidden">
      
      {/* SOFT BACKGROUND BLOBS */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-[#F3C6D3]/40 rounded-full blur-[140px]" />
      <div className="absolute -bottom-40 -right-40 w-[420px] h-[420px] bg-[#CFE3D6]/40 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            relative overflow-hidden
            rounded-[32px]
            bg-gradient-to-br from-[#FFF7F3] via-[#FCEAEA] to-[#F4F1EC]
            border border-[#E8DED6]
            shadow-[0_30px_80px_-30px_rgba(170,120,140,0.25)]
            p-10 md:p-14 lg:p-16
          "
        >
          <div className="relative flex flex-col lg:flex-row items-center gap-14">

            {/* PROFILE IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* SOFT HALO */}
              <div className="absolute inset-0 bg-[#F3C6D3]/50 blur-3xl rounded-full -z-10" />

              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-[#F3C6D3] via-[#E9B9C8] to-[#CFE3D6] p-1">
                <div className="w-full h-full rounded-full bg-[#FBF8F2] overflow-hidden">
                  <img
                    src="https://i.pinimg.com/736x/ef/e6/de/efe6deae30088a73d324f919251efa0a.jpg"
                    alt="Kanak Som"
                    className="w-full h-full object-cover object-[center_35%]"
                  />
                </div>
              </div>
            </motion.div>

            {/* CONTENT */}
            <div className="flex-1 text-center lg:text-left">

              {/* NAME */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="text-3xl md:text-4xl font-semibold text-[#1E1E1E] mb-1">
                  Kanak Som
                </h2>

                <div className="w-24 h-[3px] mx-auto lg:mx-0 bg-gradient-to-r from-[#F3C6D3] to-[#5F7F72] rounded-full mb-4" />

                <p className="text-lg text-[#5F7F72] mb-6">
                  Chemistry Mentor
                </p>
              </motion.div>

              {/* DESCRIPTION */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-[#4A4A4A] mb-10 max-w-xl"
              >
                Dedicated Chemistry Educator with a passion for transforming
                complex concepts into simple, relatable learning experiences.
              </motion.p>

              {/* QUOTE */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="
                  relative mb-10 p-6
                  rounded-2xl
                  bg-[#FFFFFF]/60
                  border border-[#E8DED6]
                  backdrop-blur-sm
                "
              >
                <Quote className="absolute -top-4 left-4 w-7 h-7 text-[#F3C6D3]" />
                <p className="text-[#3E3E3E] italic leading-relaxed">
                  “Teaching is not about telling answers, it’s about building
                  understanding.”
                </p>
              </motion.div>

              {/* SOCIAL LINKS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  className="
                    rounded-full px-8
                    bg-[#5F7F72] text-white
                    hover:bg-[#516B60]
                  "
                  asChild
                >
                  <a
                    href="https://www.youtube.com/@kanaksom1306/playlists"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Youtube className="w-5 h-5" />
                    YouTube Playlists
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="
                    rounded-full px-8
                    border-[#5F7F72]
                    text-[#5F7F72]
                    hover:bg-[#E6EFEA]
                  "
                  asChild
                >
                  <a
                    href="https://instagram.com/chemistry_by_kanaksom"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-5 h-5" />
                    @chemistry_by_kanaksom
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeacherSection;
