import Navbar from "../components/Navbar";

export default function Contact() {
    return (
        <>
            <Navbar />
            <div className="container mx-auto py-16 flex flex-col items-center">
                <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
                <p className="text-gray-600 mb-6">Email: lakshmivishal9496@gmail.com</p>
                <p className="text-gray-600">LinkedIn: <a href="#" className="text-primary underline">https://www.linkedin.com/in/lakshmi-vh/</a></p>
            </div>
        </>
    );
}
