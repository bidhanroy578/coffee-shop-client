import bg from './../../assets/images/more/3.png';
const Hero = () => {
    return (
        <div className="grid md:grid-cols-2 items-center min-h-[85vh] bg-cover bg-bottom text-white" style={{ backgroundImage: `url(${bg})` }}>
            <div></div>
            <div className='space-y-5'>
                <h3 className='font-rancho text-5xl'>Would you like a Cup of Delicious Coffee?</h3>
                <p className=' font-raleway'>It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='btn hover:bg-transparent bg-[#E3B577] font-rancho text-2xl hover:text-white'>Learn More</button>
            </div>
        </div>
    );
};

export default Hero;