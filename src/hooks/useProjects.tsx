const useProjects = () => {
  const projects = [
    {
      image: "/projects/DukaNext-UI.png",
      title: "DukaNext",
      description:
        "An eCommerce platform that enables shop owners to create, customize and manage their own online stores",
      fullDescription: "DukaNext is an eCommerce platform that enables shop owners to create, customize and manage their own online stores. Built using the MERN stack, I contributed by developing new features, enhancing existing functionality, and improving the overall user experience.",
      tools: ["React","Next.js","TypeScript","Express.js","Node.js","MongoDB","BootStrap","Puck"],
      liveLink: "https://dukanext.co.ke/",
      storeFrontOne: "https://zia.dukanext.co.ke/",
      storeFrontTwo: "https://carpockets.dukanext.co.ke/",
      deliverables: [
        "Built responsive and user-friendly components using React and Next.js",
        "Enhanced the admin dashboard with new features and improved form components",
        "Improved product listing, search functionality and cart experience",
        "Customized and integrated the Puck theme builder to allow users to create and manage their own themes",
        "Enhanced API integration and error handling between frontend and backend",
        "Refactored UI elements to boost performance and mobile responsiveness"
      ]
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
      deliverables: [
        "Built full-featured blog platform with user authentication and JWT-based session handling",
        "Developed category-based blog filtering and dynamic rendering using React + Express APIs",
        "Designed and implemented MongoDB schemas for blogs, users, and categories",
        "Created protected routes for publishing posts",
        "Built responsive UI with React",
      ]
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
      deliverables: [
        "Developed a full-stack travel platform showcasing African destinations with photos, maps and currency data",
        "Built a RESTful API with Flask & PostgreSQL to manage countries, content and user interactions",
        "Built the frontend using React, JavaScript, Chakra UI, and Zustand for responsive and intuitive UX",
        "Integrated external APIs for geographic and currency data",
        "Implemented interactive features: like, comment, and share, improving user engagement",
        "Implemented dynamic features like country filtering and detailed destination pages",
      ]
    },
  ];
  return projects;
};

export default useProjects;
