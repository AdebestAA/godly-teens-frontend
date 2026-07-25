import React, { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

interface Testimony {
  id: number;
  name: string;
  initials: string;
  avatar: string;
  /** Full message. Blank lines separate paragraphs. */
  message: string;
}

/** Split a message into paragraphs on blank lines. */
const toParagraphs = (message: string) =>
  message
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

const TESTIMONIES: Testimony[] = [
  {
    id: 1,
    name: "Olasanmi Oluwakemisola",
    initials: "OO",
    avatar: "from-green-600 to-green-800",
    message: `Goodly Teens has being a blessing to a lot of teenagers and young adults and I'm glad to be one of them, I thought I don't have the capacity to involve in big things until I met Engineer Fawole and he handed over the entire registration of YMS 2023, 😊 he brought out potential in me and help me achieved it, Dr Fawole is a blessed woman, a mother of many , with the main time I spent with you have always loved to be a supportive wife like you

Words are not enough to describe the greatness of this ministry and Fawole Family and I know I lot will bless you with gifts and prayers too but remember, Daddy and Mummy I'm always praying for you`,
  },
  {
    id: 2,
    name: "Olusesan Marvellous",
    initials: "OM",
    avatar: "from-gold to-gold-dark",
    message: `I return all the glory to God for what He has done in my life through this ministry.

There was a time in my life when I had a strong desire to grow spiritually. Deep within me, I longed to know God more, to understand His Word, and to become everything He had called me to be. At that point, my plan was simple. I thought joining a Bible club would be enough to help me grow in the Word and build my relationship with God.

But God, in His wisdom, had a greater plan for me.

Instead of leading me the way I expected, He directed my path into the Youth Ministers Summit (YMS), and then into the Godly Teenagers Ministry, and that became my training ground for His purpose in my life. What I thought would just be a place of fellowship became a place of transformation. It was not just about learning the Word. It became a place where God began to shape my character, my discipline, and my spiritual sensitivity.

Through this ministry, God began to stretch me beyond my comfort zone.

One of the major ways He did this was through the life and guidance of Engineer Fawole. God used him mightily in my life, especially in the place of prayer. Prayer, which once felt like something I had to do, became something I began to understand and engage in deeply, especially the Pauline prayers, which I cannot forget. I learned that prayer is not just about speaking words, but about building a relationship with God, aligning with His will, and standing in responsibility in the Spirit.

I also remember the first time I was invited by mummy to the PWD prayer meeting. I was so glad, and in that moment, I began to learn how to walk with resilience and consistency in the place of prayer.

I was trained not just to attend, but to participate, not just to listen, but to grow.

In that environment, I learned how to take responsibility. I began to understand that being a child of God is not passive. It requires commitment, discipline, and intentionality. I was taught to show up, to serve, to be accountable, and to take my spiritual growth seriously.

I also remember the privilege of serving as the Teenagers' Coordinator. That season helped me to stand firm and be bold about my faith. It stretched me into leadership and taught me how to lead with responsibility and dependence on God.

Looking back now, I realize that what I thought I needed was different from what God knew I needed.

I was looking for a place to learn, but God gave me a place to be built. I was seeking knowledge, but God gave me training. I wanted growth, but God gave me purpose.

The Godly Teenagers Ministry was not just a gathering it was a divine setup. It became a foundation where God began to prepare me for what lies ahead. It instilled in me values, discipline, and a deeper hunger for God that I carry till today.

I am grateful for every lesson, every correction, every moment of stretching, and every opportunity to grow. God used that season to lay a solid foundation in my life, and I know that it is just the beginning of what He has planned for me.

I pray that God will continue to bless, uphold, and richly reward your family, sir, for the impact you have made.`,
  },
  {
    id: 3,
    name: "Emmanuel Okedara",
    initials: "EO",
    avatar: "from-green-500 to-emerald-700",
    message: `Testimony on the Impact of Godlyteens International

As Godlyteens International celebrates its 20th anniversary, I count it a great privilege to reflect on the profound impact this ministry has had on my life and family.

Although I did not join Godlyteens International as a teenager, my journey with the ministry began during my years in tertiary institution when I met the convener, Engr. Fawole, and his wife, Dr. Fawole. What started as a personal mentorship relationship soon opened my eyes to the depth of their calling to teenagers and young people. Without hesitation, I aligned myself with the vision and committed to serving in whatever capacity God made available.

Godlyteens International, and later, the Royal Elites Club and the Youth Ministers' Summit, became a defining platform in my spiritual and leadership development. Through this ministry, I found a place to grow, to serve, and to be prepared for future ministerial responsibilities. It shaped my understanding of leadership, mobilization, and purposeful living. It also provided a God-ordained avenue for expression, service, and impact.

One of the greatest honours of my journey was being appointed the first Chairman of the Organizing Committee for the Youth Ministers' Summit after its maiden edition in 2015. Coordinating the team and contributing to the growth of the summit remains a privilege I deeply cherish.

As the ministry marks two decades of consistent labour, sacrifice, and kingdom impact, my heartfelt prayer is that God will continually uphold Godlyteens International, strengthen the visioners, and enlarge the reach of this assignment. May the next decades be marked by greater grace, deeper influence, and multiplied testimonies of transformed lives.

To God be the glory.`,
  },
  {
    id: 4,
    name: "Mayowa Oladipupo",
    initials: "MO",
    avatar: "from-green-700 to-green-900",
    message: `Hmm… where do I even begin? Godly Teens, Engr. & Dr. (Mrs.) Fawole…

Thank you, Daddy and Mummy, for yielding to the call to pioneer this remarkable vision one that has raised and continues to raise impactful leaders across the globe.

Godly Teens International was my first foundation for learning kingdom values and principles, and a living model of a God-centered marriage. “Engr's Home” at the Poly Staff Quarters was truly a home for many of us full of love, openness, and warmth. Teenagers from all backgrounds were welcomed without bias; it was a place where everyone felt valued and seen.

I carry so many cherished memories, from the Thursday midnight prayers with Pst. Kay (of blessed memory), to music trainings with Solarsax, and weekend fellowships where we shared life together. These were not just moments, but experiences that shaped us, built us, and bonded us in genuine love.

Engr. Fawole's passion for leadership, business, and young people, alongside Dr. (Mrs.) Fawole's passion for music, academic excellence, godly relationships, and capacity building, left a lasting imprint on us. You showed us that there is no limit to how high we can rise.

Today, to the glory of God, I serve as Lead Pastor of Royalty House Global while still active in the secular space with the A.U. a testament to the seeds sown through Godly Teens.

Godly Teens is truly a camp of rising stars and emerging giants.

Thank You, Lord, for Godly Teens International.

Thank You, Lord, for Engr. and Dr. (Mrs.) Fawole.`,
  },
  {
    id: 5,
    name: "Oriowo Opeyemi",
    initials: "OO",
    avatar: "from-gold-soft to-gold-dark",
    message: `To God be the glory.

I was introduced to Godly teens through a friend, mayowa oladipupo now a pastor, when I joined, am not a born again Christian, thought I was born in a Christian family, but through dad and mummy ministration, every Thursday night program, I dedicated my life to Christ.

Ever since then, have been growing and still growing in Christ. I also happened to live in there house for a whole year. The period of that one year was a moment of transformation for me.

Godly teen ministry was the platform God used to stabilized my Christian life.`,
  },
  {
    id: 6,
    name: "Adaramola Esther",
    initials: "AE",
    avatar: "from-emerald-500 to-green-700",
    message: `Good day ma,

I really want to thank God for Godly Teens international, and I want to say that I have been really blessed through this ministry. It has shaped my life positively and I can say that Teens that came across me have been positively influenced. All glory to God 🙏🏽`,
  },
  {
    id: 7,
    name: "Olaoluwa Kiyesi",
    initials: "OK",
    avatar: "from-green-600 to-emerald-800",
    message: `Twenty years is a monumental milestone

Two Decades of Grace: The Godly Teens Legacy represents the foundation of who I am today. These seeds were planted two decades ago in a soil enriched by vision, prayer, and the unwavering commitment of Godly Teens International ministries.

Looking back over twenty years, the landscape of my life is marked by the distinct milestones of growth that this ministry facilitated.

I stand today as a living testament to the obedience of Engr. and Dr. Fawole. Twenty years ago, they saw more than just a group of energetic teenagers; they saw a generation that needed an anchor.

Through their leadership, they didn't just teach us “religion”. They modeled a lifestyle of integrity.

Engr. Fawole's precision and energetic dedication taught me that excellence is a form of worship.

Dr. Fawole's nurturing wisdom and spiritual depth showed me the beauty of a life yielded to the Holy Spirit.

Together, their vision provided a safe harbor where my questions met biblical answers and my potential met Godly discipline. While the world offered fleeting trends, Godly Teens offered the Rock. I learned the discipline of prayer (Thursday night vigils were a ritual) and the necessity of studying the Scriptures. These weren't just activities; they became my survival kit for the transitions of life. As I navigated the complexities of higher education and early career choices, the “Godly Teens” ethos remained my compass. The moral courage instilled in me by the Fawole's helped me say “no” to the pressures of compromise and yes to a life of consecration.

Twenty years later, the “teen” has grown, but the “Godly” pursuit remains. The ministry taught me that growth is not a destination but a continuous stretching toward the image of Christ. I am now able to pour into others because of the reservoir that was filled during those formative years.

To Engr. and Dr. Fawole, thank you for being the hands and feet of Jesus. Thank you for the sacrifices, opening your house and rooms to us all, sharing your food and drinks, the late-night prayers, and the relentless belief in the “Godly Teen.”

As I look forward to the next twenty years, I do so with a firm footing, knowing that the God who started this good work through your vision will surely bring it to its glorious completion. To God be all the glory!`,
  },
  {
    id: 8,
    name: "Oluwafemi Adewale Adegbokan",
    initials: "OA",
    avatar: "from-green-500 to-green-800",
    message: `Godly Teenagers Ministry has played a significant role in my life. The first time I attended Godly teens program was in 2013 thereabout. Through those things that were thought in the program, I learnt how to take my relationship with God more seriously and live intentionally for Him as a young person. I had a transformative experience in the program which enabled me to make the best choice ever in my life and that was the dedication of my life and everything that God has give me and my family to serving God and his purpose in life particularly in the area of teenage and youth ministry.

In addition, in Godly Teens Ministry, I learnt how to channel my youthful energy into things that truly matter. Some of the meetings organized by Godly Teens which I attended made me had a real, true, lasting, unforgettable and unusual experience with God. After attending one of the programs of Godly Teens, I came to realise that living for Christ is the most serious and rewarding commitment I can make in life and that made me to be more focused and empowered to live a life that reflects His lifestyle every day.

More than anything, Godly Teens Ministry equipped me to teach the teenagers and young adults that being young is not a period to wait for the future but a vital season in life in which they must be vibrant, disciplined, and purposeful in their walk with God and that it's possible to live a godly life in today's world that is full of ungodliness.`,
  },
  {
    id: 9,
    name: "Ibukun Omotosho",
    initials: "IO",
    avatar: "from-gold to-gold-dark",
    message: `Sincerely speaking I'm using this opportunity to appreciate Our Daddy and Mummy ,Eng Taiwo Fawole 🙏for all that God has use you to do im my life,..then when i was nobody at all you feed us with good meal anytime we gather for fellowship 😘,...Many of your hard teachings has really affect my life positively,..you let us know that God has a great future for us and now we are seeing it...

There was a time we are watching a movie ,circular movie then,...immediately you came in you shouted at me and yiu said Ibk and you are there watching all this guys watching this kind of movie...I can't forget that day...it really means a lot to me ...

Hmmm, Not that alone sir...i enjoy many connection through you...I remember YESO then 😂... there are many things to really talk about ooo. But let me just stop here.

My prayer for you sir ,is that God almighty will reward you for all you labour in Jesus name.`,
  },
  {
    id: 10,
    name: "Okikiade Adediran",
    initials: "OA",
    avatar: "from-green-600 to-green-800",
    message: `I want to sincerely thank God for the privilege of being part of this ministry during my time in tertiary institution.

My first encounter was literally divine, the ministry brought balance to my life, how the scriptures is the foundation to other aspect of life and how other aspect of life can be used to reach others for God.

The ministry gave me a sense of family. The family took me in when I had no where to stay, how can I forget that. I was surrounded by people who genuinely cared, encouraged me, and helped me grow in faith and character (my little time with mummy helped my interpersonal relationship and accountability). It shaped my mindset, discipline, and purpose.

Today, I can boldly say that my life has been transformed. I am more focused, spiritually grounded, and confident about my future.

I am truly grateful for this ministry and everyone God has used to impact my life.`,
  },
  {
    id: 11,
    name: "Ibikunle Oluwakemisola",
    initials: "IO",
    avatar: "from-gold-soft to-gold-dark",
    message: `Joining royal elites shaped all aspects of my life, spiritually, morally,financial wise, mentally,.etc.. thank you sir for being a blessing to my generation, thanks for yielding sir,mum thanks for being supportive,and accommodating, thanks for being a mother of all I love ma,may God almighty reward your labour of love

Long life Dr&Engineer Fawole

Long life Godly teens.

Long life Royal elite

Am so glad to be part of this big family of Christ.❤️`,
  },
  {
    id: 12,
    name: "Ayomikun Faith",
    initials: "AF",
    avatar: "from-emerald-500 to-green-700",
    message: `As Godly Teens International marks its 20th anniversary, my heart is filled with gratitude. This ministry has shaped my life spiritually, academically, emotionally, and mentally. I am a proud beneficiary of its impact, and I thank God for the vision behind it. My sincere appreciation goes to Engineer and Dr. Fawole for their dedication and love towards raising godly children and teenagers. Through this ministry, I have grown into a better version of myself. Thank you, God, for Godly Teens International and for the lives it continues to transform.`,
  },
  {
    id: 13,
    name: "Oluwalana Oluwapelumi",
    initials: "OO",
    avatar: "from-green-700 to-green-900",
    message: `Oh!! How I love this Family of God

A family that made me realize you do not have to be related by blood to be genuinely part of and be loved`,
  },
  {
    id: 14,
    name: "Areola Rachael",
    initials: "AR",
    avatar: "from-green-500 to-emerald-700",
    message: `My name is Rachael I am happy and proud to be one of this amazing family, a family that bring me more closer to God , a family that made me feel life is worth fighting for, a family that made me realize that we are all perfect in our imperfection.

To my beloved Engineer God will continue to strengthen you sir thanks for all you do and to my wonderful mummy Doctor Fawole God will continue to be with you ma, my beloved papa Ezra you are wonderful God continue to bless you .

I love this family of God ❤️❤️❤️❤️❤️🥰`,
  },
  {
    id: 15,
    name: "Okuntilu Jemima",
    initials: "OJ",
    avatar: "from-gold to-gold-dark",
    message: `My name is Opeyimika,the knowledge i acquired in Godly teens made me now a children teacher in my local church.Godly teens had impacted the passion for ministry to children which i didn't have the vision before. I appreciate the convener of the ministry Enginner Fawole the Lord will continually uphold you and your wife Dr. Mrs. Fawole in Jesus name. Thank you sir/ma.`,
  },
  {
    id: 16,
    name: "Oseji Deborah Monioluwa",
    initials: "OD",
    avatar: "from-green-600 to-emerald-800",
    message: `Good day everyone,

Thank you so much for this opportunity.

I am truly grateful to God for Godly Teens International Ministries. This ministry is one of the major platforms God used to shape who I am today and strengthen my walk with Him.

The image I shared here is from about 14 years ago, during the time I had the privilege of serving as the music teacher for Godly Teens. Those moments remain a vital part of my journey, and I am still glad to be part of this family even till today.

I pray that the vision of raising Godly teenagers will never fade, but will continue to grow stronger in Christ Jesus. May God continually uphold and strengthen the visioner, and may this ministry keep impacting lives for generations to come.

Thank you and God bless. ❤️`,
  },
  {
    id: 17,
    name: "Olumide Isaiah Olayiwola",
    initials: "OI",
    avatar: "from-green-500 to-green-800",
    message: `Am olayiwola olumide CEO of achiever photography

Am really happy to be part of the house ...this house is the foundation of my Christian life....it brings me to good path and I never regret joining the house...`,
  },
  {
    id: 18,
    name: "Fawole Taiwo Ganiyu",
    initials: "FT",
    avatar: "from-gold to-green-800",
    message: `Words feel too small to fully capture all that God has done for us. From the very beginning, He has been our strength, our source, and our sustainer. When we were weak, He lifted us. When we felt low, He raised us from the ground and set us in a higher place. His hand has been evident in every step of this journey.

Since the birth of Godly Teens, there has never been a vision, a plan, or a desire aligned with His will that He has not made a way for. Time and again, He has gone ahead of us, clearing paths where there seemed to be none. What looked impossible became possible, not by our effort, but by His grace.

In the early days of this ministry, God gave us a clear instruction: that He Himself would be our provider, and that we should not rely on human strategies such as fundraising. That instruction required faith, and today, it stands as a testimony. God has honored His word. He has provided beyond our expectations, abundantly, generously, and consistently. His provision has not just been enough; it has overflowed.

Through every challenge, every need, and every moment of uncertainty, He has remained faithful. He has supplied, sustained, and surprised us with His goodness. We have seen His promises come alive, not just in words, but in tangible ways.

Today, our hearts are filled with gratitude. We look back and see His fingerprints everywhere, guiding, protecting, and blessing. We acknowledge that all we are and all we have is because of Him.

So we say, with sincere and thankful hearts: Thank You, Lord. Thank You for Your faithfulness. Thank You for Your provision. Thank You for choosing us, for sustaining this ministry, and for continually showing us that when we trust You fully, You never fail.

All glory belongs to You.`,
  },
];

/** How many cards to show before the reader asks for more. */
const INITIAL_COUNT = 6;

const Testimonies: React.FC = () => {
  const [active, setActive] = useState<Testimony | null>(null);
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? TESTIMONIES : TESTIMONIES.slice(0, INITIAL_COUNT);
  const hasMore = TESTIMONIES.length > INITIAL_COUNT;

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close]);

  return (
    <section className="bg-white py-[110px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-7">
        <ScrollReveal direction="up">
          <div className="text-center max-w-[720px] mx-auto mb-14 sm:mb-16">
            <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.14em] uppercase text-green-800 mb-4">
              Stories
            </span>
            <h2 className="font-montserrat font-extrabold text-[clamp(30px,4vw,52px)] leading-[1.08] tracking-[-0.025em] text-ink text-balance mb-5">
              Testimonial as Godly Teens{" "}
              <em className="font-fraunces italic font-medium text-gold-dark">
                clock 20
              </em>
            </h2>
            {/* <h2 className="font-montserrat font-extrabold text-[clamp(30px,4vw,52px)] leading-[1.08] tracking-[-0.025em] text-ink text-balance mb-5">
              What our community is{" "}
              <em className="font-fraunces italic font-medium text-gold-dark">
                saying.
              </em>
            </h2> */}
            {/* <p className="text-[15px] sm:text-[16px] text-ink-60 leading-relaxed max-w-[560px] mx-auto text-balance">
              Real words from real people whose lives have been shaped by this
              ministry.
            </p> */}
          </div>
        </ScrollReveal>

        {/* Each card owns its reveal animation. A shared ScrollReveal wrapper
            fires whileInView only once, so cards revealed later by the
            "read all" toggle would mount stuck at opacity 0. */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visible.map((t, i) => (
            <motion.article
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="group relative flex flex-col h-full bg-white border-2 border-green-100 rounded-2xl p-7 pt-8 shadow-md hover:shadow-2xl hover:border-gold hover:-translate-y-1 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient accent bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold via-green-600 to-green-800 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              {/* Quote mark */}
              <div className="font-fraunces text-[64px] leading-none text-gold-soft/70 mb-2 select-none">
                &ldquo;
              </div>

              {/* Truncated preview: clamp the whole message so every card
                  fills the same number of lines regardless of paragraphing. */}
              <blockquote className="text-[15px] text-ink leading-relaxed line-clamp-6 mb-4">
                {t.message}
              </blockquote>

              <button
                onClick={() => setActive(t)}
                className="self-start inline-flex items-center gap-1.5 text-[13px] font-semibold text-green-800 hover:text-green-900 mb-6 transition-colors"
              >
                Read more
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="group-hover:translate-x-0.5 transition-transform"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 mt-auto border-t border-green-100">
                <div
                  className={`flex items-center justify-center w-11 h-11 rounded-xl bg-linear-to-br ${t.avatar} text-white font-bold text-[12px] shadow-md shrink-0`}
                >
                  {t.initials}
                </div>
                <strong className="text-[13px] font-semibold text-ink leading-snug">
                  {t.name}
                </strong>
              </div>
            </motion.article>
          ))}
        </div>

        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[14px] font-semibold text-green-800 border-2 border-green-100 rounded-xl hover:border-green-800 hover:bg-green-50 transition-all"
            >
              {expanded
                ? "Show fewer testimonies"
                : `Read all ${TESTIMONIES.length} testimonies`}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className={`transition-transform duration-300 ${
                  expanded ? "rotate-180" : ""
                }`}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Full-message modal */}
      {active && (
        <div
          className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={close}
        >
          <div
            className="relative bg-white w-full max-w-2xl max-h-[85vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Accent bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold via-green-600 to-green-800" />

            {/* Header */}
            <div className="flex items-center gap-4 p-6 pt-7 border-b border-green-100 shrink-0">
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-br ${active.avatar} text-white font-bold text-[13px] shadow-md shrink-0`}
              >
                {active.initials}
              </div>
              <div className="min-w-0">
                <strong className="block font-montserrat text-[16px] font-bold text-ink leading-snug">
                  {active.name}
                </strong>
                <span className="text-[12px] text-ink-60">
                  Godly Teens International
                </span>
              </div>
              <button
                onClick={close}
                aria-label="Close"
                className="ml-auto w-9 h-9 rounded-full border border-green-100 text-ink-60 hover:text-green-800 hover:border-green-800 hover:bg-green-50 flex items-center justify-center transition-all shrink-0"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable message */}
            <div className="overflow-y-auto p-6 sm:p-7">
              <div className="font-fraunces text-[48px] leading-none text-gold-soft/60 mb-1 select-none">
                &ldquo;
              </div>
              <div className="flex flex-col gap-4">
                {toParagraphs(active.message).map((para, i) => (
                  <p key={i} className="text-[15px] text-ink leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonies;
