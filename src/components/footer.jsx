import React from "react";

function Footer() {
  return (
    <footer className="absolute bottom-0 w-full bg-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} LokerIn</p>
      </div>
    </footer>
  );
}

export default Footer;
