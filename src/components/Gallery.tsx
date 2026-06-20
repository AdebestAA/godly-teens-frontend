import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const categories = [
    "All",
    "Events",
    "Worship",
    "Community",
    "Mission",
    "Youth",
  ];

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop",
      alt: "Youth worship gathering",
      category: "Worship",
      title: "Sunday Worship Service",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&auto=format&fit=crop",
      alt: "Leadership training session",
      category: "Events",
      title: "Leadership Summit 2025",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&auto=format&fit=crop",
      alt: "Community fellowship",
      category: "Community",
      title: "Monthly Fellowship Dinner",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop",
      alt: "Mission outreach",
      category: "Mission",
      title: "Community Outreach Program",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop",
      alt: "Youth group activity",
      category: "Youth",
      title: "Teen Fire Night",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600&auto=format&fit=crop",
      alt: "Prayer meeting",
      category: "Worship",
      title: "Midweek Prayer Meeting",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600&auto=format&fit=crop",
      alt: "Humanitarian Exchange",
      category: "Events",
      title: "Humanitarian Exchange 2025",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop",
      alt: "Bible study group",
      category: "Community",
      title: "Weekly Bible Study",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=600&auto=format&fit=crop",
      alt: "Youth camp",
      category: "Youth",
      title: "Summer Youth Camp",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&auto=format&fit=crop",
      alt: "Food distribution",
      category: "Mission",
      title: "Food Bank Distribution",
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop",
      alt: "Guest speaker",
      category: "Events",
      title: "Guest Speaker Session",
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&auto=format&fit=crop",
      alt: "Worship team",
      category: "Worship",
      title: "Worship Team Practice",
    },
  ];

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || filteredImages.length === 0) return;
    const scrollStep = 1;
    const interval = setInterval(() => {
      if (el.matches(":hover")) return;
      el.scrollLeft += scrollStep;
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }
    }, 40);
    return () => clearInterval(interval);
  }, [filteredImages]);

  return (
    <section className="bg-white py-[110px] overflow-hidden" id="gallery">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-7">
        <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.14em] uppercase text-green-800 mb-4 before:content-[''] before:w-6 before:h-0.5 before:bg-gold">
              Photo Gallery
            </span>
            <h2 className="font-montserrat font-extrabold text-[clamp(32px,4vw,52px)] leading-[1.05] tracking-[-0.025em] text-ink mb-6">
              Capturing Moments of Faith
            </h2>
            <p className="text-[16px] text-ink-60 max-w-[600px] mx-auto leading-relaxed mb-8">
              A visual journey through our community's worship, fellowship, and
              service experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-[13px] font-semibold rounded-full transition-all ${selectedCategory === category ? "bg-green-800 text-white" : "text-ink-60 bg-transparent border border-line hover:border-green-800"}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="relative group/gal">
          <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {[...filteredImages, ...filteredImages].map((image, i) => (
              <motion.div
                key={`${image.id}-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % filteredImages.length) * 0.06 }}
                className="snap-center shrink-0 w-[75vw] sm:w-[320px] aspect-square rounded-[12px] overflow-hidden cursor-pointer relative group"
                onClick={() => setSelectedImage(image.src)}
              >
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="drop-shadow-lg">
                      <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 21H6a2 2 0 01-2-2V5a2 2 0 012-2h4M9 9l3 3 7-7" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <h3 className="text-white text-[12px] font-semibold truncate">{image.title}</h3>
                  <span className="text-green-300 text-[10px] uppercase tracking-wide">{image.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh]">
              <img
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-full object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* <ScrollReveal direction="up">
          <div className="mt-16 bg-paper border border-line rounded-[20px] p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div><div className="font-fraunces text-[32px] font-semibold text-green-800 mb-2">500+</div><div className="text-[14px] text-ink-60">Photos Captured</div></div>
              <div><div className="font-fraunces text-[32px] font-semibold text-green-800 mb-2">50+</div><div className="text-[14px] text-ink-60">Events Documented</div></div>
              <div><div className="font-fraunces text-[32px] font-semibold text-green-800 mb-2">12K+</div><div className="text-[14px] text-ink-60">Lives Impacted</div></div>
              <div><div className="font-fraunces text-[32px] font-semibold text-green-800 mb-2">28</div><div className="text-[14px] text-ink-60">Countries Reached</div></div>
            </div>
          </div>
        </ScrollReveal> */}

        <ScrollReveal direction="up">
          <div className="text-center mt-12">
            <p className="text-ink-60 mb-6">
              Want to see more moments from our community?
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-semibold text-green-800 border border-line rounded-[10px] hover:border-green-800 hover:bg-green-50 transition-all">
              View Full Gallery
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Gallery;
