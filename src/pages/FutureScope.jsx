import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import {
  Brain,
  Smartphone,
  Bell,
  Zap,
  Sun,
  MapPin,
  Cloud,
  Users,
  Building2,
  LineChart,
  Shield,
  Globe
} from 'lucide-react';

const FutureScope = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Based Odor Prediction',
      description: 'Machine learning models analyze historical odor data to predict cleaning requirements proactively before threshold levels are reached.',
      impact: 'Predictive Maintenance',
      color: 'from-purple-500 to-blue-500',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Integration',
      description: 'Cross-platform mobile application for administrators to monitor restrooms remotely, receive alerts, and access real-time analytics.',
      impact: 'Remote Monitoring',
      color: 'from-blue-500 to-teal-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Bell,
      title: 'SMS & Alert Notification',
      description: 'Automated alerts via SMS or push notifications when odor levels exceed safe thresholds or water levels require attention.',
      impact: 'Real-Time Alerts',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-600'
    },
    {
      icon: Zap,
      title: 'Ammonia-Specific Sensors',
      description: 'Upgrade to ammonia-specific gas sensors for improved accuracy and reduced false readings in sanitation environments.',
      impact: 'Higher Precision',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Sun,
      title: 'Solar-Powered Operation',
      description: 'Integration of solar panels and battery backup for sustainable, energy-efficient operation in public infrastructure.',
      impact: 'Sustainable Infrastructure',
      color: 'from-yellow-500 to-amber-500',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    }
  ];

  const deploymentModels = [
    {
      icon: Building2,
      title: 'Airports',
      description: 'Multi-terminal deployment with centralized monitoring'
    },
    {
      icon: MapPin,
      title: 'Railway Stations',
      description: 'High-traffic platform installations'
    },
    {
      icon: Users,
      title: 'Shopping Malls',
      description: 'Multi-floor restroom management'
    },
    {
      icon: Globe,
      title: 'Smart Cities',
      description: 'City-wide sanitation infrastructure'
    }
  ];

  const milestones = [
    {
      phase: 'Phase 1',
      title: 'Prototype Validation',
      description: 'Core automation logic with ESP32 sensors',
      status: 'completed',
      year: '2024'
    },
    {
      phase: 'Phase 2',
      title: 'AI Integration',
      description: 'Machine learning models for predictive cleaning',
      status: 'in-progress',
      year: '2024-2025'
    },
    {
      phase: 'Phase 3',
      title: 'City-Wide Deployment',
      description: 'Scalable infrastructure for 1000+ units',
      status: 'planned',
      year: '2025-2026'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-teal-500 rounded-full"></div>
              <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 uppercase tracking-wider">
                Strategic Roadmap 2024-2026
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Future Scope & 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                Scalable Enhancements
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              The current prototype validates core automation logic using ESP32 sensors. 
              Future phases expand intelligence, deployment scale, and sustainability, 
              transforming public sanitation into a smart, connected infrastructure.
            </p>
          </div>
        </div>
      </div>

      {/* Development Milestones */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Development Roadmap</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                {/* Timeline connector */}
                {index < milestones.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-teal-200 -z-10"></div>
                )}
                <div className={`rounded-xl p-6 ${
                  milestone.status === 'completed' ? 'bg-gradient-to-br from-green-50 to-emerald-50' :
                  milestone.status === 'in-progress' ? 'bg-gradient-to-br from-blue-50 to-teal-50' :
                  'bg-gradient-to-br from-gray-50 to-gray-100'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      milestone.status === 'completed' ? 'bg-green-200 text-green-700' :
                      milestone.status === 'in-progress' ? 'bg-blue-200 text-blue-700' :
                      'bg-gray-200 text-gray-700'
                    }`}>
                      {milestone.phase}
                    </span>
                    <span className="text-sm text-gray-500">{milestone.year}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-sm text-gray-600">{milestone.description}</p>
                  <div className="mt-4 flex items-center">
                    <span className={`w-2 h-2 rounded-full mr-2 ${
                      milestone.status === 'completed' ? 'bg-green-500' :
                      milestone.status === 'in-progress' ? 'bg-blue-500 animate-pulse' :
                      'bg-gray-400'
                    }`}></span>
                    <span className="text-xs text-gray-500 capitalize">{milestone.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Cards Grid */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Core Technology Enhancements</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color}`}></div>
                
                <div className="p-8">
                  {/* Icon with background */}
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`w-8 h-8 ${feature.iconColor}`} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Impact Badge */}
                  <div className="inline-block">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${feature.color} text-white`}>
                      {feature.impact}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scalable Deployment Model */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="grid md:grid-cols-2">
            {/* Left side - Content */}
            <div className="p-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 backdrop-blur rounded-xl flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Scalable Deployment Model</h2>
              </div>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Each restroom operates as an independent IoT node with identical sensor configuration. 
                Multiple nodes connect to a centralized cloud dashboard, enabling seamless scaling from 
                single units to city-wide infrastructure.
              </p>

              {/* Architecture visualization */}
              <div className="bg-gray-800/50 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold mb-2">R1</div>
                    <span className="text-xs text-gray-400">Node 1</span>
                  </div>
                  <div className="text-gray-500 text-xl">→</div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold mb-2">R2</div>
                    <span className="text-xs text-gray-400">Node 2</span>
                  </div>
                  <div className="text-gray-500 text-xl">→</div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl flex items-center justify-center text-white font-bold mb-2 shadow-lg">
                      Cloud
                    </div>
                    <span className="text-xs text-gray-400">Dashboard</span>
                  </div>
                </div>
                <div className="text-center text-sm text-gray-400">
                  + Add unlimited nodes • Plug & Play integration
                </div>
              </div>
            </div>

            {/* Right side - Deployment locations */}
            <div className="bg-gray-800 p-10">
              <h3 className="text-lg font-semibold text-white mb-6">Ideal Deployment Locations</h3>
              <div className="grid grid-cols-2 gap-4">
                {deploymentModels.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="bg-gray-700/50 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                      <IconComponent className="w-6 h-6 text-blue-400 mb-2" />
                      <h4 className="text-white font-medium mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-400">{item.description}</p>
                    </div>
                  );
                })}
              </div>

              {/* Key Metrics */}
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">1000+</div>
                  <div className="text-xs text-gray-400">Units per city</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">99.9%</div>
                  <div className="text-xs text-gray-400">Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">40%</div>
                  <div className="text-xs text-gray-400">Cost savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Beyond */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Beyond Phase 3</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Smart Contracts</h3>
              <p className="text-sm text-gray-500">Automated maintenance billing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <LineChart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Govt Integration</h3>
              <p className="text-sm text-gray-500">Smart city dashboards</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Global Scale</h3>
              <p className="text-sm text-gray-500">Multi-country deployment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">5G Ready</h3>
              <p className="text-sm text-gray-500">Ultra-low latency</p>
            </div>
          </div>
        </div>

        {/* Back to Dashboard Link */}
        <div className="flex justify-between items-center">
          <Link
            to="/dashboard"
            className="inline-flex items-center px-6 py-3 bg-white text-gray-700 font-medium rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-200"
          >
            ← Back to Dashboard
          </Link>
          <div className="text-sm text-gray-500">
            Strategic Roadmap v2.0 • Last updated 2026
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureScope;