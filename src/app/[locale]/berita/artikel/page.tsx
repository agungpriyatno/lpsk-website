import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "@/components/ui/pagination";
import { Link } from "@/lib/i18n/routing";
import { DownloadIcon, EyeIcon, SearchIcon } from "lucide-react";
import Image from "next/image";

const ArtikelPage = () => {
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
              <BreadcrumbLink href="/berita">Berita</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Artikel</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-center font-bold">Artikel</h1>
      </section>
      <section className="container flex flex-row gap-2 pt-5">
        <Input className="flex-1" placeholder="Search" />
        <Button>
          <SearchIcon />
        </Button>
      </section>
      <section className="container w-full">
        <section className="w-full grid grid-cols-3 container pt-5 gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <Link key={item} href={`/berita/artikel/${item}`}>
              <Card
                key={item}
                className="relative overflow-hidden bg-transparent aspect-[3/2] flex flex-col justify-end p-5 group gap-3"
              >
                <Badge
                  className="w-fit
              "
                >
                  <small>12 Agustus 2022</small>
                </Badge>
                <h3 className="font-bold text-white">Artikel {item}</h3>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
                  laboriosam!...
                </p>
                <Image
                  fill
                  src={`https://picsum.photos/seed/artikel-${item}/2000/2000`}
                  alt="LPSK"
                  className=" object-cover -z-20 group-hover:scale-125 transition-all duration-300"
                />
                <div className="absolute left-0 top-0 w-full h-full bg-black/15 -z-10"></div>
              </Card>
            </Link>
          ))}
        </section>
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

export default ArtikelPage;
