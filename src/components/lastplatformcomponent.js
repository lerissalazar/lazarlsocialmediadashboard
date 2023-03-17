import { Container } from 'react-bootstrap';
import React from 'react'
import BottomProduct from './bottomproductcomponent';
import Twitter from '../images/icon-twitter.svg'
import Youtube from '../images/icon-youtube.svg'

export default function LastPlatformComponent() {
  return (
    <Container className='bottomPlatformSection'>
      <div className='bottomplatformCard'>
          <BottomProduct
            likes="Retweets"
            views="117"
            img={Twitter}
            numbers="303%"
          />
        <BottomProduct
          likes="Likes"
          views="507"
          img={Twitter}
          numbers="553%"
        />
        <BottomProduct
          likes="Likes"
          views="107"
          img={Youtube}
          numbers="19%"
        />
        <BottomProduct
          likes="Total Views"
          views="1407"
          img={Youtube}
          numbers="12%"
        />
      </div>
    </Container>
  )
}