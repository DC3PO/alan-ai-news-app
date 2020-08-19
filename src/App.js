import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards';

const alanKey = 'de0405998380d8f370edccd1e8ee77242e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if(command === 'newHeadlines') {
                   setNewsArticles(articles); 
                }    
            }
        })
    }, [])

    return (
        <div>
            <h1>Alan AI News Application</h1>
            <NewsCards articles={newsArticles} />
        </div>
    );
}

export default App;