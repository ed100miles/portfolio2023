import { ReactElement } from "react"

interface Content {
  title: string,
  content: ReactElement
}

export interface ContentMap {
  welcome: Content,
  about: Content,
  skills: Content,
  experience: Content
  contact: Content
}

const WelcomeContent = () => (
  <div className="space-y-4 md:text-lg">
    <div>{"I'm Ed Miles, a full-stack software developer passionate about creating amazing, engaging, powerful technology solutions to change the world for the better. Take a look around and feel free to get in contact."}</div>
    <div>{"Wanna see how I made this site? Check the github repo "}
      <a
        href="https://github.com/ed100miles/portfolio2023"
        className="underline"
        target="_blank"
      >{'here'}</a>
      {"."}
    </div>
    <div>{"Enjoy!"}</div>
  </div>
)

const AboutContent = () => (
  <div className="space-y-4">
    <div>{"After years of working in finance, and writing code just for fun, I decided to make my hobby pay the bills, so I quit my job, built my first portfolio site and quickly landed my first developer job before the savings ran out."}</div>
    <div>{"I'm currently developing a suite of SaaS tools to help companies understand and mitigate the environmental impact of their products."}</div>
    <div>{"I'm primarily work with Python, TypeScript, React, and AWS to create, deploy, and maintain scalable and performant applications."}</div>
    <div>{"I live in London with my partner and our two cats, and I love rock climbing, boulering and getting out in the nature."}</div>
  </div>
)

const TechSkillsContent = () => {
  const skillsMap = [
    {
      skill: "Python",
      description: "Experienced writing clean, robust, adaptable and reusable “pythonic” code through the utilisation of object-oriented design principles, and in line with the PEP8 style guide. Proficient with many common Python libraries including Flask, Django, FastAPI, Numpy, Pandas, Scikit-learn, and OpenCV"
    },
    {
      skill: "JavaScript / TypeScript",
      description: "Competent with the latest ECMAScript features and comfortable working with many JavaScript libraries and frameworks like ReactJS, NextJS, D3.js, Lodash, Chart.js and ReCharts, plus common component libraries such as MaterialUI and Radix."
    },
    {
      skill: "AWS Cloud Computing",
      description: "Well practised in various AWS cloud compute services, such as; deploying EC2 instances and Lambdas, front-end applications with Amplify; setting up container clusters with ECS; storage solutions with DynamoDB and S2 buckets; and authentication with Cognito"
    },
    {
      skill: "Database management",
      description: "Comfortable working with both relational and non-relational databases."
    },
    {
      skill: "Version Control",
      description: "Git, Github, general repo management, fixing conflicts, code reviews."
    },
    {
      skill: "Docker",
      description: "Comfortable working with both relational and non-relational databases."
    }
  ]

  return (
    <ul className="space-y-4">
      {skillsMap.map(skill => (
        <li key={skill.skill} className="space-y-1">
          <strong className="font-bold md:text-lg">{`> ${skill.skill} `}</strong>
          <div className="font-extralight text-xs md:text-sm">
            {`${skill.description}`}
          </div></li>
      ))}
    </ul>
  )
}


const ExperienceContent = () => {
  const minviroPoints = [
    "Worked both independently and as part of a team of developers in a fast-paced environment to implement new features for suite of SaaS applications using the Kanban agile methodology.",
    "Responsible for the full software development lifecycle, from planning to deployment, of a bespoke, highly customised data visualisation tool, written in TypeScript, using the React and D3, and deployed on AWS cloud computing infrastructure.",
    "Collaborated with academics to integrate the ‘circular footprint formula’ recycling methodology into a SaaS tool for calculating the environmental impacts of mining operations.",
    "Ensured code quality through unit testing, TDD and rigorous code reviews.",
    "Helped junior hires develop through mentoring, pair programming, and learning sessions. "
  ]
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-baseline space-x-5">
        <div className="flex flex-col text-sm md:text-lg">
          <div className="font-bold">Minviro Ltd</div>
          <div className="text-xs md:text-base">Full Stack Developer</div>
        </div>
        <div className="text-xs md:text-sm font-thin pr-1 md:pr-3">October 2021 - Present</div>
      </div>
      {
        minviroPoints.map((point, idx) => {
          return (
            <div key={idx} className="font-extralight text-xs md:text-sm">{`> ${point}`}</div>
          )
        })
      }
    </div>)
}

const ContactContent = () => (
  <div className="space-y-4 md:text-lg">
    <div>{"Want to find out more?"}</div>
    <div>{"You can email me at "}
      <a href="mailto:ed@edmiles.dev" className="underline">{"ed@edmiles.dev"}</a>
      {" or drop me a message on my "}
      <a
        href="https://www.linkedin.com/in/ed-miles-tech/"
        className="underline"
        target="_blank"
      >{"LinkedIn"}</a>
    </div>
    <div>{"Looking forward to hearing from you!"}</div>
  </div>
)

export const contentMap: ContentMap = {
  welcome: {
    title: 'Welcome',
    content: <WelcomeContent />
  },
  about: {
    title: 'About Me',
    content: <AboutContent />
  },
  skills: {
    title: 'Tech Skills',
    content: <TechSkillsContent />
  },
  experience: {
    title: 'Experience',
    content: <ExperienceContent />
  },
  contact: {
    title: 'Contact',
    content: <ContactContent />
  },
}

