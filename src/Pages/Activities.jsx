import React, { useState, useEffect } from "react";
import { Box, Typography, Pagination, useMediaQuery } from "@mui/material";
import "../Pages/Style/home.css";
import { createClient } from "contentful";
import hero2 from "../Pages/Images/hero2.jpg";
export default function Activities() {
  return (
    <div>
      <Image />
      <Activity />
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
                Activities
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Activity() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const isMobile = useMediaQuery("(max-width:600px)");

  const client = createClient({
    space: "6o9xounuzfgq",
    accessToken: "K4LSSTkZuhH9AFp8KY3suuAk4b3WFH8bTgb5E1N6aOQ",
  });

  useEffect(() => {
    const getEntry = async () => {
      try {
        const entry = await client.getEntries();
        const activities = entry.items.filter(
          (item) => item.sys.contentType.sys.id === "activities"
        );
        setData(activities);
      } catch (error) {
        console.error(error);
      }
    };
    getEntry();
  }, [client]);

  useEffect(() => {
    setRowsPerPage(isMobile ? 3 : 5); // Set number of rows based on device
  }, [isMobile]);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  // Calculate which rows to show based on current page
  const startIndex = (page - 1) * rowsPerPage;
  const displayedRows = data.slice(startIndex, startIndex + rowsPerPage);

  return (
    <Box>
      <Box p={{ lg: 10, md: 8, sm: 6, xs: 4 }}>
        <Typography
          className="text-center"
          id="pope"
          sx={{
            color: "black",
            fontSize: { lg: "50px", md: "45px", sm: "40px", xs: "35px" },
          }}
        >
          Activities
        </Typography>
        <Typography
          mt={0}
          sx={{ color: "black" }}
          variant="body2"
          className="text-center mt-3"
          p={{ lg: 3, xs: 0 }}
          id="inter"
        >
          POPE School is seriously concerned about the quality of education,
          which is consciously and meticulously maintained till now. Besides the
          regular subjects and languages, we also offer Hindi as a second
          language and a third language. Special effort is taken towards
          promoting computer literacy among our students starting from
          Kindergarten. Preparing projects is part of the curriculum, and our
          students prepare them under the direct supervision of the teachers.
          Practical Art and Physical Education is also a part of the regular
          curriculum.
        </Typography>
        <Box mt={14}>
          <div>
            {displayedRows.map((item) => {
              const { activity, description, image, master } = item.fields;
              const imageUrl = `https:${image.fields.file.url}`; // Accessing image URL correctly

              return (
                <div
                  key={item.sys.id}
                  className="grid mt-12 lg:grid-cols-2 gap-12"
                >
                  <div className="flex mt-12">
                    <div className="justify-center items-center">
                      <Typography variant="h4">{activity}</Typography>
                      <p className="mt-4">{description}</p>
                      <div className="mt-8">
                        <i>
                          <span className="font-bold">Master:</span> {master}
                        </i>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      src={imageUrl}
                      alt={activity}
                      className="w-full h-auto" // Ensures responsive image
                    />
                  </div>
                </div>
              );
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
