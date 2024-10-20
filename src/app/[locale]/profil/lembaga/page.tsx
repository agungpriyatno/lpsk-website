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

const ProfilLembagaPage = () => {
  return (
    <main>
      <section className="container space-y-10">
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
          PROFIL LEMBAGA PERLINDUNGAN SAKSI DAN KORBAN
        </h1>
        <h3 className="font-bold text-lg">SEJARAH LAHIRNYA LPSK</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempora
          architecto quisquam dignissimos aliquam dolores error tempore
          distinctio numquam sed eum obcaecati natus ullam, corrupti voluptatum
          commodi eaque dolorem? Eum. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Commodi vitae temporibus, dolorem eligendi, laborum
          quod cum optio excepturi ad consequatur sit! Voluptate molestiae vero
          totam tenetur ducimus libero excepturi ad. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Sequi magni aperiam omnis rem, maxime
          accusantium veritatis dolorem dolore voluptatem impedit ad quidem
          voluptate exercitationem eaque beatae? Cupiditate hic perferendis
          sunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempora
          architecto quisquam dignissimos aliquam dolores error tempore
          distinctio numquam sed eum obcaecati natus ullam, corrupti voluptatum
          commodi eaque dolorem? Eum. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Commodi vitae temporibus, dolorem eligendi, laborum
          quod cum optio excepturi ad consequatur sit! Voluptate molestiae vero
          totam tenetur ducimus libero excepturi ad. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Sequi magni aperiam omnis rem, maxime
          accusantium veritatis dolorem dolore voluptatem impedit ad quidem
          voluptate exercitationem eaque beatae? Cupiditate hic perferendis
          sunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempora
          architecto quisquam dignissimos aliquam dolores error tempore
          distinctio numquam sed eum obcaecati natus ullam, corrupti voluptatum
          commodi eaque dolorem? Eum. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Commodi vitae temporibus, dolorem eligendi, laborum
          quod cum optio excepturi ad consequatur sit! Voluptate molestiae vero
          totam tenetur ducimus libero excepturi ad. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Sequi magni aperiam omnis rem, maxime
          accusantium veritatis dolorem dolore voluptatem impedit ad quidem
          voluptate exercitationem eaque beatae? Cupiditate hic perferendis
          sunt.
        </p>
        <h3 className=" text-lg font-bold">DASAR HUKUM</h3>
        <ul className=" list-disc pl-5">
          <li>
            Undang-Undang Nomor 31 Tahun 2014 tentang Perubahan atas
            Undang-Undang Nomor 13 Tahun 2006 tentang Perlindungan Saksi dan
            Korban
          </li>
          <li>
            Undang-Undang Nomor 13 Tahun 2006 tentang Perlindungan Saksi dan
            Korban
          </li>
        </ul>
        <Button>Unduh Dasar Hukum</Button>
        <div className="grid grid-cols-3">
          <div className=" col-span-2 space-y-4">
            <h3 className=" text-lg font-bold">VISI</h3>
            <ul className=" list-disc pl-5">
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
                incidunt.
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
                incidunt.
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
                incidunt.
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
                incidunt.
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
                incidunt.
              </li>
            </ul>
          </div>
          <div className=" col-span-1 aspect-video relative">
            <Image
              src={`https://picsum.photos/seed/1000/1000`}
              alt=""
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <div className=" col-span-1 aspect-video relative">
            <Image
              src={`https://picsum.photos/seed/1000/1000`}
              alt=""
              fill
              className="object-cover object-center"
            />
          </div>
          <div className=" col-span-1"></div>
          <div className=" col-span-1 space-y-4">
            <h3 className=" text-lg font-bold">VISI</h3>
            <ul className=" list-disc pl-5">
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
                incidunt.
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
                incidunt.
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
                incidunt.
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
                incidunt.
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
                incidunt.
              </li>
            </ul>
          </div>
          <div className=" col-span-1 space-y-4">
            <h3 className=" text-lg font-bold">VISI</h3>
            <ul className=" list-disc pl-5">
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
                incidunt.
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
                incidunt.
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
                incidunt.
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
                incidunt.
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
                incidunt.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProfilLembagaPage;
