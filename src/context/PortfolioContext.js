import React from 'react';



const PortfolioContext = React.createContext({
    youtubeData: [],
    fetchVideos: () => {}
});

export default PortfolioContext;


