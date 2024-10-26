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

		<div className="w3-dropdown-hover w3-hide-small">
		<button className="w3-button" title="Notifications">Dropdown <i className="fa fa-caret-down"></i></button>
			<div className="w3-dropdown-content w3-card-4 w3-bar-block">
                            <Link className={`link ${pathname === '/usa' ? 'active' : ''} w3-bar-item`} href="/tailwindpage">Tailwind</Link>
                            <Link className={`link ${pathname === '/usa' ? 'active' : ''} w3-bar-item`} href="/styledcomppage">Styled Component</Link>
			</div>
		</div>

              </nav>
              </div>
       );
}
