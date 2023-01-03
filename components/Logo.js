import logo from '../assets/logo.png';
import Image from 'next/image';

const Logo = () => {
    return(
        
        <div>
            <Image 
                src={logo}
                alt='logo alt'                   
                className='h-full'
            />   
        </div>     
    )
}

export default Logo;