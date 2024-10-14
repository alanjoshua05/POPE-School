import { Box, Typography } from "@mui/material";
import React, {useState, useEffect} from "react";
import { createClient } from "contentful";
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
export default function Infrastructure() {
  return (
    <div>
      <Image />
      <GalleryComponent/>
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
            src={hero2}
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
                color="initial"
              >
                Infrastructure
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}



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
    (item) => item.sys.contentType.sys.id === "infrastructure"
  );

  return (
    <div className="App">
      <Box p={{ lg: 10, md: 8, sm: 6, xs: 4 }}>
        <Typography
          className="text-center"
          id="pope"
          sx={{ color: "black", fontSize: { lg: "50px", md: "45px", sm: "40px", xs: "35px" }, }}
        >
          Infrastructure
          <hr className="mt-5"/>
        </Typography>
      </Box>
      <Box p={{ lg: 8, md: 6, sm: 4, xs: 2 }}>
        <LightGallery
          onInit={() => console.log("LightGallery has been initialized")}
          speed={500}
          plugins={[lgThumbnail, lgZoom, lgAutoplay]}
        >
          {/* {images.map((image, index) => (
            <a href={image.src} key={index}>
              <img id="galpic" alt={image.alt} src={image.src} />
            </a>
          ))} */}
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

