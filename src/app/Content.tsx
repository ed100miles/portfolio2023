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
  projects: Content,
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
    <div>{"After years of working in finance and writing code just for fun I decided to make my hobby a career, so I quit my job, built a portfolio, and quickly landed my first developer role."}</div>
    <div>{"I'm currently developing a suite of SaaS tools to help companies understand and mitigate the environmental impact of their products."}</div>
    <div>{"I primarily work with Python, TypeScript, React, and AWS to create, deploy, and maintain scalable and performant applications."}</div>
    <div>{"I live in London with my partner and our two cats, and I love rock climbing, bouldering and getting out in nature."}</div>
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

const ProjectsContent = () => (
  <div className="space-y-4 md:text-lg">
    <div className="w-full flex justify-between">
      <a
        href="https://www.edmiles.dev/scrabble"
        className=""
        target="_blank"
      >
        <div className="flex items-center gap-2">
          {"See Project!"}
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
        </div>
      </a>
      <a
        href="https://github.com/ed100miles/scrabble23/"
        className=""
        target="_blank"
      >
        <div className="flex items-center gap-2">
          {"See the code "}
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
        </div>
      </a>
    </div>
    <div>{"Users enter words onto the board and what letters they have. This generates a list of possible words that can be played."}</div>
    <div>{"This works by constructing, then recursively traversing a "}</div>
    <a
      className="underline underline-offset-1"
      href="https://en.wikipedia.org/wiki/Trie"
      target="_blank"
    >{"trie data structure."}</a>
    <span>{" Be sure to check out the code, it's interesting. Or get in contact and I'd love to chat about it."}</span>
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
  projects: {
    title: 'Projects',
    content: <ProjectsContent />
  },
  contact: {
    title: 'Contact',
    content: <ContactContent />
  },
}

