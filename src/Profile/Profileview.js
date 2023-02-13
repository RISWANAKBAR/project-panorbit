import React from 'react'
import './profileview.css'
import { json, Navigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import axios from 'axios';

// import 'reactjs-popup/dist/index.css';
import { ChatBubbleOutline } from '@mui/icons-material/';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


import Personaldata from '../personaldata/Personaldata';
import Comingsoon from '../comingsoonpage/Comingsoon';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function Profileview() {

    const id = useParams();
    const [chat, setchat] = useState(true)
    const [chatset, setchatset] = useState(true)
    const [trues, settrues] = useState(false)
    const [chatState, setChatState] = useState(true)
    const [profileState, setProfileState] = useState(false)

    const idval = id.val
    const [viewpage, setViewpage] = useState({
        role: "Profile"
    })
    const [chatdata, setchatdata] = useState([])

    const chatid = localStorage.getItem("chatid")
    // console.log("chatid", chatid)
    



    const [profiledetails, setprofiledetails] = useState([])
    const [singleprofile, setsingleprofile] = useState({})

    useEffect(() => {
        fetch(`https://panorbit.in/api/users.json`)
            .then(response => response.json())
            .then(resp => {
                console.log(resp)
                setprofiledetails(resp.users)
            })

    }, [])
    console.log("dataas.id", profiledetails);


    useEffect(() => {
        const filter = profiledetails?.filter((data) => {
            return data?.id == idval
        })
        setsingleprofile(filter[0])
     
    }, [profiledetails])
    console.log("profile====>", singleprofile);

    useEffect(() => {
        const filter = profiledetails?.filter((dataaas) => {
            return dataaas?.id == chatid
        })
        setchatdata(filter[0]) 
        console.log('filter',filter);
    }, [chatid])
    console.log(chatdata, "chatdata");

    const w3_open = () => {
        document.getElementById("mySidebar").style.display = "block";
    }

    const w3_close = () => {
        document.getElementById("mySidebar").style.display = "none";
    }
    const setChange = () => {
        setChatState(true)
        setProfileState(false)
        w3_close()
    }





    return (
        <>
            <div className='mainbody'>
                <div class="w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left" id="mySidebar">
                    <button class="w3-bar-item w3-button w3-large w3-hide-large" onClick={w3_close}>Close &times;</button>
                    <ul className="navmenu">
                        <li onClick={() => { setViewpage({ role: "Profile" }); w3_close() }}>
                            <p id={viewpage.role === 'Profile' ? 'navElement2' : 'navElement'}>

                                <span className='title' >Profile</span>
                            </p>
                        </li>
                        <div className="dif3"></div>
                        <li onClick={() => { setViewpage({ role: "Post" }); w3_close() }}>
                            <p id={viewpage.role === 'Post' ? 'navElement2' : 'navElement'}>

                                <span className='title' >Post</span>
                            </p>
                        </li>
                        <div className="dif3"></div>
                        <li onClick={() => { setViewpage({ role: "gallery" }); w3_close() }}>
                            <p id={viewpage.role === 'gallery' ? 'navElement2' : 'navElement'}>

                                <span className='title' >Gallery</span>
                            </p>
                        </li>
                        <div className="dif3"></div>
                        <li onClick={() => { setViewpage({ role: "Todo" }); w3_close() }}>
                            <p id={viewpage.role === 'Todo' ? 'navElement2' : 'navElement'}>

                                <span className='todo' >Todo</span>
                            </p>
                        </li>
                    </ul>
                </div>

                <div class="w3-main">
                    <div class="w3-teal">
                        <button class="w3-button w3-teal w3-xlarge w3-hide-large" onClick={w3_open}>&#9776;</button>

                    </div>


                </div>
                <div className='head'>
                    <div className="rf">
                        <div className='heading'> <p> {viewpage.role}</p> </div>
                        <div className='profilename' onClick={() => { settrues(!trues); }}>
                            <img src={singleprofile?.profilepicture} />

                            <p> {singleprofile?.name}</p>



                        </div>
                    </div>

                    <div className="dif"></div>

                    <div className='contentArea' onClick={setChange} >



                        {viewpage.role === "Profile" ? <Personaldata /> : <Comingsoon />}






                    </div>


                </div>
                <div className={trues == true ? " popup" : "none-popup"}>
                    <div className='popup1'>
                        <div className='stick'>
                            <center>

                                <img src={singleprofile?.profilepicture} />
                            </center>
                            <p > {singleprofile?.name} </p>
                            <p className='nm'>  {singleprofile?.email} </p>
                        </div>

                        {profiledetails && profiledetails.map((datass) => (
                            <>
                                <div className="dif4"></div>


                                <div className='namestyle1'  >
                                    <img className='img1' src={datass.profilepicture} />
                                    <p style={{ marginLeft: "12px", }} >   {datass.name}</p>

                                </div>

                            </>
                        ))}
                        <div className='btt'>
                            <div className='bttn'>
                                <a href='/'> Logut</a>
                            </div>
                        </div>







                    </div>





                </div>





            </div>


            {chat == true ?

                <div className='chathead' onClick={() => { setchat(false) }}>
                    <p > <ChatBubbleOutline />   Chats</p>
                    <p id='pp'><KeyboardArrowUpIcon /></p>


                </div> :
                <div className='chatbox'>
                    <div className='chatbtn' onClick={() => { setchat(true); setchatset(true) }}>
                        <p> <ChatBubbleOutline />    Chats <KeyboardArrowDownIcon /></p>
                        <p id='pp'></p>
                    </div>
                    <div className='chatlist'>
                        {profiledetails && profiledetails.map((datass) => (
                            <>



                                <div className='namestyle2' onClick={() => { localStorage.setItem("chatid", datass.id); setchatset(!chatset) }}  >
                                    <img className='img1' src={datass.profilepicture} />
                                    <p style={{ marginLeft: "10px", }} >   {datass.name}</p>
                                  
                                    <p id='pp'> </p>

                                </div>

                            </>
                        ))}



                    </div>




                </div>
            }
            <div className={chatset == false ? "chatpage" : "none-popup"} >
                <div className='chatpagehead' onClick={() => { setchatset(true) }} >
                    <img className='img1' src={chatdata?.profilepicture} />
                    <p  >   {chatdata?.name}</p>
                    <p><KeyboardArrowDownIcon /></p>
                





                </div>


            </div>







        </>
    )
}
