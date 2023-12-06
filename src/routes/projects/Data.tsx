import { SiCss3, SiFramer, SiGooglechrome, SiHtml5, SiJavascript, SiNextui, SiReact, SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";
import marvelApp from "../../assets/previews/marvelApp.webp";
import menuNextPreview from "../../assets/previews/menuNextPreview.webp";
import todoapp from "../../assets/previews/todoapp.png";
import PortfolioPrwview from "../../assets/previews/PortfolioPreview.png";
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
    title: "todoTS",
    description:
      "Un simple ToDoList hecho para practicar Typescript, podes agregar tareas, marcarlas como realizadas o eliminarlas. Cuenta con una opcion de filtrada para la visualizacion.",
    icons: [
      <SiCss3 key={crypto.randomUUID()} />,
      <SiReact key={crypto.randomUUID()} />,
      <SiVite key={crypto.randomUUID()} />,
      <SiTypescript key={crypto.randomUUID()} />,
    ],
    imagePath: todoapp,
    repository: "https://github.com/Gadd88/todo-type",
    deploy: "https://nova-todo-ts.netlify.app/",
  },
  {
    title: "",
    description:
      "",
    icons: [
      <SiHtml5 key={crypto.randomUUID()} />,
      <SiCss3 key={crypto.randomUUID()} />,
      <SiJavascript key={crypto.randomUUID()} />,
    ],
    imagePath: '',
    repository: "https://github.com/Gadd88/SpookyShop-Ecommerce",
    deploy: "https://spookyshop.vercel.app/",
  },

  {
    title: "",
    description:
      "",
    icons: [
      <SiCss3 key={crypto.randomUUID()} />,
      <SiTypescript key={crypto.randomUUID()} />,
      <SiReact key={crypto.randomUUID()} />,
      <SiVite key={crypto.randomUUID()} />,
      <SiFramer key={crypto.randomUUID()} />,
    ],
    imagePath: '',
    repository: "https://github.com/Gadd88/MyPortfolio",
    deploy: "https://Gadd88.vercel.app/",
  },
];
