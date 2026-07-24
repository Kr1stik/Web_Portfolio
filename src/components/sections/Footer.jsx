import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] py-8 text-center text-xs text-neutral-500 font-sans border-t border-white/5 pb-24">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>
          &copy; {new Date().getFullYear()} Wenard Roy Barrera. Designed &amp; Developed with React &amp; Tailwind CSS.
        </p>

        <span className="text-neutral-600 text-[11px]">
          Bacolod City, Philippines
        </span>
      </div>
    </footer>
  );
};

export default Footer;