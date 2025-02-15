import React from "react";
import { useLocation } from "wouter";

const Dashboard: React.FC = () => {
    const [location, setLocation] = useLocation();
    const pageTitle = "DASHBOARD";

    const handleLogout = () => {
        localStorage.removeItem("token");
        alert("You have been logged out.");
        setLocation("/login"); // Redirect to login
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Dashboard</h2>
                <nav className="space-y-4">
                    <a href="#" className="block p-3 rounded-lg hover:bg-gray-200">🏠 Home</a>
                    <a href="#" className="block p-3 rounded-lg hover:bg-gray-200">👤 Profile</a>
                    <a href="#" className="block p-3 rounded-lg hover:bg-gray-200">⚙️ Settings</a>
                    <button 
                        onClick={handleLogout} 
                        className="mt-6 w-full text-left p-3 text-red-600 rounded-lg hover:bg-red-100"
                    >
                        🚪 Logout
                    </button>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-10">
                {/* Navbar */}
                <header className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold">{pageTitle}</h1>
                    <button 
                        onClick={handleLogout} 
                        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                    >
                        Logout
                    </button>
                </header>

                {/* Dashboard Content */}
                <div className="mt-8">
                    <h2 className="text-lg font-semibold">Welcome to Your Dashboard</h2>
                    <p className="text-gray-600 mt-2">This is where you can manage your account and view important data.</p>

                    {/* Sample Data */}
                    <div className="mt-6 grid grid-cols-3 gap-6">
                        <div className="p-6 bg-white shadow-md rounded-lg">
                            <h3 className="text-lg font-semibold">📦 Orders</h3>
                            <p className="text-2xl font-bold mt-2">120</p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-lg">
                            <h3 className="text-lg font-semibold">💰 Revenue</h3>
                            <p className="text-2xl font-bold mt-2">$5,200</p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-lg">
                            <h3 className="text-lg font-semibold">🛒 Products</h3>
                            <p className="text-2xl font-bold mt-2">24</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
