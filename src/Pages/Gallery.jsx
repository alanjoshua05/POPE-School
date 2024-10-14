import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import { Box, Typography } from "@mui/material";
import LightGallery from "lightgallery/react";
import "../Pages/Style/home.css";
import "../Pages/Style/gallery.css";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import Grid from "@mui/material/Grid";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import hero2 from "../Pages/Images/hero2.jpg"
import hero from "../Pages/Images/hero.jpg"
import hero1 from "../Pages/Images/slide1.jpg"
import slide2 from "../Pages/Images/slide2.jpg"
import slide3 from "../Pages/Images/slide3.jpg"
import slide4 from "../Pages/Images/slide4.jpg"
import slide5 from "../Pages/Images/slide5.jpg"
import img1 from "../Pages/Images/DSC02767.jpg"
import img2 from "../Pages/Images/DSC02816.jpg"
import img3 from "../Pages/Images/RS_64608.jpg"
import img4 from "../Pages/Images/RS_64615.jpg"
import img5 from "../Pages/Images/RS_64617.jpg"
import img6 from "../Pages/Images/RS_64621.jpg"
import img7 from "../Pages/Images/RS_64626.jpg"
import img8 from "../Pages/Images/RS_64645.jpg"
import img9 from "../Pages/Images/RS_64646.jpg"
import img10 from "../Pages/Images/RS_64678.jpg"
import img11 from "../Pages/Images/RS_64688.jpg"
import img12 from "../Pages/Images/RS_64695.jpg"
import img13 from "../Pages/Images/RS_64726.jpg"
import img14 from "../Pages/Images/trashed-1723203082-IMG_20240710_154448.jpg"

// Proper import for local images

export default function Gallery() {
  return (
    <div>
      <Image />
      <GalleryComponent />
    </div>
  );
}

function Image() {
  return (
    <Box>
      <Box position="relative" width="100%" margin="auto">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="relative"
          width="100%"
        >
          <Box
            component="img"
            src={hero2} // Corrected image reference
            sx={{
              width: "100%",
              height: "92vh", // Responsive height
              objectFit: "cover", // Ensures the image covers the entire box
              objectPosition: "center", // Centers the image
              transition: "opacity 0.5s ease-in-out", // Smooth transition
            }}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: 2,
              borderRadius: 1,
              backgroundColor: "rgba(8, 8, 8, 0.3)", // Increased opacity for better visibility
              textAlign: "center",
              width: "100%", // Full width of the carousel
              height: { lg: "100%", xs: "100%" }, // Full height of the carousel
            }}
            position="absolute"
            top={0}
            left={0}
            color="white"
          >
            <Box className="float-left" sx={{ zIndex: 3 }}>
              <Typography
                id="pope"
                sx={{
                  color: "white",
                  fontSize: { lg: "70px", md: "45px", sm: "40px", xs: "35px" },
                }}
              >
                Gallery
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// Example image array
const images = [
  {
    src: hero,
    alt: "Hero Image 1",
  },
  {
    src: hero1,
    alt: "Hero Image 1",
  },
  
  {
    src: slide2,
    alt: "Hero Image 1",
  },
  {
    src: img1,
    alt: "Hero Image 1",
  },
  {
    src: img2,
    alt: "Hero Image 1",
  },
  {
    src: img3,
    alt: "Hero Image 1",
  },
  {
    src: img4,
    alt: "Hero Image 1",
  },
  {
    src: img5,
    alt: "Hero Image 1",
  },
  {
    src: img6,
    alt: "Hero Image 1",
  },
  {
    src: img7,
    alt: "Hero Image 1",
  },
  {
    src: img8,
    alt: "Hero Image 1",
  },
  {
    src: img9,
    alt: "Hero Image 1",
  },
  {
    src: img10,
    alt: "Hero Image 1",
  },
  {
    src: img11,
    alt: "Hero Image 1",
  },
  {
    src: img12,
    alt: "Hero Image 1",
  },
  {
    src: img13,
    alt: "Hero Image 1",
  },
  {
    src: img14,
    alt: "Hero Image 1",
  },

  
];

function GalleryComponent() {
  const [data, setData] = useState([]);

  const client = createClient({
    space: "6o9xounuzfgq",
    accessToken: "K4LSSTkZuhH9AFp8KY3suuAk4b3WFH8bTgb5E1N6aOQ",
  });

  useEffect(() => {
    const getEntry = async () => {
      try {
        const entry = await client.getEntries();
        console.log(entry);
        setData(entry.items); // Set the items directly
      } catch (error) {
        console.log(error);
      }
    };
    getEntry();
  }, []);

  const galleryItems = data.filter(
    (item) => item.sys.contentType.sys.id === "gallery"
  );

  return (
    <div className="App">
      <Box p={{ lg: 10, md: 8, sm: 6, xs: 4 }}>
        <Typography
          className="text-center"
          id="pope"
          
          sx={{ color: "black", fontSize: { lg: "50px", md: "45px", sm: "40px", xs: "35px" }, }}
        >
          Gallery
        </Typography>
        <Typography
          mt={0}
          sx={{ color: "black" }}
          variant="body2"
          id="inter"
          className="text-center mt-3"
          p={{ lg: 1, xs: 2 }}
        >
          The school gallery showcases vibrant photos and artwork, celebrating
          students' achievements, events, and the rich history of our community.
        </Typography>
      </Box>
      <Box p={{ lg: 8, md: 6, sm: 4, xs: 2 }}>
        <LightGallery
          onInit={() => console.log("LightGallery has been initialized")}
          speed={500}
          plugins={[lgThumbnail, lgZoom, lgAutoplay]}
        >
          {images.map((image, index) => (
            <a href={image.src} key={index}>
              <img id="galpic" alt={`Image ${index + 1}`} src={image.src} />
            </a>
          ))}
          {galleryItems.map((item) => {
            return item.fields.images.map((image) => (
              <a href={`https:${image.fields.file.url}`} key={image.sys.id}>
                <img
                  id="galpic"
                  alt={image.fields.title}
                  src={`https:${image.fields.file.url}`}
                />
              </a>
            ));
          })}
        </LightGallery>
      </Box>
    </div>
  );
}
