import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductDisplay from './ProductDisplay'

const App = () => {
    return(
        <>
            <Header/>
            <ProductDisplay />
            <Footer year="2023" month="March"/>
        </>
    )
}


export default App;