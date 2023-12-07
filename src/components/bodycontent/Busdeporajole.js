import "./Busdeporajole.css";
import { Card } from 'react-rainbow-components';
import pole from "../../images/pole.jpeg"
import { Input } from "react-rainbow-components";
import { useState, useEffect } from "react";
const Busdeporajole = () => {
    const [busdeporajolevoltage1, setBusdeporajolevoltage1] = useState();
    const [busdeporajolevoltage2, setBusdeporajolevoltage2] = useState();
    const [busdeporajolevoltage3, setBusdeporajolevoltage3] = useState();
    const alertIsTrue1 = (busdeporajolevoltage1 === "offline") || (busdeporajolevoltage1 === "Offline");
    const alertIsTrue2 = (busdeporajolevoltage2 === "offline") || (busdeporajolevoltage2 === "Offline");
    const alertIsTrue3 = (busdeporajolevoltage3 === "offline") || (busdeporajolevoltage3 === "Offline");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://backend-k2pf.onrender.com/api/sensordata");
                const data = await response.json();
                setBusdeporajolevoltage1(data.busdeporajolevoltage1);
                setBusdeporajolevoltage2(data.busdeporajolevoltage2);
                setBusdeporajolevoltage3(data.busdeporajolevoltage3);
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
                <p className="busdepo__rajole__para">Bus Depo Road Rajole</p>
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
                                                value={busdeporajolevoltage1 || "offline" || "Offline"}
                                                type="text"
                                                className="rainbow-p-around_medium text-center box"
                                                disabled={true}
                                            />
                                        </li>
                                        <li className="list-group-item text-center">
                                            <span className="input-label">Status</span>
                                            <Input
                                                value={(busdeporajolevoltage1 === "Offline" || busdeporajolevoltage1 === "offline") ? "Not Working" : "Working"}
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
                                                                {(busdeporajolevoltage1 === "offline") || (busdeporajolevoltage1 === "Offline") ? 'OFF' : 'ON'}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {busdeporajolevoltage1 === "offline" || busdeporajolevoltage1 === "Offline" ? (
                                                        <a href="https://maps.app.goo.gl/7NeCULf9ZkFXxhVb7" target="_blank" rel="noopener noreferrer" className="fault__text">
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
                                                value={busdeporajolevoltage2 || "offline" || "Offline"}
                                                type="text"
                                                className="rainbow-p-around_medium text-center box"
                                                disabled={true}
                                            />
                                        </li>
                                        <li className="list-group-item text-center">
                                            <span className="input-label">Status</span>
                                            <Input
                                                value={(busdeporajolevoltage2 === "Offline" || busdeporajolevoltage2 === "offline") ? "Not Working" : "Working"}
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
                                                                {(busdeporajolevoltage2 === "offline") || (busdeporajolevoltage2 === "Offline") ? 'OFF' : 'ON'}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {busdeporajolevoltage2 === "offline" || busdeporajolevoltage2 === "Offline" ? (
                                                        <a href="https://maps.app.goo.gl/385YhjQTwv5mUTeg9" target="_blank" rel="noopener noreferrer" className="fault__text">
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
                                                value={busdeporajolevoltage3 || "offline" || "Offline"}
                                                type="text"
                                                className="rainbow-p-around_medium text-center box"
                                                disabled={true}
                                            />
                                        </li>
                                        <li className="list-group-item text-center">
                                            <span className="input-label">Status</span>
                                            <Input
                                                value={(busdeporajolevoltage3 === "Offline" || busdeporajolevoltage3 === "offline") ? "Not Working" : "Working"}
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
                                                                {(busdeporajolevoltage3 === "offline") || (busdeporajolevoltage3 === "Offline") ? 'OFF' : 'ON'}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {busdeporajolevoltage3 === "offline" || busdeporajolevoltage3 === "Offline" ? (
                                                        <a href="https://maps.app.goo.gl/hCHxp5mR8kr9rzEN9" target="_blank" rel="noopener noreferrer" className="fault__text">
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
export default Busdeporajole;