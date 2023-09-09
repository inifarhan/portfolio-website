import type { Portfolio } from "@/types";

export const portfolioList: Portfolio[] = [
  {
    title: "E-commerce Admin",
    imageThumbnail: "/assets/images/project-01.PNG",
    description:
      "Full Stack E-Commerce + Dashboard & CMS: Next.js 13 App Router, React, Tailwind, Prisma, MySQL, Clerk Auth. The e-commerce admin dashboard is a user interface specifically designed to manage and control the operations of an online store or e-commerce platform.",
    livePreviewURL: "https://ecommerce-admin-iota-sepia.vercel.app",
    repositoryURL: "https://github.com/inifarhan/ecommerce-admin",
    techStack: [
      {
        tech: "Next JS",
        logo: "/assets/svg/next js.svg",
      },
      {
        tech: "Typescript",
        logo: "/assets/svg/typescript.svg",
      },
      {
        tech: "Mysql",
        logo: "/assets/svg/mysql.svg",
      },
      {
        tech: "Tailwind",
        logo: "/assets/svg/tailwind.svg",
      },
    ],
  },
  {
    title: "E-commerce Store",
    imageThumbnail: "/assets/images/project-02.PNG",
    description:
      "Fullstack E-commerce store allows the user to buy the product with Stripe payment that you make in Ecommerce-admin. The content in this application is dynamically customized in the Ecommerce-admin too.",
    livePreviewURL: "https://ecommerce-store-delta-eight.vercel.app/",
    repositoryURL: "https://github.com/inifarhan/ecommerce-store",
    techStack: [
      {
        tech: "Next JS",
        logo: "/assets/svg/next js.svg",
      },
      {
        tech: "Typescript",
        logo: "/assets/svg/typescript.svg",
      },
      {
        tech: "Stripe",
        logo: "/assets/svg/stripe.svg",
      },
      {
        tech: "Mysql",
        logo: "/assets/svg/mysql.svg",
      },
    ],
  },
  {
    title: "REST API with JWT Authentication",
    imageThumbnail: "/assets/images/project-03.png",
    description:
      "A REST API is an application for backend that provides users to login using JWT, it also includes pagination to GET data for better performance",
    livePreviewURL: "https://github.com/inifarhan/rest-api-with-jwt-and-pagination",
    repositoryURL: "https://github.com/inifarhan/rest-api-with-jwt-and-pagination",
    techStack: [
      {
        tech: "Express JS",
        logo: "/assets/svg/express.svg",
      },
      {
        tech: "Node JS",
        logo: "/assets/svg/node js.svg",
      },
      {
        tech: "JWT",
        logo: "/assets/svg/jwt.svg",
      },
      {
        tech: "Javascript",
        logo: "/assets/svg/javascript.svg",
      },
    ],
  },
];
