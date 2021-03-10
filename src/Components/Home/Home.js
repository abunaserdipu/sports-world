import React, { useEffect, useState } from 'react';
import League from '../League/League';

const Home = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php'
        fetch(url)
        .then(response => response.json())
        .then(data => setLeagues(data.leagues));
    }, [])
    return (
        <div className="container">
            <div className="row">
            {
                leagues.map(league => <League league={league}></League>)
            }
            </div>
        </div>
    );
};

export default Home;