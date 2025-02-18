import React, { useState } from "react";
import { Link } from "wouter"; // Ensure Wouter is properly installed
import { Menu, Bell, Settings, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLinkClick = () => {
    setIsSidebarOpen(false); // Close sidebar on menu item click
  };

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
            <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
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
                    <Link href="/" className="px-3 py-2 hover:bg-gray-200 rounded-md" onClick={handleLinkClick}>Home</Link>
                    <Link href="/products" className="px-3 py-2 hover:bg-gray-200 rounded-md" onClick={handleLinkClick}>Our Products</Link>
                    <Link href="/contact-us" className="px-3 py-2 hover:bg-gray-200 rounded-md" onClick={handleLinkClick}>Contact Us</Link>
                    <Link href="/shop" className="px-3 py-2 hover:bg-gray-200 rounded-md" onClick={handleLinkClick}>Gallery</Link>
                    <Link href="/faqs" className="px-3 py-2 hover:bg-gray-200 rounded-md" onClick={handleLinkClick}>FAQs</Link>
                    <Link href="/login" className="px-3 py-2 hover:bg-gray-200 rounded-md" onClick={handleLinkClick}>Login</Link>
                    <Link href="/signup" className="px-3 py-2 hover:bg-gray-200 rounded-md" onClick={handleLinkClick}>Signup</Link>
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
          {/* Footer sections */}
        </div>
        {/* Copyright section */}
      </footer>
    </div>
  );
};

export default MainLayout;
