import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import blogCtScanner from "@/assets/blog-ct-scanner.jpg";
import blogIcu from "@/assets/blog-icu.jpg";
import blogFutureImaging from "@/assets/blog-future-imaging.jpg";

const posts = [
  { title: "Choosing the Right CT Scanner for Your Hospital", date: "Feb 15, 2026", excerpt: "A comprehensive guide to selecting CT scan equipment based on your facility's needs and budget.", image: blogCtScanner },
  { title: "ICU Setup Best Practices for Modern Hospitals", date: "Jan 28, 2026", excerpt: "Essential tips for planning and equipping an intensive care unit with the latest medical technology.", image: blogIcu },
  { title: "The Future of Medical Imaging Technology", date: "Jan 10, 2026", excerpt: "Exploring emerging trends in radiology equipment including AI-powered diagnostics and 3D imaging.", image: blogFutureImaging },
];

const BlogSection = () => (
  <section className="section-padding">
    <div className="container">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Latest News</span>
        <h2 className="section-title mt-2">From Our Blog</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <div key={p.title} className="bg-card rounded-xl border border-border overflow-hidden group" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="h-48 overflow-hidden">
              <img src={p.image} alt={p.title} loading="lazy" width={640} height={512} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-5">
              <span className="text-xs text-muted-foreground">{p.date}</span>
              <h3 className="font-heading font-bold mt-1 mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{p.excerpt}</p>
              <Link to="/blog" className="text-primary text-sm font-semibold font-heading inline-flex items-center gap-1 hover:gap-2 transition-all">
                Read More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
