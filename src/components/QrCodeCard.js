import React from 'react'
import QrCodeImage from '../images/image-qr-code.png'
import '../styles/qr-code-component.css'

const QrCodeCard = () => {
  return (
    <div className="main-container">
        <div className="qr-code-component-container">
            <div className="qr-code-container">
                <img src={QrCodeImage} alt="qr-code" />
            </div>
            <div className="text-container">
                <p className='first-text'>Improve your front-end <span className='skills-text'>skills by building projects</span></p>
                <p className='second-text'>Scan the QR code to visit Frontend Mentor and take your coding skills to <span className='next-level-text'>the next level</span></p>
            </div>
        </div>
    </div>
  )
}

export default QrCodeCard