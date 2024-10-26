'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DeviceListPage(){

       const [devicedata, setData] = useState('');       

	const devices = [
		{ modelname: 'iR-ADV C5801', status: 30001, serialnumber: '80002453' },
		{ modelname: 'iR-ADV C5802', status:     0, serialnumber: '80002454' },
		{ modelname: 'iR-ADV C5803', status: 10001, serialnumber: '80002455' },
		{ modelname: 'iR-ADV C5804', status: 40002, serialnumber: '80002456' },
		{ modelname: 'iR-ADV C5805', status: 10002, serialnumber: '80002457' },		
	];


	async function getData(){
            const res = await fetch("/api/getdevice");
            const data = await res.json();
            setData(data.modelname);
	}


	return (
              <div>
		<h1>Device List</h1>
		<hr />
		<ul>
			{ devices.map( (obj) => (<li key={obj.serialnumber}>{obj.modelname}    {obj.serialnumber}    {obj.status} <Link href="/devicedetail">...</Link></li>) ) }
		</ul>
		<p />
		<hr />
		<h2>{devicedata}</h2>
		<button className="w3-button w3-gray w3-right" onClick={getData}>get</button>
		<br />
		<hr />
		<Link className="w3-button w3-black w3-section w3-right" href="/">Back</Link>
              </div>
	);
}
