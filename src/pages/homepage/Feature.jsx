import i1 from './../../assets/images/icons/1.png';
import i2 from './../../assets/images/icons/2.png';
import i3 from './../../assets/images/icons/3.png';
import i4 from './../../assets/images/icons/4.png';
const Feature = () => {
    const features = [
        { id: 1, name: 'Awesome Aroma', image: i1, description: 'You will definitely be a fan of the design & aroma of your coffee' },
        { id: 2, name: 'High Quality', image: i2, description: 'We served the coffee to you maintaining the best quality' },
        { id: 3, name: 'Pure Grades', image: i3, description: 'The coffee is made of the green coffee beans which you will love' },
        { id: 4, name: 'Proper Roasting', image: i4, description: 'Your coffee is brewed by first roasting the green coffee beans' }
    ]
    return (
        <div className='flex flex-col md:flex-row gap-4 bg-[#eceae3] p-10 w-full justify-center'>
            {
                features.map((feature, index) => (
                    <div key={index} className='space-y-3'>
                        <img src={feature.image} className='w-12'/>
                        <h3 className='text-2xl font-semibold font-rancho'>{feature.name}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default Feature;