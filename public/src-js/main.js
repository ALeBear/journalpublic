import 'fetch';

import React from 'react';

class HelloWorld extends React.Component
{
  render() {
    return <p>Yo Le monde</p>;
  }
}

React.render(<HelloWorld />, document.getElementById('content'));
