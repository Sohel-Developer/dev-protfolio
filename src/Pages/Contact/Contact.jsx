import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <div className=' flex   items-center h-[700px] justify-around'>
            <form className="flex w-[400px] flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        placeholder="name@flowbite.com"
                        required
                        type="email"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        required
                        type="password"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">
                        Remember me
                    </Label>
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
                    <FaFacebook />
                </div>
            </div>
        </div>
    );
};

export default Contact;