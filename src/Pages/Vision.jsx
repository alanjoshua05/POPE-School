import { Box, Typography } from "@mui/material";
import React from "react";
import "./Style/home.css";
import hero2 from "../Pages/Images/hero2.jpg"
export default function Vision() {
  return (
    <div>
      <Image />
      <AV />
    </div>
  );
}

function Image() {
  return (
    <Box>
      <Box p={2} position="relative" width="100%" margin="auto">
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
              height: "94vh", // Responsive height
              objectFit: "cover", // Ensures the image covers the entire box
              objectPosition: "center", // Centers the image
              transition: "opacity 0.5s ease-in-out", // Smooth transition
              borderRadius:"20px"
            }}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: 2,
              backgroundColor: "rgba(8, 8, 8, 0.3)", // Increased opacity for better visibility
              textAlign: "center",
              width: "100%", // Full width of the carousel
              height: { lg: "100%", xs: "100%" }, // Full height of the carousel
              borderRadius:"20px"
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
                Vision & Mission
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function AV() {
  return (
    <Box>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <Box
          mt={{ lg: 0, md: 1, sm: 2, xs: 4 }}
          p={{ lg: 10, md: 8, sm: 5, xs: 1 }}
        >
          <Typography
            className="text-center"
            id="pope"
            sx={{
              color: "black",
              fontSize: { lg: "50px", md: "45px", sm: "40px", xs: "35px" },
            }}
          >
            Vision & Mission
          </Typography>
          <hr className="my-4"/>
        </Box>
        <div className="mt-0">
          <Typography variant="h5" id="pope" color="initial">
            Our Aim
          </Typography>
          <ul className="mt-4" style={{ textIndent: "100px",textAlign:"justify" }}>
            <li>
              - The school aims to foster well-rounded development, emphasizing
              not just academic excellence but also emotional, physical, and
              social growth. It provides a nurturing environment where students
              feel safe and supported, allowing them to learn without
              unnecessary stress while exploring creativity, critical thinking,
              and interpersonal skills.
            </li>
            <li className="mt-2">
              - Focusing on the individual learning needs of each child, the
              school emphasizes student-centric teaching methods. By
              incorporating the rich cultural heritage of Indian values and
              blending it with modern global knowledge, the school offers an
              education system that fosters personal growth, ethical behavior,
              and intellectual curiosity.
            </li>
            <li className="mt-2">
              - The school is committed to delivering quality education that
              provides excellent value for investment. It focuses on equipping
              students with the knowledge, skills, and attitudes necessary to
              thrive as global citizens, preparing them for leadership roles and
              responsibilities in an increasingly interconnected and competitive
              world.
            </li>
          </ul>
        </div>
        <div className="mt-16">
          <Typography variant="h5" id="pope" color="initial">
            Our Philosophy
          </Typography>
          <ul className="mt-4" style={{ textIndent: "100px", textAlign:"justify" }}>
            <li>
              - The school’s philosophy revolves around redefining traditional
              education by integrating progressive methods that emphasize
              creativity, collaboration, and critical thinking. It seeks to
              challenge conventional ideas of schooling, creating a learning
              experience that encourages curiosity, innovation, and adaptability
              in a rapidly changing world.
            </li>
            <li className="mt-2">
              - This philosophy stresses the importance of balanced education,
              addressing both physical and mental development. By maintaining a
              stress-free environment, the school ensures that students are
              supported by trained professionals who understand and cater to the
              holistic needs of the child, fostering health, wellness, and
              intellectual growth.
            </li>
            <li className="mt-2">
              - The school prioritizes creating an environment where every child
              can reach their fullest potential, both academically and
              personally. By fostering self-confidence, independence, and
              integrity, the school shapes students into responsible, honest
              individuals capable of contributing positively to society and
              leading fulfilling lives.
            </li>
          </ul>
        </div>
      </div>
    </Box>
  );
}
