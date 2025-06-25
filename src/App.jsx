import React from 'react'
import MyDock from './MyComponents/MyDock'
import Footer from './MyComponents/Footer'
import Header from './MyComponents/Header'
import Hero from './MyComponents/Hero'
import About from './MyComponents/About'
import { ScrollProgress } from './components/magicui/scroll-progress'
import Experience from './MyComponents/Experience'
import Projects from './MyComponents/Projects'
import Blogs from './MyComponents/Blogs'
import Contact from './MyComponents/Contact'

const App = () => {
  return (
    <>
      <Header />
      <ScrollProgress className='top-16' />
      <Hero />
      <About />
      {/* <Experience/> */}
      <Projects />
      <Blogs />
      <Contact />
      <Footer />
      <div className='fixed bottom-4 left-1/2 transform -translate-x-1/2 '><MyDock /></div>
    </>
  )
}

export default App