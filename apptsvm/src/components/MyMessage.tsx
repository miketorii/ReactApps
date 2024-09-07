import MyText from './MyText';

function MyMessage(props: {}) {
  const content1 = 'text content1 in MyMessage';
  const content2 = 'text content2 in MyMessage';  

  return (
    <div style={{ background: 'red' }}>
        <MyText content={content1} />
        <MyText content={content2} />	
    </div>
  );
}

export default MyMessage;