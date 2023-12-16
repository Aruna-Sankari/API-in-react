import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { handlearr1 } from '../../Slice.js';
import {useNavigate} from 'react-router-dom'
import './Api.css'
const Api = () => {
    let state = useSelector((samp) => samp)
    console.log(state)
    let dispatch = useDispatch()
    console.log(dispatch)

    useEffect(() => {
        fetch('https://api.tvmaze.com/shows/1/episodes')
            .then(response => response.json())
            .then(json => dispatch(handlearr1(json)))

    }, [])
    let a=useNavigate()
    const handle=(id)=>{
        console.log(id)
        a(`/Home?id=${id}`) 

    }
     return <section>
        <h2 style={{ textAlign: "center" }}>API</h2>
        <div>

            <div>
                <div className="row">
                    {
                        state.data.arr1.map((e, i) => {
                            console.log(e)
                            return <div key={i} className="card-col">
                                <div className="card" onClick={()=>handle(e.id)}>
                                    <div className="card-image">
                                        <img src={e.image.original} alt='' />
                                    </div>
                                    <div className="card-con">

                                        <h3>Name:{e.name}</h3>

                                        <h5>Season: {e.season}</h5>
                                        <p>Runtime:{e.runtime}</p>
                                    </div>
                                </div>
                            </div>

                        })


                    }
                </div>
            </div>
        </div>

    </section>
}

export default Api