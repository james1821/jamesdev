import React from "react";
import { Fade } from "react-awesome-reveal";
function Contacts() {
  return (
    <div
      id="Contacts"
      className="bg-primary-bg h-[300px] flex  flex-col  items-center justify-center"
    >
      <div className="flex items-center justify-center w-1/2">
        <Fade>
          <h1 className=" flex items-center justify-center text-center md:text-center text-7xl md:text-8xl font-bold pb-4  text-primary ">
            Contacts
          </h1>
        </Fade>
      </div>

      <div className="w-1/2 ">
        <div className="flex items-center justify-center m-auto gap-5">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/mark-james-espinosa-4b8146241/"
          >
            <img
              className="w-[50px] "
              src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/linked_in_online_social_media-64.png"
            />
          </a>
          <a
            target="_blank"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=jamesespinosamark@gmail.com&su=Hello&body="
          >
            <img
              className="w-[50px] "
              src="https://cdn4.iconfinder.com/data/icons/black-white-social-media/32/mail_email_envelope_send_message-64.png"
            />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/markjames.espinosa.1/"
          >
            <img
              className="w-[50px] "
              src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_facebook-64.png"
            />
          </a>
          <a target="_blank" href="https://github.com/james1821/">
            <img
              className="w-[50px] "
              src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/64/social_media_logo_github-64.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
