import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Contact() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen px-6 pt-24 text-center bg-[#f0f4f8]">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Get in Touch</h1>
                <p className="text-lg text-gray-700 max-w-xl mb-8">
                    I'm always happy to chat about new projects, collaborations, or design ideas. Reach out anytime!
                </p>
                <div className="space-y-4 text-lg text-gray-800">
                    <p>
                        📧 Email:{" "}
                        <a
                            href="mailto:lakshmivishal9496@gmail.com"
                            className="text-primary underline hover:text-secondary"
                        >
                            lakshmivishal9496@gmail.com
                        </a>
                    </p>
                    <p>
                        💼 LinkedIn:{" "}
                        <a
                            href="https://www.linkedin.com/in/lakshmi-vh/"
                            className="text-primary underline hover:text-secondary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.linkedin.com/in/lakshmi-vh/
                        </a>
                    </p>
                </div>
            </div>


            <Footer />
        </>
    );
}
