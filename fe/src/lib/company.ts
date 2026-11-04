export const company = {
  name: "PT. Tatsuo Beef Indonesia",
  email: "tatsuobeefindonesia@gmail.com",
  locations: {
    solo: {
      city: "Solo",
      role: "Representative Office",
      label: "Kantor perwakilan",
      address:
        "Jl. Kurma, Dregan RT03/RW06, Pabelan, Kartasura, Sukoharjo, Jawa Tengah 57169",
      maps: "https://www.google.com/maps/search/?api=1&query=Jl.+Kurma+Dregan+Pabelan+Kartasura+Sukoharjo",
      area: "Kartasura, Sukoharjo",
      postcode: "57169",
      description:
        "Ruang untuk terhubung, berdiskusi, dan membangun kemitraan bersama Tatsuo Beef.",
    },
    jakarta: {
      city: "Jakarta",
      role: "Warehouse & Production",
      label: "Gudang & produksi",
      address:
        "Jl. Nusa I No.33, RT.9/RW.4, Kramat Jati, Jakarta Timur, DKI Jakarta 13510",
      maps: "https://maps.app.goo.gl/HnwUchTctgFKBGX28",
      area: "Kramat Jati, Jakarta Timur",
      postcode: "13510",
      description:
        "Tempat operasional gudang dan produksi untuk mendukung kebutuhan bahan pangan mitra kami.",
    },
  },
  social: {
    instagram: "https://www.instagram.com/bosdagingsolo/",
    tiktok: "https://www.tiktok.com/@bosdagingsolo",
  },
  inquiry:
    "Halo Tatsuo Beef, saya ingin berdiskusi mengenai kebutuhan daging untuk bisnis saya.",
  sales: [
    {
      name: "Izzud",
      role: "Sales",
      phone: "0812 7487 7474",
      number: "6281274877474",
    },
    {
      name: "Kriss",
      role: "Tim Sales",
      phone: "0813 3027 3323",
      number: "6281330273323",
    },
    {
      name: "Yatno",
      role: "Sales",
      phone: "0831 6278 0814",
      number: "6283162780814",
    },
    {
      name: "Imron",
      role: "Sales Jakarta",
      phone: "0812 9450 6900",
      number: "6281294506900",
    },
  ],
};
export const whatsapp = (
  message = company.inquiry,
  number = company.sales[0].number,
) => `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
