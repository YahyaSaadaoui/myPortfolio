import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
};

const ContactForm = () => {
    const form = useRef<HTMLFormElement>(null);
    const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm('service_61httok', 'template_t5o5gfq', form.current, {
                    publicKey: 'ymojjwn_BL8fZ7sS_',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        setIsSuccess(true);
                        setTimeout(() => {
                            setIsSuccess(null);
                        }, 3000);
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                        setIsSuccess(false);
                        setTimeout(() => {
                            setIsSuccess(null);
                        }, 2000);
                    }
                );
        }
    };

    return (
        <motion.div variants={fadeInUp}>
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-8">
                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                            <Input
                                name="user_name"
                                placeholder="Name"
                                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                            />
                            <Input
                                name="user_email"
                                type="email"
                                placeholder="Email"
                                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                            />
                        </div>
                        <Textarea
                            name="message"
                            placeholder="Message"
                            rows={6}
                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        />
                        <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200 transition-colors duration-300">
                            Send Message
                        </Button>
                        {isSuccess === true && <p className="text-green-500">Email sent successfully!</p>}
                        {isSuccess === false && <p className="text-red-500">Failed to send email. Please try again.</p>}
                    </form>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default ContactForm;
