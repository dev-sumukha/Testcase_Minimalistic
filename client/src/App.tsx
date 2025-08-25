import { Routes, Route } from "react-router"
import BlogPage from "./pages/BlogPage"
import BlogListingPage from "./components/BlogListingPage"
import HomePage from "./pages/HomePage"

export default function TestcaseBlogHome() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogListingPage />} />
        <Route path="/blogs/:id" element={<BlogPage />} />
      </Routes>
    </>

  )
}
