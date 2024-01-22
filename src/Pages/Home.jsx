import { useTypewriter, Cursor } from "react-simple-typewriter";
import HomeSocial from "../Component/HomeSocial";
import MobileHomeSocial from "../Component/MobileHomeSocial";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1700167698291.json"

const Home = () => {
  const homeTitle = useTypewriter({
    words: ["Developer", "Designer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 80,
  });
  const welcomeTitle = {
    hidden: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className=" overflow-x-hidden">
      <HomeSocial />
      <section
        className="page-container container d-grid place-items-center"
        id="home"
      >
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6">
            <div className="welcome">
              <motion.h6
                variants={welcomeTitle}
                initial={"hidden"}
                whileInView={"visible"}
                exit={{ x: "-100%", opacity: 0 }}
              >{`Hi There, it's`}</motion.h6>
              <motion.h1
                variants={welcomeTitle}
                initial={"hidden"}
                whileInView={"visible"}
                transition={{ delay: 0.1 }}
                exit={{ x: "-100%", opacity: 0 }}
                className="homeName mb-2"
              >{`Hager Ahmed`}</motion.h1>
              <motion.h3
                variants={welcomeTitle}
                initial={"hidden"}
                whileInView={"visible"}
                transition={{ delay: 0.2 }}
                exit={{ x: "-100%", opacity: 0 }}
              >
                {`I'm a Front-End ${homeTitle[0]}`}
                <Cursor cursorStyle="|" />
              </motion.h3>
              {[
                "I Build & Design Web Interfaces", 
                "like and enjoy bringing ideas to life in the browser"
              ].map((text, index) => (
                <motion.p
                  key={index}
                  variants={welcomeTitle}
                  initial={"hidden"}
                  whileInView={"visible"}
                  transition={{ delay: 0.25 + index * 0.05 }}
                  exit={{ x: "-100%", opacity: 0 }}
                >
                  {text}
                </motion.p>
              ))}
              <MobileHomeSocial />
              <div className="d-flex gap-3 mt-4 btn-container justify-content-lg-start justify-content-center align-items-center">
                <motion.a
                  variants={welcomeTitle}
                  initial={"hidden"}
                  whileInView={"visible"}
                  transition={{ delay: 0.38 }}
                  exit={{ x: "-100%", opacity: 0 }}
                  href="https://drive.google.com/uc?export=download&id=1Ckas3t0Vff0Tzr6CrTdNb-AAaP9lL5vT"
                >
                  <button className="button rounded" type="button">
                    <span className="button__text">Download CV</span>
                    <span className="button__icon">
                      <FaDownload className="text-light" />
                    </span>
                  </button>
                </motion.a>
                {[
                  {
                    text: "Contact me",
                    link: "#contact",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={welcomeTitle}
                    initial={"hidden"}
                    whileInView={"visible"}
                    transition={{ delay: 0.35 + index * 0.03 }}
                    exit={{ x: "-100%", opacity: 0 }}
                  >
                    <a href={item.link}>
                      <button type="button" className="btn">
                        {item.text}
                      </button>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 second-col">
            <motion.div
              initial={{ x: "130%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "130%", opacity: 0 }}
              className="mt-5"
            >
              <Lottie animationData={animationData} />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
