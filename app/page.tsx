import About from "@/component/About";
import Contact from "@/component/Contact";
import ContactFormModal from "@/component/ContactFormModal";
import Hero from "@/component/Hero";
import HeroUpd from "@/component/HeroUpd";
import LiveProjects from "@/component/LiveProjects";
import LiveProjsDiv from "@/component/LiveProjsDiv";
import LiveProjsUpd from "@/component/LiveProjsUpd";
import RecentProjects from "@/component/RecentProjects";
import TextRotater from "@/component/TextRotater";
import Work from "@/component/Work";

export default function Home() {
  return (
    <div>

      {/* <div className=" mt-20 ">
         <TextRotater />
      </div> */}

      <div id="home">
        {/* <Hero />  */}
        <HeroUpd/>
      </div>








      <div id="about" className="mt-36 h-20 border-0"></div>
      <About />



      <div id="liveProjects" className="mt-36 h-20 border-0"></div>
      {/* <LiveProjects /> */}
      <LiveProjsUpd/>




      <div id="contact" className="mt-36 h-20 border-0"></div>
      <Contact />



      <div className="h-svh flex items-center justify-center">
        <ContactFormModal />
      </div>

      {/* <LiveProjsDiv /> */}


    </div>
  );
}


/* 
google dark mode color : #131314
*/