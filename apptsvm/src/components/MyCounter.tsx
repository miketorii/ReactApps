import { useState } from 'react';

type CounterProps = {
     initialCount: number
};

const MyCounter = (props: CounterProps) => {
  const { initialCount } = props;
  const [ count, setCount ] = useState(initialCount);

  return (
    <div>
	<p>Count: {count}</p>
        <button onClick={() => setCount(initialCount) }>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount + 1) }>+</button>
        <button onClick={() => setCount(prevCount => prevCount - 1) }>-</button>	
    </div>
  );
}

export default MyCounter;