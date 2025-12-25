import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Download, Eye, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const DOWNLOAD_URL =
  "https://drive.google.com/uc?export=download&id=1t9Ms4N5oYoFRCZSs2RhiG617YiA7bHVR";

const PREVIEW_URL =
  "https://drive.google.com/file/d/1t9Ms4N5oYoFRCZSs2RhiG617YiA7bHVR/preview";

const WhyThisBookSection = () => {
  const [openPreview, setOpenPreview] = useState(false);

  return (
    <section className="relative py-32 px-4 bg-[#FBF8F2]">
      <div className="max-w-6xl mx-auto">

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            relative overflow-hidden
            rounded-[32px]
            bg-gradient-to-br from-[#FFF7F3] via-[#FCEAEA] to-[#F4F1EC]
            border border-[#E8DED6]
            shadow-[0_30px_80px_-30px_rgba(170,120,140,0.25)]
            p-10 md:p-14
          "
        >
          {/* soft pink glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F3C6D3]/40 blur-[120px] rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#CFE3D6]/40 blur-[120px] rounded-full" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT – TEXT */}
            <div>
              <span className="inline-flex mb-6 px-5 py-2 rounded-full bg-[#E6EFEA] text-[#4F6F62] text-sm font-medium">
                Why this book?
              </span>

              <h2 className="text-3xl md:text-4xl font-semibold text-[#1E1E1E] mb-8 leading-tight">
                Designed for CTET success
              </h2>

              <ul className="space-y-5 mb-10 text-[#4A4A4A]">
                {[
                  "Concept-based explanations (no rote learning)",
                  "CTET Paper II fully aligned (Class 6–8)",
                  "Chapter-wise structured study flow",
                  "Previous year question insights",
                  "Simple language + exam-focused",
                  "100% Free & downloadable PDFs",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#5F7F72] mt-0.5" />
                    <span className="text-base">{point}</span>
                  </li>
                ))}
              </ul>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4">
                <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="
                      bg-[#5F7F72] text-white
                      hover:bg-[#516B60]
                      rounded-full px-8
                    "
                  >
                    <Download className="w-4 h-4" />
                    Download Free
                  </Button>
                </a>

                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setOpenPreview(true)}
                  className="
                    rounded-full px-8
                    border-[#5F7F72]
                    text-[#5F7F72]
                    hover:bg-[#E6EFEA]
                  "
                >
                  <Eye className="w-4 h-4" />
                  Preview
                </Button>
              </div>
            </div>

            {/* RIGHT – BOOK */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: -60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#F3C6D3]/40 blur-3xl rounded-2xl -z-10" />
                <img
                  src="https://i.pinimg.com/736x/81/37/55/81375575771d9edb54ea8daed9d65e2b.jpg"
                  alt="CTET Science Book"
                  className="
                    w-64 md:w-72
                    max-h-[-20px]
                    object-contain
                    rounded-[50px]
                    shadow-5xl
                  "
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* PREVIEW MODAL */}
      {openPreview && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-5xl h-[85vh] bg-[#FBF8F2] rounded-3xl overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-black/10">
              <h4 className="text-sm font-medium text-[#1E1E1E]">
                CTET Science (Class 6–8) – Preview
              </h4>
              <button onClick={() => setOpenPreview(false)}>
                <X className="w-5 h-5 text-[#1E1E1E]" />
              </button>
            </div>
            <iframe
              src={PREVIEW_URL}
              title="CTET Science PDF Preview"
              className="flex-1 w-full"
              frameBorder="0"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default WhyThisBookSection;
