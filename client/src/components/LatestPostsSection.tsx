import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

function LatestPostsSection() {
  const posts = [
    {
      title: "Building Modern React Applications with Next.js 15",
      excerpt:
        "Explore the latest features in Next.js 15 and learn how to build scalable, performant web applications with the app router.",
      category: "Web Development",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/modern-react-setup-JnHGJgPTBjPvQiTGoTkiW0yIOKfRuC.png",
    },
    {
      title: "Advanced Penetration Testing Techniques",
      excerpt:
        "Deep dive into ethical hacking methodologies and learn advanced techniques for identifying security vulnerabilities.",
      category: "Cybersecurity",
      date: "Dec 12, 2024",
      readTime: "12 min read",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/cybersecurity-hacking-terminal-4BOg9IfpzEsljnFodrNfBAHG41uQcf.png",
    },
    {
      title: "Building RAG Systems with LangChain and OpenAI",
      excerpt:
        "Step-by-step guide to creating Retrieval-Augmented Generation pipelines for intelligent document processing.",
      category: "Generative AI",
      date: "Dec 10, 2024",
      readTime: "15 min read",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/ai-neural-network-N06frXLjMDU495Uyk2auotXRfZwX0s.png",
    },
    {
      title: "Machine Learning Model Deployment at Scale",
      excerpt:
        "Learn how to deploy ML models in production environments using Docker, Kubernetes, and cloud platforms.",
      category: "Machine Learning",
      date: "Dec 8, 2024",
      readTime: "10 min read",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/machine-learning-data-visualization-Co6DDzyRX9gyIt5rT50ymwOLn5RrIV.png",
    },
    {
      title: "Mastering Dynamic Programming Patterns",
      excerpt:
        "Comprehensive guide to solving complex algorithmic problems using dynamic programming techniques and optimization.",
      category: "DSA",
      date: "Dec 5, 2024",
      readTime: "20 min read",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/algorithm-visualization-code-L6v4Ad0U2n1E5SSPx7x2Gv83zrlaqJ.png",
    },
    {
      title: "Growing Your Tech Blog: SEO and Content Strategy",
      excerpt:
        "Proven strategies for increasing your blog's visibility, engagement, and building a loyal readership in the tech space.",
      category: "Blogging",
      date: "Dec 3, 2024",
      readTime: "7 min read",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/blogging-workspace-S3paIZP1hdig5lWDzMc74cMfZud6bv.png",
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

  return (
    <section id="blogs" className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="text-center lg:text-left mb-12">
              <h2 className="text-4xl font-bold text-black mb-4">Latest Posts</h2>
              <p className="text-lg text-gray-700">
                Fresh insights and tutorials from the world of technology
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {posts.map((post, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 bg-white"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className={`${getCategoryColor(post.category)} text-xs font-medium px-3 py-1`}>
                        {post.category}
                      </Badge>
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-800 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <a
                      href="#"
                      className="inline-flex items-center text-black font-semibold hover:text-gray-700 transition-colors group-hover:translate-x-1 duration-300"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-8">
              {/* Newsletter Subscription */}
              <Card className="p-6 border border-gray-200 shadow-sm bg-white">
                <h3 className="text-xl font-bold text-black mb-3">Stay Updated</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Get the latest posts delivered right to your inbox
                </p>
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="border-gray-300 focus:border-black focus:ring-black"
                  />
                  <Button className="w-full bg-black text-white hover:bg-gray-800 font-medium rounded-lg">
                    Subscribe
                  </Button>
                </div>
              </Card>

              {/* Recent Posts */}
              <Card className="p-6 border border-gray-200 shadow-sm bg-white">
                <h3 className="text-xl font-bold text-black mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {posts.slice(0, 4).map((post, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block group hover:bg-gray-50 p-2 rounded-lg transition-colors"
                    >
                      <h4 className="text-sm font-medium text-black group-hover:text-gray-700 transition-colors line-clamp-2 mb-1">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </a>
                  ))}
                </div>
              </Card>

              {/* Tags */}
              <Card className="p-6 border border-gray-200 shadow-sm bg-white">
                <h3 className="text-xl font-bold text-black mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Python",
                    "AI/ML",
                    "Security",
                    "Algorithms",
                    "DevOps",
                    "Cloud",
                    "API",
                  ].map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs px-3 py-1 bg-gray-200 text-black hover:bg-gray-300 hover:text-black transition-colors cursor-pointer"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestPostsSection
