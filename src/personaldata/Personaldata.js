import React from 'react'
import './personaldata.css'
import { useState, useEffect } from 'react';

export default function Personaldata() {
    const id = localStorage.getItem("ids")
    console.log(id)

    const [profiledetails, setprofiledetails] = useState([])
    const [singleprofile, setsingleprofile] = useState({})
    const [trues, settrues] = useState(false)
    useEffect(() => {
        fetch(`https://panorbit.in/api/users.json`)
            .then(response => response.json())
            .then(resp => {
                console.log(resp)
                setprofiledetails(resp.users)
            })

    }, [])
    console.log("dataas", profiledetails);
    useEffect(() => {
        const filter = profiledetails?.filter((data) => {
            return data?.id == id
        })
        setsingleprofile(filter[0])
    }, [profiledetails])
    console.log("profile====>", singleprofile);
    return (
        <div className='body2'>
            
            <div className='part2'>
                <center>
                    <div className='profilepic'>
                        <img src={singleprofile?.profilepicture} />
                        <p>{singleprofile?.name}</p>
                    </div>
                </center>
                <div className='details'>
                    <table>
                        <tr>
                            <td>Username </td>
                            <td>:</td>
                            <td className='bold1'>{singleprofile?.name}</td>
                        </tr>
                        <tr>
                            <td>Email </td>
                            <td>:</td>
                            <td className='bold1' >{singleprofile?.email}</td>
                        </tr>
                        <tr>
                            <td>Phone </td>
                            <td> : </td>
                            <td className='bold1'>{singleprofile?.phone?.slice(0, 14)}</td>
                        </tr>
                        <tr>
                            <td>Website </td>
                            <td> : </td>
                            <td className='bold1'>{singleprofile?.website}</td>
                        </tr>


                    </table>
                </div><br />
                <div className="dif"></div>
                <p style={{ textAlign: "center" }}> Company</p>


                <div className='details1'>

                    <table>
                        <tr>
                            <td>Name </td>
                            <td>:</td>
                            <td className='bold1'>{singleprofile?.company?.name}</td>
                        </tr>
                        <tr>
                            <td>catchPhrase
                            </td>
                            <td>:</td>
                            <td className='bold1' >{singleprofile?.company?.catchPhrase}</td>
                        </tr>
                        <tr>
                            <td>bs </td>
                            <td> : </td>
                            <td className='bold1'>{singleprofile?.company?.bs}</td>
                        </tr>



                    </table>






                </div>


            </div>
            <div className="dif1"></div>

            <div className='part3'>
                <p>Address:</p>
                <div className='details2'>
                    <table>
                        <tr>
                            <td>Street </td>
                            <td>:</td>
                            <td className='bold1'>{singleprofile?.address?.street}</td>
                        </tr>
                        <tr>
                            <td>Suite </td>
                            <td>:</td>
                            <td className='bold1' >{singleprofile?.address?.suite}</td>
                        </tr>
                        <tr>
                            <td>City </td>
                            <td> : </td>
                            <td className='bold1'>{singleprofile?.address?.city}</td>
                        </tr>
                        <tr>
                            <td>Zipcode </td>
                            <td> : </td>
                            <td className='bold1'>{singleprofile?.address?.zipcode}</td>
                        </tr>



                    </table><br />
                    <div className='map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.4051603706222!3d28.50292593193056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1585040658255!5m2!1sen!2sin" allowfullscreen style={{ frameborder: "0", border: "0", width: "100%", height: "250px", borderRadius: "10px" }} ></iframe>
                        <div id='mapdata' >
                            <span>Lat:<span className='BoldData'>{singleprofile?.address?.geo.lat}</span> </span>
                            <span>Long:<span className='BoldData'>{singleprofile?.address?.geo.lng}</span> </span>
                        </div>
                    </div>



                </div>
            </div>
    

        </div>
    )
}
