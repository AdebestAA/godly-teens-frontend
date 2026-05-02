import React from "react";

const Blog: React.FC = () => {
  const articles = [
    {
      id: 1,
      title: "The Power of Teenage Faith: Stories from Our Community",
      excerpt:
        "Discover how young believers are making extraordinary impacts in their communities and beyond.",
      author: "Sarah Adebayo",
      date: "April 15, 2026",
      readTime: "5 min read",
      category: "Testimonies",
      image:
        "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600&auto=format&fit=crop",
      featured: true,
    },
    {
      id: 2,
      title: "Building Character: The GTIM Leadership Development Program",
      excerpt:
        "How our comprehensive leadership curriculum is shaping the next generation of godly leaders.",
      author: "Pastor Michael Okafor",
      date: "April 10, 2026",
      readTime: "7 min read",
      category: "Programs",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop",
      featured: false,
    },
    {
      id: 3,
      title: "From Ibadan to the World: Our Global Expansion Story",
      excerpt:
        "The remarkable journey of GTIM from a local ministry to an international movement.",
      author: "Dr. Grace Nwosu",
      date: "April 5, 2026",
      readTime: "6 min read",
      category: "About Us",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop",
      featured: false,
    },
    {
      id: 4,
      title: "Youth Ministry in the Digital Age: Challenges and Opportunities",
      excerpt:
        "Navigating social media, online community, and digital discipleship in today's world.",
      author: "Tech Pastor David",
      date: "March 28, 2026",
      readTime: "8 min read",
      category: "Ministry",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop",
      featured: false,
    },
    {
      id: 5,
      title: "The Impact of Prayer in Teen Lives",
      excerpt:
        "Research and stories showing how consistent prayer transforms teenage spirituality.",
      author: "Prayer Coordinator Mary",
      date: "March 20, 2026",
      readTime: "4 min read",
      category: "Spirituality",
      image:
        "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600&auto=format&fit=crop",
      featured: false,
    },
    {
      id: 6,
      title: "Creating Safe Spaces for Teen Conversations",
      excerpt:
        "How GTIM fosters honest dialogue about faith, relationships, and life's challenges.",
      author: "Counselor John Mark",
      date: "March 15, 2026",
      readTime: "6 min read",
      category: "Community",
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop",
      featured: false,
    },
  ];

  const categories = [
    "All",
    "Testimonies",
    "Programs",
    "About Us",
    "Ministry",
    "Spirituality",
    "Community",
  ];

  return (
    <section className="bg-white py-[110px] overflow-hidden" id="blog">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-7">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.14em] uppercase text-green-800 mb-4 before:content-[''] before:w-6 before:h-0.5 before:bg-gold">
            Blog & Articles
          </span>
          <h2 className="font-montserrat font-extrabold text-[clamp(32px,4vw,52px)] leading-[1.05] tracking-[-0.025em] text-ink mb-6">
            Stories of Faith & Impact
          </h2>
          <p className="text-[16px] text-ink-60 max-w-[600px] mx-auto leading-relaxed mb-8">
            Insights, testimonies, and teachings from our community of young
            believers and leaders.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 text-[13px] font-semibold rounded-full transition-all ${
                  category === "All"
                    ? "bg-green-800 text-white"
                    : "text-ink-60 bg-transparent border border-line hover:border-green-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        {articles
          .filter((article) => article.featured)
          .map((article) => (
            <article key={article.id} className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <span className="inline-flex px-3 py-1.5 text-[11px] font-bold text-white bg-green-800 rounded-full mb-4">
                    {article.category}
                  </span>
                  <h3 className="font-montserrat font-extrabold text-[28px] leading-tight text-ink mb-4">
                    {article.title}
                  </h3>
                  <p className="text-ink-60 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 text-green-800 grid place-items-center font-bold text-[14px]">
                        {article.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <div className="text-[14px] font-semibold text-ink">
                          {article.author}
                        </div>
                        <div className="text-[12px] text-ink-60">
                          {article.date} • {article.readTime}
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-semibold text-green-800 border border-line rounded-[10px] hover:border-green-800 hover:bg-green-50 transition-all">
                    Read Full Article
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
                <div className="order-1 lg:order-2">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-[300px] lg:h-[400px] object-cover rounded-[16px]"
                  />
                </div>
              </div>
            </article>
          ))}

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles
            .filter((article) => !article.featured)
            .map((article) => (
              <article
                key={article.id}
                className="border border-line rounded-[16px] overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-[200px] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-flex px-2 py-1 text-[10px] font-bold text-green-800 bg-green-100 rounded-full mb-3">
                    {article.category}
                  </span>
                  <h3 className="font-fraunces font-bold text-[18px] text-ink mb-3 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-[14px] text-ink-60 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-line">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-green-100 text-green-800 grid place-items-center font-bold text-[10px]">
                        {article.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <span className="text-[12px] text-ink-60">
                        {article.readTime}
                      </span>
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-[13px] font-semibold text-green-800 hover:text-green-900 transition-colors"
                    >
                      Read more
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-8 py-4 text-[15px] font-semibold rounded-[10px] transition-all duration-220 border border-green-800/25 bg-transparent text-green-800 hover:bg-green-100 hover:border-green-800 cursor-pointer">
            Load More Articles
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 13l3 3 7-7" />
              <path d="M12 2v10" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
