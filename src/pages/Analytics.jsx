import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';

const Analytics = () => {
  // Simulated analytics data
  const [analyticsData, setAnalyticsData] = useState({
    dailyUsage: [65, 72, 58, 84, 92, 78, 65],
    avgOdor: [285, 295, 310, 325, 305, 290, 280],
    cleaningEvents: [8, 12, 10, 15, 18, 14, 9],
    peakHours: [
      { hour: '8 AM', count: 45 },
      { hour: '10 AM', count: 62 },
      { hour: '12 PM', count: 78 },
      { hour: '2 PM', count: 71 },
      { hour: '4 PM', count: 58 },
      { hour: '6 PM', count: 42 },
      { hour: '8 PM', count: 28 }
    ],
    odorDistribution: [
      { name: 'Good (<300 ppm)', value: 45, color: '#10b981' },
      { name: 'Moderate (300-340 ppm)', value: 35, color: '#f59e0b' },
      { name: 'Elevated (>340 ppm)', value: 20, color: '#ef4444' }
    ],
    weeklyTrend: [
      { day: 'Mon', usage: 65, odor: 285, cleaning: 8 },
      { day: 'Tue', usage: 72, odor: 295, cleaning: 12 },
      { day: 'Wed', usage: 58, odor: 310, cleaning: 10 },
      { day: 'Thu', usage: 84, odor: 325, cleaning: 15 },
      { day: 'Fri', usage: 92, odor: 305, cleaning: 18 },
      { day: 'Sat', usage: 78, odor: 290, cleaning: 14 },
      { day: 'Sun', usage: 65, odor: 280, cleaning: 9 }
    ]
  });

  const [timeRange, setTimeRange] = useState('week');
  const [selectedMetric, setSelectedMetric] = useState('all');

  // Simulate data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setAnalyticsData(prev => ({
        ...prev,
        avgOdor: prev.avgOdor.map(() => Math.floor(Math.random() * (340 - 270 + 1) + 270)),
        dailyUsage: prev.dailyUsage.map(() => Math.floor(Math.random() * (95 - 55 + 1) + 55))
      }));
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  // Calculate summary statistics
  const totalUsage = analyticsData.dailyUsage.reduce((a, b) => a + b, 0);
  const avgOdorLevel = Math.round(analyticsData.avgOdor.reduce((a, b) => a + b, 0) / 7);
  const totalCleanings = analyticsData.cleaningEvents.reduce((a, b) => a + b, 0);
  const peakUsageTime = '12 PM - 2 PM';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
              <p className="text-sm text-gray-500 mt-1">Usage patterns & predictive insights</p>
            </div>
            
            {/* Time Range Selector */}
            <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setTimeRange('week')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  timeRange === 'week' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Week
              </button>
              <button
                onClick={() => setTimeRange('month')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  timeRange === 'month' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Month
              </button>
              <button
                onClick={() => setTimeRange('quarter')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  timeRange === 'quarter' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Quarter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Prototype Notice Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl shadow-lg mb-8 overflow-hidden">
          <div className="px-8 py-6 text-white">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold">Prototype Analytics</h2>
            </div>
            <p className="text-blue-100 text-lg mb-4">
              Currently demonstrating prototype-level analytics based on Room 1 data. 
              This system is designed to scale for city-wide deployment with real-time 
              analytics from multiple units.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-white/20 backdrop-blur rounded-lg text-sm">
                📊 Scalable to 1000+ units
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur rounded-lg text-sm">
                🤖 AI-powered predictions (Phase 2)
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur rounded-lg text-sm">
                📱 Mobile alerts (Phase 2)
              </span>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-sm text-gray-500 font-medium mb-1">Daily Usage</div>
                <div className="text-3xl font-bold text-gray-900">{totalUsage}</div>
                <div className="text-xs text-gray-400 mt-1">Last 7 days</div>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
            </div>
            <div className="mt-3 flex items-center text-sm">
              <span className="text-green-600 font-medium">↑ 12%</span>
              <span className="text-gray-400 ml-2">vs last week</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-teal-500">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-sm text-gray-500 font-medium mb-1">Avg Odor Level</div>
                <div className="text-3xl font-bold text-gray-900">{avgOdorLevel} ppm</div>
                <div className="text-xs text-gray-400 mt-1">Below threshold</div>
              </div>
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🌫️</span>
              </div>
            </div>
            <div className="mt-3 flex items-center text-sm">
              <span className="text-green-600 font-medium">↓ 5%</span>
              <span className="text-gray-400 ml-2">vs last week</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-sm text-gray-500 font-medium mb-1">Cleaning Events</div>
                <div className="text-3xl font-bold text-gray-900">{totalCleanings}</div>
                <div className="text-xs text-gray-400 mt-1">Auto-triggered</div>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🧹</span>
              </div>
            </div>
            <div className="mt-3 flex items-center text-sm">
              <span className="text-amber-600 font-medium">↑ 8%</span>
              <span className="text-gray-400 ml-2">usage increase</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-500">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-sm text-gray-500 font-medium mb-1">Peak Usage</div>
                <div className="text-3xl font-bold text-gray-900">{peakUsageTime}</div>
                <div className="text-xs text-gray-400 mt-1">High traffic period</div>
              </div>
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">⏰</span>
              </div>
            </div>
            <div className="mt-3 flex items-center text-sm">
              <span className="text-gray-600 font-medium">Avg 78 users</span>
              <span className="text-gray-400 ml-2">per hour</span>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          
          {/* Weekly Trend Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Weekly Usage & Odor Trend</h3>
              <div className="flex items-center space-x-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
                  <span className="text-xs text-gray-500">Usage</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-1"></div>
                  <span className="text-xs text-gray-500">Odor</span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={analyticsData.weeklyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="day" stroke="#6b7280" />
                <YAxis yAxisId="left" stroke="#6b7280" />
                <YAxis yAxisId="right" orientation="right" stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    borderRadius: '0.5rem',
                    border: '1px solid #e5e7eb',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
                <Line yAxisId="left" type="monotone" dataKey="usage" stroke="#3b82f6" strokeWidth={2} />
                <Line yAxisId="right" type="monotone" dataKey="odor" stroke="#f97316" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Peak Hours Distribution */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Peak Usage Hours</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={analyticsData.peakHours}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="hour" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    borderRadius: '0.5rem',
                    border: '1px solid #e5e7eb'
                  }}
                />
                <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]}>
                  {analyticsData.peakHours.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.count > 70 ? '#f59e0b' : '#3b82f6'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Odor Distribution Pie Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Odor Level Distribution</h3>
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={analyticsData.odorDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {analyticsData.odorDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2 ml-4">
                {analyticsData.odorDistribution.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                    <span className="text-xs text-gray-600">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cleaning Efficiency */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Cleaning Events vs Usage</h3>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={analyticsData.weeklyTrend}>
                <defs>
                  <linearGradient id="cleaningGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="day" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Area type="monotone" dataKey="cleaning" stroke="#8b5cf6" fill="url(#cleaningGradient)" />
              </AreaChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="bg-purple-50 rounded-lg p-3">
                <div className="text-xs text-purple-600">Avg per day</div>
                <div className="text-xl font-bold text-gray-900">12.5</div>
              </div>
              <div className="bg-green-50 rounded-lg p-3">
                <div className="text-xs text-green-600">Efficiency</div>
                <div className="text-xl font-bold text-gray-900">94%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Predictive Insights Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">🤖 AI-Powered Predictions (Coming in Phase 2)</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">📈</span>
                <span className="text-xs text-blue-600 font-medium">Next Week</span>
              </div>
              <div className="text-lg font-bold text-gray-900 mb-1">+15% Usage</div>
              <p className="text-sm text-gray-600">Predicted increase during festival season</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">🧹</span>
                <span className="text-xs text-purple-600 font-medium">Optimal</span>
              </div>
              <div className="text-lg font-bold text-gray-900 mb-1">Peak at 2 PM</div>
              <p className="text-sm text-gray-600">Schedule maintenance during low usage</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">💧</span>
                <span className="text-xs text-amber-600 font-medium">Alert</span>
              </div>
              <div className="text-lg font-bold text-gray-900 mb-1">Water Conservation</div>
              <p className="text-sm text-gray-600">23% savings with automated flushing</p>
            </div>
          </div>
        </div>

        {/* Future Scope Note */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="px-8 py-10 text-white">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">Scalable City-Wide Deployment</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">1000+</div>
                <div className="text-sm text-gray-400">Units per city</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">Real-time</div>
                <div className="text-sm text-gray-400">Central monitoring</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">AI/ML</div>
                <div className="text-sm text-gray-400">Predictive maintenance</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400 mb-2">40%</div>
                <div className="text-sm text-gray-400">Water savings</div>
              </div>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <Link
                to="/dashboard"
                className="px-6 py-3 bg-white/10 backdrop-blur rounded-xl text-white font-medium hover:bg-white/20 transition-colors"
              >
                ← Back to Dashboard
              </Link>
              <Link
                to="/future"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl text-white font-medium hover:shadow-lg transition-all"
              >
                Explore Future Scope →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;