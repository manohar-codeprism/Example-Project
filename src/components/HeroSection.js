import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1 className='column'>The Financial Layer of the Metaverse</h1>
      <p>Decentralised platform for easing liquidity in the NFT space</p>
      <div className='hero-btns'>
      <h1 style={{color: 'white'}}>$STRIP Trading is live on</h1>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          MEXC Global
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          PancakeSwap <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
