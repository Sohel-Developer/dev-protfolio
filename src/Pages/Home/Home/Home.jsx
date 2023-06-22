import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    return (
        <div className=" flex justify-between items-center md:h-[700px]">


            <div className='space-y-5'>
                <h4 className="text-xl">Hello I Am</h4>
                <h1 className="text-7xl">Sohel Rana</h1>
                <h6 className='text-[#e02f6b]'>
                    <TypeAnimation
                        preRenderFirstString={true}
                        sequence={[
                            500,
                            'MERN Stack Developer', // initially rendered starting point
                            1000,
                            'Curious Programmer',
                            1000,
                            'Photographer',
                            1000,
                        ]}
                        speed={50}
                        style={{ fontSize: '1.5em' }}
                        repeat={Infinity}
                    />
                </h6>
            </div>
            <div className="">
                <img className="rounded-full border-8 border-white" src="https://i.ibb.co/ChzVgMN/Sohel-Rana.png" alt="Sohel-Developer" />
            </div>


        </div>
    );
};

export default Home;