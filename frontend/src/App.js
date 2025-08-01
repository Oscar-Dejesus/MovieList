import React, { useEffect, useState } from 'react';

function App() {
  const [backendData, setBackendData] = useState({});

  useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(data => {
        setBackendData(data);
      });
  }, []);

  return (
    <div>
      {(typeof backendData.message === 'undefined') ?(
        <p>loading...</p>
      ):(
        backendData.message.map((m,index)=>(
          <p key={index}>{m}</p>
        ))
      )}
    </div>
  );
}

export default App;

