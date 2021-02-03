const homeRoute = { id: 0, path: "/", name: "Home", attribute: "primary" };
const future__TEM = [
  
];


const webpageRoutes = [
  {
    id: 1,
    path: "/services",
    name: "Services",
    attribute: "primary",
  },
  {
    id: 2,
    path: "/about",
    name: "About",
    attribute: "primary",
    subRoutes: "blogRoutes",
  },
  { id: 3, path: "/shop", name: "Shop", attribute: "primary" },
  { id: 4, path: "/opportunity", name: "Opportunity", attribute: "primary" },

  {
    id: 5,
    path: "/blog",
    name: "Blog",
    attribute: "primary",
    subRoutes: "blogRoutes",
  },
  { id: 6, path: "/contact", name: "contact", attribute: "primary" },
];

const blogRoutes = [
  {
    id: 1,
    image: "https://source.unsplash.com/collection/225/300x500",
    path: "/blog",
    tag: "clean_beauty",
    title: "Clean Beauty",
    attribute: "blogFilter",
  },
  {
    id: 2,
    image: "https://source.unsplash.com/collection/226/300x500",
    path: "/blog",
    tag: "lifestyle",
    title: "Lifestyle",
    attribute: "blogFilter",
  },
  {
    id: 3,
    image: "https://source.unsplash.com/collection/227/300x500",
    path: "/blog",
    tag: "recipes",
    title: "Recipes",
    attribute: "blogFilter",
  },
  {
    id: 4,
    image: "https://source.unsplash.com/collection/228/300x500",
    path: "/blog",
    tag: "safe_products",
    title: "Safe Products",
    attribute: "blogFilter",
  },
];

const socialRoutes = [
  { id: 1, path: "/", name: "FaceBook", attribute: "primary" },
  { id: 1, path: "/", name: "Instagram", attribute: "primary" },
];


export {homeRoute, blogRoutes, webpageRoutes };

