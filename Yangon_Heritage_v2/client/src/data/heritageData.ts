export interface HeritagePlace {
  id: string;
  nameMM: string;
  nameEN: string;
  lat: number;
  lng: number;
  description: string;
  descriptionMM: string;
  year: string;
  category: string;
}

export const heritagePlaces: HeritagePlace[] = [
  {
    id: "australian-embassy",
    nameMM: "ရန်ကုန်မြို့ရှိ ဩစတြေးလျ သံရုံး",
    nameEN: "ရန်ကုန်မြို့ရှိ ဩစတြေးလျ သံရုံး (Australian Embassy)",
    lat: 16.77001295,
    lng: 96.16301014,
    description: "The Australian Embassy in Yangon, a diplomatic mission representing Australia in Myanmar.",
    descriptionMM: "ရန်ကုန်မြို့ရှိ ဩစတြေးလျ သံရုံး",
    year: "1948",
    category: "Embassy"
  },
  {
    id: "british-council",
    nameMM: "ဗြိတိသျှကောင်စီ",
    nameEN: "British Council Yangon",
    lat: 16.76963191,
    lng: 96.1636019,
    description: "British Council Yangon, a center for English language education and cultural exchange.",
    descriptionMM: "ဗြိတိသျှကောင်စီ",
    year: "1946",
    category: "Cultural Institution"
  },
  {
    id: "mpt-headquarters",
    nameMM: "MPT ရုံးချုပ်",
    nameEN: "MPT ရုံးချုပ် (Myanma Posts & Telecommunications)",
    lat: 16.77443301,
    lng: 96.15740471,
    description: "Myanmar Posts & Telecommunications headquarters, representing colonial-era communications infrastructure.",
    descriptionMM: "MPT ရုံးချုပ်",
    year: "1884",
    category: "Government Building"
  },
  {
    id: "armenian-church",
    nameMM: "စိန့်ဂျွန် သက္ကေတ အာမေးနီးယန်း ဘုရားကျောင်း",
    nameEN: "စိန်ဂျွန် သမက္ကတ အာမေနီးယန်း ဘုရားကျောင်း (St. John the Baptist Armenian Church)",
    lat: 16.77161261,
    lng: 96.16398137,
    description: "The oldest church in Yangon, representing the Armenian Christian community.",
    descriptionMM: "စိန့်ဂျွန် သက္ကေတ အာမေးနီးယန်း ဘုရားကျောင်း",
    year: "1863",
    category: "Religious Building"
  },
  {
    id: "sule-shangri-la",
    nameMM: "ဆူးလေရှန်ဂရီလာ",
    nameEN: "ဆူးလေရှန်ဂရီလာ (Sule Shangri-La)",
    lat: 16.77930136,
    lng: 96.1585671,
    description: "Luxury hotel featuring colonial aesthetic design with high ceilings and chandeliers.",
    descriptionMM: "ဆူးလေရှန်ဂရီလာ",
    year: "1996",
    category: "Hotel"
  },
  {
    id: "aya-bank",
    nameMM: "ဧရာဝတီဘဏ်",
    nameEN: "ဧရာဝတီဘဏ် (AYA Bank - YGN 26)",
    lat: 16.775217,
    lng: 96.16049322,
    description: "AYA Bank operating from a historic colonial building.",
    descriptionMM: "ဧရာဝတီဘဏ်",
    year: "2010",
    category: "Financial Institution"
  },
  {
    id: "sule-pagoda",
    nameMM: "ဆူးလေဘုရား",
    nameEN: "ဆူးလေဘုရား",
    lat: 16.77486583,
    lng: 96.15897683,
    description: "The iconic Sule Pagoda, believed to be over 2,600 years old, serving as the center point of Yangon.",
    descriptionMM: "ဆူးလေဘုရား",
    year: "1755",
    category: "Religious Building"
  },
  {
    id: "yangon-city-hall",
    nameMM: "ရန်ကုန်မြို့တော်ခန်းမ",
    nameEN: "ရန်ကုန်မြို့တော်ခန်းမ (Yangon City Hall)",
    lat: 16.77517024,
    lng: 96.15971057,
    description: "Yangon City Hall, completed in 1936, representing fine colonial architecture.",
    descriptionMM: "ရန်ကုန်မြို့တော်ခန်းမ",
    year: "1936",
    category: "Government Building"
  },
  {
    id: "mahabandoola-park",
    nameMM: "မဟာဗန္ဓုလပန်းခြံ",
    nameEN: "မဟာဗန္ဓုလပန်းခြံ",
    lat: 16.77332703,
    lng: 96.15942295,
    description: "Mahabandoola Park, originally Fytche Square, features the Independence Monument at its center.",
    descriptionMM: "မဟာဗန္ဓုလပန်းခြံ",
    year: "1867",
    category: "Public Space"
  },
  {
    id: "emmanade-pagoda",
    nameMM: "ဧမာနွေလ ဘုရားကျောင်း",
    nameEN: "ဧမာနွေလ ဘုရားကျောင်း",
    lat: 16.7742642,
    lng: 96.16041382,
    description: "Historic pagoda in downtown Yangon.",
    descriptionMM: "ဧမာနွေလ ဘုရားကျောင်း",
    year: "1880",
    category: "Religious Building"
  },
  {
    id: "supreme-court",
    nameMM: "ပြည်ထောင်စု တရားလွှတ်တော်ချုပ်",
    nameEN: "ပြည်ထောင်စု တရားလွှတ်တော်ချုပ်",
    lat: 16.77302863,
    lng: 96.16131472,
    description: "The Union Supreme Court building representing colonial judicial architecture.",
    descriptionMM: "ပြည်ထောင်စု တရားလွှတ်တော်ချုပ်",
    year: "1920",
    category: "Government Building"
  },
  {
    id: "mab-bank-1",
    nameMM: "မြန်မာ့ရှေ့ဆောင်ဘဏ်",
    nameEN: "မြန်မာ့ရှေ့ဆောင်ဘဏ် (MAB Bank)",
    lat: 16.77308544,
    lng: 96.15595862,
    description: "Myanmar Agricultural Bank headquarters.",
    descriptionMM: "မြန်မာ့ရှေ့ဆောင်ဘဏ်",
    year: "1920",
    category: "Financial Institution"
  },
  {
    id: "custom-house",
    nameMM: "ရန်ကုန်မြို့ အကောက်ခွန်ဦးစီးဌာနရုံးချုပ်",
    nameEN: "ရန်ကုန်မြို့ အကောက်ခွန်ဦးစီးဌာနရုံးချုပ် (Custom House, Yangon)",
    lat: 16.77026341,
    lng: 96.16028011,
    description: "Historic Custom House representing colonial trade infrastructure.",
    descriptionMM: "ရန်ကုန်မြို့ အကောက်ခွန်ဦးစီးဌာနရုံးချုပ်",
    year: "1912",
    category: "Government Building"
  },
  {
    id: "meb-bank-3",
    nameMM: "မြန်မာ့စီးပွားရေးဘဏ် ခွဲ (၃)",
    nameEN: "မြန်မာ့စီးပွားရေးဘဏ် ခွဲ (၃)",
    lat: 16.77179842,
    lng: 96.15840894,
    description: "Myanma Economic Bank branch office.",
    descriptionMM: "မြန်မာ့စီးပွားရေးဘဏ် ခွဲ (၃)",
    year: "1920",
    category: "Financial Institution"
  },
  {
    id: "meb-bank-2",
    nameMM: "မြန်မာ့စီးပွားရေးဘဏ် ခွဲ (၂)",
    nameEN: "Myanma Economic Bank(မြန်မာ့စီးပွားရေးဘဏ် ခွဲ (၂))",
    lat: 16.77076119,
    lng: 96.16121276,
    description: "Myanma Economic Bank branch office.",
    descriptionMM: "မြန်မာ့စီးပွားရေးဘဏ် ခွဲ (၂)",
    year: "1920",
    category: "Financial Institution"
  },
  {
    id: "india-embassy",
    nameMM: "အိန္ဒိယသံရုံး",
    nameEN: "India Embassy",
    lat: 16.77171853,
    lng: 96.16114718,
    description: "The Indian Embassy in Yangon, a diplomatic mission representing India.",
    descriptionMM: "အိန္ဒိယသံရုံး",
    year: "1948",
    category: "Embassy"
  },
  {
    id: "myanmar-airlines",
    nameMM: "မြန်မာ့လေကြောင်း",
    nameEN: "Myanmar National Airlines",
    lat: 16.76965926,
    lng: 96.16216734,
    description: "Myanmar National Airlines headquarters.",
    descriptionMM: "မြန်မာ့လေကြောင်း",
    year: "1950",
    category: "Government Building"
  },
  {
    id: "general-post-office",
    nameMM: "ယေဒယ စာတိုက်",
    nameEN: "General Post office",
    lat: 16.76940554,
    lng: 96.16383905,
    description: "Historic General Post Office representing colonial communications infrastructure.",
    descriptionMM: "ယေဒယ စာတိုက်",
    year: "1884",
    category: "Government Building"
  },
  {
    id: "st-marys-cathedral",
    nameMM: "စိန့်မေရီ ကက်သလစ်ကုသုံးဌာန",
    nameEN: "St. Mary's Cathedral",
    lat: 16.77871147,
    lng: 96.16467588,
    description: "St. Mary's Cathedral, completed in 1911, featuring beautiful stained glass windows.",
    descriptionMM: "စိန့်မေရီ ကက်သလစ်ကုသုံးဌာန",
    year: "1911",
    category: "Religious Building"
  },
  {
    id: "secretariat",
    nameMM: "ရန်ကုန်မြို့ရှိ ဝန်ကြီးများရုံး",
    nameEN: "ရန်ကုန်မြို့ရှိ ဝန်ကြီးများရုံး (The Secretariat)",
    lat: 16.7754863,
    lng: 96.16577824,
    description: "The Secretariat, a historic government administrative building.",
    descriptionMM: "ရန်ကုန်မြို့ရှိ ဝန်ကြီးများရုံး",
    year: "1920",
    category: "Government Building"
  },
  {
    id: "fire-station",
    nameMM: "ဗဟိုမီးသတ်စခန်း",
    nameEN: "The Central Fire Station",
    lat: 16.7762849,
    lng: 96.15855774,
    description: "Central Fire Station, built in 1912, representing industrial heritage.",
    descriptionMM: "ဗဟိုမီးသတ်စခန်း",
    year: "1912",
    category: "Government Building"
  },
  {
    id: "internal-revenue",
    nameMM: "ပြည်တွင်းအခွန်များဦးစီးဌာန",
    nameEN: "Internal Revenue Department",
    lat: 16.77192562,
    lng: 96.16125192,
    description: "Internal Revenue Department building on Strand Road.",
    descriptionMM: "ပြည်တွင်းအခွန်များဦးစီးဌာန",
    year: "1920",
    category: "Government Building"
  },
  {
    id: "port-authority",
    nameMM: "မြန်မာ့ဆိပ်ကမ်းအာဏာပိုင်",
    nameEN: "Myanmar Port Authority",
    lat: 16.76984167,
    lng: 96.16171568,
    description: "Myanmar Port Authority headquarters with Italian-style architecture.",
    descriptionMM: "မြန်မာ့ဆိပ်ကမ်းအာဏာပိုင်",
    year: "1928",
    category: "Government Building"
  },
  {
    id: "customs-department",
    nameMM: "အကောက်ခွန်ဦးစီးဌာန",
    nameEN: "Myanmar Customs Department",
    lat: 16.76934393,
    lng: 96.16256221,
    description: "Myanmar Customs Department building, designed in 1912.",
    descriptionMM: "အကောက်ခွန်ဦးစီးဌာန",
    year: "1912",
    category: "Government Building"
  },
  {
    id: "bank-street",
    nameMM: "ဘဏ်လမ်း",
    nameEN: "ဘဏ်လမ်း (Bank Street)",
    lat: 16.77080765,
    lng: 96.16012791,
    description: "Bank Street Heritage Area containing numerous colonial-era heritage buildings.",
    descriptionMM: "ဘဏ်လမ်း",
    year: "1880",
    category: "Heritage Area"
  }
];
