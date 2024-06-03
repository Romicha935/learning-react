import React from 'react'
import Menu from '../Components/Menu'
import { useParams } from 'react-router-dom'

const ProfilePage = () => {
  let {facebookID,youtubeID} =useParams()
  return (
    <div>
        <Menu></Menu>
        <p>Youtube ={youtubeID} </p>
        <p>Facebook ={facebookID} </p>
        <h1>This is a profile Page</h1>
    </div>
  )
}

export default ProfilePage