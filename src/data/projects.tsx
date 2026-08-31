import javascriptPortfolioImage from "../assets/projects/123.png";
import webDesignPortfolioImage from "../assets/projects/Screenshot 2025-06-16 201624.png";
import northPeakImage from "../assets/projects/Northpeak.png";
import wanderlustImage from "../assets/projects/Wanderlust.png";
import restaurantImage from "../assets/projects/Restau.png";
import cloudKitchenImage from "../assets/projects/cloud.png";
import ecommerceImage from "../assets/projects/Ecom.png";
import counterImage from "../assets/projects/counter.png";
import calculatorImage from "../assets/projects/calculator.png";
import downloadSimulatorImage from "../assets/projects/downloadsimulator.png";
import themeChangerImage from "../assets/projects/themechanger.png";
import digitalClockImage from "../assets/projects/digitalclock.png";
import expenseTrackerImage from "../assets/projects/expensetracker.png";
import quizImage from "../assets/projects/quizsite.png";
import todoImage from "../assets/projects/todo.png";
import weatherImage from "../assets/projects/weather.png";
import currencyImage from "../assets/projects/currency.png";
import locationImage from "../assets/projects/location.png";
import backgroundChangerImage from "../assets/projects/background.png";
import currencyConverterImage from "../assets/projects/currencyconverter.png";
import passwordGeneratorImage from "../assets/projects/passwordgenerator.png";
import reactTodoImage from "../assets/projects/todoreact.png";

type ProjectCategory = "Basic Web" | "JavaScript" | "Node" | "React";

interface RawProject {
  name: string;
  description: string;
  image: string;
  url: string;
  github: string;
  category: ProjectCategory;
}

export interface Project {
  id: string;
  num: string;
  shortName: string;
  title: string;
  category: ProjectCategory;
  tech: string[];
  description: string;
  image: string;
  live: string;
  github: string;
  glowColor: string;
  accentBg: string;
}

