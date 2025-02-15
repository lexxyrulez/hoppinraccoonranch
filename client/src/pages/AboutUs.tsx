import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useLocation } from 'wouter';

const AboutUs: React.FC = () => {
  const [location] = useLocation();
  const pageTitle = location.replace('/', '').toUpperCase() || 'HOME';

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="flex justify-center items-center h-screen bg-gray-100"
    >
      <Card className="w-96 shadow-xl rounded-2xl bg-white">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-gray-800">
            {pageTitle} PAGE
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center text-gray-600">
          <p>Welcome to the {pageTitle.toLowerCase()} page.</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AboutUs;
