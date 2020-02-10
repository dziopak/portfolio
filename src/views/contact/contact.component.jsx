import React from "react";
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';

import Button from "./../../components/button/button.component";
import ContentRow from "./../../components/content/content-row.component";
import DescriptionBox from "./../../components/description-box/description-box.component";
import useLang from "./../../components/useLang/useLang.component";

import Vector from "./../../assets/vectors/contact.svg";

const ContactPage = () => {

const washingtonLonLat = [22.0124, 50.0341];
const washingtonWebMercator = fromLonLat(washingtonLonLat);

const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  target: 'map',
  view: new View({
    center: washingtonWebMercator,
    zoom: 13
  })
});

return (
        <div className="contact-page">
            <div className="container">
                <ContentRow title="Kontakt" vector={Vector}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <Button text="Email me" modifier="purple" />
                    <Button text="Call me" modifier="pink" />
                </ContentRow>
            </div>
            <div id="map" style={{height: "400px"}} className="map"></div>                        
        </div>
    );
}

export default useLang(ContactPage, "contact", "views");