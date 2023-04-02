import React, { useEffect, useState } from "react";
import './Tabs.css'
import './magic.css'
// import '../../assets/css/style.css'
import api from "../../services/api";
import Card from "../cards/Card";

export const Magias = () => {
    const [magic, setMagic] = useState([])
    const [accActive, setAccActive] = useState(0)
    const [arcanaAt, setArcanaAt] = useState("")
    const [divinaAt, setDivinaAt] = useState("")
    const typeActive = (btn) => setIsActive(btn)
    const nivelActive = (btn2) => setIsActive2(btn2)
    const handleActive3 = (btn3) => setIsActive3(btn3)
    const handleActive4 = (btn4) => setIsActive4(btn4)
    const [isActive, setIsActive] = useState(1)
    const [isActive2, setIsActive2] = useState(1)
    const [isActive3, setIsActive3] = useState()
    const [isActive4, setIsActive4] = useState(1)
    const [isActive5, setIsActive5] = useState()

    useEffect(() => {
        api.get("magias").then(({ data }) => {
            setMagic(data)
        })

    }, [])
    const arcanas = magic.filter(tipo => (tipo.tipo == "arcana"))
    const divinas = magic.filter(tipo => (tipo.tipo == "divina"))
    const acordActive = (index) => {
        if (accActive === 0) {
            setAccActive(index)
        } else {
            setAccActive(0)
        }
    }
    function acordvisible(id, tipo) {
        if (tipo == "arcana") {
            setArcanaAt(...arcanas.filter(tipo => (tipo._id == id)))
        }
        else {
            setDivinaAt(...divinas.filter(tipo => (tipo._id == id)))
        }
    }
    console.log(arcanaAt);
    // console.log(mostra);

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
                    onClick={() => typeActive(1)}>Arcanas</button>
                <button className={`tabs ${isActive === 2 ? 'activeTab' : ''}`}
                    onClick={() => typeActive(2)}>Divinas</button>
                <button className={`tabs ${isActive === 3 ? 'activeTab' : ''}`}
                    onClick={() => typeActive(3)}>Jutsus</button>
            </div>

            {
                isActive === 1 && <div className="tabData">
                    <div className="tabContent">
                        <div className="btnContainer">
                            {niveis.map((index, indice) =>
                                <button className={`tabs ${isActive2 === index.id ? 'activeTab' : ''}`} key={indice}
                                    onClick={() => nivelActive(index.id)}>{index.title}-{index.id}</button>
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
                                    onClick={() => handleActive4(index.id)}>{index.title}-{index.id}</button>
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
                niveis.map((ind, indexx) => isActive === 1 && isActive2 === ind.id && <div className="tabData" key={indexx} >
                    <div className="tabContent" key={ind.title}>
                        {arcanas?.map((index, indce) => isActive2 === index.nivel &&
                            <div className="magic-titulo" key={indce} onClick={() => acordActive(1, acordvisible(index._id, index.tipo))}>
                                <span>{index.titulo}</span>
                            </div> &&  <Card props={accActive}/>
                        )}
                        {/* const arcanas = magic.filter(tipo => (tipo.tipo == "arcana")) */}
                        {accActive === 1 ? <div className="acord">
                            <div className="acord-titulo">{arcanaAt.titulo}</div>
                            <p>{arcanaAt.beneficio}</p>
                        </div> : null}
                    </div>
                </div>)
            }
            {/* {
                niveis.map((ind, indexx) => isActive === 1 && isActive2 === ind.id && <div className="tabData" key={indexx} >
                    <div className="tabContent" key={ind.title}>
                        {arcanas?.map((index, indce) => isActive2 === index.nivel &&
                            <div className="magic-titulo" key={indce} onClick={() => acordActive(1, acordvisible(index._id, index.tipo))}> <span>{index.titulo}</span> </div>
&& <Card props={accActive}/>
                        )}
                        {accActive === 1 ?
                        <Card props={1}/> &&
                            <div className="acord">
                                <div className="acord-titulo">{arcanaAt.titulo}</div>
                                <p>{arcanaAt.beneficio}</p>
                            </div> : null
                        }
                    </div>
                </div>)
            } */}
            {
                niveis.map((ind, indexx) => isActive === 2 && isActive4 === ind.id && <div className="tabData" key={indexx} >
                    <div className="tabContent" key={ind.title}>
                        {divinas?.map((index, indce) => isActive4 === index.nivel &&
                            <h5 key={indce}>{index.titulo}</h5>)}
                        <p>Updated: February 19, 2023</p>
                        <p>teste divino</p>
                    </div>
                </div>)


            }





        </div >
    );
}
