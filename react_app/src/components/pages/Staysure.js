import React from 'react';
import { EditableArea } from '@magnolia/react-editor';
const Staysure = ({
  header=null,
  body=null,
  footer=null
}) => {
 // const {  } = props;
console.log(header,body,footer);
  return (
    <div className="homepage">
      {header && <EditableArea content={header} className="header" elementType={"header"} />}  
      {body && <EditableArea content={body} className="fullWidth" />}  
      {footer && <EditableArea content={footer} className="footer" elementType={"footer"} />} 
    </div>
  ) 
};

export {
  Staysure
};
