'use client';

import Image from 'next/image';
import Link from 'next/link';
import { products, siteInfo, categories } from '@/lib/data';
import ProductCard from '@/components/ProductCard';

export default function HomePage() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-slate-900">
          {/* Mesh Gradient */}
          <div className="absolute inset-0 mesh-gradient opacity-60"></div>
          
          {/* Animated Shapes */}
          <div className="floating-shape w-96 h-96 bg-green-500/30 top-10 -left-20" style={{ animationDelay: '0s' }}></div>
          <div className="floating-shape w-80 h-80 bg-yellow-500/30 top-1/3 right-10" style={{ animationDelay: '2s' }}></div>
          <div className="floating-shape w-72 h-72 bg-blue-500/30 bottom-20 left-1/3" style={{ animationDelay: '4s' }}></div>
          <div className="floating-shape w-64 h-64 bg-purple-500/30 bottom-10 right-1/4" style={{ animationDelay: '1s' }}></div>
          
          {/* Polygon Decorations */}
          <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-green-500/10 to-transparent polygon-shape animate-spin-slow hidden lg:block"></div>
          <div className="absolute bottom-40 left-20 w-32 h-32 bg-gradient-to-br from-yellow-500/10 to-transparent polygon-shape animate-spin-slow hidden lg:block" style={{ animationDirection: 'reverse' }}></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50 mb-6 animate-fade-in">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm text-gray-300">Pakistan&apos;s #1 Seed Store</span>
              </div>

              {/* Urdu Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-slide-up">
                <span className="urdu-text gradient-text">{siteInfo.nameUrdu}</span>
              </h1>

              {/* English Title */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Hafiz Sajid Syed <span className="text-yellow-400">Crops Seeds</span>
              </h2>

              {/* Description */}
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Quality seeds for better harvest. Trusted by thousands of farmers across Pakistan.
              </p>

              {/* Urdu Description */}
              <p className="text-lg text-gray-400 urdu-text mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                بہتر فصل کے لیے معیاری بیج۔ پاکستان بھر میں ہزاروں کسانوں کا بھروسہ۔
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Link
                  href="/products"
                  className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl font-bold text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/30 transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Browse Products
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>

                <Link
                  href="/contact"
                  className="group px-8 py-4 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 rounded-xl font-bold text-white hover:border-yellow-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Contact Us
                  </span>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">500+</div>
                  <div className="text-sm text-gray-400">Products</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">10K+</div>
                  <div className="text-sm text-gray-400">Customers</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">15+</div>
                  <div className="text-sm text-gray-400">Years</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative order-1 lg:order-2 animate-scale-in">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Rotating Ring */}
                <div className="absolute inset-0 border-2 border-dashed border-green-500/30 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-4 border-2 border-dashed border-yellow-500/30 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
                
                {/* Main Image */}
                <div className="absolute inset-8 rounded-3xl overflow-hidden border-4 border-slate-700/50 shadow-2xl shadow-green-500/20 transform hover:rotate-3 transition-transform duration-500">
                  <Image
                    src="/images/n1.jpeg"
                    alt="Premium Seeds"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl shadow-green-500/30 animate-float">
                  <span className="text-3xl">🌱</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl shadow-yellow-500/30 animate-float-delayed">
                  <span className="text-2xl">🌾</span>
                </div>
                <div className="absolute top-1/2 -right-8 w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-xl shadow-blue-500/30 animate-bounce-slow">
                  <span className="text-xl">🌻</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full text-sm text-green-400 border border-green-500/30 mb-4">
              Our Categories
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Browse by <span className="gradient-text">Category</span>
            </h2>
            <p className="text-gray-400 urdu-text">زمرہ کے مطابق دیکھیں</p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {categories.slice(1).map((category, index) => (
              <Link
                key={category.name}
                href={`/products?category=${category.name}`}
                className="group relative p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  index === 0 ? 'bg-gradient-to-br from-green-500/10 to-emerald-500/10' :
                  index === 1 ? 'bg-gradient-to-br from-yellow-500/10 to-orange-500/10' :
                  index === 2 ? 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10' :
                  'bg-gradient-to-br from-purple-500/10 to-violet-500/10'
                }`}></div>

                {/* Icon */}
                <div className={`relative w-14 h-14 rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300 ${
                  index === 0 ? 'bg-gradient-to-br from-green-400 to-emerald-600' :
                  index === 1 ? 'bg-gradient-to-br from-yellow-400 to-orange-600' :
                  index === 2 ? 'bg-gradient-to-br from-blue-400 to-cyan-600' :
                  'bg-gradient-to-br from-purple-400 to-violet-600'
                }`}>
                  {index === 0 && <span className="text-2xl">🌾</span>}
                  {index === 1 && <span className="text-2xl">💵</span>}
                  {index === 2 && <span className="text-2xl">🫒</span>}
                  {index === 3 && <span className="text-2xl">🥬</span>}
                </div>

                {/* Text */}
                <h3 className="relative font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="relative text-sm text-gray-500 urdu-text mt-1">{category.nameUrdu}</p>

                {/* Arrow */}
                <svg className="absolute bottom-4 right-4 w-5 h-5 text-gray-600 group-hover:text-green-400 transform group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <div className="absolute inset-0 mesh-gradient opacity-40"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
            <div className="text-center sm:text-left">
              <span className="inline-block px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full text-sm text-yellow-400 border border-yellow-500/30 mb-4">
                Best Sellers
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Featured <span className="gradient-text">Products</span>
              </h2>
              <p className="text-gray-400 urdu-text mt-2">نمایاں مصنوعات</p>
            </div>

            <Link
              href="/products"
              className="group flex items-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-green-500/50 transition-all duration-300"
            >
              <span className="text-white">View All Products</span>
              <svg className="w-5 h-5 text-green-400 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full text-sm text-purple-400 border border-purple-500/30 mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why <span className="gradient-text">Hafiz Sajid Seeds</span>?
            </h2>
            <p className="text-gray-400 urdu-text">ہم کیوں منتخب کریں؟</p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🌱', title: 'Premium Quality', titleUrdu: 'اعلیٰ معیار', desc: 'Certified and tested seeds', color: 'from-green-400 to-emerald-600' },
              { icon: '💰', title: 'Best Prices', titleUrdu: 'بہترین قیمتیں', desc: 'Competitive market rates', color: 'from-yellow-400 to-orange-600' },
              { icon: '🚚', title: 'Fast Delivery', titleUrdu: 'تیز ترسیل', desc: 'Nationwide shipping', color: 'from-blue-400 to-cyan-600' },
              { icon: '🤝', title: 'Expert Support', titleUrdu: 'ماہر مدد', desc: 'Agricultural guidance', color: 'from-purple-400 to-violet-600' },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-slate-600 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-3xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="relative font-bold text-xl text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="relative text-sm text-gray-500 urdu-text mb-2">{feature.titleUrdu}</p>
                <p className="relative text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/50 via-slate-900 to-emerald-900/50"></div>
        
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-gradient-to-br from-green-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-gradient-to-br from-yellow-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="gradient-text">Grow Better</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Contact us today for premium quality seeds
          </p>
          <p className="text-lg text-gray-400 urdu-text mb-8">
            اعلیٰ معیار کے بیجوں کے لیے آج ہی ہم سے رابطہ کریں
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl font-bold text-white hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-green-500/30"
            >
              Contact Us Now
            </Link>
            <a
              href={`tel:${siteInfo.phone}`}
              className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border-2 border-yellow-500/50 rounded-xl font-bold text-yellow-400 hover:bg-yellow-500/10 transition-all duration-300 transform hover:scale-105"
            >
              Call: {siteInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}