const projectData: RawProject[] = [
  {
    name: "JavaScript portfolio",
    description: "A JavaScript portfolio website showcasing my projects and skills.",
    image: javascriptPortfolioImage,
    url: "https://myjs-projects.netlify.app",
    github: "https://github.com/SwarajThakre/js-portfolio",
    category: "Basic Web",
  },
  {
    name: "Web Design Portfolio",
    description: "A portfolio website designed to showcase my web design skills and projects.",
    image: webDesignPortfolioImage,
    url: "https://swarajthakre1.netlify.app/",
    github: "https://github.com/SwarajThakre/HTML-CSS-portfolio",
    category: "Basic Web",
  },
  {
    name: "NorthPeak Digital Website",
    description:
      "A website for NorthPeak Digital, a digital marketing agency, showcasing their services and portfolio.",
    image: northPeakImage,
    url: "https://northpeakstudio.netlify.app",
    github: "https://github.com/SwarajThakre/northpeak-digital",
    category: "Basic Web",
  },
  {
    name: "Wanderlust Travel Website",
    description:
      "A travel website that provides information about popular travel destinations, travel tips, and booking options.",
    image: wanderlustImage,
    url: "https://swarajthakre.github.io/WanderLust/",
    github: "https://github.com/SwarajThakre/WanderLust",
    category: "Basic Web",
  },
  {
    name: "Restaurant Website",
    description:
      "A restaurant website that provides information about the restaurant, menu, and online ordering options.",
    image: restaurantImage,
    url: "https://swarajthakre.github.io/Restaurant_WebDesign/",
    github: "https://github.com/SwarajThakre/Restaurant_WebDesign",
    category: "Basic Web",
  },
  {
    name: "Cloud Kitchen Website",
    description:
      "A cloud kitchen website that provides information about the cloud kitchen, menu, and online ordering options.",
    image: cloudKitchenImage,
    url: "https://swarajthakre.github.io/CloudKitchenSite/",
    github: "https://github.com/SwarajThakre/CloudKitchenSite",
    category: "Basic Web",
  },
  {
    name: "E-commerce Website",
    description:
      "An e-commerce website that provides information about the products, categories, and online ordering options.",
    image: ecommerceImage,
    url: "https://wood-ecomm-site.netlify.app/",
    github: "https://github.com/SwarajThakre/Simple-Ecom-Website-Using-Html-CSS-and-Js",
    category: "Basic Web",
  },
  {
    name: "Simple Counter",
    description:
      "A simple counter application built using React.js that allows users to increment, decrement, and reset a numerical value.",
    image: counterImage,
    url: "https://swarajthakre.github.io/Simple_Counter/",
    github: "https://github.com/SwarajThakre/Simple_Counter",
    category: "JavaScript",
  },
  {
    name: "Simple Calculator",
    description:
      "A simple calculator application built using React.js that allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.",
    image: calculatorImage,
    url: "https://swarajthakre.github.io/Simple-calculator/",
    github: "https://github.com/SwarajThakre/Simple-calculator",
    category: "JavaScript",
  },
  {
    name: "Simple DownloadSimulator",
    description:
      "A simple download simulator application built using JavaScript that simulates the process of downloading a file and displays the progress of the download.",
    image: downloadSimulatorImage,
    url: "https://swarajthakre.github.io/Js_DownloadSimulator/",
    github: "https://github.com/SwarajThakre/Js_DownloadSimulator",
    category: "JavaScript",
  },
  {
    name: "Simple ThemeChanger",
    description:
      "A simple theme changer application built using JavaScript that allows users to switch between different themes for the website.",
    image: themeChangerImage,
    url: "https://swarajthakre.github.io/JS-simple-ThemeChanger/",
    github: "https://github.com/SwarajThakre/JS-simple-ThemeChanger",
    category: "JavaScript",
  },
  {
    name: "Simple Digital Clock",
    description:
      "A simple digital clock application built using JavaScript that displays the current time in a digital format.",
    image: digitalClockImage,
    url: "https://swarajthakre.github.io/Digital_Clock/",
    github: "https://github.com/SwarajThakre/Digital_Clock",
    category: "JavaScript",
  },
  {
    name: "Expense Tracker",
    description:
      "A simple expense tracker application built using JavaScript that allows users to track their expenses and manage their budget.",
    image: expenseTrackerImage,
    url: "https://aexpenses-track.netlify.app/",
    github: "https://github.com/SwarajThakre/Expense_Tracker",
    category: "JavaScript",
  },
  {
    name: "QuizSite",
    description:
      "A simple quiz application built using JavaScript that allows users to test their knowledge on various topics.",
    image: quizImage,
    url: "https://quiz-sitte.netlify.app/",
    github: "https://github.com/SwarajThakre/Quiz-web",
    category: "JavaScript",
  },
  {
    name: "Simple ToDo App",
    description:
      "A simple ToDo application built using JavaScript that allows users to add, edit, and delete tasks.",
    image: todoImage,
    url: "https://yours-todo-lists.netlify.app/",
    github: "https://github.com/SwarajThakre/To-do",
    category: "JavaScript",
  },
  {
    name: "Weather site",
    description:
      "A simple weather application built using JavaScript that allows users to check the current weather conditions for a specific location.",
    image: weatherImage,
    url: "https://weather-report-sites.netlify.app/",
    github: "https://github.com/SwarajThakre/Weather_forecast",
    category: "JavaScript",
  },
  {
    name: "Live Currency Rate and Converter",
    description:
      "A simple currency converter application built using JavaScript that allows users to convert between different currencies and check the latest exchange rates.",
    image: currencyImage,
    url: "https://globexrates.netlify.app/",
    github: "https://github.com/SwarajThakre/globexrates",
    category: "JavaScript",
  },
  {
    name: "Live Location Tracking System",
    description:
      "A live location tracking system built using Node.js and Socket.io that allows users to track the real-time location of a device on a map.",
    image: locationImage,
    url: "https://real-time-tracking-system-34ae.onrender.com/",
    github: "https://github.com/SwarajThakre/Real_time-Tracking-System",
    category: "Node",
  },
  {
    name: "Background-color-changer",
    description:
      "A simple background color changer application built using React that allows users to change the background color of a webpage by clicking a button.",
    image: backgroundChangerImage,
    url: "https://background-changer-react-kappa.vercel.app/",
    github: "https://github.com/SwarajThakre/Background-Changer-React  ",
    category: "React",
  },
  {
    name: "Currency Converter",
    description:
      "A simple currency converter application built using React that allows users to convert between different currencies and check the latest exchange rates.",
    image: currencyConverterImage,
    url: "https://currency-converter-react-mauve.vercel.app/",
    github: "https://github.com/SwarajThakre/Currency_Converter_React",
    category: "React",
  },
  {
    name: "password-generator",
    description:
      "A simple password generator application built using React that allows users to generate strong and secure passwords based on their preferences.",
    image: passwordGeneratorImage,
    url: "https://password-generator-react-pi-two.vercel.app/",
    github: "https://github.com/SwarajThakre/password_generator_react",
    category: "React",
  },
  {
    name: "Simple React ToDo App",
    description:
      "A simple ToDo application built using React that allows users to add, edit, and delete tasks.",
    image: reactTodoImage,
    url: "https://to-do-react-ufph.vercel.app/",
    github: "https://github.com/SwarajThakre/To-do_React",
    category: "React",
  },
];

const techByCategory: Record<ProjectCategory, string[]> = {
  "Basic Web": ["HTML5", "CSS3", "JavaScript"],
  JavaScript: ["JavaScript", "HTML5", "CSS3"],
  Node: ["Node.js", "Express", "Socket.io"],
  React: ["React", "JavaScript", "CSS3"],
};

const projectStyles: Pick<Project, "glowColor" | "accentBg">[] = [
  {
    glowColor: "rgba(239, 68, 68, 0.25)",
    accentBg: "from-red-600/30 via-orange-600/10 to-transparent",
  },
  {
    glowColor: "rgba(59, 130, 246, 0.25)",
    accentBg: "from-blue-600/30 via-cyan-600/10 to-transparent",
  },
  {
    glowColor: "rgba(16, 185, 129, 0.25)",
    accentBg: "from-emerald-600/30 via-teal-600/10 to-transparent",
  },
  {
    glowColor: "rgba(234, 179, 8, 0.25)",
    accentBg: "from-yellow-600/30 via-amber-600/10 to-transparent",
  },
  {
    glowColor: "rgba(236, 72, 153, 0.25)",
    accentBg: "from-pink-600/30 via-rose-600/10 to-transparent",
  },
  {
    glowColor: "rgba(99, 102, 241, 0.25)",
    accentBg: "from-indigo-600/30 via-purple-600/10 to-transparent",
  },
];

export const projects: Project[] = projectData.map((project, index) => {
  const number = String(index + 1).padStart(2, "0");
  const style = projectStyles[index % projectStyles.length];

  return {
    id: number,
    num: number,
    shortName: project.name,
    title: project.name,
    category: project.category,
    tech: techByCategory[project.category] ?? ["Web Development"],
    description: project.description,
    image: project.image,
    live: project.url,
    github: project.github,
    ...style,
  };
});
