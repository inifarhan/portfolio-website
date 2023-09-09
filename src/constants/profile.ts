import type { Profile } from "@/types";

export const profileData: Profile = {
  name: "Farhan Gunawan",
  region: "Indonesia",
  CV: "/assets/pdf/Farhan Gunawan CV.pdf",
  divisions: ["Fullstack Developer", "Web Developer", "Javascript enthusiast"],
  pictures: ["/assets/images/home-profile.png", "/assets/images/Profile.jpg"],
  descriptions: [
    "I create stunning website for your business, Intermediate experienced in web development.",
    "Passionate full-stack web developer with a focus on JavaScript, seeking exciting opportunities to contribute my skills and knowledge in building robust and user-friendly web applications. With a solid foundation in HTML, CSS, JavaScript, and Typescript, I am constantly expanding my expertise in frameworks like Reactjs, Nextjs, and ExpressJs.",
  ],
  experiences: [
    {
      number: 2,
      title: "Years Of Experience",
    },
    {
      number: 3,
      title: "Frameworks Used",
    },
    {
      number: 4,
      title: "Successed Projects",
    },
  ],
};
