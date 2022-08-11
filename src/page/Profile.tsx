import BalanceCard from '../components/common/BalanceCard';
import BottomNavBar from '../components/common/BottomNavigation';
import ProfileCard from '../components/common/ProfileCard';
import '../styles/App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { url } from '../api';

export default function Profile() {
    const [data, setData] = useState();

    const fetchData = async () => {
        await axios
            .get(`${url}data`)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        fetchData();
    }, []);
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
