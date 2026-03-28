import Layout from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import blogCtScanner from "@/assets/blog-ct-scanner.jpg";
import blogIcu from "@/assets/blog-icu.jpg";
import blogFutureImaging from "@/assets/blog-future-imaging.jpg";

const posts = [
  { title: "Choosing the Right CT Scanner for Your Hospital", date: "Feb 15, 2026", category: "Equipment Guide", excerpt: "A comprehensive guide to selecting CT scan equipment based on your facility's needs, patient volume, and budget considerations.", image: blogCtScanner },
  { title: "ICU Setup Best Practices for Modern Hospitals", date: "Jan 28, 2026", category: "Hospital Setup", excerpt: "Essential tips for planning and equipping an intensive care unit with the latest medical technology and patient care systems.", image: blogIcu },
  { title: "The Future of Medical Imaging Technology", date: "Jan 10, 2026", category: "Technology", excerpt: "Exploring emerging trends in radiology equipment including AI-powered diagnostics, 3D imaging and cloud-based solutions.", image: blogFutureImaging },
  { title: "Preventive Maintenance for Hospital Equipment", date: "Dec 20, 2025", category: "Maintenance", excerpt: "Why regular maintenance is crucial for medical equipment longevity, patient safety, and regulatory compliance.", image: blogCtScanner },
  { title: "How to Plan a Diagnostic Lab Setup", date: "Dec 5, 2025", category: "Lab Setup", excerpt: "Step-by-step guide to planning and setting up a modern diagnostic laboratory with the right equipment and workflow.", image: blogIcu },
  { title: "Patient Monitoring Systems: A Complete Guide", date: "Nov 18, 2025", category: "Monitoring", excerpt: "Understanding different types of patient monitoring systems and choosing the right one for your healthcare facility.", image: blogFutureImaging },
];

const Blog = () => (
  <Layout>
    <section className="gradient-bg py-20">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-primary-foreground mb-4">Blog & News</h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">Latest insights on medical equipment and healthcare technology</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p) => (
          <div key={p.title} className="bg-card rounded-xl border border-border overflow-hidden group" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="h-48 overflow-hidden">
              <img src={p.image} alt={p.title} loading="lazy" width={640} height={512} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold text-secondary">{p.category}</span>
                <span className="text-xs text-muted-foreground">• {p.date}</span>
              </div>
              <h3 className="font-heading font-bold mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{p.excerpt}</p>
              <Link to="#" className="text-primary text-sm font-semibold font-heading inline-flex items-center gap-1 hover:gap-2 transition-all">
                Read More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Blog;
