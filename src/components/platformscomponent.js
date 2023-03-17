import { Container } from 'react-bootstrap';
import React from 'react'
import Product from './product';
import Facebook from '../images/icon-facebook.svg'
import Twitter from '../images/icon-twitter.svg'
import Instagram from '../images/icon-instagram.svg'
import Youtube from '../images/icon-youtube.svg'
import Up from '../images/icon-up.svg'
import Down from '../images/icon-down.svg'

export default function Platformscomponent() {
  return (
    <Container className='platformSection'>
      <div className='platformCard'>
        <Product
          icon={Facebook}
          username="@nathanf"
          number="1987"
          subs="FOLLOWERS"
          updown= {Up}
          followers="12 Today"
          />
        <Product
          icon={Twitter}
          username="@nathanf"
          number="1044"
          subs="FOLLOWERS"
          updown= {Up}
          followers="99 Today"
        />
        <Product
          icon={Instagram}
          username="@realnathanf"
          number="11k"
          subs="FOLLOWERS"
          updown= {Up}
          followers="1099 Today"
        />
        <Product
          icon={Youtube}
          username="Nathan F."
          number="8239"
          subs="SUBSCRIBERS"
          updown={Down}
          followers="144 Today"
        />
      </div>
    </Container>
  )
}
