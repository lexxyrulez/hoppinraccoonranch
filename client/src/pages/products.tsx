import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const hopsData = [
  {
    id: 1,
    name: "Amarillo®",
    alpha: "8-11%",
    beta: "6-7%",
    totalOil: "1.5-1.9 ml/100",
    aromas: "Floral, Citrus, Pungent/Dank",
    description: "Coveted for its bold orange- or tangerine-like flavor and aroma, this variety was...",
    image: "/images/amarillo.png",
    buyLink: "/buy/amarillo",
    detailsLink: "/hops/amarillo",
  },
  {
    id: 2,
    name: "Azacca®",
    alpha: "14-16%",
    beta: "4-5.5%",
    totalOil: "1.6-2.5 ml/100",
    aromas: "Tropical/Fruit, Citrus, Piney/Resinous",
    description: "Bred by the American Dwarf Hop Association and named for the Haitian god of...",
    image: "/images/azacca.png",
    buyLink: "/buy/azacca",
    detailsLink: "/hops/azacca",
  },
];

const HopsCatalog = () => {
  const [search, setSearch] = useState("");

  const filteredHops = hopsData.filter(hop =>
    hop.name.toLowerCase().includes(search.toLowerCase())
  );

  return (

 
 

    



<div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: "url('/assets/img/pencil.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">Our Products</h1>
        </div>
      </section>

      <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Hop Catalog</h1>
      <Input
        placeholder="Search Hop Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4"
      />
      <div className="grid md:grid-cols-3 gap-6">
        {filteredHops.map((hop) => (
          <motion.div key={hop.id} whileHover={{ scale: 1.05 }}>
            <Card className="border border-green-400">
              <CardHeader>
                <CardTitle>{hop.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p><strong>Alpha:</strong> {hop.alpha}</p>
                <p><strong>Beta:</strong> {hop.beta}</p>
                <p><strong>Total Oil:</strong> {hop.totalOil}</p>
                <p><strong>Main Aromas:</strong> {hop.aromas}</p>
                <p className="text-sm text-gray-500">{hop.description}</p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" asChild>
                    <a href={hop.buyLink}>Buy</a>
                  </Button>
                  <Button asChild>
                    <a href={hop.detailsLink}>More Details</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>

     
    </div>
   
  );
};

export default HopsCatalog;
