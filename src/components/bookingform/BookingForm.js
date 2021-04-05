import { host } from '../../config';
import { useHistory } from 'react-router-dom';
import './BookingForm.css'

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

    const goBack = () => {
        history.go(-1);
      }

    return (
        <article className="form-container">
            <button onClick={goBack} className="btn-close"><span className="material-icons-round close-icon">close</span></button>
            <h2 className="header">Request to book</h2>
            <form className="form-book" name="bookingForm" id="bookingForm" onSubmit={handleSubmit}>
                <label className="semibold">
                    From
                    <br/>
                    <input className="input-date" type="date" name="bookingFrom" required />
                    <br/>
                </label>
                <label className="semibold">
                    To
                    <br/>
                    <input className="input-date" type="date" name="bookingTo" required/>
                    <br/>
                    <br/>
                </label>
                <input type="hidden" value={listingId} name="listingId"/>
                <input type="hidden" value={ownerId} name="ownerId"/>
                <input type="hidden" value={renterId} name="renterId"/>
                <button className="btn-submit semibold" type="submit">Send Request</button>
            </form>
        </article>
    );
}

export default BookingForm