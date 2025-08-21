import React from 'react';
import { FiSend } from 'react-icons/fi'; // <-- Add this import line
import { motion } from 'framer-motion';

const Contact = () => {
    const slideIn = (direction, delay) => ({
        hidden: {
            x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
            y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
        },
        show: {
            x: 0,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 40,
                duration: 1.2,
                delay: delay,
            },
        },
    });

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
            <motion.div
                className="container mx-auto max-w-4xl p-8 bg-tertiary rounded-xl shadow-2xl"
                variants={slideIn('up', 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
            >
                <p className="text-secondary uppercase tracking-wider">Get in touch</p>
                <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-8 text-gradient">Contact.</h2>

                <form action="#" method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-secondary">Your Name</label>
                        <input type="text" name="name" id="name" required className="mt-1 block w-full bg-primary border-2 border-tertiary rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-accent-pink" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-secondary">Your Email</label>
                        <input type="email" name="email" id="email" required className="mt-1 block w-full bg-primary border-2 border-tertiary rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-accent-pink" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-secondary">Message</label>
                        <textarea id="message" name="message" rows="4" required className="mt-1 block w-full bg-primary border-2 border-tertiary rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-accent-pink"></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-md shadow-lg text-lg font-bold text-white bg-gradient-to-r from-accent-pink to-accent-cyan hover:from-pink-600 hover:to-cyan-500 focus:outline-none transition-all duration-300 transform hover:scale-105 hover:shadow-glow-pink"
                        >
                            Send Message <FiSend />
                        </button>
                    </div>
                </form>
            </motion.div>
        </section>
    );
};

export default Contact;