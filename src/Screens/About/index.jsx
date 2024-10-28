import React from 'react';
import './styles.scss';

function About() {
  return (
    <div className='about-screen'>
      <div className='about-screen-wrapper'>
        <div className='title'>About me</div>
        <div>
          <div className='about-me'>
            <div>
              Hello, I’m <strong className='highlight'>Sharan</strong>, a Senior Software Engineer at <strong className='highlight'>COFFEEWEB TECHNOLOGIES PVT. LTD.</strong>, with over <strong className='highlight'>3 years</strong> of experience in software development. I specialize in designing and developing scalable web applications, leveraging my expertise in both frontend and backend technologies.
            </div>
            <div style={{ marginTop: '20px' }}>
              Proficient in <strong className='highlight'>MongoDB, Express.js, React.js, and Node.js</strong>, I focus on building seamless, user-centric applications with a strong emphasis on <strong className='highlight'>RESTful API design</strong> and <strong className='highlight'>database architecture</strong>. I am passionate about creating innovative solutions that enhance user experiences and thrive in collaborative, cross-functional team environments.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
