//function Hello() {
const Hello = () => {
  const onMyClickFunc = () => { alert('You clicked!'); };
  
  const text = 'If you click here, alert is displayed from this component';

  return (
    <div onClick={onMyClickFunc} >
        {text}
    </div>
  );
}

export default Hello;




