import UpdateListingForm from '../../components/updatelistingform/UpdateListingForm';

const UpdateListing = ({ match }) => {
    return (
        <div>
            <UpdateListingForm listingId={match.params.listingid}/>
        </div>
    )
}

export default UpdateListing
