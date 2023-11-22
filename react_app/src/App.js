import React, { useState, useEffect } from 'react';
import PageLoader from './helpers/PageLoader';
import { events } from './helpers/AppHelpers';

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
      <PageLoader pathname={pathname} />
    </>
  );
}

export default App;
