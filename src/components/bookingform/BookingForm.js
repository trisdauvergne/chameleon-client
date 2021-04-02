import { host } from '../../config';

const BookingForm = ({listingId, ownerId}) => {
    return (
        <form method="POST" action={`${host}/bookings`}>
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
            <button type="submit">Send Request</button>
        </form>
    );
}

export default BookingForm