import { SiCss3, SiFirebase, SiFramer, SiJsonwebtokens, SiMongodb, SiNextui, SiNodedotjs, SiReact, SiReactrouter, SiSwiper, SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";
import {marvelApp, menuOnline, todoapp, novaflix, petpal, futbolarena} from '../../assets/previews/'

export const projectsData = [
  {
    title: "Futbol Arena",
    description:
      "Proyecto grupal realizado para finalización de Bootcamp en stack MERN, la webapp te permite, como usuario, realizar pedidos y reservas de canchas de futbol, y como administrador, crear canchas, gestionar usuarios, gestionar reservas y gestionar los productos del marketplace.",
    icons: [
      <SiCss3 key={crypto.randomUUID()} />,
      <SiTailwindcss key={crypto.randomUUID()} />,
      <SiReact key={crypto.randomUUID()} />,
      <SiVite key={crypto.randomUUID()} />,
      <SiNodedotjs key={crypto.randomUUID()} />,
      <SiJsonwebtokens key={crypto.randomUUID()} />,
      <SiReactrouter key={crypto.randomUUID()} />,
      <SiMongodb key={crypto.randomUUID()} />,
    ],
    imagePath: futbolarena,
    repository: "https://github.com/Gadd88/futbol-arena-front",
    deploy: "https://futbol-arena.netlify.app/",
  },
  {
    title: "Petpal",
    description:
      "Proyecto resultado de una simulación laboral en No Country, donde formé parte del equipo Frontend. Desarrollamos un portal para usuarios donde pueden registrar sus mascotas y datos de contacto, dar avisos de extravíos y otros datos, y, por cada una, recibe un código QR con el enlace al perfil con estos datos, facilitando la posibilidad de compartirlo, dada la necesidad.",
    icons: [
      <SiCss3 key={crypto.randomUUID()} />,
      <SiTailwindcss key={crypto.randomUUID()} />,
      <SiReact key={crypto.randomUUID()} />,
      <SiVite key={crypto.randomUUID()} />,
      <SiNodedotjs key={crypto.randomUUID()} />,
      <SiJsonwebtokens key={crypto.randomUUID()} />,
      <SiReactrouter key={crypto.randomUUID()} />,
      <SiMongodb key={crypto.randomUUID()} />,
    ],
    imagePath: petpal,
    repository: "https://github.com/Gadd88/noCountry-PetPal",
    deploy: "https://c16-17-t-node-react.web.app/",
  },
  {
    title: "menúOnline",
    description:
      "Proyecto freelance desarrollado en reactjs utilizando la libreria NextUI para darle una mejor apariencia visual. Gracias a una libreria que funciona como parseador de datos, se puede utilizar una simple hoja de Google Sheet para agregar, modificiar o eliminar algun producto de la web y tenerla actualizada practicamente al instante.",
    icons: [
      <SiCss3 key={crypto.randomUUID()} />,
      <SiReact key={crypto.randomUUID()} />,
      <SiVite key={crypto.randomUUID()} />,
      <SiNextui key={crypto.randomUUID()} />,
      <SiTailwindcss key={crypto.randomUUID()} />,
    ],
    imagePath: menuOnline,
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
    title: "Novaflix",
    description:
      "Proyecto grupal creado como integrador para la especialización en ReactJS del programa Codo a Codo 4.0. Utilizamos la api de TheMovieDB para obtener los datos e imagenes de las peliculas, ademas de herramientas como SwiperJS para carruseles y Firebase para autenticación. \nuser: test@hotmail.com \npass: 123123",
    icons: [
      <SiReact key={crypto.randomUUID()} />,
      <SiVite key={crypto.randomUUID()} />,
      <SiCss3 key={crypto.randomUUID()} />,
      <SiFirebase key={crypto.randomUUID()} />,
      <SiSwiper key={crypto.randomUUID()} />,
    ],
    imagePath: novaflix,
    repository: "https://github.com/Gadd88/novaflix",
    deploy: "https://qa-pelis-seven.vercel.app/",
  },

];
