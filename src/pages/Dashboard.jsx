import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';

const Dashboard = () => {
  // Realistic sensor data for Room 1
  const [room1Data, setRoom1Data] = useState({
    odor: 320,
    odorHistory: [285, 295, 310, 325, 340, 335, 320, 305, 315, 320],
    occupancy: false,
    waterLevel: 'optimal',
    cleaningStatus: 'standby',
    lastCleaned: '2024-03-25T14:30:00Z',
    temperature: 24.5,
    humidity: 62
  });

  // Simulate real-time data updates (every 10 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setRoom1Data(prev => {
        // Generate realistic odor fluctuation (between 280-360 ppm)
        const newOdor = Math.floor(Math.random() * (360 - 280 + 1) + 280);
        
        // Update history (keep last 10 readings)
        const newHistory = [...prev.odorHistory.slice(-9), newOdor];
        
        return {
          ...prev,
          odor: newOdor,
          odorHistory: newHistory,
          occupancy: Math.random() > 0.8, // 20% chance of occupancy
          waterLevel: Math.random() > 0.95 ? 'low' : 'optimal', // 5% chance of low water
          cleaningStatus: Math.random() > 0.9 ? 'active' : 'standby', // 10% chance of cleaning
          temperature: 24.5 + (Math.random() - 0.5),
          humidity: 62 + (Math.random() - 0.5) * 4
        };
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const rooms = [
    {
      id: 1,
      name: 'Restroom Unit 01',
      status: 'operational',
      data: room1Data,
      link: '/room/1'
    },
    {
      id: 2,
      name: 'Restroom Unit 02',
      status: 'planned',
      phase: '2',
      timeline: 'Q3 2024'
    },
    {
      id: 3,
      name: 'Restroom Unit 03',
      status: 'planned',
      phase: '2',
      timeline: 'Q3 2024'
    },
    {
      id: 4,
      name: 'Restroom Unit 04',
      status: 'planned',
      phase: '3',
      timeline: 'Q4 2024'
    },
    {
      id: 5,
      name: 'Restroom Unit 05',
      status: 'planned',
      phase: '3',
      timeline: 'Q4 2024'
    }
  ];

  const getOdorStatusColor = (value) => {
    if (value < 300) return 'from-green-500 to-teal-500';
    if (value < 340) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-pink-500';
  };

  const getOdorBadge = (value) => {
    if (value < 300) return { text: 'Good', color: 'bg-green-100 text-green-700' };
    if (value < 340) return { text: 'Moderate', color: 'bg-yellow-100 text-yellow-700' };
    return { text: 'Elevated', color: 'bg-red-100 text-red-700' };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Facility Monitoring Dashboard</h1>
              <p className="text-sm text-gray-500 mt-1">Centralized Hygiene Monitoring System</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-xs text-gray-500">Live Updates</span>
              </div>
              <div className="text-xs text-gray-400">
                {new Date().toLocaleTimeString()}
              </div>
            </div>
          </div>

          {/* System Stats */}
          <div className="grid grid-cols-4 gap-4 mt-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4">
              <div className="text-xs text-blue-600 font-medium uppercase tracking-wider">Total Units</div>
              <div className="text-2xl font-bold text-gray-900">5</div>
              <div className="text-xs text-gray-500 mt-1">Smart Restrooms</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-4">
              <div className="text-xs text-green-600 font-medium uppercase tracking-wider">Operational</div>
              <div className="text-2xl font-bold text-gray-900">1</div>
              <div className="text-xs text-gray-500 mt-1">Prototype Active</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4">
              <div className="text-xs text-purple-600 font-medium uppercase tracking-wider">Deployment Phases</div>
              <div className="text-2xl font-bold text-gray-900">2</div>
              <div className="text-xs text-gray-500 mt-1">Phases 2 & 3</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4">
              <div className="text-xs text-amber-600 font-medium uppercase tracking-wider">Coverage</div>
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-xs text-gray-500 mt-1">Scalable Architecture</div>
            </div>
          </div>
        </div>
      </div>

      {/* Rooms Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {rooms.map((room) => (
            <div key={room.id} className="group h-full">
              {room.status === 'operational' ? (
                <Link to={room.link} className="block h-full">
                  <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-blue-500 h-full">
                    {/* Active Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    {/* Header with Status */}
                    <div className={`bg-gradient-to-r ${getOdorStatusColor(room.data.odor)} px-5 py-4`}>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-white">{room.name}</h3>
                          <div className="flex items-center mt-1 space-x-2">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-xs text-white/90">Operational</span>
                          </div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1">
                          <span className="text-xs font-medium text-white">Live</span>
                        </div>
                      </div>
                    </div>

                    {/* Sensor Data */}
                    <div className="p-5 space-y-4">
                      {/* Odor Level */}
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs text-gray-500">Odor Concentration</span>
                          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${getOdorBadge(room.data.odor).color}`}>
                            {getOdorBadge(room.data.odor).text}
                          </span>
                        </div>
                        <div className="flex items-baseline space-x-1">
                          <span className="text-2xl font-bold text-gray-900">{room.data.odor}</span>
                          <span className="text-xs text-gray-500">ppm</span>
                        </div>
                        {/* Mini Trend Indicator */}
                        <div className="flex items-center space-x-1 mt-1">
                          <div className="flex space-x-0.5">
                            {room.data.odorHistory.slice(-5).map((value, i) => (
                              <div
                                key={i}
                                className="w-1 rounded-full"
                                style={{
                                  height: `${(value / 400) * 20}px`,
                                  background: value < 300 ? '#10b981' : value < 340 ? '#f59e0b' : '#ef4444'
                                }}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Occupancy & Water Grid */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xs text-gray-500 mb-1">Occupancy</div>
                          <div className="flex items-center space-x-2">
                            <span className={`text-sm font-semibold ${room.data.occupancy ? 'text-amber-600' : 'text-green-600'}`}>
                              {room.data.occupancy ? 'Occupied' : 'Vacant'}
                            </span>
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xs text-gray-500 mb-1">Water Level</div>
                          <div className="flex items-center space-x-2">
                            <span className={`text-sm font-semibold ${room.data.waterLevel === 'optimal' ? 'text-green-600' : 'text-red-600'}`}>
                              {room.data.waterLevel === 'optimal' ? 'Optimal' : 'Low'}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Last Cleaned */}
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Last Cleaned:</span>
                        <span className="font-medium text-gray-700">15 min ago</span>
                      </div>

                      {/* View Details */}
                      <div className="pt-3 border-t border-gray-100">
                        <span className="text-sm text-blue-600 font-medium flex items-center justify-center group-hover:text-blue-700">
                          View Detailed Analytics
                          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                <Link to={`/room/${room.id}`} className="block h-full">
                  <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-blue-500 h-full">
                    
                    {/* Background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    {/* Header - Same gradient style but grayed out */}
                    <div className="bg-gradient-to-r from-gray-600 to-gray-500 px-5 py-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-white">{room.name}</h3>
                          <div className="flex items-center mt-1 space-x-2">
                            <span className="relative flex h-2 w-2">
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-300"></span>
                            </span>
                            <span className="text-xs text-white/80">Planned Deployment</span>
                          </div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1">
                          <span className="text-xs font-medium text-white">Phase {room.phase}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content - Same structure as Room 1 */}
                    <div className="p-5 space-y-4">
                      {/* Odor Level - Placeholder */}
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs text-gray-500">Odor Concentration</span>
                          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                            Pending
                          </span>
                        </div>
                        <div className="flex items-baseline space-x-1">
                          <span className="text-2xl font-bold text-gray-400">---</span>
                          <span className="text-xs text-gray-400">ppm</span>
                        </div>
                        {/* Mini Trend Indicator - Grayed out */}
                        <div className="flex items-center space-x-1 mt-1">
                          <div className="flex space-x-0.5">
                            {[1,2,3,4,5].map((_, i) => (
                              <div
                                key={i}
                                className="w-1 bg-gray-300 rounded-full"
                                style={{ height: '12px' }}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Occupancy & Water Grid - Same structure */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xs text-gray-500 mb-1">Occupancy</div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-semibold text-gray-500">
                              --
                            </span>
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xs text-gray-500 mb-1">Water Level</div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-semibold text-gray-500">
                              --
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Timeline Info - Replaces cleaning status */}
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Expected:</span>
                        <span className="font-medium text-gray-700">{room.timeline}</span>
                      </div>

                      {/* View Details - Same as Room 1 */}
                      <div className="pt-3 border-t border-gray-100">
                        <span className="text-sm text-blue-600 font-medium flex items-center justify-center group-hover:text-blue-700">
                          View Details
                          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Architecture Overview */}
        <div className="mt-12 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-700 rounded-2xl shadow-xl overflow-hidden">
          <div className="px-8 py-10 text-white">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold">Scalable Architecture</h2>
            </div>
            <p className="text-blue-100 text-sm max-w-2xl">
              Each restroom unit operates as an independent IoT node with identical sensor configuration. 
              Deployment phases allow seamless integration of additional units without infrastructure changes.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-white/10 backdrop-blur rounded-lg p-3">
                <div className="text-2xl font-bold">01</div>
                <div className="text-xs text-blue-200">Prototype Active</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-3">
                <div className="text-2xl font-bold">04</div>
                <div className="text-xs text-blue-200">Planned Units</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-3">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-xs text-blue-200">Scalable</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;