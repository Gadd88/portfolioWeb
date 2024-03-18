import { motion } from "framer-motion";
import React from "react";
import "./AboutMeContainer.css";
import { Button } from "../button/Button";
import { HiOutlineDocumentText } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import CVDev from '../../assets/curriculum/CV-MatiasSaade.pdf'

type AboutMeProps = {
  body: React.ReactNode;
  profilePicture: React.ReactNode;
};

export const AboutMeContainer = ({ body, profilePicture }: AboutMeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="aboutme-container"
    >
      {body}
      <div className="profile-buttons-container">
        {profilePicture}
        <div className="buttons-container">
          <Button
            content="Curriculum"
            direction={CVDev}
            icon={<HiOutlineDocumentText />}
            document={true}
          ></Button>
          <Button
            content="Contáctame"
            direction="mailto:matiassaade@duck.com"
            icon={<AiOutlineMail />}
            document={false}
          ></Button>
        </div>

      </div>
    </motion.div>
  );
};
