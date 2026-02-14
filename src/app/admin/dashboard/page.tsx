'use client';

import { useState } from 'react';
import { products, siteInfo } from '@/lib/data';
import Link from 'next/link';

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Total Products', value: products.length, icon: '📦', color: 'from-green-400 to-emerald-600' },
    { label: 'Orders Today', value: 12, icon: '🛒', color: 'from-blue-400 to-cyan-600' },
    { label: 'Revenue', value: 'Rs. 125,000', icon: '💰', color: 'from-yellow-400 to-orange-600' },
    { label: 'Customers', value: '1,250', icon: '👥', color: 'from-purple-400 to-violet-600' },
  ];

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
            <p className="text-gray-400">Welcome back, {siteInfo.owner}</p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/"
              className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-gray-300 hover:text-white transition-colors"
            >
              View Site
            </Link>
            <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg text-white font-medium">
              + Add Product
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {['overview', 'products', 'orders', 'customers'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                  : 'bg-slate-800 text-gray-400 hover:text-white'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-2xl mb-4`}>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-6">
            <h2 className="text-xl font-bold text-white mb-4">Recent Orders</h2>
            <div className="space-y-4">
              {[
                { id: '#ORD-001', customer: 'Ahmed Khan', amount: 'Rs. 15,000', status: 'Pending' },
                { id: '#ORD-002', customer: 'Muhammad Ali', amount: 'Rs. 8,500', status: 'Shipped' },
                { id: '#ORD-003', customer: 'Sara Bibi', amount: 'Rs. 22,000', status: 'Delivered' },
              ].map((order, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl"
                >
                  <div>
                    <div className="font-medium text-white">{order.id}</div>
                    <div className="text-sm text-gray-400">{order.customer}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-white">{order.amount}</div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      order.status === 'Delivered' ? 'bg-green-500/20 text-green-400' :
                      order.status === 'Shipped' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Products */}
          <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-6">
            <h2 className="text-xl font-bold text-white mb-4">Top Products</h2>
            <div className="space-y-4">
              {products.slice(0, 4).map((product, index) => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl"
                >
                  <div className="w-12 h-12 rounded-lg bg-slate-700 flex items-center justify-center text-xl">
                    🌾
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-white">{product.name}</div>
                    <div className="text-sm text-gray-400">{product.category}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium gradient-text">Rs. {product.price.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">{product.unit}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}