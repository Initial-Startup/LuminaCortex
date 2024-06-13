import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 10,
        title: "App Rewrite",
        newTab: false,
        path: "/services/appRewrite",
      },
      {
        id: 11,
        title: "Chat Bot",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 12,
        title: "Generative Ai Integration",
        newTab: false,
        path: "/auth/signup",
      },
      {
        id: 13,
        title: "AR & VR Services",
        newTab: false,
        path: "/docs",
      },
    ]
  },
  {
    id: 3,
    title: "Products",
    newTab: false,
    submenu: [
      {
        id: 20,
        title: "App Rewrite",
        newTab: false,
        path: "/blog",
      },
      {
        id: 21,
        title: "Chart Bot",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 22,
        title: "Generative Ai Integration",
        newTab: false,
        path: "/auth/signup",
      },
      {
        id: 23,
        title: "AR VR Services",
        newTab: false,
        path: "/docs",
      },
    ]
  },
  {
    id: 4,
    title: "Docs",
    newTab: false,
    path: "/docs",
  },
  {
    id: 5,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Blog Grid",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "Sign In",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "Sign Up",
        newTab: false,
        path: "/auth/signup",
      },
      {
        id: 35,
        title: "Docs",
        newTab: false,
        path: "/docs",
      },
      {
        id: 35.1,
        title: "Contact Us",
        newTab: false,
        path: "/support",
      },
      {
        id: 36,
        title: "404",
        newTab: false,
        path: "/error",
      },
    ],
  },

  {
    id: 6,
    title: "Contact Us",
    newTab: false,
    path: "/support",
  },
];

export default menuData;