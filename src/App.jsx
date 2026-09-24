import { useEffect, useState } from 'react'
import './App.css'

const services = [
  { id: '01', tag: 'WEB', title: 'Portfolio Website', desc: 'A sharp, story-led digital home designed to make your work impossible to overlook.', price: 'From ₱18k', tone: 'blue', icon: '↗' },
  { id: '02', tag: 'SYSTEMS', title: 'Custom Web Module', desc: 'Purpose-built dashboards, booking systems, portals, and tools for the way you work.', price: 'From ₱35k', tone: 'violet', icon: '⌘' },
  { id: '03', tag: 'LEARNING', title: 'Training Platform', desc: 'Engaging learning experiences with courses, progress tracking, and easy content control.', price: 'From ₱55k', tone: 'cyan', icon: '▶' },
  { id: '04', tag: 'SOCIAL', title: 'Social Media Management', desc: 'Strategy, content, publishing, and reporting that keeps your brand active and relevant.', price: 'From ₱12k/mo', tone: 'pink', icon: '✦' },
  { id: '05', tag: 'DESIGN', title: 'Brand & Creative Design', desc: 'Brand systems, campaign graphics, pitch decks, and visual assets made to connect.', price: 'From ₱8k', tone: 'orange', icon: '◒' },
  { id: '06', tag: 'COMMERCE', title: 'E-commerce Website', desc: 'A fast, conversion-focused shop with frictionless browsing and checkout experiences.', price: 'From ₱45k', tone: 'green', icon: '◇' },
]

const filters = ['ALL', 'WEB', 'SYSTEMS', 'LEARNING', 'SOCIAL', 'DESIGN', 'COMMERCE']

function App() {
  const [filter, setFilter] = useState('ALL')
  const [menuOpen, setMenuOpen] = useState(false)
  const [selected, setSelected] = useState(null)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selected])

  const visible = filter === 'ALL' ? services : services.filter((s) => s.tag === filter)
  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false) }

  return (
    <main>
      <header className="nav-shell">
        <nav>
          <button className="brand" onClick={() => scrollTo('top')} aria-label="Back to top">
            <img src="/Hanci Logo.jpg" alt="Hanci Creatives" /><span>HANCI<br/>CREATIVES</span>
          </button>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>MENU <span>{menuOpen ? '×' : '＋'}</span></button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <button onClick={() => scrollTo('services')}>Services</button>
            <button onClick={() => scrollTo('process')}>Process</button>
            <button onClick={() => scrollTo('about')}>About</button>
          </div>
          <button className="nav-cta" onClick={() => scrollTo('contact')}>Start a project <span>↗</span></button>
        </nav>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><i></i> DIGITAL STUDIO · PHILIPPINES</div>
            <h1>We create<br/><span>bold digital</span><br/>experiences.</h1>
            <p>Web, design, and creative systems built to make ambitious brands move forward.</p>
            <div className="hero-actions">
              <button className="primary" onClick={() => scrollTo('services')}>Explore our services <span>↓</span></button>
              <button className="play" onClick={() => scrollTo('about')}><i>▶</i> Our story</button>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="orbital orbital-one"></div><div className="orbital orbital-two"></div>
            <img src="/hanci-hero.png" alt="" />
            <div className="float-tag tag-one"><span>DESIGN</span><b>Creative<br/>direction</b></div>
            <div className="float-tag tag-two"><span>BUILD</span><b>Digital<br/>products</b></div>
          </div>
        </div>
        <div className="hero-foot"><span>WEB DEVELOPMENT</span><i></i><span>CREATIVE DESIGN</span><i></i><span>GROWTH & SOCIAL</span><small>SCROLL TO DISCOVER ↓</small></div>
      </section>

      <section className="intro" id="about">
        <div className="section-no">/ 01 — WHAT WE DO</div>
        <div>
          <h2>One creative partner.<br/><em>Every digital need.</em></h2>
          <p>From first idea to final launch, we blend strategy, design, and technology to create work that feels clear, useful, and unmistakably yours.</p>
        </div>
      </section>

      <section className="services" id="services">
        <div className="filter-row" role="group" aria-label="Filter services">
          {filters.map((item) => <button key={item} className={filter === item ? 'active' : ''} onClick={() => setFilter(item)}>{item}</button>)}
        </div>
        <div className="service-grid">
          {visible.map((service) => (
            <article className={`service-card ${service.tone}`} key={service.id}>
              <div className="card-top"><span>{service.id}</span><span>{service.tag}</span></div>
              <div className="service-icon">{service.icon}</div>
              <div className="card-copy"><h3>{service.title}</h3><p>{service.desc}</p></div>
              <div className="card-bottom"><b>{service.price}</b><button onClick={() => setSelected(service)} aria-label={`View ${service.title}`}>↗</button></div>
            </article>
          ))}
        </div>
      </section>

      <section className="process" id="process">
        <div className="process-heading"><div className="section-no">/ 02 — HOW WE WORK</div><h2>Simple process.<br/><em>Serious results.</em></h2></div>
        <div className="steps">
          {[['01','DISCOVER','We listen, learn, and map the right direction.'],['02','DESIGN','We turn strategy into a bold, intuitive experience.'],['03','BUILD','We bring every detail to life with clean technology.'],['04','LAUNCH','We test, refine, and set your new platform in motion.']].map((s) => <div className="step" key={s[0]}><span>{s[0]}</span><div className="step-dot"></div><h3>{s[1]}</h3><p>{s[2]}</p></div>)}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-glow"></div><div className="section-no">/ HAVE A PROJECT?</div>
        <h2>Let’s make something<br/><em>worth remembering.</em></h2>
        <p>Tell us where you want to go. We’ll help you build the way there.</p>
        <a href="mailto:hello@hancicreatives.com">hello@hancicreatives.com <span>↗</span></a>
      </section>

      <footer><div className="footer-brand"><img src="/Hanci Logo.jpg" alt=""/><span>HANCI CREATIVES</span></div><p>Creative digital studio for brands ready to move.</p><div><a href="#services">Services</a><a href="#process">Process</a><a href="#top">Back to top ↑</a></div><small>© 2026 HANCI CREATIVES. ALL RIGHTS RESERVED.</small></footer>

      {selected && <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && setSelected(null)}>
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <button className="modal-close" onClick={() => setSelected(null)}>×</button>
          {!sent ? <><span className="modal-tag">{selected.tag} / {selected.id}</span><h2 id="modal-title">Start your<br/><em>{selected.title}</em></h2><p>{selected.desc}</p><form onSubmit={(e) => {e.preventDefault(); setSent(true)}}><label>Name<input required placeholder="Your name"/></label><label>Email<input required type="email" placeholder="you@company.com"/></label><label>Tell us about it<textarea required placeholder="A few words about your goals..."/></label><button className="primary">Send project brief <span>↗</span></button></form></> : <div className="success"><i>✓</i><h2>Brief received.</h2><p>Thanks! We’ll be in touch to shape the next steps.</p><button className="primary" onClick={() => {setSelected(null); setSent(false)}}>Done</button></div>}
        </div>
      </div>}
    </main>
  )
}

export default App
