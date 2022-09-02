import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
               <Image src="/ninja (1).png" width={90} height={70}/>
               <a><strong>NINJA LIST</strong></a>
            </div>
            <div className='links'>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/ninjas"><a>Ninja Listing</a></Link>
            </div>
            
        </nav>
    );
}
 
export default Navbar;