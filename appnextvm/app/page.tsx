//import { NextPage, NextPageContext } from 'next';
import { NextPage } from 'next';
import Head from 'next/head';

type SSGProps = {
     message: string
};

const SSGPage: NextPage<SSGProps> = (props) => {
      const { message } = props;

       return (
       	      <div>
	      	      <Head>
			<title>Static Site Generation</title>
	      	      </Head>
		      <main>
			<p>This is NEXT.js SSG page!</p>
			<p>{message}</p>
			<p>{process.env.TEST}</p>
			<p>{process.env.NEXT_PUBLIC_TEST}</p>			
		      </main>
	      </div>
       );
}

export default SSGPage;
