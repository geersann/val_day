import React from 'react';
import Home from './Home';
import styles from "./App.css"

const App = () => {
    return (
        <div>
            <div className={styles.globalStyle}>
              <Home />
            </div>
        </div>
    );
};

export default App;