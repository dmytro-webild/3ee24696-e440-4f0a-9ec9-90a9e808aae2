// Created by add_section_from_catalog (TestimonialMarqueeOverlayCards).

import React from 'react';
import TestimonialMarqueeOverlayCards from '@/components/sections/testimonial/TestimonialMarqueeOverlayCards';

export default function TestimonialsSection(): React.JSX.Element {
  return (
    <div data-webild-section="testimonials" data-section="testimonials" id="testimonials">
      <TestimonialMarqueeOverlayCards
        tag="Client Success"
        textAnimation="fade-blur"
        title="Partners in Innovation"
        description="What our clients say about the Novera experience."
        testimonials={[{"rating":5,"imageSrc":"http://img.b2bpic.net/free-photo/confident-pretty-young-woman-looking-camera_1262-16156.jpg","role":"CEO","name":"Sarah Miller","company":"GrowthX"},{"imageSrc":"http://img.b2bpic.net/free-photo/male-employee-with-coffee-cup-office_482257-119420.jpg","company":"Innovate","name":"David Chen","role":"Founder","rating":5},{"rating":5,"imageSrc":"http://img.b2bpic.net/free-photo/positive-confident-business-coach-posing-training-room_74855-3026.jpg","role":"Director","name":"Elena Rodriguez","company":"Skyline"},{"imageSrc":"http://img.b2bpic.net/free-photo/laptop-table_23-2148868359.jpg","name":"Marcus Thorne","company":"Vertex","role":"VP","rating":5},{"imageSrc":"http://img.b2bpic.net/free-photo/portrait-red-haired-man_158595-3781.jpg","name":"Julia Park","company":"Sync","role":"Head of Operations","rating":5}]}
      />
    </div>
  );
}
