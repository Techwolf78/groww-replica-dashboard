
import React from 'react';
import Layout from '../components/Layout';

const TopLosers = () => {
  const topLosers = [
    { symbol: 'ZEEL', name: 'Zee Entertainment Enterprises', price: '₹267.45', change: '-45.30', percentage: '-14.49%' },
    { symbol: 'YESBANK', name: 'Yes Bank Ltd.', price: '₹18.90', change: '-2.85', percentage: '-13.08%' },
    { symbol: 'VODAFONE', name: 'Vodafone Idea Ltd.', price: '₹8.75', change: '-1.20', percentage: '-12.06%' },
    { symbol: 'SUZLON', name: 'Suzlon Energy Ltd.', price: '₹34.80', change: '-4.65', percentage: '-11.79%' },
    { symbol: 'RPOWER', name: 'Reliance Power Ltd.', price: '₹12.45', change: '-1.55', percentage: '-11.07%' },
    { symbol: 'JPASSOCIAT', name: 'Jaiprakash Associates Ltd.', price: '₹6.75', change: '-0.80', percentage: '-10.60%' },
    { symbol: 'PCJEWELLER', name: 'PC Jeweller Ltd.', price: '₹23.90', change: '-2.65', percentage: '-9.98%' },
    { symbol: 'DHFL', name: 'Dewan Housing Finance Ltd.', price: '₹15.60', change: '-1.65', percentage: '-9.57%' },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Top Losers</h1>
          <p className="text-gray-600">Stocks with highest percentage losses today</p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">Worst Performers ({topLosers.length})</h3>
          </div>
          
          <div className="divide-y divide-gray-200">
            {topLosers.map((stock, index) => (
              <div key={index} className="p-4 sm:p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-groww-red bg-opacity-10 text-groww-red w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800">{stock.symbol}</h4>
                      <p className="text-sm text-gray-500 mt-1">{stock.name}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-lg sm:text-xl font-bold text-gray-800">{stock.price}</p>
                    <div className="flex items-center justify-end space-x-2 mt-1">
                      <span className="text-sm font-medium text-groww-red">{stock.change}</span>
                      <span className="text-sm font-medium text-groww-red bg-groww-red bg-opacity-10 px-2 py-1 rounded">
                        {stock.percentage}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TopLosers;
