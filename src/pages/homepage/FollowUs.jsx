import photo9 from './../../assets/images/cups/Rectangle 9.png'
import photo10 from './../../assets/images/cups/Rectangle 10.png'
import phot11 from './../../assets/images/cups/Rectangle 11.png'
import photo12 from './../../assets/images/cups/Rectangle 12.png'
import photo13 from './../../assets/images/cups/Rectangle 13.png'
import photo14 from './../../assets/images/cups/Rectangle 14.png'
import photo15 from './../../assets/images/cups/Rectangle 15.png'
import photo16 from './../../assets/images/cups/Rectangle 16.png'


const FollowUs = () => {
    return (
        <div className=" text-center content-center mt-12">
            <h6>Follow Us Now</h6>
            <h3 className=" font-rancho text-5xl">Follow on Instagram</h3>
            <div className="min-h-[60vh] grid grid-cols-2 md:grid-cols-4 gap-4 justify-self-center my-10">
                <img className='hover:outline-4 rounded-xl outline-blue-500 w-60 h-72 object-cover' src={photo9} alt="" />
                <img className='hover:outline-4 rounded-xl outline-blue-500 w-60 h-72 object-cover' src={photo10} alt="" />
                <img className='hover:outline-4 rounded-xl outline-blue-500 w-60 h-72 object-cover' src={phot11} alt="" />
                <img className='hover:outline-4 rounded-xl outline-blue-500 w-60 h-72 object-cover' src={photo12} alt="" />
                <img className='hover:outline-4 rounded-xl outline-blue-500 w-60 h-72 object-cover' src={photo13} alt="" />
                <img className='hover:outline-4 rounded-xl outline-blue-500 w-60 h-72 object-cover' src={photo14} alt="" />
                <img className='hover:outline-4 rounded-xl outline-blue-500 w-60 h-72 object-cover' src={photo15} alt="" />
                <img className='hover:outline-4 rounded-xl outline-blue-500 w-60 h-72 object-cover' src={photo16} alt="" />

            </div>
        </div>
    );
};

export default FollowUs;