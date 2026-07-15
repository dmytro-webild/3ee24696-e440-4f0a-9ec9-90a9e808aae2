import { motion } from 'motion/react';
import TextAnimation from '@/components/ui/TextAnimation';

export default function TrustedBySection() {
  const partners = [
    "Acme Corp",
    "GlobalTech",
    "Nexus Industries",
    "Stark Enterprises",
    "WayneTech",
    "Cyberdyne",
    "Umbrella Corp",
    "Massive Dynamic"
  ];

  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="relative w-full py-16 bg-background border-y border-white/5" data-webild-section="trusted-by" id="trusted-by">
      <div className="w-content-width mx-auto flex flex-col items-center gap-10">
        <TextAnimation 
          text="Trusted by industry leaders" 
          variant="fade-blur" 
          tag="p" 
          className="text-sm font-semibold text-accent uppercase tracking-widest text-center"
          gradientText={false}
        />
        
        <div 
          className="w-full overflow-hidden flex"
          style={{ 
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', 
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' 
          }}
        >
          <motion.div
            className="flex items-center gap-24 pr-24 w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30,
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center whitespace-nowrap">
                <span className="text-3xl font-bold text-foreground/40 hover:text-foreground transition-colors duration-300 font-sans tracking-tighter">
                  {partner}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
