import React from 'react'
import { Card } from 'react-bootstrap';

export default function BottomProduct(props) {
    return (
        <Card className='bottomPlatformSquare'>
            <div className='firstPlatformRow'>
                <h2 className='likesText'>{props.likes}</h2>
                <h2 className='viewsText'>{props.views}</h2>
            </div>
            <div className='secondPlatformRow'>
            <img className='iconImg' src={props.img} />
                <h2 className='numbersText'>{props.numbers}</h2>
            </div>
        </Card>
    )
}
