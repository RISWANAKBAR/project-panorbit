import React from 'react'
import './landing.css'
import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom'

import axios from 'axios';



export default function Landing(getid) {

    const Navigate = useNavigate()
    const [profiledata, setprofiledata] = useState()
    const [idd, setidd] = useState()
    useEffect(() => {
        axios.get('https://panorbit.in/api/users.json')
            .then(response => {
                console.log(response);
                setprofiledata(response?.data.users)

            })
        console.log("data", profiledata);

    }, [])


    return (
        <div className='body1'>
            <div className='list1'>
                <div className='head1'>
                    <span>Select a Account</span>


                </div>
                <div className='names1'>
                    {profiledata && profiledata.map((data) => (
                        <>

                            <div className='namestyle' onClick={() => {localStorage.setItem("ids",data.id); Navigate(`./profile/${data.id}`) ;   } }>
                                <img className='img1' src={data.profilepicture} />
                                <p style={{ marginLeft: "12px", marginTop: "9px" }} >   {data.name}</p>

                            </div>
                            <div className="dif"></div>
                        </>
                    ))}


                </div>






            </div>





        </div>
    )
}
