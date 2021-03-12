const homeRoute = {
  id: 0,
  path: "/",
  title: "Home",
  attribute: "primary",
};

const blogRoutes = {
  routeTitle: "blogsubRoutes",
  routes: [
    {
      id: 510,
      image: "/mainImg/applyMakeupOthers.jpg",
      path: "/blog",
      tag: "clean_beauty",
      title: "Clean Beauty",
      attribute: "blogFilter",
    },
    {
      id: 520,
      image: "/mainImg/coffee.jpg",
      path: "/blog",
      tag: "lifestyle",
      title: "Lifestyle",
      attribute: "blogFilter",
    },
    {
      id: 530,
      image: "/mainImg/bowlFood.jpg",
      path: "/blog",
      tag: "recipes",
      title: "Recipes",
      attribute: "blogFilter",
    },
    {
      id: 540,
      image: "/mainImg/applyMakeupSelf.jpg",
      path: "/blog",
      tag: "safe_products",
      title: "Safe Products",
      attribute: "blogFilter",
    },
  ],
};

const webpageRoutes = {
  routeTitle: "mainSiteMap",
  routes: [
    {
      id: 1,
      path: "/",
      title: "Home",
      attribute: "home",
      subRoutes: null,
    },
    {
      id: 100,
      path: "/services",
      title: "Services",
      attribute: "primary",
      subRoutes: null,
    },
    {
      id: 200,
      path: "/about",
      title: "About",
      attribute: "primary",
      subRoutes: null,
    },
    {
      id: 300,
      path: "/shop",
      title: "Shop",
      attribute: "secondary",
      subRoutes: null,
    },
    {
      id: 400,
      path: "/opportunity",
      title: "Opportunity",
      attribute: "secondary",
      subRoutes: null,
    },
    {
      id: 500,
      path: "/blog",
      title: "Blog",
      attribute: "primary",
      subRoutes: blogRoutes,
    },
    {
      id: 600,
      path: "/contact",
      title: "contact",
      attribute: "secondary",
      subRoutes: null,
    },
  ],
};

const socialRoutes = [
  {
    id: 100,
    path: "/",
    title: "FaceBook",
    attribute: "primary",
  },
  {
    id: 200,
    path: "/",
    title: "Instagram",
    attribute: "primary",
  },
];

export {
  homeRoute, blogRoutes, webpageRoutes, socialRoutes,
};
