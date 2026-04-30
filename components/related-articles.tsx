import Image from "next/image"
import { Eye } from "lucide-react"

const relatedArticles = [
  {
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=300",
    category: "សង្គម",
    title: "ការយល់ដឹងពីបរិស្ថានក្នុងទីក្រុងភ្នំពេញ",
    views: "840"
  },
  {
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=300",
    category: "កីឡា",
    title: "ការត្រៀមខ្លួនសម្រាប់ការប្រកួតជាតិខាងមុខ",
    views: "520"
  }
]

export function RelatedArticles() {
  return (
    <section className="p-4 bg-background">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-1.5 h-6 bg-primary"></div>
        <h3 className="font-bold text-xl">Related Articles</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {relatedArticles.map((article, index) => (
          <div key={index} className="flex flex-col group cursor-pointer">
            <Image 
              src={article.image} 
              alt={article.title}
              width={300}
              height={169}
              className="w-full aspect-video object-cover rounded-lg mb-2 group-hover:opacity-90 transition shadow-sm"
            />
            <span className="text-[10px] font-bold text-primary mb-1 uppercase">{article.category}</span>
            <h4 className="text-sm font-bold leading-snug line-clamp-2 group-hover:text-primary transition">{article.title}</h4>
            <span className="text-[10px] text-muted-foreground mt-1 flex items-center gap-1">
              <Eye className="h-3 w-3" /> {article.views} views
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
