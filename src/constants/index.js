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
  storybook,
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
  django,
  python,
  vue, htmx,
  debiz,
  menupk,
  patient,
  menupkPage,
  debizPage,
  patientPage,
  go, fastapi, flask, k8s,
   mindease1, mindease2, mindease3, mindease4,
   lefort,
   talksharp,
   lefort_bg,
   talk_1,
   talk_2,
   talk_3,
   talk_4,
   talk_5,
   talk_6,
   talk_7,
   talk_8
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
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "VueJS",
    icon: vue,
  },
  {
    name: "HTMX",
    icon: htmx,
  },
  {
    name: "Kubernetes",
    icon: k8s
  },
  {
    name: "Flask",
    icon: flask
  },
  {
    name: "FastApi",
    icon: fastapi
  },
  {
    name: "Golang",
    icon: go
  }
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Lé Fortifier Corp",
    icon: lefort,
    iconBg: "#fff",
    date: "May 2025 - In Progress",
    points: [
      `Developed backend and frontend features for a client-facing SaaS platform using JavaScript frameworks and REST APIs to support core business workflows.
Built and delivered full-stack features that supported key customer workflows such as data entry, record management, reporting, and user interactions. Implemented RESTful APIs and integrated them with responsive frontend components, ensuring smooth data flow, reliability, and a consistent user experience across the application.`,
      `Collaborated cross-functionally with product and design partners to scope features, align on requirements, and deliver work incrementally across multiple releases.
Worked closely with product managers and designers to translate business needs and early concepts into clear technical requirements. Participated in design discussions and reviews, helping refine UX flows and technical feasibility, and delivered features incrementally to gather feedback and reduce risk.`,
      `Broke down features into well-defined milestones, proactively communicating progress, risks, and blockers to ensure timely delivery.
Decomposed larger initiatives into manageable milestones and tasks, enabling predictable delivery and easier tracking. Maintained regular communication with stakeholders to provide status updates, surface risks early, and resolve blockers before they impacted timelines.`,
      `Worked within Git-based workflows and CI/CD pipelines to maintain reliable deployments and consistent release quality.
Contributed code through structured Git workflows, including pull requests and code reviews, to maintain quality and consistency. Leveraged CI/CD pipelines to automate testing and deployments, helping ensure stable releases and reducing the likelihood of production issues.`
    ]
  },
  {
    title: "CTO / Full Stack Developer",
    company_name: "TalkSharp",
    icon: talksharp,
    iconBg: "#fff",
    date: "Aug 2025 - In Progress",
    points: [
      `Designed and implemented backend authentication and data-processing APIs using Firebase Cloud Functions to support secure user onboarding and identity workflows.
Built secure and scalable authentication and user management systems using Firebase Authentication and Cloud Functions to handle onboarding, session management, and user progression tracking. Designed backend workflows to manage user profiles, learning history, lesson progress, and achievements while ensuring data integrity and low-latency access for a smooth learning experience.`,
      `Developed AI features, including an LLM-integrated conversational chatbot, to enable interactive language learning experiences.
Integrated an LLM-powered conversational chatbot that allows learners to practice African languages through real-time dialogue, simulating natural conversations rather than static exercises. Designed prompts and conversation flows to adapt to the learner’s proficiency level, provide contextual corrections, and reinforce vocabulary and grammar in a fun, engaging way.`,
      `Owned engineering outcomes end-to-end, from technical planning and implementation to deployment and iteration based on user feedback.
Led the engineering efforts across backend services, AI features, and product workflows, translating learning goals and product ideas into technical solutions. Iterated on features based on learner feedback and usage patterns, continuously improving lesson flow, chatbot interactions, and system reliability.`,
      `Implemented CI/CD pipelines with GitHub Actions, improving build reliability and deployment speed.
Set up automated CI/CD pipelines using GitHub Actions to test, build, and deploy Cloud Functions and application services. This streamlined release cycles, reduced manual deployment errors, and enabled faster iteration as new lessons, AI features, and improvements were introduced.`
    ]
  },
  {
    title: "Founder / Software Engineer",
    company_name: "StressShield - Stress Prediction App",
    icon: menupk,
    iconBg: "#fff",
    date: "Jan 2025 - In Progress",
    points: [
      `Architected and implemented the entire application as a solo developer, overseeing both backend and frontend development.`,
      `Designed a multi-service architecture using:
        Flask for user authentication and session handling.
        FastAPI for ML inference and prediction logic.
        Golang for performance-critical APIs and analytical computations.`,
      `Built a personalized machine learning model that adapts to individual user data for tailored stress predictions, alongside a generalized model trained on aggregated user data to provide accurate forecasts for non-registered users.`,
      `Designed a structured training phase, where each user completes 20 valid data cycles (daily questionnaire + next-day stress feedback) to initialize a personalized stress model.`,
      `Enabled continuous learning by retraining models weekly with new feedback and predictions, improving accuracy over time.`,
      `Integrated DeepSeek LLM for generating real-time, context-aware mental wellness recommendations.`,
      `Implemented Celery with RabbitMQ for asynchronous background task handling and efficient message queuing.`,
      `Built a responsive Vue.js web frontend, with a consistent and accessible UI across devices`,
      `Initiated development of a React Native mobile application for cross-platform availability.`,
      `Integrated WebSocket and Server-Sent Events (SSE) to push real-time notifications and recommendations to users.`,
      `Containerized all services with Docker and orchestrated them using Kubernetes for scalability, deployment consistency, and fault tolerance.`,
      `Designed the data flow and logic for daily questionnaire submission (sleep, nutrition, workload, mood, etc.), followed by a next-day stress level feedback loop.`,
      `Developed a mid-day check-in system to capture real-time stress adjustments and offer timely support.`,
      `Designed and implemented Retrieval-Augmented Generation (RAG) workflows that combine structured user data—such as profiles, historical activity, preferences, and contextual signals—with carefully crafted LLM prompts to generate more accurate, personalized, and relevant insights. Built data retrieval and preprocessing layers to select the most meaningful user context at inference time, ensuring the LLM responses were grounded in real, up-to-date information rather than generic output. This approach significantly improved the quality, consistency, and usefulness of generated insights, while reducing hallucinations and increasing user trust in the system’s recommendations.`
      // `I am currently developing a stress prediction application that leverages machine learning algorithms to analyze user input and forecast stress levels. The goal is to help users better manage their mental well-being by providing personalized recommendations and actionable insights.`,
      // `As the sole developer, I am responsible for the full stack — implementing the backend infrastructure, designing RESTful APIs, and ensuring smooth integration with the frontend interface.`,
      // `The project is architected using a distributed services approach. I’ve employed Python and Go for different layers of the system:
      //   – Flask handles user authentication and session management
      //   – FastAPI powers the ML model inference and prediction logic
      //   – Golang is used for high-performance API endpoints and advanced analytical functionalities`,
      // `To deliver personalized recommendations, I integrated DeepSeek LLM, enabling context-aware, dynamic guidance for users.`,
      // `The application is containerized using Docker, ensuring consistent deployment across various environments. I also implemented Kubernetes for orchestration, allowing for efficient scaling and management of the application.`,
      // `For efficient background processing and real-time updates, I use Celery and RabbitMQ, enabling responsive task handling and scalable architecture.`,
      // // `The data is stored in PostgreSQL, ensuring robust data integrity and efficient querying capabilities. I also implemented Redis for caching frequently accessed data, enhancing performance and reducing latency.`,
      // `The frontend is developed using Vue.js, offering a responsive and intuitive user interface. I’ve prioritized mobile responsiveness to ensure a seamless user experience across all devices.`,
      // `In addition, the mobile application is being developed using React Native, enabling cross-platform compatibility and native performance on both iOS and Android.`
    ]
  },
  {
    title: "Senior Software Developer",
    company_name: "Devsqurepk - Menupk Web App",
    icon: menupk,
    iconBg: "#fff",
    date: "Feb 2024 - June 2025",
    points: [
      `I play a pivotal role in the creation of Menu.PK, an innovative platform that allows users to explore and discover a wide variety of menus showcasing authentic flavors from across Pakistan. I designed, developed, and implemented the backend infrastructure, creating robust RESTful APIs that power the web application’s various functionalities, ensuring seamless user experiences and efficient data management.`,
      `In addition to backend development, I also contribute to building key frontend components, collaborating closely with the design and development teams to create an intuitive and engaging user interface. This involved implementing responsive design principles to ensure a consistent user experience across all devices.`,
      `To ensure the application's availability, scalability, and security, I configured and managed the cloud infrastructure. This included setting up and maintaining virtual servers, managing storage solutions, and optimizing databases for performance. I also configured networking components to ensure secure and reliable communication between different parts of the application, ultimately leading to a successful deployment of the platform.`
    ]
  },
  {
    title: "Backend Developer",
    company_name: "Toverbers - De Business Consult Web App",
    icon: debiz,
    iconBg: "#fff",
    date: "July 2024 - Aug 2024",
    points: [
      `Engineered and developed the backend and all relevant APIs.`,
      `Implemented appointment scheduling with agenda modules, allowing clients to book and receive notifications.`,
      `Developed in-app chat with Socket.io for real-time communication between clients and admin.`,
      `Created APIs for clients to submit applications and financial documents for services like bookkeeping, payroll, and financial analysis.`,
      `To enhance client engagement, I also developed APIs that allow the admin to post blogs, newsletters, and updates, which can be sent to subscribers.`
    ]
  },
  {
    title: "Full Stack Developer",
    company_name: "Toverbers - Patient NG",
    icon: patient,
    iconBg: "#fff",
    date: "May 2024 - June 2024",
    points: [
      `Spearheaded the development of the entire application by engineering a robust backend using Node.js and Express. Leveraged Next.js on the frontend to create a seamless, responsive user interface that enhances user experience across devices.`,
      `Developed and implemented the fundraiser functionality from the ground up. This feature enables users to initiate fundraisers while providing a secure payment gateway for contributors, ensuring the integrity and safety of transactions.`,
      `Architected and integrated RESTful APIs, facilitating smooth communication between the frontend and backend. Ensured that the APIs were well-documented, scalable, and maintainable for future enhancements.`,
      `Led the design and development of the frontend, ensuring a cohesive and user-friendly interface. Utilized Next.js to create dynamic and responsive web pages that cater to a wide range of user needs.`,
      `Integrated the developed APIs with the frontend, ensuring that the application’s features were fully functional and user-friendly. Focused on creating an intuitive user journey, from navigating the platform to completing transactions.`,
      `Managed the cloud infrastructure, overseeing deployment and hosting on Hostinger. This involved configuring servers, managing databases, and ensuring that the application was scalable to handle growing user demand.`
    ],
  },
  {
    title: "Front Developer",
    company_name: "Sparkle Technologies - Sparkle Waitlist Web Page",
    icon: sparkle,
    iconBg: "#383E56",
    date: "January 2024 - January 2024",
    points: [
      `I integrated Firebase Firestore to manage and store the list of users on the waitlist.`,
      `The website was developed using Next.js as the development framework.`
      
    ],
  },
  {
    title: "Backend / Mobile App Developer",
    company_name: "A'Mobi Ltd - Lynk Mobile App",
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
    company_name: "A'Mobi Ltd - Zues Web App",
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
    company_name: "Toverbers - Tik Logistics Mobile App",
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
    name: "Lé Fortifier Corp",
    description: `
     Lé Fortifier Corp is a software development company delivering scalable, client-facing SaaS solutions. As a Full Stack Developer, I contributed to the development of one of the company’s SaaS products designed to support core business workflows through reliable, user-friendly, and scalable features.

I worked across both backend and frontend, building and integrating RESTful APIs with responsive frontend components to enable key customer activities such as data entry, record management, reporting, and day-to-day user interactions. The platform was developed using modern JavaScript frameworks, with a strong focus on smooth data flow, consistency, and a high-quality user experience.

I collaborated closely with product managers and designers to translate early concepts and business requirements into well-defined technical solutions and refined user flows. Features were delivered incrementally across multiple releases by breaking down larger initiatives into clear milestones, proactively communicating progress, risks, and blockers to ensure timely delivery.

The project followed structured Git-based workflows and CI/CD pipelines, supporting automated testing, reliable deployments, and consistent release quality as the product evolved.
    `,
    tags: [
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "blue-text-gradient",
      },
      {
        name: "Postgres",
        color: "pink-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "green-text-gradient",
      },
      {
        name: "ReactJS",
        color: "pink-text-gradient",
      },
      {
        name: "NextJS",
        color: "blue-text-gradient",
      }
    ],
    image: [ lefort_bg ],
    source_code_link: "",
    web_link: "",
    mobile_link: ""
  },
  {
    name: "TalkSharp - Language Learning App",
    description: `
      TalkSharp is an an interactive, AI-driven language learning platform designed to teach African languages through engaging, conversation-first experiences. The product combines secure backend systems with real-time AI interactions to deliver a fun, personalized, and scalable learning journey.  The backend was built using Firebase Authentication and Cloud Functions to support secure user onboarding, identity management, and session handling. Backend workflows were designed to track learner profiles, lesson progress, achievements, and learning history, ensuring low-latency access and a smooth, reliable user experience.  To enhance engagement and learning effectiveness, the platform integrates an LLM-powered conversational chatbot that enables learners to practice languages through natural dialogue rather than static exercises. Conversation flows and prompts adapt dynamically to each learner’s proficiency level, providing contextual corrections and reinforcing vocabulary and grammar in an intuitive and enjoyable way.  Engineering ownership spanned the full lifecycle—from technical planning and implementation to deployment and continuous iteration driven by user feedback and usage data. CI/CD pipelines were implemented using GitHub Actions to automate testing and deployments, improving release reliability and enabling faster iteration as new lessons, AI features, and platform improvements were introduced.
    `,
    tags: [
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
      {
        name: "GCP",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase Functions",
        color: "green-text-gradient",
      },
      {
        name: "LLM",
        color: "pink-text-gradient",
      }
    ],
    image: [ talk_1, talk_2, talk_3, talk_4, talk_5, talk_6, talk_7,talk_8, ],
    source_code_link: "",
    web_link: "",
    mobile_link: ""
  },
  {
    name: "StressShield - Stress Prediction App",
    description: `
      Designed and developed a full-stack stress prediction platform that leverages machine learning to forecast users’ next-day stress levels based on daily self-reported data. Built using a distributed architecture with Python (Flask for authentication, FastAPI for ML inference) and Go (high-performance analytics and API services). Engineered a personalized ML workflow that retrains weekly and adapts to individual behavior patterns after an initial 20-day onboarding period. Integrated DeepSeek LLM for delivering AI-generated stress mitigation strategies and context-aware guidance.
      The backend supports real-time interactions using WebSocket and SSE for notifications and task updates. Asynchronous task handling and processing are powered by Celery and RabbitMQ. Containerized the system using Docker and orchestrated deployments with Kubernetes. Developed the frontend in Vue.js with a responsive UI, while building the mobile app using React Native for cross-platform support.
      Implemented a structured data collection flow involving daily questionnaires and follow-up stress validation prompts to enable continual model improvement. Ensured clean training cycles by validating feedback windows and managing incomplete submissions. Prioritized a seamless UX across web and mobile interfaces with a focus on behavioral insight, mental wellness, and user accountability.
    `,
    tags: [
      {
        name: "Python",
        color: "pink-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "FastApi",
        color: "blue-text-gradient",
      },
      {
        name: "Golang",
        color: "pink-text-gradient",
      },
      {
        name: "Kubernetes",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "Postgres",
        color: "pink-text-gradient",
      },
      {
        name: "Celery",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
      {
        name: "ML",
        color: "blue-text-gradient",
      },
      {
        name: "LLM",
        color: "pink-text-gradient",
      },
      {
        name: "Open Router (Deepseek)",
        color: "green-text-gradient",
      },
      {
        name: "VueJS",
        color: "pink-text-gradient",
      },
      {
        name: "React-Native",
        color: "green-text-gradient",
      },
      {
        name: "Redis",
        color: "blue-text-gradient",
      },
      {
        name: "RabbitMQ",
        color: "pink-text-gradient",
      },
      {
        name: "Socket.IO",
        color: "green-text-gradient",
      },
      {
        name: "SSE",
        color: "blue-text-gradient",
      },
    ],
    image: [  mindease1, mindease2, mindease3, mindease4 ],
    source_code_link: "",
    web_link: "",
    mobile_link: ""
  },
  {
    name: "Menupk",
    description: `
      Menu.PK is a SaaS/B2B platform designed to revolutionize how 
      restaurants in Pakistan manage their operations and engage with customers. 
      The platform enables restaurants to seamlessly onboard, manage their menus, 
      handle customer orders, and streamline their daily operations. Simultaneously, 
      users can explore the offerings of these onboarded restaurants and place orders 
      directly through the platform, making it a one-stop solution for both restaurant 
      owners and food enthusiasts.
    `,
    tags: [
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "pink-text-gradient"
      },
      {
        name: "redis",
        color: "pink-text-gradient"
      },
      {
        name: "docker",
        color: "green-text-gradient"
      },
      {
        name: "AWS",
        color: "blue-text-gradient"
      },
      {
        name: "express",
        color: "pink-text-gradient"
      },
      {
        name: "shadcn ui",
        color: "blue-text-gradient"
      },
      {
        name: "firebase admin",
        color: "pink-text-gradient"
      },
    ],
    image: [ menupkPage ],
    source_code_link: "",
    web_link: "beta.menupk.com",
    mobile_link: ""
  },
  {
    name: "De Business Consult",
    description: `
      This project is a comprehensive platform designed to streamline client 
      interactions and service management for a financial services company. The backend, 
      built with robust API architecture, supports features such as appointment scheduling, 
      in-app communication, and document submission for various financial services. Clients 
      can easily book appointments, receive notifications, and submit necessary financial 
      documents for services like bookkeeping, payroll management, and financial analysis. 
      The platform also includes a content management system where the admin can post blogs, 
      newsletters, and updates, ensuring that clients and subscribers stay informed about the 
      latest developments. The in-app chat system facilitates real-time communication between 
      clients and the admin, enhancing transparency and service efficiency.
    `,
    tags: [
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "socket io",
        color: "green-text-gradient",
      },
      {
        name: "hostinger",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: [ debizPage ],
    source_code_link: "https://github.com/AyobamiAjibola/De-Business-Consult.git",
    web_link: "",
    mobile_link: ""
  },
  {
    name: "Patient Ng",
    description: `
      This community-driven platform is designed to revolutionize patient empowerment 
      within the healthcare system. The application enables users to submit complaints, 
      share personal healthcare stories, start fundraisers, and access reliable hospital 
      ratings and reviews. Built with Node.js, Express, and Next.js, the platform offers 
      a seamless and user-friendly interface, ensuring a smooth and responsive experience 
      for all users. The robust backend infrastructure is hosted on Hostinger, providing 
      scalability and reliability to handle growing demand. By fostering transparency, 
      support, and informed decision-making, this platform transforms the patient experience 
      and contributes to the improvement of healthcare services.
    `,
    tags: [
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "redis",
        color: "pink-text-gradient"
      },
      {
        name: "hostinger",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: [ patientPage ],
    source_code_link: "https://github.com/AyobamiAjibola/ipatient.git",
    web_link: "https://patientdotng.toverbers.com/",
    mobile_link: ""
  },
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
    image: [ sparkleBg ],
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
    image: [ lynkBg ],
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
    image: [ new_autohyve ],
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
    image: [ hyve_pay ],
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
    image: [ zues_project ],
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
    image: [ tiklog_project ],
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
    image: [ jiffix_customer ],
    source_code_link: "https://github.com/Hyvetech-Limited/AutoHyve-web-app",
    web_link: "https://app.myautohyve.com/",
    mobile_link: ""
  },
  {
    name: "Hyvetech Limited - AutoHyve Workshop App",
    description:
      `Introducing Hyvetech Workshop Management System, a powerful SaaS/B2B platform 
      designed specifically for Hyvetech partners. This robust tool streamlines key 
      processes like estimate generation, invoice creation, workshop stock management, 
      vehicle repair reminders, and expense tracking. Built to meet dynamic needs, it 
      offers advanced analytics for informed decision-making. With its intuitive interface 
      and cutting-edge features, this innovative solution redefines workshop management, 
      driving significant improvements in operational efficiency.`,
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
    image: [ jiffix_workshop ],
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
    image: [ esun ],
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
    image: [ kweekbuy ],
    source_code_link: "",
    web_link: "https://www.kweekbuy.com",
    mobile_link: ""
  }
];

export { services, technologies, experiences, testimonials, projects };
