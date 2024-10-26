'use client';

import { useState } from 'react';
import Link from 'next/link';
import "../globals.css";

export default function TripToUSAPage(){

       const [devicedata, setData] = useState('');       

	async function getData(){
           const res = await fetch("/api/getdevice");
           const data = await res.json();
           setData(data.modelname);
	}

	return (
              <div className="bg-white">
		<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">The United State</h1>
		<h2>{devicedata}</h2>
		<p />
		<button className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" onClick={getData}>get</button>
		<button className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Laguna Beach</button>
		<p />
		<Link href="/" className="rounded-md bg-gray-300 px-3.5 py-2.5 text-sm font-semibold leading-6 text-gray-900">Back</Link>
              </div>
	);
}
