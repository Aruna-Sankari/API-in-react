import React from 'react'
import {  useDispatch, useSelector } from "react-redux";
import { useSearchParams } from 'react-router-dom';
import './Api.css'
 const Homee=()=>{
       let state=useSelector((samp)=>samp)
        console.log(state)
        let dispatch=useDispatch()
        console.log(dispatch)
     
    let [param]=useSearchParams()

    console.log(param);
    console.log(Number(param.get("id")))

    return <section>
        <div>
            
            <div>
                {
                    state.data.arr1.map((e,i)=>{
                        return e.id===(Number(param.get("id")))?<div key={i} className="card-col">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={e.image.original} alt='' />
                                    </div>
                                    <div className="card-con">

                                        <h3>Name:{e.name}</h3>

                                        <h5>Season: {e.season}</h5>
                                        <p>Runtime:{e.runtime}</p>
                                    </div>
                                </div>
                            </div>:''
                        
                    })
                    

                }
            </div>
        </div>

    </section>
}

 export default Homee