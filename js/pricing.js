/* ============================================================
   فایل قیمت‌گذاری - باربی باش
   ============================================================
   ⚠️ فقط یک تخفیف سراسری وجود دارد.
   قیمت قدیمی به‌طور خودکار از روی قیمت اصلی محاسبه می‌شود.
   ============================================================ */

// ⚙️ تنظیمات سراسری
const GLOBAL_DISCOUNT = 15;        // درصد تخفیف سراسری (۰ = غیرفعال)
const SHIPPING_COST = 180000;       // هزینه ارسال (تومان)
const FREE_SHIPPING_MIN = 5000000;  // حداقل خرید برای ارسال رایگان

/* ----------------------------------------
   💰 قیمت اصلی محصولات (فقط یک عدد - به تومان)
   ---------------------------------------- */
const PRICING = {
  1:  2800000,   // دایموند (Diamond) - اسپانیا ۳۲ عددی
  2:  2500000,   // اسلیم‌بوست (Slim Boost) - کانادا ۳۰ عددی
  3:  2400000,   // فایو-اس (Five-S) - آلمان ۳۰ عددی
  4:  2100000,   // بلک اسلیم (Black Slim) - فرانسه ۳۰ عددی
  5:  2100000,   // ایزی‌اسلیم (Easy Slim) - اسپانیا ۳۰ عددی
  6:  2100000,   // آلفا اسلیم (Alpha Slim) - آمریکا ۵۰ عددی
  7:  1800000,   // گلوریا (Gloria) - اسپانیا ۳۰ عددی
  8:  1600000,   // پاپایا اسلیم (Papaya Slim) - فیلیپین ۳۰ عددی
  9:  2000000,   // لیپوبلک (Lipo Black) - اسپانیا ۳۰ عددی

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

function getBasePrice(product) {
  return PRICING[product.id] || 0;
}

function getFinalPrice(product) {
  const base = getBasePrice(product);
  if (GLOBAL_DISCOUNT > 0) {
    return Math.round(base * (1 - GLOBAL_DISCOUNT / 100));
  }
  return base;
}

function getOldPrice(product) {
  if (GLOBAL_DISCOUNT > 0) {
    return getBasePrice(product);
  }
  return 0;
}

function getDiscountPercent(product) {
  return GLOBAL_DISCOUNT > 0 ? GLOBAL_DISCOUNT : 0;
}

function hasDiscount(product) {
  return GLOBAL_DISCOUNT > 0;
}

function getSavings(product) {
  const old = getOldPrice(product);
  const final = getFinalPrice(product);
  return old > final ? old - final : 0;
}
