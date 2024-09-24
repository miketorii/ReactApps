import { NextPage } from 'next';

import Image from 'next/image';

import iRADVC5800Img from '../images/iR-ADV.jpg';
import imageCLASSImg from '../images/imageCLASS.jpg';

type SSGProps = {
     message: string
};

const SSGPage: NextPage<SSGProps> = (props) => {
      const { message } = props;


      return (
      <div>
	<div className="w3-gray w3-center">
	     <h1>This is top page.</h1>
	     <Image src={iRADVC5800Img} alt="ADV" width={300} height={240} />	
	</div>
	<div className="w3-row-padding w3-padding-16 w3-center" id="deviceid">
	     <div className="w3-quarter">
	     	  <Image src={iRADVC5800Img} alt="ADV" width={200} height={150}/>
		  <h3>iR-ADV C5870</h3>
		  <p>Just some random text, describing ADV more.</p>
	     </div>
	     <div className="w3-quarter">
	     	  <Image src={imageCLASSImg} alt="ADV" width={100} height={100}/>
		  <h3>imageCLASS C580</h3>
		  <p>Just some random text, describing imageCLASS more.</p>
	     </div>
	     <div className="w3-quarter">
	     	  <Image src={iRADVC5800Img} alt="ADV" width={200} height={150}/>
		  <h3>iR-ADV C5860</h3>
		  <p>Just some random text, describing ADV more.</p>
	     </div>
	     <div className="w3-quarter">
	     	  <Image src={imageCLASSImg} alt="ADV" width={100} height={100}/>
		  <h3>imageCLASS C480</h3>
		  <p>Just some random text, describing imageCLASS more.</p>
	     </div>
	 </div>

	<div className="w3-row-padding w3-padding-16 w3-center" id="deviceid2">
	     <div className="w3-quarter">
	     	  <Image src={iRADVC5800Img} alt="ADV" width={200} height={150}/>
		  <h3>iR-ADV C5850</h3>
		  <p>Just some random text, describing ADV more.</p>
	     </div>
	     <div className="w3-quarter">
	     	  <Image src={imageCLASSImg} alt="ADV" width={100} height={100}/>
		  <h3>imageCLASS C380</h3>
		  <p>Just some random text, describing imageCLASS more.</p>
	     </div>
	     <div className="w3-quarter">
	     	  <Image src={iRADVC5800Img} alt="ADV" width={200} height={150}/>
		  <h3>iR-ADV C5840</h3>
		  <p>Just some random text, describing ADV more.</p>
	     </div>
	     <div className="w3-quarter">
	     	  <Image src={imageCLASSImg} alt="ADV" width={100} height={100}/>
		  <h3>imageCLASS C280</h3>
		  <p>Just some random text, describing imageCLASS more.</p>
	     </div>
	 </div>
	 
	</div>
       );
}

export default SSGPage;
