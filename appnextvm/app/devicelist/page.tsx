'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function DeviceListPage(){

//       const [devicedata, setData] = useState({modelname: 'initial data'});
       const [devicedata, setData] = useState('');       

/*
       useEffect(()=>{
              fetch('api/getdevice')
		.then((res) => res.json())
		.then((profile) => {setData(profile)} )
		.catch((e) => { console.log(e); } )
       },[]);
*/

	async function getData(){
	    const res = await fetch("/api/getdevice");
    	    const data = await res.json();
    	    setData(data.modelname);
	};

	return (
              <div>
		<h1>This is devicelist page.</h1>
		<h2>{devicedata}</h2>
		<p />
		<button onClick={getData}>get</button>
		<Link href="/">Back</Link>
	      </div>
	);
};
