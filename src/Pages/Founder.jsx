import { Box, Typography } from "@mui/material";
import React from "react";
import pope from "./Images/pope.avif"

export default function Founder() {
  return (
    <div>
      <Image />
      <History />
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
            src={pope}
            sx={{
              width: "100%",
              height: "94vh", // Responsive height
              objectFit: "cover", // Ensures the image covers the entire box
              objectPosition: "center", // Centers the image
              transition: "opacity 0.5s ease-in-out", // Smooth transition
              borderRadius:"20px"
            }}
          />
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
            className="text-center"
            id="pope"
            sx={{
              color: "black",
              fontSize: { lg: "50px", md: "45px", sm: "40px", xs: "35px" },
            }}
          >
            George Uglow Pope
          </Typography>
          <Typography
            mt={1}
            sx={{ color: "black" }}
            variant="body2"
            id="inter"
            className="text-center"
          >
            George Uglow Pope (24 April 1820 – 11 February 1908), or G. U. Pope,
            was an Anglican Christian missionary and Tamil scholar who spent 40
            years in Tamil Nadu and translated many Tamil texts into English.
            His popular translations included those of the Tirukkural and
            Thiruvasagam.
          </Typography>
        </Box>
        <div>
          <Typography
            mt={{ lg: 0, md: 1, sm: 2, xs: 4 }}
            sx={{ textAlign: "justify" }}
          >
            George Uglow Pope was born on 24 April 1820 in Bedeque, Prince
            Edward Island, Canada. His father, John Pope (1791–1863), a merchant
            turned missionary from Padstow, Cornwall, emigrated to Prince Edward
            Island in 1818 with his wife, Catherine Uglow (1797–1867), from
            Stratton, North Cornwall. The family moved to Nova Scotia and later
            to St. Vincent before returning to Plymouth, England in 1826, where
            John became a prosperous merchant and shipowner. George and his
            younger brother, William Burt Pope, attended Wesleyan schools in
            Bury and Hoxton. At the age of fourteen, George began his missionary
            training for service in southern India. He left for South India in
            1839 and arrived at Sawyerpuram near Tuticorin (now Thoothukudi)
            with the Society for the Propagation of the Gospel. Pope had started
            studying Tamil as a teenager in England and continued his studies on
            his voyage to India. He later became a scholar of Tamil, Sanskrit,
            and Telugu. In 1841, he was ordained by the Church of England and
            married Mary Carver, the daughter of an Anglican priest. Pope worked
            in the Tirunelveli region, where he interacted with other
            missionaries, including Christian Friedrich Schwartz. Mary passed
            away in Tuticorin in 1845, after which Pope moved to Madras (now
            Chennai). He later married Henrietta Page, daughter of G. van
            Someren, and the couple returned to England in 1849. During this
            time, Pope became associated with many key figures in the Oxford
            Movement, such as Cardinal Henry Edward Manning, Archbishop Trench,
            Bishop Samuel Wilberforce, E. B. Pusey, and John Keble. In 1851,
            Pope returned to Tanjore (now Thanjavur) to teach at St. Peter's
            School but soon found himself in conflict with other missionaries.
            In 1855, following a public flogging of Tamil priest Vedanayakam
            Shastri, Pope resigned. He founded a seminary in Sawyerpuram to
            train Anglican Tamil clergy, but after facing challenges, he moved
            to Ootacamund (Ooty) in 1859. There, he founded a grammar school for
            European children, which ran from 1859 to 1870 and is now the
            Government Arts School at Stonehouse. The grammar school, originally
            opened by the Bishop of Madras in 1858, was relocated to Lovedale in
            1869. Pope also established the Holy Trinity Church in Ooty. He was
            referred to respectfully as "Pope Aiyar" by the Tamil community. In
            1870, Pope became the principal of Bishop Cotton Boys' School in
            Bangalore, where he earned a reputation for his strictness. He also
            served as the first pastor of All Saints Church in Bangalore. In
            1881, Pope left India and settled in Oxford, where he became a
            lecturer in Tamil and Telugu in 1884. He received an honorary MA in
            1886 and a Gold Medal from the Royal Asiatic Society in 1906. Pope
            passed away on 11 February 1908, having delivered his last sermon on
            26 May 1907. He was buried at St. Sepulchre's Cemetery in Oxford,
            England. After his death, his second wife, Henrietta, and their two
            daughters received a pension. Henrietta passed away on 11 September
            1911 and was buried beside Pope. Three of their sons continued his
            legacy, working in India. John Van Someren Pope contributed to
            education in Burma, Arthur William Uglow Pope worked as a railway
            engineer in India and China, and Lieutenant-Colonel Thomas Henry
            served in the medical service and became a professor of
            ophthalmology at Madras Medical College.
          </Typography>
        </div>
      </div>
    </Box>
  );
}
