import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  yourlogo1,
  yourlogo2,
  yourlogo3,
  yourlogo4
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Services",
    url: "#features",
  },
  {
    id: "1",
    title: "Why us",
    url: "#collaboration",
  },
  {
    id: "2",
    title: "Projects",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Examples",
    url: "#roadmap",
  },
  
  
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo1, yourlogo2, yourlogo3, yourlogo4];

export const brainwaveServices = [
  "Website",
  "Automation integration",
  "Brand design",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "AI secretary (fire yours)",
    text: "It's time to fire your secretary and save money because we can build an AI chat bot that can message and answer phone calls, answer questions about your buisness and automatically setup appointments.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Appointment automations",
    text: "If you're tired of managing your calendar and appointment, imagine a system that does it for you. Yes social anxiety is a thing okay ? Phone calls suck.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Mobile app development",
    text: "If you think you're the new Mark Zuckerberg or something, maybe we can work together, except... Mark knew how to code. That's fine we can do it for you and launch your new revolutionnary social media app.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Alright if you're here you probably don't know what's an API... Just remember that we can combine our services with existing applications so if you're a very picky and annoying customer... we can handle you. And unfortunately for us we have to keep our prices the same.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "In case you get tired of us, we give you the source code afterwards to fly on your own. You might need that famous energy drink... Good luck. ";

export const collabContent = [
  {
    id: "0",
    title: "Source code is yours",
    text: collabText,
  },
  {
    id: "1",
    title: "Free domain and hosting for a year",
  },
  {
    id: "2",
    title: "Saving you time and money with tailored solutions for your buisness",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Any Software development",
    text: "From mobile applications to websites, we do it all for your buisness. 100% tailored. Hum, just note that we don't publish on the darkweb... We're not that crazy.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "AI implementations",
    text: "Have any crazy futuristic projects including AI to your app or website ? You would be surprised with what we can do.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Automations",
    text: "Let us advise you on how you could automate daily tasks in your buisness as simple as taking appointments to save time and focus on what you do best: your buisness. (hopefully). We all have a lazy side.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "3",
    title: "Financing your projects",
    text: "If you're broke but have big dreams, don't worry about the upfront cost for big projects. We can finance on up to 12 month with a 1.5 % fee on your project. No interest.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  
  
  {
    id: "4",
    title: "Competitive Pricing",
    text: "You found our service cheaper somewhere else ? With the same work quality ??? That's surprising... But hey, don't worry we price match. By the way, where did you find that price? We need to shut them down, shhh...",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Best communication",
    text: "Since we're local (Gatineau,Ottawa,Quebec,Ontario,Canada) , we are easily accessible and communication is fast during the whole project. We can even be friends, some of us are very lonely. ",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  
];

export const socials = [
  
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/barasoftware/?igsh=MWNjZzR4aXZyZjJwNA%3D%3D&utm_source=qr",
  },
  
  
];
