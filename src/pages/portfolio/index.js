import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import { dataportfolio } from "../../content_option";

export const Portfolio = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
    setTheme(currentTheme);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "data-theme") {
          const updatedTheme = document.documentElement.getAttribute("data-theme") || "dark";
          setTheme(updatedTheme);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const getHeadingColor = () => {
    return theme === "dark" ? "#f8fafc" : "#0f172a";
  };

  return (
    <section id="portfolio">
      <Container>
        <h2 className="portfolio-heading" style={{ color: getHeadingColor() }}>🚀 Projects I’ve Built</h2>
        <Row className="g-4">
          {dataportfolio.map((data, i) => (
            <Col key={i} md={6} lg={4}>
              <div
                className="custom-card uniform-card card-hover pop-out"
                style={{
                  background:
                    theme === "dark"
                      ? data.bgColorDarkCard
                        ? data.bgColorDarkCard
                        : data.bgColorDark
                          ? `linear-gradient(145deg, ${data.bgColorDark}, #0f172a)`
                          : undefined
                      : data.bgColorLightCard
                        ? data.bgColorLightCard
                        : data.bgColorLight
                          ? `linear-gradient(145deg, ${data.bgColorLight}, #f9fafb)`
                          : undefined
                }}
              >
                <div className="card-content">
                  <h3 className="project-title" style={{ fontWeight: 700, fontSize: "1.25rem" }}>{data.title}</h3>
                  <p className="project-desc" style={{ fontWeight: 600 }}>{data.description}</p>
                  <div className="tags">
                    {data.tags?.map((tag, index) => (
                      <span key={index} className="tag">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="links">
                  {data.link && (
                    <a
                      href={data.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn-github">GitHub</button>
                    </a>
                  )}
                  {data.live && (
                    <a
                      href={data.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn-live">Live</button>
                    </a>
                  )}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
