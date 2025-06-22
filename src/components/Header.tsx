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
    <header className="bg-white text-gray-800 px-4 sm:px-6 py-3 sm:py-4 shadow-sm border-b">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 sm:space-x-8">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Groww_app_logo.png" 
              alt="Groww Logo"
              className="h-8 sm:h-10 w-auto"
            />
          </Link>
          
          <div className="hidden lg:flex items-center space-x-6">
            {marketIndices.map((index, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-sm font-medium text-gray-500">{index.name}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-semibold">{index.value}</span>
                  <span className={`text-sm font-medium ${
                    index.isPositive ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {index.change} ({index.changePercent})
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile market indices - simplified */}
          <div className="flex lg:hidden space-x-3 overflow-x-auto">
            {marketIndices.slice(0, 2).map((index, i) => (
              <div key={i} className="flex flex-col min-w-0 flex-shrink-0">
                <span className="text-xs font-medium text-gray-500">{index.name}</span>
                <div className="flex items-center space-x-1">
                  <span className="text-sm font-semibold">{index.value}</span>
                  <span className={`text-xs font-medium ${
                    index.isPositive ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {index.changePercent}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Link 
            to="/profile" 
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-opacity-80 transition-all duration-200 hover:scale-105"
            title="View Profile"
          >
            <span className="font-bold text-sm sm:text-base">AP</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;