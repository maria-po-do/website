'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function SailingPage(): React.JSX.Element {
  useEffect(() => {
    // Load Webflow scripts
    const scripts: string[] = [
      '/sailing/jquery-3.5.1.min.dc5e7f18c8.js',
      '/sailing/webflow.schunk.4a394eb5af8156f2.js',
      '/sailing/webflow.fa131e2e.722efe03a47a343a.js',
      '/sailing/gsap.min.js'
    ];
    
    const loadedScripts: HTMLScriptElement[] = [];
    
    scripts.forEach(src => {
      const script = document.createElement('script');
      script.src = src;
      script.async = false;
      document.body.appendChild(script);
      loadedScripts.push(script);
    });
    
    // Initialize cursor effect
    const cursorScript = document.createElement('script');
    cursorScript.textContent = `
      document.addEventListener('DOMContentLoaded', function() {
        const cursorElement = document.createElement('div');
        cursorElement.classList.add('cursor');
        document.body.appendChild(cursorElement);

        if (typeof gsap !== 'undefined') {
          gsap.set(".cursor", { xPercent: -50, yPercent: -50 });
          let xTo = gsap.quickTo(".cursor", "x", { duration: 0.6, ease: "power3" });
          let yTo = gsap.quickTo(".cursor", "y", { duration: 0.6, ease: "power3" });
          window.addEventListener("mousemove", e => {
            xTo(e.clientX);
            yTo(e.clientY);
          });
          
          // Cursor animations on hover
          document.querySelectorAll('.nav-link-2, .paragraph2').forEach(item => {
            item.addEventListener('mouseenter', () => {
              gsap.to(".cursor", { scale: 3, opacity: 0.1, duration: 0.2 });
            });
            item.addEventListener('mouseleave', () => {
              gsap.to(".cursor", { scale: 1, opacity: 1, duration: 0.2 });
            });
          });
        }
      });
    `;
    document.body.appendChild(cursorScript);
    
    // Add custom styles
    const styleScript = document.createElement('style');
    styleScript.textContent = `
      .image-g {
        transition: transform 0.3s ease;
      }
      
      .image-g:hover {
        transform: scale(1.07);
      }
      
      body, a, * {
        cursor: default !important;
      }
    `;
    document.head.appendChild(styleScript);
    
    return () => {
      // Clean up scripts when component unmounts
      loadedScripts.forEach(script => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      });
      if (document.body.contains(cursorScript)) {
        document.body.removeChild(cursorScript);
      }
      if (document.head.contains(styleScript)) {
        document.head.removeChild(styleScript);
      }
    };
  }, []);
  
  return (
    <div className="body">
      <div className="cursor"></div>
      <section className="section-2">
        <div className="w-layout-blockcontainer container-4 w-container">
          <div className="navbar-3 w-nav">
            <Link href="/" className="nav-link-3 w-nav-link">Back to Portfolio</Link>
            <a href="#" className="nav-link-3 w-nav-link">Sailing with Maria</a>
            <nav role="navigation" className="nav-menu w-nav-menu">
              <a href="#alltrips" className="nav-link-2 w-nav-link">All Trips</a>
              <a href="#whatincluded" className="nav-link-2 w-nav-link">What's included</a>
              <a href="#photo" className="nav-link-2 w-nav-link">Photo</a>
              <div className="div-block">
                <a href="https://t.me/mary_po" target="_blank" className="button w-button">I want</a>
              </div>
            </nav>
          </div>
          
          <div className="_w-1">
            <div className="div-block-35">
              <img src="/sailing/677c4eb08de6309f9d60ff46_Group 59459.svg" loading="lazy" alt="" className="image-2" />
            </div>
            <div className="div-block-34">
              <img src="/sailing/677c4d945de429e588d0f33b_Group 59437.svg" loading="lazy" alt="" className="image" />
            </div>
            <h1 className="heading">Let's go sailing<br/>with perfect company</h1>
            <p className="paragraph">It will be really fun, <br/>I promise</p>
          </div>
          
          <div className="sosial">
            <p className="paragraph2"><a href="https://wa.me/79296778708" target="_blank" className="link-2">whatsapp</a></p>
            <p className="paragraph2"><a href="https://t.me/mary_po" target="_blank" className="paragraph2">telegram</a></p>
            <p className="paragraph2"><a href="https://www.instagram.com/mariapodobrazhnykh/" target="_blank" className="link">instagram</a></p>
          </div>
          
          <div className="_w-2">
            <img src="/sailing/67c5bb82fb3a0f5a23190554_IMG_0617.png" loading="lazy" alt="" className="image-g" />
            <img src="/sailing/67c5bb81180715f131e40b08_Screenshot 2024-12-23 at 22.37.18 1.png" loading="lazy" alt="" className="image-g" />
            <img src="/sailing/67c5bb82ce4367402f095d40_IMG_8107.png" loading="lazy" alt="" className="image-g" />
            <img src="/sailing/67c5bb81fb544bd2ef75c2c7_IMG_9192.png" loading="lazy" alt="" className="image-g" />
            <img src="/sailing/67c5bb81c2030f5a119a85e6_IMG_7168.png" loading="lazy" alt="" className="image-g" />
            <img src="/sailing/67c5bb821770996671c96e9f_IMG_7663.png" loading="lazy" alt="" className="image-g" />
          </div>
          
          <section id="alltrips" className="alltrips">
            <div className="_w-3">
              <div className="card">
                <div>
                  <div className="name">
                    <div className="div-block-18">
                      <div className="div-block-10">
                        <div className="div-block-9">
                          <h1 className="name-of-country">Turkey</h1>
                          <div className="data">, May 3-10</div>
                        </div>
                        <div>
                          <a href="#" className="price w-button">1600€</a>
                        </div>
                      </div>
                    </div>
                    <div className="div-block-22"></div>
                    <img src="/sailing/67c5b98f08592bd98f580204_image_tu.png" loading="lazy" alt="" className="image-5" />
                  </div>
                </div>
                <div className="div-block-13">
                  <div className="div-block-12">
                    <div className="div-block-11">
                      <div className="yel">#yacht</div>
                      <div className="green">#20yachts</div>
                      <div className="pink">#sailing races</div>
                      <div className="yel">#the Lycian Way</div>
                      <div className="pink">#Parties</div>
                      <div className="viol">#paraglider</div>
                      <div className="green">#beautiful marinas</div>
                    </div>
                    <a href="https://t.me/mary_po" target="_blank" className="button w-button">Write to Maria</a>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <div>
                  <div className="name">
                    <div className="div-block-17">
                      <div className="div-block-10">
                        <div className="div-block-9">
                          <h1 className="name-of-country">Italy</h1>
                          <div className="data">, June 21-28</div>
                        </div>
                        <div>
                          <a href="#" className="price w-button">1700€</a>
                        </div>
                      </div>
                    </div>
                    <div className="div-block-22"></div>
                    <img src="/sailing/67c5b98f96d6c8fec9cc166e_image_italy.png" loading="lazy" alt="" className="image-5" />
                  </div>
                </div>
                <div className="div-block-13">
                  <div className="div-block-12">
                    <div className="div-block-11">
                      <div className="yel">#yacht</div>
                      <div className="green">#2yachts</div>
                      <div className="pink">#UNESCO heritage</div>
                      <div className="yel">#Chill</div>
                      <div className="blue">#pinterest yachting</div>
                      <div className="pink">#volcano trekking</div>
                      <div className="viol">#real Dolce Vita</div>
                    </div>
                    <a href="https://t.me/mary_po" target="_blank" className="button w-button">Write to Maria</a>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <div>
                  <div className="name">
                    <div>
                      <div>
                        <div className="div-block-10">
                          <div className="div-block-9">
                            <h1 className="name-of-country">Croatia</h1>
                            <div className="data">, I don't know </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="div-block-22"></div>
                    <img src="/sailing/67c5b990057c1237d1f370a3_image_co.png" loading="lazy" alt="" className="image-5" />
                  </div>
                </div>
                <div className="div-block-13">
                  <div className="div-block-12">
                    <div className="div-block-11">
                      <div className="blue">#catamaran</div>
                      <div className="green">#3yachts</div>
                      <div className="pink">#beautiful beaches</div>
                      <div className="yel">#Chill</div>
                      <div className="pink">#Parties</div>
                      <div className="green">#beautiful marinas</div>
                    </div>
                    <a href="https://t.me/mary_po" target="_blank" className="button w-button">Write to Maria</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section id="whatincluded" className="what-s-included">
            <div className="_w-4">
              <div className="what-s-included">
                <h1 className="heading"><span className="text-span-5">What's included?</span></h1>
                <img src="/sailing/67a393f617c55b8d6112393d_Group 59518.png" loading="lazy" width="38" alt="" className="image-6" />
              </div>
              <div className="div-block-16">
                <div className="div-block-14">
                  <div className="div-block-15">
                    <div className="_w-4-text-l">Space in a double cabin</div>
                    <div className="_w-4-text-r">You can write to me and I will send you a photo of what a cabin on a yacht looks like</div>
                  </div>
                </div>
                <div className="div-block-14">
                  <div className="div-block-15">
                    <div className="_w-4-text-l">All service stuff </div>
                    <div className="_w-4-text-r">Cleaning, fuel, <span className="text-span">#rental of SUP or kayak</span>, payment for parking along the entire route</div>
                  </div>
                </div>
                <div className="div-block-14">
                  <div className="div-block-15">
                    <div className="_w-4-text-l">1000€ for food purchases</div>
                    <div className="_w-4-text-r">We cook from these products on the yacht, usually breakfasts and lunches</div>
                  </div>
                </div>
                <div className="div-block-14">
                  <div className="div-block-15">
                    <div className="_w-4-text-l">Route that can be changed</div>
                    <div className="_w-4-text-r">A <span className="text-span-3">#well-thought-out route</span> to see everything &nbsp;on the water and on the shore</div>
                  </div>
                </div>
              </div>
              <a href="https://t.me/mary_po" target="_blank" className="button-big w-button">i want</a>
            </div>
          </section>
          
          <div className="div-block-33">
            <img src="/sailing/67c5b99011003646138391ba_image_m1.png" loading="lazy" alt="" className="image-29" />
            <img src="/sailing/67c5b98f96d6c8fec9cc166b_image_m2.png" loading="lazy" alt="" className="image-30" />
            <img src="/sailing/67c5b990ee54e5481cbc3767_image_m3.png" loading="lazy" alt="" className="image-31" />
          </div>
          
          <div className="text-block-3">This is me somewhere near a sunken <br/> ship in Italy</div>
          <div className="text-block-5">On a yacht in the <br/>port of Nice <br/>in France</div>
          <div className="text-block-4">This is us in Turkey <br/>in September</div>
          
          <div className="div-block-25">
            <img src="/sailing/67c19dbc1a447cab52d4c878_IMG_7244.png" loading="lazy" alt="" className="image-8" />
            <div className="div-block-27">
              <img src="/sailing/67bddcb5a0174e7ab8eabc05_Screenshot 2024-12-30 at 14.36.33 2.png" loading="lazy" alt="" className="image-9" />
            </div>
            <div className="div-block-26">
              <img src="/sailing/67bde679e51e67ab28d332b5_Group 59522.png" loading="lazy" alt="" className="image-13" />
            </div>
            <div className="div-block-31">
              <img src="/sailing/67bdef67a3b106c5a36f1c79_Screenshot 2024-12-30 at 14.36.18 4.png" loading="lazy" alt="" className="image-18" />
            </div>
            <div className="div-block-28">
              <img src="/sailing/67bdef67cb38f567c1ec8d2e_IMG_7827.png" loading="lazy" alt="" className="image-16" />
            </div>
            <img src="/sailing/67bdef68cb38f567c1ec8d32_Group 59524.png" loading="lazy" alt="" className="image-17" />
            <img src="/sailing/67c184db069849f35f3cd8aa_Mask group.png" loading="lazy" alt="" className="image-19" />
            <img src="/sailing/67c186620e0af1b1ee1f3ecf_IMG_7413.png" loading="lazy" alt="" className="image-22" />
            <img src="/sailing/67c18662d47a7a1a56a9609b_Mask group.png" loading="lazy" alt="" className="image-24" />
            <img src="/sailing/67c184dbd2d604bee94a2720_IMG_2646.png" loading="lazy" alt="" className="image-26" />
            <img src="/sailing/67c184db4304876f5331fd32_IMG_4296.png" loading="lazy" alt="" className="image-27" />
            <img src="/sailing/67c186629422157fe89c6fff_Group 59525.png" loading="lazy" alt="" className="image-25" />
            <img src="/sailing/67c186620e0af1b1ee1f3eaa_IMG_6372.png" loading="lazy" alt="" className="image-23" />
            <img src="/sailing/67bde6790792043317cdf561_Group 59521.png" loading="lazy" alt="" className="image-12" />
            <div className="div-block-29">
              <img src="/sailing/67bddce1b94f156615389af8_Mask group.png" loading="lazy" alt="" className="image-10" />
            </div>
            <div className="div-block-30">
              <img src="/sailing/67bddcf1687ef86c98ebe00e_IMG_1799.png" loading="lazy" alt="" className="image-11" />
            </div>
          </div>
          
          <section id="photo" className="photo">
            <div className="div-block-32">
              <img src="/sailing/67c5b9f19ccb7aa0b649cf83_image1.png" loading="lazy" alt="" />
              <img src="/sailing/67c5b99027d98fa3c39457e4_image22.png" loading="lazy" alt="" className="image-28" />
            </div>
          </section>
          
          <div className="_w-6">
            <div className="_w-5-text">It's absolutely true.</div>
            <div className="text-block">People say that yachting helps you completely <span className="text-span-2">1</span> reboot. Let's go make great friends and have a million impressions <span className="text-span-4">1</span>.</div>
            <a href="https://t.me/mary_po" target="_blank" className="button-3 w-button">Sail with me &lt;3</a>
          </div>
          
          <div className="_w-8">
            <div className="text-block-2">2025 © Mariia Podobrazhnykh. All rights reserved.</div>
            <div><a href="https://www.instagram.com/mariapodobrazhnykh/" target="_blank" className="link-3">Instagram</a></div>
          </div>
        </div>
      </section>
    </div>
  );
} 