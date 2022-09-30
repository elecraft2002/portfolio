import React, { useEffect, useState } from 'react';


//const scroll = () => {
function Scroll() {
    const [scrollOffset, setScrollOffset] = useState(0)
    useEffect(() => {
        console.log("Inicializováno")
        const handleScroll = event => {
            //console.log('window.scrollY', window.scrollY);
            setScrollOffset(window.scrollY)
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return scrollOffset
}
export default Scroll