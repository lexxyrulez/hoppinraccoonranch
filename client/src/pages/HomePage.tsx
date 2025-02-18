import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';


const HomePage: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section
        id="hero"
        className="hero section dark-background relative h-screen flex items-center justify-center text-white text-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(/img/herb.jpg)' }} // Image from public folder
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        <div className="container relative z-10 flex flex-col justify-center text-center">
          <a href="/" className="d-flex align-items-center justify-center">
            <span className="sitename">
              <img
                src="img/logoracoon.jpg"
                alt="hops Store Logo"
                className="w-24 h-24 animate-bounce-slow"
              />
            </span>
          </a>

          <h2 className="text-4xl font-bold text-shadow-md" data-aos="fade-up" data-aos-delay="100">
            Welcome to Our hops Store
          </h2>
          <p className="text-xl mt-4 text-shadow-md" data-aos="fade-up" data-aos-delay="200">
            Explore our wide range of high-quality herbs and natural products.
          </p>
          <div className="mt-6">
            <a href="#products" className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full text-lg font-semibold">
              Buy Now
            </a>
          </div>

          {/* Newsletter Section */}
          <div className="mt-8" data-aos="fade-up" data-aos-delay="300">
            <form className="flex justify-center items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-full text-black"
                required
              />
              <button type="submit" className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-r-full text-white">Subscribe</button>
            </form>
          </div>
        </div>
      </section>




      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-green-700">About Hoppin Raccoon Ranch</h2>
          <p className="mt-4 text-lg text-gray-700">We are dedicated to growing premium, organic hops for craft breweries and home brewers. Our commitment to sustainability and quality ensures the best brewing experience.</p>
          <img src="img/2.jpg" alt="Hop Field" className="mt-6 w-full h-80 object-cover rounded-lg" />
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-white text-center">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-green-700">Our Hop Varieties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {["Cascade", "Citra", "Mosaic"].map((hop) => (
              <Card key={hop} className="shadow-lg">
                <CardHeader>
                  <img src={`/img/1.jpg`} alt={`${hop} Hops`} className="w-full h-48 object-cover rounded-t-lg" />
                </CardHeader>
                <CardContent>
                  <CardTitle>{hop} Hops</CardTitle>
                  <p className="mt-2 text-gray-600">Perfect for craft brewing with unique aroma and taste.</p>
                  <Link href="/shop" className="mt-4 inline-block px-4 py-2 bg-green-600 text-white rounded-md">Buy Now</Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-green-700 text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {["Organic & Sustainable", "Premium Quality", "Fast Shipping"].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white text-green-700 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-semibold">{feature}</h3>
                <p className="mt-2 text-gray-600">High standards to ensure the best brewing experience.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Newsletter Section */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-green-700">Stay Updated</h2>
          <p className="mt-4 text-lg text-gray-700">Subscribe to get the latest hop harvest updates and special deals.</p>
          <form className="mt-6 flex justify-center">
            <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-l-full text-black border border-gray-300 w-64" required />
            <button type="submit" className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-r-full">Subscribe</button>
          </form>
        </div>
      </section>




    </div>
  );
}

export default HomePage;
