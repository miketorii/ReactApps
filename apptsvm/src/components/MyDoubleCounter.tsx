import { useReducer } from 'react';

type CountAction = 'DECREMENT' | 'INCREMENT' | 'DOUBLE' | 'RESET';

const reducerFunc = (currentCount: number, action: CountAction) => {
      switch(action){
	case 'INCREMENT':
	     return currentCount+1;
	case 'DECREMENT':
	     return currentCount-1;
	case 'DOUBLE':
	     return currentCount*2;
	case 'RESET':
	     return 0;
	default:
	     return currentCount;
      };
};

type CounterProps = {
     initialCount: number
};

const MyDoubleCounter = (props: CounterProps) => {
  const { initialCount } = props;
  const [ count, dispatch ] = useReducer(reducerFunc, initialCount);

  return (
    <div>
	<p>Count: {count}</p>
        <button onClick={() => dispatch('RESET') }>Reset</button>
        <button onClick={() => dispatch('INCREMENT') }>+</button>
        <button onClick={() => dispatch('DECREMENT') }>-</button>
        <button onClick={() => dispatch('DOUBLE') }>x2</button>	
    </div>
  );
}

export default MyDoubleCounter;