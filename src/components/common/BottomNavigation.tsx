import React,{ useState } from 'react'

import { BiUser } from 'react-icons/bi'
import { TbWallet } from 'react-icons/tb';
import { HiOutlineChartPie } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';


const BottomNavBar = () => {
    
    const [activeTabs, setActiveTabs] = useState(String)
    return (
        <div className='bottom-nav'>
            <div className='bn-tab'>
                {activeTabs === 'wallet' ?
                <div className='btnActive'>
                    <TbWallet
                        style={{fontWeight:'200'}}
                        size='35'
                        color='#E08958'
                        onClick={() => setActiveTabs('wallet')}
                    />   </div>:
                    
                    <TbWallet
                        size='35'
                        color='#E08958'
                        onClick={() => setActiveTabs('wallet')}
                    />
                  
                    }
            </div>
            <div className='bn-tab'>
                {activeTabs === 'PieChart' ?
                  <div className='btnActive'>
                    <HiOutlineChartPie
                        size='35'
                        color='#E08958'
                        onClick={() => setActiveTabs('PieChart')}
                    /> </div>:
                    <HiOutlineChartPie
                        size='35'
                        color='#E08958'
                        onClick={() => setActiveTabs('PieChart')}
                    />}
            </div>
            <div className='bn-tab'>
                {activeTabs === 'settigns' ?
                  <div className='btnActive'>
                    <FiSettings
                        size='35'
                        color='#E08958'
                        onClick={() => setActiveTabs('settigns')}
                    /></div> :
                    <FiSettings
                        size='35'
                        color='#E08958'
                        onClick={() => setActiveTabs('settigns')}
                    />}
            </div>
            <div className='bn-tab'>
                {activeTabs === 'user' ?
                  <div className='btnActive'>
                    <BiUser
                        size='35'
                        color='#E08958'
                        onClick={() => setActiveTabs('user')}
                    /> </div>:
                    <BiUser
                        size='35'
                        color='#E08958'
                        onClick={() => setActiveTabs('user')}
                    />}
            </div>
        </div>
    )
}

export default BottomNavBar;