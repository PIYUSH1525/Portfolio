import { CheckCircle, Circle, Mail, MapPin, Phone, Send, SendIcon } from 'lucide-react'
import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)

        // Your EmailJS service ID, template id, and public key
        const serviceId = 'service_4qp5ekn'
        const templateId = 'template_rqd674n'
        const publicKey = 'eY3p7OQU0WdDXr5pB'

        // create an object that contains the params
        const templateParams = {
            from_name: name,
            to_name: 'Piyush',
            from_email: email,
            message: message,
        }

        // send the email
        emailjs.send(serviceId, templateId, templateParams, publicKey).then((response) => {
            console.log("Email send successfully", response);
            setIsSubmitted(true)
            setLoading(false)
            setName('')
            setEmail('')
            setMessage('')
        }).catch(error => {
            console.log("Error sending the email: ", error)
        })

    }

    return (
        <section id='contact' className='py-16'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-6 mt-5'>
                    <h2 className='flex justify-center items-center mb-4 text-3xl md:text-4xl font-bold'><Mail style={{ width: "2rem", height: '2rem' }} className='mr-4' />Get In Touch</h2>
                    <p className='px-4 mb-4 text-slate-600 dark:text-slate-200/80 text-sm sm:text-lg md:text-xl'>I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.</p>
                </div>

                <div className='grid lg:grid-cols-2 gap-16 items-center'>

                    <div className='mx-5'>
                        <div className='mx-5'>
                            <h3 className='text-2xl font-bold mb-4'>
                                Let's Connect
                            </h3>
                            <p className='text-lg text-slate-600 dark:text-slate-200/80  leading-relaxed mb-8'>
                                I'm always excited to discuss new opportunities, collaborate on interesting projects, or simply chat about technology and development.
                            </p>
                        </div>
                        <div className='space-y-6'>

                            {/* <div className="group flex items-center space-x-4 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border  text-slate-600 dark:text-slate-200/80 ">
                                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-sm group-hover:shadow-md transition-shadow">
                                    <Mail className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold  mb-1">Email</h4>
                                    <p className="">negipiyush125@gmail.com</p>
                                    <p className="text-sm mt-1">Best for detailed discussions</p>
                                </div>
                            </div> */}
                            <div className="group flex items-center space-x-4 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border text-slate-600 dark:text-slate-200/80">
                                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 shadow-sm group-hover:shadow-md transition-shadow">
                                    <Phone className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Phone</h4>
                                    <p className="">+91 8126713017</p>
                                    <p className="text-sm mt-1">Available 9 AM - 6 PM IST</p>
                                </div>
                            </div>

                            <div className="group flex items-center space-x-4 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border  text-slate-600 dark:text-slate-200/80">
                                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600 shadow-sm group-hover:shadow-md transition-shadow">
                                    <MapPin className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Location</h4>
                                    <p>Dehradun, Uttarakhand</p>
                                    <p className="text-sm mt-1">Open to remote opportunities</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='lg:sticky lg:top-8 p-4'>
                        <Card className="shadow-xl border-0 backdrop-blur-sm">
                            <CardHeader className="pb-6">
                                <CardTitle className="text-2xl font-bold flex items-center">
                                    <Send className="mr-3 h-6 w-6" />
                                    Send Me a Message
                                </CardTitle>
                                <p className="text-slate-600 dark:text-slate-200/80">Fill out the form below and I'll get back to you within 24 hours.</p>
                            </CardHeader>
                            <CardContent>
                                {isSubmitted ? (
                                    <div className='text-center py-12'>
                                        <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6'>
                                            <CheckCircle className='h-8 w-8 text-green-600' />
                                        </div>
                                        <h3 className='text-2xl font-bold text-gray-00 mb-2'>Message Sent!</h3>
                                        <p>Thank you for reaching out. I'll get back to you soon.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="block text-sm font-medium text-slate-600 dark:text-slate-200/80">
                                                Full Name
                                            </label>
                                            <Input
                                                id="name"
                                                placeholder="Shree Anam"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                                className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="email" className="block text-sm font-medium text-slate-600 dark:text-slate-200/80">
                                                Email Address
                                            </label>
                                            <Input
                                                id="email"
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="email@example.com"
                                                required
                                                className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="message" className="block text-sm font-medium text-slate-600 dark:text-slate-200/80">
                                                Message
                                            </label>
                                            <Textarea
                                                id="message"
                                                placeholder="Write your message here..."
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                rows={5}
                                                required
                                                className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                                        >
                                            {loading ? (
                                                <>
                                                    <Circle className='mr-1 h-4 w-4 animate-spin' />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <SendIcon className="mr-2 h-4 w-4" />
                                                    Send Message
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>

            </div>
        </section >
    )
}

export default Contact