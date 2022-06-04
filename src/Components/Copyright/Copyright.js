import React, {useState} from 'react';
import './Copyright.css'

function Copyright(props) {

    const [date, setDate] = useState(new Date().getFullYear());

    return (
        <div className='copyright_sec'>
            Copyright ARONSOL &copy; {date}. All Rights Reserved.
        </div>
    );
}

export default Copyright;