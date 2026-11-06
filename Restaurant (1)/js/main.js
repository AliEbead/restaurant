// add and remove active in links  in scroll and in clicked
let section = document.querySelectorAll('.section')
let navLink = document.querySelectorAll('.nav-link')


window.addEventListener('scroll' , () => {
  let currentId = '';
  section.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - 150) {
      currentId = sec.getAttribute('id')
    }
  })
  navLink.forEach((el) => {
    el.classList.remove('active')
    if (el.getAttribute('href') === `#${currentId}`) {
      el.classList.add('active')
    } 
  })
})




navLink.forEach(  (ele)  =>  {
  ele.onclick = function () {
    navLink.forEach(function (ele) {
      ele.classList.remove("active")
    })
    this.classList.add("active")
  }
})



// display links
let bars = document.getElementById('bars');
let navBar = document.getElementById('navbar');

bars.addEventListener('click', function (e) {
  e.stopPropagation();
  if (window.innerWidth <= 992) {
    navBar.classList.toggle('show');
  }
});

document.addEventListener('click', function (e) {
  if (window.innerWidth <= 992) {
    if (!bars.contains(e.target) && !navBar.contains(e.target)) {
      navBar.classList.remove('show');
    }
  }
});

// Use a state selector for US addresses and a text field for other countries.
const countrySelector = document.getElementById('contact-country');
const stateField = document.getElementById('contact-state-field');
const stateSelector = document.getElementById('contact-state');
const regionInput = document.getElementById('contact-region');

if (countrySelector && stateField && stateSelector && regionInput) {
  const updateRegionField = function () {
    const hasCountry = countrySelector.value !== '';
    const isUnitedStates = countrySelector.value === 'US';

    stateField.hidden = !hasCountry;
    stateSelector.hidden = !isUnitedStates;
    stateSelector.disabled = !isUnitedStates;
    stateSelector.required = isUnitedStates;
    regionInput.hidden = !hasCountry || isUnitedStates;
    regionInput.disabled = !hasCountry || isUnitedStates;
    regionInput.required = hasCountry && !isUnitedStates;

    if (isUnitedStates) {
      regionInput.value = '';
    } else {
      stateSelector.value = '';
    }
  };

  countrySelector.addEventListener('change', updateRegionField);
  updateRegionField();
}

