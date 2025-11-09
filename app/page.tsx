import About from "@/component/About";
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

      <div id="about" className="mt-15 md:mt-0">
        <About />
      </div>

      <div id="liveProjects" className=" pt-10">
        <LiveProjects />
      </div>

      <div id="work">
        <Work />
      </div>

    </div>
  );
}


/* 
google dark mode color : #131314
*/