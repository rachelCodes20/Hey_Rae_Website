import React from 'react';
import { 
VerticalTimeline, 
VerticalTimelineElement }
from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School'; 
import WorkIcon from '@mui/icons-material/Work'; 

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2007"
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 calssName="vertical-timeline-element-title">SUNY Binghamton</h3>
          <h4>New York</h4>
          <p>Bachelor of Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016"
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 calssName="vertical-timeline-element-title">
            Long Island University
          </h3>
          <h4>New York</h4>
          <p>Master of Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022"
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <a href="https://www.codesmith.io/">
            <h3 calssName="vertical-timeline-element-title">Codesmith</h3>
          </a>
          <h4>Remote</h4>
          <p>Fullstack Software Engineering Immersive</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017"
          iconStyle={{ background: '#A020F0', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 calssName="vertical-timeline-element-title">
            Executive Assistant/Development & Marketing Manager - After-School
            All-Stars
          </h3>
          <h4>New York</h4>
          <p>
            Held dual responsibilities as an assistant for 3 Executives and DMM
            duties including website updates distribution of monthly newsletter
            via PHP scripting software and CSS as well as management of
            fundraising platforms.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
