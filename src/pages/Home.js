import React from 'react'
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import {Link} from 'react-router-dom'
export default function Home() {
    return (
      <>
        <Hero >
          <Banner title="luxurious Rooms" subtitle="Delux starting at $299">
          <Link to="/rooms" className="btn-primary">Our Rooms</Link>
          <div>Hello</div>
          </Banner>
        </Hero>
        </>
    )
}
