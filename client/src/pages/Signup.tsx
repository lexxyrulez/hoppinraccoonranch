import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";

const Signup: React.FC = () => {
    const [location] = useLocation();
    const pageTitle = location.replace("/", "").toUpperCase() || "HOME";

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await fetch("http://localhost:8001/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.message || "Signup failed");

            alert("Signup successful! Redirecting...");
            window.location.href = "/login"; // Redirect after signup
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unknown error occurred.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center w-full">
            <section className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: "url('/assets/img/signup-bg.jpg')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-white text-3xl md:text-5xl font-bold">{pageTitle}</h1>
                </div>
            </section>

            <section className="container mx-auto px-6 py-12">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-md mx-auto">
                    <Card className="p-6 bg-white shadow-md rounded-lg">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-gray-800 text-center">Sign Up</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {error && <p className="text-red-500 text-sm">{error}</p>}
                                
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded-md"
                                    required
                                />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded-md"
                                    required
                                />

                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded-md"
                                    required
                                />

                                <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700">
                                    {loading ? "Signing up..." : "Sign Up"}
                                </button>
                            </form>
                        </CardContent>
                    </Card>
                </motion.div>
            </section>
        </div>
    );
};

export default Signup;
