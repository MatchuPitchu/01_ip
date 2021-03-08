import React from 'react';
import uuid from 'react-uuid';
import Map from './Map';

const Location = ( {location, countryData, flag} ) => {

return (
    <>
        <div className="card mb-3">
            <div style={{paddingTop: '10px', paddingBottom: '10px', marginBottom: 0}} className="jumbotron row">
                <div className="col-md-7">
                    <h3 style={{fontSize: '2em'}} className="display-3">Your are currently in <b>{location.country}</b></h3>
                    <h3 style={{fontSize: '2em'}} className="display-3">in (or near to) <b>{location.city}</b></h3>
                    <h3 style={{fontSize: '2em'}} className="display-3">in <b>{location.region}</b></h3>
                </div>
                <img className="col-md-3 flag" src={flag} alt="flag"/>
            </div>
            <Map location={location} />
            <div className="card-body">
                <h6 className="card-subtitle text-muted">The capital of {countryData.altSpellings[1]} </h6>
                <p className="card-text">{countryData.capital}</p>
                <h6 className="card-subtitle text-muted">Region</h6>
                <p className="card-text">{countryData.region}</p>
                <h6 className="card-subtitle text-muted">Population</h6>
                <p className="card-text">{countryData.population}</p>
                <h6 className="card-subtitle text-muted">Borders with</h6>
                <ol>
                    {countryData.borders.map(item => <li key={uuid()}>{item}</li>)}     
                </ol>
                <h6 className="card-subtitle text-muted">Population</h6>
                <p className="card-text">{countryData.population}</p>
            </div>
            <div className="card-footer text-muted">Data from <a href="https://restcountries.eu">REST Countries</a></div>
        </div>
    </>
    )
}

export default Location;