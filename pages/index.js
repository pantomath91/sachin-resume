import Head from 'next/head';
import { Header } from '../components/Header';
import { TimeLine } from '../components/TimeLine';
import { AboutMe } from '../components/AboutMe';
import { SkillsMap } from '../components/SkillsMap';
import { Projects } from '../components/Projects';
import { Footer } from '../components/Footer';
import { ArchitectureDiagram } from '../components/ArchitectureDiagram';
import { TestingWorkflow } from '../components/TestingWorkflow';
import { CICDPipeline } from '../components/CICDPipeline';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Head>
        <title>Sachin Lohani | Senior Frontend Developer | 11+ Years Experience</title>
        <meta name="description" content="Professional portfolio of Sachin Lohani, a senior Frontend Developer with 11+ years of expertise in React, Next.js, automation testing, and accessibility implementation. PayPal engineer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Frontend Developer, React, Next.js, JavaScript, TypeScript, Web Development, Mobile Apps, Accessibility, WCAG, Test Automation, WebdriverIO, Playwright, Selenium, Appium, Harness CI/CD, PayPal" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Sachin Lohani | Senior Frontend Developer | 11+ Years Experience | PayPal Engineer" />
        <meta property="og:description" content="Professional portfolio of Sachin Lohani, a senior Frontend Developer with 11+ years of expertise in React, Next.js, automation testing, and accessibility implementation. PayPal engineer." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sachin Lohani" />
        
        {/* Additional Meta Tags */}
        <meta name="author" content="Sachin Lohani" />
        <meta name="robots" content="index, follow" />
      </Head>

      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <AboutMe />
          <TimeLine />
        </div>
        
        <SkillsMap />
        
        <div className="mt-16">
          <Projects />
        </div>
        
        <div className="mt-16 mb-16">
          <h3 className="text-2xl font-semibold text-primary-800 mb-8 text-center">
            Interactive Visualizations
            <div className="h-1 w-32 bg-primary-500 mx-auto mt-2 rounded-full"></div>
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
            <ArchitectureDiagram />
            <TestingWorkflow />
          </div>
          
          <div className="mt-10">
            <CICDPipeline />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