// Translate page text locally and switch the document direction for Arabic.
const languageToggle = document.getElementById('language-toggle');
const themeToggle = document.getElementById('theme-toggle');
const appearanceAccordion = document.querySelector('.appearance-accordion');
if (appearanceAccordion) {
  const heroSection = appearanceAccordion.closest('.hero');
  const updateAppearanceLayout = function () {
    if (heroSection) {
      heroSection.classList.toggle('appearance-open', appearanceAccordion.open);
    }
  };
  appearanceAccordion.addEventListener('toggle', updateAppearanceLayout);
  updateAppearanceLayout();
}
const translations = {
  'Fast Food & Restaurant': 'وجبات سريعة ومطعم',
  'Home': 'الرئيسية',
  'About': 'من نحن',
  'Menu': 'القائمة',
  'Chefs': 'الطهاة',
  'Reservation': 'الحجز',
  'Reviews': 'التقييمات',
  'Contact': 'اتصل بنا',
  'Order Now': 'اطلب الآن',
  'Display settings': 'إعدادات العرض',
  'Theme & appearance': 'السمة والمظهر',
  'Dark mode': 'الوضع الداكن',
  'Light mode': 'الوضع الفاتح',
  'Language': 'اللغة',
  'Appearance': 'المظهر',
  'FOOD': 'طعام',
  '#1Rated Fast Food Restaurant in New York': 'المطعم الأول للوجبات السريعة في نيويورك',
  'Delicious': 'لذيذ',
  'Fast Food': 'وجبات سريعة',
  'for Every': 'لكل',
  'Moment': 'لحظة',
  'Experience bold flavors crafted from premium ingredients. From crispy burgers to gourmet pizzas - every bite is an adventure worth savoring.': 'استمتع بنكهات غنية محضّرة من مكونات ممتازة. من البرغر المقرمش إلى البيتزا الفاخرة، كل لقمة تجربة تستحق الاستمتاع.',
  'Explore Menu': 'استكشف القائمة',
  'Watch Our Story': 'شاهد قصتنا',
  'Happy Customers': 'عملاء سعداء',
  'Menu Items': 'أطباق في القائمة',
  'Expert Chefs': 'طهاة خبراء',
  ' yr': ' سنة',
  'Hot Deal': 'عرض ساخن',
  '30% off today': 'خصم ٣٠٪ اليوم',
  '2k+ reviews': 'أكثر من ٢٠٠٠ تقييم',
  '20 min': '٢٠ دقيقة',
  'Fast delivery': 'توصيل سريع',
  'Crispy Fried Chicken': 'دجاج مقلي مقرمش',
  'Gourmet Burgers': 'برغر فاخر',
  'Artisan Pizzas': 'بيتزا حرفية',
  'Fresh Wraps & Rolls': 'لفائف طازجة',
  'Loaded Fries': 'بطاطس محمّلة',
  'Ice Cream Shakes': 'مخفوقات آيس كريم',
  'Grilled Sandwiches': 'ساندويتشات مشوية',
  'What We Offer': 'ما نقدمه',
  'Browse by': 'تصفح حسب',
  'Category': 'الفئة',
  'From sizzling burgers to exotic world cuisines - find your favourite in our menu': 'من البرغر الشهي إلى مطابخ العالم المميزة، اعثر على ما تفضله في قائمتنا',
  'All Items': 'كل الأصناف',
  '99 items': '٩٩ صنفاً',
  '24 items': '٢٤ صنفاً',
  '18 items': '١٨ صنفاً',
  '15 items': '١٥ صنفاً',
  '20 items': '٢٠ صنفاً',
  'Burgers': 'برغر',
  'Pizza': 'بيتزا',
  'Fried Chicken': 'دجاج مقلي',
  'Wraps': 'لفائف',
  'Desserts': 'حلويات',
  'Our Story': 'قصتنا',
  'We Invite You to Visit Our': 'ندعوك لزيارة',
  'Food Restaurant': 'مطعمنا',
  'years of Excellence': 'سنوات من التميز',
  "Founded in 2012, Sarab began as a small corner joint with a big dream - to serve food that brings people together. Today we're proud to serve thousands of happy customers every week with the same passion that started it all.": 'تأسس مطعم سراب عام ٢٠١٢ كمتجر صغير وحلم كبير: تقديم طعام يجمع الناس. نفخر اليوم بخدمة آلاف العملاء أسبوعياً بالشغف نفسه الذي بدأ به كل شيء.',
  '100% Fresh Ingredients': 'مكونات طازجة ١٠٠٪',
  'We source locally and sustainably. Every ingredient is hand-picked daily for maximum freshness.': 'نختار مصادر محلية ومستدامة، وننتقي المكونات يومياً لضمان أقصى درجات الطزاجة.',
  'Award-Winning Recipes': 'وصفات حائزة على جوائز',
  'Our signature recipes have won national culinary awards 5 years in a row.': 'حازت وصفاتنا المميزة جوائز وطنية في الطهي لخمس سنوات متتالية.',
  'Lightning-Fast Delivery': 'توصيل فائق السرعة',
  'Order online and get hot, fresh food at your door in under 25 minutes, guaranteed.': 'اطلب عبر الإنترنت واستلم طعاماً ساخناً وطازجاً خلال أقل من ٢٥ دقيقة، مضمون.',
  'View Full Menu': 'عرض القائمة كاملة',
  "What's Cooking": 'ماذا نطبخ',
  'Our Delicious': 'قائمتنا الشهية',
  'All': 'الكل',
  'Chicken': 'دجاج',
  'Pasta': 'معكرونة',
  'Hot': 'حار',
  'New': 'جديد',
  'Best Seller': 'الأكثر مبيعاً',
  "Chef's Pick": 'اختيار الشيف',
  'Classic Smash Burger': 'برغر سماش كلاسيكي',
  'Double smashed patty, cheddar, caramelized onions, pickles & special sauce': 'قطعتا لحم مشويتان، شيدر، بصل مكرمل، مخلل وصلصة خاصة',
  'Margherita Royale': 'مارغريتا رويال',
  'San Marzano tomatoes, buffalo mozzarella, basil & truffle oil on sourdough': 'طماطم سان مارزانو، موزاريلا، ريحان وزيت الكمأة على خبز مخمر',
  'Nashville Hot Chicken': 'دجاج ناشفيل الحار',
  'Crispy fried chicken in fiery Nashville spice blend with honey drizzle': 'دجاج مقلي مقرمش بتوابل ناشفيل الحارة ولمسة من العسل',
  'Loaded Fajita Wrap': 'لفافة فاهيتا محمّلة',
  'Grilled chicken, peppers, sour cream & guacamole in a warm tortilla': 'دجاج مشوي، فلفل، كريمة حامضة وغواكامولي في خبز تورتيلا دافئ',
  'Nutella Lava Cake': 'كيكة نوتيلا ذائبة',
  'Molten chocolate cake with Nutella center, vanilla ice cream & caramel': 'كيكة شوكولاتة سائلة بحشوة نوتيلا، آيس كريم فانيليا وكراميل',
  'Truffle Mushroom Pasta': 'معكرونة بالفطر والكمأة',
  'Al dente tagliatelle, wild mushrooms, black truffle, parmesan & thyme': 'تالياتيلي مطهوة بإتقان، فطر بري، كمأة سوداء، بارميزان وزعتر',
  'Limited Time Offer': 'عرض لفترة محدودة',
  'Get 30% Off': 'احصل على خصم ٣٠٪',
  'Our Signature': 'وجبتنا المميزة',
  'Burger': 'برغر',
  'Meal': 'وجبة',
  "Don't miss our weekend special - grab our award-winning signature burger combo with loaded fries and a premium shake at an unbeatable price.": 'لا تفوّت عرض نهاية الأسبوع: وجبة البرغر المميزة مع بطاطس محمّلة ومخفوق فاخر بسعر لا يُفوّت.',
  'Hours': 'ساعات',
  'Minutes': 'دقائق',
  'Seconds': 'ثوانٍ',
  'Grab the Deal': 'احصل على العرض',
  'Wood-Fired Pizza': 'بيتزا على الحطب',
  'Sweet Desserts': 'حلويات شهية',
  'Get in Touch': 'تواصل معنا',
  'Send Us a': 'أرسل لنا',
  'Message': 'رسالة',
  'Name': 'الاسم',
  'Your name': 'اسمك',
  'Phone number': 'رقم الهاتف',
  'Your phone number': 'رقم هاتفك',
  'Country': 'الدولة',
  'Select your country': 'اختر دولتك',
  'United States': 'الولايات المتحدة',
  'Canada': 'كندا',
  'United Kingdom': 'المملكة المتحدة',
  'Australia': 'أستراليا',
  'New Zealand': 'نيوزيلندا',
  'India': 'الهند',
  'Pakistan': 'باكستان',
  'Bangladesh': 'بنغلاديش',
  'China': 'الصين',
  'Japan': 'اليابان',
  'South Korea': 'كوريا الجنوبية',
  'United Arab Emirates': 'الإمارات العربية المتحدة',
  'Saudi Arabia': 'المملكة العربية السعودية',
  'Egypt': 'مصر',
  'South Africa': 'جنوب أفريقيا',
  'Nigeria': 'نيجيريا',
  'France': 'فرنسا',
  'Germany': 'ألمانيا',
  'Italy': 'إيطاليا',
  'Spain': 'إسبانيا',
  'Brazil': 'البرازيل',
  'Mexico': 'المكسيك',
  'Argentina': 'الأرجنتين',
  'Other': 'أخرى',
  'State / Province / Region': 'الولاية / المقاطعة / المنطقة',
  'Select your state': 'اختر ولايتك',
  'Enter your state, province, or region': 'أدخل الولاية أو المقاطعة أو المنطقة',
  'Subject': 'الموضوع',
  'Message subject': 'موضوع الرسالة',
  'Write your message': 'اكتب رسالتك',
  'Send Message': 'إرسال الرسالة',
  'Alabama': 'ألاباما',
  'Alaska': 'ألاسكا',
  'Arizona': 'أريزونا',
  'Arkansas': 'أركنساس',
  'California': 'كاليفورنيا',
  'Colorado': 'كولورادو',
  'Connecticut': 'كونيتيكت',
  'Delaware': 'ديلاوير',
  'Florida': 'فلوريدا',
  'Georgia': 'جورجيا',
  'Hawaii': 'هاواي',
  'Idaho': 'أيداهو',
  'Illinois': 'إلينوي',
  'Indiana': 'إنديانا',
  'Iowa': 'آيوا',
  'Kansas': 'كانساس',
  'Kentucky': 'كنتاكي',
  'Louisiana': 'لويزيانا',
  'Maine': 'مين',
  'Maryland': 'ماريلاند',
  'Massachusetts': 'ماساتشوستس',
  'Michigan': 'ميشيغان',
  'Minnesota': 'مينيسوتا',
  'Mississippi': 'ميسيسيبي',
  'Missouri': 'ميزوري',
  'Montana': 'مونتانا',
  'Nebraska': 'نبراسكا',
  'Nevada': 'نيفادا',
  'New Hampshire': 'نيوهامشير',
  'New Jersey': 'نيوجيرسي',
  'New Mexico': 'نيومكسيكو',
  'New York': 'نيويورك',
  'North Carolina': 'كارولاينا الشمالية',
  'North Dakota': 'داكوتا الشمالية',
  'Ohio': 'أوهايو',
  'Oklahoma': 'أوكلاهوما',
  'Oregon': 'أوريغون',
  'Pennsylvania': 'بنسلفانيا',
  'Rhode Island': 'رود آيلاند',
  'South Carolina': 'كارولاينا الجنوبية',
  'South Dakota': 'داكوتا الجنوبية',
  'Tennessee': 'تينيسي',
  'Texas': 'تكساس',
  'Utah': 'يوتا',
  'Vermont': 'فيرمونت',
  'Virginia': 'فرجينيا',
  'Washington': 'واشنطن',
  'West Virginia': 'فرجينيا الغربية',
  'Wisconsin': 'ويسكونسن',
  'Wyoming': 'وايومنغ',
  'District of Columbia': 'مقاطعة كولومبيا'
};
const originalText = new WeakMap();
const originalAttributes = new WeakMap();
const normalizeText = (text) => text.trim().replace(/\s+/g, ' ');
const applyLanguage = function (language) {
  const isArabic = language === 'ar';
  document.documentElement.lang = language;
  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  document.body.dir = document.documentElement.dir;

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    const english = originalText.get(node);
    const normalized = normalizeText(english);
    if (!normalized) continue;
    const translated = isArabic ? (translations[normalized] || normalized) : normalized;
    const leadingWhitespace = english.match(/^\s*/)[0];
    const trailingWhitespace = english.match(/\s*$/)[0];
    node.nodeValue = `${leadingWhitespace}${translated}${trailingWhitespace}`;
  }

  document.querySelectorAll('[placeholder], [title], [alt]').forEach((element) => {
    ['placeholder', 'title', 'alt'].forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;
      if (!originalAttributes.has(element)) originalAttributes.set(element, {});
      const saved = originalAttributes.get(element);
      if (!(attribute in saved)) saved[attribute] = element.getAttribute(attribute);
      const english = saved[attribute];
      element.setAttribute(attribute, isArabic ? (translations[english] || english) : english);
    });
  });

  const languageCode = languageToggle.querySelector('.language-code');
  const languageLabel = languageToggle.querySelector('.language-label');
  languageCode.textContent = isArabic ? 'AR' : 'EN';
  languageLabel.textContent = isArabic ? 'اللغة' : 'Language';
  languageToggle.classList.toggle('is-arabic', isArabic);
  languageToggle.setAttribute('aria-label', isArabic ? 'Switch to English' : 'Switch to Arabic');
  document.title = isArabic ? 'سراب - مطعم ووجبات سريعة' : 'Sarab - Fast Food & Restaurant HTML Template';

  const themeLabel = themeToggle && themeToggle.querySelector('.appearance-mode-copy > span');
  if (themeLabel) {
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeLabel.textContent = isArabic
      ? (isDarkMode ? 'الوضع الفاتح' : 'الوضع الداكن')
      : (isDarkMode ? 'Light mode' : 'Dark mode');
    themeToggle.setAttribute('aria-label', isArabic
      ? (isDarkMode ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع الداكن')
      : (isDarkMode ? 'Enable light mode' : 'Enable dark mode'));
    themeToggle.title = themeLabel.textContent;
  }
};

