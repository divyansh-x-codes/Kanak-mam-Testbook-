import { motion } from "framer-motion";
import { Youtube, Instagram, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative mt-24 px-4 overflow-hidden">

      {/* 🌿 BACKGROUND GLOWS */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-lime-400/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-pink-400/10 blur-[120px] rounded-full" />

      <div className="relative max-w-6xl mx-auto pt-20 pb-10 border-t border-border/30">

        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-semibold tracking-tight">
              <span className="bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Science
              </span>{" "}
              by KanakSom
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Free CTET Science Preparation
            </p>
          </motion.div>

          {/* SOCIAL ICONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {[
              {
                icon: Youtube,
                href: "https://www.youtube.com/@kanaksom1306/playlists",
                color: "hover:text-red-400 hover:shadow-[0_0_25px_rgba(255,80,80,0.6)]",
              },
              {
                icon: Instagram,
                href: "https://instagram.com/chemistry_by_kanaksom",
                color: "hover:text-pink-400 hover:shadow-[0_0_25px_rgba(255,120,200,0.6)]",
              },
              {
                icon: Mail,
                href: "mailto:contact@kanaksom.com",
                color: "hover:text-lime-400 hover:shadow-[0_0_25px_rgba(160,255,120,0.6)]",
              },
            ].map(({ icon: Icon, href, color }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-11 h-11 rounded-full bg-white/5 backdrop-blur flex items-center justify-center text-muted-foreground transition-all duration-300 hover:scale-110 ${color}`}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* DIVIDER */}
        <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-border/40 to-transparent" />

        {/* BOTTOM TEXT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center space-y-3"
        >
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Made with{" "}
            <Heart className="w-4 h-4 text-pink-400 animate-pulse" />{" "}
            for aspiring teachers
          </p>

          <p className="text-xs text-muted-foreground/60">
            © 2024 Science by KanakSom · All content is free forever
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
