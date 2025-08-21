export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 text-center space-y-6">
      {/* Links */}
      <div className="space-x-6">
        <a href="#" className="hover:text-blue-400">About</a>
        <a href="#" className="hover:text-blue-400">Contact</a>
        <a href="#" className="hover:text-blue-400">Support</a>
      </div>

      {/* Social Icons (optional) */}
      <div className="flex justify-center space-x-6">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-400">
        © 2025 YourBrand. All rights reserved.
      </p>
    </footer>
  );
}
