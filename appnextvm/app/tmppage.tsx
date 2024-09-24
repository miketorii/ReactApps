//import { NextPage, NextPageContext } from 'next';
import { NextPage } from 'next';
import Head from 'next/head';
import "./globals.css";

type SSGProps = {
     message: string
};

const SSGPage: NextPage<SSGProps> = (props) => {
      const { message } = props;

       return (
       	      <div>
		<p>This is Top page!</p>
		<h1 className="text-blue-500">Devices</h1>
			<div className="w3-row-padding w3-padding-16 w3-center" id="food">
			     <div className="w3-quarter">
			     	  <img src="../images/iR-ADV.jpg" alt="ADV" style="width:100%">
				  <h3>iR-ADV is new MFP with ADF</h3>
      				  <p>Just some random text, describing ADV more.</p>
    			     </div>	
			     <div className="w3-quarter">
			     	  <img src="../images/imageCLASS.jpg" alt="ADV" style="width:100%">
				  <h3>iR-ADV is new MFP with ADF</h3>
      				  <p>Just some random text, describing ADV more.</p>
    			     </div>
			     <div className="w3-quarter">
			     	  <img src="../images/iR-ADV.jpg" alt="ADV" style="width:100%">
				  <h3>iR-ADV is new MFP with ADF</h3>
      				  <p>Just some random text, describing ADV more.</p>
    			     </div>
			     <div className="w3-quarter">
			     	  <img src="../images/imageCLASS.jpg" alt="ADV" style="width:100%">
				  <h3>iR-ADV is new MFP with ADF</h3>
      				  <p>Just some random text, describing ADV more.</p>
    			     </div>			     
			</div>

		<p />
		<p>{message}</p>
		<p>{process.env.TEST}</p>
		<p>{process.env.NEXT_PUBLIC_TEST}</p>			
	      </div>
       );
}

export default SSGPage;
