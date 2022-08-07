import React from 'react';

interface profileTypes {
    name: string;
    image: string;
}

const ProfileCard = ({ name, image }: profileTypes) => {
    return (
        <div>
            <img src="./assets/Component 1.png" alt="profile-card" />
            <div className="profile-header">
                <h2 className="profile-title">My Finances</h2>
                <img src="./assets/face.jpg" alt="pp" className="face-logo" />
                <h2 className="subtitle">Personal account</h2>
                <h2 className="profile-name">{name}</h2>
                <img src={image} alt="coin-img" width="250px" />
            </div>
        </div>
    );
};

export default ProfileCard;
