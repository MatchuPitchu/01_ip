import React, { useState, useEffect } from 'react';
import './bootstrap.css';
import './styles.css';
import { Route, Switch } from 'react-router-dom';
import Spinner from './components/Spinner';
import Navbar from './components/Navbar';
import IP from './components/IP';
import Location from './components/Location';

const App = () => {
    const [ip, setIp] = useState();
    const [location, setLocation] = useState({});
    const [countryData, setCountryData] = useState([]);
    const [flag, setFlag] = useState ();
    const [loading, setLoading] = useState();
    
    useEffect(() => {
        setLoading(true);
        const fetchIp = async() => {
            const response = await fetch('https://geo.ipify.org/api/v1?apiKey=at_WDgfmNQxcpdkO6sZyIiyRFMPMbd44');
            const data = await response.json();
            setIp(data.ip);
            setLocation(data.location);
            console.log('IP of my Location: ', data.location)
            setLoading(false);
        };
        fetchIp();
    }, []);

    useEffect(() => {
        setLoading(true);
        fetch(`https://restcountries.eu/rest/v2/alpha/${location.country}`)
            .then(response => response.json())
            .then(data => {
                console.log('Data of my Country: ', data);
                setCountryData(data);
                setFlag(data.flag);
                setLoading(false);
            })
            .catch(err => console.log('Request failed: ', err));
    }, [location])

    if(loading) 
        return (
            <div>
                <Navbar />
                <Spinner />
            </div>
        );
    
    if(countryData, location)
        return (
        <>
            <Navbar />
            <IP ip={ip}/>
            <Switch>
                <Route path='/location'>
                    <Location location={location} countryData={countryData} flag={flag}/>
                </Route>
            </Switch>
        </>
    );
}

export default App;