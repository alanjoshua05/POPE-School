import React, { useState, useEffect } from "react";
import { Box, Typography, Pagination, useMediaQuery } from "@mui/material";
import "../Pages/Style/home.css";
import { createClient } from "contentful";
import hero2 from "../Pages/Images/hero2.jpg"
export default function Achivement() {
  return (
    <div>
      <Image />
      <Achivement_Student />
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
              height: "94vh", // Responsive height
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
                Achivements
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Achivement_Student() {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const isMobile = useMediaQuery("(max-width:600px)");
  const [data, setData] = useState([]);

  // Adjust rows per page based on screen size
  useEffect(() => {
    setRowsPerPage(isMobile ? 3 : 6);
  }, [isMobile]);

  // Handle page change for pagination
  const handleChangePage = (event, value) => {
    setPage(value);
  };

  // Calculate which rows to show based on the current page
  const startIndex = (page - 1) * rowsPerPage;
  const displayedRows = data.slice(startIndex, startIndex + rowsPerPage);

  // Contentful client initialization
  const client = createClient({
    space: "6o9xounuzfgq",
    accessToken: "K4LSSTkZuhH9AFp8KY3suuAk4b3WFH8bTgb5E1N6aOQ",
  });

  // Fetch data from Contentful API
  useEffect(() => {
    const getEntry = async () => {
      try {
        const entry = await client.getEntries();
        setData(
          entry.items.filter(
            (item) => item.sys.contentType.sys.id === "achievements"
          )
        );
      } catch (error) {
        console.error(error);
      }
    };
    getEntry();
  }, [client]);

  return (
    <Box>
      <Box p={{ lg: 10, md: 8, sm: 6, xs: 4 }}>
        <Typography
          mt={2}
          className="text-center"
          id="pope"
          sx={{
            color: "black",
            fontSize: { lg: "50px", md: "45px", sm: "40px", xs: "35px" },
          }}
        >
          Achievements
        </Typography>
        
        <Typography
          mt={1}
          sx={{ color: "black" }}
          variant="body2"
          id="inter"
          className="text-center"
        >
          Our school excels in sports, cultivating champions and promoting
          teamwork, discipline, and lifelong fitness.
        </Typography>

        <Box mt={8}>
          <div className="grid lg:grid-cols-2 gap-4 sm:grid-cols-1">
            {displayedRows.map((item, index) => {
              // Check if 'fields' and required properties exist
              const fields = item?.fields;
              const image = fields?.image?.fields?.file?.url;
              const title = fields?.achievement;
              const description = fields?.description;

              if (fields && image && title && description) {
                return (
                  <div key={index}>
                    <div
                      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                      style={{ height: "100%" }} // Ensure container takes full height
                    >
                      {/* Image */}
                      <img
                        className="object-cover w-full h-full md:w-60 md:h-full rounded-none md:rounded-l-lg"
                        src={`https:${image}`} // Access image URL safely
                        alt={title}
                        style={{
                          objectFit: "cover", // Ensure image covers the area
                          height: "100%", // Make image fill the height of the container
                        }}
                      />
                      {/* Text Content */}
                      <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {title} {/* Achievement Title */}
                        </h5>
                        <p className="mb-3 text-sm sm:text-base font-normal text-gray-700 dark:text-gray-400">
                          {description} {/* Achievement Description */}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return null; // Skip rendering if required fields are missing
              }
            })}
          </div>

          <Pagination
            count={Math.ceil(data.length / rowsPerPage)}
            page={page}
            onChange={handleChangePage}
            color="primary"
            sx={{ mt: 4, display: "flex", justifyContent: "center" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
