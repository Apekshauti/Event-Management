import React from 'react';
import Footer from '../comp/Footer/footer'
import Cur from '../comp/cru/cur';
import Events from '../comp/card/Events';
import Summary from '../FORM/form-1/summary';


const Dashboard = () => {
    return (
        <div className='dash'>
            <Cur />
            <Events />
            
        </div>
    );
};

export default Dashboard;