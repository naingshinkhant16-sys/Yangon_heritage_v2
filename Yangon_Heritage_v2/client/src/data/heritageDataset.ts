/**
 * Unified Heritage Dataset - Single Source of Truth
 * 
 * This dataset combines all heritage site information with their exact image URLs.
 * Used directly by the map and UI components to ensure perfect name-to-image matching.
 */

export interface HeritageItem {
  name: string;
  description?: string;
  image: string;
}

export const heritageDataset: HeritageItem[] = [
  { name: "ရန်ကုန်မြို့ရှိ ဩစတြေးလျ သံရုံး (Australian Embassy)", image: "https://uploads.knightlab.com/storymapjs/71d8c3f4144ced51e7bfcd0f37d6aa18/k-eaak-ttntaa-heritage/_images/Screenshot%202026-06-02%20161836.png" },
  { name: "British Council Yangon", image: "https://uploads.knightlab.com/storymapjs/71d8c3f4144ced51e7bfcd0f37d6aa18/k-eaak-ttntaa-heritage/_images/viber_image_2026-06-02_12-22-07-486.png" },
  { name: "MPT ရုံးချုပ် (Myanma Posts & Telecommunications)", image: "https://uploads.knightlab.com/storymapjs/71d8c3f4144ced51e7bfcd0f37d6aa18/k-eaak-ttntaa-heritage/_images/Screenshot%202026-06-02%20144655.png" },
  { name: "စိန်ဂျွန် သမက္ကတ အာမေနီးယန်း ဘုရားကျောင်း (St. John the Baptist Armenian Church)", image: "https://uploads.knightlab.com/storymapjs/71d8c3f4144ced51e7bfcd0f37d6aa18/k-eaak-ttntaa-heritage/_images/viber_image_2026-06-02_12-33-24-310.jpg" },
  { name: "ဆူးလေရှန်ဂရီလာ (Sule Shangri-La)", image: "https://uploads.knightlab.com/storymapjs/71d8c3f4144ced51e7bfcd0f37d6aa18/k-eaak-ttntaa-heritage/_images/၁.jpg" },
  { name: "ဧရာဝတီဘဏ် (AYA Bank - YGN 26)", image: "https://uploads.knightlab.com/storymapjs/71d8c3f4144ced51e7bfcd0f37d6aa18/k-eaak-ttntaa-heritage/_images/၂.jpg" },
  { name: "ဆူးလေဘုရား", image: "https://uploads.knightlab.com/storymapjs/71d8c3f4144ced51e7bfcd0f37d6aa18/k-eaak-ttntaa-heritage/_images/၃.jpg" },
  { name: "ရန်ကုန်မြို့တော်ခန်းမ (Yangon City Hall)", image: "https://uploads.knightlab.com/storymapjs/71d8c3f4144ced51e7bfcd0f37d6aa18/k-eaak-ttntaa-heritage/_images/၄.jpg" },
  { name: "မဟာဗန္ဓုလပန်းခြံ", image: "https://uploads.knightlab.com/storymapjs/71d8c3f4144ced51e7bfcd0f37d6aa18/k-eaak-ttntaa-heritage/_images/၅.jpg" },
  { name: "ဧမာနွေလ ဘုရားကျောင်း", image: "https://uploads.knightlab.com/storymapjs/71d8c3f4144ced51e7bfcd0f37d6aa18/k-eaak-ttntaa-heritage/_images/၆.jpg" },
  { name: "ပြည်ထောင်စု တရားလွှတ်တော်ချုပ်", image: "https://uploads.knightlab.com/storymapjs/71d8c3f4144ced51e7bfcd0f37d6aa18/k-eaak-ttntaa-heritage/_images/၇.jpg" },
  { name: "မြန်မာ့ရှေ့ဆောင်ဘဏ် (MAB Bank)", image: "https://uploads.knightlab.com/storymapjs/71d8c3f4144ced51e7bfcd0f37d6aa18/k-eaak-ttntaa-heritage/_images/၈.jpg" },
  { name: "ရန်ကုန်မြို့ အကောက်ခွန်ဦးစီးဌာနရုံးချုပ် (Custom House, Yangon)", image: "https://uploads.knightlab.com/storymapjs/71d8c3f4144ced51e7bfcd0f37d6aa18/k-eaak-ttntaa-heritage/_images/၉.jpg" },
  { name: "မြန်မာ့စီးပွားရေးဘဏ် ခွဲ (၃)", image: "https://uploads.knightlab.com/storymapjs/71d8c3f4144ced51e7bfcd0f37d6aa18/k-eaak-ttntaa-heritage/_images/၁၀.jpg" },
  { name: "Myanma Economic Bank(မြန်မာ့စီးပွားရေးဘဏ် ခွဲ (၂))", image: "https://uploads.knightlab.com/storymapjs/71d8c3f4144ced51e7bfcd0f37d6aa18/k-eaak-ttntaa-heritage/_images/၁၁.jpg" },
  { name: "India Embassy", image: "https://uploads.knightlab.com/storymapjs/71d8c3f4144ced51e7bfcd0f37d6aa18/k-eaak-ttntaa-heritage/_images/၁၂.jpg" },
  { name: "Myanmar National Airlines", image: "https://uploads.knightlab.com/storymapjs/71d8c3f4144ced51e7bfcd0f37d6aa18/k-eaak-ttntaa-heritage/_images/airline.jpg" },
  { name: "General Post office", image: "https://uploads.knightlab.com/storymapjs/71d8c3f4144ced51e7bfcd0f37d6aa18/k-eaak-ttntaa-heritage/_images/၁၄.jpg" },
  { name: "St. Mary's Cathedral", image: "https://uploads.knightlab.com/storymapjs/71d8c3f4144ced51e7bfcd0f37d6aa18/k-eaak-ttntaa-heritage/_images/၁၅.jpg" },
  { name: "ရန်ကုန်မြို့ရှိ ဝန်ကြီးများရုံး (The Secretariat)", image: "https://uploads.knightlab.com/storymapjs/71d8c3f4144ced51e7bfcd0f37d6aa18/k-eaak-ttntaa-heritage/_images/၁၆.jpg" },
  { name: "The Central Fire Station", image: "https://uploads.knightlab.com/storymapjs/71d8c3f4144ced51e7bfcd0f37d6aa18/k-eaak-ttntaa-heritage/_images/Screenshot%202026-06-04%20220126.png" },
  { name: "Internal Revenue Department", image: "https://uploads.knightlab.com/storymapjs/71d8c3f4144ced51e7bfcd0f37d6aa18/k-eaak-ttntaa-heritage/_images/၁၈.jpg" },
  { name: "Myanmar Port Authority", image: "https://uploads.knightlab.com/storymapjs/71d8c3f4144ced51e7bfcd0f37d6aa18/k-eaak-ttntaa-heritage/_images/၂၀.jpg" },
  { name: "Myanmar Customs Department", image: "https://uploads.knightlab.com/storymapjs/71d8c3f4144ced51e7bfcd0f37d6aa18/k-eaak-ttntaa-heritage/_images/၂၅.jpg" },
  { name: "ဘဏ်လမ်း (Bank Street)", image: "https://uploads.knightlab.com/storymapjs/71d8c3f4144ced51e7bfcd0f37d6aa18/k-eaak-ttntaa-heritage/_images/Screenshot%202026-06-02%20160717.png" }
];

/**
 * Get image URL for a heritage site by name
 * @param name - The heritage site name
 * @returns The image URL or a fallback
 */
export function getImageByName(name: string): string {
  const item = heritageDataset.find(p => p.name === name || name.includes(p.name));
  return item?.image || "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Yangon_City_Hall.JPG/800px-Yangon_City_Hall.JPG";
}

/**
 * Get heritage item by name
 * @param name - The heritage site name
 * @returns The heritage item or undefined
 */
export function getHeritageItemByName(name: string): HeritageItem | undefined {
  return heritageDataset.find(p => p.name === name || name.includes(p.name));
}
