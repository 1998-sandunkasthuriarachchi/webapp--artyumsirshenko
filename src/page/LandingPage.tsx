import React from 'react';
import PriceCard from '../components/common/PriceCard';
import { SiFacebook } from 'react-icons/si';
import { BsInstagram, BsDiscord } from 'react-icons/bs';
import { FaFacebookMessenger } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface LandingPageTypes {}

const LandingPage = () => {
    const navigate = useNavigate();

    const data = [
        {
            id: '1',
            title: 'Free',
            price: '0',
            buttonTitle: 'Free plan',
            color: '#808080',
            options: [
                {
                    id: '1',
                    name: 'Limited physical space',
                    active: true
                },
                {
                    id: '2',
                    name: 'Limited physical space',
                    active: true
                },
                {
                    id: '3',
                    name: 'Community Access',
                    active: false
                },
                {
                    id: '4',
                    name: 'Unlimited Public Projects',
                    active: false
                },
                {
                    id: '5',
                    name: 'Limited physical space',
                    active: false
                },
                {
                    id: '6',
                    name: 'Monthly Status Reports',
                    active: false
                },
                {
                    id: '7',
                    name: '2GB Storage',
                    active: true
                }
            ]
        },
        {
            id: '2',
            title: 'Plus',
            price: '25',
            buttonTitle: 'Free 30 sdays trial',
            color: '#4d4dff',
            options: [
                {
                    id: '1',
                    name: 'Limited physical space',
                    active: true
                },
                {
                    id: '2',
                    name: 'Limited physical space',
                    active: true
                },
                {
                    id: '3',
                    name: 'Community Access',
                    active: true
                },
                {
                    id: '4',
                    name: 'Unlimited Public Projects',
                    active: true
                },
                {
                    id: '5',
                    name: 'Limited physical space',
                    active: false
                },
                {
                    id: '6',
                    name: 'Monthly Status Reports',
                    active: false
                },
                {
                    id: '7',
                    name: '5GB Storage',
                    active: true
                }
            ]
        },
        {
            id: '3',
            title: 'Pro',
            price: '50',
            buttonTitle: 'Free 30 sdays trial',
            color: '#17A589',
            options: [
                {
                    id: '1',
                    name: 'Limited physical space',
                    active: true
                },
                {
                    id: '2',
                    name: 'Limited physical space',
                    active: true
                },
                {
                    id: '3',
                    name: 'Community Access',
                    active: true
                },
                {
                    id: '4',
                    name: 'Unlimited Public Projects',
                    active: true
                },
                {
                    id: '5',
                    name: 'Limited physical space',
                    active: true
                },
                {
                    id: '6',
                    name: 'Monthly Status Reports',
                    active: true
                },
                {
                    id: '7',
                    name: '10GB Storage',
                    active: true
                }
            ]
        }
    ];
    return (
        <main>
            <div className="hero mb-5">
                <div className="px-5 py-2">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="py-2 float-end">
                                <button className="btn-no-backgroud p-2 px-4 hover" onClick={() => navigate('/login')}>
                                    Login
                                </button>
                            </div>
                        </div>
                        <div className="row py-5">
                            <div className="col-lg-7"></div>
                            <div className="col-lg-5 hero-text">
                                <h1 className="text-white" style={{ fontWeight: 'bold' }}>
                                    Lorem ipsum
                                </h1>
                                <h2 className="text-white" style={{ fontWeight: 'bold' }}>
                                    Lorem ipsum dolor sit amet
                                </h2>
                                <p className="text-white">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias autem odio voluptatibus? Deserunt, culpa, maiores reprehenderit aperiam incidunt aut quisquam magni
                                    dolorem est iusto alias quos iure? Quisquam, voluptatibus facilis?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-12">
                        <h2 className="text-center" style={{ fontWeight: 'bold' }}>
                            One-tench the price of an
                            <br /> office,ten times the value
                        </h2>
                        <h6 className="text-center text-muted">subtitle here</h6>
                    </div>
                </div>
                <div className="row py-5">
                    {data.map((item, index) => {
                        return (
                            <div className="col-md-4" key={index}>
                                <PriceCard title={item.title} buttonTitle={item.buttonTitle} price={item.price} color={item.color} options={item.options} />
                            </div>
                        );
                    })}
                </div>
                <div className="row pt-5">
                    <div className="col-lg-12 d-flex justify-content-center align-items-center">
                        <div className="mb-4 d-flex justify-content-between">
                            <div className="round d-flex justify-content-center align-items-center me-5 p-2">
                                <a href="" className="social-link">
                                    <BsDiscord size={20} />
                                </a>
                            </div>
                            <div className="round d-flex justify-content-center align-items-center me-5 p-2">
                                <a href="" className="social-link">
                                    <BsInstagram size={20} />
                                </a>
                            </div>
                            <div className="round d-flex justify-content-center align-items-center me-5 p-2">
                                <a href="" className="social-link">
                                    <SiFacebook size={20} />
                                </a>
                            </div>
                            <div className="round d-flex justify-content-center align-items-center p-2">
                                <a href="" className="social-link">
                                    <FaFacebookMessenger size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default LandingPage;
