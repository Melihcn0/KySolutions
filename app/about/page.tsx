import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda | KySolutions",
  description: "İhtiyaca özel yazılım geliştirme, e-ticaret projeleri ve modern web çözümleri sunan ekibimiz hakkında bilgi edinin.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Hakkımızda"
        description="İhtiyacınıza özel yazılım çözümleri, e-ticaret projeleri ve modern web siteleri geliştiriyoruz. İş hedeflerinize uygun, sürdürülebilir ve ölçeklenebilir dijital çözümler sunuyoruz."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
