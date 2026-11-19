/* ============================================================
   فایل قیمت‌گذاری - باربی باش
   ============================================================
   ⚠️ فقط یک تخفیف سراسری وجود دارد.
   قیمت قدیمی به‌طور خودکار از روی قیمت اصلی محاسبه می‌شود.
   ============================================================ */

// ⚙️ تنظیمات سراسری
const GLOBAL_DISCOUNT = 15;        // درصد تخفیف سراسری (۰ = غیرفعال)
const SHIPPING_COST = 50000;       // هزینه ارسال (تومان)
const FREE_SHIPPING_MIN = 500000;  // حداقل خرید برای ارسال رایگان

/* ----------------------------------------
   💰 قیمت اصلی محصولات (فقط یک عدد)
   ----------------------------------------
   قیمت نهایی و قیمت خط‌خورده خودکار محاسبه می‌شوند.
   ---------------------------------------- */
const PRICING = {
  1:  1600,   // PapayaSlim
  2:  399000,   // BarbieSlim Detox
  3:  550000,   // BarbieSlim Night
  4:  299000,   // BarbieSlim Fiber
  5:  199000,   // BarbieSlim Tea
  6:  650000,   // BarbieSlim Max
  7:  349000,   // BarbieSlim Green
  8:  450000,   // BarbieSlim Sleep
  9:  219000,   // BarbieSlim Berry
  10: 599000,   // BarbieSlim Turbo
  11: 379000,   // BarbieSlim Clean
  12: 720000    // BarbieSlim Slim+
};

/* ----------------------------------------
   📞 اطلاعات مشاور
   ---------------------------------------- */
const ADVISOR = {
  whatsapp: '989307167748',
  telegram: 'barbibash2427',
  phone: '09307167748',
  name: 'مشاوره و ثبت سفارش فقط تلگرام و واتساپ'
};

/* ============================================================
   توابع قیمت
   ============================================================ */

// قیمت اصلی (همان عدد در PRICING)
function getBasePrice(product) {
  return PRICING[product.id] || 0;
}

// ⭐ قیمت نهایی با تخفیف سراسری
function getFinalPrice(product) {
  const base = getBasePrice(product);
  if (GLOBAL_DISCOUNT > 0) {
    return Math.round(base * (1 - GLOBAL_DISCOUNT / 100));
  }
  return base;
}

// ⭐ قیمت قدیمی (خط‌خورده) — خودکار = قیمت اصلی
function getOldPrice(product) {
  if (GLOBAL_DISCOUNT > 0) {
    return getBasePrice(product);
  }
  return 0;  // اگر تخفیف نیست، قیمت قدیمی نمایش داده نمی‌شود
}

// ⭐ درصد تخفیف — همیشه GLOBAL_DISCOUNT
function getDiscountPercent(product) {
  return GLOBAL_DISCOUNT > 0 ? GLOBAL_DISCOUNT : 0;
}

// آیا تخفیف دارد؟
function hasDiscount(product) {
  return GLOBAL_DISCOUNT > 0;
}

// مبلغ صرفه‌جویی
function getSavings(product) {
  const old = getOldPrice(product);
  const final = getFinalPrice(product);
  return old > final ? old - final : 0;
}