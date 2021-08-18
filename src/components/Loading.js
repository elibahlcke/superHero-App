import React from 'react';
import {Spinner} from 'reactstrap';

export default function Loading() {
    return (
        <div>
            <br></br>
            <Spinner style={{ width: '3rem', height: '3rem' }} color="light" />{' '}

        </div>
    )
}
