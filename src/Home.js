import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

export default function Home() {
  const navigate = useNavigate();

  const handleStartSharing = () => {
    navigate('/room');
  };

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className='col-md-6 order-2 order-md-1'>
            <h2 className='mt-5 header-align' style={{ fontFamily: 'sans-serif ', color: '#c5c7cc' }}>
              Instant File Sharing Made Simple
            </h2>
            <p className='header-align' style={{ color: '#FF6A3D', fontSize: '1.4rem' }}>
              Fast, Secure, and Hassle-Free!
            </p>
            <button className='bt mt-4 d-flex justify-content-center' onClick={handleStartSharing}>
              Start sharing
            </button>
          </div>
          <div className='col-md-6 order-1 order-md-2'>
            <img id='network-image' src="1.png" alt="" width={'90%'} />
          </div>
        </div>
      </div>

      <div className="container ">
        <div className="row mt-4 ">
          <div className="col-md-4 mt-4">
            <div className='text-center mx-auto'>
              <img src="/images/img1.svg" alt="computer-img" />
            </div>
            <h3 style={{ color: '#c5c7cc' }} className='text-center'>Easy to use</h3>
            <p style={{ color: '#808DAD' }}>
              Shareit is a web app, just open it in your browser, join a room, and start sharing. No need to install any specific app, or create an account!
            </p>
          </div>

          <div className="col-md-4 mt-4">
            <div className='text-center'>
              <img className='img-fluid' src="/images/img2.svg" alt="computer-img" />
            </div>
            <h3 style={{ color: '#c5c7cc' }} className='mt-3 text-center'>Multi-device</h3>
            <p style={{ color: '#808DAD' }}>
              Traditionally, sharing files to multiple devices has been a hassle. With Shareit, you can share files across multiple devices with ease.
            </p>
          </div>

          <div className="col-md-4 mt-5">
            <div className='text-center mx-auto'>
              <img className='mx-auto' src="/images/img3.svg" alt="world-img" height={'160px'} />
            </div>
            <h3 style={{ color: '#c5c7cc' }} className='mt-3 text-center'>Anywhere</h3>
            <p className='' style={{ color: '#808DAD' }}>
              Shareit is built on modern web technologies, allowing it to work on devices far away from each other. It just needs to be connected to the internet.
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-5 mb-4">
        <div className="row">
          <div className="col-md-8 offset-md-2 text-center">
            <h2>Ready to Share?</h2>
            <p style={{ color: '#808DAD' }}>Get started with ShareIt today and experience seamless file sharing.</p>
            <button className='bt mt-4' onClick={handleStartSharing}>Start sharing</button>
          </div>
        </div>
      </div>

      <footer className="footer mt-auto py-3 text-center">
        <div className="container mt-5">
          {/* Footer content removed as per request */}
        </div>
      </footer>
    </>
  );
}
