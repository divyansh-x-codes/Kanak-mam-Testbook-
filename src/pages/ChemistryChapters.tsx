import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Beaker, ArrowLeft, Download, FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const chapters = [
  { id: 1, nameEn: "Sorting Materials into Groups", nameHi: "पदार्थों का वर्गीकरण", videoId: "VIDEO_ID_1", pdfUrl: "/pdfs/sorting_materials.pdf" },
  { id: 2, nameEn: "Separation of Substances", nameHi: "पदार्थों का पृथक्करण", videoId: "VIDEO_ID_2", pdfUrl: "/pdfs/separation_substances.pdf" },
  { id: 3, nameEn: "Changes Around Us", nameHi: "हमारे आस-पास के परिवर्तन", videoId: "VIDEO_ID_3", pdfUrl: "/pdfs/changes_around_us.pdf" },
  { id: 4, nameEn: "Fibre to Fabric", nameHi: "रेशे से वस्त्र तक", videoId: "VIDEO_ID_4", pdfUrl: "/pdfs/fibre_to_fabric.pdf" },
  { id: 5, nameEn: "Acids, Bases and Salts", nameHi: "अम्ल, क्षार और लवण", videoId: "VIDEO_ID_5", pdfUrl: "/pdfs/acids_bases_salts.pdf" },
  { id: 6, nameEn: "Physical and Chemical Changes", nameHi: "भौतिक और रासायनिक परिवर्तन", videoId: "VIDEO_ID_6", pdfUrl: "/pdfs/physical_chemical_changes.pdf" },
  { id: 7, nameEn: "Synthetic Fibres and Plastics", nameHi: "संश्लेषित रेशे और प्लास्टिक", videoId: "VIDEO_ID_7", pdfUrl: "/pdfs/synthetic_fibres.pdf" },
  { id: 8, nameEn: "Materials: Metals and Non-Metals", nameHi: "पदार्थ: धातु और अधातु", videoId: "VIDEO_ID_8", pdfUrl: "/pdfs/metals_nonmetals.pdf" },
  { id: 9, nameEn: "Coal and Petroleum", nameHi: "कोयला और पेट्रोलियम", videoId: "VIDEO_ID_9", pdfUrl: "/pdfs/coal_petroleum.pdf" },
  { id: 10, nameEn: "Combustion and Flame", nameHi: "दहन और ज्वाला", videoId: "VIDEO_ID_10", pdfUrl: "/pdfs/combustion_flame.pdf" },
];

const ChemistryChapters = () => {
  const [modalChapter, setModalChapter] = useState(null);

  return (
    <>
      <Helmet>
        <title>Chemistry Chapters - CTET Science | Science by KanakSom</title>
        <meta
          name="description"
          content="Free Chemistry chapter-wise PDFs for CTET Paper II (Class 6-8). Download study materials for materials, chemical changes, acids, bases and more."
        />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />

        <main className="pt-24 pb-16 px-4">
          <div className="max-w-5xl mx-auto">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/#subjects">
                <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Subjects
                </Button>
              </Link>
            </motion.div>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-chemistry/20 mb-6">
                <Beaker className="w-10 h-10 text-chemistry" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Chemistry</h1>
              <p className="text-xl text-muted-foreground">रसायन विज्ञान</p>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                Matter, elements, compounds, chemical reactions simplified for CTET Paper II
              </p>
            </motion.div>

            {/* Chapters Grid */}
            <div className="grid gap-4">
              {chapters.map((chapter, index) => (
                <motion.div
                  key={chapter.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group p-5 rounded-xl border border-chemistry/20 bg-gradient-to-r from-chemistry/5 to-transparent hover:border-chemistry/40 hover:shadow-lg hover:shadow-chemistry/10 transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-chemistry/10 text-chemistry font-semibold">
                        {chapter.id}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground group-hover:text-chemistry transition-colors">
                          {chapter.nameEn}
                        </h3>
                        <p className="text-sm text-muted-foreground">{chapter.nameHi}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-chemistry hover:bg-chemistry/10"
                        onClick={() => setModalChapter(chapter)}
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <a
                        href={chapter.pdfUrl}
                        download
                        className="btn btn-outline btn-sm border-chemistry/30 text-chemistry hover:bg-chemistry/10 flex items-center gap-1"
                      >
                        <Download className="w-4 h-4" />
                        PDF
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </main>

        <Footer />

        {/* Modal */}
        {modalChapter && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-background rounded-xl p-4 w-11/12 md:w-2/3 lg:w-1/2 relative">
              <button
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                onClick={() => setModalChapter(null)}
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-xl font-bold mb-4">{modalChapter.nameEn}</h2>
              <div className="aspect-video">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${modalChapter.videoId}`}
                  title={modalChapter.nameEn}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ChemistryChapters;
