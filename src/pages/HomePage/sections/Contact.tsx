// Created by add_section_from_catalog (ContactParallaxCard).

import React from 'react';
import ContactParallaxCard from '@/components/sections/contact/ContactParallaxCard';

export default function ContactSection(): React.JSX.Element {
  return (
    <div data-webild-section="contact" data-section="contact" id="contact">
      <ContactParallaxCard
        inputs={[{"type":"text","placeholder":"Your Name","name":"name"},{"type":"email","name":"email","placeholder":"Your Email"}]}
        imageSrc="http://img.b2bpic.net/free-photo/general-director-using-chroma-key-template-modern-gadget_482257-124351.jpg"
        buttonText="Send Message"
        textarea={{"placeholder":"Your Message","name":"message"}}
        footerLink={{"imageSrc":"http://img.b2bpic.net/free-photo/goal-oriented-entrepreneur-luxurious-corporate-office-plans-strategy_482257-128191.jpg","href":"#","text":"Book a Call"}}
        footerText="Or reach out directly"
        title="Let's build the future together. Contact us for a custom consultation."
      />
    </div>
  );
}
