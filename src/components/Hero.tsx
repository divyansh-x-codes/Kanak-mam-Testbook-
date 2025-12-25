import { motion, useMotionValue, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect } from "react";

const Hero = () => {
  // Cursor position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const glowX = useTransform(mouseX, (v) => `${v - 200}px`);
  const glowY = useTransform(mouseY, (v) => `${v - 200}px`);

  const handleStartClick = () => {
    document.getElementById("subjects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-24">

      {/* 🌌 BASE BACKGROUND */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(150,80%,60%,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(320,70%,60%,0.10),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(200,90%,55%,0.10),transparent_55%)]" />
      </div>

      {/* ✨ CURSOR GLOW */}
      <motion.div
        className="pointer-events-none absolute w-[420px] h-[420px] rounded-full blur-[120px]"
        style={{
          left: glowX,
          top: glowY,
          background:
            "radial-gradient(circle, rgba(120,255,180,0.25), rgba(255,120,200,0.15), transparent 60%)",
        }}
      />

      {/* 🌟 FLOATING PARTICLES */}
      {[...Array(18)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/40"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0.3,
          }}
          animate={{
            y: ["0%", "-20%", "0%"],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* TOP BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 backdrop-blur border border-white/10 text-sm text-muted-foreground">
            <Sparkles className="w-4 h-4 text-lime-300 animate-pulse" />
            100% Free CTET Science Preparation
          </span>
        </motion.div>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="bg-gradient-to-r from-lime-300 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Science
          </span>
          <br />
          <span className="text-foreground">By Kanak Som</span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-foreground/90 mb-3 font-medium"
        >
          CTET Science, explained with clarity — not shortcuts.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          “Strong concepts today build confident teachers tomorrow.”
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            variant="hero"
            size="xl"
            onClick={handleStartClick}
            className="group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start CTET Science
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-lime-400/30 via-pink-400/20 to-cyan-400/30 opacity-0 group-hover:opacity-100 transition" />
          </Button>
        </motion.div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "4", label: "Core Subjects" },
            { value: "100+", label: "Chapter PDFs" },
            { value: "Free", label: "Forever" },
            { value: "Hindi", label: "& English" },
          ].map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6 hover:scale-105 transition"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-lime-300 to-cyan-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
