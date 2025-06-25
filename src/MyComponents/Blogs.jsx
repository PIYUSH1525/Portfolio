import { ShineBorder } from "@/components/magicui/shine-border"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useTheme } from "@/utils/darkThemeProvider"
import { ArrowRight, BookOpen, Calendar, Clock,ShieldCheck } from 'lucide-react'
import React from 'react'

const Blogs = () => {

    const { resolvedTheme } = useTheme();

    const blogs = [
        {
            title: ' IBM Data Analyst',
            description: 'This certification validates hands-on experience in analyzing real-world data using Excel, SQL and Python  —equipping me with the skills to manipulate data, create dashboards, and present insights for real-world scenarios.',
            image: 'https://assets.showwcase.com/1420x/gallery/newimage7.jpeg?type=webp',
            alt: 'IBM Data Analyst',
            date: ' June 22, 2025',
            link: 'https://www.coursera.org/account/accomplishments/professional-cert/UPMKLAYT11CW',
            featured: true,
        },
        {
            title: 'Google Data Analytics Professional Certificate',
            description: 'This certification covers the full data analytics lifecycle— leaning, analyzing, and visualizing data using SQL, R, spreadsheets, and Tableau—equipping me with real-world, job-ready skills through hands-on projects and structured thinking.',
            image: 'https://i.ytimg.com/vi/HZcwkWlspNA/hqdefault.jpg',
            alt: 'Data Analytics',
            date: 'May 22, 2024',
            link: 'https://www.credly.com/go/kgMjfghq',
            featured: true,
        },
        {
            title: 'Meta Back-End Developer',
            description: 'This Meta certification equipped me with the core skills of back-end development, including Python, SQL, Git, APIs, and Django. Through hands-on projects and interview prep, I built a solid foundation in building, testing, and deploying server-side applications with confidence.',
            image: 'https://t3.ftcdn.net/jpg/09/88/46/76/360_F_988467690_lyHlPgcyf7dr9Mrtfu0jN2colRpE2sG2.jpg',
            alt: 'Meta Back-End',
            date: 'January 09, 2025',
            link: 'https://www.coursera.org/account/accomplishments/professional-cert/CEG0YTN2FO9V',
            featured: true,
        },

    ]

    return (
        <section id='blogs' className='py-16'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-12 mt-5'>
                    <h2 className='flex justify-center items-center mb-4 text-3xl md:text-4xl font-bold'><ShieldCheck style={{ width: "2rem", height: '2rem' }} className='mr-4' />My Certifications</h2>
                    <p className='px-4 mb-4 text-slate-600 dark:text-slate-200/80 text-sm sm:text-lg md:text-xl'>A glimpse into my continuous learning journey across technology and development.<br /> Each badge tells a story—from building user interfaces and mastering backend logic to exploring DevOps and data insights.</p>
                </div>
                <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4'>
                    {blogs.map((blog, index) => (
                        <Card key={index} className='group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm border-0 shadow-lg'>
                            {blog.featured && (
                                <ShineBorder shineColor={resolvedTheme === "dark" ? "green" : "black"} borderWidth={2} />
                            )}
                            <img src={blog.image} alt={blog.alt} className='w-[90%] mx-auto rounded-lg h-48 object-cover transition-transform duration-500 group-hover:scale-110' />
                            <CardHeader>
                                <div className='flex items-center justify-between mb-3'>
                                    <div className='flex items-center space-x-4 text-gray-500 text-sm'>
                                        <div className='flex items-center'>
                                            <Calendar className='h-4 w-4 mr-1' />
                                            {blog.date}
                                        </div>
                                        {/* <div className='flex items-center'>
                                            <Clock className='h-4 w-4 mr-1' />
                                            {blog.readTime} min read
                                        </div> */}
                                    </div>
                                </div>
                                <CardTitle className='text-xl font-bold group-hover:text-green-600 transition-colors duration-300 leading-tight'>
                                    {blog.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className='pt-0'>
                                <p className='text-gray-600 mb-6 leading-relaxed'>{blog.description}</p>
                                <Button variant='ghost' className='p-0 h-auto hover:text-green-600 group/button font-semibold'>
                                    <a href={blog.link} target="__blank" className="flex items-center">
                                        See Credential
                                        <ArrowRight className='ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform duration-300' />
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blogs