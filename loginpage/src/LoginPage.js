import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const LoginPage = () => {

  const [pinCode, setPinCode] = useState("");
  const navigate = useNavigate();

  const onClickLogin = () => {
    var logined = false;

    if(pinCode == '123'){
      logined = true;
    }

    if(logined){
      navigate("/home");
    } else {
      navigate("/loginfailed");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input type='text' onChange={(e) => setPinCode(e.target.value)} />
      <button  onClick={onClickLogin}>login</button>
    </div>
  );

};
  