import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const PejabatPage = () => {
  return (
    <main className="space-y-10 w-screen">
      <section className="container">
        <Breadcrumb className="pt-5">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/profil">Profil</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Profil Lembaga</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>
      <section className=" container w-full">
        <h1 className="text-2xl font-bold text-center">
          STRUKTUR ORGANISASI LEMBAGA PERLINDUNGAN SAKSI DAN KORBAN (2019-2024)
        </h1>
        <div className="w-full relative aspect-video">
          <Image
            src={"/images/struktur.png"}
            alt=""
            fill
            className=" object-contain"
          />
        </div>
      </section>
    </main>
  );
};

export default PejabatPage;
