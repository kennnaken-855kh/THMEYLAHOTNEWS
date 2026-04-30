import { Header } from "@/components/header"
import { Article } from "@/components/article"
import { RelatedArticles } from "@/components/related-articles"
import { Trending } from "@/components/trending"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-screen-md mx-auto">
        <Article />
        <RelatedArticles />
        <Trending />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
