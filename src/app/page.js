import BlogLists from "@/components/Home/BlogLists";
import Hero from "@/components/Home/Hero";
import Latest from "@/components/Home/Latest";
import ServiceLists from "@/components/Home/ServiceLists";
import FrontEndLayout from "@/components/Master/FrontEndLayout";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

async function getData() {
  let sliders = await prismaClient.blog.findMany({
    where: { type: "slider" },
  });

  let featureds = await prismaClient.blog.findMany({
    where: { type: "featured" },
  });

  let populars = await prismaClient.blog.findMany({
    where: { type: "popular" },
  });

  let latestBlogs = await prismaClient.blog.findMany({
    orderBy: { id: "desc" },
    take: 2,
  });

  let latestServices = await prismaClient.service.findMany({
    orderBy: { id: "desc" },
    take: 2,
  });

  let blogs = await prismaClient.blog.findMany();

  let services = await prismaClient.service.findMany();

  return {
    sliders,
    featureds,
    populars,
    blogs,
    services,
    latestBlogs,
    latestServices,
  };
}

const Page = async () => {
  const data = await getData();

  return (
    <FrontEndLayout>
      <Hero featureds={data["featureds"]} sliders={data["sliders"]} />
      <div className="container mt-5">
        <Latest
          latestBlogs={data.latestBlogs}
          latestServices={data.latestServices}
        />
        <BlogLists blogs={data.blogs} />
        <ServiceLists services={data.services} />
      </div>
    </FrontEndLayout>
  );
};
export default Page;
