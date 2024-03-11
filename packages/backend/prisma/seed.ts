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
  console.log("Data seeded...");
});
