'use client';

import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const H1 = styled.h1`
      color: gray;
`

const Badge = styled.span`
      padding: 8px, 16px;
      font-weight: bold;
      text-align:  center;
      color:	   white;
      background:  gray;
      border-radius:	2px;
`
type ButtonProps = {
     color: string,
     backgroundColor: string
};

const Button = styled.button<ButtonProps>`
      color: ${(props) => props.color};
      background: ${(props) => props.backgroundColor};
      border: 2px solid ${(props) => props.color};

      font-size: 1em;
      margin:	 1em;
      padding: 0.25em 1em;
      border-radius: 8px;
      cursor: pointer;
`

export default function NetherlandsPage(){

       const [devicedata, setData] = useState('');       

/*
       useEffect(()=>{
              fetch('api/getdevice')
		.then((res) => res.json())
		.then((profile) => {setData(profile)} )
		.catch((e) => { console.log(e); } )
       },[]);
*/
	let devices = [
		{ modelname: 'Breda Castle', status: 30001, serialnumber: '80002453' },
		{ modelname: 'Leiden', status:     0, serialnumber: '80002454' },
		{ modelname: 'Fredrik Hendrik', status: 10001, serialnumber: '80002455' },
		{ modelname: 'Johannes Vermeer', status: 40002, serialnumber: '80002456' },
		{ modelname: 'Delft', status: 10002, serialnumber: '80002457' },		
	];


	async function getData(){
	    const res = await fetch("/api/getdevice");
    	    const data = await res.json();
    	    setData(data.modelname);
	};

	return (
              <div>

		<H1>Styled Components Test</H1>
		<h2>{devicedata}</h2>
		<p />
		<Badge>List of Netherlands</Badge>
		<p />
		<ul>
			{ devices.map( (obj) => (<li>{obj.modelname}    {obj.status} <Link href="/devicedetail">...</Link></li>) ) }
		</ul>
		<p />
		<Button backgroundColor="#1E90FF" color="white">Detail</Button>
		<Button backgroundColor="transparent" color="#FF0000">More</Button>
		<p />
		<button onClick={getData}>get</button>
		<p />
		<Link href="/">Back</Link>
	      </div>
	);
};
