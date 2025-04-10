'use client';

import React from 'react';
import Nav from './components/Nav';
import Profile from './components/Profile';
import SailingCTA from './components/SailingCTA';
import Cursor from './components/Cursor';
import PortfolioItem from './components/PortfolioItem';

export default function HomePage(): React.JSX.Element {
  return (
    <div className="t-body">
      <Cursor />
      
      <div id="allrecords" className="t-records">
        <div className="main-header">
          <Nav />
          <Profile />
        </div>
        
        <section id="experience" className="portfolio-section">
          <h2 className="portfolio-heading">Experience</h2>
          <p className="experience-description">
            I have been working as a designer for over 7 years. For the last 3 and a half years, I've been working
            in American startups. I'm responsible for all design, qualitative research, handover to development,
            and its support. I have experience with B2B products and have worked extensively with admin panels.
          </p>
          
          <div className="experience-timeline">
            <div className="experience-item">
              <span className="experience-date">September, 2023 — c.d.</span>
              <div className="experience-role">Senior UI/UX и Product Designer в ozma.io / San Francisco, US</div>
            </div>
            <div className="experience-item">
              <span className="experience-date">November, 2021 — August, 2023</span>
              <div className="experience-role">Middle + UI/UX и Product Designer в XNET / Irvine, California, US</div>
            </div>
            <div className="experience-item">
              <span className="experience-date">July, 2021 — July, 2022</span>
              <div className="experience-role">UI/UX и Product Designer в Nazaret Capital / Moscow, Russia</div>
            </div>
            <div className="experience-item">
              <span className="experience-date">March, 2020 — July, 2021</span>
              <div className="experience-role">UI/UX Designer в WowLab X Argument / Moscow, Russia</div>
            </div>
            <div className="experience-item">
              <span className="experience-date">October, 2018 — February, 2020</span>
              <div className="experience-role">UI/UX Designer / Freelance / Remote</div>
            </div>
          </div>
          
          <div className="portfolio-items">
            <PortfolioItem
              title="Settler Pro"
              description="A platform that connects clients, designers, agents, and workers, ensuring easy and effective communication."
              imageSrc="/main/Frame_1321315263.png"
              tags={["European market", "Admin panel", "AI"]}
              date="August, 2024 — c.d."
              problem="Workers found it difficult to master the interface, no one was creating tasks, and clients did not understand the stage of their renovation."
              solution="We added an AI chat that handles most of the computer work. As a result, creating project stages and estimating budgets takes in just minutes."
              resultDescription="Clients became less stressed, since the progress of the renovation became visible every day."
            />
            
            <PortfolioItem
              title="ozma.io"
              description="A corporate CRM and ERP platform, less expensive than Salesforce and Microsoft, fully customizable by anyone in just a few hours."
              imageSrc="/main/Frame_1321315261.png"
              tags={["European market", "B2B product", "AI"]}
              date="September, 2023 — c.d."
              problem="Users complain about the outdated interface."
              solution="Completely redesigned the product and revamped the main workflows."
            />
            
            <PortfolioItem
              title="Settler"
              description="An app offering professional repair services in the UAE with clear cost estimates, real-time progress tracking, 24/7 camera access, and many other features."
              imageSrc="/main/Group_1321315052.png"
              tags={["Arab market", "Mobile", "AI"]}
              date="February, 2024 — c.d."
              problem="Users do not understand how to add a project and how many projects they need in total. This leads to very low conversion rates."
              solution="I proposed a new flow and design for an AI-powered chatbot, which allows users to estimate project timelines and costs. As a result, the conversion rate for project creation increased by 17%."
            />
          </div>
        </section>
        
        <section id="education" className="portfolio-section">
          <h2 className="portfolio-heading">Education</h2>
          <div className="education-timeline">
            <div className="education-item">
              <span className="education-date">October, 2020 — July, 2021</span>
              <div className="education-detail">Yandex.Practicum course - "Product Designer"</div>
            </div>
            <div className="education-item">
              <span className="education-date">August, 2017 — July, 2021</span>
              <div className="education-detail">RSUH, Faculty of Art History, Graphic Design</div>
            </div>
          </div>
        </section>
        
        <section id="landing-pages" className="portfolio-section">
          <h2 className="portfolio-heading">Landing pages</h2>
          <p className="landing-pages-description">
            Occasionally, I create landing pages, mainly for large educational platforms. Some
            of them are listed below 👇
          </p>
          <div className="portfolio-items">
            <div className="landing-item">
              <span className="landing-date">May, 2024</span>
              <div className="landing-title">Soft Skills Lab</div>
            </div>
            {/* Add more landing pages as needed */}
          </div>
        </section>
        
        <SailingCTA />
      </div>
    </div>
  );
}
