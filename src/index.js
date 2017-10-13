import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App/App';
//import SiderDemo from './component/SiderDemo/Sider'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
