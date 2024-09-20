import Link from 'next/link';
import Image from 'next/image';

import iRADVC5800Img from '../../images/iR-ADV.jpg';

export default function Page(){
       return (
        <div className="w3-container w3-gray">
       	      <h1>This is device detail page.</h1>
	      <Image src={iRADVC5800Img} alt="iR-ADV C5800" width={200} height={150}/>
	      <p />
	      <Link href="/devicelist">
	      	    <button className="w3-button w3-black w3-section w3-right">Back</button>
	      </Link>
	</div>

	      );
};
