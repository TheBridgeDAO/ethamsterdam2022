import './App.css';
import { InitSwAuth } from '@skill-wallet/auth';
import {useEffect} from 'react';

function App() {

  useEffect(() => {
      InitSwAuth();
  }, []);

  return (
    <div>
        <sw-auth partner-key="0772ffab1977b915c1a8bc8ea073c8bdbdecd71f" use-dev="true"></sw-auth>
    </div>
  );
}

export default App;