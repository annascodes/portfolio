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

      <div id="about" className="mt-20 md:mt-0">
        <About />
      </div>

      <div id="liveProjects" className=" pt-10">
        <LiveProjects />
      </div>
{/* 
      <div id="work">
        <Work />
      </div> */}

      <div id="contact">
        <Contact />
      </div>

      <div className="h-svh flex items-center justify-center">
        <ContactFormModal />
      </div>

    </div>
  );
}


/* 
google dark mode color : #131314
*/