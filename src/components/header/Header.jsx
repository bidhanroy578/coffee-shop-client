import { useContext, useState } from 'react';
import logo from './../../assets/images/more/logo1.png'
import { AuthContext } from '../../context_provider/AuthContext';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router';
const Header = () => {

    const [show, setShow] = useState(false)
    const { user, logout } = useContext(AuthContext)
    const handleLogout = () => {
        logout()
    }
    return (
        <div className=' h-[15vh] flex gap-4 justify-center items-center bg-[#372727] text-white font-rancho text-3xl md:text-6xl'>
            <img src={logo} className='h-full' /> <h3>Espresso Emporium</h3>
            <div className='relative'>
                <CgProfile onClick={() => setShow(!show)} className='md:text-4xl hover:scale-105 cursor-pointer active:scale-95 transition-transform' />
                <div className={`absolute right-0 p-10 z-50 bg-[#372727]/70 space-y-3 ${show || 'hidden'} text-end`}>
                    {
                        user ?
                            <button onClick={()=> {handleLogout() ; setShow(!show)}} className='btn btn-sm'>Logout</button>
                            :
                            <><Link to='/login' onClick={()=> setShow(!show)} className='btn btn-sm'>Login</Link>
                                <Link to='/register' onClick={()=> setShow(!show)} className='btn btn-sm'>Register</Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;