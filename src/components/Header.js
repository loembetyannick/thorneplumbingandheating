import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='bg-white border-2 flex flex-row justify-between item-center'>
        <Link href='/'>
          <Image
            src="/tphlogo.png"
            alt="TPH Logo"
            width={100}
            height={100}
          />
        </Link>
        <div className='flex justify-between items-center'>
            <Link href='/'>
              <p className='pr-4 text-lg text-[#00000050]'>Home</p>
            </Link>
            <Link href='/contact'>
            <p className='pr-4 text-lg text-[#00000050]'>Contact</p>
            </Link>
        </div>
    </div>
  )
}

export default Header