import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Destination = (props) => {
  return (
    <div className="destination-card">
      <img className="image" src={props.item.imageUrl} alt={props.item.title} />
      <div className="info-section">
        <div className="g-maps">
          <i>
            <FaMapMarkerAlt color="#f55a5a" />
          </i>
          <h2 className="country">{props.item.location}</h2>
          <a className="map-link" src={props.item.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h1 className="destination-title">{props.item.title}</h1>
        <div className="dates">
          <span>{props.item.startDate}</span>-<span>{props.item.endDate}</span>
        </div>
        <p className="description">{props.item.description}</p>
      </div>
    </div>
  );
};

export default Destination;
