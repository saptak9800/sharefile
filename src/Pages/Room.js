import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './room.css';

export default function Room() {
  const [nickname, setNickname] = useState('');
  const [recentRoom, setRecentRoom] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const storedNickname = localStorage.getItem('nickname');
    if (!storedNickname) {
      const userNickname = prompt('Please enter your nickname:');
      if (userNickname) {
        setNickname(userNickname);
        localStorage.setItem('nickname', userNickname);
      }
    } else {
      setNickname(storedNickname);
    }

    const storedRecentRoom = localStorage.getItem('recentRoom');
    if (storedRecentRoom) {
      setRecentRoom(storedRecentRoom);
    }
  }, []);

  const handleNewRoom = () => {
    const roomId = prompt('Please enter the room ID or leave blank to create a new room:');
    const finalRoomId = roomId || uuidv4();
    localStorage.setItem('recentRoom', finalRoomId);
    navigate(`/room/${finalRoomId}`);
  };

  return (
    <div className="container">
      <button 
        className="recentbtn" 
        style={{ margin: '30px 0 30px 0', padding: '18px 40px', fontSize: '1.2rem', borderRadius: '10px', fontWeight: 'bold', letterSpacing: '1px' }} 
        onClick={() => navigate('/')}
      >
        Back to Home
      </button>
      <div className="header">
        <h2>Hi, <span className='nickname'>{nickname}!</span></h2>
        <p style={{ color: '#808DAD' }}>Join or create a room to share files</p>
      </div>
      <div className="content mt-5">
        {recentRoom && (
          <div className="recent-room">
            <h3>Recent Rooms</h3>
            <div className="room-card">
              <p>{recentRoom}</p>
              <button className='recentbtn' onClick={() => navigate(`/room/${recentRoom}`)}>Rejoin Room</button>
            </div>
          </div>
        )}
      </div>
      <button className="new-room-btn" onClick={handleNewRoom}>
        + New Room
      </button>
    </div>
  );
}
