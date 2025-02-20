import Image from "next/image";
import {Button} from "../components/ui/button";
import {FiDownload} from "react-icons/fi";
import Socials from "../components/Socials";
import Photo from "../components/Photo"
import Stats from "../components/Stats"

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row 
        items-center justify-between pt-6 xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span></span>
            <h1 className="h1 mb-6">Hello I'm <br /><span className="text-primary">Daniel Collins</span></h1>
            <p className="max-w-[500px] mb-9 text-white">I am a web designer/web developer. 
              I know many different programming 
              languages and libriaries.</p>
              {/* button and socials */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 border-white text-white">
                  <span>Download CV</span>
                  <FiDownload />
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Socials containerStyles="flex gap-6" IconStyles="w-9 h-9 border border-white rounded-full 
                  flex justify-center items-center  
                  text-white text-base hover:bg-accent 
                  hover:text-primary transition-all"/>
                  </div>
              </div>
            </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
          </div>
          </div>
          <Stats className="flex pb-8"/>
      </section>
  );
}
