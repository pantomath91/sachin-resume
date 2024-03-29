import Head from 'next/head';
import { Header } from '../components/Header';
import { TimeLine } from '../components/TimeLine';
import { AboutMe } from '../components/AboutMe';
import { SkillsMap } from '../components/SkillsMap';
import { Projects } from '../components/Projects';
import { Footer } from '../components/Footer';
import { POR } from '../components/POR';

export default function Home() {
  return (
    <div className="w-screen">
      <Head>
        <title>Sachin Portfolio</title>
      </Head>
      <div>
        <Header />
      </div>
      <main className="p-8">
        <div className="flex flex-row flex-wrap lg:flex-nowrap justify-evenly">
          <div className="w-full lg:w-3/6">
            <TimeLine />
          </div>
          <div className="w-full lg:w-3/6 mt-8 lg:mt-0 lg:ml-1">
            <AboutMe />
          </div>
        </div>
        <div className="mt-8">
          <SkillsMap />
        </div>
        <div className="mt-8">
          <Projects />
        </div>
      </main>
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  )
}
