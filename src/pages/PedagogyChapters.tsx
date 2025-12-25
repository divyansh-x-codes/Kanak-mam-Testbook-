import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { BookOpen, ArrowLeft, Download, FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const chapters = [
  { id: 1, nameEn: "Nature and Scope of Science", nameHi: "विज्ञान की प्रकृति और क्षेत्र", videoId: "VIDEO_ID_1", pdfUrl: "/pdfs/nature_scope.pdf" },
  { id: 2, nameEn: "Aims and Objectives of Science Teaching", nameHi: "विज्ञान शिक्षण के उद्देश्य", videoId: "VIDEO_ID_2", pdfUrl: "/pdfs/aims_objectives.pdf" },
  { id: 3, nameEn: "Methods of Teaching Science", nameHi: "विज्ञान शिक्षण की विधियाँ", videoId: "VIDEO_ID_3", pdfUrl: "/pdfs/methods_teaching.pdf" },
  { id: 4, nameEn: "Learning Resources in Science", nameHi: "विज्ञान में अधिगम संसाधन", videoId: "VIDEO_ID_4", pdfUrl: "/pdfs/learning_resources.pdf" },
  { id: 5, nameEn: "Evaluation in Science", nameHi: "विज्ञान में मूल्यांकन", videoId: "VIDEO_ID_5", pdfUrl: "/pdfs/evaluation.pdf" },
  { id: 6, nameEn: "NCF 2005 Guidelines for Science", nameHi: "NCF 2005 विज्ञान दिशानिर्देश", videoId: "VIDEO_ID_6", pdfUrl: "/pdfs/ncf2005.pdf" },
  { id: 7, nameEn: "Remedial Teaching in Science", nameHi: "विज्ञान में उपचारात्मक शिक्षण", videoId: "VIDEO_ID_7", pdfUrl: "/pdfs/remedial_teaching.pdf" },
  { id: 8, nameEn: "Problems in Teaching Science", nameHi: "विज्ञान शिक्षण की समस्याएँ", videoId: "VIDEO_ID_8", pdfUrl: "/pdfs/problems_teaching.pdf" },
];

const PedagogyChapters = () => {
  const [modalChapter, setModalChapter] = useState(null);

  return (
    <>
      <Helmet>
        <title>Science Pedagogy Chapters - CTET | Science by KanakSom</title>
        <meta
          name="description"
          content="Free Science Pedagogy chapter-wise PDFs for CTET Paper II. Download study materials for teaching methodology, NCF guidelines, assessment strategies."
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
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-pedagogy/20 mb-6">
                <BookOpen className="w-10 h-10 text-pedagogy" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Science Pedagogy</h1>
              <p className="text-xl text-muted-foreground">विज्ञान शिक्षाशास्त्र</p>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                Teaching methodology, NCF guidelines, assessment strategies for CTET Paper II
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
                  className="group p-5 rounded-xl border border-pedagogy/20 bg-gradient-to-r from-pedagogy/5 to-transparent hover:border-pedagogy/40 hover:shadow-lg hover:shadow-pedagogy/10 transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-pedagogy/10 text-pedagogy font-semibold">
                        {chapter.id}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground group-hover:text-pedagogy transition-colors">
                          {chapter.nameEn}
                        </h3>
                        <p className="text-sm text-muted-foreground">{chapter.nameHi}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-pedagogy hover:bg-pedagogy/10"
                        onClick={() => setModalChapter(chapter)}
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <a
                        href={chapter.pdfUrl}
                        download
                        className="btn btn-outline btn-sm border-pedagogy/30 text-pedagogy hover:bg-pedagogy/10 flex items-center gap-1"
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

export default PedagogyChapters;
