import React from 'react';

function App() {
  const message = process.env.REACT_APP_MESSAGE || 'Welcome to React';

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Hello World!</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
