import { useState, useMemo } from "react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import { X, ZoomIn, Camera, Images } from "lucide-react";

// Auto-import all images from gallery subfolders at build time
const teamImages = import.meta.glob<{ default: string }>("@/assets/gallery/Team/*.(jpg|jpeg|png|webp)", { eager: true });
const productImages = import.meta.glob<{ default: string }>("@/assets/gallery/Product/*.(jpg|jpeg|png|webp)", { eager: true });
const clientPlaceImages = import.meta.glob<{ default: string }>("@/assets/gallery/ClientPlace/*.(jpg|jpeg|png|webp)", { eager: true });

const categories = ["All", "Team", "Product", "Client Place"];

function extractTitle(path: string): string {
  const filename = path.split("/").pop() || "";
  return filename
    .replace(/\.(jpg|jpeg|png|webp)$/i, "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function buildGalleryItems(
  modules: Record<string, { default: string }>,
  category: string
) {
  return Object.entries(modules).map(([path, mod]) => ({
    src: mod.default,
    title: extractTitle(path),
    category,
  }));
}

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);

  const galleryImages = useMemo(() => [
    ...buildGalleryItems(teamImages, "Team"),
    ...buildGalleryItems(productImages, "Product"),
    ...buildGalleryItems(clientPlaceImages, "Client Place"),
  ], []);

  const filtered = activeCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory);

  const categoryColors: Record<string, string> = {
    All: "from-primary to-secondary",
    Team: "from-[hsl(310,60%,42%)] to-[hsl(280,60%,50%)]",
    Product: "from-[hsl(30,90%,55%)] to-[hsl(15,80%,50%)]",
    "Client Place": "from-[hsl(175,60%,40%)] to-[hsl(200,60%,45%)]",
  };

  return (
    <Layout>
      <PageHero title="Product Gallery" subtitle="Explore our range of medical equipment through detailed product images" icon1={Camera} icon2={Images} />

      <section className="section-padding">
        <div className="container">
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-heading font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? `bg-gradient-to-r ${categoryColors[cat]} text-primary-foreground shadow-lg scale-105`
                    : "bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10 hover:scale-105"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map((img, i) => (
              <div
                key={img.title + i}
                className="group relative rounded-2xl overflow-hidden cursor-pointer border border-border bg-card shadow-sm hover:shadow-2xl hover:border-primary/40 transition-all duration-500 hover:-translate-y-1"
                onClick={() => setLightbox(img)}
              >
                <div className="overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.title}
                    loading="lazy"
                    className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end p-4">
                  <ZoomIn className="w-8 h-8 text-primary-foreground mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-1" />
                  <span className="text-primary-foreground text-sm font-heading font-semibold text-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-1">
                    {img.title}
                  </span>
                </div>
                {/* Category badge */}
                <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold text-primary-foreground bg-gradient-to-r ${categoryColors[img.category]} shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300`}>
                  {img.category}
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No images found in this category. Add images to <code className="bg-muted px-2 py-1 rounded text-xs">src/assets/gallery/{activeCategory === "Client Place" ? "ClientPlace" : activeCategory}/</code> and they'll appear automatically.</p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground hover:text-secondary transition-colors bg-primary/20 rounded-full p-2"
            onClick={() => setLightbox(null)}
          >
            <X className="w-7 h-7" />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.title} className="w-full rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300" />
            <p className="text-primary-foreground text-center font-heading font-semibold mt-4 text-lg">{lightbox.title}</p>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
