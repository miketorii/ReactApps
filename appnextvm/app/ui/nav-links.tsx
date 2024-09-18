'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function NavLinks() {
       const pathname = usePathname();

       return (
       	      <div className="w3-bar w3-black w3-card">
       	      <nav>
		<Link className={`link ${pathname === '/' ? 'active' : ''} w3-bar-item`} href="/">
		      Home
		</Link>
		<p/>
		<Link className={`link ${pathname === '/dashboard' ? 'active' : ''} w3-bar-item`} href="/dashboard">
		      Dashboard
		</Link>
		<p/>
		<Link className={`link ${pathname === '/devicelist' ? 'active' : ''} w3-bar-item`} href="/devicelist">
		      DeviceList
		</Link>
		<p/>
		<Link className={`link ${pathname === '/usa' ? 'active' : ''} w3-bar-item`} href="/usa">
		      USA
		</Link>		
	      </nav>
	      </div>
       );
};
