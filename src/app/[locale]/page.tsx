import { ApplicationExternalSection } from "@/components/feature/application-external-section";
import { ApplicationSection } from "@/components/feature/application-internal-section";
import { Hero } from "@/components/feature/beranda/hero";
import { ClientPreview } from "@/components/feature/client-preview";
import { InformationSection } from "@/components/feature/information-preview";
import { NewsSection } from "@/components/feature/news-preview";
import { PublicationPreview } from "@/components/feature/publication-preview";
import { StatisticsPreview } from "@/components/feature/statistic-preview";

export default function Home() {
  return (
    <main className="w-full space-y-16">
      <Hero />
      <InformationSection />
      <NewsSection />
      <ApplicationSection/>
      <PublicationPreview/>
      <StatisticsPreview/>
      <ApplicationExternalSection/>
      <ClientPreview/>
    </main>
  );
}