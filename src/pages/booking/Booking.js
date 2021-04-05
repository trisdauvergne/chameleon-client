import BookingForm from '../../components/bookingform/BookingForm';
import { useState, useEffect } from 'react';
import { host } from '../../config';

const Booking = ({ match }) => {
  const [ ownerId, setOwnerId ] = useState('');

  const getOwner = async () => {
      const listingData = await fetch(`${host}/listings/${match.params.listingId}`);
      const listingInfo = await listingData.json();
      setOwnerId(listingInfo.ownerId);
  }

  useEffect(() => {
      getOwner();
  }, []);

  return (
    <div>
      <BookingForm listingId={match.params.listingId} ownerId={ownerId}/>
    </div>
  )
}

export default Booking;
