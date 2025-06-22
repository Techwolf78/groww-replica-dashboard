
import React from 'react';

interface Report {
  name: string;
  icon: string;
  description: string;
}

const ProfileSection = () => {
  const userProfile = {
    name: "Ajay Govind Pawar",
    avatarUrl: "https://cdn-icons-png.flaticon.com/512/7572/7572213.png",
    accountBalance: "₹2,54,000",
    totalInvestment: "₹2,25,000",
    totalReturns: "₹29,000",
    returnsPercentage: "+12.89%"
  };

  const reports: Report[] = [
    {
      name: "Portfolio",
      icon: "📊",
      description: "View your investment portfolio"
    },
    {
      name: "Order History",
      icon: "📝",
      description: "Track all your trades"
    },
    {
      name: "Tax Report",
      icon: "📄",
      description: "Download tax documents"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-6">Profile Overview</h2>
      
      <div className="flex items-center space-x-4 mb-6">
        <img
          src={userProfile.avatarUrl}
          alt={userProfile.name}
          className="w-12 sm:w-16 h-12 sm:h-16 rounded-full object-cover border-2 border-groww-primary"
        />
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-800">{userProfile.name}</h3>
          <p className="text-sm text-gray-500">Premium Member</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-1 2xl:grid-cols-3 gap-4 mb-6">
        <div className="bg-groww-light-gray p-3 sm:p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Total Balance</p>
          <p className="text-lg sm:text-xl font-bold text-gray-800">{userProfile.accountBalance}</p>
        </div>
        
        <div className="bg-groww-light-gray p-3 sm:p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Invested</p>
          <p className="text-lg sm:text-xl font-bold text-gray-800">{userProfile.totalInvestment}</p>
        </div>
        
        <div className="bg-groww-light-gray p-3 sm:p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Returns</p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-1 sm:space-y-0">
            <p className="text-lg sm:text-xl font-bold text-groww-green">{userProfile.totalReturns}</p>
            <span className="text-xs sm:text-sm font-medium text-groww-green bg-green-100 px-2 py-1 rounded w-fit">
              {userProfile.returnsPercentage}
            </span>
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="font-semibold text-gray-800 mb-4">Quick Reports</h4>
        <div className="space-y-3">
          {reports.map((report, index) => (
            <button
              key={index}
              className="w-full flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:border-groww-primary hover:bg-groww-light-gray transition-colors duration-200"
            >
              <span className="text-xl sm:text-2xl">{report.icon}</span>
              <div className="text-left">
                <p className="font-medium text-gray-800 text-sm sm:text-base">{report.name}</p>
                <p className="text-xs sm:text-sm text-gray-500">{report.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
