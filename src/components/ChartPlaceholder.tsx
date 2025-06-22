
import React from 'react';

const ChartPlaceholder = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 space-y-2 sm:space-y-0">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800">RELIANCE</h3>
          <p className="text-sm text-gray-500">Reliance Industries Ltd.</p>
        </div>
        <div className="text-left sm:text-right">
          <p className="text-xl sm:text-2xl font-bold text-gray-800">₹2,487.65</p>
          <p className="text-sm text-groww-green font-medium">+45.30 (+1.86%)</p>
        </div>
      </div>
      
      <div className="h-48 sm:h-64 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
        <div className="text-center">
          <div className="text-3xl sm:text-4xl mb-2">📊</div>
          <p className="text-gray-500 font-medium text-sm sm:text-base">Stock Chart Placeholder</p>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">Chart visualization would go here</p>
        </div>
      </div>
      
      <div className="mt-4 flex justify-center space-x-2 sm:space-x-4 overflow-x-auto">
        <button className="px-3 sm:px-4 py-2 text-sm font-medium text-gray-600 hover:text-groww-navy whitespace-nowrap">1D</button>
        <button className="px-3 sm:px-4 py-2 text-sm font-medium text-white bg-groww-navy rounded whitespace-nowrap">1W</button>
        <button className="px-3 sm:px-4 py-2 text-sm font-medium text-gray-600 hover:text-groww-navy whitespace-nowrap">1M</button>
        <button className="px-3 sm:px-4 py-2 text-sm font-medium text-gray-600 hover:text-groww-navy whitespace-nowrap">1Y</button>
      </div>
    </div>
  );
};

export default ChartPlaceholder;
