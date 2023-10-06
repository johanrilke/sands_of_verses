'use client';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect} from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {

    const isUserLoggedIn = true;

  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flex gap-2 flex-center">
            <Image 
                src="/assets/images/logo.svg"
                alt="Logo"
                width={30}
                height={30}
                className="object-contain"
                >    
            </Image>
            <p className="logo_text">Promptopia</p>
        </Link>

        {/* Mobile Navigation */}
        <div className="sm:flex hidden">
            {isUserLoggedIn ? (
                <div></div>
            ) : (
                <>
                </>
            )}
        </div>
    </nav>
  )
}

export default Nav