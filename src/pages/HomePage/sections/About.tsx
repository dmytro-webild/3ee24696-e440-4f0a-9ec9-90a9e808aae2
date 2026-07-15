// Created by add_section_from_catalog (AboutCursorTrail).

import React from 'react';
import AboutCursorTrail from '@/components/sections/about/AboutCursorTrail';

export default function AboutSection(): React.JSX.Element {
  return (
    <div data-webild-section="about" data-section="about" id="about">
      <AboutCursorTrail
        secondaryButton={{"href":"#services","text":"View Services"}}
        title="Welcome to Novera, where digital ambition meets precision."
        textAnimation="fade-blur"
        media={[{"imageSrc":"http://img.b2bpic.net/free-photo/goal-oriented-entrepreneur-luxurious-corporate-office-plans-strategy_482257-128191.jpg"},{"imageSrc":"http://img.b2bpic.net/free-photo/general-director-using-chroma-key-template-modern-gadget_482257-124351.jpg"},{"imageSrc":"http://img.b2bpic.net/free-photo/male-real-estate-agent-doing-business-showing-house-potential-buying-couple_23-2150164670.jpg"}]}
        primaryButton={{"text":"Learn More","href":"#contact"}}
        tag="About Us"
      />
    </div>
  );
}
