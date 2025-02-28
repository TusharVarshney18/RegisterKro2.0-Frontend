import { assets } from "../../assets/asset";
import "./Header.css"; // Import styles

const Header = () => {
  return (
    <>
      <div
        className="container"
        style={{
          background: `url(${assets.background_img}) no-repeat center center`,
          backgroundSize: "cover",
        }}
      >
        <div className="hero">
          <div className="text">
            <img
              src={assets.Star}
              alt="star"
              style={{ width: "20px", maxWidth: "100%", height: "auto" }}
            />
            <h2>Google Rating</h2>
            <img
              src={assets.Stars}
              alt="stars"
              style={{ width: "78.41px", height: "14.36px" }}
            />
          </div>

          <div className="h1-texts">
            <h1>Your trusted partner</h1>
            <h1 className="h1-child">for compliance business needs</h1>
          </div>

          <hr className="hr-line" />

          <div className="h1-texts-2">
            <h1 className="h1=child-2">
              An online business compliance platform that helps entrepreneurs
              and other individuals with various,{" "}
              <span>registrations, tax filings,</span> and other{" "}
              <span>legal matters</span> .
            </h1>
          </div>

          <div className="group-img">
            <img
              id="group-img"
              src={assets.Group}
              style={{ width: "583.31px", height: "49.24px" }}
              alt="group-img"
            />
          </div>

          <div className="Group-1000005944">
            <button> Talk An Expert</button>
            <div className="auto-layout-horizontal">
              <img
                src={assets.Youtube}
                display={{ height: "24px", width: "24px" }}
                alt="video"
              />
              <h2>See how it works</h2>
            </div>
          </div>
        </div>

        <div className="img-container">
          <img src={assets.group3} alt="group3" />
        </div>

        <img
          className="img-2"
          src={assets.target_img}
          alt="target"
          display={{ height: "10px", width: "20px" }}
        />

        <div className="new-task-card">
          <button>Annual Compliance</button>
          <button>Payroll Services</button>
          <button>Company Formation</button>
          <button>Annual Compliance</button>
        </div>
      </div>

      {/* frame section */}
      <div className="Frame-37628">
        <h3>Trusted By Over 100+ Startups and freelance business</h3>
        <div className="frame-section">
          <img src={assets.logos} alt="Logos" />
        </div>
      </div>

      <div className="card-container">
        <h2 className="Accelerate-Digital-Transformation">
          WELCOME TO REGISTERKARO.IN
        </h2>
        <h1 className="Explore-Our-Services">Explore Our Services</h1>

        <div className="cards">
          <div className="card">
            <img id="logos" src={assets.logo1} alt="logo1" />
            <h1>Company Formation</h1>
            <p>Build web-based solutions that enhance customer experience.</p>
            <a href="#">
              Learn More
              <img src={assets.logo0} alt="" />
            </a>
          </div>

          <div className="card css">
            <img id="logos" src={assets.logo2} alt="logo2" />
            <h1>Company Secretarial Services</h1>
            <p>
              Make data-driven decisions and utilize technology to reach
              business goals.
            </p>
            <a href="#">
              Learn More
              <img src={assets.logo0} alt="" />
            </a>
          </div>
          <div className="card">
            <img id="logos" src={assets.logo3} alt="logo3" />
            <h1>Virtual Office Address</h1>
            <p>
              Foster customer relationships by effectively serving your market.
            </p>
            <a href="#">
              Learn More
              <img src={assets.logo0} alt="" />
            </a>
          </div>
          <div className="card">
            <img id="logos" src={assets.logo4} alt="" />
            <h1>Annual Compliance Services</h1>
            <p>Turn your ideas into modern products with our design experts.</p>
            <a href="#">
              Learn More
              <img src={assets.logo0} alt="" />
            </a>
          </div>
          <div className="card css">
            <img id="logos" src={assets.logo5} alt="" />
            <h1>Payroll Services</h1>
            <p>Expand your business across the globe with minimal effort.</p>
            <a href="#">
              Learn More
              <img src={assets.logo0} alt="" />
            </a>
          </div>
          <div className="card">
            <img id="logos" src={assets.logo6} alt="" />
            <h1>Bookkeeping Services</h1>
            <p>
              Steering user behaviours with creative design, data insights &
              technology.
            </p>
            <a href="#">
              Learn More
              <img src={assets.logo0} alt="" />
            </a>
          </div>

          <button className="card-btn">See All Services</button>
        </div>
      </div>

      {/* About section */}
      <div className="about-section">
        <div className="about-container">
          <h3>WELCOME TO REGISTERKARO.IN</h3>
          <h1>
            About <span>Register Karo</span>
          </h1>
          <p>
            We have been using Intelegencia as our DevOps vendor for our field
            service applications over the last couple of years and I’m extremely
            pleased with their performance, ability to execute, and willingness
            to adapt in our ever changing environment. Perry is an outstanding
            leader who is fanatical about customer satisfaction. He has built a
            solid team which has consistently delivered on projects thereby
            exceeding everyone’s expectations.{" "}
          </p>
          <p>
            I would strongly recommend their services to any organization that
            is looking for solid, reliable, and predictable outcomes.
          </p>

          <button>
            {" "}
            learn more{" "}
            <img
              src={assets.logo0}
              alt=""
              style={{
                backgroundColor: "white",
                borderRadius: "90px",
                position: "relative",
                top: "4px",
              }}
            />
          </button>
        </div>

        <img src={assets.Mainlogo} alt="Mainlogo" className="Mainlogo" />
        <img src={assets.Dots} alt="Dots" className="Dots" />
        <img
          src={assets.half_circle}
          alt="Half-circle"
          className="half-circle"
        />
      </div>

      {/* fusion Builder row */}
      <div className="fusion-builder-row">
        <h3 className="f3">WHY REGISTERKARO.IN</h3>
        <h1 className="f1">Why Choose Register Karo</h1>
        <p className="p1">
          It is with consistent services and results that build trust with the
          people and that in turn help us to serve the business better.
        </p>

        <div className="column-1">
          <div className="builder-card-1">
            <img
              id="builder-icon-img"
              src={assets.symbol1}
              style={{ position: "relative", left: "130px", top: "50px" }}
              alt="logo1"
            />
            <h3>Confidential & Safe</h3>
            <p>All your private information is safe with us</p>
          </div>

          <div className="builder-card-2">
            <img
              id="builder-icon-img"
              src={assets.symbol2}
              style={{ position: "relative", left: "130px", top: "50px" }}
              alt="logo2"
            />
            <h3>No Hidden Fee</h3>
            <p>
              Everything is put before you with no hidden charges or conditions
            </p>
          </div>
        </div>

        <div className="columm-2">
          <div className="builder-card-3">
            <img
              id="builder-icon-img"
              src={assets.symbol3}
              style={{ position: "relative", left: "130px", top: "50px" }}
              alt="logo3"
            />
            <h3>Guaranteed Satisfaction</h3>
            <p>
              We ensure that you stay 100% satisfied with our offered services
            </p>
          </div>
        </div>

        <div className="column-3">
          <div className="builder-card-4">
            <img
              id="builder-icon-img"
              src={assets.symbol4}
              style={{ position: "relative", left: "130px", top: "50px" }}
              alt="logo4"
            />
            <h3>Expert CA/CS Assistance</h3>
            <p>Prompt support from our in-house expert professionals</p>
          </div>

          <div className="builder-card-5">
            <img
              id="builder-icon-img"
              src={assets.symbol5}
              style={{ position: "relative", left: "130px", top: "50px" }}
              alt="logo5"
            />
            <h3>Confidential & Safe</h3>
            <p>All your private information is safe with us</p>
          </div>
        </div>
      </div>

      <div className="blue-bg-section">
        <div className="sm-section">
          <h1>0ur Video Introductions</h1>
          <p>
            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
            vulputate pellentesque a diam tincidunt apis dui.
          </p>
        </div>

        <div className="check">
          <div className="check1">
            <h1>
              {" "}
              <img src={assets.icon2} alt="" />
              Explore ideas together
            </h1>
            <p>
              Engage audience segments and finally create actionable insights.
              Amplify vertical integration.
            </p>
          </div>
          <div className="check2">
            <h1>
              <img src={assets.icon1} alt="" />
              Bring those ideas to life
            </h1>
            <p>
              Engage audience segments and finally create actionable insights.
              Amplify vertical integration.
            </p>
          </div>
        </div>

        <img className="group-blue" src={assets.Groupblue} alt="groupblue" />
      </div>

      {/* logo section */}
      <div className="Logo-section">
        <div className="block-header">
          <div className="text-container">
            <h1>Our Happy Clients</h1>
            <p>
              Professionally cultivate one-to-one customer service with robust
              ideas. Dynamically innovate resource-leveling customer service for
              state of the art customer service.
            </p>
          </div>
        </div>

        <img src={assets.pagination} alt="logo-section" />

        <div className="button-section">
          <button>show more</button>
          <img src={assets.arrow} alt="RightArrow" id="rightArrow" />
        </div>
      </div>

      {/* Frame 427318342 */}

      <div className="Frame-427318342">
        <div className="frame-container">
          <div>
            <p>Fill up Application Form</p>
            <img className="img1" src={assets.img1} alt="" />
          </div>
          <div>
            <p>Make Online Payment</p>
            <img className="img2" src={assets.img2} alt="icon" />
          </div>
          <div>
            <p>Executive will Process Application</p>
            <img className="img3" src={assets.img3} alt="icon" />
          </div>
          <div>
            <p>Get Confirm Mail</p>
            <img className="img4" src={assets.img4} alt="icon" />
          </div>
        </div>
      </div>

      {/* Accelerate-Digital-Transformation */}

      <div className="Act-container">
        <p className="Explore">EXPLORE OUR BLOGS</p>
        <h2>Accelerate Digital Transformation</h2>

        <div className="act-cards">
          <div className="act-card">
            <img id="card-images" src={assets.rowImg2} alt="rowImg1" />
            <p className="p2">Prabhash Mishra • 1 Jan 2023 • Today</p>
            <a href="https://www.registerkaro.in/post/the-companies-act-2013-section-138-internal-audit">
              Small business & Startup
              <img id="upArrow" src={assets.upArrow} alt="upArrow" />
            </a>
            <p className="p3">
              Like to know the secrets of transforming a 2-14 team into a 3x
              Super Bowl winning Dynasty?
            </p>

            <div className="buttons">
              <button className="btn0">Tax &audit</button>
              <button className="btn1">Managememt</button>
            </div>
          </div>

          <div className="act-card">
            <img id="card-images" src={assets.rowImg1} alt="rowImg1" />
            <p className="p2">Mahesh Kumar • 1 Jan 2023</p>
            <a href="#">
              Scale-Up Company Offer{" "}
              <img id="upArrow" src={assets.upArrow} alt="upArrow" />
            </a>
            <p className="p3">
              Mental models are simple expressions of complex processes or
              relationships.
            </p>

            <div className="buttons">
              <button className="btn2">Tax</button>
              <button className="btn3">Research</button>
              <button className="btn4">Complience</button>
            </div>
          </div>

          <div className="act-card">
            <img id="card-images" src={assets.rowImg2} alt="rowImg1" />
            <p className="p2">Rakhi Verma • 1 Jan 2023</p>
            <a href="#">
              Growing Business Package{" "}
              <img id="upArrow" src={assets.upArrow} alt="upArrow" />
            </a>
            <p className="p3">
              Introduction to Wireframing and its Principles. Learn from the
              best in the industry.
            </p>

            <div className="buttons">
              <button className="btn5">Audit</button>
              <button className="btn6">MoneyBack</button>
            </div>
          </div>

          <div className="act-card">
            <img id="card-images" src={assets.rowImg3} alt="rowImg1" />
            <p className="p2">Karan Kumar • 1 Jan 2023</p>
            <a href="">
              Scale-Up Company Offer{" "}
              <img id="upArrow" src={assets.upArrow} alt="upArrow" />
            </a>
            <p className="p3">
              Collaboration can make our teams stronger, and our individual
              designs better.
            </p>

            <div className="buttons">
              <button className="btn7">Money</button>
              <button className="btn8">Managememt</button>
            </div>
          </div>

          <div className="act-card">
            <img id="card-images" src={assets.rowImg4} alt="rowImg" />
            <p className="p2">Richa Singh • 1 Jan 2023</p>
            <a href="#">
              Scale-Up Company Offer{" "}
              <img id="upArrow" src={assets.upArrow} alt="upArrow" />
            </a>
            <p className="p3">
              JavaScript frameworks make development easy with extensive
              features and functionalities.
            </p>

            <div className="buttons">
              <button className="btn9">Tax Return</button>
              <button className="btn10">News</button>
              <button className="btn11">Audit</button>
            </div>
          </div>

          <div className="act-card">
            <img id="card-images" src={assets.rowImg5} alt="rowImg5" />{" "}
            <p className="p2">Miss Nora• 1 Jan 2023</p>
            <a href="https://www.registerkaro.in/post/the-companies-act-2013-section-138-internal-audit">
              Scale-Up Company Offer
              <img id="upArrow" src={assets.upArrow} alt="upArrow" />
            </a>
            <p className="p3">
              Starting a community doesn’t need to be complicated, but how do
              you get started?
            </p>
            <div className="buttons">
              <button className="btn12">Private Limited Company</button>
              <button className="btn13">Customer Success</button>
            </div>
          </div>

          <button className="btn14">
            show more blogs{" "}
            <img
              src={assets.rightArrow}
              style={{ position: "relative", top: "4px" }}
              alt="rightArrow"
            />
          </button>
        </div>
      </div>

      {/* Coursel section */}
      <div className="Coursel-section">
        <h1 className="first-h1">What peoples says about us </h1>
        <img className="first-img" src={assets.Arrows} alt="right" />

        <div className="coursel-cards">
          <div className="coursel-card">
            <img className="left-1" src={assets.Left_icon} alt="left-icon" />
            <img className="right-1" src={assets.Right_icon} alt="right-icon" />
            <p className="p4">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat aute irure sint amet
              occaecat cupidatat non proident ea commodo consequat aute irure
              sint amet occaecat cupidatat non proident{" "}
            </p>
            <img className="userimg" src={assets.userImg} alt="profile-img" />
            <div className="coursel">
              <h1>Chris</h1>
              <p className="p5">President and CEO, PrintReach, USA</p>
            </div>
          </div>

          <div className="coursel-card">
            <img className="left-1" src={assets.Left_icon} alt="left-icon" />
            <img className="right-1" src={assets.Right_icon} alt="right-icon" />
            <p className="p4">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat aute irure sint amet
              occaecat cupidatat non proident ea commodo consequat aute irure
              sint amet occaecat cupidatat non proident{" "}
            </p>
            <img className="userimg" src={assets.userImg} alt="profile-img" />
            <div className="coursel">
              <h1>Chris</h1>
              <p className="p5">President and CEO, PrintReach, USA</p>
            </div>
          </div>

          <div className="coursel-card">
            <img className="left-1" src={assets.Left_icon} alt="left-icon" />
            <img className="right-1" src={assets.Right_icon} alt="right-icon" />
            <p className="p4">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat aute irure sint amet
              occaecat cupidatat non proident ea commodo consequat aute irure
              sint amet occaecat cupidatat non proident{" "}
            </p>
            <img className="userimg" src={assets.userImg} alt="profile-img" />
            <div className="coursel">
              <h1>Chris</h1>
              <p className="p5">President and CEO, PrintReach, USA</p>
            </div>
          </div>
        </div>

        <img
          className="pagination2"
          src={assets.pagination2}
          alt="pagination2"
        />
      </div>

      {/* frequent Ask Question section */}
      <div className="faq-section">
        <p className="p6">FAQ</p>
        <h3>Frequent Ask Questions </h3>

        <div className="faq-heading">
          <p>Can I recover deleted files from desktop with this software?</p>
        </div>

        <div className="faq-heading">
          <p>Can I recover deleted files from desktop with this software?</p>
        </div>

        <div className="faq-heading">
          <p>Can I recover deleted files from desktop with this software?</p>
        </div>

        <div className="faq-heading">
          <p>Can I recover deleted files from desktop with this software?</p>
        </div>

        <div className="faq-heading">
          <p>Can I recover deleted files from desktop with this software?</p>
        </div>

        <button className="faq-btn">
          show more
          <img
            src={assets.rightArrow}
            style={{ position: "relative", top: "4px", left: "5px" }}
            alt="rightArrow"
          />
        </button>
      </div>

      {/* Manage your service section */}
      <div className="service-section">
        <div className="text-header-1">
          <h1>Manage Your Services by your Mobile Phone</h1>
        </div>

        <div className="text-header-2">
          <p>
            Download our app to manage and track your services. Our app enables
            you to stay in touch with our experts and aids you in tracking your
            progress.{" "}
          </p>
        </div>

        <h2>Get the App</h2>
        <div className="bottom-section">
          <img src={assets.playstore} alt="" />
          <img src={assets.googleplay} alt="" />
        </div>

        <img className="serviceimg-1" src={assets.Phone} alt="" />
        <img className="serviceimg-2" src={assets.Phone} alt="" />
      </div>

      {/* Number are important section */}

      <div className="important-section">
        <p>Why Register Karo</p>
        <h1>Some Numbers are important</h1>
        <img src={assets.numbers} alt="" />
      </div>

      {/* Search-section */}
      <div className="search-section">
        <p>1% OF THE INDUSTRY</p>
        <h2>Welcome to your new digital reality. Now.</h2>

        <div className="input-section">
          <input type="text" placeholder="Enter Your Email" />
          <span>Submit</span>
        </div>

        <div className="check-section">
          <img src={assets.checkbox} alt="" />
          <h1>Instant Result</h1>

          <img src={assets.checkbox} alt="" />
          <h1>User-friendly interface</h1>

          <img src={assets.checkbox} alt="" />
          <h1>Personalized customization</h1>
        </div>
      </div>

      {/* social platform */}

      <div className="social-platform">
        <img src={assets.Logos2} alt="" />
      </div>
    </>
  );
};

export default Header;
