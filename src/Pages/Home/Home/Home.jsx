import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    return (
        <div className=" md:flex justify-evenly items-center md:h-[600px]">


            <div className='space-y-5'>
                <h4 className="text-xl font-bold">Hello, I Am</h4>
                <h1 className="text-7xl">Sohel Rana</h1>
                {/* <p className='text-xl'>A passionate web developer from <span className='font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500  to-pink-500'> Bangladesh. </span></p> */}
                <p className='text-xl '>A passionate web developer from Bangladesh.</p>
                <h6 className='text-animation'>
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
                    />_
                </h6>
            </div>
            <div className="">
                <img className="rounded-full border-8 border-white" src="https://i.ibb.co/ChzVgMN/Sohel-Rana.png" alt="Sohel-Developer" />
            </div>


        </div>
    );
};

export default Home;