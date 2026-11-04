import { clientProductPhotos } from "./client-product-photos";

export type Category =
  "Daging sapi" | "Daging ayam" | "Kambing & domba" | "Seafood";
export type Product = {
  slug: string;
  name: string;
  category: Category;
  kind: string;
  description: string;
  use: string[];
  image: string;
  featured?: boolean;
};
const photoOverrides: Record<string, string> = {
  "udang-vaname": "/images/product-shrimp.webp",
};
const productPhoto = (slug: string, image?: string) =>
  clientProductPhotos[slug] ??
  image ??
  photoOverrides[slug] ??
  `/images/catalog/${slug}.webp`;

const beef = (
  slug: string,
  name: string,
  kind: string,
  description: string,
  use: string[],
  image?: string,
): Product => ({
  slug,
  name,
  kind,
  description,
  use,
  image: productPhoto(slug, image),
  category: "Daging sapi",
});
const chicken = (
  slug: string,
  name: string,
  description: string,
  use: string[],
  image?: string,
): Product => ({
  slug,
  name,
  description,
  use,
  image: productPhoto(slug, image),
  kind: "Poultry selection",
  category: "Daging ayam",
});
const seafood = (
  slug: string,
  name: string,
  description: string,
  use: string[],
  image?: string,
): Product => ({
  slug,
  name,
  description,
  use,
  image: productPhoto(slug, image),
  kind: "Seafood selection",
  category: "Seafood",
});
const lamb = (
  slug: string,
  name: string,
  description: string,
  use: string[],
): Product => ({
  slug,
  name,
  description,
  use,
  image: productPhoto(slug),
  kind: "Lamb & goat selection",
  category: "Kambing & domba",
});
export const products: Product[] = [
  beef(
    "sirloin-meltique",
    "Sirloin Meltique",
    "Steak cuts",
    "Pilihan sirloin meltique untuk sajian steak dengan karakter rasa yang kaya. Diskusikan ukuran potong yang Anda butuhkan untuk menu andalan dapur.",
    ["Steak", "Grill", "Western menu"],
  ),
  beef(
    "tenderloin-meltique",
    "Tenderloin Meltique",
    "Signature cut",
    "Potongan tenderloin meltique untuk sajian steak dan menu panggang. Diskusikan spesifikasi potongan serta kebutuhan dapur Anda bersama tim kami.",
    ["Steakhouse", "Hotel", "Restoran"],
    "/images/catalog/client-20261104/tenderloin-meltique.webp",
  ),
  beef(
    "slice-meltique",
    "Slice Meltique",
    "Sliced selection",
    "Daging meltique dalam bentuk irisan untuk proses pengolahan yang praktis. Cocok untuk beragam kreasi menu panggang dan rice bowl.",
    ["Grill", "Rice bowl", "Yakiniku"],
  ),
  beef(
    "slice-sirloin",
    "Slice Sirloin",
    "Sliced selection",
    "Sirloin dalam bentuk irisan yang fleksibel untuk kebutuhan menu harian restoran. Sesuaikan penggunaan dengan karakter masakan dan porsi sajian Anda.",
    ["Rice bowl", "Grill", "Tumis"],
    "/images/catalog/slice-sirloin-lean-ai-v2.webp",
  ),
  beef(
    "shortplate-beef",
    "Slice Shortplate",
    "Signature cut",
    "Irisan daging sapi dengan perpaduan daging dan lemak untuk cita rasa yang kaya. Fleksibel untuk menu grill, sukiyaki, dan shabu-shabu.",
    ["Shabu-shabu", "Yakiniku", "AYCE"],
    "/images/catalog/client-20261104/shortplate-beef.webp",
  ),
  beef(
    "saikoro",
    "Saikoro",
    "Cubed selection",
    "Potongan daging berbentuk kubus untuk sajian yang praktis dan mudah diporsikan. Pilihan untuk menu teppanyaki maupun kreasi panggang.",
    ["Teppanyaki", "Grill", "Rice bowl"],
  ),
  beef(
    "otak-sapi",
    "Otak Sapi",
    "Specialty cuts",
    "Pilihan bahan untuk menu tradisional dengan karakter tersendiri. Tim kami siap membantu kebutuhan pengadaan dan informasi ketersediaan.",
    ["Gulai", "Masakan tradisional"],
  ),
  beef(
    "kaki-sapi",
    "Kaki Sapi",
    "Specialty cuts",
    "Bahan untuk sajian berkuah dengan tekstur khas. Diskusikan spesifikasi dan kebutuhan pengolahan bersama tim sales sebelum pemesanan.",
    ["Sop", "Kikil", "Masakan tradisional"],
  ),
  beef(
    "babat-sapi",
    "Babat Sapi",
    "Specialty cuts",
    "Pilihan untuk sajian tradisional yang kaya karakter. Dapat diolah menjadi aneka menu berkuah maupun tumisan sesuai resep dapur Anda.",
    ["Soto", "Gulai", "Tumis"],
  ),
  beef(
    "iga-shortrib",
    "Iga Shortrib",
    "Rib selection",
    "Potongan iga untuk kreasi menu dengan karakter rasa daging yang kuat. Cocok dieksplorasi melalui pengolahan perlahan maupun sajian panggang.",
    ["Braising", "BBQ", "Sop iga"],
  ),
  beef(
    "iga-chuckrib",
    "Iga Chuckrib",
    "Rib selection",
    "Pilihan iga untuk kebutuhan restoran dan katering. Bicarakan ukuran, bentuk potongan, dan kebutuhan menu dengan tim kami.",
    ["Sop iga", "BBQ", "Braising"],
  ),
  beef(
    "iga-muda",
    "Iga Muda",
    "Rib selection",
    "Pilihan iga untuk berbagai hidangan berkuah dan menu olahan. Tim sales membantu memastikan pilihan sesuai dengan kebutuhan resep Anda.",
    ["Sop", "Semur", "Masakan tradisional"],
  ),
  beef(
    "iga-gondrong",
    "Iga Gondrong",
    "Rib selection",
    "Potongan iga dengan presentasi yang khas untuk eksplorasi menu dapur. Informasi spesifikasi dan ketersediaan dapat didiskusikan langsung.",
    ["BBQ", "Grill", "Sop iga"],
  ),
  beef(
    "iga-backrib",
    "Iga Backrib",
    "Rib selection",
    "Pilihan iga untuk menu panggang dan olahan berbumbu. Temukan spesifikasi potongan yang tepat bersama tim Tatsuo.",
    ["BBQ", "Roasting", "Grill"],
  ),
  beef(
    "buntut-center-cut",
    "Buntut Center Cut",
    "Signature cut",
    "Potongan bagian tengah buntut sapi untuk hidangan berkuah maupun olahan berbumbu. Pilihan untuk membangun kaldu yang kaya dan sajian yang berkesan.",
    ["Sop buntut", "Buntut bakar", "Braising"],
    "/images/catalog/client-20261104/buntut-center-cut.webp",
  ),
  beef(
    "buntut-mix-cut",
    "Buntut Mix Cut",
    "Specialty cuts",
    "Pilihan campuran potongan buntut untuk kebutuhan menu dapur. Cocok untuk eksplorasi sajian berkuah dan pengolahan perlahan.",
    ["Sop buntut", "Braising", "Semur"],
  ),
  beef(
    "daging-sapi-giling",
    "Daging Sapi Giling",
    "Everyday essentials",
    "Bahan serbaguna untuk berbagai menu olahan. Sampaikan kebutuhan spesifikasi gilingan dan penggunaan kepada tim kami untuk menemukan pilihan yang tepat.",
    ["Burger", "Bolognese", "Bakso"],
  ),
  beef(
    "daging-sapi",
    "Daging Sapi",
    "Everyday essentials",
    "Pilihan daging sapi untuk kebutuhan menu harian. Diskusikan bagian dan bentuk potongan sesuai resep serta pola kebutuhan usaha Anda.",
    ["Rendang", "Semur", "Tumis"],
  ),
  beef(
    "sirloin",
    "Sirloin",
    "Steak cuts",
    "Pilihan sirloin untuk kebutuhan menu dapur Anda. Konsultasikan ukuran, bentuk potongan, dan ketersediaan produk bersama tim Tatsuo.",
    ["Steak", "Grill", "Roasting"],
  ),
  beef(
    "tenderloin",
    "Tenderloin",
    "Steak cuts",
    "Tenderloin untuk kreasi steak maupun pengolahan sesuai kebutuhan dapur. Tim kami siap membantu informasi spesifikasi dan pilihan potongannya.",
    ["Steak", "Grill", "Roasting"],
  ),
  beef(
    "gandik",
    "Gandik",
    "Everyday essentials",
    "Pilihan gandik sapi untuk beragam menu olahan. Sampaikan kebutuhan ukuran potong dan cara pengolahan kepada tim kami sebelum memesan.",
    ["Rendang", "Empal", "Semur"],
  ),
  beef(
    "topside",
    "Topside",
    "Everyday essentials",
    "Potongan topside untuk kebutuhan restoran, katering, dan dapur usaha. Diskusikan bentuk sajian serta spesifikasi produk yang Anda perlukan.",
    ["Rendang", "Empal", "Roasting"],
  ),
  beef(
    "rump",
    "Rump",
    "Steak cuts",
    "Pilihan rump sapi untuk eksplorasi menu dapur. Tim Tatsuo membantu memastikan bentuk potongan sesuai dengan kebutuhan pengolahan Anda.",
    ["Grill", "Roasting", "Tumis"],
  ),
  beef(
    "lidah-sapi",
    "Lidah Sapi",
    "Specialty cuts",
    "Lidah sapi untuk hidangan dengan karakter tersendiri. Informasi bentuk produk, persiapan, dan ketersediaan dapat didiskusikan bersama tim kami.",
    ["Grill", "Semur", "Braising"],
  ),
  beef(
    "kikil-tunjang",
    "Kikil Tunjang",
    "Specialty cuts",
    "Pilihan kikil tunjang untuk masakan tradisional dan sajian berkuah. Konsultasikan kebutuhan pengolahan serta spesifikasi produk sebelum pemesanan.",
    ["Gulai tunjang", "Soto", "Masakan tradisional"],
  ),
  beef(
    "slice-lemak-60cl",
    "Slice Lemak (60CL)",
    "Sliced selection",
    "Pilihan slice lemak 60CL untuk kreasi olahan dapur Anda. Tim sales siap memberikan rincian spesifikasi dan ketersediaan sesuai kebutuhan usaha.",
    ["Grill", "Tumis", "Olahan dapur"],
  ),
  beef(
    "slice-ribblade",
    "Slice Ribblade",
    "Sliced selection",
    "Irisan ribblade untuk pengolahan praktis di dapur usaha. Diskusikan kebutuhan ketebalan irisan dan porsi sajian dengan tim Tatsuo.",
    ["Grill", "Rice bowl", "Tumis"],
  ),
  beef(
    "slice-brisket",
    "Slice Brisket",
    "Sliced selection",
    "Irisan brisket untuk aneka kreasi menu panggang dan berkuah. Temukan spesifikasi irisan yang sesuai dengan kebutuhan dapur Anda bersama tim kami.",
    ["Grill", "Shabu-shabu", "Rice bowl"],
  ),
  lamb(
    "lamb-chop",
    "Lamb Chop",
    "Potongan lamb chop untuk menu panggang dan sajian istimewa. Tim kami siap membantu informasi spesifikasi potongan serta ketersediaan produk.",
    ["Grill", "BBQ", "Pan-seared"],
  ),
  lamb(
    "lamb-rack",
    "Lamb Rack",
    "Pilihan lamb rack untuk presentasi menu yang berkesan. Sampaikan kebutuhan ukuran, pengolahan, dan jumlah pesanan kepada tim Tatsuo.",
    ["Roasting", "Grill", "Western menu"],
  ),
  lamb(
    "paha-kambing",
    "Paha Kambing",
    "Paha kambing untuk berbagai kreasi masakan dan kebutuhan dapur usaha. Diskusikan spesifikasi, bentuk potongan, dan ketersediaan produk bersama tim kami.",
    ["Gulai", "Roasting", "Masakan tradisional"],
  ),
  chicken(
    "slice-ayam",
    "Slice Ayam",
    "Irisan ayam untuk beragam pengolahan yang praktis. Bahan fleksibel bagi dapur dengan kebutuhan menu harian yang bervariasi.",
    ["Rice bowl", "Tumis", "Grill"],
  ),
  chicken(
    "boneless-paha",
    "Boneless Paha",
    "Paha ayam tanpa tulang untuk kebutuhan menu yang beragam. Cocok untuk pengolahan panggang, goreng, maupun aneka sajian berbumbu.",
    ["Grill", "Karaage", "Katering"],
  ),
  chicken(
    "boneless-dada-ayam",
    "Boneless Dada",
    "Dada ayam tanpa tulang yang praktis untuk berbagai kreasi menu. Bahan andalan untuk dapur yang membutuhkan fleksibilitas dalam pengolahan.",
    ["Katering", "Restoran", "Hotel"],
    "/images/catalog/client-20261104/boneless-dada-ayam.webp",
  ),
  chicken(
    "ceker-ayam-tanpa-tulang",
    "Ceker Ayam Tanpa Tulang",
    "Ceker ayam tanpa tulang untuk aneka kreasi menu berbumbu. Praktis diolah menjadi sajian pedas, dimsum, maupun tumisan sesuai kebutuhan dapur Anda.",
    ["Dimsum", "Tumis", "Sajian pedas"],
    "/images/catalog/ceker-ayam-tanpa-tulang-ai.webp",
  ),
  seafood(
    "salmon-fillet",
    "Ikan Salmon Fillet",
    "Fillet salmon untuk kreasi menu dengan cita rasa dan presentasi yang istimewa. Diskusikan spesifikasi produk dan kebutuhan pengolahan dengan tim kami.",
    ["Pan-seared", "Grill", "Western menu"],
    "/images/product-salmon.webp",
  ),
  seafood(
    "udang-vaname",
    "Udang Vaname",
    "Pilihan udang untuk beragam sajian seafood. Informasi ukuran, bentuk produk, dan ketersediaan terkini dapat diminta kepada tim sales.",
    ["Grill", "Tumis", "Seafood menu"],
  ),
  seafood(
    "cumi-ring",
    "Cumi Ring",
    "Cumi berbentuk cincin untuk memudahkan pengolahan dan penyajian. Bahan untuk menu pembuka maupun sajian utama seafood.",
    ["Calamari", "Tumis", "Seafood menu"],
  ),
  seafood(
    "ikan-dori",
    "Ikan Dori",
    "Pilihan ikan untuk berbagai kreasi menu dapur. Diskusikan kebutuhan produk dan bentuk sajian agar tim kami dapat membantu menyiapkan penawaran.",
    ["Fish & chips", "Steam", "Grill"],
  ),
];
export const categories = [
  "Daging sapi",
  "Daging ayam",
  "Kambing & domba",
  "Seafood",
] as const;
export const featuredProducts = [
  "tenderloin-meltique",
  "shortplate-beef",
  "boneless-dada-ayam",
  "buntut-center-cut",
  "salmon-fillet",
].map((slug) => products.find((p) => p.slug === slug)!);
export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);
