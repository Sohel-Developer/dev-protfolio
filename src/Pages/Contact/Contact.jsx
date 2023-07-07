import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
    return (
        <div className=' flex   items-center h-[700px] justify-around'>
            <form className="flex w-[400px] flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name"
                            value="Your Name"
                        />
                    </div>
                    <TextInput
                        id="name"
                        placeholder="Your Name"
                        required
                        type="text"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        placeholder="Your Email"
                        required
                        type="email"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="message"
                            value="Your Message"
                        />
                    </div>
                    <Textarea
                        id="message"
                        required
                        type="Your Message"
                    />
                </div>

                <Button type="submit">
                    Submit
                </Button>
            </form>

            <div className=' space-y-5 '>
                <div>
                    <h2>Email</h2>
                    <p>sohel.webdevoloper@gmail.com</p>
                </div>

                <div>
                    <h2>Phone</h2>
                    <p>+880-1959-132603</p>
                </div>


                <div>
                    <h2>Follow Me</h2>
                    <div className='flex items-center space-x-4 my-2'>

                        <a href="https://www.facebook.com/Sohel.webdevoloper/"><FaFacebook /></a>
                        <a href="https://github.com/Sohel-Developer"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/sohel-developer/"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;