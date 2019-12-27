import React from "react"
import "./team.css"

const Team = () => {
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1575761344173-aa186491c120?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="Avatar"
        width="100%"
        height="180"
        title="Ahmed Al Dabbas"
      />
      <div className="container">
        <h5>ADHD</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  )
}

export default Team
