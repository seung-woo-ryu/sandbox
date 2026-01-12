import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();

  return (
    <>{isLoggedIn ? <h1>Welcome back!</h1> : <button>카카오 로그인</button>}</>
  );
}

export default App;
