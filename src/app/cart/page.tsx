'use client';

import { useState } from 'react';
import Link from 'next/link';
import { products, siteInfo } from '@/lib/data';
import Image from 'next/image';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    { product: products[0], quantity: 2 },
    { product: products[2], quantity: 1 },
  ]);

  const updateQuantity = (productId: number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.product.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (productId: number) => {
    setCartItems(items => items.filter(item => item.product.id !== productId));
  };

  const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full text-sm text-green-400 border border-green-500/30 mb-4">
            Shopping Cart
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Your <span className="gradient-text">Cart</span>
          </h1>
          <p className="text-xl text-gray-400 urdu-text">آپ کا کارٹ</p>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🛒</div>
            <h3 className="text-xl font-bold text-white mb-2">Your cart is empty</h3>
            <p className="text-gray-400 mb-6">Start shopping to add items to your cart</p>
            <Link
              href="/products"
              className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl font-bold text-white hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50"
                >
                  {/* Image */}
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <h3 className="font-bold text-white truncate">{item.product.name}</h3>
                        <p className="text-sm text-gray-500 urdu-text">{item.product.nameUrdu}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="p-2 text-gray-500 hover:text-red-400 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>

                    <p className="text-lg font-bold gradient-text mt-2">
                      Rs. {item.product.price.toLocaleString()}
                    </p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-4">
                      <button
                        onClick={() => updateQuantity(item.product.id, -1)}
                        className="w-8 h-8 rounded-lg bg-slate-700 hover:bg-slate-600 flex items-center justify-center text-white transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-bold text-white">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, 1)}
                        className="w-8 h-8 rounded-lg bg-slate-700 hover:bg-slate-600 flex items-center justify-center text-white transition-colors"
                      >
                        +
                      </button>
                      <span className="text-sm text-gray-500 ml-2">
                        Total: Rs. {(item.product.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
                <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span>Rs. {total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="border-t border-slate-700 pt-4">
                    <div className="flex justify-between text-lg font-bold text-white">
                      <span>Total</span>
                      <span className="gradient-text">Rs. {total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl font-bold text-white hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-green-500/30 mb-4">
                  Proceed to Checkout
                </button>

                <Link
                  href="/products"
                  className="block text-center text-green-400 hover:text-green-300 transition-colors"
                >
                  Continue Shopping
                </Link>

                {/* Contact Info */}
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <p className="text-sm text-gray-400 mb-2">Need help? Contact us:</p>
                  <a href={`tel:${siteInfo.phone}`} className="text-green-400 hover:text-green-300 transition-colors">
                    {siteInfo.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}