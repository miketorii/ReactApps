import Link from 'next/link';

export default function Page(){
       return (
        <div className="w3-container w3-gray">
       	      <h1>This is dashboard page.</h1>
	      <Link href="/">
	      	    <button className="w3-button w3-black w3-section w3-right">Back</button>
	      </Link>
	</div>

	      );
};
