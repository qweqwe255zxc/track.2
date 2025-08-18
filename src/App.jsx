import { useState, useEffect } from 'react';
import Header from './assets/components/Header';
import Logo from './assets/components/Logo';
import Preloader from './assets/components/Preloader';
import Cover from './assets/components/Cover';
import Collection from './assets/components/Collection';
import Track2 from './assets/components/Track2';
import Footer from './assets/components/Footer';
import Cursor from './assets/components/Cursor';


const App = () => {

    const [contentVisible, setContentVisible] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, []);

    return (
        <>
            <Cursor />
            {!contentVisible && (
                <Preloader onFinish={() => setContentVisible(true)} />
            )}
            <div className={`page-content ${contentVisible ? 'visible' : ''}`}>
                <Cursor />
                <Header />
            </div>
            <Logo />
            <div className={`page-content ${contentVisible ? 'visible' : ''}`}>
                <Cover />
                <Collection />
                <Track2 />
                <Footer />

            </div>
        </>
    );
};

export default App;