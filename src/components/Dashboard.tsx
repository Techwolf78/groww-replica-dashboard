
import React from 'react';
import { TrendingUp, TrendingDown, Activity, DollarSign, BarChart3, Globe } from 'lucide-react';

const Dashboard = () => {
  const marketStats = [
    { title: "Market Cap", value: "₹2,85,43,000 Cr", change: "+2.1%", isPositive: true, icon: DollarSign },
    { title: "Total Volume", value: "₹1,24,567 Cr", change: "+5.3%", isPositive: true, icon: BarChart3 },
    { title: "Advance/Decline", value: "1,847/891", change: "+12.5%", isPositive: true, icon: Activity },
    { title: "Market Breadth", value: "67.5%", change: "+3.2%", isPositive: true, icon: Globe },
  ];

  const topStocks = [
    { name: "Reliance Industries", symbol: "RELIANCE", price: "₹2,487.65", change: "+₹85.30", changePercent: "+3.55%", isPositive: true, volume: "2.3M" },
    { name: "HDFC Bank", symbol: "HDFCBANK", price: "₹1,634.50", change: "+₹47.25", changePercent: "+2.98%", isPositive: true, volume: "1.8M" },
    { name: "TCS", symbol: "TCS", price: "₹3,567.25", change: "+₹89.40", changePercent: "+2.57%", isPositive: true, volume: "1.2M" },
    { name: "Infosys", symbol: "INFY", price: "₹1,456.80", change: "+₹34.60", changePercent: "+2.43%", isPositive: true, volume: "2.1M" },
    { name: "ICICI Bank", symbol: "ICICIBANK", price: "₹1,087.45", change: "+₹23.15", changePercent: "+2.17%", isPositive: true, volume: "1.9M" },
    { name: "State Bank of India", symbol: "SBIN", price: "₹823.70", change: "+₹15.85", changePercent: "+1.96%", isPositive: true, volume: "3.2M" },
  ];

  const sectorPerformance = [
    { sector: "Banking", change: "+2.45%", isPositive: true, stocks: "45/12" },
    { sector: "IT", change: "+1.87%", isPositive: true, stocks: "38/8" },
    { sector: "Pharma", change: "+1.23%", isPositive: true, stocks: "22/5" },
    { sector: "Auto", change: "-0.45%", isPositive: false, stocks: "18/25" },
    { sector: "FMCG", change: "+0.67%", isPositive: true, stocks: "28/14" },
    { sector: "Energy", change: "+3.12%", isPositive: true, stocks: "15/3" },
  ];

  const marketNews = [
    { title: "Nifty 50 hits fresh all-time high amid strong FII inflows", time: "2 hours ago", source: "Economic Times" },
    { title: "Banking stocks surge on positive Q4 results", time: "3 hours ago", source: "Business Standard" },
    { title: "IT sector outlook remains bullish for FY25", time: "5 hours ago", source: "Mint" },
    { title: "RBI keeps repo rate unchanged at 6.5%", time: "1 day ago", source: "Reuters" },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Market Overview</h1>
        <p className="text-gray-600">Live market data and insights</p>
      </div>

      {/* Market Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {marketStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg ${stat.isPositive ? 'bg-green-50' : 'bg-red-50'}`}>
                <stat.icon className={`w-5 h-5 ${stat.isPositive ? 'text-green-600' : 'text-red-600'}`} />
              </div>
              <span className={`text-sm font-medium ${stat.isPositive ? 'text-groww-green' : 'text-groww-red'}`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-sm font-medium text-gray-500 mb-1">{stat.title}</h3>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Top Performing Stocks */}
        <div className="xl:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Top Performing Stocks</h3>
              <button className="text-groww-primary hover:text-blue-700 text-sm font-medium">View All</button>
            </div>
            
            <div className="space-y-4">
              {topStocks.map((stock, index) => (
                <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">{stock.symbol.substring(0, 2)}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{stock.symbol}</h4>
                        <p className="text-sm text-gray-500">Vol: {stock.volume}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{stock.price}</p>
                    <div className="flex items-center space-x-1">
                      <span className={`text-sm font-medium ${stock.isPositive ? 'text-groww-green' : 'text-groww-red'}`}>
                        {stock.change}
                      </span>
                      <span className={`text-sm font-medium ${stock.isPositive ? 'text-groww-green' : 'text-groww-red'}`}>
                        ({stock.changePercent})
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sector Performance & Market News */}
        <div className="space-y-6">
          {/* Sector Performance */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Sector Performance</h3>
            
            <div className="space-y-4">
              {sectorPerformance.map((sector, index) => (
                <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div>
                    <p className="font-medium text-gray-900">{sector.sector}</p>
                    <p className="text-sm text-gray-500">Adv/Dec: {sector.stocks}</p>
                  </div>
                  <span className={`text-sm font-semibold ${sector.isPositive ? 'text-groww-green' : 'text-groww-red'}`}>
                    {sector.change}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Market News */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Market News</h3>
            
            <div className="space-y-4">
              {marketNews.map((news, index) => (
                <div key={index} className="p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                  <h4 className="font-medium text-gray-900 text-sm leading-tight mb-2">{news.title}</h4>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{news.source}</span>
                    <span>{news.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
