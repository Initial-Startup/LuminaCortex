"use client";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { products } from "./data";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import HoverImage from "./hoverImage";
import content from "./content";

const ARandVR = () => {
    return (
        <div className="relative w-full overflow-x-hidden">
            <HeroParallax products={products} />
            <div className="pt-20 flex flex-col justify-center items-center h-auto xl:justify-center xl:mt-20">
                <h3 className=" text-center text-black dark:text-white text-3xl font-bold xl:text-4xl xl:w-[70%]">
                    Enhance Customer Experiences and Empower Business through Elite AR & VR Services
                </h3>
                <div className="h-[80rem] xl:h-[20rem] gap-5 pt-10 w-full px-5 flex flex-col justify-center gird xl:flex-row">
                    <HoverImage src={"/images/services/gaming.jpg"} alt="AR & VR" text="AR & VR Game Development 2D, 3D and Isometric games" />
                    <HoverImage src={"/images/services/education.jpg"} alt="AR & VR" text="Education 3D Visual Animations | Intractions & Clicks" />
                    <HoverImage src={"/images/services/furnitures.jpg"} alt="AR & VR" text="Experience luxury furniture using AR on your mobile | before purchase" />
                    <HoverImage src={"/images/services/travel2.jpg"} alt="AR & VR" text="Travel Interactive Experiences" />
                </div>
                <div className="pt-10 mt-5">
                <StickyScroll content={content} />
                </div>
            </div>

        </div>
    );
};

export default ARandVR;
