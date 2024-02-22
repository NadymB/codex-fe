import { ClientSection } from "@/components/Landing/ClientSection";
import { ContentSection } from "@/components/Landing/ContentSection";
import { FeatureSection } from "@/components/Landing/FeatureSection";
import { HeaderLandingSection } from "@/components/Landing/HeaderLandingSection";
import { HeroSection } from "@/components/Landing/HeroSection";
import { TestimonialSection } from "@/components/Landing/TestimonialSection";
import { VideoSection } from "@/components/Landing/VideoSection";
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
    </DefaultLayout>
  );
};
export default LandingPage;
