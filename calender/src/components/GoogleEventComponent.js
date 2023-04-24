import React, { useState, useEffect } from 'react';


function GoogleEventComponent(){
    const [signedin,setSignedIn] = useState(false);
    const submit = (e) =>{
        e.preventDefault();
    }
    return(
        <div className='calenderEvent-wrapper'>
            <div className='header'>
                <h1>Add an event to google Calender</h1>
            </div>
            {!signedin? <div className='google-login'>
                <p>Login in to Google</p>
                <button onClick={()=>getAuthToGoogle()}>Sign In</button>
            </div>:
            <div className='body'>
                <div className='signout'>
                    <p>Email: {googleAuthedEmail}</p>
                    <button onClick={()=>_signOutFromGoogle()}>Sign Out</button>
                </div>
                <form>
                    <div className='eventItem'>
                        <label>Description</label>
                        <input placeholder='Description...' value={description} onChange={e=>setDescription(e.target.value)}></input>
                    </div>
                    <div  className='eventItem'>
                        <label>Start Time</label>
                        <input type="datetime-local" value={startTime} onChange={e=>setStartTime(e.target.value)}></input>
                    </div>
                    <div  className='eventItem'>
                        <label>End Time</label>
                        <input type="datetime-local" value={endTime} onChange={e=>setEndTime(e.target.value)}></input>
                    </div>
                    <button type='submit' onClick={(e)=>submit(e)}>Submit</button>
                </form>
            </div>}
        </div>
    )
}
export default GoogleEventComponent