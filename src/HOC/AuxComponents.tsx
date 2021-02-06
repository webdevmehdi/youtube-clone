import React from 'react';

// we can use children even though we haven't defined them in our CardProps
 const AuxComponent: React.FunctionComponent = ({ children }) => <aside>
  { children }
</aside>
export default AuxComponent;