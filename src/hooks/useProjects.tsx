const useProjects = () => {
  const projects = [
    {
      id: 1,
      image: "/projects/DukaNext-UI.png",
      title: "DukaNext",
      description:
        "An eCommerce platform that enables shop owners to create, customize and manage their own online stores",
      fullDescription:
        "DukaNext is an eCommerce platform that enables shop owners to create, customize and manage their own online stores. Built using the MERN stack, I contributed by developing new features, enhancing existing functionality, and improving the overall user experience.",
      tools: [
        "React",
        "Next.js",
        "TypeScript",
        "Express.js",
        "Node.js",
        "MongoDB",
        "BootStrap",
        "Puck",
      ],
      liveLink: "https://dukanext.co.ke/",
      storeFrontOne: "https://shop.ngemihomecoming.ke/",
      storeFrontTwo: "https://blaqfiti.co.ke/",
      deliverables: [
        "Built responsive and user-friendly components using React and Next.js",
        "Enhanced the admin dashboard with new features and improved form components",
        "Improved product listing, search functionality and cart experience",
        "Customized and integrated the Puck theme builder to allow users to create and manage their own themes",
        "Enhanced API integration and error handling between frontend and backend",
        "Refactored UI elements to boost performance and mobile responsiveness",
      ],
    },
    {
      id: 2,
      image: "/projects/Bright-Star-UI.png",
      title: "Bright Star",
      description:
        "A professional cleaning and pest control service offering reliable, affordable, and eco-friendly solutions for homes and offices.",
      fullDescription:
        "Bright Star is a professional cleaning and pest control company based in Busia that provides reliable, affordable, and eco-friendly cleaning solutions for homes and offices. The platform highlights the company’s services, showcasing their commitment to professionalism, trained staff, and sustainable cleaning practices. Built with a clean, modern UI, the project focuses on effectively presenting their brand, services, and values to potential clients.",
      tools: ["Next.js", "TypeScript", "ChakraUI"],
      githubLink: "https://github.com/Mariam-Senzia/bright-star",
      liveLink: "https://bright-star-eta.vercel.app/",
      deliverables: [
        "Developed a responsive and professional cleaning & pest control platform using Next.js and TypeScript",
        "Designed a clean and accessible user interface with Chakra UI for consistent styling and layout",
        "Implemented custom React hooks to manage reusable logic across service and contact sections",
        "Utilized Next.js Server-Side Rendering (SSR) for optimized performance and faster page loading",
      ],
    },
    {
      id: 3,
      image: "/projects/BlogNest-UI.png",
      title: "BlogNest",
      description:
        "A blog platform where users can view blogs, filter them by category, and publish their own after signing in",
      fullDescription:
        "BlogNest is a blog platform where users can view blogs, filter them by category, and publish their own after signing in. Built with the MERN stack (MongoDB, Express, React, Node.js), it demonstrates my skills in full-stack development.",
      tools: [
        "React",
        "JavaScript",
        "Express.js",
        "Node.js",
        "MongoDB",
        "Zustand",
        "ChakraUI",
      ],
      githubLink: "https://github.com/Mariam-Senzia/BlogNest",
      liveLink: "https://blog-nest-xi.vercel.app/",
      deliverables: [
        "Built full-featured blog platform with user authentication and JWT-based session handling",
        "Developed category-based blog filtering and dynamic rendering using React + Express APIs",
        "Designed and implemented MongoDB schemas for blogs, users, and categories",
        "Created protected routes for publishing posts",
        "Built responsive UI with React",
      ],
    },
    {
      id: 4,
      image: "/projects/Omnifood-UI.png",
      title: "Omnifood",
      description:
        "An AI-powered landing page promoting healthy eating through personalized meal plans.",
      fullDescription:
        "Omnifood is an AI-driven food service platform that helps busy people eat healthy. Users select their dietary preferences, and our algorithm generates personalized weekly meal plans. Partner restaurants then prepare and deliver the meals through a convenient monthly subscription model.",
      tools: ["HTML", "CSS"],
      githubLink: "https://github.com/Mariam-Senzia/omnifood",
      liveLink: "https://omnifoodly.netlify.app/",
      deliverables: [
        "Designed and developed a responsive landing page for Omnifood, an AI-powered food delivery concept",
        "Implemented modern UI layouts using HTML5, CSS3, Flexbox and Grid for cross-device responsiveness",
        "Created smooth scroll-based animations and transitions for an engaging user experience",
        "Structured clear content sections such as hero, features, testimonials, and pricing for strong visual hierarchy",
        "Optimized page performance and accessibility following best frontend practices",
        "Delivered a clean, professional and conversion-focused design showcasing the Omnifood brand vision",
      ],
    },
    {
      id: 5,
      image: "/projects/Safiri-Africa-UI.png",
      title: "Safiri Africa",
      description:
        "A centralized platform where travelers can access comprehensive and unlimited information about African travel destinations",
      fullDescription:
        "Safiri Africa provides a centralized platform where travelers can access comprehensive and unlimited information about African travel destinations.It provides details about various African countries, including photos, maps, and currency information. This makes travel planning more accessible and engaging, particularly for those who may not be familiar with the continent.",
      tools: [
        "React",
        "JavaScript",
        "Flask",
        "Python",
        "PostgreSQL",
        "Zustand",
        "ChakraUI",
      ],
      githubLink: "https://github.com/Mariam-Senzia/Safiri-Africa",
      liveLink: "https://safiri-africa-beta.vercel.app/",
      deliverables: [
        "Developed a full-stack travel platform showcasing African destinations with photos, maps and currency data",
        "Built a RESTful API with Flask & PostgreSQL to manage countries, content and user interactions",
        "Built the frontend using React, JavaScript, Chakra UI, and Zustand for responsive and intuitive UX",
        "Integrated external APIs for geographic and currency data",
        "Implemented interactive features: like, comment, and share, improving user engagement",
        "Implemented dynamic features like country filtering and detailed destination pages",
      ],
    },
  ];
  return projects;
};

export default useProjects;
