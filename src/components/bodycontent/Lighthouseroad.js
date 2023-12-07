import "./Lighthouseroad.css";
import { Card } from 'react-rainbow-components';
import pole from "../../images/pole.jpeg"
import { Input } from "react-rainbow-components";
import { useState, useEffect } from "react";
const Lighthouseroad = () => {
    const [lighthouseroadvoltage1, setLighthouseroadvoltage1] = useState();
    const [lighthouseroadvoltage2, setLighthouseroadvoltage2] = useState();
    const [lighthouseroadvoltage3, setLighthouseroadvoltage3] = useState();
    const alertIsTrue1 = (lighthouseroadvoltage1 === "offline") || (lighthouseroadvoltage1 === "Offline");
    const alertIsTrue2 = (lighthouseroadvoltage2 === "offline") || (lighthouseroadvoltage2 === "Offline");
    const alertIsTrue3 = (lighthouseroadvoltage3 === "offline") || (lighthouseroadvoltage3 === "Offline");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://backend-k2pf.onrender.com/api/sensordata");
                const data = await response.json();
                setLighthouseroadvoltage1(data.lighthouseroadvoltage1);
                setLighthouseroadvoltage2(data.lighthouseroadvoltage2);
                setLighthouseroadvoltage3(data.lighthouseroadvoltage3);
            } catch (error) {
                console.error(error);
            }
        };

        const intervalId = setInterval(fetchData, 2000);

        return () => clearInterval(intervalId);
    }, []);
    return (
        <div >
            <Card className="show__card">
                <p className="lighthouseroad__text">Light House Road</p>
                <div className="row card__row">
                    <div className="row card__row">
                        <div className="col-12 col-md-4  mb-3">
                            <div className="sub__box" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <p className="card__top street-light-animation" style={{ margin: '0', position: 'relative', width: '150px', height: '150px' }}>
                                    <img
                                        src={pole}
                                        alt="Street Light"
                                        style={{ width: '100%', height: '100%' }}
                                    />
                                    <div className="light-bulb light1light1" style={{ backgroundColor: alertIsTrue1 ? '' : 'yellow' }}></div>
                                    <div className="light-bulb light1light2" style={{ backgroundColor: alertIsTrue1 ? '' : 'yellow' }}></div>
                                    <div className="polebasement"></div>
                                </p>
                                <div className="card">
                                    <ul className="list-group list-group-flush list">
                                        <li className="list-group-item text-center list__head">
                                            <span className="input-label">LIGHT-1</span>
                                        </li>
                                        <li className="list-group-item text-center">
                                            <span className="input-label">Voltage</span>
                                            <Input
                                                value={lighthouseroadvoltage1 || "offline" || "Offline"}
                                                type="text"
                                                className="rainbow-p-around_medium text-center box"
                                                disabled={true}
                                            />
                                        </li>
                                        <li className="list-group-item text-center">
                                            <span className="input-label">Status</span>
                                            <Input
                                                value={(lighthouseroadvoltage1 === "Offline" || lighthouseroadvoltage1 === "offline") ? "Not Working" : "Working"}
                                                type="text"
                                                className="rainbow-p-around_medium text-center box input__container"
                                                disabled={true}
                                            />
                                        </li>
                                        <li className="list-group-item text-center">
                                            <span className="input-label">Alert</span>
                                            <div className="col-12 d-flex justify-content-center align-items-center">
                                                <div className="row indication">
                                                    <div className="col-12 d-flex justify-content-center align-items-center">
                                                        <div className="d-flex justify-content-center align-items-center">
                                                            <div
                                                                className="rainbow-p-around_medium text-center box rounded-circle circle"
                                                                style={{
                                                                    height: '50px',
                                                                    backgroundColor: alertIsTrue1 ? 'red' : 'green',
                                                                    display: 'flex',
                                                                    justifyContent: 'center',
                                                                    alignItems: 'center',
                                                                    fontWeight: 'bold',
                                                                    color: alertIsTrue1 ? 'black' : 'white',
                                                                    textShadow: alertIsTrue1 ? '1px 1px 2px white, 0 0 25px white, 0 0 5px white, 0 0 10px white' : '1px 1px 2px black, 0 0 25px black, 0 0 5px black, 0 0 10px black',
                                                                }}
                                                            >
                                                                {(lighthouseroadvoltage1 === "offline") || (lighthouseroadvoltage1 === "Offline") ? 'OFF' : 'ON'}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {lighthouseroadvoltage1 === "offline" || lighthouseroadvoltage1 === "Offline" ? (
                                                        <a href="https://maps.app.goo.gl/tirPaGYECWx7VcjD6" target="_blank" rel="noopener noreferrer" className="fault__text">
                                                            View Fault Location
                                                        </a>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4  mb-3">
                            <div className="sub__box" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <p className="card__top street-light-animation" style={{ margin: '0', position: 'relative', width: '150px', height: '150px' }}>
                                    <img
                                        src={pole}
                                        alt="Street Light"
                                        style={{ width: '100%', height: '100%' }}
                                    />
                                    <div className="light-bulb light1light1" style={{ backgroundColor: alertIsTrue2 ? '' : 'yellow' }}></div>
                                    <div className="light-bulb light1light2" style={{ backgroundColor: alertIsTrue2 ? '' : 'yellow' }}></div>
                                    <div className="polebasement"></div>
                                </p>
                                <div className="card">
                                    <ul className="list-group list-group-flush list">
                                        <li className="list-group-item text-center list__head">
                                            <span className="input-label">LIGHT-2</span>
                                        </li>
                                        <li className="list-group-item text-center">
                                            <span className="input-label">Voltage</span>
                                            <Input
                                                value={lighthouseroadvoltage2 || "offline" || "Offline"}
                                                type="text"
                                                className="rainbow-p-around_medium text-center box"
                                                disabled={true}
                                            />
                                        </li>
                                        <li className="list-group-item text-center">
                                            <span className="input-label">Status</span>
                                            <Input
                                                value={(lighthouseroadvoltage2 === "Offline" || lighthouseroadvoltage2 === "offline") ? "Not Working" : "Working"}
                                                type="text"
                                                className="rainbow-p-around_medium text-center box input__container"
                                                disabled={true}
                                            />
                                        </li>
                                        <li className="list-group-item text-center">
                                            <span className="input-label">Alert</span>
                                            <div className="col-12 d-flex justify-content-center align-items-center">
                                                <div className="row indication">
                                                    <div className="col-12 d-flex justify-content-center align-items-center">
                                                        <div className="d-flex justify-content-center align-items-center">
                                                            <div
                                                                className="rainbow-p-around_medium text-center box rounded-circle circle"
                                                                style={{
                                                                    height: '50px',
                                                                    backgroundColor: alertIsTrue2 ? 'red' : 'green',
                                                                    display: 'flex',
                                                                    justifyContent: 'center',
                                                                    alignItems: 'center',
                                                                    fontWeight: 'bold',
                                                                    color: alertIsTrue2 ? 'black' : 'white',
                                                                    textShadow: alertIsTrue2 ? '1px 1px 2px white, 0 0 25px white, 0 0 5px white, 0 0 10px white' : '1px 1px 2px black, 0 0 25px black, 0 0 5px black, 0 0 10px black',
                                                                }}
                                                            >
                                                                {(lighthouseroadvoltage2 === "offline") || (lighthouseroadvoltage2 === "Offline") ? 'OFF' : 'ON'}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {lighthouseroadvoltage2 === "offline" || lighthouseroadvoltage2 === "Offline" ? (
                                                        <a href="https://maps.app.goo.gl/RmFTXDKyjrd9J516A" target="_blank" rel="noopener noreferrer" className="fault__text">
                                                            View Fault Location
                                                        </a>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4  mb-3">
                            <div className="sub__box" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <p className="card__top street-light-animation" style={{ margin: '0', position: 'relative', width: '150px', height: '150px' }}>
                                    <img
                                        src={pole}
                                        alt="Street Light"
                                        style={{ width: '100%', height: '100%' }}
                                    />
                                    <div className="light-bulb light1light1" style={{ backgroundColor: alertIsTrue3 ? '' : 'yellow' }}></div>
                                    <div className="light-bulb light1light2" style={{ backgroundColor: alertIsTrue3 ? '' : 'yellow' }}></div>
                                    <div className="polebasement"></div>
                                </p>
                                <div className="card">
                                    <ul className="list-group list-group-flush list">
                                        <li className="list-group-item text-center list__head">
                                            <span className="input-label">LIGHT-3</span>
                                        </li>
                                        <li className="list-group-item text-center">
                                            <span className="input-label">Voltage</span>
                                            <Input
                                                value={lighthouseroadvoltage3 || "offline" || "Offline"}
                                                type="text"
                                                className="rainbow-p-around_medium text-center box"
                                                disabled={true}
                                            />
                                        </li>
                                        <li className="list-group-item text-center">
                                            <span className="input-label">Status</span>
                                            <Input
                                                value={(lighthouseroadvoltage3 === "Offline" || lighthouseroadvoltage3 === "offline") ? "Not Working" : "Working"}
                                                type="text"
                                                className="rainbow-p-around_medium text-center box input__container"
                                                disabled={true}
                                            />
                                        </li>
                                        <li className="list-group-item text-center">
                                            <span className="input-label">Alert</span>
                                            <div className="col-12 d-flex justify-content-center align-items-center">
                                                <div className="row indication">
                                                    <div className="col-12 d-flex justify-content-center align-items-center">
                                                        <div className="d-flex justify-content-center align-items-center">
                                                            <div
                                                                className="rainbow-p-around_medium text-center box rounded-circle circle"
                                                                style={{
                                                                    height: '50px',
                                                                    backgroundColor: alertIsTrue3 ? 'red' : 'green',
                                                                    display: 'flex',
                                                                    justifyContent: 'center',
                                                                    alignItems: 'center',
                                                                    fontWeight: 'bold',
                                                                    color: alertIsTrue3 ? 'black' : 'white',
                                                                    textShadow: alertIsTrue3 ? '1px 1px 2px white, 0 0 25px white, 0 0 5px white, 0 0 10px white' : '1px 1px 2px black, 0 0 25px black, 0 0 5px black, 0 0 10px black',
                                                                }}
                                                            >
                                                                {(lighthouseroadvoltage3 === "offline") || (lighthouseroadvoltage3 === "Offline") ? 'OFF' : 'ON'}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {lighthouseroadvoltage3 === "offline" || lighthouseroadvoltage3 === "Offline" ? (
                                                        <a href="https://maps.app.goo.gl/gfYQ3KttweVgrThn7" target="_blank" rel="noopener noreferrer" className="fault__text">
                                                            View Fault Location
                                                        </a>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};
export default Lighthouseroad;