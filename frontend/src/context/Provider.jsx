import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [owner, setOwner] = useState('');

  const contextType = useMemo(() => ({ owner, setOwner }), [owner, setOwner]);

  return (
    <MyContext.Provider value={contextType}>
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
