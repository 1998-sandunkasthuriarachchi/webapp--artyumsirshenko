import BalanceCard from '../components/common/BalanceCard';
import BottomNavBar from '../components/common/BottomNavigation';
import ProfileCard from '../components/common/ProfileCard';
import '../styles/App.css';

export default function Profile() {
    return (
        <div className="con">
            <div>
                <ProfileCard name="Bobbie Franckline" image="https://cdn3d.iconscout.com/3d/premium/thumb/star-coin-5225385-4380045.png" />
                <BalanceCard balance={250213} subtitle="Available Balance" />
            </div>
            <BottomNavBar />
        </div>
    );
}
