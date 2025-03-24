import grainImage from "@/assets/images/grain.jpg"
import { ContactForm } from "./ContactForm";


export const ContactSection = () => {
  return (
    <div className="lg:pt-12">
      <div className="">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-5 px-5 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}>
            </div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
              <div>
          <h2 className="font-serif text-1xl">For Solve Your Problems</h2>
           </div>
           <div className="">
           <span className="text-white bg-gray-900 inline-flex items-center justify-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-950 hover:bg-gray-800 transition-colors duration-200 cursor-pointer">
            <span className="font-semibold"><ContactForm /></span>
          </span>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};
