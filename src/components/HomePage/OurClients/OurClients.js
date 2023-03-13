import { Typography } from "@mui/material";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import image1 from "../../../Assets/ClientsLogo/image1.png";
import image2 from "../../../Assets/ClientsLogo/image2.png";
import image3 from "../../../Assets/ClientsLogo/image3.png";
import image4 from "../../../Assets/ClientsLogo/image4.png";
import image5 from "../../../Assets/ClientsLogo/image5.png";
import image6 from "../../../Assets/ClientsLogo/image6.png";

function OurClients() {
  return (
    <div style={{ marginBottom: "50px" }}>
      <Typography variant="h4" sx={{ textAlign: "center", my: 5 }}>
      Sponsored by
      </Typography>
      <Marquee >
        <Image
          style={{ margin: "0 60px" }}
          src={image1}
          alt="clientImage"
          height={40}
        ></Image>
        <Image
          style={{ margin: "0 60px" }}
          src={image2}
          alt="clientImage"
          height={40}
        ></Image>
        <Image
          style={{ margin: "0 60px" }}
          src={image3}
          alt="clientImage"
          height={40}
        ></Image>
        <Image
          style={{ margin: "0 60px" }}
          src={image4}
          alt="clientImage"
          height={40}
        ></Image>
        <Image
          style={{ margin: "0 60px" }}
          src={image5}
          alt="clientImage"
          height={40}
        ></Image>
        <Image
          style={{ margin: "0 60px" }}
          src={image6}
          alt="clientImage"
          height={40}
        ></Image>
      </Marquee>
      <Marquee direction="right" style={{ margin: "100px 0" }}>
        <Image
          style={{ margin: "0 60px" }}
          src={image1}
          alt="clientImage"
          height={40}
        ></Image>
        <Image
          style={{ margin: "0 60px" }}
          src={image2}
          alt="clientImage"
          height={40}
        ></Image>
        <Image
          style={{ margin: "0 60px" }}
          src={image3}
          alt="clientImage"
          height={40}
        ></Image>
        <Image
          style={{ margin: "0 60px" }}
          src={image4}
          alt="clientImage"
          height={40}
        ></Image>
        <Image
          style={{ margin: "0 60px" }}
          src={image5}
          alt="clientImage"
          height={40}
        ></Image>
        <Image
          style={{ margin: "0 60px" }}
          src={image6}
          alt="clientImage"
          height={40}
        ></Image>
      </Marquee>
    </div>
  );
}

export default OurClients;
