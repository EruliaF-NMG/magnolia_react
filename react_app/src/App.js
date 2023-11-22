import React, { useState, useEffect } from 'react';
import PageLoader from './helpers/PageLoader';
import './styles/globals.css';
import './styles/styleguide.css';
import './styles/style.css';
import { events } from './helpers/AppHelpers';
import { GlobalStateProvider } from './components/common/GlobalStateProvider';

function App() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    function handlePopstate() {
      setPathname(window.location.pathname);
    }

    events.on('popstate', handlePopstate);
    window.addEventListener('popstate', handlePopstate);

    return () => {
      events.removeListener('popstate', handlePopstate);
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);


  return (
    <>
      <GlobalStateProvider>
        <PageLoader pathname={pathname} />
      </GlobalStateProvider>
    </>
  );
}

export default App;
