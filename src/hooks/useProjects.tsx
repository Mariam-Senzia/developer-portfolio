const useProjects = () => {
  const projects = [
    {
      image: "/projects/DukaNext-UI.png",
      title: "DukaNext",
      description:
        "An eCommerce platform that enables shop owners to create, customize and manage their own online stores",
      fullDescription: "DukaNext is an eCommerce platform that enables shop owners to create, customize, and manage their own online stores. Built using the MERN stack, where I contributed by developing new features, enhancing existing functionality, and improving the overall user experience.",
      tools: ["React","Next.js","TypeScript","Express.js","Node.js","MongoDB","BootStrap"],
      githubLink: "https://github.com/aknjoroge/vastly-ecommerce-dashboard",
      liveLink: "https://dukanext.co.ke/",
    },
    {
      image: "/projects/BlogNest-UI.png",
      title: "BlogNest",
      description:
        "A blog platform where users can view blogs, filter them by category, and publish their own after signing in",
      fullDescription: "BlogNest is a blog platform where users can view blogs, filter them by category, and publish their own after signing in. Built with the MERN stack (MongoDB, Express, React, Node.js), it demonstrates my skills in full-stack development.",
      tools: ["React","JavaScript","Express.js","Node.js","MongoDB","Zustand","ChakraUI"],
      githubLink: "https://github.com/Mariam-Senzia/BlogNest",
      liveLink: "https://blog-nest-xi.vercel.app/",
    },
    {
      image: "/projects/Safiri-Africa-UI.png",
      title: "Safiri Africa",
      description:
        "A centralized platform where travelers can access comprehensive and unlimited information about African travel destinations",
      fullDescription: "Safiri Africa provides a centralized platform where travelers can access comprehensive and unlimited information about African travel destinations.It provides details about various African countries, including photos, maps, and currency information. This makes travel planning more accessible and engaging, particularly for those who may not be familiar with the continent.",
      tools: ["React","JavaScript","Flask","Python","PostgreSQL","Zustand","ChakraUI"],
      githubLink: "https://github.com/Mariam-Senzia/Safiri-Africa",
      liveLink: "https://safiri-africa-beta.vercel.app/",
    },
  ];
  return projects;
};

export default useProjects;
