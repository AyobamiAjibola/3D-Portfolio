import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  carrent,
  jobit,
  tripguide,
  threejs,
  jiffix,
  amobi,
  zues,
  tiklog,
  rabbit,
  psql,
  mui,
  redis,
  zues_project,
  tiklog_project,
  jiffix_customer,
  jiffix_workshop,
  esun,
  kweekbuy
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  // {
  //   name: "git",
  //   icon: git,
  // },
  {
    name: "RabbitMQ",
    icon: rabbit,
  },
  {
    name: "PostgreSQL",
    icon: psql,
  },
  {
    name: "Material UI",
    icon: mui,
  },
  {
    name: "Redis",
    icon: redis,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Zues",
    icon: zues,
    iconBg: "#012D01",
    date: "July 2023 - September 2023",
    points: [
      `Created a strong data scraping algorithm to extract user shopping preferences from Jiji and Jumia. 
      Integrated this data into the Zeus app, offering insights into popular products. Vendors can use this 
      info to optimize stock and boost customer satisfaction, driving business growth.`,
      `Efficiently configured and managed AWS instance for optimal application performance. Tuned settings, 
      established monitoring, security measures, and tailored instance for project's needs. Resulted in reliable 
      uptime, scalability, and user satisfaction.`,
      `Developed admin and vendor portals with user-friendly interfaces, offering seamless access to essential 
      features for management and interaction. Admin portal handled user management, data analysis, and content 
      moderation. Vendor portal handled niche selection, availability checker and time chats and time windows feature, 
      boosting efficiency and user satisfaction.`,
      `Developed and integrated a subscription-based system, offering users customized plans through user-friendly 
      interfaces. Managed payments, and plan selection, leading to increased engagement and revenue. This sustainable 
      model ensured the app's lasting success.`
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Tik Logistics",
    icon: tiklog,
    iconBg: "#383E56",
    date: "June 2023 - August 2023",
    points: [
      `Designed and implemented APIs for riders and customers, enabling location-based searches for nearby riders. 
      Utilized RabbitMQ message broker to facilitate real-time notifications to customers. This system streamlined 
      rider-customer interactions and enhanced user experience through efficient communication.`,
      `Successfully configured and deployed the backend code on Hostinger's cloud platform, ensuring reliable and 
      efficient handling of the application's backend operations. This setup allowed for seamless performance, 
      scalability, and accessibility of the backend services`,
      `Designed and implemented payment gateway APIs that enable customers to conveniently make payments for 
      services rendered. Additionally, I developed a sophisticated algorithm that ensures timely and accurate 
      payments to riders, optimizing the overall payment process and enhancing user satisfaction.`,
      `Developed APIs to support role-based system, granting administrators the ability to seamlessly create users, 
      assign roles, and manage permissions. This functionality enhances user management and security, facilitating 
      efficient administration of the application.`
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Jiffix Technologies",
    icon: jiffix,
    iconBg: "#383E56",
    date: "January 2023 - June 2023",
    points: [
      `Integrated expense management APIs, this empowers workshops to handle expenses seamlessly. 
      Enhanced bookkeeping and tracking, leading to a 30% profit boost.`,
      `Seamlessly integrated existing APIs into the customer app, this enabled users to effortlessly view estimates, invoices,
      and make payments on the go. This improved the user engagement by 25%.`,
      `I revamped the super admin dashboard to manage analytics by incorporating charts and boxes, and created an API
      that enables data filtering based on date ranges. This modification resulted in a 40% improvement in data analysis for the super admin.`,
      `I reconfigured a new block of code in the AWS Nginx to handle incoming requests from a new IP. Furthermore, 
      I made updates in Route 53 to enable access for the new IP. Additionally, I successfully configured 
      Certbot on the AWS instance to provide SSL security within the AWS environment.`
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "A'Mobi LTD",
    icon: amobi,
    iconBg: "#E6DEDD",
    date: "May 2021 - Jan 2023",
    points: [
      `Developed effective APIs using RESTful concepts resulted in improved communication and data transfer 
      leading to seamless integration and enhanced functionality.`,
      `Built features and applications with a mobile responsive design, resulting in an optimal user experience 
      on various devices and improved accessibility for users by 30%.`,
      `Optimize application performance by identifying and addressing bottlenecks and improving scalability, 
      resulting in faster load times, smoother user experiences, and the ability to handle more users and data.`,
      `Set up and launched AWS web servers, like Amazon EC2 instances, for scalable web app hosting. Boosted app 
      availability, performance, and cost-efficiency for the organization.`
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ZUES",
    description:
      `A one-of-a-kind web application seeking to create a sync between the rudiments and 
      necessities of business growth using the tools provided within this application such 
      as Data analysis, right pricing, and optimal regions for growth in sales and profitability 
      thereby leading to the creation of leading brands working in their full potential with ease. `,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "mui",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "redis",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      }
    ],
    image: zues_project,
    source_code_link: "https://github.com/Zues-WebApp/zues-app",
    web_link: ""
  },
  {
    name: "TikLog",
    description:
      `Introducing TikLog, an innovative logistics app that seamlessly connects customers, 
      riders, and recipients. By streamlining deliveries, TikLog offers a wide range of services, 
      from transporting heavy items to handling perishables. The app’s efficient ecosystem enables 
      customers to effortlessly request and monitor deliveries, allows riders to efficiently manage 
      assignments, and ensures recipients receive packages seamlessly. With a fleet comprising 
      bikes, cars, and buses, TikLog accommodates cargo of all sizes while upholding sustainability. 
      Reliable delivery practices redefine logistics, guaranteeing swift and secure journeys. `,
    tags: [
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "redis",
        color: "blue-text-gradient",
      },
      {
        name: "rabbitMQ",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "hostinger",
        color: "green-text-gradient",
      }
    ],
    image: tiklog_project,
    source_code_link: "https://github.com/Tiklog-App/Tiklog",
    web_link: ""
  },
  {
    name: "Jiffix AutoHyve Customer App",
    description:
      `This project enables users to conveniently access a comprehensive breakdown of 
      parts scheduled for replacement or repair, complete with cost estimates. This 
      information will be accessible without requiring the download of the Jiffix AutoHyve 
      mobile app. Users can opt to pay a deposit based on provided estimates from the workshop, 
      with the flexibility to finalize payments upon job completion. Additionally, users will 
      have the capability to view vehicles registered under their accounts.`,
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "mui",
        color: "blue-text-gradient",
      },
      {
        name: "contextApi",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
      {
        name: "sequelize",
        color: "blue-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      },
      {
        name: "redis",
        color: "pink-text-gradient"
      }
    ],
    image: jiffix_customer,
    source_code_link: "https://github.com/Hyvetech-Limited/AutoHyve-web-app",
    web_link: "https://app.myautohyve.com/"
  },
  {
    name: "Jiffix Autohyve Workshop App",
    description:
      `Introducing Jiffix Workshop Management System, tailored for Jiffix partners: a robust 
      tool that transforms estimate generation, invoice creation, workshop stock management, 
      vehicle repair reminders, and expense tracking. Designed for dynamic needs, it empowers 
      with analytics for informed decisions. Seamlessly navigate and enhance productivity with 
      its user-friendly interface and advanced features. This innovative solution sets new 
      benchmarks for workshop management, significantly boosting operational efficiency.`,
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "reactjs",
          color: "green-text-gradient",
        },
        {
          name: "redux",
          color: "pink-text-gradient",
        },
        {
          name: "mui",
          color: "blue-text-gradient",
        },
        {
          name: "contextApi",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
        {
          name: "restapi",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "postgresql",
          color: "pink-text-gradient",
        },
        {
          name: "sequelize",
          color: "blue-text-gradient",
        },
        {
          name: "aws",
          color: "green-text-gradient",
        },
        {
          name: "redis",
          color: "pink-text-gradient"
        }
      ],
    image: jiffix_workshop,
    source_code_link: "https://github.com/Hyvetech-Limited/AutoHyve-pdms-gateway",
    web_link: "https://pdms.jiffixtech.com/"
  },
  {
    name: "Esun Ekiti",
    description:
      `Discover the Esun Ekiti Community Enhancement Project—an immersive journey into the heart 
      of the town's history and culture. This initiative connects residents with community 
      development initiatives and keeps them informed about Esun Ekiti's vibrant activities. 
      This web app facilitates engagement, cultural exchange, and up-to-date information, 
      uniting the town's spirit. Join us in celebrating heritage, driving growth, and fostering 
      connections in Esun Ekiti.`,
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "blue-text-gradient",
      },
      {
        name: "contextApi",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
      {
        name: "sequelize",
        color: "blue-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      }
    ],
    image: esun,
    source_code_link: "https://github.com/AyobamiAjibola/esun-ekiti",
    web_link: "https://esunekiti.ng/"
  },
  {
    name: 'KweekBuy',
    description:
      `This project addresses the ongoing demand for seamless connections between vendors and 
      customers seeking goods and services. Buyers seek convenient access to vendors, while 
      vendors strive to expand their reach. To bridge this gap, we propose a platform that 
      enhances both sides. Buyers can easily find and engage vendors for their needs, 
      eliminating the hassle of distant deliveries. Simultaneously, vendors can tap into a 
      broader clientele, resulting in a win-win scenario for all parties involved.`,
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: kweekbuy,
    source_code_link: "",
    web_link: "https://www.kweekbuy.com"
  }
];

export { services, technologies, experiences, testimonials, projects };
