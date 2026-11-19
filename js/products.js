/* ============================================================
   فایل محصولات - باربی باش
   ⚠️ قیمت‌ها در js/pricing.js هستند. این فایل فقط محتواست.
   ============================================================ */

const PRODUCTS = [
  {
    id: 1, slug: 'PapayaSlim', name: 'PapayaSlim',
    desc: 'قرص لاغری پاپایا اسلیم',
    cat: 'slim', rating: 4.7, reviews: 127, icon: 'fa-pills',
    badge: 'hot', badgeText: 'پرفروش', organic: true, stock: true,
    popular: 100, date: 20240101,
    longDesc: `PapayaSlim یک مکمل لاغری کاملاً گیاهی است که با استفاده از عصاره‌های طبیعی و فرمولاسیون علمی، به شما کمک می‌کند بدون آسیب به سلامتی به وزن ایده‌آل خود برسید. این محصول توسط متخصصان تغذیه و داروسازی تأیید شده و دارای مجوز وزارت بهداشت است.`,
    benefits: [
      'افزایش متابولیسم و سوخت‌وساز بدن',
      'کاهش طبیعی اشتها و کنترل ولع',
      'چربی‌سوزی موضعی (شکم، پهلو، ران)',
      'کاهش نفخ و پاکسازی بدن',
      'افزایش انرژی و رفع خستگی',
      'بدون عوارض جانبی و بدون بازگشت وزن'
    ],
    ingredients: [
      { name: 'عصاره چای سبز', amount: '۵۰۰ میلی‌گرم', desc: 'افزایش سوخت‌وساز و اکسیداسیون چربی‌ها' },
      { name: 'جینسینگ', amount: '۲۰۰ میلی‌گرم', desc: 'افزایش انرژی و بهبود عملکرد ورزشی' },
      { name: 'فلفل کاین', amount: '۱۰۰ میلی‌گرم', desc: 'چربی‌سوزی و افزایش دمای بدن' },
      { name: 'ال‌کارنیتین', amount: '۳۰۰ میلی‌گرم', desc: 'تبدیل چربی به انرژی' },
      { name: 'فیبر گلوکومانان', amount: '۲۵۰ میلی‌گرم', desc: 'ایجاد حس سیری و کاهش اشتها' }
    ],
    usage: [
      { title: 'قبل از صبحانه', time: '۳۰ دقیقه', desc: 'یک کپسول همراه با یک لیوان آب ولرم مصرف کنید.' },
      { title: 'قبل از ناهار', time: '۳۰ دقیقه', desc: 'یک کپسول دیگر برای کنترل اشتها و بهبود هضم.' },
      { title: 'در طول روز', time: '', desc: 'حداقل ۸ لیوان آب بنوشید و فعالیت بدنی روزانه داشته باشید.' },
      { title: 'مدت دوره', time: '', desc: 'حداقل ۳۰ روز (یک بسته) برای دیدن نتیجه اولیه توصیه می‌شود.' }
    ],
    warning: 'این محصول مکمل است و جایگزین رژیم غذایی سالم و ورزش نیست. زنان باردار، شیرده و افراد زیر ۱۸ سال نباید مصرف کنند.'
  },
  {
    id: 2, slug: 'barbieslim-detox', name: 'BarbieSlim Detox',
    desc: 'قرص سم‌زدایی و پاکسازی بدن',
    cat: 'detox', rating: 4.5, reviews: 89, icon: 'fa-capsules',
    badge: 'new', badgeText: 'جدید', organic: true, stock: true,
    popular: 85, date: 20240201,
    longDesc: `BarbieSlim Detox یک مکمل سم‌زدایی است که به پاکسازی کبد، روده و خون کمک می‌کند. با ترکیبات طبیعی خود، سموم انباشته در بدن را دفع کرده و به کاهش وزن و شفافیت پوست کمک می‌کند.`,
    benefits: ['پاکسازی کبد و روده از سموم','کاهش نفخ و بهبود گوارش','شفافیت پوست و کاهش جوش','افزایش انرژی و رفع خستگی','کمک به کاهش وزن'],
    ingredients: [
      { name: 'عصاره خار مریم', amount: '۳۰۰ میلی‌گرم', desc: 'پاکسازی و محافظت از کبد' },
      { name: 'زنجبیل', amount: '۲۰۰ میلی‌گرم', desc: 'بهبود گوارش و کاهش نفخ' },
      { name: 'قاصدک', amount: '۱۵۰ میلی‌گرم', desc: 'دفع سموم و کاهش احتباس آب' },
      { name: 'چای سبز', amount: '۲۵۰ میلی‌گرم', desc: 'آنتی‌اکسیدان و افزایش متابولیسم' }
    ],
    usage: [
      { title: 'صبح ناشتا', time: '', desc: 'یک کپسول با یک لیوان آب گرم مصرف کنید.' },
      { title: 'قبل از خواب', time: '', desc: 'یک کپسول دیگر برای پاکسازی شبانه.' },
      { title: 'در طول روز', time: '', desc: 'حداقل ۸ تا ۱۰ لیوان آب بنوشید.' },
      { title: 'مدت دوره', time: '', desc: '۱۴ تا ۲۱ روز برای پاکسازی اولیه توصیه می‌شود.' }
    ],
    warning: 'مصرف این محصول برای زنان باردار و شیرده ممنوع است. در صورت مصرف دارو با پزشک مشورت کنید.'
  },
  {
    id: 3, slug: 'barbieslim-night', name: 'BarbieSlim Night',
    desc: 'قرص شبانه برای سوخت‌وساز در خواب',
    cat: 'night', rating: 4.3, reviews: 64, icon: 'fa-tablets',
    badge: 'off', badgeText: 'تخفیف', organic: true, stock: true,
    popular: 70, date: 20240115,
    longDesc: `BarbieSlim Night با فرمولاسیون ویژه خود، سوخت‌وساز بدن را در طول خواب افزایش می‌دهد. این محصول با ترکیبات آرام‌بخش طبیعی، کیفیت خواب را بهبود بخشیده و به چربی‌سوزی شبانه کمک می‌کند.`,
    benefits: ['چربی‌سوزی در طول خواب','بهبود کیفیت خواب','کاهش اشتها در شب','افزایش متابولیسم پایه','کاهش استرس و آرامش ذهنی'],
    ingredients: [
      { name: 'ال‌تریپتوفان', amount: '۳۰۰ میلی‌گرم', desc: 'بهبود کیفیت خواب' },
      { name: 'منیزیم', amount: '۲۰۰ میلی‌گرم', desc: 'آرامش عضلانی' },
      { name: 'عصاره بابونه', amount: '۱۵۰ میلی‌گرم', desc: 'آرام‌بخش طبیعی' },
      { name: 'ال‌کارنیتین', amount: '۲۵۰ میلی‌گرم', desc: 'چربی‌سوزی شبانه' }
    ],
    usage: [
      { title: 'قبل از خواب', time: '۳۰ دقیقه', desc: 'یک کپسول همراه با آب ولرم مصرف کنید.' },
      { title: 'در طول روز', time: '', desc: 'از مصرف کافئین بعد از ساعت ۶ عصر خودداری کنید.' },
      { title: 'مدت دوره', time: '', desc: 'حداقل ۳۰ روز برای دیدن نتیجه توصیه می‌شود.' }
    ],
    warning: 'این محصول خواب‌آور است. بعد از مصرف رانندگی نکنید. زنان باردار و شیرده مصرف نکنند.'
  },
  {
    id: 4, slug: 'barbieslim-fiber', name: 'BarbieSlim Fiber',
    desc: 'قرص فیبر برای کاهش اشتها',
    cat: 'slim', rating: 4.2, reviews: 52, icon: 'fa-pills',
    badge: '', badgeText: '', organic: true, stock: true,
    popular: 60, date: 20240120,
    longDesc: `BarbieSlim Fiber با فیبر طبیعی گلوکومانان، حس سیری طولانی‌مدت ایجاد کرده و به کاهش طبیعی اشتها کمک می‌کند. مناسب برای افرادی که می‌خواهند بدون گرسنگی وزن کم کنند.`,
    benefits: ['ایجاد حس سیری طولانی‌مدت','کاهش طبیعی اشتها','بهبود عملکرد گوارش','کاهش قند خون بعد از غذا','بدون کالری اضافه'],
    ingredients: [
      { name: 'گلوکومانان', amount: '۵۰۰ میلی‌گرم', desc: 'فیبر طبیعی کونjac' },
      { name: 'پسیلیوم', amount: '۳۰۰ میلی‌گرم', desc: 'فیبر محلول' },
      { name: 'اینولین', amount: '۲۰۰ میلی‌گرم', desc: 'پری‌بیوتیک و بهبود گوارش' }
    ],
    usage: [
      { title: 'قبل از هر وعده', time: '۳۰ دقیقه', desc: 'یک کپسول با ۲ لیوان آب مصرف کنید.' },
      { title: 'در طول روز', time: '', desc: 'حداقل ۱۰ لیوان آب بنوشید.' },
      { title: 'مدت دوره', time: '', desc: '۳۰ روز' }
    ],
    warning: 'مصرف همراه با آب کافی الزامی است. افراد با مشکلات بلع مصرف نکنند.'
  },
  {
    id: 5, slug: 'barbieslim-tea', name: 'BarbieSlim Tea',
    desc: 'چای لاغری گیاهی با طعم دارچین',
    cat: 'tea', rating: 4.6, reviews: 98, icon: 'fa-mug-hot',
    badge: 'off', badgeText: 'تخفیف', organic: true, stock: true,
    popular: 90, date: 20240105,
    longDesc: `BarbieSlim Tea یک چای لاغری گیاهی با ترکیبات طبیعی است که به افزایش متابولیسم، کاهش نفخ و بهبود گوارش کمک می‌کند. طعم دلپذیر دارچین، مصرف روزانه را لذت‌بخش می‌کند.`,
    benefits: ['افزایش متابولیسم','کاهش نفخ و بهبود گوارش','کمک به چربی‌سوزی','آنتی‌اکسیدان قوی','طعم دلپذیر دارچین'],
    ingredients: [
      { name: 'چای سبز', amount: '۴۰٪', desc: 'افزایش متابولیسم' },
      { name: 'دارچین', amount: '۲۵٪', desc: 'تنظیم قند خون' },
      { name: 'زنجبیل', amount: '۲۰٪', desc: 'کاهش نفخ' },
      { name: 'لیمو', amount: '۱۵٪', desc: 'آنتی‌اکسیدان' }
    ],
    usage: [
      { title: 'صبح', time: '', desc: 'یک کیسه چای در آب جوش به مدت ۵ دقیقه دم کنید.' },
      { title: 'بعد از ناهار', time: '', desc: 'یک کیسه دیگر برای بهبود هضم.' },
      { title: 'مدت دوره', time: '', desc: 'مصرف روزانه ۲ تا ۳ فنجان.' }
    ],
    warning: 'مصرف بیش از ۴ فنجان در روز توصیه نمی‌شود. زنان باردار با پزشک مشورت کنند.'
  },
  {
    id: 6, slug: 'barbieslim-max', name: 'BarbieSlim Max',
    desc: 'قوی‌ترین فرمول چربی‌سوزی',
    cat: 'slim', rating: 4.8, reviews: 156, icon: 'fa-fire',
    badge: 'hot', badgeText: 'پرفروش', organic: true, stock: true,
    popular: 120, date: 20231220,
    longDesc: `BarbieSlim Max قوی‌ترین فرمول چربی‌سوزی باربی باش است که با ترکیب عصاره‌های گیاهی غلیظ، به سرعت متابولیسم را افزایش داده و چربی‌سوزی را تسریع می‌کند.`,
    benefits: ['چربی‌سوزی سریع و قوی','افزایش شدید متابولیسم','کاهش اشتها','افزایش انرژی و تمرکز','حفظ عضلات در حین کاهش وزن'],
    ingredients: [
      { name: 'عصاره چای سبز غلیظ', amount: '۸۰۰ میلی‌گرم', desc: 'چربی‌سوزی قوی' },
      { name: 'ال‌کارنیتین', amount: '۵۰۰ میلی‌گرم', desc: 'تبدیل چربی به انرژی' },
      { name: 'فلفل کاین', amount: '۲۰۰ میلی‌گرم', desc: 'ترموژنیک' },
      { name: 'کافئین طبیعی', amount: '۱۵۰ میلی‌گرم', desc: 'افزایش انرژی' },
      { name: 'کرومیوم', amount: '۱۰۰ میکروگرم', desc: 'کنترل قند خون' }
    ],
    usage: [
      { title: 'قبل از صبحانه', time: '۳۰ دقیقه', desc: 'یک کپسول با آب ولرم.' },
      { title: 'قبل از تمرین', time: '۳۰ دقیقه', desc: 'یک کپسول برای انرژی بیشتر.' },
      { title: 'مدت دوره', time: '', desc: '۳۰ تا ۴۵ روز' }
    ],
    warning: 'این محصول حاوی کافئین است. افراد با فشار خون بالا یا مشکلات قلبی مصرف نکنند.'
  },
  {
    id: 7, slug: 'barbieslim-green', name: 'BarbieSlim Green',
    desc: 'عصاره خالص چای سبز',
    cat: 'detox', rating: 4.4, reviews: 45, icon: 'fa-leaf',
    badge: '', badgeText: '', organic: true, stock: true,
    popular: 55, date: 20240210,
    longDesc: `BarbieSlim Green حاوی عصاره خالص چای سبز با بالاترین غلظت آنتی‌اکسیدان (EGCG) است که به افزایش متابولیسم، محافظت از سلول‌ها و کمک به کاهش وزن کمک می‌کند.`,
    benefits: ['آنتی‌اکسیدان قوی (EGCG)','افزایش متابولیسم','محافظت از سلول‌ها','کمک به چربی‌سوزی','بدون کافئین اضافه'],
    ingredients: [
      { name: 'عصاره چای سبز', amount: '۶۰۰ میلی‌گرم', desc: 'حاوی ۵۰٪ EGCG' },
      { name: 'ویتامین C', amount: '۱۰۰ میلی‌گرم', desc: 'افزایش جذب' },
      { name: 'کروم', amount: '۵۰ میکروگرم', desc: 'تنظیم قند خون' }
    ],
    usage: [
      { title: 'قبل از صبحانه', time: '', desc: 'یک کپسول با آب ولرم.' },
      { title: 'قبل از ناهار', time: '', desc: 'یک کپسول دیگر.' },
      { title: 'مدت دوره', time: '', desc: '۳۰ روز' }
    ],
    warning: 'در صورت حساسیت به کافئین با دوز پایین شروع کنید.'
  },
  {
    id: 8, slug: 'barbieslim-sleep', name: 'BarbieSlim Sleep',
    desc: 'قرص خواب و کاهش وزن',
    cat: 'night', rating: 4.1, reviews: 33, icon: 'fa-moon',
    badge: 'off', badgeText: 'تخفیف', organic: false, stock: false,
    popular: 40, date: 20240125,
    longDesc: `BarbieSlim Sleep با ترکیبات آرام‌بخش طبیعی، کیفیت خواب را بهبود می‌بخشد و در حین خواب به چربی‌سوزی کمک می‌کند. مناسب افرادی که با بی‌خوابی و اضافه وزن همزمان مواجه هستند.`,
    benefits: ['بهبود کیفیت خواب','چربی‌سوزی در خواب','کاهش استرس','کاهش اشتها شبانه','تنظیم هورمون‌های خواب'],
    ingredients: [
      { name: 'ملاتونین', amount: '۳ میلی‌گرم', desc: 'تنظیم چرخه خواب' },
      { name: 'ال‌تریپتوفان', amount: '۵۰۰ میلی‌گرم', desc: 'پیش‌ساز سروتونین' },
      { name: 'منیزیم', amount: '۳۰۰ میلی‌گرم', desc: 'آرامش عضلانی' },
      { name: 'بابونه', amount: '۲۰۰ میلی‌گرم', desc: 'آرام‌بخش' }
    ],
    usage: [
      { title: 'قبل از خواب', time: '۴۵ دقیقه', desc: 'یک کپسول با آب ولرم.' },
      { title: 'مدت دوره', time: '', desc: '۲۱ تا ۳۰ روز' }
    ],
    warning: 'بعد از مصرف رانندگی نکنید. مصرف همزمان با الکل ممنوع است.'
  },
  {
    id: 9, slug: 'barbieslim-berry', name: 'BarbieSlim Berry',
    desc: 'چای لاغری با طعم توت‌فرنگی',
    cat: 'tea', rating: 4.0, reviews: 28, icon: 'fa-mug-saucer',
    badge: 'new', badgeText: 'جدید', organic: true, stock: true,
    popular: 50, date: 20240301,
    longDesc: `BarbieSlim Berry یک چای لاغری خوش‌طعم با عصاره توت‌فرنگی است که به افزایش متابولیسم، کاهش نفخ و لذت نوشیدن روزانه کمک می‌کند.`,
    benefits: ['طعم دلپذیر توت‌فرنگی','افزایش متابولیسم','کاهش نفخ','آنتی‌اکسیدان بالا','بدون شکر افزوده'],
    ingredients: [
      { name: 'عصاره توت‌فرنگی', amount: '۳۵٪', desc: 'طعم و آنتی‌اکسیدان' },
      { name: 'چای سبز', amount: '۳۰٪', desc: 'متابولیسم' },
      { name: 'هیبیسکوس', amount: '۲۰٪', desc: 'کاهش فشار خون' },
      { name: 'نعناع', amount: '۱۵٪', desc: 'بهبود گوارش' }
    ],
    usage: [
      { title: 'صبح', time: '', desc: 'یک کیسه در آب جوش ۵ دقیقه دم کنید.' },
      { title: 'عصر', time: '', desc: 'یک فنجان دیگر.' },
      { title: 'مدت دوره', time: '', desc: 'روزانه ۲ تا ۳ فنجان.' }
    ],
    warning: 'افراد با حساسیت به گیاهان خانواده گل سرخ احتیاط کنند.'
  },
  {
    id: 10, slug: 'barbieslim-turbo', name: 'BarbieSlim Turbo',
    desc: 'افزایش متابولیسم و انرژی',
    cat: 'slim', rating: 4.6, reviews: 77, icon: 'fa-bolt',
    badge: '', badgeText: '', organic: true, stock: true,
    popular: 80, date: 20231210,
    longDesc: `BarbieSlim Turbo با ترکیب انرژی‌زا و متابولیسم‌سوز، به افزایش انرژی روزانه و چربی‌سوزی کمک می‌کند. مناسب افرادی که فعالیت بدنی دارند.`,
    benefits: ['افزایش انرژی روزانه','چربی‌سوزی در حین ورزش','بهبود تمرکز','کاهش خستگی','افزایش استقامت'],
    ingredients: [
      { name: 'جینسینگ', amount: '۴۰۰ میلی‌گرم', desc: 'افزایش انرژی' },
      { name: 'ال‌کارنیتین', amount: '۴۰۰ میلی‌گرم', desc: 'چربی‌سوزی' },
      { name: 'کافئین طبیعی', amount: '۱۰۰ میلی‌گرم', desc: 'تمرکز' },
      { name: 'ویتامین B12', amount: '۵۰ میکروگرم', desc: 'انرژی سلولی' }
    ],
    usage: [
      { title: 'قبل از صبحانه', time: '', desc: 'یک کپسول.' },
      { title: 'قبل از ورزش', time: '۳۰ دقیقه', desc: 'یک کپسول.' },
      { title: 'مدت دوره', time: '', desc: '۳۰ روز' }
    ],
    warning: 'افراد با فشار خون بالا یا مشکلات قلبی مصرف نکنند.'
  },
  {
    id: 11, slug: 'barbieslim-clean', name: 'BarbieSlim Clean',
    desc: 'پاکسازی کبد و روده',
    cat: 'detox', rating: 4.3, reviews: 41, icon: 'fa-droplet',
    badge: '', badgeText: '', organic: true, stock: true,
    popular: 45, date: 20240215,
    longDesc: `BarbieSlim Clean یک مکمل پاکسازی قوی برای کبد و روده است که به دفع سموم، بهبود گوارش و افزایش جذب مواد مغذی کمک می‌کند.`,
    benefits: ['پاکسازی کبد','بهبود گوارش','دفع سموم','کاهش نفخ','افزایش جذب مواد مغذی'],
    ingredients: [
      { name: 'خار مریم', amount: '۴۰۰ میلی‌گرم', desc: 'پاکسازی کبد' },
      { name: 'آرتیشو', amount: '۳۰۰ میلی‌گرم', desc: 'صفرا آور' },
      { name: 'قاصدک', amount: '۲۰۰ میلی‌گرم', desc: 'دفع سموم' },
      { name: 'زنجبیل', amount: '۱۵۰ میلی‌گرم', desc: 'گوارش' }
    ],
    usage: [
      { title: 'صبح ناشتا', time: '', desc: 'یک کپسول با آب گرم.' },
      { title: 'قبل از خواب', time: '', desc: 'یک کپسول دیگر.' },
      { title: 'مدت دوره', time: '', desc: '۱۴ تا ۲۱ روز' }
    ],
    warning: 'در صورت مصرف داروهای کبدی با پزشک مشورت کنید.'
  },
  {
    id: 12, slug: 'barbieslim-slim-plus', name: 'BarbieSlim Slim+',
    desc: 'مکمل ترکیبی لاغری و تناسب اندام',
    cat: 'slim', rating: 4.9, reviews: 210, icon: 'fa-star',
    badge: 'hot', badgeText: 'پرفروش', organic: true, stock: true,
    popular: 150, date: 20231201,
    longDesc: `BarbieSlim Slim+ کامل‌ترین مکمل لاغری باربی باش است که ترکیبی از چربی‌سوزی، کاهش اشتها، پاکسازی و افزایش انرژی را در یک محصول ارائه می‌دهد.`,
    benefits: ['چربی‌سوزی قوی','کاهش اشتها','پاکسازی بدن','افزایش انرژی','بهبود متابولیسم','حفظ توده عضلانی'],
    ingredients: [
      { name: 'عصاره چای سبز', amount: '۶۰۰ میلی‌گرم', desc: 'چربی‌سوزی' },
      { name: 'ال‌کارنیتین', amount: '۵۰۰ میلی‌گرم', desc: 'تبدیل چربی' },
      { name: 'گلوکومانان', amount: '۳۰۰ میلی‌گرم', desc: 'کاهش اشتها' },
      { name: 'جینسینگ', amount: '۲۵۰ میلی‌گرم', desc: 'انرژی' },
      { name: 'فلفل کاین', amount: '۱۵۰ میلی‌گرم', desc: 'ترموژنیک' },
      { name: 'کرومیوم', amount: '۱۰۰ میکروگرم', desc: 'قند خون' }
    ],
    usage: [
      { title: 'قبل از صبحانه', time: '۳۰ دقیقه', desc: 'یک کپسول با آب ولرم.' },
      { title: 'قبل از ناهار', time: '۳۰ دقیقه', desc: 'یک کپسول دیگر.' },
      { title: 'مدت دوره', time: '', desc: '۴۵ تا ۶۰ روز' }
    ],
    warning: 'حاوی کافئین است. افراد با فشار خون بالا مصرف نکنند.'
  }
];

