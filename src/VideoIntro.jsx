import { useEffect, useRef, useState } from 'react';

export default function VideoIntro() {
  const section = useRef(null);
  const video = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);
  const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches || new URLSearchParams(location.search).get('motion') === 'off';

  const enterSite = (automatic = false) => {
    // Never pull a visitor back after they have already scrolled past the film.
    if (automatic && (document.hidden || section.current.getBoundingClientRect().bottom < innerHeight * 0.6 || document.querySelector('.nav.open'))) return;
    video.current?.pause();
    const target = document.querySelector('#atelier-hero');
    if (!target) return;
    if (!automatic) target.focus({ preventScroll: true });
    if (reduced()) target.scrollIntoView({ behavior: 'instant', block: 'start' });
    else window.dispatchEvent(new CustomEvent('merchantreturns:enter'));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      document.documentElement.classList.toggle('intro-in-view', entry.isIntersecting);
      if (!entry.isIntersecting) video.current?.pause();
    }, { threshold: 0.15 });
    observer.observe(section.current);
    if (!reduced()) video.current.play().catch(() => setPlaying(false));
    const onVisibility = () => { if (document.hidden) video.current?.pause(); };
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('intro-in-view');
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  const togglePlayback = () => {
    if (video.current.paused) video.current.play().catch(() => setFailed(true));
    else video.current.pause();
  };

  return <section ref={section} className={`video-intro ${ready ? 'video-ready' : ''}`} aria-label="MerchantReturns introduction">
    <video ref={video} src="/videos/merchantreturns-intro.mp4" muted playsInline preload="auto"
      aria-label="Hands carefully fold an ivory sweater and place it in a return parcel"
      onLoadedData={() => setReady(true)} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}
      onEnded={() => enterSite(true)} onError={() => { setFailed(true); setReady(true); }} />
    <div className="video-intro-copy">
      <span className="video-intro-kicker">MERCHANTRETURNS · A CONSIDERED RETURN</span>
      <h1>Care in every fold.<br />Clarity in every return.</h1>
      <p>A proposed exception desk that brings policy, evidence and people together.</p>
      <button className="video-intro-cta" onClick={() => enterSite()}>Explore MerchantReturns <span aria-hidden="true">↗</span></button>
      <small>Concept preview · Illustrative film</small>
    </div>
    <div className="video-intro-controls">
      {!failed && <button onClick={togglePlayback}>{playing ? 'Pause film' : 'Play film'}</button>}
      <button onClick={() => enterSite()}>Skip intro <span aria-hidden="true">↓</span></button>
      {failed && <span>Film unavailable. Explore the site below.</span>}
    </div>
  </section>;
}
