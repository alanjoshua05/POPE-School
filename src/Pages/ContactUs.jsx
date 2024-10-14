import React, { useRef } from "react";
import { Box, Grid, Typography } from "@mui/material";
import "./Style/home.css";
import map from "./map.png";
import hero2 from "../Pages/Images/hero2.jpg";
import emailjs from "@emailjs/browser";
export default function ContactUs() {
  return (
    <div>
      <Image />
      <Form />
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
                Contact Us
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Form() {
  const form = useRef();  // Create a ref to access the form fields

  const sendEmail = (e) => {
    e.preventDefault();  // Prevent default form submission

    emailjs
      .sendForm(
        "service_tmwe7gn", // Replace with your EmailJS service ID
        "template_ure6y3o", // Replace with your EmailJS template ID
        form.current,
        "nkS3TIH7W4Gi3wG5O"      // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
        }
      );
  };

  return (
    <Box mt={5}>
      <Grid container p={7} spacing={1}>
        <Grid item xs={12} sm={6}>
          <Box mt={{ lg: 5, sm: 2 }}>
            <a target="blank" href="https://maps.app.goo.gl/rL3RNpZmmVrv6dC96">
              <img src={map} alt="" />
            </a>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            id="pope"
            sx={{
              color: "black",
              fontSize: { lg: "40px", md: "35px", sm: "30px", xs: "25px" },
            }}
            color="initial"
            className="text-center"
            mt={5}
          >
            Contact Us
          </Typography>
          <form ref={form} onSubmit={sendEmail} className="max-w-sm mx-auto">
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                name="user_name"  // Name attribute should match EmailJS template variables
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="phone"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="user_phone"  // Name attribute for phone number
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="user_email"  // Name attribute for email
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="message"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Message
              </label>
              <textarea
                name="message"  // Name attribute for message
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 mt-3 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Send Message
            </button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}