import { log } from "@augment-vir/node-js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.message.deleteMany({});
  await prisma.user.deleteMany({});

  await prisma.user.create({
    data: {
      name: "Jack",
      userName: "comuhwe@example.com",
      password: "TRwc9NR1c8Sk",
      email: "comuhwe@example.com",
      messages: {
        create: [
          {
            body: "A Note for Jack",
          },
          {
            body: "Another note for Jack",
          },
        ],
      },
      posts: {
        createMany: {
          data: [
            {
              likes: 10,
              body: "Incididunt pariatur elit excepteur non elit sit tempor mollit est laborum qui ex magna esse. Aute dolor et ipsum eiusmod deserunt cillum. Magna tempor pariatur cillum sit amet ad non adipisicing do exercitation.\n\tIrure dolore esse consequat culpa. Ea aliquip dolore duis minim nisi qui consectetur deserunt. Veniam occaecat proident officia consequat laboris in cupidatat irure ad Lorem excepteur laboris fugiat. Reprehenderit eu nostrud officia sunt cillum deserunt esse reprehenderit veniam labore est sint non in. Officia irure reprehenderit ut laboris pariatur exercitation aliqua labore laborum nisi esse. Eu proident adipisicing excepteur dolor incididunt deserunt eiusmod sint nisi minim. \n\tEiusmod ut commodo ex dolor tempor nisi laboris id elit nisi qui. Reprehenderit et sint Lorem aliqua elit aute incididunt proident voluptate officia deserunt officia. Nisi commodo cupidatat anim irure enim sint nulla.",
            },
          ],
        },
      },
    },
  });

  await prisma.user.create({
    data: {
      name: "Ryan",
      userName: "vija@example.com",
      password: "sas5isVQUV7vM",
      email: "vija@example.com",
      messages: {
        create: [
          {
            body: "A Note for Ryan",
          },
          {
            body: "Another note for Ryan",
          },
        ],
      },
    },
  });

  await prisma.user.create({
    data: {
      name: "Adam",
      userName: "uswp@example.com",
      password: "UrKCJ6MWUJDnT",
      email: "uswp@example.com",
      messages: {
        create: [
          {
            body: "A Note for Adam",
          },
          {
            body: "Another note for Adam",
          },
        ],
      },
    },
  });
}

main().then(() => {
  log.success("Data seeded...");
});
