import Link from 'next/link';

export default function Page(){
       return (
        <div>
       	      <h1>This is dashboard page.</h1>
	      <Link href="/">
	      	    <button>Back</button>
	      </Link>
	</div>

	      );
};
