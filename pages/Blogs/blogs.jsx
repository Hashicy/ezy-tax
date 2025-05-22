"use client";
import Image from "next/image";

import "./blogs.css";

const dummyBlogs=[
  {
    "title": "5 Tax Deductions You Might Be Missing",
    "date": "2025-05-10",
    "summary": "Discover commonly overlooked deductions that can save you money this tax season.",
    "author": "Team EZY Tax",
    "image": "/blogs/freelancer.png"
  },
  {
    "title": "How To Handle Tax Notices Like A Pro",
    "date": "2025-05-05",
    "summary": "Received a notice from the Income Tax Department? Here’s what to do next.",
    "author": "CA Ramesh Gupta",
    "image": "/blogs/freelancer.png"
  },
  {
    "title": "The Rise of AI in Tax Compliance",
    "date": "2025-04-28",
    "summary": "From chatbots to auto-detection of errors, AI is reshaping how we manage taxes.",
    "author": "Anjali Sharma",
    "image": "/blogs/freelancer.png"
  },
  {
    "title": "A Beginner’s Guide to Indian Income Tax",
    "date": "2025-04-20",
    "summary": "New to taxes? This guide breaks down everything you need to know.",
    "author": "Team EZY Tax",
    "image": "/blogs/freelancer.png"
  },
  {
    "title": "Top Mistakes to Avoid During ITR Filing",
    "date": "2025-04-15",
    "summary": "Ensure a hassle-free experience by steering clear of these common errors.",
    "author": "Neha Verma",
    "image": "/blogs/freelancer.png"
  },
  {
    "title": "Understanding the New Tax Regime (2025)",
    "date": "2025-04-10",
    "summary": "Compare the old vs. new tax regimes and decide what works best for you.",
    "author": "CA Vivek Jain",
    "image": "/blogs/freelancer.png"
  },
  {
    "title": "How Freelancers Should Manage Their Taxes",
    "date": "2025-03-28",
    "summary": "Freelancing full-time or part-time? Here’s how to stay tax compliant.",
    "author": "Team EZY Tax",
    "image": "/blogs/freelancer.png"
  },
  {
    "title": "What is Form 26AS and Why It Matters",
    "date": "2025-03-21",
    "summary": "Learn how to access and read your tax credit statement with ease.",
    "author": "Anjali Sharma",
    "image": "/blogs/freelancer.png"
  },
  {
    "title": "Decoding TDS: A Simple Explanation",
    "date": "2025-03-15",
    "summary": "Tax Deducted at Source (TDS) explained in simple language for salaried and business users.",
    "author": "CA Ramesh Gupta",
    "image": "/blogs/freelancer.png"
  }
]


export default function BlogsPage() {
  return (
    <div className="blogs-wrapper">
      <h1 className="blogs-title">Our Latest Insights</h1>
      <p className="blogs-subtitle">Stay informed with expert tax advice, policy updates, and tech trends</p>
      <div className="blogs-grid">
        {dummyBlogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <Image className="blog-image"
                    src={blog.image}
                    alt={blog.title}
                    width={380}
                    height={280}
                  />
            <div className="blog-content">
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-summary">{blog.summary}</p>
              <div className="blog-footer">
                <span className="blog-author">{blog.author}</span>
                <span className="blog-date">{blog.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
