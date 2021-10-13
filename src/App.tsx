import React, { FC } from 'react';
import RbyMap from './components/pages/RbyMap';

import './assets/css/normalize.css';
import './app.scss';

interface AppProps {}

const App: FC<AppProps> = (props) => {
    return <>
        <RbyMap />
    </>;
};

export default App;