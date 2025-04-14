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
      {/* Overlay placeholder */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        padding: '2rem',
        textAlign: 'center',
        fontSize: '1.5rem',
        fontFamily: "'Inter', Arial, sans-serif"
      }}>
        <h1 style={{ 
          marginBottom: '2rem', 
          fontSize: '70px', 
          fontWeight: 600,
          letterSpacing: '-0.5px',
          color: '#000',
          fontFamily: "'Syne', Arial, sans-serif",
          lineHeight: 1
        }}>
          Website Under Construction
        </h1>
        <p style={{ 
          maxWidth: '455px', 
          lineHeight: 1.55, 
          marginBottom: '2rem',
          color: '#000',
          opacity: 0.5,
          fontSize: '13px',
          fontFamily: "'Inter', Arial, sans-serif"
        }}>
          Thank you for your interest! This website is currently being developed.
        </p>
        <p style={{ 
          maxWidth: '455px', 
          lineHeight: 1.55, 
          marginBottom: '3rem',
          color: '#000',
          opacity: 0.5,
          fontSize: '13px',
          fontFamily: "'Inter', Arial, sans-serif"
        }}>
          You can view all my work on my current website at <a href="https://podobrazhnykhmaria.ru" style={{ color: '#3737FF', textDecoration: 'underline' }}>podobrazhnykhmaria.ru</a>
        </p>
        
        <div style={{
          display: 'flex',
          gap: '20px',
          marginBottom: '2.5rem'
        }}>
          <a href="https://podobrazhnykhmaria.ru" style={{
            display: 'inline-block',
            padding: '20px 40px',
            backgroundColor: '#3737FF',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 600,
            fontSize: '16px',
            transition: 'background-color 0.3s',
            fontFamily: "'Syne', Arial, sans-serif"
          }}>
            Old site
          </a>
          
          <a href="/sailing" style={{
            display: 'inline-block',
            padding: '20px 40px',
            backgroundColor: '#fff',
            color: '#3737FF',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 600,
            fontSize: '16px',
            transition: 'all 0.3s',
            border: '2px solid #3737FF',
            fontFamily: "'Syne', Arial, sans-serif"
          }}>
            Sailing
          </a>
        </div>
      </div>
      
      {/* Скрытый контент с демонстрацией курсора */}
      <div style={{ display: 'none' }}>
        <div className="container" style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          padding: '50px 20px',
          minHeight: '100vh' 
        }}>
          <h1>Демонстрация кастомного курсора</h1>
          
          <div style={{ margin: '40px 0' }}>
            <h2>Стандартный курсор</h2>
            <p>
              Перемещайте курсор по экрану, чтобы увидеть стандартный вид кастомного курсора.
              Здесь он выглядит как небольшая белая точка с эффектом смешивания.
            </p>
          </div>
          
          <div style={{ margin: '40px 0' }}>
            <h2>Курсор Play/Pause</h2>
            <div style={{ display: 'flex', gap: '20px' }}>
              <button 
                data-cursor="play" 
                style={{ 
                  padding: '15px 30px', 
                  background: '#f0f0f0', 
                  border: 'none', 
                  borderRadius: '4px',
                  fontSize: '16px'
                }}
              >
                Наведите для Play
              </button>
              
              <button 
                data-cursor="pause" 
                style={{ 
                  padding: '15px 30px', 
                  background: '#f0f0f0', 
                  border: 'none', 
                  borderRadius: '4px',
                  fontSize: '16px'
                }}
              >
                Наведите для Pause
              </button>
            </div>
          </div>
          
          <div style={{ margin: '40px 0' }}>
            <h2>Курсор Return</h2>
            <a 
              href="#" 
              data-cursor="return" 
              style={{ 
                padding: '15px 30px', 
                background: '#f0f0f0', 
                border: 'none', 
                borderRadius: '4px',
                fontSize: '16px',
                display: 'inline-block',
                textDecoration: 'none',
                color: '#000'
              }}
              onClick={(e) => e.preventDefault()}
            >
              Наведите для Return
            </a>
          </div>
          
          <div style={{ margin: '40px 0' }}>
            <h2>Скрытый курсор</h2>
            <div 
              data-cursor="none" 
              style={{ 
                padding: '30px', 
                background: '#f0f0f0', 
                borderRadius: '4px',
                textAlign: 'center'
              }}
            >
              Здесь курсор принимает своё стандартное состояние
            </div>
          </div>
          
          <div style={{ margin: '40px 0' }}>
            <h2>Программное управление</h2>
            <p>
              Вы также можете программно менять курсор на элементах:
            </p>
            <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
              {['play', 'pause', 'return', 'none', 'default'].map((mode) => (
                <button 
                  key={mode}
                  style={{ 
                    padding: '10px 15px', 
                    background: '#f0f0f0', 
                    border: 'none', 
                    borderRadius: '4px' 
                  }}
                  onClick={() => {
                    // Добавляем атрибут к последнему элементу демонстрации
                    const demo = document.getElementById('program-demo');
                    if (demo && window.main && window.main.cursor) {
                      window.main.cursor.set(mode, demo);
                    }
                  }}
                >
                  Установить {mode}
                </button>
              ))}
            </div>
            <div 
              id="program-demo"
              style={{ 
                marginTop: '20px',
                padding: '40px', 
                background: '#f0f0f0', 
                borderRadius: '4px',
                textAlign: 'center',
                fontSize: '18px'
              }}
            >
              Навести курсор и нажать кнопку выше
            </div>
          </div>
          
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
      </div>
    </div>
  );
}
