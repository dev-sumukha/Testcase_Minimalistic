import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const blogs = [
  {
    title: "Building Modern React Applications with Next.js 15",
    category: "Web Development",
    excerpt:
      "Explore the latest features in Next.js 15 and learn how to build scalable, performant web applications.",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/modern-react-setup-JnHGJgPTBjPvQiTGoTkiW0yIOKfRuC.png",
  },
  {
    title: "Machine Learning Model Deployment at Scale",
    category: "Machine Learning",
    excerpt:
      "Learn how to deploy ML models in production environments using Docker, Kubernetes, and cloud platforms.",
    date: "Dec 8, 2024",
    readTime: "10 min read",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/machine-learning-data-visualization-Co6DDzyRX9gyIt5rT50ymwOLn5RrIV.png",
  },
  {
    title: "Advanced Penetration Testing Techniques",
    category: "Cybersecurity",
    excerpt:
      "Deep dive into ethical hacking methodologies and learn advanced techniques for identifying security vulnerabilities.",
    date: "Dec 12, 2024",
    readTime: "12 min read",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/cybersecurity-hacking-terminal-4BOg9IfpzEsljnFodrNfBAHG41uQcf.png",
  },
  {
    title: "Building RAG Systems with LangChain and OpenAI",
    category: "Generative AI",
    excerpt:
      "Step-by-step guide to creating Retrieval-Augmented Generation pipelines for intelligent document processing.",
    date: "Dec 10, 2024",
    readTime: "15 min read",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/ai-neural-network-N06frXLjMDU495Uyk2auotXRfZwX0s.png",
  },
  {
    title: "Mastering Dynamic Programming Patterns",
    category: "DSA",
    excerpt:
      "Comprehensive guide to solving complex algorithmic problems using dynamic programming techniques and optimization.",
    date: "Dec 5, 2024",
    readTime: "20 min read",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/algorithm-visualization-code-L6v4Ad0U2n1E5SSPx7x2Gv83zrlaqJ.png",
  },
]

const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string } = {
    "Web Development": "bg-blue-100 text-blue-800",
    Cybersecurity: "bg-red-100 text-red-800",
    "Generative AI": "bg-purple-100 text-purple-800",
    "Machine Learning": "bg-green-100 text-green-800",
    DSA: "bg-yellow-100 text-yellow-800",
    Blogging: "bg-pink-100 text-pink-800",
  }
  return colors[category] || "bg-gray-100 text-gray-800"
}

export default function CategoryPage() {
  const categories = Array.from(new Set(blogs.map((blog) => blog.category)))

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto max-w-7xl px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Testcase Blogs</h1>
          <nav className="flex gap-4">
            {["Home", "Categories", "Blogs", "About"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-700 hover:text-black font-medium transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Category Sections */}
      <main className="container mx-auto max-w-7xl px-4 py-12 space-y-16">
        {categories.map((category) => (
          <section key={category}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{category} Blogs</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogs
                .filter((blog) => blog.category === category)
                .map((blog, idx) => (
                  <Card
                    key={idx}
                    className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge className={`${getCategoryColor(blog.category)} text-xs font-medium px-3 py-1`}>
                          {blog.category}
                        </Badge>
                        <span className="text-sm text-gray-500">{blog.date}</span>
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-sm text-gray-500">{blog.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{blog.excerpt}</p>
                      <Button className="w-full bg-black text-white hover:bg-gray-800 rounded">
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}
