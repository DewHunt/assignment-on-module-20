import AppNavBar from "@/components/Master/AppNavBar";
import Footer from "@/components/Master/Footer";
import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { Fragment } from "react";
import { Toaster } from "react-hot-toast";

async function getData() {
  const prisma = new PrismaClient();
  let socials = await prisma.social.findMany();
  let categories = await prisma.category.findMany();
  return { socials: socials, categories: categories };
}

const FrontEndLayout = async (props) => {
  const headersList = headers();
  const firstName = headersList.get("firstName");

  const data = await getData();

  return (
    <Fragment>
      <AppNavBar data={data} firstName={firstName} />
      {props.children}
      <Toaster position="bottom-center" />
      <Footer data={data} />
    </Fragment>
  );
};
export default FrontEndLayout;
