import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="md:flex justify-between items-start gap-8">

          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-600 text-white flex items-center justify-center rounded-md font-bold">
                GO
              </div>
              <div>
                <div className="font-semibold">GarmentsTracker</div>
                <div className="text-sm text-gray-500">Order & Production System</div>
              </div>
            </div>

            <p className="text-gray-600 mt-4 text-sm">
              A smart and simple tracking dashboard for small garment factories.
            </p>

            <p className="text-xs text-gray-400 mt-4">
              © {new Date().getFullYear()} GarmentsTracker. All rights reserved.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6 md:mt-0">
            <div>
              <h4 className="font-semibold">Useful Links</h4>
              <ul className="mt-2 text-sm text-gray-700 space-y-2">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">All-Products</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">Company</h4>
              <ul className="mt-2 text-sm text-gray-700 space-y-2">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">Contact</h4>
              <p className="text-sm text-gray-600 mt-2">support@garmentstracker.com</p>
              <p className="text-sm text-gray-600">+880 1X-XXXX-XXXX</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
