import AboutText from '@/components/sections/about/AboutText';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSimple from '@/components/sections/faq/FaqSimple';
import FeaturesDetailedCards from '@/components/sections/features/FeaturesDetailedCards';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroBillboardTiltedCarousel from '@/components/sections/hero/HeroBillboardTiltedCarousel';
import MetricsSimpleCards from '@/components/sections/metrics/MetricsSimpleCards';
import TestimonialOverlayCards from '@/components/sections/testimonial/TestimonialOverlayCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboardTiltedCarousel
      tag="New Era of Digital Presence"
      title="Elevating your brand with sophisticated AI-driven solutions."
      description="We hand-craft high-performance websites and intelligent receptionist systems. Novera brings a fresh era of digital craftsmanship tailored to your ambition."
      primaryButton={{
        text: "Start Your Project",
        href: "#contact",
      }}
      secondaryButton={{
        text: "View Our Services",
        href: "#services",
      }}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/saturn-sky-night-background-asset-game-2d-futuristic-generative-ai_191095-2092.jpg?_wi=1",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-graph-computer-illustration_23-2151884889.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/cosmic-background-with-blue-laser-lights-with-cool-shapes_181624-26307.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-background-cyclist-design_183364-118217.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-shot-modern-futuristic-business-architecture-breathtaking-starry-sky_181624-20935.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-flowing-metallic-waves-high-contrast-black-white-texture_84443-91501.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutText
      title="Welcome to Novera, where digital ambition meets precision."
      primaryButton={{
        text: "Learn More",
        href: "#contact",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesDetailedCards
      tag="Our Expertise"
      title="Tailored AI Solutions"
      description="We don't just build software; we build systems designed to perform, adapt, and grow with your business."
      items={[
        {
          title: "AI Powered Websites",
          description: "High-performance, bespoke websites built to integrate seamlessly with intelligent workflows.",
          tags: [
            "AI",
            "Performance",
            "Web",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/goal-oriented-entrepreneur-luxurious-corporate-office-plans-strategy_482257-128191.jpg",
        },
        {
          title: "Intelligent Receptionists",
          description: "Human-like AI receptionists that handle queries with warmth, precision, and 24/7 availability.",
          tags: [
            "Automated",
            "Service",
            "AI",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/general-director-using-chroma-key-template-modern-gadget_482257-124351.jpg",
        },
        {
          title: "Workflow Integration",
          description: "Connecting your customer-facing tools to your backend operational systems.",
          tags: [
            "Integration",
            "Efficiency",
            "Scale",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/male-real-estate-agent-doing-business-showing-house-potential-buying-couple_23-2150164670.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="pricing" data-section="pricing">
    <SectionErrorBoundary name="pricing">
          <FeaturesRevealCardsBento
      tag="Our Portfolio"
      title="Crafting Excellence"
      description="Every solution we create is unique, leveraging modern AI to push the boundaries of what is possible."
      items={[
        {
          title: "AI-Enhanced UI",
          description: "Adaptive interfaces.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-holographic-cube_23-2150979689.jpg",
        },
        {
          title: "Automated Scheduling",
          description: "Seamless bookings.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/structure-social-media-with-colored-icons_1134-73.jpg",
        },
        {
          title: "Custom Analytics",
          description: "Data-driven insights.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/augmented-reality-engineer-examining-holographic-machine_23-2152006121.jpg",
        },
        {
          title: "Integrated CRM",
          description: "Unified communications.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/global-network-illustration_53876-16141.jpg",
        },
        {
          title: "Voice Assistant",
          description: "Natural interactions.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/dark-phone-16-pro-max_187299-45925.jpg",
        },
        {
          title: "Security Protocols",
          description: "Enterprise-grade safety.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/man-holding-tablet-with-lighting-control-application-turning-lights-sitting-kitchen-house_482257-2744.jpg",
        },
        {
          title: "Cloud Scale",
          description: "Growth-ready infrastructure.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/cybersecurity-data-protection-concept_23-2152004114.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsSimpleCards
      tag="Impact Delivered"
      title="Measuring Success"
      description="Our solutions are designed to deliver measurable improvements to your business operations."
      metrics={[
        {
          value: "24/7",
          description: "Constant Engagement",
        },
        {
          value: "45%",
          description: "Efficiency Growth",
        },
        {
          value: "100+",
          description: "Projects Delivered",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialOverlayCards
      tag="Client Success"
      title="Partners in Innovation"
      description="What our clients say about the Novera experience."
      testimonials={[
        {
          name: "Sarah Miller",
          role: "CEO",
          company: "GrowthX",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/confident-pretty-young-woman-looking-camera_1262-16156.jpg",
        },
        {
          name: "David Chen",
          role: "Founder",
          company: "Innovate",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/male-employee-with-coffee-cup-office_482257-119420.jpg",
        },
        {
          name: "Elena Rodriguez",
          role: "Director",
          company: "Skyline",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/positive-confident-business-coach-posing-training-room_74855-3026.jpg",
        },
        {
          name: "Marcus Thorne",
          role: "VP",
          company: "Vertex",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/laptop-table_23-2148868359.jpg",
        },
        {
          name: "Julia Park",
          role: "Head of Operations",
          company: "Sync",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-red-haired-man_158595-3781.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSimple
      tag="Common Questions"
      title="Everything You Need to Know"
      description="Quick answers to help you understand our process."
      items={[
        {
          question: "How do you integrate AI?",
          answer: "We hand-pick the best AI models to complement human workflows, ensuring seamless operation.",
        },
        {
          question: "Is your work proprietary?",
          answer: "Every solution we deliver is custom-built for your specific brand requirements.",
        },
        {
          question: "How do I get started?",
          answer: "Schedule a discovery call, and we'll map out a solution tailored to your goals.",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Ready to Start?"
      text="Let's build the future together. Contact us for a custom consultation."
      primaryButton={{
        text: "Contact Us",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Book a Call",
        href: "#",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
