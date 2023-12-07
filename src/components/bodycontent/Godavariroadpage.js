import "./Godavariroadpage.css";
import { Card } from 'react-rainbow-components';
import { Input } from "react-rainbow-components";
import pole from "../../images/pole.jpeg"
import { useEffect, useState } from "react";
const Godavariroadpage = () => {
    const [godavarivoltage1, setGodavarivoltage1] = useState();
    const [godavarivoltage2, setGodavarivoltage2] = useState();
    const [godavarivoltage3, setGodavarivoltage3] = useState();
    const alertIsTrue1 = (godavarivoltage1 === "offline") || (godavarivoltage1 === "Offline");
    const alertIsTrue2 = (godavarivoltage2 === "offline") || (godavarivoltage2 === "Offline");
    const alertIsTrue3 = (godavarivoltage3 === "offline") || (godavarivoltage3 === "Offline");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://backend-k2pf.onrender.com/api/sensordata");
                const data = await response.json();
                setGodavarivoltage1(data.godavarivoltage1);
                setGodavarivoltage2(data.godavarivoltage2);
                setGodavarivoltage3(data.godavarivoltage3);
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
                <p className="para__godavari">Godavari Street</p>
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
                                                value={godavarivoltage1 || "offline" || "Offline"}
                                                type="text"
                                                className="rainbow-p-around_medium text-center box"
                                                disabled={true}
                                            />
                                        </li>
                                        <li className="list-group-item text-center">
                                            <span className="input-label">Status</span>
                                            <Input
                                                value={(godavarivoltage1 === "Offline" || godavarivoltage1 === "offline") ? "Not Working" : "Working"}
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
                                                                {(godavarivoltage1 === "offline") || (godavarivoltage1 === "Offline") ? 'OFF' : 'ON'}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {godavarivoltage1 === "offline" || godavarivoltage1 === "Offline" ? (
                                                        <a href="https://maps.app.goo.gl/mVwWVPHhzbT6PZcE6" target="_blank" rel="noopener noreferrer" className="fault__text">
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
                                                value={godavarivoltage2 || "offline" || "Offline"}
                                                type="text"
                                                className="rainbow-p-around_medium text-center box"
                                                disabled={true}
                                            />
                                        </li>
                                        <li className="list-group-item text-center">
                                            <span className="input-label">Status</span>
                                            <Input
                                                value={(godavarivoltage2 === "Offline" || godavarivoltage2 === "offline") ? "Not Working" : "Working"}
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
                                                                {(godavarivoltage2 === "offline") || (godavarivoltage2 === "Offline") ? 'OFF' : 'ON'}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {godavarivoltage2 === "offline" || godavarivoltage2 === "Offline" ? (
                                                        <a href="https://maps.app.goo.gl/SMsjMoo8Ea6Fqqnv9" target="_blank" rel="noopener noreferrer" className="fault__text">
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
                                                value={godavarivoltage3 || "offline" || "Offline"}
                                                type="text"
                                                className="rainbow-p-around_medium text-center box"
                                                disabled={true}
                                            />
                                        </li>
                                        <li className="list-group-item text-center">
                                            <span className="input-label">Status</span>
                                            <Input
                                                value={(godavarivoltage3 === "Offline" || godavarivoltage3 === "offline") ? "Not Working" : "Working"}
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
                                                                {(godavarivoltage3 === "offline") || (godavarivoltage3 === "Offline") ? 'OFF' : 'ON'}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {godavarivoltage3 === "offline" || godavarivoltage3 === "Offline" ? (
                                                        <a href="https://maps.app.goo.gl/LMmcZqR4sszU7eNu9" target="_blank" rel="noopener noreferrer" className="fault__text">
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
export default Godavariroadpage;