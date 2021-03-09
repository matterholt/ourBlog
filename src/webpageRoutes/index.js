const homeRoute = {
  id: 0,
  path: "/",
  title: "Home",
  attribute: "primary",
};

const blogRoutes = {
  routeTitle: "blogSubRoutes",
  routes: [
    {
      id: 1,
      image: "/mainImg/applyMakeupOthers.jpg",
      path: "/blog",
      tag: "clean_beauty",
      title: "Clean Beauty",
      attribute: "blogFilter",
    },
    {
      id: 2,
      image: "/mainImg/coffee.jpg",
      path: "/blog",
      tag: "lifestyle",
      title: "Lifestyle",
      attribute: "blogFilter",
    },
    {
      id: 3,
      image: "/mainImg/bowlFood.jpg",
      path: "/blog",
      tag: "recipes",
      title: "Recipes",
      attribute: "blogFilter",
    },
    {
      id: 4,
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
      id: 0,
      path: "/",
      title: "Home",
      attribute: "home",
      subRoutes: null,
    },
    {
      id: 1,
      path: "/services",
      title: "Services",
      attribute: "primary",
      subRoutes: null,
    },
    {
      id: 2,
      path: "/about",
      title: "About",
      attribute: "primary",
      subRoutes: null,
    },
    {
      id: 3,
      path: "/shop",
      title: "Shop",
      attribute: "secondary",
      subRoutes: null,
    },
    {
      id: 4,
      path: "/opportunity",
      title: "Opportunity",
      attribute: "secondary",
      subRoutes: null,
    },
    {
      id: 5,
      path: "/blog",
      title: "Blog",
      attribute: "primary",
      subRoutes: blogRoutes,
    },
    {
      id: 6,
      path: "/contact",
      title: "contact",
      attribute: "secondary",
      subRoutes: null,
    },
  ],
};

const socialRoutes = [
  {
    id: 1,
    path: "/",
    title: "FaceBook",
    attribute: "primary",
  },
  {
    id: 1,
    path: "/",
    title: "Instagram",
    attribute: "primary",
  },
];

export {
  homeRoute, blogRoutes, webpageRoutes, socialRoutes,
};
