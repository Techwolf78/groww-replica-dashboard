import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Camera, Edit2, Download, Shield, Bell, CreditCard, HelpCircle, ChevronRight, PieChart, FileText, Settings } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const userProfile = {
    name: "Ajay Govind Pawar",
    email: "mrajaypawar207@email.com",
    phone: "+91 8605234701",
    pan: "GCRPP7435P",
    avatarUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=150&h=150&fit=crop&crop=face",
    accountBalance: "₹3,89,790",
    totalInvestment: "₹1,12,000",
    totalReturns: "31,450",
    returnsPercentage: "+12.89%",
    joinDate: "January 2023",
    kycStatus: "Verified",
    membershipType: "Premium"
  };

  const portfolioSummary = [
    { category: "Equity", value: "₹1,85,000", percentage: "73%", color: "bg-blue-500" },
    { category: "Mutual Funds", value: "₹45,000", percentage: "18%", color: "bg-purple-500" },
    { category: "Fixed Deposits", value: "₹15,000", percentage: "6%", color: "bg-amber-500" },
    { category: "Gold", value: "₹9,000", percentage: "3%", color: "bg-yellow-500" }
  ];

  const recentDocuments = [
    { name: "Portfolio Statement - June 2024", type: "PDF", date: "June 20, 2024", size: "1.2 MB" },
    { name: "Tax Statement FY 2023-24", type: "PDF", date: "May 15, 2024", size: "890 KB" },
    { name: "Dividend Report Q1 2024", type: "PDF", date: "April 30, 2024", size: "654 KB" }
  ];

  const accountSettings = [
    { icon: Shield, title: "Security Settings", description: "Manage passwords and security preferences" },
    { icon: Bell, title: "Notifications", description: "Control email and SMS notifications" },
    { icon: CreditCard, title: "Payment Methods", description: "Manage bank accounts and cards" },
    { icon: HelpCircle, title: "Help & Support", description: "Get help and contact support" }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white">My Profile</h1>
            <p className="text-gray-400 mt-2">Manage your account settings and investment preferences</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Profile Sidebar - Dark */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
                {/* Profile Card */}
                <div className="p-6 text-center border-b border-gray-800">
                  <div className="relative inline-block mb-4">
                    <img
                      src={userProfile.avatarUrl}
                      alt={userProfile.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-gray-800"
                    />
                    <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{userProfile.name}</h3>
                  <span className="inline-block mt-1 px-3 py-1 text-xs font-medium bg-blue-900 text-blue-200 rounded-full">
                    {userProfile.membershipType} Member
                  </span>
                  <p className="text-sm text-gray-400 mt-2">Member since {userProfile.joinDate}</p>
                </div>

                {/* Navigation */}
                <nav className="p-2">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`flex items-center w-full px-4 py-3 rounded-lg mb-1 transition-colors ${
                      activeTab === 'overview' 
                        ? 'bg-gray-800 text-blue-400 font-medium' 
                        : 'text-gray-300 hover:bg-gray-800'
                    }`}
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('portfolio')}
                    className={`flex items-center w-full px-4 py-3 rounded-lg mb-1 transition-colors ${
                      activeTab === 'portfolio' 
                        ? 'bg-gray-800 text-blue-400 font-medium' 
                        : 'text-gray-300 hover:bg-gray-800'
                    }`}
                  >
                    <PieChart className="w-5 h-5 mr-3" />
                    Portfolio
                  </button>
                  <button
                    onClick={() => setActiveTab('documents')}
                    className={`flex items-center w-full px-4 py-3 rounded-lg mb-1 transition-colors ${
                      activeTab === 'documents' 
                        ? 'bg-gray-800 text-blue-400 font-medium' 
                        : 'text-gray-300 hover:bg-gray-800'
                    }`}
                  >
                    <FileText className="w-5 h-5 mr-3" />
                    Documents
                  </button>
                  <button
                    onClick={() => setActiveTab('settings')}
                    className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'settings' 
                        ? 'bg-gray-800 text-blue-400 font-medium' 
                        : 'text-gray-300 hover:bg-gray-800'
                    }`}
                  >
                    <Settings className="w-5 h-5 mr-3" />
                    Settings
                  </button>
                </nav>
              </div>
            </div>

            {/* Main Content - Dark */}
            <div className="lg:col-span-3 space-y-6">
              {activeTab === 'overview' && (
                <>
                  {/* Personal Information Card */}
                  <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
                    <div className="flex items-center justify-between p-6 border-b border-gray-800">
                      <h2 className="text-xl font-semibold text-white">Personal Information</h2>
                      <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                        <Edit2 className="w-4 h-4 mr-1" />
                        Edit
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                        <p className="text-white font-medium">{userProfile.name}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                        <p className="text-white font-medium">{userProfile.email}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
                        <p className="text-white font-medium">{userProfile.phone}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">PAN Number</label>
                        <p className="text-white font-medium">{userProfile.pan}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">KYC Status</label>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900 text-green-200">
                          {userProfile.kycStatus}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Financial Summary Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-gray-300">Total Balance</h3>
                        <div className="bg-gray-700 p-2 rounded-lg">
                          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-2xl font-bold text-white mb-1">{userProfile.accountBalance}</p>
                      <p className="text-xs text-blue-400">+2.5% from last month</p>
                    </div>

                    <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-gray-300">Total Invested</h3>
                        <div className="bg-gray-700 p-2 rounded-lg">
                          <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-2xl font-bold text-white mb-1">{userProfile.totalInvestment}</p>
                      <p className="text-xs text-green-400">+15.2% from last quarter</p>
                    </div>

                    <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-gray-300">Total Returns</h3>
                        <div className="bg-gray-700 p-2 rounded-lg">
                          <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex items-end justify-between">
                        <div>
                          <p className="text-2xl font-bold text-white mb-1">{userProfile.totalReturns}</p>
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-900 text-purple-200">
                            {userProfile.returnsPercentage}
                          </span>
                        </div>
                        <p className="text-xs text-purple-400">Annualized</p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'portfolio' && (
                <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
                  <div className="p-6 border-b border-gray-800">
                    <h2 className="text-xl font-semibold text-white">Portfolio Allocation</h2>
                    <p className="text-gray-400 mt-1">Your investment distribution across asset classes</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
                      <div className="w-48 h-48 relative">
                        <div className="w-full h-full rounded-full flex items-center justify-center bg-gray-800 border border-gray-700">
                          <span className="text-gray-500">Chart Visualization</span>
                        </div>
                      </div>
                      
                      <div className="flex-1 space-y-4">
                        {portfolioSummary.map((item, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className={`w-3 h-3 rounded-full ${item.color} mr-3`}></div>
                              <span className="font-medium text-gray-200">{item.category}</span>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-white">{item.value}</p>
                              <p className="text-sm text-gray-400">{item.percentage} of portfolio</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <button className="w-full md:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                      View Detailed Portfolio
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'documents' && (
                <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
                  <div className="p-6 border-b border-gray-800">
                    <h2 className="text-xl font-semibold text-white">Documents & Reports</h2>
                    <p className="text-gray-400 mt-1">Your financial statements and tax documents</p>
                  </div>
                  
                  <div className="divide-y divide-gray-800">
                    {recentDocuments.map((doc, index) => (
                      <div key={index} className="p-4 hover:bg-gray-800 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="bg-gray-800 p-3 rounded-lg mr-4 border border-gray-700">
                              <FileText className="w-5 h-5 text-blue-400" />
                            </div>
                            <div>
                              <h4 className="font-medium text-white">{doc.name}</h4>
                              <p className="text-sm text-gray-400">{doc.date} • {doc.size}</p>
                            </div>
                          </div>
                          <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                            <Download className="w-4 h-4 mr-1" />
                            Download
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-4 border-t border-gray-800 text-center">
                    <button className="text-blue-400 hover:text-blue-300 font-medium">
                      View All Documents
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
                  <div className="p-6 border-b border-gray-800">
                    <h2 className="text-xl font-semibold text-white">Account Settings</h2>
                    <p className="text-gray-400 mt-1">Manage your account preferences and security</p>
                  </div>
                  
                  <div className="divide-y divide-gray-800">
                    {accountSettings.map((setting, index) => (
                      <button 
                        key={index} 
                        className="w-full p-4 text-left hover:bg-gray-800 transition-colors flex items-center justify-between"
                      >
                        <div className="flex items-center">
                          <div className="bg-gray-800 p-3 rounded-lg mr-4 border border-gray-700">
                            <setting.icon className="w-5 h-5 text-blue-400" />
                          </div>
                          <div>
                            <h4 className="font-medium text-white">{setting.title}</h4>
                            <p className="text-sm text-gray-400">{setting.description}</p>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-500" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;