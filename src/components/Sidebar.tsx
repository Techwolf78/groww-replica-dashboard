import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  Star,
  User,
  TrendingUp,
  TrendingDown,
  Newspaper,
} from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/', icon: <Home size={18} /> },
  { name: 'Watchlist', path: '/watchlist', icon: <Star size={18} /> },
  { name: 'Profile', path: '/profile', icon: <User size={18} /> },
  { name: 'Top Gainers', path: '/top-gainers', icon: <TrendingUp size={18} /> },
  { name: 'Top Losers', path: '/top-losers', icon: <TrendingDown size={18} /> },
  { name: 'Market News', path: '/market-news', icon: <Newspaper size={18} /> },
];

function Sidebar() {
  return (
    <aside className="bg-gray-900 text-white w-full hidden lg:block lg:w-60 xl:w-64 h-full border-r border-gray-800">
      <div className="px-6 py-8">
        <h2 className="text-2xl font-bold text-green-400 mb-8 tracking-tight">
          MarketDash
        </h2>
        <nav className="flex flex-col space-y-1">
          {navItems.map(({ name, path, icon }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors duration-200 ${
                  isActive
                    ? 'bg-gray-800 text-green-400 font-medium'
                    : 'text-gray-300 hover:bg-gray-800'
                }`
              }
            >
              {icon}
              <span className="text-sm">{name}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
