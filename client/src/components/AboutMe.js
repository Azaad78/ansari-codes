import React from "react";
import AboutMePhoto from "../media/img/aboutme.jpg";
import AWSCertified from "../media/img/aws-certified-logo_color-horz_180x30.jpg";
import CloudPractitioner from "../media/img/cloud-practitioner-tag_180x16.jpg";
import SysOps from "../media/img/sysops-administrator-associate-tag_180x16.jpg";
import Architect from "../media/img/solutions-architect-associate-tag_180x16.jpg";
import YouTube from "react-youtube";

const AboutMe = () => (
  <div>
    <div className="ui container">
      <div className="ui stackable grid">
        <div className="ui card four wide column">
          <div className="ui image">
            <img src={AboutMePhoto} alt="Hire me Imran Ansari" />
          </div>
          <div className="content">
            <div className="header">
              Imran Ansari
              <a href="www.linkedin.com/in/imran-ansari-85bab5179">
                <i className="right floated linkedin icon" />
              </a>
              <a href="https://m.me/iam.azaad">
                <i className="right floated facebook messenger icon" />
              </a>
              <a href="tel:+66644697879">
                <i className="right floated phone icon" />
              </a>
            </div>
            <div className="meta">
              <span className="date">Bangkok, Thailand</span>
            </div>
            <div className="justified container">
              DevOps Engineer, C#/Ruby/Python Programmer, Foodie, Motorcyclist and Gamer
              in one. Passionate about Computers and Technology. Dependable like a rock.
            
            </div>
              
          </div>
          <img src={AWSCertified} alt="AWS Certified" />
              <img src={SysOps} alt="SysOps Administrator Associate" />
              <img src={Architect} alt="Solutions Architect Associate" />
              <img src={CloudPractitioner} alt="Cloud Practitioner" />
        </div>
        <div className="twelve wide column">
          <h3 className="ui centered">
            Check out my ride in Bangkok!
          </h3>
          <YouTube
            className="ui stackable container"
            videoId="OYr3P6Vq8yU"
            opts={{
              height: "400"
            }}
          />
        </div>
      </div>
    </div>
  </div>
);

export default AboutMe;
