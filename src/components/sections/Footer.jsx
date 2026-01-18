import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-6 text-center text-gray-400 text-sm border-t border-white/10">
      <p>
        {/* 👇 This gets the current year automatically */}
        &copy; {new Date().getFullYear()} Wenard Roy Barrera. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;