import Navbar from "../components/Navbar";
import NewsletterModal from "../components/NewsletterModal";
import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/CategoriesSection";
import LatestPostsSection from "../components/LatestPostsSection";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <LatestPostsSection />
      <Footer />
      <NewsletterModal />
    </>
  );
}

export default HomePage;
