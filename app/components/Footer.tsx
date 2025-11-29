import { Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="mt-10 py-6 text-center text-gray-500 text-sm border-t border-gray-800">
            <p className="mb-1">
                Built by
                <span className="text-gray-300 font-medium">
                    <a href="">
                        ❤️ Trina
                    </a>
                </span> & ChatGPT @ 2025
            </p>
            <div className="flex flex-row justify-center items-center gap-2">
                <a
                href="https://github.com/YOUR_USERNAME/smart-ui-copy-assistant"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Github className="w-4 h-4 text-pink-400 hover:text-pink-300" />
            </a>
            <a
                href="https://github.com/YOUR_USERNAME/smart-ui-copy-assistant"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Linkedin className="w-4 h-4 text-pink-400 hover:text-pink-300" />
            </a>
            </div>
        </footer>
    );
}