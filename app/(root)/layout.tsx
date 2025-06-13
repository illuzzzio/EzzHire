import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Rootlayout = ({ children }: { children: ReactNode }) => {
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
