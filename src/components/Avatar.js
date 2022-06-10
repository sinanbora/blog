import React from 'react'
import './Avatar.css'

export default function Avatar({ src }) {
  return (
    <div className='avatar'>
        <img src={src} alt="avatar images"></img>
    </div>
  )
}
