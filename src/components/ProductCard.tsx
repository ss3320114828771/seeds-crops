'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/data';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <div 
      className="group relative bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-green-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/10"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Featured Badge */}
        {product.featured && (
          <div className="absolute top-3 left-3 z-20">
            <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-xs font-bold text-slate-900 shadow-lg">
              Featured
            </span>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-3 right-3 z-20">
          <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full text-xs font-medium text-green-400 border border-green-500/30">
            {product.category}
          </span>
        </div>

        {/* Quick View Overlay */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
          <div className="bg-gradient-to-t from-slate-900 via-slate-900/95 to-transparent p-4">
            <div className="flex gap-2">
              <Link
                href={`/products?id=${product.id}`}
                className="flex-1 py-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg text-center text-sm font-medium text-white hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
              >
                View Details
              </Link>
              <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors duration-300">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-white group-hover:text-green-400 transition-colors duration-300 text-lg">
            {product.name}
          </h3>
        </div>
        
        <p className="text-sm text-gray-400 urdu-text mb-2">{product.nameUrdu}</p>
        
        <p className="text-sm text-gray-500 line-clamp-2 mb-4">
          {product.description}
        </p>

        <div className="flex items-end justify-between">
          <div>
            <span className="text-2xl font-bold gradient-text">Rs. {product.price.toLocaleString()}</span>
            <span className="text-sm text-gray-500 ml-1">{product.unit}</span>
          </div>
          
          <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
        </div>
      </div>

      {/* Shimmer Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 shimmer-effect"></div>
      </div>
    </div>
  );
}