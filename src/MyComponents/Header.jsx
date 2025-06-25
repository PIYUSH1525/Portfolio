
import { ShineBorder } from '@/components/magicui/shine-border'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/utils/darkThemeProvider'
import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
    };

    const { resolvedTheme } = useTheme();


    return (
        <nav className='fixed top-0 w-full backdrop-blur-md z-50'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='flex justify-between items-center h-16'>
                    {/* logo */}
                    <div>
                        <span className="text-2xl font-bold text-slate-800 dark:text-slate-200">Portfolio</span>
                    </div>

                    {/* navigation links */}
                    <div className='hidden md:flex items-center space-x-8'>
                        <Button variant='ghost' onClick={() => scrollToSection("home")} className='px-4 py-2 text-slate-600 dark:text-slate-200 cursor-pointer'>
                            Home
                        </Button>
                        <Button variant='ghost' onClick={() => scrollToSection("about")} className='px-4 py-2 text-slate-600 dark:text-slate-200 cursor-pointer'>
                            About
                        </Button>
                        {/* <Button variant='ghost' onClick={() => scrollToSection("experience")} className='px-4 py-2 text-slate-600 dark:text-slate-200 cursor-pointer'>
                            Experience
                        </Button> */}
                        <Button variant='ghost' onClick={() => scrollToSection("projects")} className='px-4 py-2 text-slate-600 dark:text-slate-200 cursor-pointer'>
                            Projects
                        </Button>
                        <Button variant='ghost' onClick={() => scrollToSection("blogs")} className='px-4 py-2 text-slate-600 dark:text-slate-200 cursor-pointer'>
                            Certifications
                        </Button>
                        <Button variant='ghost' onClick={() => scrollToSection("contact")} className='px-4 py-2 text-slate-600 dark:text-slate-200 cursor-pointer'>
                            Contact
                        </Button>
                        <Button variant='ghost' className='relative cursor-pointer rounded-md'>
                            <ShineBorder shineColor={'green'} borderWidth={1} />
                            <a href="https://drive.google.com/file/d/1wLZyGPdNXdMzL6GTS2y4cLXlkhe5KWLL/view?usp=sharing" target="__blacnk">Resume</a>
                        </Button>
                    </div>
                    {/* mobile view button  */}
                    <div className='md:hidden'>
                        <Button variant='outline' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X style={{ width: '1.5rem', height: '1.5rem' }} /> : <Menu style={{ width: '1.5rem', height: '1.5rem' }} />}
                        </Button>
                    </div>
                </div>

                {/* mobile navigation  */}
                {isMenuOpen && (
                    <div className='md:hidden py-4 border-t border-slate-200'>
                        <div className='flex flex-col space-y-2'>
                            <Button variant='secondary' onClick={() => scrollToSection("home")} className='text-left px-4 py-2 cursor-pointer'>
                                Home
                            </Button>
                            <Button variant='secondary' onClick={() => scrollToSection("about")} className='text-left px-4 py-2 cursor-pointer'>
                                About
                            </Button>
                            {/* <Button variant='secondary' onClick={() => scrollToSection("experience")} className='text-left px-4 py-2 cursor-pointer'>
                                Experience
                            </Button> */}
                            <Button variant='secondary' onClick={() => scrollToSection("projects")} className='text-left px-4 py-2 cursor-pointer'>
                                Projects
                            </Button>
                            <Button variant='secondary' onClick={() => scrollToSection("blogs")} className='text-left px-4 py-2 cursor-pointer'>
                                Blogs
                            </Button>
                            <Button variant='secondary' onClick={() => scrollToSection("contact")} className='text-left px-4 py-2 cursor-pointer'>
                                Contact
                            </Button>
                            {/* <Button variant='secondary' className='relative text-left px-4 py-2 cursor-pointer'>
                                <ShineBorder shineColor={resolvedTheme === "dark" ? "white" : "black"} borderWidth={2} />
                                <a href="https://drive.google.com/file/d/1wLZyGPdNXdMzL6GTS2y4cLXlkhe5KWLL/view?usp=sharing" target="__blank">Resume</a>
                            </Button> */}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Header