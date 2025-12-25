import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { Atom, ArrowLeft, Download, FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* 📘 PHYSICS – ALL CHAPTERS (CTET Class 6–8) */
const chapters = [
  {
    id: 1,
    nameEn: "Motion and Measurement of Distances",
    nameHi: "गति और दूरियों का मापन",
    videoId: "UrsmFxEIp5k",
    pdf: "https://example.com/physics/ch1.pdf",
  },
  {
    id: 2,
    nameEn: "Light, Shadows and Reflections",
    nameHi: "प्रकाश, छाया और परावर्तन",
    videoId: "VIDEO_ID_2",
    pdf: "https://example.com/physics/ch2.pdf",
  },
  {
    id: 3,
    nameEn: "Electricity and Circuits",
    nameHi: "विद्युत और परिपथ",
    videoId: "VIDEO_ID_3",
    pdf: "https://example.com/physics/ch3.pdf",
  },
  {
    id: 4,
    nameEn: "Fun with Magnets",
    nameHi: "चुंबकों का खेल",
    videoId: "VIDEO_ID_4",
    pdf: "https://example.com/physics/ch4.pdf",
  },
  {
    id: 5,
    nameEn: "Motion and Time",
    nameHi: "गति और समय",
    videoId: "VIDEO_ID_5",
    pdf: "https://example.com/physics/ch5.pdf",
  },
  {
    id: 6,
    nameEn: "Electric Current and its Effects",
    nameHi: "विद्युत धारा और इसके प्रभाव",
    videoId: "VIDEO_ID_6",
    pdf: "https://example.com/physics/ch6.pdf",
  },
  {
    id: 7,
    nameEn: "Light",
    nameHi: "प्रकाश",
    videoId: "VIDEO_ID_7",
    pdf: "https://example.com/physics/ch7.pdf",
  },
  {
    id: 8,
    nameEn: "Sound",
    nameHi: "ध्वनि",
    videoId: "VIDEO_ID_8",
    pdf: "https://example.com/physics/ch8.pdf",
  },
  {
    id: 9,
    nameEn: "Force and Pressure",
    nameHi: "बल और दाब",
    videoId: "VIDEO_ID_9",
    pdf: "https://example.com/physics/ch9.pdf",
  },
  {
    id: 10,
    nameEn: "Friction",
    nameHi: "घर्षण",
    videoId: "VIDEO_ID_10",
    pdf: "https://example.com/physics/ch10.pdf",
  },
  {
    id: 11,
    nameEn: "Sources of Energy",
    nameHi: "ऊर्जा के स्रोत",
    videoId: "VIDEO_ID_11",
    pdf: "https://example.com/physics/ch11.pdf",
  },
  {
    id: 12,
    nameEn: "Light – Reflection and Refraction",
    nameHi: "प्रकाश – परावर्तन और अपवर्तन",
    videoId: "VIDEO_ID_12",
    pdf: "https://example.com/physics/ch12.pdf",
  },
];

const PhysicsChapters = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <>
      <Helmet>
        <title>Physics Chapters | CTET Science</title>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />

        <main className="pt-28 pb-20 px-4">
          <div className="max-w-5xl mx-auto">

            {/* 🔙 Back */}
            <Link to="/#subjects">
              <Button variant="ghost" className="mb-10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Subjects
              </Button>
            </Link>

            {/* 🔷 Header */}
            <div className="text-center mb-14">
              <div className="inline-flex w-20 h-20 items-center justify-center rounded-2xl bg-physics/20 mb-6">
                <Atom className="w-10 h-10 text-physics" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Physics</h1>
              <p className="text-muted-foreground text-lg">भौतिक विज्ञान</p>
            </div>

            {/* 📚 Chapters List */}
            <div className="grid gap-4">
              {chapters.map((ch, index) => (
                <motion.div
                  key={ch.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-5 md:p-6 rounded-2xl border border-physics/20 bg-gradient-to-r from-physics/10 to-transparent hover:border-physics/40 transition"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-lg">{ch.nameEn}</h3>
                      <p className="text-sm text-muted-foreground">
                        {ch.nameHi}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      {/* 👁 View */}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-physics"
                        onClick={() => setActiveVideo(ch.videoId)}
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        View
                      </Button>

                      {/* 📄 PDF */}
                      <Button variant="outline" size="sm" asChild>
                        <a href={ch.pdf} target="_blank" download>
                          <Download className="w-4 h-4 mr-2" />
                          PDF
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </main>

        <Footer />

        {/* 🎥 VIDEO MODAL */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden">
                <button
                  onClick={() => setActiveVideo(null)}
                  className="absolute top-3 right-3 z-10 bg-black/60 p-2 rounded-full text-white"
                >
                  <X />
                </button>

                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Physics Video"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default PhysicsChapters;
