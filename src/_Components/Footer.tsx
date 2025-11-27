import { MailIcon, PhoneIcon } from "lucide-react";

export const Footer = () => {
  return (
    <div className="pt-10 pb-10 bg-blue-600 mt-10 flex justify-between">
      <div className="pr-20 pl-20 flex flex-col ">
        <img src="/Logo-Light mode.png" className="w-16 h-5 "></img>
        <p className="pt-4">© 2024 Movie Z. All Rights Reserved.</p>
      </div>
      <div className="flex gap-10 pr-20 ">
        <div className="flex flex-col">
          <div>Contact Information</div>
          <div className="flex items-center">
            <MailIcon />
            <div className="flex flex-col pl-4">
              <p>Email:</p>
              <div>
                <p>support@movieZ.com</p>
              </div>
            </div>
          </div>
          <div className="flex items-center pt-5">
            <PhoneIcon />
            <div className="flex flex-col pl-4">
              <p>Phone:</p>
              <div>
                <p>+976 (11) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex ">
          <PhoneIcon />
          <div className="flex flex-col pl-4">
            <p>Phone:</p>
            <div className="pt-3">
              <p>+976 (11) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
