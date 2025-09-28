import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const projects = [
  {
    name: 'Fin tracker',
    description: 'Personal Finance Management',
    link: {
      href: 'https://fintracker.zakariaslimane.dev/',
      label: 'Fintracker',
    },
    featured: true,
  },
  {
    name: 'CICD labs',
    description: 'My contribution to the prepare.sh labs',
    link: {
      href: 'https://github.com/slzakaria/azurelabs',
      label: 'Azurelabs',
    },
    featured: true,
  },
  {
    name: 'Terraform AWS template',
    description: 'Provisioning starter for AWS resources using Terraform',
    link: {
      href: 'https://github.com/slzakaria/terraform-ec2',
      label: 'Terraform EC2 template',
    },
    featured: true,
  },
  {
    name: 'Helm charts & kubernetes deployement',
    description: 'Helm and kubernetes deployement of a python api',
    link: {
      href: 'https://github.com/slzakaria/python-api---helm-kubernetes-deployement',
      label: 'Helm kubernetes template',
    },
    featured: true,
  },
  {
    name: 'Golang-Docker api template',
    description: 'Basic starter of a Go API microservice dockerized',
    link: {
      href: 'https://github.com/slzakaria/go-docker-ms',
      label: 'Golang api docker template',
    },
    featured: true,
  },
  {
    name: 'Pennysense Budget app',
    description: 'Personal finance and budgeting app',
    link: {
      href: 'https://budgets.zakariaslimane.dev/',
      label: 'Budgets',
    },
    featured: true,
  },
  {
    name: 'unFetch image provider',
    description: 'Search image wrapper , list and download high res images',
    link: {
      href: 'https://unfetch.vercel.app/',
      label: 'Unfetch',
    },
    featured: false,
  },
  {
    name: 'Cvforge resume maker - Desktop app',
    description: 'A resume maker.',
    link: {
      href: 'https://cvforge.vercel.app/',
      label: 'Cvforge',
    },
    featured: true,
  },
  {
    name: 'Gittrackr issues tracker',
    description: 'A docker GoLang REST API with React front',
    link: {
      href: 'https://gittrackr.vercel.app/',
      label: 'Gittrackr',
    },
    featured: true,
  },
  {
    name: 'Bank product template',
    description: 'Responsive & modern landing page for a Bank',
    link: {
      href: 'https://echelonbank.vercel.app/',
      label: 'Bank product template',
    },
    featured: true,
  },
  {
    name: 'Golang CLI notes',
    description: 'Golang CLI tasks application',
    link: {
      href: 'https://github.com/slzakaria/gotask',
      label: 'Golang CLI app',
    },
    featured: false,
  },
  {
    name: 'Urbandrugstore wordpress ecommerce',
    description: 'E-commerce website  - online beauty and drugstore',
    link: {
      href: 'https://urbandrugstore.ma/',
      label: 'urbandrugstore.ma',
    },
    featured: false,
  },
  {
    name: 'BeautyMall wordpress ecommerce',
    description: 'E-commerce website  - online beauty and drugstore',
    link: {
      href: 'https://beautymall.ma/',
      label: 'beautymall.ma',
    },
    featured: false,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description: 'Things I’ve made to pass time and hone my skills.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I’ve made trying to pass time and hone my skills."
      intro="Aside my fulltime jobs , i’ve worked on little projects over the years. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-4"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
