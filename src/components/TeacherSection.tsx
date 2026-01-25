import { motion } from "framer-motion";
import { Lock, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const LOCKED = true; // 🔒 later auth se control karna
<TeacherSection />
<CTETBundleSection />


const CTETBundleSection = () => {
  const handleDownload = () => {
    if (LOCKED) {
      alert("This bundle is available only for SuperPASS students.");
      return;
    }

    window.open(
      "https://YOUR_ACTUAL_PDF_LINK_HERE",
      "_blank"
    );
  };

  return (
    <section className="py-32 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* BOOK IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src="/bundle-book.png" // 🔁 apni image yahan rakho
            alt="CTET PYQs Bundle"
            className="w-full max-w-md mx-auto drop-shadow-2xl"
          />

          {LOCKED && (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Lock className="w-12 h-12 text-white" />
            </div>
          )}
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            PYQs + Marathon PDFs <br />
            <span className="text-yellow-400">CTET Science Paper-2</span>
          </h2>

          <p className="text-gray-300 mb-6 max-w-lg">
            Complete CTET PYQs + Marathon PDFs with detailed answers.
            Curated by Kanak Som for focused Paper-2 preparation.
          </p>

          <div className="text-2xl font-semibold mb-8">
            Only ₹199
          </div>

          <Button
            size="lg"
            onClick={handleDownload}
            className="rounded-full px-10 bg-yellow-500 text-black hover:bg-yellow-400"
          >
            {LOCKED ? (
              <>
                <Lock className="w-5 h-5 mr-2" />
                Unlock with SuperPASS
              </>
            ) : (
              <>
                <Download className="w-5 h-5 mr-2" />
                Download Bundle
              </>
            )}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTETBundleSection;
