import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { isAuthenticated } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';

const Rootlayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if(!isUserAuthenticated) {
    redirect("/sign-in")
  } // auth logic of not authenticated or not , i have called this fucntions from actions and used basic if else and redirect next navigation to apply logic/
  return (
    <div className="root-layout">
      <nav>
        <Link href="/" className="flex items-center gap-2">
          <Image className="text-primry-100  bg-black/10  hover:shadow-green-500/30 hover:scale-105 hover:-translate-y-2" src="/logo.svg" alt="Logo" width={38} height={32} />
          <h2 className="">EzzHire</h2>
        </Link>
      </nav>
   
      {children}
    </div>
  );
};

export default Rootlayout;
