import { PrismaClient } from "@prisma/client";
import parse from "html-react-parser";

const prismaClient = new PrismaClient();
async function getData(id) {
  const ourVission = await prismaClient.about.findUnique({
    where: { id: 1 },
  });
  const ourMission = await prismaClient.about.findUnique({
    where: { id: 2 },
  });
  return { ourVission, ourMission };
}

const Page = async () => {
  const data = await getData();

  return (
    <div>
      <div className="container mt-5">
        <h3>Our Vission</h3>
        <hr />
        <div className="text-justify">
          {parse(`${data.ourVission.longDescription}`)}
        </div>

        <h3>Our Mission</h3>
        <hr />
        <div className="text-justify">
          {parse(`${data.ourMission.longDescription}`)}
        </div>
      </div>
    </div>
  );
};
export default Page;
