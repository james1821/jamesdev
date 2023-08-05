import React, { useState, useEffect } from "react";

const ResizableImage = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setInnerWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getImageUrl = (innerWidth) => {
    if (innerWidth < 768)
      return "https://scontent.fmnl26-2.fna.fbcdn.net/v/t39.30808-6/350108414_1022564192065484_5806974542006366194_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHa2K0f0AvD-GjSzXyfxbUJbPoOPnmHPn1s-g4-eYc-fay0ky7ZxaXOITMeSoHlc_erPNev5ujh2UxjrbHt-yhS&_nc_ohc=HZQ2mABNYTsAX8LPLxk&_nc_oc=AQk6lJJE6cbnNTSDht5jlVDJb5eolfWM2OsVj3O54-PmprJW3-De2GstEjhML-9F9iih9SAP5kkxtcdKxxztrRO0&_nc_zt=23&_nc_ht=scontent.fmnl26-2.fna&oh=00_AfDXn6UgIR4iLLV5ymxG8j56yYmdwB5VRv2O4QxtwR_99A&oe=64CE5AC6";
    return "https://scontent.fmnl26-1.fna.fbcdn.net/v/t39.30808-6/355479793_759938322590204_4665047286317818644_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHi4HIBRySGtyqRmUNGmHnH3NQLNCwqUUHc1As0LCpRQdV-X4W_9dl7H_B7veKMFDIb9Gx_Y8Yrs0TPznm6bATo&_nc_ohc=Pw_iXgsObUkAX9l-q83&_nc_zt=23&_nc_ht=scontent.fmnl26-1.fna&oh=00_AfB4sj8vIiiUlFnoa0x4drcH-zDe07f1rr_oQDhHuLqZ0A&oe=64CF4494";
  };

  const getImageWidth = (innerWidth) => {
    if (innerWidth < 768) return "100%";
    return "90%";
  };

  const imageWidth = getImageWidth(innerWidth);
  const imageUrl = getImageUrl(innerWidth);

  return <img src={imageUrl} className={`w-[${imageWidth}] m-auto`} alt="ResizableImage" loading="lazy" />;
};

export default ResizableImage;
