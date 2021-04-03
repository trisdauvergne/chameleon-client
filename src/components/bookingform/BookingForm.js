import { host } from '../../config';
import { useHistory } from 'react-router-dom';

const BookingForm = ({listingId, ownerId}) => {
    const renterId = document.cookie.split('=')[1];
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = document.getElementById('bookingForm');
        const formData = new FormData(form);

        await fetch(`${host}/bookings`, { method: 'POST', body: formData });
        history.push('/deals/ongoing');
    };

    return (
        <form name="bookingForm" id="bookingForm" onSubmit={handleSubmit}>
            <label>
                From
                <input type="date" name="bookingFrom" required/>
            </label>
            <label>
                To
                <input type="date" name="bookingTo" required/>
            </label>
            <input type="hidden" value={listingId} name="listingId"/>
            <input type="hidden" value={ownerId} name="ownerId"/>
            <input type="hidden" value={renterId} name="renterId"/>
            <button type="submit">Send Request</button>
        </form>
    );
}

export default BookingForm