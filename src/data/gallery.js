export const galleryCategories = [
  { id: "all", labelEn: "All Work", labelMr: "सर्व कामे", icon: "layers" },
  { id: "badges", labelEn: "Badges & Pins", labelMr: "बॅजेस", icon: "badge" },
  { id: "gifts", labelEn: "Custom Gifts", labelMr: "गिफ्ट्स", icon: "package" },
  { id: "printing", labelEn: "Printing", labelMr: "प्रिंटिंग", icon: "print" },
  { id: "wedding", labelEn: "Wedding", labelMr: "लग्न समारंभ", icon: "favorite" },
  { id: "corporate", labelEn: "Corporate", labelMr: "कॉर्पोरेट", icon: "storefront" },
  { id: "csc", labelEn: "Citizen Services", labelMr: "नागरी सेवा", icon: "account_balance" }
];

export const galleryItems = [
  {
    id: "gal-1",
    category: "badges",
    titleEn: "Custom Pin & Magnet Badges Collection",
    titleMr: "कस्टम पिन व मॅग्नेट बॅजेस संग्रह",
    tagEn: "Core Specialty",
    tagMr: "आमचे वैशिष्ट्य",
    image: "/images/badges.webp",
    aspect: "4:3",
    descEn: "Actual production sheet of 44mm & 58mm gloss and matte button badges for wedding squads, rallies, and colleges.",
    descMr: "लग्न, प्रचार व कॉलेज फेस्टसाठी कोपरगाव वर्कशॉपमध्ये थेट तयार केलेले चमकदार व वॉटरप्रूफ बॅजेस.",
    colSpan: "md:col-span-8"
  },
  {
    id: "gal-2",
    category: "gifts",
    titleEn: "Personalized Double-Sided Acrylic Keychains",
    titleMr: "पर्सनलाइज्ड ॲक्रेलिक की-चेन",
    tagEn: "Dual Sided",
    tagMr: "दोन्ही बाजू प्रिंट",
    image: "/images/keychain.webp",
    aspect: "4:3",
    descEn: "Laser-cut crystal-clear acrylic keychains with full-color photos on both sides and durable keyrings.",
    descMr: "दोन्ही बाजूंनी मनपसंत फोटो आणि नावाचे आकर्षक, टिकाऊ ॲक्रेलिक की-चेन.",
    colSpan: "md:col-span-4",
    highlights: [
      { en: "Laser-cut cast acrylic", mr: "पारदर्शक ॲक्रेलिक" },
      { en: "Dual-side distinct photos", mr: "दोन्ही बाजूंनी फोटो" },
      { en: "Waterproof sealed", mr: "वॉटरप्रूफ कोटिंग" },
      { en: "Sturdy metal split ring", mr: "मजबूत की-रिंग" }
    ]
  },
  {
    id: "gal-3",
    category: "gifts",
    titleEn: "Sublimation Ceramic Photo Mugs & Magic Mugs",
    titleMr: "फोटो सिरॅमिक मग व मॅजिक मग",
    tagEn: "Heat Sublimation",
    tagMr: "परमनंट प्रिंट",
    image: "/images/mug.webp",
    aspect: "4:3",
    descEn: "High-gloss AAA ceramic mugs engineered with permanent heat-cured sublimation print that won't fade.",
    descMr: "वाढदिवस व ॲनिव्हर्सरीसाठी खास फोटो मग, सुंदर डिझाइन व मायक्रोवेव्ह सुरक्षित.",
    colSpan: "md:col-span-4"
  },
  {
    id: "gal-4",
    category: "printing",
    titleEn: "Photo Enlargements & Wooden Frame Keepsakes",
    titleMr: "फोटो प्रिंटिंग व लाकडी फ्रेम्स",
    tagEn: "HD Art Print",
    tagMr: "हाय-डेफिनिशन",
    image: "/images/college.webp",
    aspect: "4:3",
    descEn: "High-definition family portraits, birthday photo collages, and laminated milestone keepsake frames.",
    descMr: "कौटुंबिक फोटो व आठवणींचे हाय-रिझोल्यूशन प्रिंट्स आणि सुरक्षित लॅमिनेशन फ्रेम्स.",
    colSpan: "md:col-span-4"
  },
  {
    id: "gal-5",
    category: "corporate",
    titleEn: "Institute PVC ID Cards & Satin Neck Lanyards",
    titleMr: "शाळा व कॉलेज ओळखपत्रे व लेस",
    tagEn: "Institutes & Staff",
    tagMr: "कॉर्पोरेट किट",
    image: "/images/idcard.webp",
    aspect: "4:3",
    descEn: "Durable CR80 PVC identity cards paired with heat-transfer printed multicolor satin neck ribbons.",
    descMr: "टिकाऊ पीव्हीसी प्लास्टिक आयडी कार्ड्स आणि संस्थांच्या नावाच्या रंगीत सॅटिन लेस.",
    colSpan: "md:col-span-4"
  },
  {
    id: "gal-6",
    category: "printing",
    titleEn: "Custom Event T-Shirts & Sport Jersey Printing",
    titleMr: "सानुकूल टी-शर्ट प्रिंटिंग (DTF)",
    tagEn: "DTF Cotton Print",
    tagMr: "कॉटन टी-शर्ट",
    image: "/images/tshirt.webp",
    aspect: "4:3",
    descEn: "Direct-to-Film (DTF) vibrant garment printing on combed cotton for tournaments, reunions, and promotions.",
    descMr: "क्रिकेट स्पर्धा, मित्रमंडळ व ग्रुप्ससाठी आकर्षक रंगात टी-शर्ट प्रिंटिंग.",
    colSpan: "md:col-span-4"
  },
  {
    id: "gal-7",
    category: "corporate",
    titleEn: "Commercial Stationery, Product Labels & Bill Books",
    titleMr: "व्यावसायिक स्टेशनरी, स्टिकर्स व बिल बुक्स",
    tagEn: "Business Print",
    tagMr: "जीएसटी बिलिंग",
    image: "/images/labelle_book.webp",
    aspect: "4:3",
    descEn: "Carbonless invoice books, die-cut product packaging stickers, and letterheads for local Kopargaon enterprises.",
    descMr: "दुकानदार व स्थानिक व्यावसायिकांसाठी स्टिकर्स, लेटरहेड आणि पावती पुस्तके.",
    colSpan: "md:col-span-4"
  },
  {
    id: "gal-8",
    category: "csc",
    titleEn: "Kripa Online CSC Citizen Documentation Center",
    titleMr: "कृपा ऑनलाइन अधिकृत ग्राहक सेवा केंद्र",
    tagEn: "Government Authorized",
    tagMr: "शासकीय सेवा केंद्र",
    image: "/images/csc_desk.webp",
    aspect: "4:3",
    descEn: "Official citizen services counter in Kopargaon providing PAN, 7/12 land extracts, ration updates, and certificates.",
    descMr: "संजयनगर चौक, कोपरगाव येथे नागरिकांसाठी पारदर्शक व जलद शासकीय कागदपत्रे सेवा केंद्र.",
    colSpan: "md:col-span-4"
  }
];
