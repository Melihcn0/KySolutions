import { getImagePath } from "@/lib/utils";
import { Blog } from "@/types/blog";

const getBlogData = (): Blog[] => [
  {
    id: 1,
    title: "Tanıtım Web Siteleri",
    paragraph:
      "Markanızı en doğru şekilde yansıtan, modern tasarımlı ve mobil uyumlu tanıtım siteleri geliştiriyoruz.",
    image: getImagePath("/images/blog/gdgcanakkale.png"),
    author: {
      name: "Melihcan Kaya",
      image: getImagePath("/images/blog/me.png"),
      designation: "Developer",
    },
    tags: ["kurumsal, tanıtım"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "E-Ticaret Web Siteleri",
    paragraph:
      "Satış odaklı, yüksek performanslı ve güvenli e-ticaret altyapıları ile ürünlerinizi kolayca yönetin, müşteri deneyimini iyileştirin.",
    image: getImagePath("/images/blog/essstartedarik.png"),
    author: {
      name: "Melihcan Kaya",
      image: getImagePath("/images/blog/me.png"),
      designation: "Developer",
    },
    tags: ["e-ticaret, web"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Yönetilebilir Tanıtım Siteleri",
    paragraph:
      "İçeriklerini kendiniz güncelleyebileceğiniz, admin panel destekli, esnek ve ölçeklenebilir tanıtım siteleri.",
    image: getImagePath("/images/blog/doreyorganizasyon.png"),
    author: {
      name: "Melihcan Kaya",
      image: getImagePath("/images/blog/me.png"),
      designation: "Developer",
    },
    tags: ["yönetim paneli, web"],
    publishDate: "2025",
  },
];
export default getBlogData;
