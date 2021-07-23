import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import planets from "../assets/data";
import "../index.css";

const Planet = () => {
  let { id } = useParams();
  const history = useHistory();
  const [planet, setPlanet] = useState({});
  const [descriptionKey, setDescriptionKey] = useState("overview");
  const [planetName, setPlanetName] = useState("Mercury");
  const planetsNames = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
  ];
  //-----------------------------------
  const sourceIcon = require(`../assets/images/icon-source.svg`).default;
  let imageUrl = "";
  let imageDetails = "";
  let description = "";
  let source = "#";

  //--------------press btn func ---------------------
  const changeDescription = (btnNum) => {
    if (btnNum === 1) {
      setDescriptionKey("overview");
    } else if (btnNum === 2) {
      setDescriptionKey("structure");
    } else {
      setDescriptionKey("surface");
    }
  };

  //-----------------useEffect----------------

  useEffect(() => {
    let isNumber = /^\d+$/.test(id);
    if ((isNumber || typeof id == "undefined") && planets.length !== 0) {
      id = id ? id : "1";
      let newPlanet = planets.find((planet) => {
        return planet.id === parseInt(id);
      });
      setPlanet(newPlanet);
      setDescriptionKey("overview");
      setPlanetName(planetsNames[id - 1]);
    } else {
      history.replace("/");
    }
  }, [id, history]);

  // ----------------------------------------------

  if (descriptionKey === "overview") {
    //desc
    description = (planet.overview && planet.overview.content) || "";
    //link ref
    source = (planet.overview && planet.overview.source) || "#";
    //image url
    imageUrl =
      (planet.images &&
        require(`../assets${planet.images.planet.substring(1)}`).default) ||
      "";
  } else if (descriptionKey === "structure") {
    //desc
    description = (planet.structure && planet.structure.content) || "";
    //link ref
    source = (planet.structure && planet.structure.source) || "#";
    //image url
    imageUrl =
      (planet.images &&
        require(`../assets${planet.images.internal.substring(1)}`).default) ||
      "";
  } else {
    //desc
    description = (planet.geology && planet.geology.content) || "";
    //link ref
    source = (planet.geology && planet.geology.source) || "#";
    //image url
    imageUrl =
      (planet.images &&
        require(`../assets${planet.images.planet.substring(1)}`).default) ||
      "";
    //image details
    imageDetails =
      (planet.images &&
        require(`../assets${planet.images.geology.substring(1)}`).default) ||
      "";
  }
  return (
    <div className="planet">
      <div className="planet-main-info">
        <div className="planet-img">
          <img src={imageUrl} alt={planet.name} className="planet-img-link" />
          <img
            src={imageDetails}
            alt={planet.name}
            className="img-details-link"
            style={{ display: imageDetails.length ? "block" : "none" }}
          />
        </div>
        <div className="planet-info">
          <div className="planet-info-box">
            <div className="planet-text-info">
              <h1 className="planet-name">{planet.name}</h1>
              <p className="planet-description">{description}</p>
              <div className="description-ref">
                <span className="source-txt">source : </span>
                <a className="source-link" href={source} target="_blank">
                  wekipedia
                </a>
                <img
                  className="source-icon"
                  src={sourceIcon}
                  alt="source-icon"
                />
              </div>
            </div>
            <div className="description-options">
              <div
                className={`btn-desc ${planetName}`}
                type="button"
                onClick={() => {
                  changeDescription(1);
                }}
              >
                <div className="btn-text">
                  <span className="large-size-text">
                    <span className="btn-number">01</span>overview
                  </span>
                  <span className="small-size-text" style={{ display: "none" }}>
                    overview
                  </span>
                </div>
              </div>
              <div
                className={`btn-desc ${planetName}`}
                type="button"
                onClick={() => {
                  changeDescription(2);
                }}
              >
                <div className="btn-text">
                  <span className="large-size-text">
                    <span className="btn-number">02</span>internal structure
                  </span>
                  <span className="small-size-text" style={{ display: "none" }}>
                    structure
                  </span>
                </div>
              </div>
              <div
                className={`btn-desc ${planetName}`}
                type="button"
                onClick={() => {
                  changeDescription(3);
                }}
              >
                <div className="btn-text">
                  <span className="large-size-text">
                    <span className="btn-number">03</span>surface geology
                  </span>
                  <span className="small-size-text" style={{ display: "none" }}>
                    surface
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="planet-more-info">
        <div className="tab">
          <div className="tab-details">
            <h6 className="tab-title">rotation time</h6>
            <h1 className="tab-description">{planet.rotation}</h1>
          </div>
        </div>
        <div className="tab">
          <div className="tab-details">
            <h6 className="tab-title">revolution time</h6>
            <h1 className="tab-description">{planet.revolution}</h1>
          </div>
        </div>
        <div className="tab">
          <div className="tab-details">
            <h6 className="tab-title">radius</h6>
            <h1 className="tab-description">{planet.radius}</h1>
          </div>
        </div>
        <div className="tab">
          <div className="tab-details">
            <h6 className="tab-title">average temp</h6>
            <h1 className="tab-description">{planet.temperature}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planet;
