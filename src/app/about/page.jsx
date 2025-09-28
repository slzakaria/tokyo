import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  EnvelopeIcon,
  DocumentIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/zs.png'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Zakaria Slimane, a software developer and cloud enthusiast with an AWS Solutions Architect certification. I love building efficient and scalable applications, exploring new technologies, and sharing my knowledge through blogging.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="a picture of Zakaria Slimane"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Software developer , AWS Certified Solutions Architect and
            first-time speaker at Devoxx Morocco.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I leverage JavaScript and React for the front end and Golang for
              back-end systems.
            </p>
            <p>
              I’m always learning, enjoy collaborating, and passionate about
              technology and its use to solve problems. Enthusiastic about
              devOps & Cloud Engineering , CI/CD automation, and AWS
              technologies , I thrive in perpetual learning.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list" className="flex justify-center gap-4 align-middle">
            <SocialLink
              href="https://github.com/slzakaria"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/zakaria-slimane/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink href="mailto:slzackaria@gmail.com" icon={MailIcon} />
            <SocialLink
              href="https://drive.google.com/file/d/1Ybyhe-cHJ2Cv_Cm52JRbgZNggO62tDrj/view?usp=sharing"
              aria-label="Download my resume"
              icon={DocumentIcon}
            />
          </ul>
        </div>
      </div>
    </Container>
  )
}
