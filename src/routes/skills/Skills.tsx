import { motion } from "framer-motion";
import { SkillsCard } from "../../components/skillsCard/SkillsCard";
import "./Skills.css";

import {
  backendData,
  frontEndData,
  programmingLanguagesData,
  toolsData,
} from "./Data";

export const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="skills-container"
    >
      <h1 className="heading">Mis Habilidades</h1>
      <div className="skills-card-container">
        <div className="programming-languages">
          <h2 className="category-heading">Lenguajes</h2>
          <div className="languages">
            {programmingLanguagesData.map((props, index) => (
              <SkillsCard {...props} index={index} key={crypto.randomUUID()} />
            ))}
          </div>
        </div>
        <div className="front-end">
          <h2 className="category-heading">Front-end</h2>
          <div className="front-end-frameworks">
            {frontEndData.map((props, index) => (
              <SkillsCard {...props} index={index} key={crypto.randomUUID()} />
            ))}
          </div>
        </div>

        <div className="back-end">
          <h2 className="category-heading">Back-end</h2>
          <div className="back-end-frameworks">
            {backendData.map((props, index) => (
              <SkillsCard {...props} index={index} key={crypto.randomUUID()} />
            ))}
          </div>
        </div>

        <div className="other-tools">
          <h2 className="category-heading">Otras herramientas</h2>
          <div className="tools">
            {toolsData.map((props, index) => (
              <SkillsCard {...props} index={index} key={crypto.randomUUID()} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
