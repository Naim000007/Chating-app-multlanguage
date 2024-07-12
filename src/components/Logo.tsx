import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../../public/next.svg"

const Logo = () => {
  return (
    <Link href="/" prefetch={false} className='overflow-hidden'>
        <div className='flex items-center w-72 h-14'>
            <AspectRatio
            ratio={16/9}
            className='flex items-center justify-center'>
                {/* <Image
                priority
                src={logo}
                className='rounded-full dark:filter dark:invert'
                alt='logo'/> */}
                <b>multi chat</b>
            </AspectRatio>
        </div>
    </Link>
  )
}

export default Logo