if (themeToggle) {
  const isDarkMode = localStorage.getItem('restaurant-dark-mode') === 'on';
  const themeIcon = themeToggle.querySelector('i');
  document.body.classList.toggle('dark-mode', isDarkMode);
  themeIcon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
  themeToggle.setAttribute('aria-pressed', String(isDarkMode));
}

if (languageToggle) {
  const savedLanguage = localStorage.getItem('restaurant-language') || 'en';
  applyLanguage(savedLanguage);
  languageToggle.addEventListener('click', function () {
    const nextLanguage = document.documentElement.lang === 'ar' ? 'en' : 'ar';
    document.body.classList.remove('language-transition');
    void document.body.offsetWidth;
    document.body.classList.add('language-transition');
    localStorage.setItem('restaurant-language', nextLanguage);
    applyLanguage(nextLanguage);
    window.setTimeout(function () {
      document.body.classList.remove('language-transition');
    }, 350);
  });
}

// Toggle a warm dark theme from the appearance settings.
if (themeToggle) {
  const themeLabel = themeToggle.querySelector('.appearance-mode-copy > span');
  const themeIcon = themeToggle.querySelector('i');
  themeToggle.addEventListener('click', function () {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('restaurant-dark-mode', isDarkMode ? 'on' : 'off');
    const isArabic = document.documentElement.lang === 'ar';
    themeLabel.textContent = isArabic
      ? (isDarkMode ? 'الوضع الفاتح' : 'الوضع الداكن')
      : (isDarkMode ? 'Light mode' : 'Dark mode');
    themeIcon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
    themeToggle.setAttribute('aria-label', isArabic
      ? (isDarkMode ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع الداكن')
      : (isDarkMode ? 'Enable light mode' : 'Enable dark mode'));
    themeToggle.setAttribute('aria-pressed', String(isDarkMode));
    themeToggle.title = themeLabel.textContent;
  });
}

// add transition for any element to show it smooth
const observer = new IntersectionObserver((entries) => { 
   entries.forEach((entry) => {
     if (entry.isIntersecting) { 
       entry.target.classList.add('active'); 
       
     }
    }); 
   
 }); 
 const hiddenElements = document.querySelectorAll('.reveal-element');
 hiddenElements.forEach((el) => observer.observe(el));
 
 const hiddenElement = document.querySelectorAll('.reveal-elemen');
 hiddenElement.forEach((el) => observer.observe(el));


/* increase counter*/

let nums = document.querySelectorAll('.numbers .snum')

let sectionHero = document.querySelector('.hero')

let started = false; 

let sectinAbout = document.querySelector('.about')

let number = document.querySelectorAll('.about .num')
let start = false; 


window.onscroll = function () {
  if (window.scrollY >= sectionHero.offsetTop - 200 ) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true
  }
  
  if (window.scrollY >= sectinAbout.offsetTop - 500) {
    if (!start) {
      number.forEach((nu) => startCount(nu))
    }
    start = true

  }
}

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// about section
// add and remove active from cat Item
let catBox = document.querySelectorAll('.cat-item')

