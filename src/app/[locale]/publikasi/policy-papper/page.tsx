import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { DownloadIcon, EyeIcon, SearchIcon } from "lucide-react";
import Image from "next/image";

type PublikasiPageProps = {};

const PublikasiPage = ({}: PublikasiPageProps) => {
  return (
    <main className="w-full">
      <section className="w-full aspect-[21/4] bg-primary-foreground flex place-items-center justify-center relative">
        <Breadcrumb className="pt-5 absolute top-0 left-0">
          <BreadcrumbList className="m-0">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/profil">Publikasi</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Policy Papper</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-center font-bold">Policy Papper Publikasi</h1>
      </section>
      <section className="container flex flex-row gap-2 pt-5">
        <Input className="flex-1" placeholder="Search" />
        <Button>
          <SearchIcon />
        </Button>
      </section>
      <section className="w-full grid grid-cols-4 container pt-5 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <Card
            key={item}
            className="relative overflow-hidden bg-transparent aspect-[2/3] flex flex-col justify-end p-5 group gap-3"
          >
            <h3 className="font-bold text-white">Policy Papper Publikasi {item}</h3>
            <div className="flex gap-2 justify-end">
              <Button size={"icon"}>
                <EyeIcon />
              </Button>
              <Button size={"icon"}>
                <DownloadIcon />
              </Button>
            </div>
            <Image
              fill
              src={`https://picsum.photos/seed/papper-${item}/2000/2000`}
              alt="LPSK"
              className=" object-cover -z-20 group-hover:scale-125 transition-all duration-300"
            />
            <div className="absolute left-0 top-0 w-full h-full bg-black/15 -z-10"></div>
          </Card>
        ))}
      </section>
      <section>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>
    </main>
  );
};

export default PublikasiPage;
