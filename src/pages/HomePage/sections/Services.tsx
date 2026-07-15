// Created by add_section_from_catalog (FeaturesBento).

import React from 'react';
import FeaturesBento from '@/components/sections/features/FeaturesBento';

export default function ServicesSection(): React.JSX.Element {
  return (
    <div data-webild-section="services" data-section="services" id="services">
      <FeaturesBento
        tag="Our Expertise"
        title="Tailored AI Solutions"
        textAnimation="fade-blur"
        features={[{"bentoComponent":"icon-text-marquee","description":"High-performance, bespoke websites built to integrate seamlessly with intelligent workflows.","marqueeTexts":["AI Powered","High Performance","Bespoke Design","Intelligent Workflows"],"title":"AI Powered Websites","centerIcon":"Zap"},{"placeholder":"Type a message...","aiIcon":"Bot","title":"Intelligent Receptionists","description":"Human-like AI receptionists that handle queries with warmth, precision, and 24/7 availability.","bentoComponent":"chat-marquee","exchanges":[{"userMessage":"I need to book an appointment.","aiResponse":"Hello! How can I help you today?"},{"userMessage":"Tomorrow at 10 AM.","aiResponse":"I can help with that. What time works best for you?"}],"userIcon":"User"},{"title":"Workflow Integration","centerIcon":"Workflow","bentoComponent":"orbiting-icons","orbitIcons":["Database","Cloud","Server","Code"],"description":"Connecting your customer-facing tools to your backend operational systems."}]}
        description="We don't just build software; we build systems designed to perform, adapt, and grow with your business."
      />
    </div>
  );
}
