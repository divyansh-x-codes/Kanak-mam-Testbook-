import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Leaf, ArrowLeft, Download, FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const chapters = [
  { id: 1, nameEn: "Food: Where Does It Come From?", nameHi: "भोजन: यह कहाँ से आता है?", videoId: "VIDEO_ID_1", pdfUrl: "/pdfs/food.pdf" },
  { id: 2, nameEn: "Components of Food", nameHi: "भोजन के घटक", videoId: "VIDEO_ID_2", pdfUrl: "/pdfs/components_of_food.pdf" },
  { id: 3, nameEn: "Getting to Know Plants", nameHi: "पौधों को जानिए", videoId: "VIDEO_ID_3", pdfUrl: "/pdfs/getting_to_know_plants.pdf" },
  { id: 4, nameEn: "Body Movements", nameHi: "शरीर में गति", videoId: "VIDEO_ID_4", pdfUrl: "/pdfs/body_movements.pdf" },
  { id: 5, nameEn: "Living Organisms and Their Surroundings", nameHi: "सजीव और उनका परिवेश", videoId: "VIDEO_ID_5", pdfUrl: "/pdfs/living_organisms.pdf" },
  { id: 6, nameEn: "Nutrition in Plants", nameHi: "पौधों में पोषण", videoId: "VIDEO_ID_6", pdfUrl: "/pdfs/nutrition_plants.pdf" },
  { id: 7, nameEn: "Nutrition in Animals", nameHi: "जंतुओं में पोषण", videoId: "VIDEO_ID_7", pdfUrl: "/pdfs/nutrition_animals.pdf" },
  { id: 8, nameEn: "Respiration in Organisms", nameHi: "जीवों में श्वसन", videoId: "VIDEO_ID_8", pdfUrl: "/pdfs/respiration.pdf" },
  { id: 9, nameEn: "Transportation in Animals and Plants", nameHi: "जंतुओं और पौधों में परिवहन", videoId: "VIDEO_ID_9", pdfUrl: "/pdfs/transportation.pdf" },
  { id: 10, nameEn: "Reproduction in Plants", nameHi: "पौधों में जनन", videoId: "VIDEO_ID_10", pdfUrl: "/pdfs/reproduction_plants.pdf" },
  { id: 11, nameEn: "Reproduction in Animals", nameHi: "जंतुओं में जनन", videoId: "VIDEO_ID_11", pdfUrl: "/pdfs/reproduction_animals.pdf" },
  { id: 12, nameEn: "Cell: Structure and Functions", nameHi: "कोशिका: संरचना और कार्य", videoId: "VIDEO_ID_12", pdfUrl: "/pdfs/cell.pdf" },
  { id: 13, nameEn: "Conservation of Plants and Animals", nameHi: "पौधों और जंतुओं का संरक्षण", videoId: "VIDEO_ID_13", pdfUrl: "/pdfs/conservation.pdf" },
  { id: 14, nameEn: "Microorganisms: Friend and Foe", nameHi: "सूक्ष्मजीव: मित्र और शत्रु", videoId: "VIDEO_ID_14", pdfUrl: "/pdfs/microorganisms.pdf" },
];

const BiologyChapters = () => {
  const [modalChapter, setModalChapter] = useState(null);

  return (
    <>
      <Helmet>
        <title>Biology Chapters - CTET Science | Science by KanakSom</title>
        <meta
          name="description"
          content="Free Biology chapter-wise PDFs for CTET Paper II (Class 6-8). Download study materials for living organisms, human body, environment and ecosystem."
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
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-biology/20 mb-6">
                <Leaf className="w-10 h-10 text-biology" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Biology</h1>
              <p className="text-xl text-muted-foreground">जीव विज्ञान</p>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                Living organisms, human body, environment and ecosystem for CTET Paper II
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
                  className="group p-5 rounded-xl border border-biology/20 bg-gradient-to-r from-biology/5 to-transparent hover:border-biology/40 hover:shadow-lg hover:shadow-biology/10 transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-biology/10 text-biology font-semibold">
                        {chapter.id}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground group-hover:text-biology transition-colors">
                          {chapter.nameEn}
                        </h3>
                        <p className="text-sm text-muted-foreground">{chapter.nameHi}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-biology hover:bg-biology/10"
                        onClick={() => setModalChapter(chapter)}
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <a
                        href={chapter.pdfUrl}
                        download
                        className="btn btn-outline btn-sm border-biology/30 text-biology hover:bg-biology/10 flex items-center gap-1"
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

export default BiologyChapters;
