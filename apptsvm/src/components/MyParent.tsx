import React, { memo, useState } from 'react';

////////////////////////////////////////////////////////////////////////
//
type FizzProps = {
     isFizz : boolean
};

const Fizz = (props: FizzProps) => {
      const { isFizz } = props;

      console.log('Fizz is redrawn. isFizz='+isFizz);

      const fizz = (isFizz) ? 'Fizz' : '';
      
      return ( <span>{fizz}</span> );
}

////////////////////////////////////////////////////////////////////////
//
type BuzzProps = {
     isBuzz : boolean
};

const Buzz = memo<BuzzProps>( (props) => {
            const { isBuzz } = props;

            console.log('Buzz is redrawn. isBuzz'+isBuzz);

            const buzz = (isBuzz) ? 'Buzz' : '';

      	    return ( <span>{buzz}</span> );
      }
)


////////////////////////////////////////////////////////////////////////
//
const MyParent = () => {
      const [count, setCount] = useState(1);
      const isFizz = count % 3 === 0;
      const isBuzz = count % 5 === 0;

      console.log('Parent was redrawn. count='+count);

      return (
      	     <div>
                <button onClick={() => setCount((c) => c+1) }>+1</button>	     
		<p>Current Count: {count}</p>
		<p>
			<Fizz isFizz={isFizz} />
                        <Buzz isBuzz={isBuzz} />
                </p>
	     </div>
	);
}

export default MyParent;

