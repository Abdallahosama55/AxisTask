import React from 'react';

function Footer() {
  return (
    <footer className="bg-green-100 py-4 text-center border-t border-[1px]">
      <p className="text-gray-800">© {new Date().getFullYear()} Abdallah Osama. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
