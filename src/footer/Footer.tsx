import type { JSX } from "react";
import { useAppSelector } from "../app/hooks";

export default function Footer(): JSX.Element {
    const currentLanguage = useAppSelector((state) => state.language.currentLanguage);

    const content = {
        ru: {
            rights: "Все права защищены",
            contact: "Контакты",
        },
        en: {
            rights: "All rights reserved",
            contact: "Contact",
        },
        de: {
            rights: "Alle Rechte vorbehalten",
            contact: "Kontakt",
        },
    };

    return (
        <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 py-6 mt-auto transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p>&copy; {new Date().getFullYear()} My Toolkit App. {content[currentLanguage].rights}.</p>
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-blue-500 transition duration-200">{content[currentLanguage].contact}</a>
                </div>
            </div>
        </footer>
    );
}