/* ============================================================
   توابع عمومی
   ============================================================ */

function toPersian(num) {
  const fa = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
  return num.toString().split('').map(d => isNaN(parseInt(d)) ? d : fa[parseInt(d)]).join('');
}

function formatPrice(p) {
  return toPersian(Math.round(p).toLocaleString('en-US'));
}

function starsHTML(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) html += '<i class="fa-solid fa-star"></i>';
    else if (rating >= i - 0.5) html += '<i class="fa-solid fa-star-half-stroke"></i>';
    else html += '<i class="fa-regular fa-star"></i>';
  }
  return html;
}

function getProductBySlug(slug) { return PRODUCTS.find(p => p.slug === slug); }
function getProductById(id) { return PRODUCTS.find(p => p.id === id); }

// ⭐ ساخت خودکار ۴ تصویر محصول
function getProductImages(product) {
  if (product.images && product.images.length > 0) {
    return product.images;
  }
  const base = `images/products/${product.slug}`;
  return [
    `${base}/main.jpg`,
    `${base}/2.jpg`,
    `${base}/3.jpg`,
    `${base}/4.jpg`
  ];
}

/* ============================================================
   مدیریت سبد
   ============================================================ */

function getCart() {
  try { return JSON.parse(localStorage.getItem('cart') || '[]'); } catch { return []; }
}
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartBadge();
}
function addToCart(id, qty = 1) {
  const cart = getCart();
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty += qty;
  else cart.push({ id, qty });
  saveCart(cart);
}
function removeFromCart(id) { saveCart(getCart().filter(i => i.id !== id)); }
function updateCartQty(id, qty) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (item) { item.qty = Math.max(1, qty); saveCart(cart); }
}
function getCartCount() { return getCart().reduce((s, i) => s + i.qty, 0); }
function getCartTotal() {
  return getCart().reduce((s, item) => {
    const p = getProductById(item.id);
    return p ? s + getFinalPrice(p) * item.qty : s;
  }, 0);
}
function getCartSavings() {
  return getCart().reduce((s, item) => {
    const p = getProductById(item.id);
    return p ? s + getSavings(p) * item.qty : s;
  }, 0);
}
function getShippingCost() {
  const total = getCartTotal();
  if (total === 0) return 0;
  if (total >= FREE_SHIPPING_MIN) return 0;
  return SHIPPING_COST;
}
function updateCartBadge() {
  document.querySelectorAll('.cart-badge').forEach(b => {
    b.textContent = toPersian(getCartCount());
  });
}
document.addEventListener('DOMContentLoaded', updateCartBadge);