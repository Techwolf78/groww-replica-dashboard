
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Camera, Edit2, Download, Shield, Bell, CreditCard, HelpCircle } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const userProfile = {
    name: "Rahul Sharma",
    email: "rahul.sharma@email.com",
    phone: "+91 98765 43210",
    pan: "ABCDE1234F",
    avatarUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=150&h=150&fit=crop&crop=face",
    accountBalance: "₹2,54,000",
    totalInvestment: "₹2,25,000",
    totalReturns: "₹29,000",
    returnsPercentage: "+12.89%",
    joinDate: "January 2023",
    kycStatus: "Verified",
    membershipType: "Premium"
  };

  const portfolioSummary = [
    { category: "Equity", value: "₹1,85,000", percentage: "73%" },
    { category: "Mutual Funds", value: "₹45,000", percentage: "18%" },
    { category: "Fixed Deposits", value: "₹15,000", percentage: "6%" },
    { category: "Gold", value: "₹9,000", percentage: "3%" }
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
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Profile</h1>
          <p className="text-gray-600">Manage your account and preferences</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Profile Sidebar */}
          <div className="xl:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="text-center">
                <div className="relative inline-block">
                  <img
                    src={userProfile.avatarUrl}
                    alt={userProfile.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-groww-primary"
                  />
                  <button className="absolute bottom-0 right-0 bg-groww-primary text-white p-2 rounded-full hover:bg-opacity-90 transition-colors">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mt-4">{userProfile.name}</h3>
                <p className="text-sm text-gray-500">{userProfile.membershipType} Member</p>
                <p className="text-sm text-gray-500">Since {userProfile.joinDate}</p>
              </div>

              <div className="mt-6 space-y-2">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    activeTab === 'overview' ? 'bg-groww-primary bg-opacity-10 text-groww-primary' : 'hover:bg-gray-50'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('portfolio')}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    activeTab === 'portfolio' ? 'bg-groww-primary bg-opacity-10 text-groww-primary' : 'hover:bg-gray-50'
                  }`}
                >
                  Portfolio Summary
                </button>
                <button
                  onClick={() => setActiveTab('documents')}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    activeTab === 'documents' ? 'bg-groww-primary bg-opacity-10 text-groww-primary' : 'hover:bg-gray-50'
                  }`}
                >
                  Documents
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    activeTab === 'settings' ? 'bg-groww-primary bg-opacity-10 text-groww-primary' : 'hover:bg-gray-50'
                  }`}
                >
                  Settings
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="xl:col-span-3">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Personal Information */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
                    <button className="flex items-center space-x-2 text-groww-primary hover:text-blue-700">
                      <Edit2 className="w-4 h-4" />
                      <span>Edit</span>
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <p className="text-gray-900">{userProfile.name}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <p className="text-gray-900">{userProfile.email}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <p className="text-gray-900">{userProfile.phone}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">PAN</label>
                      <p className="text-gray-900">{userProfile.pan}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">KYC Status</label>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        {userProfile.kycStatus}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Account Summary */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Account Summary</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Total Balance</p>
                      <p className="text-2xl font-bold text-gray-900">{userProfile.accountBalance}</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Invested</p>
                      <p className="text-2xl font-bold text-gray-900">{userProfile.totalInvestment}</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Returns</p>
                      <div className="flex items-center space-x-2">
                        <p className="text-2xl font-bold text-groww-green">{userProfile.totalReturns}</p>
                        <span className="text-sm font-medium text-groww-green bg-green-100 px-2 py-1 rounded">
                          {userProfile.returnsPercentage}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'portfolio' && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Portfolio Allocation</h3>
                
                <div className="space-y-4">
                  {portfolioSummary.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.category}</h4>
                        <p className="text-sm text-gray-500">{item.percentage} of portfolio</p>
                      </div>
                      <p className="text-lg font-bold text-gray-900">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'documents' && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Documents & Reports</h3>
                
                <div className="space-y-4">
                  {recentDocuments.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-groww-primary transition-colors">
                      <div>
                        <h4 className="font-semibold text-gray-900">{doc.name}</h4>
                        <p className="text-sm text-gray-500">{doc.date} • {doc.size}</p>
                      </div>
                      <button className="flex items-center space-x-2 text-groww-primary hover:text-blue-700">
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Account Settings</h3>
                
                <div className="space-y-4">
                  {accountSettings.map((setting, index) => (
                    <button key={index} className="w-full flex items-center space-x-4 p-4 text-left border border-gray-200 rounded-lg hover:border-groww-primary transition-colors">
                      <div className="flex-shrink-0">
                        <setting.icon className="w-6 h-6 text-gray-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{setting.title}</h4>
                        <p className="text-sm text-gray-500">{setting.description}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
