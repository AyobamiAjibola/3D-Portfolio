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
  hyvepay,
  kweekbuy,
  hyve_pay,
  Lynk,
  lynkBg,
  new_autohyve,
  sparkle,
  sparkleBg,
  docker,
  expo,
  nextjs,
  firebase,
  storybook
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
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Expo",
    icon: expo,
  },
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
  {
    name: "NextJS",
    icon: nextjs,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Storybook",
    icon: storybook,
  },
];

const experiences = [
  {
    title: "Sparkle Landing Page",
    company_name: "Sparkle Technologies",
    icon: sparkle,
    iconBg: "#383E56",
    date: "January 2024 - January 2024",
    points: [
      `I integrated Firebase Firestore to manage and store the list of users on the waitlist.`,
      `The website was developed using Next.js as the development framework.`
      
    ],
  },
  {
    title: "Mobile Developer",
    company_name: "Lynk",
    icon: Lynk,
    iconBg: "#4A1316",
    date: "October 2023 - December 2023",
    points: [
      `I Implemented a matching algorithm to send profiles to users based on their preferences.`,
      `I engineered a robust chat system that seamlessly incorporates Socket.IO and RabbitMQ, enabling 
        matched users to engage in effective communication through the implemented chat functionality.`,
      `I utilized RabbitMQ to set up a notification system that triggers instant notifications when a 
      user likes another user's profile. This seamless communication ensures that the liked user receives 
      immediate notifications about the interaction.`,
      `I designed a biometric algorithm that facilitates user login to the application through the 
        utilization of either fingerprint or facial recognition data registered on their mobile device.`,
      `I've implemented a role-based system in the backend, enabling a super admin to create additional 
        users and subsequently assign specific roles and permissions to them.`,
      `I developed a mobile app using React Native, with a focus on seamlessly 
        integrating backend APIs to ensure a smooth and positive user experience.`,
      `Additionally, I build an admin dashboard that empowers administrators 
        to oversee all user activities and execute various administrative privileges.`,
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Hyvetech Limited - Autohyve",
    icon: jiffix,
    iconBg: "#383E56",
    date: "October 2023 - October 2023",
    points: [
      `As the individual responsible for migrating Autohyve's infrastructure and codebase to a new AWS account, 
      I orchestrated the creation and configuration of the account, ensured a seamless transfer of 
      existing infrastructure components, implemented security measures, established network 
      configurations, managed the migration of databases with data integrity in mind, successfully 
      moved the Autohyve codebase while addressing dependencies and configurations, and conducted 
      comprehensive testing to validate the application's seamless functionality in the new AWS 
      environment, resolving any issues that arose during the testing phase.`,
      `As part of the comprehensive migration process, I seamless integration the 
      frontend codebase into the newly designed user interface (UI). This involved carefully 
      aligning and adapting the existing frontend code to match the specifications and aesthetics 
      of the updated UI design. Throughout this migration, emphasis was placed on preserving the 
      functionality and user experience while incorporating the visual elements and layout defined 
      in the UI design. Regular collaboration with UI designers ensured a harmonious fusion of 
      code and design, resulting in a polished and cohesive frontend that aligned precisely with 
      the envisioned user interface.`,
      `The updated design introduces individual user sign-up, extending Autohyve's accessibility to 
      non-workshop owners. With integrated HyvePay, users can seamlessly conduct transactions 
      without navigating to a separate platform. Both users and workshops can utilize the VIN 
      checker functionality to easily retrieve vehicle details, enhancing the overall user 
      experience.`
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Hyvetech Limited - HyvePay",
    icon: hyvepay,
    iconBg: "#383E56",
    date: "August 2023 - October 2023",
    points: [
      `I developed and implemented a secure and scalable API for bulk transactions from a partner virtual 
        account to multiple accounts, this enhanced transaction efficiency within the application.`,
      `Designed and seamlessly integrated the user-friendly front-end interface, enabling users to 
        initiate and manage multiple transactions effortlessly through the API, resulting in a streamlined 
        and efficient transaction experience within the application.`,
      `Developed a versatile API empowering the super admin to efficiently disable and enable user bank 
        accounts, while also taking charge of designing and implementing the user-friendly UI for seamless 
        management of these actions within the application.`,
      `Implemented comprehensive functionality within the admin user dashboard, enabling the efficient 
        retrieval and tracking of all virtual accounts, their transactions, and complete transaction logs, 
        facilitating seamless monitoring and management of virtual accounts`
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Zues",
    icon: zues,
    iconBg: "#012D01",
    date: "July 2023 - In progress",
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
    date: "June 2023 - September 2023",
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
      efficient administration of the application.`,
      `I leveraged RabbitMQ to establish a notification system facilitating real-time communication between riders 
      and customers throughout the package delivery process. When a customer initiates a request for a rider, the 
      rider receives instantaneous notifications, enabling them to respond promptly. This bidirectional communication 
      continues until the package is successfully delivered to its destination.`,
      `I engineered a robust chat system that seamlessly incorporates Socket.IO and RabbitMQ, enabling 
        matched customers and riders to engage in effective communication through the implemented chat functionality.`,
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Hyvetech Limited - Autohyve",
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
    name: "Sparkles Landing Page",
    description:
      `
      This landing page is designed for Sparkles, a platform focused on gathering information from users interested 
      in joining their waitlist. Sparkles is a lifestyle product that bridges the gap between users and top-rated
      businesses as well as skilled independent professionals. It offers a diverse range of services spanning lifestyle, 
      beauty, wellness, and home care sectors.`,
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "nextjs",
          color: "pink-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        }
      ],
    image: sparkleBg,
    source_code_link: "https://github.com/AyobamiAjibola/sparkles_landing_page.git",
    web_link: "https://www.sparkle.com.co/",
    mobile_link: ""
  },
  {
    name: "Lynk",
    description:
      `Lynk is a mobile application that allows users to match with potential partners based on 
        preferences and mutual likes. Features include sending and receiving like requests, 
        mutual like confirmation, and chat functionality. Users can control profile visibility 
        and subscribe to different categories (Black, Red, Purple) with varying privileges. 
        The subscription model includes free and paid tiers, each with specific messaging and 
        calling capabilities. Profile verification is implemented, requiring job details, 
        profile media, and video verification. The application also enforces specific profile 
        requirements and initial pending status for all users.`,
      tags: [
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "react-native",
          color: "pink-text-gradient",
        },
        {
          name: "rabbitmq",
          color: "blue-text-gradient",
        },
        {
          name: "socket-io",
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
          name: "mongodb",
          color: "pink-text-gradient",
        },
        {
          name: "aws",
          color: "green-text-gradient",
        },
        {
          name: "redis",
          color: "pink-text-gradient"
        },
        {
          name: "expo",
          color: "blue-text-gradient"
        }
      ],
    image: lynkBg,
    source_code_link: "https://github.com/AyobamiAjibola/Lynk-Dating-Mobile-App.git",
    web_link: "",
    mobile_link: ""
  },
  {
    name: "Hyvetech Limited - AutoHyve Workshop App",
    description:
      `The redesigned Autohyve web app delivers a seamless UI/UX experience with improved speed 
      and robustness. It introduces a VIN checker for users to easily verify their vehicle details. 
      Additionally, it features an integrated HyvePay, eliminating the need for workshops to 
      navigate to a separate platform for monetary transactions. Workshops can efficiently make 
      on-the-fly payments for expenses by simply approving payments directly within the built-in 
      HyvePay functionality.`,
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
      },
      {
        name: "rabbitMq",
        color: "blue-text-gradient"
      }
    ],
    image: new_autohyve,
    source_code_link: "https://github.com/AyobamiAjibola/Hyvetech-Autohyve-Web-V1.git",
    web_link: "https://auto.hyvetech.co/",
    mobile_link: ""
  },
  {
    name: "Hyvetech Limited - HyvePay",
    description:
      `Hyvepay, developed by Hyvetech, stands as a pioneering fintech product. Serving as a preferred banking solution, Hyvepay caters specifically to mechanics, automotive shops, spare part retailers, and individuals seeking a reliable platform for seamless money transfers and receipts.
      Positioned at the intersection of convenience and innovation, Hyvepay offers a comprehensive suite of financial tools and services. It empowers users within the automotive industry and beyond to efficiently send and receive money, providing a secure and user-friendly experience.
      Hyvepay's distinct focus on serving mechanics, auto shops, spare part retailers, and individuals highlights its commitment to addressing the specific financial needs of these sectors. By leveraging the Hyvepay platform, users can tap into a modern banking experience tailored to enhance their financial operations.
      With a foundation built on trust, technological prowess, and a user-centric approach, Hyvepay redefines banking solutions, making financial transactions effortless and empowering businesses and individuals to thrive in a digitally connected world.`,
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
        },
        {
          name: "rabbitMq",
          color: "blue-text-gradient"
        }
      ],
    image: hyve_pay,
    source_code_link: "https://github.com/AyobamiAjibola/Hyvetech-Hyvepay.git",
    web_link: "https://pay.hyvetech.co",
    mobile_link: ""
  },
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
    source_code_link: "https://github.com/AyobamiAjibola/Zues-WebApp.git",
    web_link: "",
    mobile_link: ""
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
    source_code_link: "https://github.com/AyobamiAjibola/Tiklog-Delivery-App.git",
    web_link: "",
    mobile_link: ""
  },
  {
    name: "Hyvetech Limited - AutoHyve Customer App",
    description:
      `This project enables users to conveniently access a comprehensive breakdown of 
      parts scheduled for replacement or repair, complete with cost estimates. This 
      information will be accessible without requiring the download of the Hyvetech AutoHyve 
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
      },
      {
        name: "rabbitMq",
        color: "blue-text-gradient"
      }
    ],
    image: jiffix_customer,
    source_code_link: "https://github.com/Hyvetech-Limited/AutoHyve-web-app",
    web_link: "https://app.myautohyve.com/",
    mobile_link: ""
  },
  {
    name: "Hyvetech Limited - AutoHyve Workshop App",
    description:
      `Introducing Hyvetech Workshop Management System, tailored for Hyvetech partners: a robust 
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
        },
        {
          name: "rabbitMq",
          color: "blue-text-gradient"
        }
      ],
    image: jiffix_workshop,
    source_code_link: "https://github.com/AyobamiAjibola/Hyvetech-pdms.git",
    web_link: "https://pdms.jiffixtech.com/",
    mobile_link: ""
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
    web_link: "https://esunekiti.ng/",
    mobile_link: ""
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
    web_link: "https://www.kweekbuy.com",
    mobile_link: ""
  }
];

export { services, technologies, experiences, testimonials, projects };
