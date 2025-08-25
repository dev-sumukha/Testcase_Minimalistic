import { useState } from "react"
import { Link } from "react-router"
import logo from "../logo.png"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const MenuIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )

  const XIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )

  return (
    <header className="sticky top-0 z-50 bg-background/95 dark:bg-background/95 shadow border-b">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="hi" className="w-8"/>
          <span className="font-bold text-xl text-foreground">Testcase</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-3">
          <Link to="/" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200">Home</Link>
          <a href="/#categories" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200">Categories</a>
          <a href="/#blogs" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200">Latest Posts</a>
          <Link to="/blogs" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200">Blogs</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-foreground/80 hover:text-foreground transition">
            {isOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-background/95 dark:bg-background/95 border-t border-border p-4 space-y-2">
          <a href="#" className="block px-4 py-2 text-foreground hover:bg-card rounded transition" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#categories" className="block px-4 py-2 text-foreground hover:bg-card rounded transition" onClick={() => setIsOpen(false)}>Categories</a>
          <a href="#blogs" className="block px-4 py-2 text-foreground hover:bg-card rounded transition" onClick={() => setIsOpen(false)}>Latest Posts</a>
          <Link to="/blogs" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200">Blogs</Link>
          <a href="#about" className="block px-4 py-2 text-foreground hover:bg-card rounded transition" onClick={() => setIsOpen(false)}>About</a>
        </nav>
      )}
    </header>
  )
}

export default Navbar
