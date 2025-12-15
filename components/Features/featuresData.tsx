import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path d="M8 17L3 12L8 7V9.5L5.5 12L8 14.5V17Z" />
        <path d="M16 17V14.5L18.5 12L16 9.5V7L21 12L16 17Z" />
        <path d="M10.5 19L13.5 5H15.5L12.5 19H10.5Z" />
      </svg>
    ),
    title: "İhtiyaca Özel Yazılımlar",
    paragraph: "Her işletmenin ihtiyacı farklıdır. İş süreçlerinize uygun, ölçeklenebilir ve sürdürülebilir özel yazılımlar geliştiriyoruz.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path d="M7 18C5.9 18 5 18.9 5 20C5 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18Z" />
        <path d="M17 18C15.9 18 15 18.9 15 20C15 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" />
        <path d="M7 6H21L19 14H9L7 6Z" />
      </svg>
    ),
    title: "E-Ticaret Projeleri",
    paragraph: "Satış odaklı, hızlı ve yönetilebilir e-ticaret altyapıları kuruyor; ödeme, stok ve sipariş süreçlerini uçtan uca yönetiyoruz.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <rect x="2" y="3" width="20" height="18" rx="2" opacity="0.5" />
        <rect x="5" y="6" width="6" height="4" />
        <rect x="13" y="6" width="6" height="2" />
        <rect x="13" y="10" width="6" height="2" />
        <rect x="5" y="12" width="14" height="5" />
      </svg>
    ),
    title: "Tanıtım & Kurumsal Web Siteleri",
    paragraph: "Markanızı doğru anlatan, modern tasarımlı ve mobil uyumlu tanıtım siteleri ile dijitalde güçlü bir ilk izlenim oluşturun.",
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <circle cx="8" cy="9" r="3" />
        <rect x="3" y="14" width="10" height="4" rx="1" opacity="0.5" />
        <rect x="15" y="6" width="6" height="12" rx="1" />
      </svg>
    ),
    title: "Portfolyo & Kişisel Siteler",
    paragraph:
      "Ajanslar, freelancer’lar ve markalar için sade, etkileyici ve performanslı portfolyo web siteleri geliştiriyoruz.",
  },
  {
    id: 5,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path d="M10 4H14V6H10V4Z" />
        <path d="M4 6H20V20H4V6Z" />
        <path d="M2 10H22V14H2V10Z" />
      </svg>
    ),
    title: "İşletme Yönetim Sistemleri",
    paragraph: "İşletmeler için sipariş, masa, menü ve yönetim süreçlerini kolaylaştıran özel yönetim sistemleri sunuyoruz.",
  },
  {
    id: 6,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path d="M4 6H20V8H4V6Z" opacity="0.5" />
        <circle cx="9" cy="7" r="2" />
        
        <path d="M4 11H20V13H4V11Z" opacity="0.5" />
        <circle cx="15" cy="12" r="2" />
        
        <path d="M4 16H20V18H4V16Z" opacity="0.5" />
        <circle cx="11" cy="17" r="2" />
      </svg>
    ),
    title: "Tamamen Özelleştirilebilir",
    paragraph: "Tüm projeler ihtiyaçlarınıza göre sıfırdan planlanır. Hazır kalıplar değil, size özel çözümler üretiriz.",
  },
];
export default featuresData;
