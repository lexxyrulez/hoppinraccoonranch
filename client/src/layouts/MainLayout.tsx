import React from "react";
import { Link } from "wouter"; // Ensure Wouter is properly installed
import { Menu, Bell, Settings, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* 🟢 Top Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* 🟢 Logo & Title */}
          <div className="flex items-center gap-2">
            <img src="/img/logoracoon.jpg" alt="Hop Icon" className="w-8 h-8" />
            <h2 className="text-lg font-bold">Hoppin Raccoon</h2>
          </div>

          {/* 🟢 Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="px-3 py-2 hover:bg-gray-200 rounded-md">Home</Link>
            <Link href="/products" className="px-3 py-2 hover:bg-gray-200 rounded-md">Our Products</Link>
            <Link href="/contact-us" className="px-3 py-2 hover:bg-gray-200 rounded-md">Contact Us</Link>
            <Link href="/shop" className="px-3 py-2 hover:bg-gray-200 rounded-md">Gallery</Link>
            <Link href="/faqs" className="px-3 py-2 hover:bg-gray-200 rounded-md">FAQs</Link>
            <Link href="/login" className="px-3 py-2 hover:bg-gray-200 rounded-md">Login</Link>
            <Link href="/signup" className="px-3 py-2 hover:bg-gray-200 rounded-md">Signup</Link>
          </nav>

          {/* 🟢 Icons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 hover:bg-gray-200 rounded-full">
              <Bell className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-200 rounded-full">
              <Settings className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-200 rounded-full">
              <User className="h-5 w-5" />
            </button>
          </div>

          {/* 🟢 Mobile Menu (Hamburger) */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger className="p-2">
                <Menu className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[260px] sm:w-[300px] p-4 bg-white">
                {/* 🟢 Sidebar Content */}
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-2">
                    <img src="/img/logoracoon.jpg" alt="Hop Icon" className="w-8 h-8" />
                    <h2 className="text-lg font-bold">Hoppin Raccoon</h2>
                  </div>

                  {/* Sidebar Navigation */}
                  <nav className="flex flex-col gap-4">
                    <Link href="/" className="px-3 py-2 hover:bg-gray-200 rounded-md">Home</Link>
                    <Link href="/products" className="px-3 py-2 hover:bg-gray-200 rounded-md">Our Products</Link>
                    <Link href="/contact-us" className="px-3 py-2 hover:bg-gray-200 rounded-md">Contact Us</Link>
                    <Link href="/shop" className="px-3 py-2 hover:bg-gray-200 rounded-md">Gallery</Link>
                    <Link href="/faqs" className="px-3 py-2 hover:bg-gray-200 rounded-md">FAQs</Link>
                    <Link href="/login" className="px-3 py-2 hover:bg-gray-200 rounded-md">Login</Link>
                    <Link href="/signup" className="px-3 py-2 hover:bg-gray-200 rounded-md">Signup</Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* 🟢 Main Content */}
      <main className="flex-1 p-6 mt-16">{children}</main>

      {/* 🟢 Footer */}
      <footer id="footer" className="footer bg-[#4CAF50] text-white py-10">

<div className="container footer-top px-6 sm:px-12 lg:px-16">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {/* About Us Section */}
    <div className="footer-about">
      <a href="/" className="d-flex align-items-center">
        <span className="sitename">
          <img src="img/logoracoon.jpg" alt="Herbal Store Logo" width="100" height="100" />
        </span>
      </a>
      <div className="footer-contact pt-3">
        <p>123 Herb St.,</p>
        <p>Calfornia, US, 95823</p>
        <p className="mt-3"><strong>Phone:</strong> <span> +1 555-555-5555</span></p>
        <p><strong>Email:</strong> <span> info@hoppinracoon.com</span></p>
      </div>
    </div>

    {/* Useful Links Section */}
    <div className="footer-links">
      <h4>Useful Links</h4>
      <ul>
        <li><i className="bi bi-chevron-right"></i> <a href="/">Home</a></li>
        <li><i className="bi bi-chevron-right"></i> <a href="/about-us">About Us</a></li>
        <li><i className="bi bi-chevron-right"></i> <a href="/contact-us">Contact Us</a></li>
        <li><i className="bi bi-chevron-right"></i> <a href="/faqs">FAQ</a></li>
        <li><i className="bi bi-chevron-right"></i> <a href="/shop">Shop</a></li>
      </ul>
    </div>

    {/* Herbal Services Section */}
    <div className="footer-links">
      <h4>Our Herbal Services</h4>
      <ul>
        <li><i className="bi bi-chevron-right"></i> <a href="/consultation">Herbal Consultations</a></li>
        <li><i className="bi bi-chevron-right"></i> <a href="/product-guide">Product Guide</a></li>
        <li><i className="bi bi-chevron-right"></i> <a href="/workshops">Herbal Workshops</a></li>
      </ul>
    </div>

    {/* Popular Herbs Section */}
    <div className="footer-links">
      <h4>Popular Herbs</h4>
      <ul>
        <li><i className="bi bi-chevron-right"></i> <a href="/product/ginger">Ginger</a></li>
        <li><i className="bi bi-chevron-right"></i> <a href="/product/peppermint">Peppermint</a></li>
        <li><i className="bi bi-chevron-right"></i> <a href="/product/lavender">Lavender</a></li>
      </ul>
    </div>
  </div>
</div>



{/* Copyright Section */}
<div className="container copyright text-center mt-4">
  <p>© <span>Copyright</span> <strong className="px-1 sitename">ValleyPay</strong> <span>All Rights Reserved</span></p>
  <div className="credits">
    Designed by <a href="https://valleypayapp.com/">ValleyPay Inc</a>
  </div>
</div>
</footer>
    </div>
  );
};

export default MainLayout;
