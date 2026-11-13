import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-400 rounded-full filter blur-3xl"></div>
        </div>

        {/* Use Navbar component */}
        <Navbar />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center">
            {/* Badge */}
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
              
            </span>
            
            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
              SmartSan
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                IoT Based Hygiene Monitoring System
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Revolutionizing public sanitation with AI-powered sensors, 
              real-time monitoring, and automated cleaning solutions.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/dashboard" 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                View Live Dashboard →
              </Link>
              <Link 
                to="/future" 
                className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl shadow-lg hover:shadow-xl border-2 border-gray-200 transform hover:-translate-y-1 transition-all duration-300"
              >
                Explore Future Scope
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Statement Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Problem We're Solving
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Public toilets in India face critical hygiene challenges daily
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Problem Card 1 */}
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">😷</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Unhygienic Conditions</h3>
              <p className="text-gray-600">
                70% of public toilets in India are reported as unclean, leading to disease spread and public avoidance.
              </p>
            </div>

            {/* Problem Card 2 */}
            <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-100">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">💧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Water Wastage</h3>
              <p className="text-gray-600">
                Manual flushing leads to 40% water wastage. Our system uses sensor-based automated flushing.
              </p>
            </div>

            {/* Problem Card 3 */}
            <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">👨‍🔧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Irregular Maintenance</h3>
              <p className="text-gray-600">
                Fixed-interval cleaning wastes resources. We clean based on actual odor levels and usage.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Overview */}
      <div className="bg-gradient-to-br from-blue-600 to-green-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Smart Solution
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              IoT-powered automation for smarter sanitation
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">📡</div>
              <h3 className="text-xl font-semibold text-white mb-2">Real-time Monitoring</h3>
              <p className="text-blue-100">ESP32 sensors track odor, occupancy & water levels 24/7</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-2">Auto Cleaning</h3>
              <p className="text-blue-100">Automatic flush when odor exceeds threshold & toilet vacant</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-semibold text-white mb-2">Cloud Dashboard</h3>
              <p className="text-blue-100">Remote monitoring via React + Firebase web interface</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-2">Analytics</h3>
              <p className="text-blue-100">Usage patterns & predictive maintenance insights</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">Smart Alerts</div>
              <div className="text-gray-600">Real-Time Maintenance Alerts</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">5</div>
              <div className="text-gray-600">Scalable Rooms</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">40%</div>
              <div className="text-gray-600">Water Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">24/7</div>
              <div className="text-gray-600">Automated Monitoring</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">SmartSan</div>
            <p className="text-gray-400 mb-6">Building smarter, cleaner communities through IoT innovation</p>
            <div className="text-sm text-gray-500">
              © 2026 SmartSan Ideathon Project. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;