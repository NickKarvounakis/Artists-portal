import React from 'react'
import Color from './colors.json'

const color_picker = () => {
  return Color.colors[randomColor()]

}

const randomColor = () => {
  return Math.floor(Math.random() * Color.colors.length);
}

export default color_picker
