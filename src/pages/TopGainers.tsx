
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { TrendingUp, Filter, RefreshCw } from 'lucide-react';

const TopGainers = () => {
  const [timeframe, setTimeframe] = useState('1D');
  const [category, setCategory] = useState('All');

  const topGainers = [
    { 
      rank: 1,
      symbol: 'ADANIENT', 
      name: 'Adani Enterprises Ltd.', 
      price: '₹3,245.80', 
      change: '+487.60', 
      percentage: '+17.69%', 
      volume: '8.9M',
      marketCap: '₹3.7L Cr',
      dayHigh: '₹3,289.45',
      dayLow: '₹2,758.20',
      sector: 'Conglomerate'
    },
    { 
      rank: 2,
      symbol: 'ZOMATO', 
      name: 'Zomato Ltd.', 
      price: '₹245.75', 
      change: '+32.85', 
      percentage: '+15.44%', 
      volume: '45.2M',
      marketCap: '₹2.2L Cr',
      dayHigh: '₹248.90',
      dayLow: '₹212.90',
      sector: 'Food Delivery'
    },
    { 
      rank: 3,
      symbol: 'PAYTM', 
      name: 'One97 Communications Ltd.', 
      price: '₹892.30', 
      change: '+98.45', 
      percentage: '+12.41%', 
      volume: '12.8M',
      marketCap: '₹56,890 Cr',
      dayHigh: '₹915.60',
      dayLow: '₹793.85',
      sector: 'Fintech'
    },
    { 
      rank: 4,
      symbol: 'BAJFINANCE', 
      name: 'Bajaj Finance Ltd.', 
      price: '₹7,234.50', 
      change: '+689.75', 
      percentage: '+10.54%', 
      volume: '2.1M',
      marketCap: '₹4.4L Cr',
      dayHigh: '₹7,289.90',
      dayLow: '₹6,544.75',
      sector: 'NBFC'
    },
    { 
      rank: 5,
      symbol: 'COALINDIA', 
      name: 'Coal India Ltd.', 
      price: '₹456.80', 
      change: '+39.25', 
      percentage: '+9.41%', 
      volume: '18.7M',
      marketCap: '₹2.8L Cr',
      dayHigh: '₹461.35',
      dayLow: '₹417.55',
      sector: 'Mining'
    },
    { 
      rank: 6,
      symbol: 'TECHM', 
      name: 'Tech Mahindra Ltd.', 
      price: '₹1,567.90', 
      change: '+128.45', 
      percentage: '+8.93%', 
      volume: '5.4M',
      marketCap: '₹1.5L Cr',
      dayHigh: '₹1,589.60',
      dayLow: '₹1,439.45',
      sector: 'IT Services'
    },
    { 
      rank: 7,
      symbol: 'BPCL', 
      name: 'Bharat Petroleum Corporation Ltd.', 
      price: '₹389.65', 
      change: '+29.80', 
      percentage: '+8.28%', 
      volume: '7.2M',
      marketCap: '₹84,320 Cr',
      dayHigh: '₹395.40',
      dayLow: '₹359.85',
      sector: 'Oil & Gas'
    },
    { 
      rank: 8,
      symbol: 'MARUTI', 
      name: 'Maruti Suzuki India Ltd.', 
      price: '₹12,456.30', 
      change: '+867.45', 
      percentage: '+7.48%', 
      volume: '1.8M',
      marketCap: '₹3.8L Cr',
      dayHigh: '₹12,523.80',
      dayLow: '₹11,588.85',
      sector: 'Automobile'
    }
  ];

  const timeframes = ['1D', '1W', '1M', '3M', '1Y'];
  const categories = ['All', 'Large Cap', 'Mid Cap', 'Small Cap'];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 flex items-center">
                <TrendingUp className="w-8 h-8 text-groww-green mr-3" />
                Top Gainers
              </h1>
              <p className="text-gray-600">Stocks with highest percentage gains</p>
            </div>
            <button className="flex items-center space-x-2 text-groww-primary hover:text-blue-700">
              <RefreshCw className="w-4 h-4" />
              <span>Refresh</span>
            </button>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Timeframe:</span>
              <div className="flex space-x-1">
                {timeframes.map((tf) => (
                  <button
                    key={tf}
                    onClick={() => setTimeframe(tf)}
                    className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                      timeframe === tf
                        ? 'bg-groww-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">Category:</span>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="px-3 py-1 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-groww-primary"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Market Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Total Gainers</h3>
            <p className="text-2xl font-bold text-groww-green">1,847</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Avg Gain</h3>
            <p className="text-2xl font-bold text-groww-green">+5.67%</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Total Volume</h3>
            <p className="text-2xl font-bold text-gray-900">₹2.3L Cr</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Market Cap</h3>
            <p className="text-2xl font-bold text-gray-900">₹45.8L Cr</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volume</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Market Cap</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sector</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {topGainers.map((stock) => (
                  <tr key={stock.rank} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="flex items-center justify-center w-8 h-8 bg-groww-green text-white rounded-full text-sm font-bold">
                        {stock.rank}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-xs">{stock.symbol.substring(0, 2)}</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{stock.symbol}</div>
                          <div className="text-sm text-gray-500 max-w-xs truncate">{stock.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-gray-900">{stock.price}</div>
                      <div className="text-xs text-gray-500">H: {stock.dayHigh}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-groww-green">{stock.change}</div>
                      <div className="text-sm font-medium text-groww-green">{stock.percentage}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{stock.volume}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{stock.marketCap}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {stock.sector}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TopGainers;
