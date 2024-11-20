import { Box, Typography, Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import React from "react";
import "./Style/home.css";
import hero from "../Pages/Images/hero.jpg"
import hero1 from "../Pages/Images/slide1.jpg"
import hero2 from "../Pages/Images/hero2.jpg"
export default function About() {
  return (
    <div>
      <Image />
      <History />
    </div>
  );
}

function Image() {
  return (
    <Box p={2} position="relative" width="100%" margin="auto">
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
            borderRadius:"20px"
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
        
      </Box>
    </Box>
  );
}

function History() {
  return (
    <Box>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <Box
          mt={{ lg: 0, md: 1, sm: 2, xs: 4 }}
          p={{ lg: 10, md: 8, sm: 5, xs: 1 }}
        >
          <Typography
            className="text-center uppercase"
            id="pope"
            sx={{
              color: "black",
              fontSize: { lg: "50px", md: "45px", sm: "40px", xs: "30px" },
            }}
          >
            POPE Memorial <br /> Higher Scecondary School
          </Typography>
          <Typography
            mt={1}
            sx={{ color: "black" }}
            variant="body2"
            id="inter"
            className="text-center"
          >
            Established in 1844, our school has been dedicated to nurturing
            generations of learners, fostering excellence, and shaping bright
            futures.
          </Typography>
        </Box>
        <div>
          <Typography
            mt={{ lg: 0, md: 1, sm: 2, xs: 4 }}
            sx={{ textAlign: "justify" }}
          >
            Dr. George Uglo Pope an ordained Christian minister came to South
            India for ministry. He started a Christian college at Sawyerpuram in
            1844 called Seminary. The institution provided education in English,
            Latin, Greek, Mathematics, Science, and various other subjects.
            During the period of 1844 to 1874, the Seminary was very much
            successful. In 1858, London Oxford University funded this Seminary
            to establish a library. Seminary was recognized as a College by the
            University. Mr. Sharak was the Principal of this college. This
            College was shifted to Tuticorin by Mr. Coldawell in 1883. In 1930,
            by the effort of the Alumni of the School which acted as a middle
            school is upgraded to High school. A new block was added to the
            campus in 1932. In 1944, under the leadership of A.V. Thomas, the
            school celebrated its centenary. The centenary Hall was inaugurated
            by then Chief Minister Mr. k. Kamaraj on 4 th July 1955. Now it
            acting as an auditorium with a capacity of 400 people. In 1957,
            according to new education policy, to teach the engineering and
            secretarial department an engineering workshop of Rs. 50,000/- was
            established. In 1962, by the effort of Alumni Association of school
            Pope College was recognized by the University. By 1964, the Pope
            College was shifted to the current location. In 1978, Pope High
            School was upgraded to Pope Higher Secondary School. In 1985, on the
            occasion of Emerald Jubilee of Alumni Association a building was
            constructed. In 1989, on the occasion of Diamond Jubilee of Alumni
            Association upstairs of that building was constructed. On 2 nd
            October 1994, the school&#39;s 150th-year celebration was held, and
            the first phase of the new high school building, which started
            constructing on the occasion of Diamond Jubilee was completed by
            1995. A new administrative block has been constructed on April 2002
            and has been working effectively till now. The 159th-anniversary
            celebration of school was held on 19 th July 2003. An arch was
            created fulfilling the dream of Alumni on 25 th May 2012 by Pastor
            Hather. Retd. Mr. Rajamani noticed the old deteriorating building
            near staff room, which was replaced and a new concrete building
            named Rajamani Block was built, which was funded by his family and
            was inaugurated on 28 th January 2014. A Research block was
            inaugurated by Pastor Rt. Rev. Dr. S. E. C. Devasagayam on 27 th
            October 2018. On 12 th April 2019 a pavilion was constructed and
            inaugurated by Rt. Rev. Dr. S.E.C. Devasagayam. By the grace of God
            the institutional pride has been escalated and will reach pinnable
            in future years.
          </Typography>
        </div>
      </div>
    </Box>
  );
}

function High() {
  return (
    <Box mt={4}>
      <Box p={{ lg: 13, md: 10, sm: 8, xs: 6 }}>
        <Grid
          container
          spacing={3}
          direction={{ xs: "column-reverse", lg: "row" }}
        >
          <Grid item xs={12} lg={6} display="flex" justifyContent="center">
            <div className="content mt-6">
              <Typography
                sx={{
                  color: "black",
                  fontSize: { lg: "35px", md: "45px", sm: "40px", xs: "35px" }, // Adjust for more breakpoints
                }}
                id="pope"
              >
                Dr. George Uglow Pope
              </Typography>
              <Typography variant="body1" mt={2}>
                Dr. George Uglow Pope was a prominent educationist and
                philanthropist known for his dedication to advancing education
                in India. He founded several institutions, including our school,
                with a vision to provide quality education to all. His
                unwavering commitment to learning and social reform has left a
                lasting legacy in the community.
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} lg={6} display="flex" justifyContent="flex-end" alignItems="center">
  <div className="flex flex-col items-center">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/3/3c/George_Uglow_Pope.jpg"
      alt="George Uglow Pope"
      className="w-full lg:w-3/4"
    />
    <p className="text-center mt-2">Dr. George Uglow Pope</p> {/* Added margin for spacing */}
  </div>
</Grid>

        </Grid>
      </Box>
    </Box>
  );
}
