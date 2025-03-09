import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Moahmed",
  lastName: "Aasath",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.png",
  location: "Asia/Colombo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/smaasath",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mohamed-aasadh-92778123a/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:aasadh2000@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Mohamed Aasath Software Engineer</>,
  subline: (
    <>
      A passionate Software Engineer with experience in web and mobile
      development, UI/UX design, and software architecture. I specialize in
      building scalable and efficient applications using Angular, React,
      Next.js, Spring Boot, Node.js, and Django.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm Mohamed Aasath, a passionate Software Engineer with experience in
        web and mobile development, UI/UX design, and software architecture. I
        specialize in building scalable and efficient applications using
        Angular, React, Next.js, Spring Boot, Node.js, and Django. With a keen
        eye for detail and performance optimization, I have worked on projects
        ranging from enterprise applications to startup solutions, ensuring
        seamless user experiences and robust backend systems. I also have
        expertise in SEO optimization, cloud deployment (AWS, Docker), and CI/CD
        integration. I thrive on solving complex challenges and continuously
        improving my craft. Let's build something amazing together!
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "SoftSora (PVT) LTD",
        timeframe: "Nov 2024 - Present",
        role: "Software Engineer",
        achievements: [
          <>
            As a Software Engineer at SoftSora (PVT) LTD, I contribute to the
            development of high-performance web applications by leveraging
            modern technologies and best practices.
          </>,
          <>
            Scalable Web Applications: Developed and maintained robust, scalable
            web applications using Node.js and Next.js, ensuring seamless
            performance and an optimized user experience.
          </>,
          <>
            SSR & Rendering Optimization: Implemented server-side rendering
            (SSR) and advanced rendering techniques in Angular and Next.js,
            significantly improving page load times and application efficiency.
          </>,
          <>
            Subscription Management & API Integration: Designed and integrated
            complex subscription logic to support various user plans and
            automated billing cycles. Successfully integrated third-party APIs
            to enhance platform functionality and streamline operations.
          </>,
          <>
            Database & Performance Optimization: Optimized SQL queries and
            database structures, reducing API response times and ensuring
            faster, more efficient data retrieval.
          </>,
          <>
            Code Quality & Version Control: Managed version control processes,
            including code reviews, pull requests (PR) reviews, and repository
            maintenance, ensuring adherence to industry best practices and
            maintaining high-quality, maintainable codebases.
          </>,
        ],
        images: [],
      },
      {
        company: "SoftSora (PVT) LTD",
        timeframe: " May 2024 - Oct2024",
        role: "Associate Software Engineer",
        achievements: [
          <>
            Front-End Development: Developed and optimized applications using
            Angular and React Native, ensuring high performance and an intuitive
            user experience across web and mobile platforms.
          </>,
          <>
            Deep Linking Implementation: Integrated deep linking to enhance
            navigation, improve user retention, and create a more seamless
            transition between app sections.
          </>,
          <>
            SEO Optimization: Conducted in-depth research on technical and
            on-page SEO strategies, implementing best practices to improve
            search engine visibility and boost website ranking.
          </>,
        ],
        images: [],
      },
      {
        company: "SoftSora (PVT) LTD",
        timeframe: "Nov 2023 - Apr 2024",
        role: "Software Engineering Intern",
        achievements: [
          <>
            Mobile Development: Developed and optimized React Native features,
            leveraging Redux for state management to improve performance and
            scalability.
          </>,
          <>
            Front-End Enhancements: Built responsive AngularJS components,
            refining UI efficiency and delivering a seamless user experience
            across devices.
          </>,
          <>
            Performance Optimization: Applied industry best practices to
            maintain app stability, speed, and consistency, ensuring a smooth
            user experience.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: " BSc (Hons) in Computer Science and Technology",
        description: <> Uva Wellassa University of Sri Lanka</>,
      }
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
        { title: "JavaScript" },
        { title: "TypeScript" },
        { title: "Java" },
        { title: "PHP" },
        { title: "Python" },
        { title: "React Native" },
        { title: "Android Studio" },
        { title: "Docker" },
        { title: "Postman" },
        { title: "React.js" },
        { title: "AngularJS" },
        { title: "Next.js" },
        { title: "Bootstrap" },
        { title: "Zustand" },
        { title: "Redux.js" },
        { title: "Spring Boot" },
        { title: "Figma" },
        { title: "Vue JS" },
        { title: "Node.js" },
        { title: "Django" },
        { title: "AWS S3, EC2, RDS" },
        { title: "Express.js" },
        { title: "CI/CD" },
        { title: "MongoDB" },
        { title: "MySQL" },
        { title: "PostgreSQL" }
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
