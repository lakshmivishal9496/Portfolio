import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="bg-[#f0f4f8] min-h-screen flex items-center justify-center px-4">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 pt-[100px]">

                    {/* Profile Image */}
                    <div className="relative w-52 h-52 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <Image
                            src="/assets/lak_image.jpg"
                            alt="Lakshmi Vishal"
                            fill
                            className="object-cover"
                        />
                    </div>


                    {/* Text Content */}
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">Hello, I'm Lakshmi Vishal</h1>
                        <p className="text-lg text-gray-700 mb-4">
                            A UI Designer & UX Researcher crafting beautiful and meaningful digital experiences.
                        </p>
                        <p className="text-gray-600 text-base leading-relaxed">
                            With a background in full-stack development and a strong focus on user-centered design,
                            I’ve worked on real-time plant monitoring apps, sports event platforms, and AI-powered
                            log analysis tools. I specialize in transforming complex systems into intuitive, elegant
                            interfaces using modern design principles. I’m passionate about designing with purpose,
                            conducting UX research, and enhancing usability through human-centered design.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
