import React, { lazy } from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ShineBorder } from '@/components/magicui/shine-border'
import { useTheme } from '@/utils/darkThemeProvider'
import { Button } from '@/components/ui/button'
import { ExternalLink, FolderOpen, Github } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const Projects = () => {

    const { resolvedTheme } = useTheme()

    const projects = [
        {
            title: 'Web LLM Chat Application',
            description: 'Offline AI chat application built with React, Vite and using Ollama and browser-based model caching.',
            fullDescription: 'Offline AI chat platform built with React, Vite, and WebLLM. Features include local model use via Ollama, browser caching, and a private, serverless user experience.',
            image: 'https://stream-blog-v2.imgix.net/blog/wp-content/uploads/ad893047d8b281e4f5126845408bac77/Blog-ReactAIChatApp-2400x1350px.jpg?auto=format&auto=compress',
            alt: 'Web LLM',
            technologies: ['React', 'JavaScript', 'Node.js', 'CSS', 'HTML', 'Vite' ,'WebLLM'],
            github: 'https://github.com/PIYUSH1525/LLM-Browser',
            live: 'https://github.com/PIYUSH1525/LLM-Browser',
            featured: true,
        },
        {
            title: 'Jarvis AI',
            description: 'Voice-powered AI assistant built with Python, TensorFlow, and speech libraries for dynamic task automation.',
            fullDescription: 'Voice-activated AI assistant built with Python, TensorFlow, and speech libraries. Features include dynamic task automation, personalized greetings, system monitoring, natural language understanding, and real-time voice interaction.',
            image: 'https://ej8q9x7d9n3.exactdn.com/blog/wp-content/uploads/2021/09/Create-an-engaging-email-sequence-with-Jarvis-ai-2.jpg?strip=all&lossy=1&ssl=1',
            alt: 'next-finance-img',
            technologies: ['Python', 'Numpy', 'Speech Recognition'],
            github: 'https://github.com/PIYUSH1525/Jarvis-AI-',
            live: 'https://github.com/PIYUSH1525/Jarvis-AI-',
            featured: true,
        },
        {
            title: 'Job Serach',
            description: 'Full-stack job search platform built with the MERN stack and MongoDB. Features role-based access and Cloudinary.',
            fullDescription: 'Full-stack job search platform built with the MERN stack. Features include role-based access, recruiter and applicant dashboards, resume uploads, job filtering, and optimized performance for a seamless hiring experience.',
            image: 'https://resources.biginterview.com/wp-content/uploads/2022/12/The-Top-50-Best-Job-Search-Sites-You-Need-to-Know-About-800x447.jpg',
            alt: 'Job-img',
            technologies: ['React', 'Express.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
            github: 'https://github.com/PIYUSH1525/JOB-SEARCH',
            live: 'https://github.com/PIYUSH1525/JOB-SEARCH',
            featured: true,
        }
        
    ]
    return (
        <section id='projects' className='py-16'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-12 mt-5'>
                    <h2 className='flex justify-center items-center mb-4 text-3xl md:text-4xl font-bold'><FolderOpen style={{ width: "2rem", height: '2rem' }} className='mr-4' />My Projects</h2>
                    <p className='px-4 mb-4 text-slate-600 dark:text-slate-200/80 text-sm sm:text-lg md:text-xl'>Here are some of my recent projects that showcase my skills in full-stack development</p>
                </div>

                <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4'>
                    {projects.map((project) => (
                        <Card key={project.title} className='group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm border-0 shadow-lg'>
                            {project.featured && (
                                <ShineBorder shineColor={resolvedTheme === "dark" ? "green" : "black"} borderWidth={2} />
                            )}
                            <CardHeader>
                                <CardTitle className='text-xl group-hover:text-green-600 transition-colors duration-300 leading-tight'>{project.title}</CardTitle>
                                <CardDescription className='text-sm'>{project.description}</CardDescription>
                                <CardAction>
                                    <Button variant='ghost' size='icon'>
                                        <a href={project.github} target='__blank'>
                                            <Github style={{ width: '1.2rem', height: '1.2rem' }} />
                                        </a>
                                    </Button>
                                    <Button variant='ghost' size='icon'>
                                        <a href={project.live} target='__blank'>
                                            <ExternalLink style={{ width: '1.2rem', height: '1.2rem' }} />
                                        </a>
                                    </Button>
                                </CardAction>
                            </CardHeader>
                            <CardContent className='relative w-full'>
                                <img className="rounded-md w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105" src={project.image} alt={project.alt} loading="lazy" />

                            </CardContent>
                            <CardFooter className='overflow-x-scroll scrollbar-hide gap-1 mr-5'>
                                {project.technologies.map((tech, index) => (
                                    <Badge key={index} variant='outline'>{tech}</Badge>
                                ))}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects