import "./Busdepoamalapuram.css";
import pole from "../../images/pole.jpeg"
import { Card } from 'react-rainbow-components';
import { Input } from "react-rainbow-components";
import { useState, useEffect } from "react";
const Busdepoamalapuram = () => {
    const [busdepoamalapuramvoltage1, setBusdepoamalapuramvoltage1] = useState();
    const [busdepoamalapuramvoltage2, setBusdepoamalapuramvoltage2] = useState();
    const [busdepoamalapuramvoltage3, setBusdepoamalapuramvoltage3] = useState();
    const alertIsTrue1 = (busdepoamalapuramvoltage1 === "offline") || (busdepoamalapuramvoltage1 === "Offline");
    const alertIsTrue2 = (busdepoamalapuramvoltage2 === "offline") || (busdepoamalapuramvoltage2 === "Offline");
    const alertIsTrue3 = (busdepoamalapuramvoltage3 === "offline") || (busdepoamalapuramvoltage3 === "Offline"); useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://backend-k2pf.onrender.com/api/sensordata");
                const data = await response.json();
                setBusdepoamalapuramvoltage1(data.busdepoamalapuramvoltage1);
                setBusdepoamalapuramvoltage2(data.busdepoamalapuramvoltage2);
                setBusdepoamalapuramvoltage3(data.busdepoamalapuramvoltage3);
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
                <p className="busdepo__amalapuram__para">Bus Depo Road Amalapuram</p>
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
                                                value={busdepoamalapuramvoltage1 || "offline" || "Offline"}
                                                type="text"
                                                className="rainbow-p-around_medium text-center box"
                                                disabled={true}
                                            />
                                        </li>
                                        <li className="list-group-item text-center">
                                            <span className="input-label">Status</span>
                                            <Input
                                                value={(busdepoamalapuramvoltage1 === "Offline" || busdepoamalapuramvoltage1 === "offline") ? "Not Working" : "Working"}
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
                                                                {(busdepoamalapuramvoltage1 === "offline") || (busdepoamalapuramvoltage1 === "Offline") ? 'OFF' : 'ON'}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {busdepoamalapuramvoltage1 === "offline" || busdepoamalapuramvoltage1 === "Offline" ? (
                                                        <a href="https://maps.app.goo.gl/cEeqykRzgg45GdfbA" target="_blank" rel="noopener noreferrer" className="fault__text">
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
                                                value={busdepoamalapuramvoltage2 || "offline" || "Offline"}
                                                type="text"
                                                className="rainbow-p-around_medium text-center box"
                                                disabled={true}
                                            />
                                        </li>
                                        <li className="list-group-item text-center">
                                            <span className="input-label">Status</span>
                                            <Input
                                                value={(busdepoamalapuramvoltage2 === "Offline" || busdepoamalapuramvoltage2 === "offline") ? "Not Working" : "Working"}
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
                                                                {(busdepoamalapuramvoltage2 === "offline") || (busdepoamalapuramvoltage2 === "Offline") ? 'OFF' : 'ON'}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {busdepoamalapuramvoltage2 === "offline" || busdepoamalapuramvoltage2 === "Offline" ? (
                                                        <a href="https://maps.app.goo.gl/WpgnurR83wPYxJ3N7" target="_blank" rel="noopener noreferrer" className="fault__text">
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
                                                value={busdepoamalapuramvoltage3 || "offline" || "Offline"}
                                                type="text"
                                                className="rainbow-p-around_medium text-center box"
                                                disabled={true}
                                            />
                                        </li>
                                        <li className="list-group-item text-center">
                                            <span className="input-label">Status</span>
                                            <Input
                                                value={(busdepoamalapuramvoltage3 === "Offline" || busdepoamalapuramvoltage3 === "offline") ? "Not Working" : "Working"}
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
                                                                {(busdepoamalapuramvoltage3 === "offline") || (busdepoamalapuramvoltage3 === "Offline") ? 'OFF' : 'ON'}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {busdepoamalapuramvoltage3 === "offline" || busdepoamalapuramvoltage3 === "Offline" ? (
                                                        <a href="https://maps.app.goo.gl/i7jzTBTbejvMz8x58" target="_blank" rel="noopener noreferrer" className="fault__text">
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
export default Busdepoamalapuram;