catBox.forEach((ele) => {
  ele.onclick = function() {
    catBox.forEach(function(ele) {
      ele.classList.remove("active")
    })
    this.classList.add("active")
  }
})

// menu display food 

let switchLis = document.querySelectorAll(' .switch li');
let switchA = document.querySelectorAll(' .cat-item a');
let menuBox = Array.from(document.querySelectorAll('.menLink .gallary .box'))

switchA.forEach((el) => {
  el.addEventListener('click' , managBox)
  el.addEventListener('click', syncMenuWithCat);
}) 

switchLis.forEach((li) => {
  li.addEventListener('click' , removeAddActive)
  li.addEventListener('click' , managBox)
  
})

function removeAddActive() {
  switchLis.forEach((li) => {
    li.classList.remove('active')
    this.classList.add("active")

  })
}

function managBox() {
  menuBox.forEach((box) => {
    box.style.display = 'none'
  })
  if (this.dataset.cat) {
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = 'block'
  })
  }
  
}


function syncMenuWithCat() {
    let category = this.dataset.cat; // يجيب الـ data-cat الخاص بالكارت المضغوط

    if (category) {
        // 1. إزالة active من كل أزرار القائمة السفلية
        switchLis.forEach((li) => {
            li.classList.remove('active');
        });

        // 2. البحث عن الزر المطابق في القائمة السفلية وإضافة active له
        let matchingLi = document.querySelector(`.switch li[data-cat="${category}"]`);
        if (matchingLi) {
            matchingLi.classList.add('active');
        }
    }
}
// add active to heart
let ido = document.querySelectorAll('.heart i')

ido.forEach((el) => {
  el.addEventListener('click', (e) => {
    el.classList.toggle('active')
  })
})

// add sound in click 
let allLinkA = document.querySelectorAll('a')

const pip = new Audio("/music/g.mp3");
pip.preload = "auto";

allLinkA.forEach((link) =>{
  link.addEventListener('click', (e) =>  {
    e.preventDefault();
    
    pip.currentTime = 0;
    pip.play().catch(() => {});
    const targetUrl  = link.href;
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 200);
})
})
