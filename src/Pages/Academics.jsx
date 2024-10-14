import React from "react";
import { Box, Typography } from "@mui/material";
import "../Pages/Style/home.css";
import hero2 from "../Pages/Images/hero2.jpg"
export default function Academics() {
  return (
    <div>
      <Image />
      <Portion />
      
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
            height: "100vh", // Responsive height
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
              Academics
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
    </Box>
  );
}

function Portion() {
  return (
    <Box p={{ lg: 10, md: 8, sm: 6, xs: 2 }}>
      <Box p={{ lg: 10, md: 8, sm: 6, xs: 1 }}>
        <Typography
          className="text-center"
          id="pope"
          sx={{
            color: "black",
            fontSize: { lg: "50px", md: "45px", sm: "40px", xs: "35px" },
          }}
        >
          Academics
        </Typography>
        <Typography
          mt={1}
          sx={{ color: "black" }}
          variant="body2"
          id="inter"
          className="text-center"
        >
          POPE Hr.Sec School is seriously concerned about the quality of
          education, which is consciously and meticulously maintained till now.
          Special effort is taken towards promoting
          computer literacy among our students.
          Preparing projects is part of the curriculum and our students prepare
          them under the direct supervision of the teachers. Practical Art and
          Physical Education is also a part of the regular curriculum.
        </Typography>
      </Box>
      <Box mt={{ xs: 8 }}>
        <div className="lg:grid-cols-3 md:grid-cols-2 grid gap-5">
          <div className="lg:p-8 md:p-4 sm:p-2  md:4 sm:2">
            <p className="lg:text-3xl md:text-2xl sm:text-xl font-bold">
              Class VI-X
            </p>
            <hr />
            <ul className="mt-4 sm:text-center lg:text-start">
              <li>English</li>
              <li>Mathematics</li>
              <li>Science</li>
              <li>Social Science</li>
              <li>Tamil</li>
            </ul>
          </div>
          <div className="lg:p-8 md:p-4 sm:p-2  md:4 sm:2">
            <p className="lg:text-3xl md:text-2xl sm:text-xl font-bold">
              Class XI
            </p>
            <hr />
            <ul className="mt-4 sm:text-center lg:text-start">
              <li>English</li>
              <li>Mathematics</li>
              <li>Science</li>
              <li>History</li>
              <li>Tamil</li>
            </ul>
          </div>
          <div className="lg:p-8 md:p-4 sm:p-2  md:4 sm:2">
            <p className="lg:text-3xl md:text-2xl sm:text-xl font-bold">
              Class XI
            </p>
            <hr />
            <ul className="mt-4 sm:text-center lg:text-start">
              <li>English</li>
              <li>Mathematics</li>
              <li>Science</li>
              <li>History</li>
              <li>Tamil</li>
            </ul>
          </div>
          <div className="lg:p-8 md:p-4 sm:p-2  md:4 sm:2">
            <p className="lg:text-3xl md:text-2xl sm:text-xl font-bold">
              Class XI
            </p>
            <hr />
            <ul className="mt-4 sm:text-center lg:text-start">
              <li>English</li>
              <li>Mathematics</li>
              <li>Science</li>
              <li>History</li>
              <li>Tamil</li>
            </ul>
          </div>
          <div className="lg:p-8 md:p-4 sm:p-2  md:4 sm:2">
            <p className="lg:text-3xl md:text-2xl sm:text-xl font-bold">
              Class XI
            </p>
            <hr />
            <ul className="mt-4 sm:text-center lg:text-start">
              <li>English</li>
              <li>Mathematics</li>
              <li>Science</li>
              <li>History</li>
              <li>Tamil</li>
            </ul>
          </div>
          <div className="lg:p-8 md:p-4 sm:p-2  md:4 sm:2">
            <p className="lg:text-3xl md:text-2xl sm:text-xl font-bold">
              Class XII
            </p>
            <hr />
            <ul className="mt-4 sm:text-center lg:text-start">
              <li>English</li>
              <li>Mathematics</li>
              <li>Science</li>
              <li>History</li>
              <li>Tamil</li>
            </ul>
          </div>
          <div className="lg:p-8 md:p-4 sm:p-2  md:4 sm:2">
            <p className="lg:text-3xl md:text-2xl sm:text-xl font-bold">
              Class XII
            </p>
            <hr />
            <ul className="mt-4 sm:text-center lg:text-start">
              <li>English</li>
              <li>Mathematics</li>
              <li>Science</li>
              <li>History</li>
              <li>Tamil</li>
            </ul>
          </div>
          <div className="lg:p-8 md:p-4 sm:p-2  md:4 sm:2">
            <p className="lg:text-3xl md:text-2xl sm:text-xl font-bold">
              Class XII
            </p>
            <hr />
            <ul className="mt-4 sm:text-center lg:text-start">
              <li>English</li>
              <li>Mathematics</li>
              <li>Science</li>
              <li>History</li>
              <li>Tamil</li>
            </ul>
          </div>
          <div className="lg:p-8 md:p-4 sm:p-2  md:4 sm:2">
            <p className="lg:text-3xl md:text-2xl sm:text-xl font-bold">
              Class XII
            </p>
            <hr />
            <ul className="mt-4 sm:text-center lg:text-start">
              <li>English</li>
              <li>Mathematics</li>
              <li>Science</li>
              <li>History</li>
              <li>Tamil</li>
            </ul>
          </div>
        </div>
      </Box>
    </Box>
  );
}


