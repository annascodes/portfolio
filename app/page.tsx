import About from "@/component/About";
import Contact from "@/component/Contact";
import ContactFormModal from "@/component/ContactFormModal";
import Hero from "@/component/Hero";
import LiveProjects from "@/component/LiveProjects";
import RecentProjects from "@/component/RecentProjects";
import Work from "@/component/Work";

export default function Home() {
  return (
    <div>

      <div id="home">
        <Hero />
      </div>

      <div id="about" className="mt-36 h-20 border-0"></div>
      <About />


      <div id="liveProjects" className="mt-36 h-20 border-0"></div>
      <LiveProjects />



      <div id="contact" className="mt-36 h-20 border-0"></div>
      <Contact />



      <div className="h-svh flex items-center justify-center">
        <ContactFormModal />
      </div>

    </div>
  );
}


/* 
google dark mode color : #131314
*/