import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = ({ isDarkMode }) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <div className={`text-2xl font-bold mb-2 ${
          isDarkMode ? 'text-white' : 'text-black'
        }`}>
          Ankush B Shetty<span className="text-pink-600">.</span>
        </div>

        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt='Email Icon'
            className='w-6'
          />
          ankushshetty528@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Ankush B Shetty. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li>
            <a target='_blank' rel='noopener noreferrer' href="https://github.com/Ankush25-anku" className='flex items-center gap-2'>
              <FaGithub className='text-xl' />
              GitHub
            </a>
          </li>
          <li>
            <a target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/ankush-shetty-133541302" className='flex items-center gap-2'>
              <FaLinkedin className='text-xl text-[#0A66C2]' />
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
