import { siteInfo } from '@/lib/data';

export default function IntroductionPage() {
  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full text-sm text-green-400 border border-green-500/30 mb-4">
            Introduction
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Website <span className="gradient-text">Introduction</span>
          </h1>
          <p className="text-xl text-gray-400 urdu-text">ویب سائٹ کا تعارف</p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 sm:p-8 space-y-8">
          {/* Sections */}
          {[
            {
              title: 'Home Page',
              titleUrdu: 'ہوم پیج',
              desc: 'Welcome page featuring hero section, featured products, categories, and call-to-action sections.',
              descUrdu: 'خوش آمدید پیج جس میں ہیرو سیکشن، نمایاں مصنوعات، زمرے اور کال ٹو ایکشن سیکشنز شامل ہیں۔',
              icon: '🏠',
              color: 'from-green-400 to-emerald-600'
            },
            {
              title: 'About Page',
              titleUrdu: 'ہمارے بارے میں',
              desc: 'Information about Hafiz Sajid Seeds, our mission, vision, and values.',
              descUrdu: 'حافظ ساجد سیڈز کے بارے میں معلومات، ہمارا مشن، وژن اور اقدار۔',
              icon: 'ℹ️',
              color: 'from-blue-400 to-cyan-600'
            },
            {
              title: 'Products Page',
              titleUrdu: 'پروڈکٹس پیج',
              desc: 'Browse all available seeds with search and category filters.',
              descUrdu: 'تلاش اور زمرے کے فلٹرز کے ساتھ تمام دستیاب بیج دیکھیں۔',
              icon: '📦',
              color: 'from-yellow-400 to-orange-600'
            },
            {
              title: 'Contact Page',
              titleUrdu: 'رابطہ پیج',
              desc: 'Contact form and business information for customer inquiries.',
              descUrdu: 'کسٹمر کی پڑتال کے لیے رابطہ فارم اور کاروباری معلومات۔',
              icon: '📞',
              color: 'from-purple-400 to-violet-600'
            },
            {
              title: 'Cart Page',
              titleUrdu: 'کارٹ پیج',
              desc: 'Shopping cart for managing selected products before checkout.',
              descUrdu: 'چیک آؤٹ سے پہلے منتخب مصنوعات کا انتظام کرنے کے لیے شاپنگ کارٹ۔',
              icon: '🛒',
              color: 'from-pink-400 to-rose-600'
            },
            {
              title: 'Admin Dashboard',
              titleUrdu: 'ایڈمن ڈیش بورڈ',
              desc: 'Administrative panel for managing products, orders, and customers.',
              descUrdu: 'مصنوعات، آرڈرز اور کسٹمرز کا انتظام کرنے کے لیے انتظامی پینل۔',
              icon: '⚙️',
              color: 'from-slate-400 to-slate-600'
            },
          ].map((section, index) => (
            <div
              key={index}
              className="flex gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-700/50 hover:border-green-500/50 transition-colors duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center text-2xl shrink-0`}>
                {section.icon}
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">{section.title}</h3>
                <p className="text-sm text-gray-500 urdu-text">{section.titleUrdu}</p>
                <p className="text-gray-400 mt-2">{section.desc}</p>
                <p className="text-gray-500 urdu-text text-sm mt-1">{section.descUrdu}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-8 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/30">
          <h2 className="text-xl font-bold text-white mb-4 text-center">Developer Contact</h2>
          <div className="text-center">
            <p className="text-gray-300">{siteInfo.owner}</p>
            <p className="text-gray-400">{siteInfo.phone}</p>
            <p className="text-gray-400">{siteInfo.email}</p>
            <p className="text-gray-500 urdu-text mt-2">{siteInfo.addressUrdu}</p>
          </div>
        </div>
      </div>
    </div>
  );
}