import React from 'react'

export default function FooterSection() {
  return (
    <footer>
    <div className="banner">
      <div className="title">
        <h1>MooDy's</h1>
        <p>Events and Weddings</p>
      </div>
      <div className="tag">
        <label>News Letter</label>
        <div>
          <input type="text" placeholder="E-mail" />
          <button>Subscribe</button>
        </div>
        <p>Sign up with your email address to receice news and updates!</p>
      </div>
    </div>
  </footer>
  )
}
