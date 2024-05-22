import React, { useState, useEffect } from 'react';
import './InfiniteLoop.css';

const InfiniteLoop = () => {
    const [arr, setArr] = useState([1, 2, 3, 4, 5 , 1, 2, 3, 4, 5]); 

    useEffect(() => {
        const interval = setInterval(() => {
            // Concatenate the existing array with [1, 2, 3, 4, 5]
            setArr(prevArr => [...prevArr, 1, 2, 3, 4, 5]);
        }, 10000);

        // Cleanup interval when component unmounts
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='InfiniteLoopMain'>
            <div className='cardIL'>
                <div className='strip'>
                    {arr.map((item, index) => {
                        return <div key={index} className='stripBox'>
                            {/* <div className='stripBoxBl'></div> */}
                            <div className='stripBoxSL'></div>
                            <div className='stripBoxSL'></div>
                            <div className='stripBoxBl'></div>
                            <div className='stripBoxSL'></div>
                            <div className='stripBoxSL'></div>
                            <div className='stripBoxBl'></div>
                            <div className='stripBoxSL1'></div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};

export default InfiniteLoop;
