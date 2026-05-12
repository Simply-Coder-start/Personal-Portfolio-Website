import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My education <span>&</span>
          <br /> background
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary (X) — WBBSE</h4>
                <h5>Chandrakona Road Saradamoyee High School</h5>
              </div>
              <h3>2016–2020</h3>
            </div>
            <p>
              Completed secondary education with a CGPA of 7.6/10 under the
              West Bengal Board of Secondary Education (WBBSE).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary (XII) — WBCHSE</h4>
                <h5>Chandakona Road Saradamoyee High School</h5>
              </div>
              <h3>2021–2023</h3>
            </div>
            <p>
              Completed higher secondary education with a CGPA of 8.2/10 under
              the West Bengal Council of Higher Secondary Education (WBCHSE).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech — AI &amp; Machine Learning</h4>
                <h5>Aditya University, Surampalem</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently pursuing B.Tech in Artificial Intelligence &amp; Machine
              Learning at Aditya University with a CGPA of 7.8/10 (2024–present),
              building intelligent, scalable AI-driven applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
