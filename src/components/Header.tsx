import React from 'react';
import { Link } from 'react-router-dom';

interface MarketIndex {
  name: string;
  value: string;
  change: string;
  changePercent: string;
  isPositive: boolean;
}

const Header = () => {
  const marketIndices: MarketIndex[] = [
    {
      name: "NIFTY 50",
      value: "21,456.75",
      change: "+125.30",
      changePercent: "+0.59%",
      isPositive: true
    },
    {
      name: "BANK NIFTY",
      value: "45,287.90",
      change: "-89.45",
      changePercent: "-0.20%",
      isPositive: false
    },
    {
      name: "SENSEX",
      value: "71,234.56",
      change: "+234.67",
      changePercent: "+0.33%",
      isPositive: true
    }
  ];

  return (
    <header className="bg-gray-900 text-gray-100 px-4 sm:px-8 py-3 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4 sm:space-x-8">
          {/* Logo Container with fixed dimensions */}
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0 w-10">
              <Link to="/" className="block hover:opacity-90 transition-opacity">
                <img 
                  src="logo.png" 
                  alt="Groww Logo"
                  className="h-auto w-full " // Makes logo white
                />
              </Link>
            </div>
            <Link to="/" className="hidden sm:block">
              <span className="text-xl font-bold text-white">
                GROWW
              </span>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            {marketIndices.map((index, i) => (
              <div key={i} className="flex flex-col group">
                <span className="text-xs font-medium text-gray-400 tracking-wider">{index.name}</span>
                <div className="flex items-baseline space-x-2">
                  <span className="text-lg font-bold text-white">{index.value}</span>
                  <span className={`text-sm font-medium px-1.5 py-0.5 rounded ${
                    index.isPositive 
                      ? 'bg-green-900 text-green-300' 
                      : 'bg-red-900 text-red-300'
                  }`}>
                    {index.change} ({index.changePercent})
                  </span>
                </div>
                <div className={`h-0.5 mt-1 w-0 group-hover:w-full transition-all duration-300 ${
                  index.isPositive ? 'bg-green-500' : 'bg-red-500'
                }`}></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="hidden md:flex items-center space-x-1 text-gray-400 hover:text-blue-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-sm font-medium">Search</span>
          </button>
          
          <button className="hidden md:flex items-center space-x-1 text-gray-400 hover:text-blue-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="text-sm font-medium">Alerts</span>
          </button>
          
          {/* Mobile market indices - simplified */}
          <div className="flex lg:hidden space-x-3 overflow-x-auto px-2">
            {marketIndices.slice(0, 2).map((index, i) => (
              <div key={i} className="flex flex-col min-w-0 flex-shrink-0 px-2 py-1 bg-gray-800 rounded-lg">
                <span className="text-xs font-medium text-gray-400">{index.name}</span>
                <div className="flex items-center space-x-1">
                  <span className="text-sm font-semibold text-white">{index.value}</span>
                  <span className={`text-xs font-medium px-1 py-0.5 rounded ${
                    index.isPositive ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'
                  }`}>
                    {index.changePercent}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="relative group">
            <Link 
              to="/profile" 
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-white flex items-center justify-center hover:shadow-lg transition-all duration-200 hover:scale-105"
              title="View Profile"
            >
              <span className="font-bold text-sm sm:text-base">AP</span>
            </Link>
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-xl py-1 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-150 invisible group-hover:visible border border-gray-700">
              <Link to="/profile" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">Your Profile</Link>
              <Link to="/portfolio" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">Portfolio</Link>
              <Link to="/watchlist" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">Watchlist</Link>
              <div className="border-t border-gray-700"></div>
              <Link to="/logout" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">Sign out</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;