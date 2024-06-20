import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/picture1.png";
import projImg2 from "../assets/img/picture2.png";
import projImg3 from "../assets/img/picture3.png";
import projImg4 from "../assets/img/picture4.png"
import projImg5 from "../assets/img/picture5.png";
import projImg6 from "../assets/img/picture6.png";
import projImg7 from "../assets/img/picture7.png";
import projImg8 from "../assets/img/picture8.png";
import projImg9 from "../assets/img/picture9.png";
import projImg10 from "../assets/img/picture10.png";
import projImg11 from "../assets/img/picture11.png";
import projImg12 from "../assets/img/picture12.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const workExperience = [
    {
      title: "Strategic Real Estate Intern -- Project Destined",
      description: "Skills",
      imgUrl: projImg1,
      points: ["Investment Metrics Analysis", "Mergers and Acquisitions", "Property Valuation Techniques"]
    },
    {
      title: "Google-AAF - FinTech Intern",
      description: "Skills",
      imgUrl: projImg2,
      points: ["Financial Analysis and Modeling", "Policy Analysis and Recommendations", "Data-driven Decision Making"]
    },
    {
      title: "Weil Cornell Medicine - Research Intern",
      description: "Skills",
      imgUrl: projImg3,
      points: ["Advanced Excel Modeling", "Data Analysis using Python", "Targeted Drug Delivery"]
    },
    {
      title: "Hunter College Economics Teaching Assistant",
      description: "Skills",
      imgUrl: projImg4,
      points: ["Data Interpretation", "Quantitative Research", "Financial Modeling"]
    },
    {
      title: "Princeton University -- Stem Cell Research Assistant",
      description: "Skills",
      imgUrl: projImg5,
      points: ["Data Driven Analysis", "Communication", "Collaboration"]
    },
    {
      title: "Stanford Research Fellow",
      description: "Skills",
      imgUrl: projImg6,
      points: ["Communication", "Research", "Presentation Skills"]
    }
  ];

  const academicProjects = [
    {
      title: "Google API Developer Contest",
      description: "Project Skills",
      imgUrl: projImg7,
      points: ["Flutter", "IOS Development", "Product Management"]
    },
    {
      title: "The Pheonix Initiative -- NGO Project",
      description: "Project Skills",
      imgUrl: projImg8,
      points: ["Budgeting and Forecasting", "Fund Allocation", "Financial Management"]
    },
    {
      title: "Startup Project -- AgriTech",
      description: "Project Skills",
      imgUrl: projImg9,
      points: ["Entrepreneurial Finance", "Cash Flow Management", "Financial Risk Assessment"]
    }
  ];

  const personalProjects = [
    {
      title: "Want to Scale my Youtube Channel",
      description: "Project skills",
      imgUrl: projImg10,
      points: ["Digital Marketing", "Content Monetization", "Revenue Optimization"]
    },
    {
      title: "Want to get a 1 million views on my Song",
      description: "Project skills",
      imgUrl: projImg11,
      points: ["Audience Engagement Analysis", "Content Creation Strategy", "Monetization and Revenue Generation"]
    },
    {
      title: "Want to get 10k followers on Instagram",
      description: "Project skills",
      imgUrl: projImg12,
      points: ["Social Media Marketing", "Audience Engagement and Analytics", "Branding and Digital Presence Management"]
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>My Life Things!!</h2>
                <p>Here are some of my experiences and projects I am on!!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="work">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="work">Work Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="academic">Academic Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="personal">Personal Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="work">
                      <Row>
                        {
                          workExperience.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="academic">
                      <Row>
                        {
                          academicProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="personal">
                      <Row>
                        {
                          personalProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background Decoration" />
    </section>
  )
}
