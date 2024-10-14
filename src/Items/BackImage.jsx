import { Box } from '@mui/material'
import React from 'react'
export default function BackImage() {
  return (
    <div>
      <Box
          component="img"
          src="src/Pages/Images/hero2.jpg"
          sx={{
            width: "100%",
            height: "92vh", // Responsive height
            objectFit: "cover", // Ensures the image covers the entire box
            objectPosition: "center", // Centers the image
            transition: "opacity 0.8s ease-in-out", // Smooth transition
          }}
        />
    </div>
  )
}
