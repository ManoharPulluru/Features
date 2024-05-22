import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MobileFit from './MobileFit';
import SeatArrangement from './SeatArrangement/SeatArrangement';
import ColorSelector from './ColorSelector/ColorSelector';
import LiveCoCordinates from './LiveCo-ordinates/LiveCoCordinates';
import Guide from './HH-GuideFlow/GuideFlow/Guide';
import Itenary from './Itenary/Itenary';
import FourCardAnimation from './Animation-4-Cards/FourCardAnimation';
import Cameras from './Cameras/Cameras';
import FlexOrderCards from './FlexOrderCards/FlexOrderCards';
import DashBoard from './Dashboard-HH/DashBoard';
import Bubbles from './bubblesSelection/Bubbles';
import CloudinaryTest from './CloudinaryTest/CloudinaryTest';
import ItenaryComponent from './ItenaryComponent/ItenaryComponent';
import BubbleD3 from './bubbleD3/BubbleD3';
import LocationTracker from './LocationFinder/LocationFinder';
import InfiniteLoop from './InfinteLoop/InfiniteLoop';
import SoundRecorder from './soundRecorder/SoundRecorder';
import CauroselCards from './CauroselCards/CauroselCards';
import BubbleChartReact from './bubble-chart/BubbleChartReact';
import Test from './Test/Test';
import TapToVibrate from './TapToVibrate/TapToVibrate';
import MapBoxLocation from './MapBoxLocation/MapBoxLocation';

const App = () => {
  const [flag, setFlag] = useState(false);
  return (
    <div className='appMain'>
      <BrowserRouter>
        <Routes>
          <Route path='/test' element={<Test />} />
          <Route path='/' element={<MapBoxLocation />} />
          <Route path='/sound-recorder' element={<SoundRecorder />} />
          <Route path='/mobile-fit' element={<MobileFit />} />
          <Route path='/seat-arrangement' element={<SeatArrangement />} />
          <Route path='/color-selector' element={<ColorSelector />} />
          <Route path='/live-coordinates' element={<LiveCoCordinates />} />
          <Route path='/guide' element={<Guide />} />

          {/* <Route path='/' element={<Itenary />} /> */}
          <Route path='/four-card-animation' element={<FourCardAnimation />} />
          <Route path='/cameras' element={<Cameras />} />
          <Route path='/flex-order-cards' element={<FlexOrderCards />} />
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/bubbles' element={<Bubbles />} />
          <Route path='/cloudinary-test' element={<CloudinaryTest />} />
          <Route path='/itenrary' element={<ItenaryComponent />} />
          <Route path='/bubble-d3' element={<BubbleD3 />} />
          <Route path='/location-tracker' element={<LocationTracker />} />
          <Route path='/infinite-loop' element={<InfiniteLoop />} />
          <Route path='/caurosel-cards' element={<CauroselCards />} />
          <Route path='/bubble-chart-react' element={<BubbleChartReact />} />
          <Route path='/tap-to-vibrate' element={<TapToVibrate />} />
        </Routes>
      </BrowserRouter>
      <div
        onClick={() => {
          setFlag(!flag);
        }}
        className='IconMenu'
      >
        <img src='https://i.pinimg.com/originals/26/9d/d1/269dd16fa1f5ff51accd09e7e1602267.png' />
      </div>
      {flag ? (
        <div className='optionsListDiv'>
          <a className='optionRoute' href='/mobile-fit'>
            Mobile Fit
          </a>
          <a className='optionRoute' href='/seat-arrangement'>
            Seat Arrangement
          </a>
          <a className='optionRoute' href='/live-coordinates'>
            Live Co-ordinates
          </a>

          <a className='optionRoute' href='/guide'>
            Guide
          </a>

          <a className='optionRoute' href='/four-card-animation'>
            Four Card Animation
          </a>

          <a href='/' className='optionRoute'>
            Map Box Location
          </a>

          <a className='optionRoute' href='/cameras'>
            Cameras
          </a>

          <a className='optionRoute' href='/flex-order-cards'>
            Flex Order Cards
          </a>

          <a className='optionRoute' href='/dashboard'>
            Dashboard
          </a>

          <a className='optionRoute' href='/bubbles'>
            Bubbles
          </a>

          <a className='optionRoute' href='/test'>
            Test
          </a>

          <a className='optionRoute' href='/cloudinary-test'>
            Cloudinary Test
          </a>

          <a className='optionRoute' href='/itenrary'>
            Itinerary Component
          </a>
          <a className='optionRoute' href='/location-tracker'>
            Location Tracker
          </a>
          <a className='optionRoute' href='/bubble-d3'>
            Bubble D3
          </a>
          <a className='optionRoute' href='/infinite-loop'>
            Infinite Loop
          </a>
          <a className='optionRoute' href='/sound-recorder'>
            Sound Recorder
          </a>
          <a className='optionRoute' href='/caurosel-cards'>
            Caurosel Cards
          </a>
          <a className='optionRoute' href='/bubble-chart-react'>
            Bubble Chart React
          </a>
          <a className='optionRoute' href='/tap-to-vibrate'>
            Tap To Vibrate
          </a>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default App;
