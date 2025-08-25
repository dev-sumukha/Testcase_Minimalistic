import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Navbar from "../components/Navbar"
import Footer from "@/components/Footer"

const blog = {
  title: "Building Modern React Applications with Next.js 15",
  category: "Web Development",
  date: "Dec 15, 2024",
  readTime: "8 min read",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/modern-react-setup-JnHGJgPTBjPvQiTGoTkiW0yIOKfRuC.png",
  content: [
    {
      type: "paragraph",
      text: "Next.js 15 introduces amazing new features for building fast, scalable, and maintainable React applications. In this guide, we'll explore the latest updates and how you can leverage them in your projects."
    },
    {
      type: "heading",
      text: "Introduction"
    },
    {
      type: "paragraph",
      text: "Next.js continues to evolve with new app routing, improved performance, and better developer experience. Whether you're building a personal blog, a SaaS product, or an e-commerce site, Next.js 15 gives you powerful tools."
    },
    {
      type: "heading",
      text: "Getting Started"
    },
    {
      type: "paragraph",
      text: "To get started with Next.js 15, install it via npm or yarn:"
    },
    {
      type: "code",
      text: "npx create-next-app@latest my-app\ncd my-app\nnpm run dev"
    },
    {
      type: "paragraph",
      text: "This will create a new Next.js project with all the default settings optimized for performance and SEO."
    },
    {
      type: "heading",
      text: "Key Features"
    },
    {
      type: "list",
      items: [
        "App Router for better file-based routing",
        "Improved image optimization",
        "Server components support",
        "Enhanced SEO and metadata handling",
        "Fast refresh and TypeScript support"
      ]
    },
    {
      type: "paragraph",
      text: "Next.js 15 makes it easier than ever to scale React applications while keeping them maintainable."
    },
    {
      type: "heading",
      text: "Example Component"
    },
    {
      type: "code",
      text: `import React from "react"

export default function HelloWorld() {
  return <h1>Hello, Next.js 15!</h1>
}`
    },
    {
      type: "paragraph",
      text: "You can now combine server-side rendering and static generation seamlessly with the new features."
    },
    {
      type: "heading",
      text: "Conclusion"
    },
    {
      type: "paragraph",
      text: "Next.js 15 is a powerful tool for modern web development. Its improved routing, performance, and developer experience make it the ideal choice for any React project."
    },
  ]
}

export default function BlogPage() {
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
    <>
            <Navbar />
    <div className="container mx-auto max-w-3xl px-4 py-12">
      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-80 object-cover rounded-lg mb-6 shadow-lg"
        />
      )}

      <Badge className={`${getCategoryColor(blog.category)} text-xs font-medium px-3 py-1 mb-3`}>
        {blog.category}
      </Badge>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>
      <div className="text-sm text-gray-500 mb-8">
        {blog.date} • {blog.readTime}
      </div>

      <div className="prose prose-lg text-gray-700">
        {blog.content.map((block, idx) => {
          if (block.type === "paragraph") {
            return <p key={idx}>{block.text}</p>
          }
          if (block.type === "heading") {
            return <h2 key={idx}>{block.text}</h2>
          }
          if (block.type === "list") {
            return (
              // <ul key={idx} className="list-disc list-inside">
              //   {block.items.map((item, i) => (
              //     <li key={i}>{item}</li>
              //   ))}
              // </ul>
              <></>
            )
          }
          if (block.type === "code") {
            return (
              <pre
                key={idx}
                className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm text-gray-800 mb-4"
              >
                <code>{block.text}</code>
              </pre>
            )
          }
          return null
        })}
      </div>

      <Button className="mt-8 w-full bg-black text-white hover:bg-gray-800 rounded">
        Back to Blogs
      </Button>
    </div>
    <Footer />
    </>
  )
}
