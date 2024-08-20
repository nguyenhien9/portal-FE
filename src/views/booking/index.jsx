import React from 'react'
import { Toolbar } from '../../components';

const Booking = () => {
    return <div>
        <Toolbar text="Bookings Management" buttons={[
            { text: 'Add Booking', type: 'primary', onClick: () => console.log("first") },
        ]} />
    </div>;
}

export default Booking