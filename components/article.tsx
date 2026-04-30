"use client"

import Image from "next/image"
import { Calendar, Eye, Clock, Heart, Link, Facebook, MessageCircle } from "lucide-react"

export function Article() {
  return (
    <article className="p-4">
      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
        <span className="bg-accent text-primary px-3 py-1 rounded-full font-bold uppercase tracking-wide">កម្សាន្ត</span>
        <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> April 30, 2026</span>
        <span className="flex items-center gap-1"><Eye className="h-3 w-3" /> 1.2K views</span>
        <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> 3 min read</span>
      </div>

      <h2 className="text-2xl font-bold leading-snug mb-4">
        មិនគួរឲ្យជឿរសោះលោកអើយបុរសម្នាក់ហេតុតែចូលចិត្តនិងស្រឡាញ់ IDOL ខ្លួនឯងខ្លាំងពេករហូតក៏សម្រេចចិត្តធ្វើរឿងមួយនេះ
      </h2>

      <div className="mb-6">
        <Image 
          src="/images/thmey-lahot-hero.jpeg" 
          alt="THMEY LAHOT NEWS Breaking News" 
          width={800}
          height={1000}
          className="w-full h-auto rounded-lg shadow-sm border border-border"
          priority
        />
      </div>

      <div className="text-lg text-foreground/80 space-y-4">
        <p>កាលពីថ្ងៃទី 30 ខែ មេសា ឆ្នាំ 2026 វេលាយប់រំលងអាទ្រាធប្រហែលម៉ោង 11:30 នាទីយប់ មានបុរសម្នាក់បានបង្កការភ្ញាក់ផ្អើលយ៉ាងខ្លាំង គឺគាត់បានទៅសុំ idol របស់គាត់ថើបក្លៀកយ៉ាងសាហាវឃោឃៅ បើតាមការបញ្ជាក់ របស់លោក ជៀម វិបុល គឺលោកបានឃើញ បុគ្គលម្នាក់ ខាងលើដែលមានឈ្មោះ ផាន់ មេងហ៊ុយ គឺបានសុំនារីដែលជា Idol របស់គាត់ថើបក្លៀកបន្ទាប់ពី perform រួច រឿងរ៉ាវនេះបានបង្កឱ្យមានការភ្ញាក់យ៉ាងខ្លាំងបន្ទាប់ពីលោកផាន់ម៉េងហុយបានធ្វើរឿងមិនគួរគប្បីនេះឡើង យ៉ាងណាមិញបុរសម្នាក់នេះមិនបានធ្វើអ្វីលើសលួសក្រៅពីហិតក្លៀកទៅលើ idol របស់គាត់ឡើយ។ សូមអរគុណពីខ្ញុំបាទព័ត៌មានបែកអាចម៍ ផ្សាយចេញពីចានបង្គន់🙏🏻</p>
      </div>

      <div className="mt-8 pt-6 border-t border-border flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-bold flex items-center gap-2 hover:opacity-90 transition shadow-sm">
            <Heart className="h-4 w-4" /> Like 24
          </button>
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-muted-foreground">Share:</span>
            <button className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-80 transition">
              <Facebook className="h-4 w-4" />
            </button>
            <button className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:opacity-80 transition">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </button>
            <button className="w-9 h-9 rounded-full border border-border text-muted-foreground flex items-center justify-center hover:bg-muted transition">
              <Link className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="bg-muted p-6 rounded-lg border border-border">
          <div className="flex items-center gap-2 mb-4">
            <MessageCircle className="h-5 w-5 text-primary" />
            <h3 className="font-bold text-lg">Comments (0)</h3>
          </div>
          
          <p className="text-center text-muted-foreground py-4 italic text-sm">No comments yet. Be the first to comment!</p>

          <div className="mt-6 border-t border-border pt-6">
            <h4 className="font-bold mb-4">Leave a Comment</h4>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Name (optional)" 
                className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-primary text-sm shadow-sm bg-background"
              />
              <textarea 
                rows={4} 
                placeholder="Comment *" 
                required 
                className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-primary text-sm shadow-sm bg-background"
              />
              <button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-lg hover:opacity-90 transition shadow-md uppercase tracking-wide"
              >
                Post Comment
              </button>
            </form>
          </div>
        </div>
      </div>
    </article>
  )
}
