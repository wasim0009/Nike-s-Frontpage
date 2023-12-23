import React from 'react'

function Hero() {
    return (
        <main className='hero container'>
            <div className='hero-content'>
                <h1>Your feet deserve best</h1>
                <p>your feet deserve the best and we're here to help you with your shoes your fit deserve the best and we're here to help you with our shoes okay</p>
                <div className='hero-btn'>
                    <button>Shop now</button>
                    <button>Category</button>
                </div>
                <div className='shopping'>
                    <p>Also Available On</p>
                </div>
                <div>
                    <img src="/image/flipkart.png" alt="logo" />
                    <img src="/image/amazon.png" alt="logo" />
                </div>
            </div>
            <div className="hero-image">
                <img src="/image/hero-image.png" alt="hero-image" />
            </div>
        </main>
    )
}

export default Hero