import Link from 'next/link';

export default function Page(){
       return (
       <div className="w3-container w3-gray">
            <h1>This is dashboard page.</h1>
            <h3>{process.env.TEST}</h3>
            <h3>{process.env.GKEY}</h3>
            <Link href="/">
                <button className="w3-button w3-black w3-section w3-right">Back</button>
            </Link>
	</div>
	);
}