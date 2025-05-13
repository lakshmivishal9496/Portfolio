export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 text-center py-6 mt-auto w-full">
            <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Lakshmi Vishal. All rights reserved.
            </p>
        </footer>
    );
}
