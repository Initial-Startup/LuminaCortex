"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
// import { text } from "stream/consumers";
import Image from "next/image";
import Link from "next/link";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { projectData } from "./projectData";
import { motion } from "framer-motion";


const Aichatbot = () => {
  const words = [
    {
      text: "Make"
    },
    {
      text: "your"
    },
    {
      text: "Personal",
    },
    {
      text: "Ai-ChatBot",
    },
    {
      text: "to",
    },
    {
      text: "Enhance",
    },
    {
      text: "Business",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="h-auto xl:mt-[5rem] xl:h-auto w-screen mt-[10rem]">
      <div className="h-[37rem] w-full mt-[5rem]">
        <div className="h-[15rem] text-center flex xl:h-[10rem] xl:flex xl:justify-center xl:text-center xl:w-screen">
          <TypewriterEffect className="text-4xl py-10 px-3 xl:mt-10" words={words} />
        </div>
        <div className="h-[20rem] relative w-screen xl:h-[35rem] xl:flex xl:justify-center">
          <Image
            src="/images/services/Aichatbot.svg"
            alt="Aichatbot"
            width={46}
            height={146}
            className="h-[20rem] w-[20rem] ml-14 z-20 xl:h-[35rem] xl:w-[35rem]"
          />
        </div>
      </div>
      {/* AichatBot service */}
      <div className="xl:relative flex xl:mt-[5rem] sm:overflow-hidden xl:w-full justify-center relative items-center xl:h-[50rem] h-[90rem] flex-col px-4">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }}>
          <h3 className="text-3xl xl:-ml-[20rem] xl:w-[40rem] xl:mt-[65rem] mt-[5rem] font-bold text-black dark:text-white">Discover the wide range of<span className="text-blue-500"> AI chatbot</span> services we offer.</h3>
        </motion.div>
        <div className="max-w-5xl mb-[50rem] h-[30rem] px-8">
          <HoverEffect items={projectData} />
        </div>
      </div>


      {/* section 1 */}
      <div className="xl:relative xl:mt-50 xl:h-[47rem] xl:w-full xl:flex flex-row justify-center items-center" >
        <div className="mt-20 xl:-ml-30">
          <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }}>
            <Image
              src="/images/services/aichatimg2nd.svg"
              alt="Aichatbot"
              width={46}
              height={46}
              className="h-[15rem] w-[15rem] xl:-left-48 ml-24 z-20 xl:h-[35rem] xl:w-[35rem]"
            />
          </motion.div>
        </div>
        <div>
          <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>
            <div className="px-5 xl:px-13 xl:text-4xl mt-15 text-2xl font-bold text-black dark:text-white">
              AI Chatbot Services for Business
            </div>
          </motion.div>
          <div className="flex justify-center items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }}>
              <div className="h-[51rem] xl:h-[36rem] bg-white dark:bg-black text-black dark:text-white relative  mt-5 w-[85%] mx-8 rounded-3xl border-2 border-solid border-slate-800">
                <h3 className="text-2xl px-8 pt-8 font-bold">Customer Support</h3>
                <Image src="/images/services/customerSupport.svg" width={33} height={33} alt="" className="relative text-white -right-[17rem] -top-[2rem]" />
                <div className="px-8">
                  <p>24/7 Support: Always-on assistance to resolve customer queries.</p>
                  <p>Multi-language Support: Communicate with customers globally.</p>
                  <p>CRM Integration: Seamless tracking and management of customer interactions.</p>
                </div>
                <h3 className="text-2xl px-8 pt-8 font-bold">Sales and Marketing</h3>
                <Image src="/images/services/salesMarkting.svg" width={33} height={33} alt="" className="relative text-white -right-[18rem] -top-[2rem]" />
                <div className="px-8">
                  <p>Lead Generation: Identify and engage potential customers.</p>
                  <p>Product Recommendations: Personalized suggestions to boost sales.</p>
                  <p>Automated Campaigns: Efficiently run marketing campaigns across platforms.</p>
                </div>
                <h3 className="text-2xl px-8 pt-8 font-bold">Internal Operations</h3>
                <Image src="/images/services/InternalOperation.svg" width={33} height={33} alt="" className="relative text-white -right-[17rem] -top-[2rem]" />
                <div className="px-8">
                  <p>HR and Onboarding: Streamline employee onboarding and HR processes.</p>
                  <p>IT Support: Immediate assistance for common IT issues.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>


      {/* section 2 */}

      <div className="xl:relative xl:mt-50 xl:h-[47rem] xl:w-full xl:flex flex-row justify-center items-center" >
        <div>
          <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>
            <div className="px-5 xl:px-13 xl:text-4xl mt-15 text-2xl font-bold text-black dark:text-white">
              AI Chatbot Services for Personal Use
            </div>
          </motion.div>
          <div className="flex justify-center items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }}>
              <div className="h-[51rem] xl:h-[33rem] bg-white dark:bg-black text-black dark:text-white relative  mt-5 w-[85%] mx-8 rounded-3xl border-2 border-solid border-slate-800">
                <h3 className="text-2xl px-8 pt-8 font-bold">Personal Assistant</h3>
                <Image src="/images/services/personalAssi.svg" width={33} height={33} alt="" className="relative text-white -right-[17rem] -top-[2rem]" />
                <div className="px-8">
                  <p>Task Management: Manage daily tasks, reminders, and appointments.</p>
                  <p>Information Retrieval: Quick answers to everyday questions.</p>
                  <p>Personalized Recommendations: Tailored suggestions for shopping, dining, and entertainment.</p>
                </div>
                <h3 className="text-2xl px-8 pt-8 font-bold">Health and Wellness</h3>
                <Image src="/images/services/healthandwealth.svg" width={33} height={33} alt="" className="relative text-white -right-[18rem] -top-[2rem]" />
                <div className="px-8">
                  <p>Fitness Coaching: Personalized workout plans and progress tracking.</p>
                  <p>Mental Health Support: Resources and tips for mental well-being.</p>
                </div>
                <h3 className="text-2xl px-8 pt-8 font-bold">Education and Learning</h3>
                <Image src="/images/services/education.svg" width={33} height={33} alt="" className="relative text-white -right-[20rem] -top-[2rem]" />
                <div className="px-8">
                  <p>Tutoring: Help with homework and complex topics.</p>
                  <p>Language Learning: Practice new languages through interactive conversations.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="mt-20 xl:-ml-30">
          <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }}>
            <Image
              src="/images/services/personalChatbot.svg"
              alt="Aichatbot"
              width={46}
              height={46}
              className="h-[15rem] w-[15rem] xl:-left-48 ml-24 z-20 xl:h-[35rem] xl:w-[35rem]"
            />
          </motion.div>
        </div>
      </div>


      {/* section 3 */}
      
      <div className="xl:relative xl:mt-50 xl:h-[47rem] xl:w-full xl:flex flex-row justify-center items-center" >
        <div className="mt-20 xl:-ml-30">
          <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }}>
            <Image
              src="/images/services/selfDrive.svg"
              alt="Aichatbot"
              width={46}
              height={46}
              className="h-[15rem] w-[15rem] xl:-left-48 ml-24 z-20 xl:h-[35rem] xl:w-[35rem]"
            />
          </motion.div>
        </div>
        <div>
          <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>
            <div className="px-5 xl:px-13 xl:text-4xl mt-15 text-2xl font-bold text-black dark:text-white">
            AI Chatbot Services for Self-Driving Vehicles
            </div>
          </motion.div>
          <div className="flex justify-center items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }}>
              <div className="h-[51rem] xl:h-[32rem] bg-white dark:bg-black text-black dark:text-white relative  mt-5 w-[85%] mx-8 rounded-3xl border-2 border-solid border-slate-800">
                <h3 className="text-2xl px-8 pt-8 font-bold">In-Vehicle Assistance</h3>
                <Image src="/images/services/vehicleassi.svg" width={33} height={33} alt="" className="relative text-white -right-[19rem] -top-[2rem]" />
                <div className="px-8">
                  <p>Navigation: Real-time traffic updates and optimized routes.</p>
                  <p>Vehicle Control: Voice commands to control vehicle functions.</p>
                </div>
                <h3 className="text-2xl px-8 pt-8 font-bold">Safety and Maintenance</h3>
                <Image src="/images/services/Safety.svg" width={33} height={33} alt="" className="relative text-white -right-[21rem] -top-[2rem]" />
                <div className="px-8">
                  <p>Safety Alerts: Notifications about potential hazards and maintenance needs.</p>
                  <p>Emergency Assistance: Immediate contact with emergency services in critical situations.</p>
                </div>
                <h3 className="text-2xl px-8 pt-8 font-bold">Passenger Experience</h3>
                <Image src="/images/services/passenger.svg" width={33} height={33} alt="" className="relative text-white -right-[19rem] -top-[2rem]" />
                <div className="px-8">
                  <p>Entertainment: Access to music, movies, and games.</p>
                  <p>Travel Information: Details about destinations and points of interest.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Aichatbot;