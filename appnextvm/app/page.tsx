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
	      	      <Head>
			<title>Static Site Generation</title>
	      	      </Head>
		      <main>
			<p>This is NEXT.js SSG page!</p>
			<h1 className="text-blue-500">text from Tailwind</h1>
			<p />
			<p>{message}</p>
			<p>{process.env.TEST}</p>
			<p>{process.env.NEXT_PUBLIC_TEST}</p>			
		      </main>
	      </div>
       );
}

export default SSGPage;
