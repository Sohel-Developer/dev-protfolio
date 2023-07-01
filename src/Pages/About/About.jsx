
import aboutImg from "../../assets/about-img.png"

const About = () => {
    return (
        <div className="md:flex   items-center justify-between">
            <div className="About__img w-full">
                <img className="w-full" src={aboutImg} alt="" />
            </div>
            <div className=" w-full md:w-1/2">
                <div className="space-y-2 mb-5">
                    <h2 className="text-xl uppercase font-serif font-bold">About ME</h2>
                    <p className="text-justify">I am a Front End developer with industry experience building websites and web applications. I specialize in JavaScript and have professional experience working with React JS. I also have experience working with Vue, React-native. Take a look at my work or get in touch!</p>
                </div>

                <div className="space-y-2 mb-5">
                    <h2 className="text-xl uppercase font-serif font-bold"> &lt; Education. /&gt;</h2>
                    <p>Degree Of Bachelor of Social Science (B.S.S.)  Present</p>
                    <p> Govt. Debendra College, Manikganj</p>
                </div>

                <div>
                    <h2 className="text-xl mb-2 uppercase font-serif font-bold"> &lt; Expreance. /&gt;</h2>
                    <div className="space-y-2 mb-5">
                        <h3>Programming Hero-- Web Development</h3>
                        <p>Dedication And Hard Working Student.</p>
                    </div>
                    <div className="space-y-2 mb-5">
                        <h3>LWS-Think In A Redux Way</h3>
                        <p>Dedication And Hard Working Student.</p>
                    </div>
                    <h2 className="text-2xl uppercase  font-bold"> &lt; Self-Learner. /&gt;</h2>

                </div>

            </div>
        </div>
    );
};

export default About;