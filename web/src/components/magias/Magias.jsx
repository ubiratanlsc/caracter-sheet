import React, { useEffect, useState } from "react";
import './Tabs.css'
import '../../assets/css/style.css'
import api from "../../services/api";

export const Magias = () => {
    
    const [value, setValue] = useState([])
    const [magic, setMagic] = useState([])
    const handleActive = (btn) => setIsActive(btn)
    const handleActive2 = (btn2) => setIsActive2(btn2)
    const handleActive3 = (btn3) => setIsActive3(btn3)
    // const handleActive4 = (btn4) => setIsActive3(btn4)
    const [isActive, setIsActive] = useState(1)
    const [isActive2, setIsActive2] = useState(1)
    const [isActive3, setIsActive3] = useState()
    const [isActive4, setIsActive4] = useState(1)
    const [isActive5, setIsActive5] = useState()

    useEffect(() => {
        api.get("magias").then(({data}) => {
            setMagic(data)
        })
        console.log(magic);        
    }, [])
    const niveis = [
        { id: 0, title: "nivel", sigla: "n0" },
        { id: 1, title: "nivel", sigla: "n1" },
        { id: 2, title: "nivel", sigla: "n2" },
        { id: 3, title: "nivel", sigla: "n3" },
        { id: 4, title: "nivel", sigla: "n4" },
        { id: 5, title: "nivel", sigla: "n5" },
        { id: 6, title: "nivel", sigla: "n6" },
        { id: 7, title: "nivel", sigla: "n7" },
        { id: 8, title: "nivel", sigla: "n8" },
        { id: 9, title: "nivel", sigla: "n9" },
    ]   
    return (
        <div className='tabsContainer' >
            
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
                            {niveis.map((index, indice) =>
                                <button className={`tabs ${isActive2 === index.id ? 'activeTab' : ''}`} key={indice}
                                    onClick={() => handleActive2(index.id, handleActive3(magic[`${index.sigla}`]))}>{index.title}-{index.id}</button>
                            )}
                        </div>
                    </div>
                </div>}
            {
                isActive === 2 && <div className="tabData">
                <div className="tabContent">
                    <div className="btnContainer">
                        {niveis.map((index, indice) =>
                            <button className={`tabs ${isActive4 === index.id ? 'activeTab' : ''}`} key={indice}
                                onClick={() => handleActive2(index.id, handleActive5(magic[`${index.sigla}`]))}>{index.title}-{index.id}</button>
                        )}
                    </div>
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
                niveis.map((ind, indexx) => isActive2 === ind.id && <div className="tabData" key={indexx} >
                    <div className="tabContent" key={ind.title}>
                        {isActive3?.map((index, indce) => <h5 key={indce}>{index.name}</h5>)}


                        <p>Updated: February 19, 2023</p>
                    </div>
                </div>)


            }
            {
                niveis.map((ind, indexx) => isActive4 === ind.id && <div className="tabData" key={indexx} >
                    <div className="tabContent" key={ind.title}>
                        {isActive5?.map((index, indce) => <h5 key={indce}>{index.name}</h5>)}


                        <p>Updated: February 19, 2023</p>
                    </div>
                </div>)


            }





        </div >
    );
}
