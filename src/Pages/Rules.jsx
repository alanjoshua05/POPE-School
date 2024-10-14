import { Box, Typography } from "@mui/material";
import React from "react";
import hero2 from "../Pages/Images/hero2.jpg"
export default function Rules() {
  return (
    <div>
      <Image />
      <RulesList/>
      <Dress/>
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
                Rules & Regulations
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const RulesList = () => {
  const rules = [
    "All pupils should attend the class punctually in full uniform.",
    "All are expected to be present before the warning bell for the assembly.",
    "Pupils should assemble in classwise for the morning prayers.",
    "When teachers enter a class, the students should stand up.",
    "Shouting or any other activity that would disturb the peaceful working of the institution is totally prohibited.",
    "Pupils are expected to keep the classroom premises absolutely clean.",
    "Pupils called for co-curricular and extra-curricular activities should participate enthusiastically.",
    "Parents are requested to sign the Late Attendance Record, Absence Record, and the notes to the parents sent by the teachers through the Hand Book.",
    "Parents are expected to come for the Open Day after every monthly test and term examination.",
    "Any change in the address or phone number should be intimated to the office.",
    "Pupils must produce leave letters when they go on leave.",
    "Pupils should get their hair trimmed at regular intervals.",
    "Collecting donations or selling articles in the school premises for any purpose is prohibited.",
    "The school is not responsible for the articles lost, it is not advisable to bring valuables to school.",
    "Pupils are strictly forbidden from scribbling on the walls, blackboards, furniture, or any part of the school premises.",
    "Damage done to school furniture, library books, sports goods, etc., must be paid for at the discretion of the Principal.",
    "If the students have failed to follow the discipline of the school, the principal is fully empowered to remove the student from the school.",
  ];

  return (
    <Box p={{lg:10,md:8,sm:6,xs:3}}>
      <Typography
        className="text-center"
        id="pope"
        sx={{
          color: "black",
          fontSize: { lg: "50px", md: "45px", sm: "40px", xs: "35px" },
        }}
      >
        Rules & Regulations
      </Typography>
      <ol className="mt-12">
        {rules.map((rule, index) => (
          <li key={index}>{index+1}) {rule}</li>
        ))}
      </ol>
    </Box>
  );
};

function Dress() {
    return (
      <Box mt={{ lg: 2, xs: 6 }}>
        <Box p={{ lg: 10, md: 10, sm: 8, xs: 2 }}>
          <Typography
            id="pope"
            sx={{
              color: "black",
              fontSize: { lg: "50px", md: "45px", sm: "40px", xs: "35px" },
            }}
            color="initial"
          >
            Dress Code
          </Typography>
          <hr className="my-3" />
          <div className="grid mt-12 lg:grid-cols-2 gap-12">
            <div>
              <img
                src="https://t4.ftcdn.net/jpg/07/47/52/65/360_F_747526593_zVsSkbEg7Sv46roUeEuMSUD9nPNxCT2B.jpg"
                alt=""
              />
            </div>
            <div className="flex">
              <div className="justify-center text-justify items-center flex">
                <p>
                  At our boys' school, we uphold a strong dress code that promotes
                  discipline, unity, and pride. Students are required to wear a
                  crisp white shirt paired with tailored navy blue trousers. A
                  school tie must be worn, reflecting our identity and values.
                  Footwear consists of polished black shoes, ensuring a neat
                  appearance. The dress code encourages students to present
                  themselves with respect and dignity, fostering a sense of
                  belonging within the school community. Regular inspections are
                  conducted to ensure compliance, instilling responsibility and
                  pride in one's appearance, which reflects our commitment to
                  excellence in all aspects of student life.
                </p>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    );
  }