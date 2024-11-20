import React from "react";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { createClient } from "contentful";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Members = () => {
  return (
    <div>
      <Con />
    </div>
  );
};

function Con() {
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

  // Filter to get only the "diocese" content
  const diocese = data.filter(
    (item) => item.sys.contentType.sys.id === "diocese"
  );

  return (
    <div className="bg-white py-24 mt-2 sm:py-32">
      <Typography
        id="title"
        display={"flex"}
        justifyContent={"center"}
        color="initial"
        sx={{
          fontSize: { lg: "50px", xs: "25px", md: "35px", sm: "28px" },
          fontWeight: "800",
        }}
        className="text-center"
      >
        Thoothukudi Nazareth Diocese
      </Typography>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {diocese.map((res) => (
            <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom" className="p-4" key={res.sys.id}>
              <div className="mb-4 text-center opacity-90">
                <a href="#" className="relative block">
                  <img
                    alt={res.fields.name}
                    src={`https:${res.fields.image.fields.file.url}`}
                    className="mx-auto object-cover rounded-full h-40 w-40"
                  />
                </a>
              </div>
              <div className="text-center">
                <Typography sx={{ fontSize: { lg: "19px", md:"19px", sm:"19px", xs:"19px" } }} color="initial">
                  {res.fields.name}
                </Typography>
                <Typography className="font-light text-gray-500" sx={{ fontSize: { lg: "15px", md:"15px", sm:"15px", xs:"15px" }, color:"gray" }} color="initial">
                  {res.fields.designation}
                </Typography>
                
              </div>
            </div>
          ))}
        </div>
        
      </div>
      <p>{JSON.stringify(data.filter(
    (item) => item.sys.contentType.sys.id === "achievements"
  ))}</p>
    </div>
  );
}
export default Members;
