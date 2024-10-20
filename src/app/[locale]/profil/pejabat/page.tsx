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
    <main className="space-y-10">
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
      <section className="container space-y-10">
        <h1 className=" text-2xl font-bold">
          PROFIL LEMBAGA PERLINDUNGAN SAKSI DAN KORBAN (2019-2024)
        </h1>
        <ul className=" space-y-5">
          <li className="grid grid-cols-3 gap-5">
            <div className=" col-span-2">
              <h3 className=" font-bold text-lg">
                KETUA LEMBAGA PERLINDUNGAN SAKSI DAN KORBAN
              </h3>
              <h3 className=" font-bold text-lg">
                Drs. Hasto Atmojo Suroyo, M. Krim.
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque laudantium maxime nesciunt, quaerat eligendi illum
                rem vitae expedita quibusdam laborum quos autem aspernatur
                aperiam, mollitia odio. Cupiditate soluta, vero deleniti omnis
                id nam aliquam minima beatae perspiciatis commodi harum eum?
                Reprehenderit explicabo voluptatem hic sed nam illo incidunt
                aliquid debitis, aut dolorem possimus nobis, quam eligendi cum
                officiis doloremque sint animi consectetur cupiditate enim
                recusandae? Iure ipsam officia voluptate ab odit inventore
                cumque ullam animi dolorum id iusto atque aliquam, quasi,
                dolores explicabo. Veritatis fugiat aliquid quidem similique,
                optio corrupti corporis at, ex atque doloribus odit doloremque
                sequi impedit temporibus.
              </p>
            </div>
            <div className="col-span-1 aspect-video relative">
              <Image
                src={`https://picsum.photos/seed/1000/1000`}
                alt=""
                fill
                className="object-cover object-center"
              />
            </div>
          </li>
          <li className="grid grid-cols-3 gap-5">
            <div className=" col-span-2">
              <h3 className=" font-bold text-lg">
                KETUA LEMBAGA PERLINDUNGAN SAKSI DAN KORBAN
              </h3>
              <h3 className=" font-bold text-lg">
                Drs. Hasto Atmojo Suroyo, M. Krim.
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque laudantium maxime nesciunt, quaerat eligendi illum
                rem vitae expedita quibusdam laborum quos autem aspernatur
                aperiam, mollitia odio. Cupiditate soluta, vero deleniti omnis
                id nam aliquam minima beatae perspiciatis commodi harum eum?
                Reprehenderit explicabo voluptatem hic sed nam illo incidunt
                aliquid debitis, aut dolorem possimus nobis, quam eligendi cum
                officiis doloremque sint animi consectetur cupiditate enim
                recusandae? Iure ipsam officia voluptate ab odit inventore
                cumque ullam animi dolorum id iusto atque aliquam, quasi,
                dolores explicabo. Veritatis fugiat aliquid quidem similique,
                optio corrupti corporis at, ex atque doloribus odit doloremque
                sequi impedit temporibus.
              </p>
            </div>
            <div className="col-span-1 aspect-video relative">
              <Image
                src={`https://picsum.photos/seed/1000/1000`}
                alt=""
                fill
                className="object-cover object-center"
              />
            </div>
          </li>
          <li className="grid grid-cols-3 gap-5">
            <div className=" col-span-2">
              <h3 className=" font-bold text-lg">
                KETUA LEMBAGA PERLINDUNGAN SAKSI DAN KORBAN
              </h3>
              <h3 className=" font-bold text-lg">
                Drs. Hasto Atmojo Suroyo, M. Krim.
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque laudantium maxime nesciunt, quaerat eligendi illum
                rem vitae expedita quibusdam laborum quos autem aspernatur
                aperiam, mollitia odio. Cupiditate soluta, vero deleniti omnis
                id nam aliquam minima beatae perspiciatis commodi harum eum?
                Reprehenderit explicabo voluptatem hic sed nam illo incidunt
                aliquid debitis, aut dolorem possimus nobis, quam eligendi cum
                officiis doloremque sint animi consectetur cupiditate enim
                recusandae? Iure ipsam officia voluptate ab odit inventore
                cumque ullam animi dolorum id iusto atque aliquam, quasi,
                dolores explicabo. Veritatis fugiat aliquid quidem similique,
                optio corrupti corporis at, ex atque doloribus odit doloremque
                sequi impedit temporibus.
              </p>
            </div>
            <div className="col-span-1 aspect-video relative">
              <Image
                src={`https://picsum.photos/seed/1000/1000`}
                alt=""
                fill
                className="object-cover object-center"
              />
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default PejabatPage;
