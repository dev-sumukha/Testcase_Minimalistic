import { Badge } from "@/components/ui/badge"

function CategoriesSection() {
  const categories = [
    { name: "Web Development", color: "from-blue-400 to-cyan-400" },
    { name: "Cybersecurity", color: "from-red-400 to-pink-400" },
    { name: "Generative AI", color: "from-purple-400 to-indigo-400" },
    { name: "Machine Learning", color: "from-green-400 to-emerald-400" },
    { name: "DSA", color: "from-yellow-400 to-orange-400" },
    { name: "Blogging", color: "from-pink-400 to-rose-400" },
  ]

  return (
    <section id="categories" className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Browse by Categories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dive deep into various tech domains and expand your knowledge
          </p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <Badge
              key={category.name}
              className={`px-6 py-3 bg-gradient-to-r ${category.color} text-white text-base font-medium rounded-md shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-400 cursor-pointer border-0`}
            >
              {category.name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoriesSection