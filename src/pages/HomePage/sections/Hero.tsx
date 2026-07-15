// Created by add_section_from_catalog (HeroOverlayParallax).

import React from 'react';
import HeroOverlayParallax from '@/components/sections/hero/HeroOverlayParallax';

export default function HeroSection(): React.JSX.Element {
  return (
    <div data-webild-section="hero" data-section="hero" id="hero">
      <HeroOverlayParallax
        avatarsSrc={["http://img.b2bpic.net/free-photo/confident-pretty-young-woman-looking-camera_1262-16156.jpg","http://img.b2bpic.net/free-photo/male-employee-with-coffee-cup-office_482257-119420.jpg","http://img.b2bpic.net/free-photo/positive-confident-business-coach-posing-training-room_74855-3026.jpg"]}
        secondaryButton={{"href":"#services","text":"View Our Services"}}
        primaryButton={{"href":"#contact","text":"Start Your Project"}}
        imageSrc="http://img.b2bpic.net/free-photo/saturn-sky-night-background-asset-game-2d-futuristic-generative-ai_191095-2092.jpg?_wi=1"
        title="Stop Losing Opportunities. Start Growing Smarter. We build systems that help your business stay connected, respond faster, and turn more customers into results."
        avatarsLabel="Trusted by industry leaders"
      />
    </div>
  );
}
