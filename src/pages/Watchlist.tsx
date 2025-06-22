
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Star, TrendingUp, TrendingDown, Plus, Search } from 'lucide-react';

const Watchlist = () => {
  const [activeTab, setActiveTab] = useState('stocks');

  const watchlistStocks = [
    { 
      symbol: 'RELIANCE', 
      name: 'Reliance Industries Ltd.', 
      price: '₹2,487.65', 
      change: '+45.30', 
      percentage: '+1.86%', 
      isPositive: true,
      volume: '2.4M',
      marketCap: '₹16.8L Cr',
      pe: '28.5',
      dayHigh: '₹2,520.00',
      dayLow: '₹2,442.35'
    },
    { 
      symbol: 'TCS', 
      name: 'Tata Consultancy Services', 
      price: '₹3,567.25', 
      change: '+67.80', 
      percentage: '+2.34%', 
      isPositive: true,
      volume: '1.8M',
      marketCap: '₹13.2L Cr',
      pe: '25.8',
      dayHigh: '₹3,589.00',
      dayLow: '₹3,499.45'
    },
    { 
      symbol: 'HDFC', 
      name: 'HDFC Bank Ltd.', 
      price: '₹1,634.50', 
      change: '-12.90', 
      percentage: '-0.78%', 
      isPositive: false,
      volume: '3.2M',
      marketCap: '₹9.8L Cr',
      pe: '18.2',
      dayHigh: '₹1,647.25',
      dayLow: '₹1,622.80'
    },
    { 
      symbol: 'INFY', 
      name: 'Infosys Ltd.', 
      price: '₹1,456.80', 
      change: '+17.65', 
      percentage: '+1.23%', 
      isPositive: true,
      volume: '2.1M',
      marketCap: '₹6.1L Cr',
      pe: '22.4',
      dayHigh: '₹1,468.90',
      dayLow: '₹1,439.15'
    },
    { 
      symbol: 'ITC', 
      name: 'ITC Ltd.', 
      price: '₹423.65', 
      change: '-6.25', 
      percentage: '-1.45%', 
      isPositive: false,
      volume: '5.8M',
      marketCap: '₹5.3L Cr',
      pe: '26.1',
      dayHigh: '₹429.90',
      dayLow: '₹420.30'
    },
    { 
      symbol: 'ICICIBANK', 
      name: 'ICICI Bank Ltd.', 
      price: '₹1,089.40', 
      change: '+23.15', 
      percentage: '+2.17%', 
      isPositive: true,
      volume: '4.1M',
      marketCap: '₹7.6L Cr',
      pe: '15.9',
      dayHigh: '₹1,095.70',
      dayLow: '₹1,066.25'
    }
  ];

  const mutualFunds = [
    { name: 'SBI Bluechip Fund', nav: '₹89.45', change: '+0.85%', isPositive: true, aum: '₹45,230 Cr' },
    { name: 'HDFC Top 100 Fund', nav: '₹156.78', change: '+1.25%', isPositive: true, aum: '₹32,180 Cr' },
    { name: 'Axis Bluechip Fund', nav: '₹67.92', change: '-0.45%', isPositive: false, aum: '₹28,950 Cr' },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">My Watchlist</h1>
              <p className="text-gray-600">Track your favorite stocks and mutual funds</p>
            </div>
            <button className="bg-groww-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Add Stock</span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search stocks, mutual funds..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-groww-primary focus:border-transparent"
            />
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('stocks')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'stocks'
                    ? 'border-groww-primary text-groww-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Stocks ({watchlistStocks.length})
              </button>
              <button
                onClick={() => setActiveTab('mutualfunds')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'mutualfunds'
                    ? 'border-groww-primary text-groww-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Mutual Funds ({mutualFunds.length})
              </button>
            </nav>
          </div>
        </div>

        {activeTab === 'stocks' ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="divide-y divide-gray-100">
              {watchlistStocks.map((stock, index) => (
                <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">{stock.symbol.substring(0, 2)}</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{stock.symbol}</h4>
                        <p className="text-sm text-gray-500">{stock.name}</p>
                        <div className="flex items-center space-x-4 mt-1 text-xs text-gray-400">
                          <span>Vol: {stock.volume}</span>
                          <span>MCap: {stock.marketCap}</span>
                          <span>P/E: {stock.pe}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-xl font-bold text-gray-900">{stock.price}</p>
                      <div className="flex items-center justify-end space-x-2 mt-1">
                        <span className={`text-sm font-medium ${
                          stock.isPositive ? 'text-groww-green' : 'text-groww-red'
                        }`}>
                          {stock.change}
                        </span>
                        <span className={`text-sm font-medium ${
                          stock.isPositive ? 'text-groww-green' : 'text-groww-red'
                        }`}>
                          ({stock.percentage})
                        </span>
                        {stock.isPositive ? (
                          <TrendingUp className="w-4 h-4 text-groww-green" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-groww-red" />
                        )}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        H: {stock.dayHigh} L: {stock.dayLow}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="divide-y divide-gray-100">
              {mutualFunds.map((fund, index) => (
                <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">MF</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{fund.name}</h4>
                        <p className="text-sm text-gray-500">AUM: {fund.aum}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-xl font-bold text-gray-900">{fund.nav}</p>
                      <span className={`text-sm font-medium ${
                        fund.isPositive ? 'text-groww-green' : 'text-groww-red'
                      }`}>
                        {fund.change}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Watchlist;
