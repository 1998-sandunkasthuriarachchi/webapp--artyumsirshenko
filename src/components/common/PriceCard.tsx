import React from 'react';
import { MdClose } from 'react-icons/md';
import { FcCheckmark } from 'react-icons/fc';

interface priceCardTypes {
    title: string;
    price: string;
    options: optionsTypes[];
    buttonTitle: string;
    color: String;
}

interface optionsTypes {
    name: string;
    active: boolean;
}

const PriceCard = ({ title, price, buttonTitle, color, options }: priceCardTypes) => {
    return (
        <div className="card mb-5 mb-lg-0">
            <div className="card-body rounded-2 shadow-lg" style={{ borderTop: `8px solid ${color}` }}>
                <h5 className="card-title text-uppercase" style={{ fontWeight: 'bold' }}>
                    {title}
                </h5>
                <h6 className="text-muted">Based on average cost of office</h6>
                <h6 className="card-price ">
                    {`${price}$`} <span className="period">/ per month</span>
                </h6>
                <hr />
                <ul className="list-unstyled">
                    {options.map((item, index) => {
                        return (
                            <li key={index} className={`${!item.active && 'text-muted'}`}>
                                <span style={{ marginRight: '5px' }}>{item.active ? <FcCheckmark size={20} /> : <MdClose size={20} />}</span>
                                {item.name}
                            </li>
                        );
                    })}
                </ul>
                <div className="d-grid">
                    <button className="rounded border-0 p-2  w-100 hover text-white" style={{ backgroundColor: `${color}` }}>
                        {buttonTitle}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PriceCard;
