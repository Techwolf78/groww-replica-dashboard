
import React from 'react';
import Layout from '../components/Layout';

const MarketNews = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'Nifty 50 Hits New All-Time High as Banking Stocks Rally',
      summary: 'The benchmark Nifty 50 index reached a new record high today, driven by strong gains in banking and financial services stocks.',
      timestamp: '2 hours ago',
      category: 'Market Update'
    },
    {
      id: 2,
      title: 'RBI Keeps Repo Rate Unchanged at 6.5% in Latest Policy Review',
      summary: 'The Reserve Bank of India maintained the repo rate at 6.5% for the sixth consecutive meeting, citing inflationary concerns.',
      timestamp: '4 hours ago',
      category: 'Policy'
    },
    {
      id: 3,
      title: 'Tech Stocks Surge as IT Companies Report Strong Q3 Results',
      summary: 'Major IT companies like TCS and Infosys posted better-than-expected quarterly results, boosting investor confidence.',
      timestamp: '6 hours ago',
      category: 'Earnings'
    },
    {
      id: 4,
      title: 'Foreign Investors Continue to Buy Indian Equities',
      summary: 'FPIs have invested over ₹15,000 crore in Indian markets this month, showing strong confidence in the economy.',
      timestamp: '8 hours ago',
      category: 'Investment'
    },
    {
      id: 5,
      title: 'Auto Sector Shows Signs of Recovery with Strong Sales Numbers',
      summary: 'Automobile manufacturers report improved sales figures for the current quarter, indicating economic recovery.',
      timestamp: '10 hours ago',
      category: 'Sector Update'
    },
    {
      id: 6,
      title: 'Oil Prices Impact Energy Stocks as Global Tensions Rise',
      summary: 'Rising crude oil prices are affecting energy sector stocks amid geopolitical uncertainties.',
      timestamp: '12 hours ago',
      category: 'Commodities'
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Market Update': 'bg-blue-100 text-blue-800',
      'Policy': 'bg-purple-100 text-purple-800',
      'Earnings': 'bg-green-100 text-green-800',
      'Investment': 'bg-yellow-100 text-yellow-800',
      'Sector Update': 'bg-indigo-100 text-indigo-800',
      'Commodities': 'bg-red-100 text-red-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Market News</h1>
          <p className="text-gray-600">Stay updated with the latest market developments and news</p>
        </div>

        <div className="space-y-4">
          {newsArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 sm:mb-0 ${getCategoryColor(article.category)}`}>
                  {article.category}
                </span>
                <span className="text-sm text-gray-500">{article.timestamp}</span>
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 leading-tight">
                {article.title}
              </h3>
              
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {article.summary}
              </p>
              
              <div className="mt-4 flex items-center justify-between">
                <button className="text-groww-primary hover:text-groww-navy font-medium text-sm transition-colors">
                  Read more →
                </button>
                <div className="flex space-x-3 text-gray-400">
                  <button className="hover:text-gray-600 transition-colors">
                    <span className="text-sm">👍</span>
                  </button>
                  <button className="hover:text-gray-600 transition-colors">
                    <span className="text-sm">💬</span>
                  </button>
                  <button className="hover:text-gray-600 transition-colors">
                    <span className="text-sm">📤</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default MarketNews;
