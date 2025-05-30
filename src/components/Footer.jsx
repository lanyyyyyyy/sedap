import { AiOutlineInstagram } from "react-icons/ai"; 

export default function Footer() {
    return (
        // Footer
        <div id="sidebar-footer" className="mt-auto justify-items-center">
            <span id="contact-person" className="font-bold text-gray-400">+62 81234567892</span>
            <h4><a href="https://www.instagram.com/" className="font-bold text-gray-400"><AiOutlineInstagram />Sedap</a></h4>
            <span id="footer-brand" className="font-bold text-gray-400">Sedap Restaurant Admin Dashboard</span>
            <p id="footer-copyright" className="font-light text-gray-400">&copy; 2025 All Right Reserved</p>
        </div>
    );
}
