import React from 'react';
import { EditableArea } from '@magnolia/react-editor';

const Home = ({ main={} }) => {
  return (
    <div className="Home">
      <main>
        <div className="hint">[Main Area]</div>         
        {main && <EditableArea className="Area" content={main} />}  
      </main>
    </div>
  ) 
};

export {
  Home
};
