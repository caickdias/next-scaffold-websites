import Logo from '../Logo';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {

    return(
        <div className="flex p-2 justify-between h-24 w-full bg-gray-300">

            <div className='flex flex-1'>
                <Logo />            
            </div>
            
            <div className='flex items-center justify-end pr-4 flex-1'>
                <GiHamburgerMenu 
                    size={40}
                    fill="blue"
                />
            </div>

        </div>
    )
}

export default Navbar;