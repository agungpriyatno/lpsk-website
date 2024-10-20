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

type ArtikelPageProps = {
  params: {
    id: string;
  };
};

const ArtikelPage = ({params: {id}}: ArtikelPageProps) => {
  return (
    <main className="w-full">
      <section className="w-full aspect-[21/9] flex place-items-center justify-center relative">
        <Breadcrumb className="pt-5 absolute top-0 left-0">
          <BreadcrumbList className="m-0 text-white">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/berita">Berita</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white">Rilis</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Image src={`https://picsum.photos/seed/rilis-${id}/2000/2000`} alt="image" fill className="object-cover h-full w-full -z-20" />
        <div className="absolute left-0 top-0 w-full h-full bg-black/15 -z-10"></div>
        <h1 className="text-center font-bold text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, facilis? </h1>
      </section>
      <article className="container flex flex-col gap-3 pt-5">
        <h2 className="font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, facilis? </h2>
        <small>20 Agustus 2024</small>
        <small>Diposting oleh admin</small>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium accusamus iure similique id corporis eius officiis veniam illo voluptate. Eligendi maiores quam eaque quos et voluptas vero accusantium quo, voluptates eum esse maxime exercitationem corporis inventore, quis doloribus odit, fugiat blanditiis laboriosam vitae consectetur quae rem beatae. Ab in, expedita incidunt dolores accusantium qui! Nobis maiores doloribus molestiae praesentium quo labore. Corrupti fugit nihil sint laboriosam facilis consequatur inventore magnam delectus error, expedita itaque quae rem a cum quibusdam voluptatum sapiente officiis, cumque exercitationem accusantium totam doloribus quisquam! Odio sapiente quisquam expedita reiciendis, at commodi ratione necessitatibus inventore neque doloribus delectus accusamus facilis ipsa laboriosam culpa sunt repellendus quaerat recusandae veniam vitae atque dolorem voluptatum deleniti vero. Recusandae accusantium nobis aliquam, veniam nulla in repudiandae illum culpa voluptatum quae quis ducimus minima veritatis ex. Quos officiis consequuntur praesentium earum aliquam. Maiores repudiandae tenetur et excepturi rem, mollitia, eligendi ducimus quia quisquam a impedit maxime error beatae esse fugit hic atque blanditiis temporibus ratione. Pariatur velit ipsam cumque, praesentium at quidem ducimus voluptate, eligendi iste sapiente excepturi, quaerat iusto sint consequuntur error aliquam quas! Impedit at, cumque odio, tenetur delectus, beatae laboriosam optio nesciunt in deserunt inventore perferendis earum? Exercitationem, numquam?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium accusamus iure similique id corporis eius officiis veniam illo voluptate. Eligendi maiores quam eaque quos et voluptas vero accusantium quo, voluptates eum esse maxime exercitationem corporis inventore, quis doloribus odit, fugiat blanditiis laboriosam vitae consectetur quae rem beatae. Ab in, expedita incidunt dolores accusantium qui! Nobis maiores doloribus molestiae praesentium quo labore. Corrupti fugit nihil sint laboriosam facilis consequatur inventore magnam delectus error, expedita itaque quae rem a cum quibusdam voluptatum sapiente officiis, cumque exercitationem accusantium totam doloribus quisquam! Odio sapiente quisquam expedita reiciendis, at commodi ratione necessitatibus inventore neque doloribus delectus accusamus facilis ipsa laboriosam culpa sunt repellendus quaerat recusandae veniam vitae atque dolorem voluptatum deleniti vero. Recusandae accusantium nobis aliquam, veniam nulla in repudiandae illum culpa voluptatum quae quis ducimus minima veritatis ex. Quos officiis consequuntur praesentium earum aliquam. Maiores repudiandae tenetur et excepturi rem, mollitia, eligendi ducimus quia quisquam a impedit maxime error beatae esse fugit hic atque blanditiis temporibus ratione. Pariatur velit ipsam cumque, praesentium at quidem ducimus voluptate, eligendi iste sapiente excepturi, quaerat iusto sint consequuntur error aliquam quas! Impedit at, cumque odio, tenetur delectus, beatae laboriosam optio nesciunt in deserunt inventore perferendis earum? Exercitationem, numquam?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium accusamus iure similique id corporis eius officiis veniam illo voluptate. Eligendi maiores quam eaque quos et voluptas vero accusantium quo, voluptates eum esse maxime exercitationem corporis inventore, quis doloribus odit, fugiat blanditiis laboriosam vitae consectetur quae rem beatae. Ab in, expedita incidunt dolores accusantium qui! Nobis maiores doloribus molestiae praesentium quo labore. Corrupti fugit nihil sint laboriosam facilis consequatur inventore magnam delectus error, expedita itaque quae rem a cum quibusdam voluptatum sapiente officiis, cumque exercitationem accusantium totam doloribus quisquam! Odio sapiente quisquam expedita reiciendis, at commodi ratione necessitatibus inventore neque doloribus delectus accusamus facilis ipsa laboriosam culpa sunt repellendus quaerat recusandae veniam vitae atque dolorem voluptatum deleniti vero. Recusandae accusantium nobis aliquam, veniam nulla in repudiandae illum culpa voluptatum quae quis ducimus minima veritatis ex. Quos officiis consequuntur praesentium earum aliquam. Maiores repudiandae tenetur et excepturi rem, mollitia, eligendi ducimus quia quisquam a impedit maxime error beatae esse fugit hic atque blanditiis temporibus ratione. Pariatur velit ipsam cumque, praesentium at quidem ducimus voluptate, eligendi iste sapiente excepturi, quaerat iusto sint consequuntur error aliquam quas! Impedit at, cumque odio, tenetur delectus, beatae laboriosam optio nesciunt in deserunt inventore perferendis earum? Exercitationem, numquam?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium accusamus iure similique id corporis eius officiis veniam illo voluptate. Eligendi maiores quam eaque quos et voluptas vero accusantium quo, voluptates eum esse maxime exercitationem corporis inventore, quis doloribus odit, fugiat blanditiis laboriosam vitae consectetur quae rem beatae. Ab in, expedita incidunt dolores accusantium qui! Nobis maiores doloribus molestiae praesentium quo labore. Corrupti fugit nihil sint laboriosam facilis consequatur inventore magnam delectus error, expedita itaque quae rem a cum quibusdam voluptatum sapiente officiis, cumque exercitationem accusantium totam doloribus quisquam! Odio sapiente quisquam expedita reiciendis, at commodi ratione necessitatibus inventore neque doloribus delectus accusamus facilis ipsa laboriosam culpa sunt repellendus quaerat recusandae veniam vitae atque dolorem voluptatum deleniti vero. Recusandae accusantium nobis aliquam, veniam nulla in repudiandae illum culpa voluptatum quae quis ducimus minima veritatis ex. Quos officiis consequuntur praesentium earum aliquam. Maiores repudiandae tenetur et excepturi rem, mollitia, eligendi ducimus quia quisquam a impedit maxime error beatae esse fugit hic atque blanditiis temporibus ratione. Pariatur velit ipsam cumque, praesentium at quidem ducimus voluptate, eligendi iste sapiente excepturi, quaerat iusto sint consequuntur error aliquam quas! Impedit at, cumque odio, tenetur delectus, beatae laboriosam optio nesciunt in deserunt inventore perferendis earum? Exercitationem, numquam?</p>
      </article>
      <section className="container">
        <section className="w-full grid grid-cols-3 container pt-5 gap-2">
          {[1, 2, 3].map((item) => (
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
                <h3 className="font-bold text-white">Rilis Publikasi {item}</h3>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
                  laboriosam!...
                </p>
                <Image
                  fill
                  src={`https://picsum.photos/seed/publikasi-${item}/2000/2000`}
                  alt="LPSK"
                  className=" object-cover -z-20 group-hover:scale-125 transition-all duration-300"
                />
                <div className="absolute left-0 top-0 w-full h-full bg-black/15 -z-10"></div>
              </Card>
            </Link>
          ))}
        </section>
      </section>
    </main>
  );
};

export default ArtikelPage;
