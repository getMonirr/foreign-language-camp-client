import CampContainer from "../../../components/Shared/CampContainer";
import meetingsBg from "../../../assets/bg/meetings-bg.jpg";
import CampBtn from "../../../components/Shared/CampBtn";

const ContactUs = () => {
  return (
    <div
      className=" py-32 bg-fixed"
      style={{ backgroundImage: `url(${meetingsBg})` }}
    >
      <CampContainer>
        <div className=" lg:flex justify-between items-center gap-8 text-black">
          <div className="lg:w-3/4 space-y-6 bg-white p-6 lg:p-10 rounded-2xl">
            <div>
              <h3 className="font-camp-dis uppercase text-camp-dis-col text-2xl font-bold">
                Lets get in touch
              </h3>
              <div className="divider"></div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <input
                type="text"
                placeholder="Name *"
                className="input input-bordered text-black rounded-full w-full"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered text-black rounded-full w-full"
              />
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered text-black rounded-full w-full"
              />
            </div>
            <div>
              <textarea
                className="textarea textarea-bordered w-full h-32 rounded-2xl"
                placeholder="Message"
              ></textarea>
            </div>
            <div>
              <CampBtn>Send Your message</CampBtn>
            </div>
          </div>
          <div className="bg-camp-secondary p-10 text-white lg:w-1/4 mt-10 lg:mt-0 rounded-2xl bg-opacity-80 font-camp-dis">
            <div>
              <p className=" text-base">Phone number</p>
              <p className="text-lg">+880 1771-00000</p>
              <div className="divider"></div>
            </div>
            <div>
              <p>Email Address</p>
              <p className="text-lg">flc@support.com</p>
              <div className="divider"></div>
            </div>
            <div>
              <p>Street Address</p>
              <p className="text-lg">
                Mymensingh, Bangladesh, <br />
                8888-5555,56
              </p>
              <div className="divider"></div>
            </div>
            <div>
              <p>Website Url</p>
              <p className="text-md">foreign-language-camp.web.app</p>
              <div className="divider"></div>
            </div>
          </div>
        </div>
      </CampContainer>
    </div>
  );
};

export default ContactUs;
