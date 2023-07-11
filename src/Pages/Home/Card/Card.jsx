import CampBtn from "../../../components/Shared/CampBtn";
import CampContainer from "../../../components/Shared/CampContainer";
import SectionHeading from "../../../components/Shared/SectionHeading";

const Card = () => {
  return (
    <CampContainer>
      <SectionHeading title="Our pricing section">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        impedit id molestias at ut esse quam repudiandae, doloremque illo omnis
        culpa aliquid cum unde fugit ratione architecto, veniam velit totam?
      </SectionHeading>
      <div className="pb-32 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="card bg-base-100 shadow-2xl">
          <div className="card-body">
            <div className="lg:pl-16">
              <h2 className="card-title">Free</h2>
              <p>For general student</p>
              <div>
                <p className="text-3xl font-bold text py-8">$00</p>
              </div>
              <div>
                <ul className="list-disc list-inside pb-8">
                  <li className="font-semibold text-lg">1 User</li>
                  <li className="font-semibold text-lg">10 Download per day</li>
                  <li className="font-semibold text-lg">One connection</li>
                </ul>
              </div>
            </div>
            <div className="card-actions justify-center">
              <CampBtn className="w-full py-3 font-bold text-white">
                Buy Now
              </CampBtn>
            </div>
          </div>
        </div>
        <div className="card bg-pink-200 shadow-2xl">
          <div className="card-body">
            <div className="lg:pl-16">
              <h2 className="card-title">Premium</h2>
              <p>For Premium student</p>
              <div>
                <p className="text-3xl font-bold text py-8">$300</p>
              </div>
              <div>
                <ul className="list-disc list-inside pb-8">
                  <li className="font-semibold text-lg">10 User</li>
                  <li className="font-semibold text-lg">20 Download per day</li>
                  <li className="font-semibold text-lg">6 connection</li>
                </ul>
              </div>
            </div>
            <div className="card-actions justify-center">
              <CampBtn className="w-full py-3 font-bold text-white">
                Buy Now
              </CampBtn>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-2xl">
          <div className="card-body">
            <div className="lg:pl-16">
              <h2 className="card-title">Golden</h2>
              <p>For Golden student</p>
              <div>
                <p className="text-3xl font-bold text py-8">$600</p>
              </div>
              <div>
                <ul className="list-disc list-inside pb-8">
                  <li className="font-semibold text-lg">50 User</li>
                  <li className="font-semibold text-lg">80 Download per day</li>
                  <li className="font-semibold text-lg">Multi connection</li>
                </ul>
              </div>
            </div>
            <div className="card-actions justify-center">
              <CampBtn className="w-full py-3 font-bold text-white">
                Buy Now
              </CampBtn>
            </div>
          </div>
        </div>
      </div>
    </CampContainer>
  );
};

export default Card;
