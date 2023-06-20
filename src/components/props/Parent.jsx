import React, { useEffect, useState } from "react";
import Child1 from "./elements/Child1";
// import FirstContextProvider from '../context/FirstContextProvider'

const Parent = () => {
  const [mydata, setMyData] = useState();
  const url = "https://jsonplaceholder.typicode.com/todos";
  const userId = 6;
  const id = 2;
  const title = "hello";
  const completed = true;

  // useEffect(() => { 
  //   (async () => {
  //     const response = await fetch(url, {
  //       method: "POST",
  //       body: JSON.stringify({ userId, id, title, completed }),
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //     });
  //     const result = await response.json();
  //     console.log(result, "mydata");
  //     setMyData(result);
  //   })();
  // }, []);

  // useEffect(() => {
  //   console.log(mydata, "mydata");
  // }, [mydata]);

  return (
    <>
      
    </>
    // <FirstContextProvider>
    // <Child1/>
    // </FirstContextProvider>
  );
};

export default Parent;
