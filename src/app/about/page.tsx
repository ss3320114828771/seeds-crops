import { siteInfo } from '@/lib/data';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 sm:pt-24">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <div className="absolute inset-0 mesh-gradient opacity-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full text-sm text-green-400 border border-green-500/30 mb-4">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              About <span className="gradient-text">{siteInfo.nameUrdu}</span>
            </h1>
            <p className="text-xl text-gray-400 urdu-text">ہمارے بارے میں</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden border-4 border-slate-700/50 shadow-2xl shadow-green-500/20">
                <Image
                  src="/images/n2.jpeg"
                  alt="Hafiz Sajid Seeds Shop"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 sm:bottom-8 sm:right-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 shadow-xl shadow-green-500/30">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-sm text-green-100">Years Experience</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Your Trusted Partner in <span className="text-yellow-400">Agriculture</span>
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {siteInfo.name} has been serving the farming community of Pakistan for over 15 years. 
                We specialize in providing high-quality seeds for various crops including wheat, cotton, 
                rice, and vegetables.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                کسانوں کا قابل اعتماد پارٹنر - {siteInfo.nameUrdu} پاکستان کے کسان برادری کو 15 سال سے زیادہ عرصے سے خدمات فراہم کر رہا ہے۔
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <div className="text-2xl font-bold gradient-text">500+</div>
                  <div className="text-sm text-gray-400">Seed Varieties</div>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <div className="text-2xl font-bold gradient-text">10,000+</div>
                  <div className="text-sm text-gray-400">Happy Customers</div>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <div className="text-2xl font-bold gradient-text">50+</div>
                  <div className="text-sm text-gray-400">Districts Covered</div>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <div className="text-2xl font-bold gradient-text">100%</div>
                  <div className="text-sm text-gray-400">Quality Assured</div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-4">Owner</h3>
              <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">ح</span>
                </div>
                <div>
                  <div className="font-bold text-white text-lg">{siteInfo.owner}</div>
                  <div className="text-sm text-gray-400">Founder & CEO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Our Mission', 
                titleUrdu: 'ہمارا مشن',
                desc: 'To provide farmers with the highest quality seeds that ensure better yields and sustainable farming practices.',
                icon: '🎯',
                color: 'from-green-400 to-emerald-600'
              },
              { 
                title: 'Our Vision', 
                titleUrdu: 'ہمارا وژن',
                desc: 'To become Pakistan\'s leading seed supplier, contributing to food security and agricultural prosperity.',
                icon: '👁️',
                color: 'from-yellow-400 to-orange-600'
              },
              { 
                title: 'Our Values', 
                titleUrdu: 'ہمارے اقدار',
                desc: 'Integrity, quality, customer satisfaction, and sustainable agricultural practices guide everything we do.',
                icon: '💎',
                color: 'from-blue-400 to-cyan-600'
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-500"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-500 urdu-text mb-4">{item.titleUrdu}</p>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}