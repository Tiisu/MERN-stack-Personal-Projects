import React from 'react'

const ProfilePage = () => {
  return (

    <div>
      <h1>MY profile</h1>
      <p>Welcome to your profile page!</p>
      <p>Here you can view and edit your personal information.</p>
      <p>Feel free to update your details as needed.</p>
      <p>Thank you for being a valued user!</p>
      <p>Enjoy your experience on our platform!</p> 
    <div>
      <form action="">
        <label htmlFor="">Name:</label>
        <input type="text" placeholder='Enter your name' />
        <br />
        <label htmlFor="">Email:</label>
        <input type="email" placeholder='Enter your email' />
        <br />
        <label htmlFor="">Password:</label>
        <input type="password" placeholder='Enter your password' />

      </form>
    </div>

    </div>
  )
}

export default ProfilePage