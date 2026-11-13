import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area
} from 'recharts';

const RoomDashboard = () => {
  const { id } = useParams();
  const roomNumber = parseInt(id);

  // Realistic sensor data for Room 1
  const [roomData, setRoomData] = useState({
    odor: 320,
    odorHistory: [
      { time: '10:00', value: 285 },
      { time: '10:05', value: 295 },
      { time: '10:10', value: 310 },
      { time: '10:15', value: 325 },
      { time: '10:20', value: 340 },
      { time: '10:25', value: 335 },
      { time: '10:30', value: 320 },
      { time: '10:35', value: 305 },
      { time: '10:40', value: 315 },
      { time: '10:45', value: 320 }
    ],
    occupancy: false,
    waterLevel: 'optimal',
    cleaningStatus: 'standby',
    lastCleaned: '2024-03-25T14:30:00Z',
    temperature: 24.5,
    humidity: 62,
    pressure: 1013,
    airflow: 'normal'
  });

  const [activityLog, setActivityLog] = useState([
    { time: '10:45 AM', event: 'Auto-cleaning completed', status: 'success', odor: 320 },
    { time: '10:30 AM', event: 'User exited', status: 'info', odor: 335 },
    { time: '10:28 AM', event: 'User entered', status: 'info', odor: 310 },
    { time: '10:15 AM', event: 'Odor threshold exceeded', status: 'warning', odor: 340 },
    { time: '10:00 AM', event: 'System check', status: 'success', odor: 285 },
    { time: '09:45 AM', event: 'Auto-cleaning triggered', status: 'success', odor: 325 },
    { time: '09:30 AM', event: 'Water level check', status: 'normal', odor: 290 }
  ]);

  // Simulate real-time updates for Room 1 only
  useEffect(() => {
    if (roomNumber !== 1) return;

    const interval = setInterval(() => {
      setRoomData(prev => {
        const newOdor = Math.floor(Math.random() * (360 - 280 + 1) + 280);
        const newTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        
        // Update history
        const newHistory = [...prev.odorHistory.slice(-9), { time: newTime, value: newOdor }];
        
        // Add to activity log occasionally
        if (Math.random() > 0.7) {
          const newEvent = {
            time: newTime,
            event: newOdor > 340 ? 'Odor threshold exceeded' : 'Auto-cleaning completed',
            status: newOdor > 340 ? 'warning' : 'success',
            odor: newOdor
          };
          setActivityLog(prev => [newEvent, ...prev.slice(0, 9)]);
        }

        return {
          ...prev,
          odor: newOdor,
          odorHistory: newHistory,
          occupancy: Math.random() > 0.8,
          waterLevel: Math.random() > 0.95 ? 'low' : 'optimal',
          cleaningStatus: Math.random() > 0.9 ? 'active' : 'standby',
          temperature: 24.5 + (Math.random() - 0.5),
          humidity: 62 + (Math.random() - 0.5) * 4
        };
      });
    }, 8000);

    return () => clearInterval(interval);
  }, [roomNumber]);

  // If room is not 1, show professional prototype message
  if (roomNumber !== 1) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left side - Architecture illustration */}
              <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-teal-700 p-12 text-white">
                <div className="h-full flex flex-col justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Scalable Architecture</h2>
                  <p className="text-blue-100 text-lg mb-6">
                    Room {roomNumber} - Planned Deployment
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-blue-100">Identical IoT Module Configuration</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-blue-100">Plug & Play Integration Ready</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-blue-100">Cloud-Connected Architecture</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Message */}
              <div className="p-12">
                <div className="mb-8">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-50 to-teal-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">
                    Phase {roomNumber === 2 || roomNumber === 3 ? '2' : '3'} Deployment
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Module Ready for Integration
                </h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  This module represents scalable deployment capability. 
                  Live monitoring is currently enabled for Room 1 as part of prototype validation.
                  Additional rooms can be integrated using identical IoT modules with ESP32 sensors,
                  maintaining the same architecture and dashboard compatibility.
                </p>
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Deployment Specifications</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-500">Timeline</div>
                      <div className="font-medium text-gray-900">
                        {roomNumber === 2 || roomNumber === 3 ? 'Q3 2024' : 'Q4 2024'}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Configuration</div>
                      <div className="font-medium text-gray-900">Identical to Room 1</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Sensors</div>
                      <div className="font-medium text-gray-900">Gas + PIR + Float</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Connectivity</div>
                      <div className="font-medium text-gray-900">Wi-Fi / Cloud</div>
                    </div>
                  </div>
                </div>
                <Link
                  to="/dashboard"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  ← Back to Facility Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Room 1 Dashboard
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                to="/dashboard"
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Restroom Unit 01</h1>
                <p className="text-sm text-gray-500 mt-1">Live Monitoring Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm text-gray-600">Real-time Updates</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Status Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Odor Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
            <div className="flex justify-between items-start mb-2">
              <div className="text-sm text-gray-500 font-medium">Odor Concentration</div>
              <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                roomData.odor < 300 ? 'bg-green-100 text-green-700' :
                roomData.odor < 340 ? 'bg-yellow-100 text-yellow-700' :
                'bg-red-100 text-red-700'
              }`}>
                {roomData.odor < 300 ? 'Good' : roomData.odor < 340 ? 'Moderate' : 'Elevated'}
              </div>
            </div>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-gray-900">{roomData.odor}</span>
              <span className="ml-1 text-gray-500">ppm</span>
            </div>
            <div className="mt-2 flex items-center text-sm">
              <span className="text-gray-500">Threshold: 300 ppm</span>
              <span className="mx-2 text-gray-300">|</span>
              <span className={roomData.odor > 300 ? 'text-orange-500' : 'text-green-500'}>
                {roomData.odor > 300 ? '↑ Above normal' : '↓ Normal'}
              </span>
            </div>
          </div>

          {/* Occupancy Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
            <div className="text-sm text-gray-500 font-medium mb-2">Occupancy Status</div>
            <div className="flex items-center">
              <span className={`text-3xl font-bold ${roomData.occupancy ? 'text-amber-600' : 'text-green-600'}`}>
                {roomData.occupancy ? 'Occupied' : 'Vacant'}
              </span>
            </div>
            <div className="mt-2 flex items-center text-sm">
              <span className="text-gray-500">Last change: </span>
              <span className="ml-1 text-gray-700">2 min ago</span>
            </div>
            <div className="mt-1 text-xs text-gray-400">
              Duration: {roomData.occupancy ? '5 min' : '15 min'}
            </div>
          </div>

          {/* Water Level Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-teal-500">
            <div className="text-sm text-gray-500 font-medium mb-2">Water Level</div>
            <div className="flex items-center">
              <span className={`text-3xl font-bold ${roomData.waterLevel === 'optimal' ? 'text-teal-600' : 'text-red-600'}`}>
                {roomData.waterLevel === 'optimal' ? 'Optimal' : 'Low'}
              </span>
            </div>
            <div className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${roomData.waterLevel === 'optimal' ? 'bg-teal-500' : 'bg-red-500'}`}
                  style={{ width: roomData.waterLevel === 'optimal' ? '85%' : '25%' }}
                ></div>
              </div>
            </div>
            <div className="mt-1 text-xs text-gray-400">
              Capacity: 85%
            </div>
          </div>

          {/* Cleaning Status Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
            <div className="text-sm text-gray-500 font-medium mb-2">Cleaning System</div>
            <div className="flex items-center">
              <span className={`text-3xl font-bold ${roomData.cleaningStatus === 'active' ? 'text-purple-600' : 'text-gray-600'}`}>
                {roomData.cleaningStatus === 'active' ? 'Active' : 'Standby'}
              </span>
              {roomData.cleaningStatus === 'active' && (
                <span className="ml-2 relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                </span>
              )}
            </div>
            <div className="mt-2 text-sm">
              <span className="text-gray-500">Last cleaned: </span>
              <span className="text-gray-700">15 min ago</span>
            </div>
            <div className="mt-1 text-xs text-gray-400">
              Next cycle: On demand
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Main Odor Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Odor Trend - Last 60 Minutes</h3>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
                  <span className="text-xs text-gray-500">Good</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-1"></div>
                  <span className="text-xs text-gray-500">Moderate</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
                  <span className="text-xs text-gray-500">Elevated</span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={roomData.odorHistory}>
                <defs>
                  <linearGradient id="odorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="time" stroke="#6b7280" />
                <YAxis stroke="#6b7280" domain={[250, 400]} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    borderRadius: '0.5rem',
                    border: '1px solid #e5e7eb',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  fill="url(#odorGradient)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Environmental Stats */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Environmental Conditions</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🌡️</span>
                  <div>
                    <div className="text-sm text-gray-500">Temperature</div>
                    <div className="text-lg font-semibold text-gray-900">{roomData.temperature.toFixed(1)}°C</div>
                  </div>
                </div>
                <span className="text-xs text-gray-400">Normal</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">💧</span>
                  <div>
                    <div className="text-sm text-gray-500">Humidity</div>
                    <div className="text-lg font-semibold text-gray-900">{roomData.humidity.toFixed(1)}%</div>
                  </div>
                </div>
                <span className="text-xs text-gray-400">Optimal</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🔄</span>
                  <div>
                    <div className="text-sm text-gray-500">Airflow</div>
                    <div className="text-lg font-semibold text-gray-900 capitalize">{roomData.airflow}</div>
                  </div>
                </div>
                <span className="text-xs text-gray-400">Active</span>
              </div>
            </div>

            {/* Threshold Indicator */}
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl">
              <div className="text-sm font-medium text-gray-700 mb-2">Cleaning Threshold</div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Current: {roomData.odor} ppm</span>
                <span className="text-xs text-gray-500">Threshold: 300 ppm</span>
              </div>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                  <div 
                    style={{ width: `${(roomData.odor / 400) * 100}%` }}
                    className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                      roomData.odor < 300 ? 'bg-green-500' :
                      roomData.odor < 340 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Log */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Activity Log</h3>
            <span className="text-xs text-gray-400">Last 10 events</span>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Odor (ppm)</th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody>
                {activityLog.map((log, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-700">{log.time}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">{log.event}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">{log.odor}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
                        ${log.status === 'success' ? 'bg-green-100 text-green-700' : 
                          log.status === 'warning' ? 'bg-yellow-100 text-yellow-700' : 
                          log.status === 'info' ? 'bg-blue-100 text-blue-700' : 
                          'bg-gray-100 text-gray-700'}`}>
                        {log.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDashboard;