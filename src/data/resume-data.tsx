import {
  BlueOriginLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Nick Macioce",
  initials: "NDM",
  location: "Denver, CO, USA",
  locationLink: "https://www.google.com/maps/place/Denver",
  about: "",
    // "Detail-oriented DevOps Engineer dedicated to building high-quality software products, infrastructure, and deployments.",
  summary:
    "Detail-oriented DevOps Engineer dedicated to building high-quality software products, infrastructure, and deployments.",
  avatarUrl: "https://avatars.githubusercontent.com/u/12385486?v=4",
  personalWebsiteUrl: "https://nickmacioce.com",
  contact: {
    email: "ndmacioce+com@gmail.com",
    tel: "+11111111111",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ndmacioce",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ndmacioce/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Virginia Tech",
      degree:
        "BSc. Business Information Technology -- Decision Support Systems",
      start: "2010",
      end: "2014",
    },
  ],
  work: [
    {
      company: "Blue Origin",
      link: "https://blueorigin.com",
      badges: [],
      title: "DevOps Engineer L3",
      start: "2023",
      end: null,
      description: [
        "- Designed & implemented CI/CD standards for Kubernetes-based microservice deployments to Amazon Web Services with a focus on deployment efficiency and reliability.",
        "- Spearheaded end-to-end DevSecOps tooling including container scanning, dependency analysis, SAST/DAST, and code quality metrics including reporting on vulnerabilities and code analysis results.",
        "- Established comprehensive monitoring and observability standards, improving incident response times and system reliability for application teams.",
        "- Contributed on full-stack development (Java, Python, and React) on internal projects related to mission safety & launch operations for Blue Origin's New Shepard and Lunar business units.",
        "- Received 3 Launch Coin leadership principle awards for service excellence & bias for action."
      ],
    },
    {
      company: "CableFinder",
      link: "https://cablefinder.net",
      badges: ["Remote"],
      title: "Senior DevOps Engineer",
      start: "2021",
      end: "2023",
      description: [
        "- Automated deployments for several web applications utilizing GitHub Actions, AWS CodePipeline, Serverless Framework, and Docker.",
        "- Developed infrastructure-as-code projects and processes to enable repeatable and re-usable development environments using Terraform and AWS CloudFormation.",
        "- Migrated .Net application to AWS Elastic Container Service (ECS) and API Gateway.",
        "- Mentored junior developers in DevOps principles, cloud engineering, and containerization in Amazon Web Services.",
        "- Automated schema changes in SQL Server using SQL Server Data Tools (SSDT)."
      ]
    },
    {
      company: "Davita",
      link: "https://davita.com",
      badges: [],
      title: "DevOps Engineer",
      start: "2018",
      end: "2022",
      description: [
        "- Automated deployment process for web, .Net, iOS, and Android applications related to patient telehealth platform",
        "- Implemented Monitoring and Alerting solutions for production using Dynatrace, Nagios, and Grafana.",
        "- Architected & performed several migrations of on-premise applications to Google Cloud Platform.",
        "- Led training and development on migration from traditional .Net hosted applications to Docker and Kubernetes on GCP."
      ]
    },
    {
      company: "eBags",
      link: "https://ebags.com",
      badges: [],
      title: "Sr. IT Operations Analyst",
      start: "2014",
      end: "2018",
      description: [
        "- Architected and developed an IIS web log backup and analytics solution using AWS S3, Elastic MapReduce, and Hive/Hadoop scripts.",
        "- Lead the Performance & Scalability Taskforce in monitoring and analyzing application performance for production-tier applications and services.",
        "- Assisted eBags’ web and mobile application developers with application deployments, software bug tracking, and third-party integrations.",
        "- Provided training and documentation for eBags’ applications, services, and processes for new team members."
      ]
    },
    {
      company: "eBags",
      link: "https://ebags.com",
      badges: [],
      title: "IT Operations Analyst",
      start: "2014",
      end: "2018",
      description: [
        "- Performed production-tier software releases for the eBags.com public website and backend applications utilizing Visual Studio Team Services and PowerShell scripts.",
        "- Provisioned and administered eBags’ Amazon Web Services environment from requirements gathering through production implementation. Projects included EC2, S3, EMR/Hadoop, VPC Networking, and IAM policy creation.",
        "- Coordinated and executed annual load testing of eBags’ production systems prior to key business quarters.",
        "- Provided first and second line response for internal customer support, ticket documentation, and software bug troubleshooting. ",
        "- Monitored and supported eBags’ 24/7 websites, IT systems, databases, and internal customers."
      ]
    },
  ],
  skills: [
    "Amazon Web Services",
    "Kubernetes",
    "JavaScript",
    "TypeScript",
    "Python",
    "Observability",
  ],
  projects: [],
} as const;
