import ContactSection from "@/components/contacts/ContactSection";
import SendMessageSection from "@/components/contacts/SendMessageSection";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

async function getData(id) {
  const contactInfo = await prismaClient.contact.findUnique({
    where: { id: 1 },
  });
  return { contactInfo };
}

const Page = async (props) => {
  const data = await getData(props.searchParams["id"]);

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-xx-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 px-3">
            <ContactSection contactInfo={data.contactInfo} />
          </div>
          <div className="col-xx-9 col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 px-3">
            <SendMessageSection />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
