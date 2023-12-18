import "./Beachroad.css";
import { Card } from 'react-rainbow-components';
import pole from "../../images/pole.jpeg"
import { Input } from "react-rainbow-components";
import { useState, useEffect } from "react";
const Beachroad = () => {
    const [kotipallivoltage1, setKotipallivoltage1] = useState();
    const [kotipallivoltage2, setKotipallivoltage2] = useState();
    const [kotipallivoltage3, setKotipallivoltage3] = useState();
    const [kotipallicurrent, setKotipallicurrent] = useState(100);
    const [kotipallipower, setKotipallipower] = useState(200);
    const [kotipalliactivepower, setKotipalliactivepower] = useState(300);
    const [kotipallireactivepower, setKotipallireactivepower] = useState(400);
    const [kotipallipowerfactor, setKotipallipowerfactor] = useState(500);
    const [kotipallifrequency, setKotipallifrequency] = useState(600);
    const [latitudekotipalli1, setLatitudekotipalli1] = useState();
    const [longitudekotipalli1, setLongitudekotipalli1] = useState();
    const [latitudekotipalli2, setLatitudekotipalli2] = useState();
    const [longitudekotipalli2, setLongitudekotipalli2] = useState();
    const [latitudekotipalli3, setLatitudekotipalli3] = useState();
    const [longitudekotipalli3, setLongitudekotipalli3] = useState();
    const alertIsTrue1 = (kotipallivoltage1 === "offline") || (kotipallivoltage1 === "Offline");
    const alertIsTrue2 = (kotipallivoltage2 === "offline") || (kotipallivoltage2 === "Offline");
    const alertIsTrue3 = (kotipallivoltage3 === "offline") || (kotipallivoltage3 === "Offline");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://slbackend.onrender.com/api/sensordata");
                const data = await response.json();
                setKotipallivoltage1(data.kotipallivoltage1);
                setKotipallivoltage2(data.kotipallivoltage2);
                setKotipallivoltage3(data.kotipallivoltage3);
                setKotipallicurrent(data.kotipallicurrent);
                setKotipallipower(data.kotipallipower);
                setKotipalliactivepower(data.kotipalliactivepower);
                setKotipallireactivepower(data.kotipallireactivepower);
                setKotipallipowerfactor(data.kotipallipowerfactor);
                setKotipallifrequency(data.kotipallifrequency);
                setLatitudekotipalli1(data.latitudekotipalli1);
                setLatitudekotipalli2(data.latitudekotipalli2);
                setLatitudekotipalli3(data.latitudekotipalli3);
                setLongitudekotipalli1(data.longitudekotipalli1);
                setLongitudekotipalli2(data.longitudekotipalli2);
                setLongitudekotipalli3(data.longitudekotipalli3)
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
                <p className="beach__road__text">Main Road</p>
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
                                                value={kotipallivoltage1 || "offline" || "Offline"}
                                                type="text"
                                                className="rainbow-p-around_medium text-center box"
                                                disabled={true}
                                            />
                                        </li>
                                        <li className="list-group-item text-center">
                                            <span className="input-label">Status</span>
                                            <Input
                                                value={(kotipallivoltage1 === "Offline" || kotipallivoltage1 === "offline") ? "Not Working" : "Working"}
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
                                                                {(kotipallivoltage1 === "offline") || (kotipallivoltage1 === "Offline") ? 'OFF' : 'ON'}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {kotipallivoltage1 === "offline" || kotipallivoltage1 === "Offline" ? (
                                                        <>
                                                            <>
                                                                <a
                                                                    href={`https://maps.google.com/?q=${latitudekotipalli1},${longitudekotipalli1}`}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="fault__text"
                                                                >
                                                                    View Fault Location
                                                                </a>
                                                            </>
                                                        </>
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
                                                value={kotipallivoltage2 || "offline" || "Offline"}
                                                type="text"
                                                className="rainbow-p-around_medium text-center box"
                                                disabled={true}
                                            />
                                        </li>
                                        <li className="list-group-item text-center">
                                            <span className="input-label">Status</span>
                                            <Input
                                                value={(kotipallivoltage2 === "Offline" || kotipallivoltage2 === "offline") ? "Not Working" : "Working"}
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
                                                                {(kotipallivoltage2 === "offline") || (kotipallivoltage2 === "Offline") ? 'OFF' : 'ON'}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {kotipallivoltage2 === "offline" || kotipallivoltage2 === "Offline" ? (
                                                        <>
                                                            <>
                                                                <a
                                                                    href={`https://maps.google.com/?q=${latitudekotipalli2},${longitudekotipalli2}`}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="fault__text"
                                                                >
                                                                    View Fault Location
                                                                </a>
                                                            </>
                                                        </>
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
                                                value={kotipallivoltage3 || "offline" || "Offline"}
                                                type="text"
                                                className="rainbow-p-around_medium text-center box"
                                                disabled={true}
                                            />
                                        </li>
                                        <li className="list-group-item text-center">
                                            <span className="input-label">Status</span>
                                            <Input
                                                value={(kotipallivoltage3 === "Offline" || kotipallivoltage3 === "offline") ? "Not Working" : "Working"}
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
                                                                {(kotipallivoltage3 === "offline") || (kotipallivoltage3 === "Offline") ? 'OFF' : 'ON'}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {kotipallivoltage3 === "offline" || kotipallivoltage3 === "Offline" ? (
                                                        <>
                                                            <a
                                                                href={`https://maps.google.com/?q=${latitudekotipalli3},${longitudekotipalli3}`}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="fault__text"
                                                            >
                                                                View Fault Location
                                                            </a>
                                                        </>
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
            <Card className="show__card__total">
                <p className="para__kotipalli">Overall Street Data</p>
                <div className="row card__row">
                    <div className="col-12">
                        <div className="sub__box" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div className="card">
                                <ul className="list-group list-group-flush list">
                                    <li className="list-group-item text-center">
                                        <span className="input-label">Current</span>
                                        <Input
                                            value={kotipallicurrent}
                                            type="text"
                                            className="rainbow-p-around_medium text-center box"
                                            disabled={true}
                                        />
                                    </li>
                                    <li className="list-group-item text-center">
                                        <span className="input-label">Power</span>
                                        <Input
                                            value={kotipallipower}
                                            type="text"
                                            className="rainbow-p-around_medium text-center box input__container"
                                            disabled={true}
                                        />
                                    </li>
                                    <li className="list-group-item text-center">
                                        <span className="input-label">Active Power</span>
                                        <Input
                                            value={kotipalliactivepower}
                                            type="text"
                                            className="rainbow-p-around_medium text-center box"
                                            disabled={true}
                                        />
                                    </li>
                                    <li className="list-group-item text-center">
                                        <span className="input-label">Reactive Power</span>
                                        <Input
                                            value={kotipallireactivepower}
                                            type="text"
                                            className="rainbow-p-around_medium text-center box"
                                            disabled={true}
                                        />
                                    </li>
                                    <li className="list-group-item text-center">
                                        <span className="input-label">Power Factor</span>
                                        <Input
                                            value={kotipallipowerfactor}
                                            type="text"
                                            className="rainbow-p-around_medium text-center box"
                                            disabled={true}
                                        />
                                    </li>
                                    <li className="list-group-item text-center">
                                        <span className="input-label">Frequency</span>
                                        <Input
                                            value={kotipallifrequency}
                                            type="text"
                                            className="rainbow-p-around_medium text-center box"
                                            disabled={true}
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};
export default Beachroad;