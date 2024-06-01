import {
  FaCss3,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaJsSquare,
  FaLinkedin,
  FaReact,
  FaNpm,
  FaFigma,
  FaMobile,
  FaWordpress,
} from "react-icons/fa";
import { BiLogoRedux, BiLogoGit , 
  BiLogoJquery, BiLogoBootstrap, 
  BiLogoSass , BiLogoTypescript } from "react-icons/bi";
import { GoCommandPalette } from "react-icons/go";
import { TbMobiledata } from "react-icons/tb";
import noko from './assets/noko.png';
import youtube from './assets/youtube.jpeg';
import ecommerce from './assets/ecommerce.jpeg';
import native from './assets/native-ecommerce.jpeg';
import reactBlog from './assets/reactBlog.jpeg';
import foodies from './assets/foodies.jpeg';
import reduxBlog from './assets/reduxBlog.jpeg';
import mommyverce from './assets/mommyverce.jpeg';
import gemapp from './assets/gemapp.jpeg';
import landingpage from './assets/landing.png';
import agency from './assets/agency.jpeg';
import portfolio from './assets/portfolio.jpeg';

export const navPages = [
  { id: 1, name: "Home", link: "#" },
  { id: 2, name: "Skills", link: "#skills" },
  // { id: 4, name: "Certificates", link: "/certificates" },
  { id: 5, name: "About me", link: "#about_me" },
  { id: 3, name: "Projects", link: "#projects" },
  { id: 6, name: "Contact", link: "#contact" },
];

export const social = [
  {
    id: 2,
    icon: <FaGithub />,
    link: "https://github.com/hagerElroby",
  },
  { id: 3, icon: <FaLinkedin />, link: "http://linkedin.com/in/hager-ahmed-91a8ab194" },
  { id: 1, icon: <FaInstagram />, link: "" }
];

export const skills = [
  { id: 1, icon: <FaHtml5 />, text: "HTML5" },
  { id: 2, icon: <FaCss3 />, text: "CSS3" },
  { id: 3, icon: <FaJsSquare />, text: "JavaScript (ES6)" },
  { id: 4, icon: <BiLogoJquery />, text: "jQuery" },
  { id: 5, icon: <FaReact />, text: "React.js" },
  { id: 6, icon: <BiLogoRedux />, text: "Redux Toolkit" },
  { id: 7, icon: <BiLogoBootstrap />, text: "Bootstrap" },
  { id: 8, icon: <BiLogoSass />, text: "Sass" },
  { id: 9, icon: <BiLogoGit />, text: "Git" },
  { id: 10, icon: <FaGithub />, text: "Github" },
  { id: 11, icon: <TbMobiledata />, text: "RESTful API's" },
  { id: 12, icon: <BiLogoTypescript />, text: "Typescript" },
  { id: 13, icon: <FaMobile />, text: "Responsive Designs" },
  { id: 14, icon: <FaNpm />, text: "Package managers" },
];
export const projects=[
  {
    id:1 ,
    img: noko ,
    title:"Social App" ,
    liveDemo:"https://hagerelroby.github.io/nokoSocial/" ,
    repoUrl:"https://github.com/hagerElroby/nokoSocial" ,
    description:"Responsive social media design by html , css and js"
  } ,
  {
    id:2 ,
    img: youtube ,
    title:"Youtube clone" ,
    liveDemo:"https://clone-yout.web.app/" ,
    repoUrl:"https://github.com/hagerElroby/Youtube_Clone" ,
    description:"Youtube clone by using youtube-api , React , SASS , redux-thunk, react-bootstrap , axios and Firebase (Authentication, Firestore)"
  } ,
  {
    id:3 ,
    img: ecommerce ,
    title:"Mern e-commerce" ,
    liveDemo:"https://mern-ecommerce-2y8w.onrender.com/" ,
    repoUrl:"https://github.com/hagerElroby/mern-ecommerce" ,
    description:"A Mern Stack online shopping platform by using React, styled-components, Redux-toolkit, Redux Persist, MUI-icons, Axios, restApi, nodejs, express and mongoDB"
  } ,
  {
    id:4 ,
    img: native ,
    title:"Native e-commerce" ,
    liveDemo:"https://hagerelroby.github.io/Native_ECommerce_js/" ,
    repoUrl:"https://github.com/hagerElroby/Native_ECommerce_js" ,
    description:"E-commerce by html, css , JavaScript and local storage"
  },
  {
    id:5 ,
    img: reactBlog ,
    title:"React Blog" ,
    liveDemo:"https://reactjs-blog-n0sc.onrender.com/" ,
    repoUrl:"https://github.com/hagerElroby/Reactjs-blog" ,
    description:"It is blog by react , react-hooks , axios"
  },
  {
    id:6 ,
    img: foodies ,
    title:"Foodies website" ,
    liveDemo:"https://hagerelroby.github.io/Foodies-website/" ,
    repoUrl:"https://github.com/hagerElroby/Foodies-website" ,
    description:"Foodies website by using bootstrap5"
  },
  {
    id:7 ,
    img: reduxBlog ,
    title:"Redux Blog" ,
    liveDemo:"https://redux-blog-ecru.vercel.app/" ,
    repoUrl:"https://github.com/hagerElroby/Redux-blog" ,
    description:"Blog System by react , redux-thunk and axios"
  },
  {
    id:8 ,
    img: mommyverce ,
    title:"MommyVerce" ,
    liveDemo:"https://mommyverce.vercel.app/" ,
    repoUrl:"https://github.com/Ahmed-fayek/New-Mommy-deployed" ,
    description:"Mommy web app to help mothers , it is mern stack app by using react , typescript , nodejs , axios to fetch data from backend server"
  },
  {
    id:9 ,
    img: gemapp ,
    title:"Gym web site" ,
    liveDemo:"https://react18-gym-responsive-app.vercel.app/" ,
    repoUrl:"https://github.com/hagerElroby/responsive-react18-gym-app" ,
    description:"Gym app by react18 and react-router-dom"
  },
  {
    id:10 ,
    img: landingpage ,
    title:"Simple Landing page" ,
    liveDemo:"https://hagerelroby.github.io/landing-page/" ,
    repoUrl:"https://github.com/hagerElroby/landing-page",
    description:"Design for landing page by Bootstrap and jQuery",
  },
  {
    id:11 ,
    img: agency ,
    title:"Agency website" ,
    liveDemo:"https://hagerelroby.github.io/Agency_Template-/" ,
    repoUrl:"https://github.com/hagerElroby/Agency_Template-" ,
    description:"Template with nice theme by html and css"
  },
  {
    id:12 ,
    img: portfolio ,
    title:"My Portfolio" ,
    liveDemo:"https://hager-elroby-portfolio.vercel.app/" ,
    repoUrl:"https://github.com/hagerElroby/hagerElroby-portfolio" ,
    description:"My old portfolio by using reactjs"
  },
]
