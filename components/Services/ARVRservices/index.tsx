"use client";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { products } from "./data";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import HoverImage from "./hoverImage";
import content from "./content";

const ARandVR = () => {
    return (
        <div className="relative">
            <HeroParallax products={products} />
            <div className="pt-20 flex flex-col justify-center items-center h-auto xl:justify-center">
                <h3 className=" text-center text-black dark:text-white text-3xl font-bold xl:text-5xl xl:w-[70%]">
                    Enhance Customer Experiences and Empower Business through Elite AR & VR Services
                </h3>
                <div className="h-[80rem] xl:h-auto gap-10 pt-10 w-full px-5 flex flex-col justify-center gird xl:flex-row">
                    <HoverImage src={"/images/services/arvr12.jpg"} alt="AR & VR" text="AR & VR Game Development 2D, 3D and Isometric games" />
                    <HoverImage src={"/images/services/vreducation.jpg"} alt="AR & VR" text="Education 3D Visual Animations | Intractions & Clicks" />
                    <HoverImage src={"/images/services/manufacture car.webp"} alt="AR & VR" text="Manufacturing Digital Models | Design Insights" />
                    <HoverImage src={"/images/services/travel.png"} alt="AR & VR" text="Trevel Interactive Experiences" />
                </div>
                <div className="pt-10 mt-5">
                <StickyScroll content={content} />
                </div>
            </div>

        </div>
    );
};

export default ARandVR;
