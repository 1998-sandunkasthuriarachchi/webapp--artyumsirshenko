import React from "react";

interface balanceTypes{
    balance:Number,
    subtitle:String
}

const BalanceCard = ({subtitle,balance}:balanceTypes) =>{
    return(
        <div style={{marginTop:'50px'}}>
            <h2 className='subtitle'>{subtitle}</h2>
            <div className="balance-card-waraper">
                <div className="balance-card">
                    <h1>{`$${balance}`}</h1>
                </div>
            </div>
        </div>
    );
}

export default BalanceCard;