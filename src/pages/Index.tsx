import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TeacherSection from "@/components/TeacherSection";
import CTETDashboard from "@/components/CTETDashboard";
import BooksSection from "@/components/BooksSection";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Science by KanakSom - Free CTET Science Preparation</title>
        <meta
          name="description"
          content="Free CTET Science preparation platform by Kanak Som. Complete chapter-wise study material for Physics, Chemistry, Biology, and Science Pedagogy with downloadable PDFs."
        />
        <meta
          name="keywords"
          content="CTET, Science, Physics, Chemistry, Biology, Pedagogy, Free Study Material, Kanak Som, Teacher Exam"
        />
        <meta name="author" content="Kanak Som" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://sciencebykanaksom.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Science by KanakSom - Free CTET Science Preparation" />
        <meta property="og:description" content="CTET Science explained with clarity — not shortcuts. Free chapter-wise PDFs for Physics, Chemistry, Biology & Pedagogy." />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Science by KanakSom",
            "description": "Free CTET Science Preparation Platform",
            "founder": {
              "@type": "Person",
              "name": "Kanak Som",
              "jobTitle": "Chemistry Mentor"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR",
              "description": "Free CTET Science study materials"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <section id="about">
            <TeacherSection />
          </section>
          <section id="subjects">
            <CTETDashboard />
          </section>
          <section id="books">
            <BooksSection />
          </section>
          <ComingSoon />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
