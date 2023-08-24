import React from 'react'
import "./tnft.css"
import Slider from 'react-slick'
import TrendingCard from './TrendingCard'
import { TNRENDING_NFTS } from '../../data/tn'
import Button from '../../common/Button'

const settings = {
    slideToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    speed:200,
    arrows:false,
    

}
const TNFT = () => {
  return (
    <div className='trending-nfts'>
    <div className='tn-title absolute-center'>
        <span className='heading-gradient'>TRENDING NFTs</span>
        
    </div>
    <div className='tn-r-bg-blob'></div>
    <Slider {...settings}>
        {TNRENDING_NFTS.map((_nft) => (
        <TrendingCard nft={_nft} />
        ))}
    </Slider>
    <div className='tn-btn absolute-center' >
    <Button btnText='SEE MORE' type='Secondary' customClass='seemore-btn' />
    </div>
    </div>
  )
};

export default TNFT;