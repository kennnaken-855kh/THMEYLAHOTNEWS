import Image from "next/image"
import { Eye, Pin } from "lucide-react"

const trendingArticles = [
  {
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=100",
    title: "របៀបជ្រើសរើសឧបករណ៍ស្តាប់តន្ត្រីឲ្យត្រូវតាមចំណង់ចំណូលចិត្ត",
    date: "April 29, 2026",
    views: "3.2K",
    rank: 1,
    rankColor: "bg-primary"
  },
  {
    image: "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&q=80&w=100",
    title: "អាហារសុខភាពដែលអ្នកគួរទទួលទានជារៀងរាល់ព្រឹក",
    date: "April 28, 2026",
    views: "2.8K",
    rank: 2,
    rankColor: "bg-charcoal"
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=100",
    title: "គន្លឹះសំខាន់ៗក្នុងការគ្រប់គ្រងហិរញ្ញវត្ថុផ្ទាល់ខ្លួន",
    date: "April 27, 2026",
    views: "1.9K",
    rank: 3,
    rankColor: "bg-[#EAB308]"
  }
]

export function Trending() {
  return (
    <section className="p-4 mb-12">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-1.5 h-6 bg-primary"></div>
        <Pin className="h-4 w-4 text-primary -rotate-45" />
        <h3 className="font-bold text-xl">Trending Now</h3>
      </div>

      <div className="space-y-5">
        {trendingArticles.map((article, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className={`w-8 h-8 rounded-full ${article.rankColor} text-white flex items-center justify-center font-bold text-sm shrink-0`}>
              {article.rank}
            </div>
            <Image 
              src={article.image} 
              alt={article.title}
              width={64}
              height={64}
              className="w-16 h-16 rounded-lg object-cover border border-border"
            />
            <div className="flex flex-col">
              <h4 className="font-bold text-sm leading-tight line-clamp-2">{article.title}</h4>
              <div className="flex items-center gap-3 text-[10px] text-muted-foreground mt-1 uppercase tracking-tighter">
                <span>{article.date}</span>
                <span className="flex items-center gap-1"><Eye className="h-3 w-3" /> {article.views}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
