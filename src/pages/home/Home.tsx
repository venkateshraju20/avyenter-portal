import CheckOutlineIcon from "../../assets/icons/check-outline-icon.svg";
import RedefineImage from "../../assets/images/redefine.svg";
import ArrowRightIcon from "../../assets/icons/arrow-right-icon.svg";
import CheckCircleIcon from "../../assets/icons/check-circle-icon.svg";
import BlueImage from "../../assets/images/blue-image.svg";
import BlogLeftImage from "../../assets/images/blog-left-image.svg";
import BlogOneImage from "../../assets/images/blog-one-image.svg";
import BlogTwoImage from "../../assets/images/blog-two-image.svg";
import BlogThreeImage from "../../assets/images/blog-three-image.svg";
import BrandingImage from "../../assets/images/branding.svg";
import "./Home.css";
const Home = () => {
  const superChargedSection = () => {
    return (
      <>
        <div className="row align-items-center pt-4">
          <div className="col">
            <div className="fw-bold fs-1 mb-3 lh-sm">
              Your Supercharged Design Workflow.
            </div>
            <div className="d-flex flex-column gap-1 mb-4">
              <div className="d-flex gap-2">
                <div>
                  <img src={CheckCircleIcon} alt="CheckCircleIcon" />
                </div>
                <div>Enterprise-grade security</div>
              </div>
              <div className="d-flex gap-2">
                <div>
                  <img src={CheckCircleIcon} alt="CheckCircleIcon" />
                </div>
                <div>99.9% guaranteed uptime SLA</div>
              </div>
              <div className="d-flex gap-2">
                <div>
                  <img src={CheckCircleIcon} alt="CheckCircleIcon" />
                </div>
                <div>Designated customer success team</div>
              </div>
            </div>
          </div>
          {/* <div className="col">
            <div className="d-flex justify-items-end">
              <img src={BlueImage} alt="BlueImage" />
            </div>
          </div> */}
        </div>
      </>
    );
  };
  const redefiningSection = () => {
    return (
      <>
        <div className="row gap-5">
          <div className="col br-r bg-white my-5 bx-shadow">
            <div className="d-flex flex-column py-3">
              <h3>300K+</h3>
              <div className="text-gray-200">
                Pellentesque morbi non condi mentum iaculis dictum neque, velit
              </div>
            </div>
          </div>
          <div className="col br-r bg-white my-5 bx-shadow">
            <div className="d-flex flex-column py-3">
              <h3>300K+</h3>
              <div className="text-gray-200">
                Pellentesque morbi non condi mentum iaculis dictum neque, velit
              </div>
            </div>
          </div>
          <div className="col br-r bg-white my-5 bx-shadow">
            <div className="d-flex flex-column py-3">
              <h3>300K+</h3>
              <div className="text-gray-200">
                Pellentesque morbi non condi mentum iaculis dictum neque, velit
              </div>
            </div>
          </div>
          <div className="col br-r bg-white my-5 bx-shadow">
            <div className="d-flex flex-column py-3">
              <h3>300K+</h3>
              <div>
                Pellentesque morbi non condi mentum iaculis dictum neque, velit
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center m-5">
          <h3 className="text-center">Redefining Remote Payroll Management</h3>
          <div className="text-gray-200 text-center">
            Keeping your eye on the ball while performing a deep dive on the
            start-up mentality to derive convergence on cross-platform
            integration.
          </div>
        </div>
        <div className="row align-items-center pb-5">
          <div className="col">
            <h4>Demonstrate branding consequently think outside</h4>
            <p className="text-gray-200">
              Velit purus egestas tellus phasellus. Mattis eget sed faucibus
              magna vulputate pellentesque a diam tincidunt. Aenean malesuada
              tellus tellus faucibus mauris quisque mauris in.
            </p>
            <div className="d-flex flex-column gap-1 mb-4">
              <div className="d-flex gap-2">
                <div>
                  <img src={CheckOutlineIcon} alt="CheckOutlineIcon" />
                </div>
                <div>Enterprise-Level Support</div>
              </div>
              <div className="d-flex gap-2">
                <div>
                  <img src={CheckOutlineIcon} alt="CheckOutlineIcon" />
                </div>
                <div>Hassle free legal formations</div>
              </div>
              <div className="d-flex gap-2">
                <div>
                  <img src={CheckOutlineIcon} alt="CheckOutlineIcon" />
                </div>
                <div>Designated customer success team</div>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-primary bg-blue-900 br-btn-primary"
            >
              Start now
              <img
                style={{ verticalAlign: "text-top" }}
                className="ms-2"
                src={ArrowRightIcon}
                alt="ArrowRightIcon"
              />
            </button>
          </div>
          <div className="col">
            <div className="d-flex justify-content-end">
              <img src={RedefineImage} alt="RedefineImage" />
            </div>
          </div>
        </div>
      </>
    );
  };
  const brandingPosts = () => {
    return (
      <>
        <div className="row align-items-center pb-5">
          <div className="col">
            <div className="d-flex">
              <img src={BrandingImage} alt="BrandingImage" />
            </div>
          </div>
          <div className="col">
            <h4>
              Demonstrate branding consequently think outside the box and beyond
            </h4>
            <p className="text-gray-200">
              Velit purus egestas tellus phasellus. Mattis eget sed faucibus
              magna vulputate pellentesque a diam tincidunt. Aenean malesuada
              tellus tellus faucibus mauris quisque mauris in.
            </p>
            <div className="d-flex flex-column gap-1 mb-4">
              <div className="d-flex gap-2">
                <div>
                  <img src={CheckOutlineIcon} alt="CheckOutlineIcon" />
                </div>
                <div>Enterprise-grade security</div>
              </div>
              <div className="d-flex gap-2">
                <div>
                  <img src={CheckOutlineIcon} alt="CheckOutlineIcon" />
                </div>
                <div>99.9% guaranteed uptime SLA</div>
              </div>
              <div className="d-flex gap-2">
                <div>
                  <img src={CheckOutlineIcon} alt="CheckOutlineIcon" />
                </div>
                <div>Designated customer success team</div>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-primary bg-blue-900 br-btn-primary"
            >
              Start now
              <img
                style={{ verticalAlign: "text-top" }}
                className="ms-2"
                src={ArrowRightIcon}
                alt="ArrowRightIcon"
              />
            </button>
          </div>
        </div>
      </>
    );
  };
  const blogPosts = () => {
    return (
      <>
        <div>
          <div className="d-flex flex-column align-items-center p-5">
            <h3 className="text-center">Latest Blog Posts</h3>
            <div className="text-gray-200 text-center">
              Completely synergize resource taxing relationships via premier
              niche markets. Professionally cultivate one-to-one customer
              service with robust ideas.
            </div>
          </div>
          <div className="row pb-5">
            <div className="col">
              <div className="d-flex flex-column">
                <div>
                  <img src={BlogLeftImage} alt="BlogLeftImage" />
                </div>
                <div className="fw-bold fs-5 my-3">
                  Reach your users with new tools. Reach your users with new
                  tools. Reach your users with new tools.
                </div>
                <p className="text-gray-200">
                  Efficiently unleash cross-media information without
                  cross-media value. Quickly maximize.Efficiently unleash
                  cross-media information without cross-media value. Quickly
                  maximize.Efficiently unleash cross-media.
                </p>
                <div className="text-gray-200">25 Apr 2022 </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center gap-4">
                  <div>
                    <img src={BlogOneImage} alt="BlogOneImage" />
                  </div>
                  <div className="d-flex flex-column">
                    <div className="fw-bold fs-5 my-1">
                      Reach your users with new tools
                    </div>
                    <p className="text-gray-200">
                      Efficiently unleash cross-media information without
                      cross-media value. Quickly maximize.
                    </p>
                    <div className="text-gray-200">25 Apr 2022 </div>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-4">
                  <div>
                    <img src={BlogTwoImage} alt="BlogTwoImage" />
                  </div>
                  <div className="d-flex flex-column">
                    <div className="fw-bold fs-5 my-1">
                      Faster ways to reach your customer
                    </div>
                    <p className="text-gray-200">
                      Completely synergize resource taxing relationships via
                      premier niche markets.
                    </p>
                    <div className="text-gray-200">
                      25 Apr 2022 - Blog theme
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-4">
                  <div>
                    <img src={BlogThreeImage} alt="BlogThreeImage" />
                  </div>
                  <div className="d-flex flex-column">
                    <div className="fw-bold fs-5 my-1">
                      Revolutionizing the Design Industry
                    </div>
                    <p className="text-gray-200">
                      Efficiently unleash cross-media information without
                      cross-media value. Quickly maximize.
                    </p>
                    <div className="text-gray-200">
                      25 Apr 2022 - Blog theme
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const emailSubscribeSection = () => {
    return (
      <>
        <div className="d-flex flex-column align-items-center p-5">
          <div className="text-blue-900 mb-2">1% OF THE INDUSTRY</div>
          <h4 className="mb-2 text-center">
            Welcome to your new digital reality that will rock your world truly
            at all throughout.
          </h4>
          <div className="d-flex my-3">
            <input
              className="form-control rounded-end-0"
              type="text"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="btn btn-primary bg-blue-900 br-btn-primary rounded-start-0"
            >
              Submit
            </button>
          </div>
          <div className="d-flex gap-5">
            <div className="d-flex gap-2">
              <div>
                <img src={CheckCircleIcon} alt="CheckCircleIcon" />
              </div>
              <div>Fully Secure</div>
            </div>
            <div className="d-flex gap-2">
              <div>
                <img src={CheckCircleIcon} alt="CheckCircleIcon" />
              </div>
              <div>24/7 Support</div>
            </div>
            <div className="d-flex gap-2">
              <div>
                <img src={CheckCircleIcon} alt="CheckCircleIcon" />
              </div>
              <div>Done Deal</div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      {/* <section>
        <div className="d-flex align-items-center mb">
          <div className="container-l">{superChargedSection()}</div>
          <div className="">
            <img src={BlueImage} alt="BlueImage" />
          </div>
        </div>
      </section> */}
      <section className="bg-white">
        <div className="container-xxl">{redefiningSection()}</div>
      </section>
      <section>
        <div className="container-xxl">{brandingPosts()}</div>
      </section>
      <section className="bg-white">
        <div className="container-xxl">{blogPosts()}</div>
      </section>
      <section>
        <div className="container-xxl">{emailSubscribeSection()}</div>
      </section>
    </>
  );
};

export default Home;
