import React from 'react'

export const Card = () => {
    return (
        <div className='cards'>
            <div className='card card1'>
                <div className='figure'>200</div>
                <div className='word'>Invoices</div>
            </div>
            <div className='card card2'>
                <div className='figure'>140</div>
                <div className='word'>Pending</div>
            </div>
            <div className='card card3'>
                <div className='figure'>40</div>
                <div className='word'>Paid</div>
            </div>
            <div className='card card4'>
                <div className='figure'>20</div>
                <div className='word'>Overdue</div>
            </div>
        </div>
    )
}
