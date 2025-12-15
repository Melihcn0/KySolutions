import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim | KySolutions",
  description: "Özel yazılım, e-ticaret veya web projeleriniz için bize ulaşın. Fikirlerinizi gerçeğe dönüştürmek için hazırdır.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="İletişim Sayfası"
        description="İşinizi dijitalde büyütmek, size özel yazılım ve web çözümleri hakkında bilgi almak için bizimle iletişime geçin. İhtiyacınızı analiz edelim, en doğru çözümü birlikte planlayalım."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
