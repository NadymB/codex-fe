import { ClientSection } from "@/components/landing/ClientSection";
import { ContentSection } from "@/components/landing/ContentSection";
import { CtaSection } from "@/components/landing/CtaSection";
import { FeatureSection } from "@/components/landing/FeatureSection";
import { FooterSection } from "@/components/landing/FooterSection";
import { HeaderLandingSection } from "@/components/landing/HeaderLandingSection";
import { HeroSection } from "@/components/landing/HeroSection";
import { QASection } from "@/components/landing/QASection";
import { TestimonialSection } from "@/components/landing/TestimonialSection";
import { VideoSection } from "@/components/landing/VideoSection";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import React from "react";

const LandingPage = () => {
  return (
    <DefaultLayout
      isShowMenubar={false}
      pageTitle="Dashboard"
      containerStyle="bg-[#13111a] dark:bg-[#13111a]"
    >
      <HeaderLandingSection />
      <HeroSection />
      <ClientSection />
      <VideoSection />
      <FeatureSection />
      <ContentSection />
      <TestimonialSection/>
      <QASection/>
      <CtaSection/>
      <FooterSection/>
    </DefaultLayout>
  );
};
export default LandingPage;
