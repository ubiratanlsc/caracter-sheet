import React, { useState } from "react";
import './Tabs.css'
import '../../assets/css/style.css'

export const Magias = () => {
    const [isActive, setIsActive] = useState(1)
    const handleActive = (btn) => setIsActive(btn)
    const [isActive2, setIsActive2] = useState(1)
    const handleActive2 = (btn2) => setIsActive2(btn2)

    const niveis = [
        { id: 1, title: "nivel", },
        { id: 2, title: "nivel", },
        { id: 3, title: "nivel", },
        { id: 4, title: "nivel", },
        { id: 5, title: "nivel", },
        { id: 6, title: "nivel", },
        { id: 7, title: "nivel", },
        { id: 8, title: "nivel", },
        { id: 9, title: "nivel", },
    ]
    return (
        <div className='tabsContainer'>
            <h1>Magias</h1>
            <div className="btnContainer">
                <button className={`tabs ${isActive === 1 ? 'activeTab' : ''}`}
                    onClick={() => handleActive(1)}>Arcanas</button>
                <button className={`tabs ${isActive === 2 ? 'activeTab' : ''}`}
                    onClick={() => handleActive(2)}>Divinas</button>
                <button className={`tabs ${isActive === 3 ? 'activeTab' : ''}`}
                    onClick={() => handleActive(3)}>Jutsus</button>
            </div>

            {
                isActive === 1 && <div className="tabData">
                    <div className="tabContent">
                        <div className="btnContainer">
                            {niveis.map((index) =>
                                <button className={`tabs ${isActive2 === index.id ? 'activeTab' : ''}`}
                                    onClick={() => handleActive2(index.id ,console.log(index.id))}>{index.title}-{index.id}</button>
                            )}
                            <h1>AAAAAAAAAAA</h1>
                        </div>
                    </div>
                </div>}
            {
                isActive === 2 && <div className="tabData">
                    <div className="tabContent">
                        <h5>How ChatGPT Sparked 'Gold Rush' In Silicon Valley</h5>
                        <p>Updated: February 19, 2023</p>
                    </div>
                </div>
            }
            {
                isActive === 3 && <div className="tabData">
                    <div className="tabContent">
                        <h5>Watch: R Ashwin Rattles Steve Smith At Non-Striker's End,
                            Virat Kohli's Reaction Can't Be Missed
                        </h5>
                        <p>Updated: February 19, 2023</p>
                    </div>
                </div>
            }
        </div >
    );
}
