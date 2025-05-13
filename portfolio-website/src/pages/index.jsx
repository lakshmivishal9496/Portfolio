import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Home() {
    return (
        <>
            <Navbar />
            <div className="bg-[#f0f4f8] min-h-screen flex items-center justify-center px-4">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 pt-[120px] text-center md:text-left">

                    {/* Profile Image */}
                    {/* Profile Image */}
                    <div>
                        <Image
                            src="/assets/lak_image.jpg"
                            alt="Lakshmi Vishal"
                            width={208}
                            height={208}
                            className="full object-cover border-8 border-white shadow-lg"
                        />
                    </div>

                    {/* Text Content */}
                    <div>
                        <h1 className="text-4xl font-bold text-gray-800 mb-6">
                            Hello, I'm Lakshmi Vishal
                        </h1>
                        <p className="text-lg text-gray-700 mb-4">
                            A UI Designer & UX Researcher crafting beautiful and meaningful digital experiences.
                        </p>
                        <p className="text-md text-gray-600">
                            With a background in full-stack development and a strong focus on user-centered design,
                            I’ve worked on real-time plant monitoring apps, sports event platforms, and AI-powered
                            log analysis tools. I specialize in transforming complex systems into intuitive, elegant
                            interfaces using modern design principles.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
