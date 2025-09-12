import './PastEvent.css';
import checkpoint from "./../../../assets/img/icons/event-point.svg";
import { pastEvents, type Events } from '../../../data/events-info';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { motion, type Variants, type MotionProps } from 'framer-motion';

export function PastEvent() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView();
      }
    }
  }, [location])

  const lineMovement = {
    initial: { scaleY: 0 },
    whileInView: { scaleY: 1 },
    transition: { duration: 0.6 },
    viewport: { once: true, amount: 0.6, margin: "-10% 0px -10% 0px" },
  }

  type FadeTextDivProps = {
    children: React.ReactNode;
    className?: string;
  };

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 }}
  }

  function FadeTextDiv({ children, className }: FadeTextDivProps) {
    return (
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  const fade : Variants = {
    hidden: { opacity: 0, y: 8, scale: 0.99 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.45, ease: "easeOut" } }
  };

  const fadeUp: MotionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true, amount: 0.6 }
  }


  return (
    <>
      <section id="past-event">
        <div className="past-event-header">
          Past Events
        </div>
        {pastEvents.map((event: Events, index: number) => (
          <>
            <div className={`event-row ${index % 2 === 1 ? "reverse" : ""} past-event`} key={index}>
              <FadeTextDiv className="past-event-info">
                <motion.h1 variants={fade}>
                  {event.name}
                </motion.h1>
                <motion.p variants={fade}>
                  {event.info}
                </motion.p>
                <div
                  className={`event-bubble ${index % 2 === 1 ? "left-bubble" : "right-bubble"}`}>
                </div>
              </FadeTextDiv>
              <motion.img
                {...(fadeUp)}
                className="past-event-img"
                src={event.image}
                alt={event.name}
              />


              <motion.div {...lineMovement} className="past-events-line">
              </motion.div>
              <img className="event-point" src={checkpoint} alt="event point"/>
            </div>
          </>
        ))}
      </section>
    </>
  )
}