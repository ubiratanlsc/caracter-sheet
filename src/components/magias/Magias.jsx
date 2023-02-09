import React, { useEffect, useState } from "react";
import './Tabs.css'
import '../../assets/css/style.css'

export const Magias = () => {
    const [isActive, setIsActive] = useState(1)
    const handleActive = (btn) => setIsActive(btn)
    const [isActive2, setIsActive2] = useState(1)
    const handleActive2 = (btn2) => setIsActive2(btn2)
    const [value, setValue] = useState([])
    const [magic, setMagic] = useState([])
    const [magics, setMagics] = useState([])
    useEffect(() => {
        (async () => {
            fetch("http://localhost:5000/magias", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    setValue(data)
                    setMagic(...data);
                })
                .catch((error) => console.log(error))
            // console.log(magic.tipo);
            // console.log(value);
        })();

    }, [])
    const array = magic.n1
    // array.map((index, key) => console.log(index.name));
    console.log(array);
    // console.log(value[0].nivel1);
    const niveis = [
        { id: 0, title: "nivel", },
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
    // magic.map(function  (magic) {   return  magic   + " " + niveis  });
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
                                    onClick={() => handleActive2(index.id, console.log(index.id))}>{index.title}-{index.id}</button>
                            )}
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
            {
                niveis.map((ind) =>
                    isActive2 === ind && console.log(ind + 'ind') && <div className="tabData">
                        <div className="tabContent">
                            {magic.n`${ind}`?.map((index) => <h5 key={index.id}>{index.name}</h5>)}


                            <p>Updated: February 19, 2023</p>
                        </div>
                    </div>
                    )
                }





        </div >
    );
}
