import { Container } from 'react-bootstrap';
import React from 'react'
import BottomProduct from './bottomproductcomponent';
import Facebook from '../images/icon-facebook.svg'
import Instagram from '../images/icon-instagram.svg'

export default function BottomPlatformComponent() {
    return (
        <Container className='bottomPlatformSection'>
                <div className='bottomplatformCard'>
                    <BottomProduct
                        likes="Page Views"
                        views="87"
                        img={Facebook}
                        numbers="3%"
                    />
                    <BottomProduct
                        likes="Likes"
                        views="52"
                        img={Facebook}
                        numbers="2%"
                    />
                    <BottomProduct
                        likes="Likes"
                        views="5462"
                        img={Instagram}
                        numbers="2257%"
                    />
                    <BottomProduct
                        likes="Profile Views"
                        views="52k"
                        img={Instagram}
                        numbers="1375%"
                    />
                </div>
        </Container>
    )
}