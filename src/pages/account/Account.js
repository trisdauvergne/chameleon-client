import AccountInfo from '../../components/accountinfo/AccountInfo';
import ReviewFeed from '../../components/reviewfeed/ReviewFeed';

const Account = () => {
    const userId = document.cookie.split('=')[1];

  return (
    <section>
      <AccountInfo />
      <ReviewFeed userId={userId}/>
    </section>
  );
};

export default Account;