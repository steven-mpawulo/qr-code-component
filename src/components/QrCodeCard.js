import React from 'react'
import QrCodeImage from '../images/image-qr-code.png'

const QrCodeCard = () => {
  return (
    <div className="main-container">
        <div className="qr-code-component-container">
            <div className="qr-code-container">
                <img src={QrCodeImage} alt="qr-code" />
            </div>
            <div className="text-container">
                <p>Improve your front-end skills by building projects</p>
                <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </div>
    </div>
  )
}

export default QrCodeCard