import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import "./Style/home.css";
import hero2 from "../Pages/Images/hero2.jpg"
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
export default function Family() {
  return (
    <div>
      <Image />
      <Box mt={7}>
        <Typography
          id="pope"
          
          className="text-center"
          color="initial"
          sx={{fontSize: { lg: "50px", md: "45px", sm: "40px", xs: "35px" }, color:"black"}}
        >
          Heads of Pope School
        </Typography>
        <Box mt={1} p={5}>
          <Head />
        </Box>
      </Box>
      <div className="p-12">
        <hr className="my-4" />
      </div>
      <Box mt={0} p={5}>
        <Grid container spacing={2}>
          <Grid item lg={4} xs={12}>
            <Box p={2} data-aos="fade-right">
              <Typography
                className="text-center"
                mb={2}
                variant="h4"
                color="initial"
              >
                PG Assistants
              </Typography>
              <PgStaff />
            </Box>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Box p={2} data-aos="fade" data-aos-delay="300">
              <Typography
                className="text-center"
                mb={2}
                variant="h4"
                color="initial"
              >
                BT Assistants
              </Typography>
              <BtStaff />
            </Box>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Box p={2} data-aos="fade-left" data-aos-delay="600">
              <Typography
                className="text-center"
                mb={2}
                variant="h4"
                color="initial"
              >
                Sec.Grade Assistants
              </Typography>
              <Sec_Staff />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box mt={0} p={5}>
        <Grid container spacing={2}>
          <Grid item lg={6} xs={12}>
            <Box p={2} data-aos="fade-right">
              <Typography
                className="text-center"
                mb={2}
                variant="h4"
                color="initial"
              >
                Non Teaching Staffs
              </Typography>
              <Non_Staff />
            </Box>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Box p={2} data-aos="fade-left" data-aos-delay="300">
              <Typography
                className="text-center"
                mb={2}
                variant="h4"
                color="initial"
              >
                Management Staffs
              </Typography>
              <Management />
            </Box>
          </Grid>
          
        </Grid>
      </Box>
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
            src={hero2}// Corrected image reference
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
              borderRadius: "20px",
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
                Staffs
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
function PgStaff() {
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
  return (
    <div className="flex justify-center">
      {data.length > 0 ? (
        <div>
          {data
            .filter((item) => item.fields.pgStaffs) // Filter to get only pgStaffs data
            .map((item, index) => (
              <div key={index}>
                {/* <Typography variant="h3" color="initial">PG Staff</Typography> */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.fields.pgStaffs.replace(/\n/g, "<br/>"),
                  }}
                ></div>
              </div>
            ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

function BtStaff() {
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
  return (
    <div className="flex justify-center">
      {data.length > 0 ? (
        <div>
          {data
            .filter((item) => item.fields.btStaffs) // Filter to get only pgStaffs data
            .map((item, index) => (
              <div key={index}>
                {/* <Typography variant="h3" color="initial">PG Staff</Typography> */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.fields.btStaffs.replace(/\n/g, "<br/>"),
                  }}
                ></div>
              </div>
            ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

function Head() {
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
  return (
    <div className="flex justify-center">
      {data.length > 0 ? (
        <div>
          {data
            .filter((item) => item.fields.heads) // Filter to get only pgStaffs data
            .map((item, index) => (
              <div key={index}>
                {/* <Typography variant="h3" color="initial">PG Staff</Typography> */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.fields.heads.replace(/\n/g, "<br/>"),
                  }}
                ></div>
              </div>
            ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

function Sec_Staff() {
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
  return (
    <div className="flex justify-center">
      {data.length > 0 ? (
        <div>
          {data
            .filter((item) => item.fields.secondaryGrade) // Filter to get only pgStaffs data
            .map((item, index) => (
              <div key={index}>
                {/* <Typography variant="h3" color="initial">PG Staff</Typography> */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.fields.secondaryGrade.replace(/\n/g, "<br/>"),
                  }}
                ></div>
              </div>
            ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

function Non_Staff() {
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
  return (
    <div className="flex justify-center">
      {data.length > 0 ? (
        <div>
          {data
            .filter((item) => item.fields.nonTeachingStaffs) // Filter to get only pgStaffs data
            .map((item, index) => (
              <div key={index}>
                {/* <Typography variant="h3" color="initial">PG Staff</Typography> */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.fields.nonTeachingStaffs.replace(/\n/g, "<br/>"),
                  }}
                ></div>
              </div>
            ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

function Management() {
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
  return (
    <div className="flex justify-center">
      {data.length > 0 ? (
        <div>
          {data
            .filter((item) => item.fields.managmentStaffs) // Filter to get only pgStaffs data
            .map((item, index) => (
              <div key={index}>
                {/* <Typography variant="h3" color="initial">PG Staff</Typography> */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.fields.managmentStaffs.replace(/\n/g, "<br/>"),
                  }}
                ></div>
              </div>
            ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}