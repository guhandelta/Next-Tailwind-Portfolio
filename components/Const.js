import {  AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

export const SkillStore = [
    {
        'sno': 1,
        'name': 'HTML5',
        'image': '/../public/assets/skills/html.png'
    },
    {
        'sno': 2,
        'name': 'CSS',
        'image': '/../public/assets/skills/css.png'
    },
    {
        'sno': 3,
        'name': 'TailwindCSS',
        'image': '/../public/assets/skills/tailwind.png'
    },
    {
        'sno': 4,
        'name': 'JavaScript',
        'image': '/../public/assets/skills/javascript.png'
    },
    {
        'sno': 5,
        'name': 'NodeJS',
        'image': '/../public/assets/skills/node.png'
    },
    {
        'sno': 6,
        'name': 'ReactJS',
        'image': '/../public/assets/skills/react.png'
    },
    {
        'sno': 7,
        'name': 'NextJS',
        'image': '/../public/assets/skills/nextjs.png'
    },
    {
        'sno': 8,
        'name': 'Flask',
        'image': '/../public/assets/skills/flask.png'
    },
    {
        'sno': 9,
        'name': 'Django',
        'image': '/../public/assets/skills/django.png'
    },
    {
        'sno': 10,
        'name': 'AWS',
        'image': '/../public/assets/skills/aws.png'
    },
    {
        'sno': 11,
        'name': 'GitHub',
        'image': '/../public/assets/skills/github.png'
    },
    {
        'sno': 12,
        'name': 'MongoDB',
        'image': '/../public/assets/skills/mongo.png'
    }
]

export const Pages = [
    {
        'sno': 1,
        'page': 'Home'
    },
    {
        'sno': 2,
        'page': 'About'
    },
    {
        'sno': 3,
        'page': 'Skills'
    },
    {
        'sno': 4,
        'page': 'Portfolio'
    },
    {
        'sno': 5,
        'page': 'Contact'
    },
]

export const SocialMediaIcons = [
    {
        'sno':1,
        'icon': <FaLinkedinIn />
    },
    {
        'sno':2,
        'icon': <FaGithub />
    },
    {
        'sno':3,
        'icon': <AiOutlineMail />
    },
    {
        'sno':4,
        'icon': <BsFillPersonLinesFill />
    },
]

export const Experiences = [
    {
        'sno':1,
        'title': 'ReactJS Developer',
        'description': ['Working with developing a UI for a brokerage application using NextJS and React JS.',' • Develop responsive UI using NextJS & React JS and compose unit test cases using Jest.'],
        'timePeriod': 'January 2022 - June 2022',
        'techStack':'ReactJS, Material UI, Jest',
        'logoImage':'/../public/assets/projects/wellsfargo.png'
    },
    {
        'sno':2,
        'title': 'Fullstack Developer',
        'description': ['Working with developing a Dashboard application for server utilization analytics using React JS.', ' • Developed responsive UI using React JS/Typescript, Styled-Components, and Material UI, and GraphQL, with interactive visualizations using ChartJS.',' • Deployed the application over Azure and performed stress testing over the API endpoints using JMeter'],
        'timePeriod': 'February 2021 - December 2021',
        'techStack':'ReactJS, Material UI, Jest, GraphQL, ChartJS',
        'logoImage':'/../public/assets/projects/AT&T.png'
    },
    {
        'sno':3,
        'title': 'Fullstack Developer',
        'description': ['Working with developing a Dashboard application for server utilization analytics using React JS.', ' • Developed responsive UI using React JS/Typescript, Styled-Components, and Material UI, and GraphQL, with interactive visualizations using ChartJS.', ' • Deployed the application over Azure and performed stress testing over the API endpoints using JMeter.'],
        'timePeriod': 'December 2019 - January 2021',
        'techStack':'ReactJS, ChartJS, D3.js, Jest',
        'logoImage':'/../public/assets/projects/Discover.png'
    },
    {
        'sno':4,
        'title': 'Fullstack Developer',
        'description': ['Worked with my team to work on the UI for the credit card portal with some latest features from React 16.8.',' • Designed Server Rendered SPA with Next JS & ReactJS, hooks and styled-components for seamless experience.'],
        'timePeriod': 'September 2019 - December 2019',
        'techStack':'ReactJS, Material UI, Jest',
        'logoImage':'/../public/assets/projects/Barclaycard.jpg'
    },
    {
        'sno':5,
        'title': 'ReactJS Developer',
        'description': ['Developed the pages to display the charts visualizing the patient data for different diseases using ReactJS. ',' • Developed SPA using React JS and Material UI with Unit Testing using Jest to improve UI performance.'],
        'timePeriod': 'December 2018 - September 2019',
        'techStack':'ReactJS, Jest',
        'logoImage':'/../public/assets/projects/ExpressScripts.jpg'
    },
    {
        'sno':6,
        'title': 'Java Fullstack Developer',
        'description': ['Worked on developing the Find a Doctor application, using Angular 4/TypeScript and Spring Boot. ',' • Developed Responsive UI using Angular 4/Bootstrap with Karma to perform unit testing the Angular UI ',' • Used Java’s Spring Boot framework to develop performant API endpoints to deliver data to the app’s UI'],
        'timePeriod': 'May 2018 - November 2018',
        'techStack':'Angular 4, Typrscript, Java Spring',
        'logoImage':'/../public/assets/projects/bscCal.png'
    },
    {
        'sno':7,
        'title': 'Cloud Developer',
        'description': ['Worked with migrating on-premises applications to cloud and analytics team with data visualization using Tableau. ',' • Deployed Web Applications into Amazon AWS and developed cookbooks using Chef for deploying services on Hybrid environments, both Windows and Linux.'],
        'timePeriod': 'November 2017 - March 2018',
        'techStack':'AWS, Chef, Linux',
        'logoImage':'/../public/assets/projects/Veridic.png'
    },
    {
        'sno':7,
        'title': 'Frontend Web Developer',
        'description': ['Worked on developing responsive pages for some sections the Florida Blue website using latest features from Angular 4 ',' • Worked with my team in migrating the application UI from Angular 2 to Angular 4 and developed responsive Single Page Applications (SPA) on with Angular 4 Routing.'],
        'timePeriod': 'June 2017 - November 2017',
        'techStack':'Angular 2/4, Java Spring',
        'logoImage':'/../public/assets/projects/PattonLabs.png'
    },
    {
        'sno':8,
        'title': 'Web Developer',
        'description': ['Developed responsive web app for the equipment management using Bootstrap and Python Django. ',' • Developed a responsive UI using Bootstrap4 and designed the API endpoints using Python Django. ',' • Improved the CRUD efficiency of the app on the SQL Lite 3 DB using Django ORM to handle the DB and promptly intimate about new maintenance requests and the periodic maintenance'],
        'timePeriod': 'January 2017 - May 2017',
        'techStack':'HTML5/CSS3, Bootstrap 4, JavaScript, Python Django, Jinja 2 Templating Engine',
        'logoImage':'/../public/assets/projects/MildredMitchellBatemannHospital.png'
    },
    {
        'sno':9,
        'title': 'IOT Developer',
        'description': ['Developed IOT circuit to measure water pH value of Ohio River water and upload it into IBM Bluemix for analytics. ',' • Developed a wireless sensor network using Raspberry Pi 3, Arduino, and Vernier Water pH sensor to actively report water pH value, of Ohio River, to the project admin via IBM Bluemix.'],
        'timePeriod': 'March 2016 - December 2016',
        'techStack':' Raspberry pi 3, Arduino, XBee, Water pH sensor, Raspberry pi Wi-Fi adapter, IBM Bluemix IOT',
        'logoImage':'/../public/assets/projects/wvaquavit.png'
    }
]