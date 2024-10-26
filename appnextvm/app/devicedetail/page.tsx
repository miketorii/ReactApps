'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import iRADVC5800Img from '../../images/iR-ADV.jpg';

export default function Page(){

       const [devicedata, setData] = useState({modelname:"",serialnumber:"",status:""});
       
       async function getDeviceDetail(){
            const res = await fetch("/api/getdevicedetail");
            const data = await res.json();
            setData({modelname: data.modelname, serialnumber: data.serialnumber, status: data.status});
       }

       return (
        <div className="w3-container w3-gray">
              <h1>This is device detail page.</h1>
              <Image src={iRADVC5800Img} alt="iR-ADV C5800" width={200} height={150}/>
              <p />
              <div className="w3-container w3-white">
              <table className="w3-table w3-striped w3-bordered">
                <tbody>
                <tr>
                  <td>Model Name</td>
                  <td>{devicedata.modelname}</td>
                </tr>
                <tr>
                  <td>Serial Number</td>	      
                <td>{devicedata.serialnumber}</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>{devicedata.status}</td>
                </tr>
              </tbody>
              </table>
              </div>
              <button onClick={getDeviceDetail}>get</button>
              <br />
              <hr />
              <Link href="/devicelist">
                  <button className="w3-button w3-black w3-section w3-right">Back</button>
              </Link>
              </div>
       );
}
