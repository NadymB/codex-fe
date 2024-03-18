import { ClientSection } from "@/components/Landing/ClientSection";
import { ContentSection } from "@/components/Landing/ContentSection";
import { CtaSection } from "@/components/Landing/CtaSection";
import { FeatureSection } from "@/components/Landing/FeatureSection";
import { FooterSection } from "@/components/Landing/FooterSection";
import { HeaderLandingSection } from "@/components/Landing/HeaderLandingSection";
import { HeroSection } from "@/components/Landing/HeroSection";
import { QASection } from "@/components/Landing/QASection";
import { TestimonialSection } from "@/components/Landing/TestimonialSection";
import { VideoSection } from "@/components/Landing/VideoSection";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import React from "react";

const LandingPage = () => {
  return (
    <DefaultLayout
      isShowMenubar={false}
      containerStyle="bg-[#13111a] dark:bg-[#13111a]"
    >
      <HeaderLandingSection />
      <HeroSection />
      <ClientSection />
      <VideoSection />
      <FeatureSection />
      <ContentSection />
      <TestimonialSection />
      <QASection />
      <CtaSection />
      <FooterSection />
    </DefaultLayout>
  );
};
export default LandingPage;
