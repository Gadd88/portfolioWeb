import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import CvEn from "../../assets/curriculum/CVFrontEN.pdf";
import { Button } from "../../components/button/Button";
import "./AboutMe.css";

export const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "backInOut" }}
      className="about-me"
    >
      <h1 className="heading">Matias</h1>
      <h2 className="subheading">Desarrollador Web</h2>
      {/* <div className="buttons-container">
        <Button
          content="Curriculum"
          direction={CvEn}
          icon={<HiOutlineDocumentText />}
          document={true}
        ></Button>
        <Button
          content="Contáctame"
          direction="mailto:matiassaade@duck.com"
          icon={<AiOutlineMail />}
          document={false}
        ></Button>
      </div> */}
      <main className="aboutme-body">
        <p>
          ¡Hola! Soy un desarrollador web especializado en la creación de experiencias digitales cautivadoras. Me enfoque en el diseño y desarrollo frontend.
          {/* Hello and welcome! I’m a passionate web developer with a strong focus on frontend design! Always trying to  
          craft visually delightful and easy-to-use interfaces. */}
        </p>
        <p>
          A lo largo de mi trayectoria, he participado en diversos proyectos que van desde prácticas hasta cursos especializados, donde cada línea de código cuenta una historia única de innovación y dedicación. Mi objetivo es proporcionar soluciones digitales efectivas que no solo cumplan con los requisitos, sino que también superen las expectativas.
          {/* Throughout my journey, I've been involved in various projects ranging from practices to specialized courses, where each line of code tells a unique story of innovation and dedication. My goal is to deliver effective digital solutions that not only meet requirements but also exceed expectations. */}
        </p>
        <p>
          Te invito a explorar mi portfolio, cada proyecto desarrollado representa un paso más en mi constante búsqueda de nuevo desafios y experiencia!
{/*           Take a look around, explore my projects, each one represent a step forward in my constant persuit of new challenges! */}
        </p>
      </main>
    </motion.div>
  );
};
