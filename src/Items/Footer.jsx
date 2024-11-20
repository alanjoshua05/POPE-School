import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import "./footer.css";
import logo from "./logo.jpg";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import PlaceIcon from "@mui/icons-material/Place";
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function Footer() {
  return (
    <div>
      <Foot />
    </div>
  );
}

function Foot() {
  return (
    <Box mt={20} sx={{ border: "1px solid rgba(230, 230, 231, 1)" }}>
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 p-3 flex gap-7 md:mb-0">
              <img src={logo} style={{ width: "100px", height:"100px" }} alt="FlowBite Logo" />
              <div style={{ alignItems: "center" }} className="flex">
                <ul>
                  <li className="flex gap-2">
                    <span className="font-bold">
                      <EmailIcon />
                    </span>
                    <p id="inter">popemhsss@gmail.com</p>
                  </li>
                  <li className="mt-2 flex gap-2">
                    
                      <span className="font-bold">
                        <CallIcon />
                      </span>
                      <p id="inter">
                      04630-273329
                    </p>
                  </li>
                  {/* <li className="mt-2 flex gap-2">
                    <span className="font-bold">
                      <PlaceIcon />
                    </span>
                    <p id="inter">
                      3-B, Periyanayagipuram, <br /> Opp. to Collectorate,{" "}
                      <br /> Thoothukudi, Tamil Nadu - 628 101 INDIA
                    </p>
                  </li> */}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-12 sm:gap-12 sm:grid-cols-2">
              <div>
                <h2 className="mb-2 text-sm text-end font-semibold text-gray-900 uppercase dark:text-white">
                  Pages
                </h2>
                <div className="flex gap-12">
                  <ul className="text-gray-500">
                    <li>
                      <Link to="/home">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">School</Link>
                    </li>
                    <li>
                      <Link to="/founder">Founder</Link>
                    </li>
                    <li>
                      <Link to="/vision">Vision & Mission</Link>
                    </li>
                    <li>
                      <Link to="/achievement">Achievements</Link>
                    </li>
                    <li>
                      <Link to="/rules">Rules & Regulations</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <ul className="text-gray-500 mt-7">
                  <li>
                    <Link to="/academics">Academics</Link>
                  </li>
                  <li>
                    <Link to="/activities">Activity</Link>
                  </li>
                  <li>
                    <Link to="/infrastructure">Infrastructure</Link>
                  </li>
                  <li>
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link to="/staff">Staffs</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" mt-6">
            
              <div className="flex justify-center mt-4 lg:p-12 sm:p-2 sm:justify-center sm:mt-0">
                <a
                  href="https://www.facebook.com/popesschoolsawyerpuram/" target="blank"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <FacebookIcon/>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                >
                  <InstagramIcon/>
                </a>
                <a
                  href="https://youtube.com/@popemhss?si=LSPrh3WSJ-aro8T0" target="blank"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                >
                  <YouTubeIcon/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Box>
  );
}
