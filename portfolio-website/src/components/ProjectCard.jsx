import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectCard({ title, description, figmaLink, imageSrc, icon }) {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full p-6 flex flex-col md:flex-row items-start gap-6">

            {/* Image Area */}
            <div className="w-full md:w-1/3 flex justify-center">
                {imageSrc ? (
                    <div className="relative w-full max-w-[320px] aspect-[3/2]">
                        <Image
                            src={imageSrc}
                            alt={title}
                            layout="fill"
                            objectFit="contain"
                            className="rounded-md"
                        />
                    </div>
                ) : (
                    <div className="w-full h-[200px] bg-gray-100 flex items-center justify-center text-gray-400 italic">
                        No preview
                    </div>
                )}
            </div>

            {/* Text Content */}
            <div className="w-full md:w-2/3 space-y-4">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-gray-700">{description}</p>
                {figmaLink && (
                    <a
                        href={figmaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
                    >
                        <FiExternalLink />
                        View Figma
                    </a>
                )}
            </div>
        </div>
    );
}
