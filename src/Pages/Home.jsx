import { Box, Grid, Typography, CardMedia } from "@mui/material";
import React from "react";
import "../Pages/Style/home.css";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { createClient } from "contentful";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import hero from "../Pages/Images/hero.jpg"
import hero1 from "../Pages/Images/slide1.jpg"
import hero2 from "../Pages/Images/hero2.jpg"
import slide2 from "../Pages/Images/slide2.jpg"
import slide3 from "../Pages/Images/slide3.jpg"
import slide4 from "../Pages/Images/slide4.jpg"
import slide5 from "../Pages/Images/slide5.jpg"
export default function Home() {
  return (
    <div>
      <Carousel />
      <About_school />
      <Gal />
      <Highlight />
    </div>
  );
}

function About_school() {
  return (
    <Box p={{ lg: 14, md: 10, sm: 6, xs: 4 }}>
      <Grid container spacing={1}>
        {" "}
        {/* Added container prop */}
        <Grid item xs={12} md={6} sm={12} lg={6}>
          {/* Added xs for smaller screens */}
          <Box mt={10}>
            <Typography
              sx={{
                lineHeight: { lg: "60px", md: "55px", sm: "50px", xs: "40px" },
                color: "black",
                fontSize: { lg: "60px", md: "45px", sm: "40px", xs: "35px" }, // Adjust for more breakpoints
              }}
              id="pope"
            >
              POPE Hr. Sec <br /> School
            </Typography>
            <Typography
              mt={1}
              sx={{ color: "black" }}
              variant="body2"
              id="inter"
            >
              Established in 1844, our school has been dedicated <br /> to
              nurturing generations of learners, fostering excellence, <br />{" "}
              and shaping bright futures.
            </Typography>
            {/* <Box mt={5}>
              <Button>Read more</Button>
            </Box> */}
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sm={12} lg={6}>
          {" "}
          {/* Added xs for responsiveness */}
          <Box mt={{ lg: 0, sm: 5, xs: 5 }}>
            <img
              src={hero}
              alt="Happy African American student raising hand"
              width="100%"
              style={{ borderRadius: "8px" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

function Highlight() {
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

  // Filter out the items for highlights
  const highlightItems = data.filter(
    (item) => item.sys.contentType.sys.id === "highlights"
  );

  return (
    <Box mt={20} className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="container-2xl">
          <Typography
            className="text-center"
            id="pope"
            sx={{
              color: "black",
              fontSize: { lg: "50px", md: "45px", sm: "40px", xs: "35px" }, // Adjust for more breakpoints
            }}
          >
            Highlights
          </Typography>
          <Typography
            mt={1}
            sx={{ color: "black" }}
            variant="body2"
            id="inter"
            className="text-center"
          >
            Offering quality education, state-of-the-art facilities, and a
            vibrant learning environment to shape future leaders of tomorrow.
          </Typography>
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {highlightItems.map((item) => {
            const { title, description, image } = item.fields;
            return (
              <article
                key={item.sys.id}
                className="flex max-w-xl flex-col items-start justify-between border p-1 rounded-xl"
              >
                <CardMedia
                  sx={{ marginTop: "0px" }}
                  component="img"
                  height="140"
                  image={`https:${image.fields.file.url}`} // Access the image URL
                  alt={image.fields.title}
                />
                <div className="group p-3 relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    {title}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Box>
  );
}

const Carousel = () => {
  return (
    <Box position="relative" width="100%" margin="auto">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        width="100%"
      >
        <Box
          sx={{
            width: "100%",
            height: "94vh", // Full viewport height
            display: "flex", // Added to center the Swiper
            justifyContent: "center", // Center horizontally
            alignItems: "center", // Center vertically
            overflow: "hidden", // Smooth transition
          }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={2}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 4000, // 2 seconds delay between slides
              disableOnInteraction: false, // Keeps autoplay active after interaction
            }}
            className="mySwiper"
            modules={[Autoplay]}
            style={{ width: "100%", height: "100%" }}
          >
            <SwiperSlide>
              <img
                src={hero2}
                alt="Slide Image"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // Ensure the image covers the entire slide
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={hero}
                alt="Slide Image"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // Ensure the image covers the entire slide
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={hero1}
                alt="Slide Image"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // Ensure the image covers the entire slide
                }}
              />
            </SwiperSlide>
          </Swiper>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 2,
            borderRadius: 1,
            backgroundColor: "rgba(8, 8, 8, 0.2)", // Increased opacity for better visibility
            textAlign: "center",
            width: "100%", // Full width of the carousel
            height: { lg: "100%", xs: "100%" }, // Full height of the carousel
            position: "absolute", // Positioning for overlay effect
            zIndex: 1,
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
              POPE Memorial
            </Typography>
            <Typography
              id="pope"
              sx={{
                color: "white",
                fontSize: { lg: "25px", md: "20px", sm: "15px", xs: "13px" },
              }}
              color="initial"
            >
              HIGHER SECONDARY SCHOOL
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

function Gal() {
  return (
    <>
      <Box mt={10}>
        <Swiper
          slidesPerView={3}
          spaceBetween={5}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000, // 2 seconds delay between slides
            disableOnInteraction: false, // Keeps autoplay active after interaction
            pauseOnMouseEnter: true, // Pause autoplay on hover
            resumeOnMouseLeave: true, // Resume autoplay when mouse leaves
          }}
          className="mySwiper"
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <Box
              sx={{
                height: { lg: "320px", md: "280px", sm: "200px", xs: "100px" },
                objectFit: "cover",
              }}
            >
              <img
                src={hero1}
                alt="Slide Image"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                height: { lg: "320px", md: "280px", sm: "200px", xs: "100px" },
                objectFit: "cover",
              }}
            >
              <img
                src={slide4}
                alt="Slide Image"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                height: { lg: "320px", md: "280px", sm: "200px", xs: "100px" },
                objectFit: "cover",
              }}
            >
              <img
                src={slide2}
                alt="Slide Image"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box
              sx={{
                height: { lg: "320px", md: "280px", sm: "200px", xs: "100px" },
                objectFit: "cover",
              }}
            >
              <img
                src={slide3}
                alt="Slide Image"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box
              sx={{
                height: { lg: "320px", md: "280px", sm: "200px", xs: "100px" },
                objectFit: "cover",
              }}
            >
              <img
                src={slide5}
                alt="Slide Image"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
}
