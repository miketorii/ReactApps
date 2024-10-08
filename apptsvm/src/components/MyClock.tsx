import React, { useState, useEffect } from 'react';

/////////////////////////////////////////////////////////////
//
const UPDATE_CYCLE = 1000;

const KEY_LOCALE = 'KEY_LOCALE';

enum Locale {
     US = 'en-US',
     JP = 'ja-JP'
};
/////////////////////////////////////////////////////////////
//
const getLocaleFromString = (text: string) => {
      switch(text){
      case Locale.US:
      	   return Locale.US;
      case Locale.JP:
	   return Locale.JP;
      default:
	   return Locale.JP;      
      }
};

/////////////////////////////////////////////////////////////
//
const MyClock = () => {

  const [timestamp, setTimestamp] = useState(new Date());
  const [locale, setLocale] = useState(Locale.JP);

  ///////////////////////////////////////////
  //
  useEffect( () => {
  	const timer = setInterval( () => {
	      setTimestamp(new Date());
	}, UPDATE_CYCLE);

	return (
	       () => { clearInterval(timer); }
	);
  }, []);


  ///////////////////////////////////////////
  //
  useEffect( () => {
  	     const savedLocale = localStorage.getItem(KEY_LOCALE);
	     if(savedLocale != null){
	     	setLocale(getLocaleFromString(savedLocale));
	     }
  }, []);

  ///////////////////////////////////////////
  //
  useEffect( () => {
  	     localStorage.setItem(KEY_LOCALE, locale);
  },[locale]);

  ///////////////////////////////////////////
  //
  return (
    <div style={{ background : '#8cf283' }}>
        <span>Curret Time</span>
	<span>: {timestamp.toLocaleString(locale)}</span>
	<select value={locale} onChange={(e) => setLocale( getLocaleFromString(e.target.value) ) }>
		<option value="en-US">en-US</option>
		<option value="ja-JP">ja-JP</option>
	</select>
    </div>
  );
}

export default MyClock;