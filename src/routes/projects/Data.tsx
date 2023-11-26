import { SiCss3, SiFramer, SiGooglechrome, SiHtml5, SiJavascript, SiNextui, SiReact, SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";
import marvelApp from "../../assets/previews/marvelApp.webp";
import menuNextPreview from "../../assets/previews/menuNextPreview.webp";
import PortfolioPrwview from "../../assets/previews/PortfolioPreview.png";
import RetroToDoPreview from "../../assets/previews/RetroToDo.png";
import SpookyShopPreview from "../../assets/previews/SpookyShop.png";

export const projectsData = [
  {
    title: "Tu Menú Web",
    description:
      "Proyecto freelance desarrollado en reactjs utilizando la libreria NextUI para darle una mejor apariencia visual. Gracias a una libreria que funciona como parseador de datos, se puede utilizar una simple hoja de Google Sheet para agregar, modificiar o eliminar algun producto de la web y tenerla actualizada practicamente al instante.",
    icons: [
      <SiCss3 key={crypto.randomUUID()} />,
      <SiReact key={crypto.randomUUID()} />,
      <SiVite key={crypto.randomUUID()} />,
      <SiNextui key={crypto.randomUUID()} />,
      <SiTailwindcss key={crypto.randomUUID()} />,
    ],
    imagePath: menuNextPreview,
    repository: "https://github.com/Gadd88/menuOnline",
    deploy: "https://tunegocionext.netlify.app/",
  },
  {
    title: "MarvelApp",
    description:
      "Proyecto final del bootcamp frontend de Leniolabs. Webapp que se conecta a la api de Marvel para obtener informacion sobre el personaje buscado, cuenta con una funcion de favoritos para ir guardando personajes. Creada con reactJs",
    icons: [
      <SiCss3 key={crypto.randomUUID()} />,
      <SiReact key={crypto.randomUUID()} />,
      <SiVite key={crypto.randomUUID()} />,
      <SiFramer key={crypto.randomUUID()} />,
    ],
    imagePath: marvelApp,
    repository: "https://github.com/Gadd88/lenios-bootcamp/tree/master/practicas/marvel-app",
    deploy:
      "https://marvel-app-lenios.netlify.app/",
  },
  {
    title: "Retro to-do",
    description:
      "A retro-themed React to-do app. A fun and functional way to manage your tasks, you can add, delete and mark tasks as completed. The app features a sleek and nostalgic design, making it a pleasure to use. ",
    icons: [
      <SiCss3 key={crypto.randomUUID()} />,
      <SiReact key={crypto.randomUUID()} />,
      <SiVite key={crypto.randomUUID()} />,
      <SiFramer key={crypto.randomUUID()} />,
    ],
    imagePath: RetroToDoPreview,
    repository: "https://github.com/Gadd88/React-Retro-To-Do-App",
    deploy: "https://retrotodoapp.vercel.app/",
  },
  {
    title: "SpookyShop",
    description:
      "A pure CSS/JavaScript ecommerce, halloween themed. It utilizes JavaScript for its dynamic features such as register, login, adding a product to a cart among others. The platform is designed to be user-friendly and easy to navigate, with a clean and modern aesthetic.",
    icons: [
      <SiHtml5 key={crypto.randomUUID()} />,
      <SiCss3 key={crypto.randomUUID()} />,
      <SiJavascript key={crypto.randomUUID()} />,
    ],
    imagePath: SpookyShopPreview,
    repository: "https://github.com/Gadd88/SpookyShop-Ecommerce",
    deploy: "https://spookyshop.vercel.app/",
  },

  {
    title: "Portfolio",
    description:
      "Built with React, Vite and TypeScript, this portfolio showcases my skills and projects as a front-end developer. I've also used React Router V6 to make it a SPA and framer motion for its animations.",
    icons: [
      <SiCss3 key={crypto.randomUUID()} />,
      <SiTypescript key={crypto.randomUUID()} />,
      <SiReact key={crypto.randomUUID()} />,
      <SiVite key={crypto.randomUUID()} />,
      <SiFramer key={crypto.randomUUID()} />,
    ],
    imagePath: PortfolioPrwview,
    repository: "https://github.com/Gadd88/MyPortfolio",
    deploy: "https://Gadd88.vercel.app/",
  },
];
