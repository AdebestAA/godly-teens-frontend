import React from "react";
import ScrollReveal from "./ScrollReveal";

const ScriptureRibbon: React.FC = () => {
  return (
    <ScrollReveal direction="none" distance={0}>
      <div className="bg-white border-2 border-green-100 text-green-900 py-[18px] overflow-hidden border-t border-gold/20 border-b border-gold/20">
        <div className="flex gap-[60px] whitespace-nowrap animate-slide font-fraunces text-[18px] italic font-normal">
          <span className="inline-flex items-center gap-[60px]">
            "Let no one despise your youth, but be an example"{" "}
            <span className="text-gold font-normal">✦</span> 1 Timothy 4:12{" "}
            <span className="text-gold font-normal">✦</span> "Raise up a child in
            the way he should go" <span className="text-gold font-normal">✦</span>{" "}
            Proverbs 22:6 <span className="text-gold font-normal">✦</span> "You
            are the light of the world"{" "}
            <span className="text-gold font-normal">✦</span> Matthew 5:14{" "}
            <span className="text-gold font-normal">✦</span>
          </span>
          <span className="inline-flex items-center gap-[60px]">
            "Let no one despise your youth, but be an example"{" "}
            <span className="text-gold font-normal">✦</span> 1 Timothy 4:12{" "}
            <span className="text-gold font-normal">✦</span> "Raise up a child in
            the way he should go" <span className="text-gold font-normal">✦</span>{" "}
            Proverbs 22:6 <span className="text-gold font-normal">✦</span> "You
            are the light of the world"{" "}
            <span className="text-gold font-normal">✦</span> Matthew 5:14{" "}
            <span className="text-gold font-normal">✦</span>
          </span>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default ScriptureRibbon;
