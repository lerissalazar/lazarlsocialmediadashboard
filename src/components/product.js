import React from 'react'
import { Card, Row } from 'react-bootstrap';

export default function Product(props) {
    return (
        <Card className='platformSquare'>
            <img className='iconImg' src={props.icon} />
            <h2 className='usernameText'>{props.username}</h2>
            <h2 className='numberText'>{props.number}</h2>
            <h2 className='subsText'>{props.subs}</h2>
            <Row>
                <img src={props.updown} />
                <h2 className='followerText'>{props.followers}</h2>
            </Row>
        </Card>
    )
}
