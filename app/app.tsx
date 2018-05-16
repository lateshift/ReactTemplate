import * as React from 'react';
import * as ReactDOM from 'react-dom';

import '../styles/app.less';

console.log('Mode: %o', process.env.NODE_ENV);
console.log('Version: %o', process.env.VERSION);

class Demo extends React.Component<any> {
  constructor(props:any) {
    super(props);
  }

  render() {
    return(
      <div>Working ...</div>
    )
  }
} 

ReactDOM.render(<Demo />, document.getElementById('app'));