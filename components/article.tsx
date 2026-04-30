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
        អស្ចារ្យមែន! បច្ចេកវិទ្យាថ្មីអាចជួយឲ្យការរស់នៅប្រចាំថ្ងៃកាន់តែងាយស្រួល និងចំណេញពេលវេលា
      </h2>

      <div className="mb-6">
        <Image 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" 
          alt="Technology article hero image" 
          width={800}
          height={450}
          className="w-full h-auto rounded-lg shadow-sm border border-border"
        />
      </div>

      <div className="text-lg text-foreground/80 space-y-4">
        <p>នេះគឺជាការចាប់ផ្តើមនៃអត្ថបទដែលរៀបរាប់អំពីការវិវត្តន៍នៃបច្ចេកវិទ្យានៅក្នុងឆ្នាំ ២០២៦។ ការប្រើប្រាស់ឧបករណ៍វៃឆ្លាតបានក្លាយជាផ្នែកមួយដែលមិនអាចខ្វះបានសម្រាប់មនុស្សគ្រប់រូប។</p>
        
        <blockquote className="border-l-4 border-primary pl-4 py-2 italic font-semibold text-foreground/70 bg-muted rounded-r-md">
          {'"ការផ្លាស់ប្តូរតូចតាចនៅថ្ងៃនេះ នឹងបង្កើតលទ្ធផលដ៏អស្ចារ្យនៅថ្ងៃស្អែក។"'}
        </blockquote>

        <p>អ្នកជំនាញបានបញ្ជាក់ថា ការរៀនសូត្រពីរបៀបប្រើប្រាស់បច្ចេកវិទ្យាឲ្យបានត្រឹមត្រូវ គឺជាគន្លឹះសំខាន់ដើម្បីជោគជ័យក្នុងសម័យកាលឌីជីថលនេះ។</p>
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
