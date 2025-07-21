"use client";
import { useState } from "react";
import Image from "next/image";
import "./blogs.css";

const dummyBlogs = [
  {
    slug: "5-tax-deductions-you-might-be-missing",
    title: "5 Tax Deductions You Might Be Missing",
    date: "2025-05-10",
    summary: "Discover commonly overlooked deductions that can save you money this tax season.",
    content: `Many taxpayers miss out on valuable deductions simply because they are unaware of them. Here are 5 tax deductions you might be missing:

1. Medical Insurance Premiums: Under Section 80D, you can claim deductions on health insurance premiums for yourself and your family.
2. Interest on Education Loans: Section 80E allows for deductions on interest paid on education loans.
3. House Rent Allowance (HRA): Even if your employer doesn’t provide HRA, you may be able to claim deductions under Section 80GG.
4. Donations to Charity: Contributions to registered charitable organizations are deductible under Section 80G.
5. Savings Account Interest: Up to ₹10,000 of interest earned from a savings account is deductible under Section 80TTA.

Make sure you have supporting documents to claim these deductions.`,
    author: "Team EZY Tax",
    image: "/blogs/one.png"
  },
  {
    slug: "how-to-handle-tax-notices-like-a-pro",
    title: "How To Handle Tax Notices Like A Pro",
    date: "2025-05-05",
    summary: "Received a notice from the Income Tax Department? Here’s what to do next.",
    content: `Receiving an income tax notice can be intimidating, but staying calm and informed is key. Here's a step-by-step approach:

1. Read Carefully: Understand the reason for the notice. It could be for verification, mismatch, or scrutiny.
2. Don't Ignore: Notices usually come with a response deadline. Failing to respond can lead to penalties.
3. Check Form 26AS & AIS: Compare the notice details with your Form 26AS and Annual Information Statement.
4. Respond Online: Use the e-Filing portal to respond under the “e-Proceedings” or “Compliance” section.
5. Seek Professional Help: If you're unsure, consult a Chartered Accountant for accurate handling.

Always respond within the timeline and keep acknowledgment for future reference.`,
    author: "CA Ramesh Gupta",
    image: "/blogs/two.jpg"
  },
  {
    slug: "the-rise-of-ai-in-tax-compliance",
    title: "The Rise of AI in Tax Compliance",
    date: "2025-04-28",
    summary: "From chatbots to auto-detection of errors, AI is reshaping how we manage taxes.",
    content: `Artificial Intelligence is transforming the tax landscape in India and globally:

- Chatbots & Virtual Assistants: Help answer taxpayer queries instantly.
- Error Detection: AI tools can detect mismatches and inconsistencies in ITRs.
- Predictive Analytics: Authorities use AI to flag potential fraud or underreporting.
- Automated Bookkeeping: Smart apps now track expenses and suggest deductions.

For taxpayers, this means fewer errors, better compliance, and smarter tax planning.`,
    author: "Anjali Sharma",
    image: "/blogs/three.jpg"
  },
  {
    slug: "beginners-guide-to-indian-income-tax",
    title: "A Beginner’s Guide to Indian Income Tax",
    date: "2025-04-20",
    summary: "New to taxes? This guide breaks down everything you need to know.",
    content: `If you're new to filing income taxes in India, here’s what you should know:

- PAN & Aadhaar: Get both to file your taxes.
- Tax Slabs: Understand the difference between old and new tax regimes.
- Form 16: Provided by employers and contains your salary and TDS details.
- Deductions: Sections like 80C, 80D, and 24B can lower your tax liability.
- ITR Filing: File online on the Income Tax portal before the due date.

Start early, keep documents handy, and file your ITR on time to avoid penalties.`,
    author: "Team EZY Tax",
    image: "/blogs/four.jpg"
  },
  {
    slug: "top-mistakes-to-avoid-during-itr-filing",
    title: "Top Mistakes to Avoid During ITR Filing",
    date: "2025-04-15",
    summary: "Ensure a hassle-free experience by steering clear of these common errors.",
    content: `Filing an ITR isn’t difficult if you're cautious. Here are common mistakes to avoid:

1. Using the Wrong ITR Form: Always select the form applicable to your income sources.
2. Mismatch in Income Details: Cross-check Form 26AS and AIS before submitting.
3. Forgetting Deductions: Don’t forget to claim eligible deductions like 80C, 80D, etc.
4. Incorrect Bank Details: Ensure correct IFSC and account numbers to receive refunds.
5. Not Verifying ITR: Filing isn’t complete until you e-verify your return.

Avoiding these pitfalls ensures a smooth filing process and timely refund.`,
    author: "Neha Verma",
    image: "/blogs/five.jpg"
  },
  {
    slug: "understanding-the-new-tax-regime-2025",
    title: "Understanding the New Tax Regime (2025)",
    date: "2025-04-10",
    summary: "Compare the old vs. new tax regimes and decide what works best for you.",
    content: `In Budget 2023, the new tax regime was made the default. Here’s how it compares:

- Lower Tax Rates, Fewer Deductions: The new regime offers lower rates but no deductions like 80C, 80D, etc.
- Who Should Opt In: Ideal for those with fewer investments or deductions.
- Who Should Stay Out: If you claim HRA, home loan interest, or 80C deductions, old regime may be better.
- Switch Anytime: Salaried individuals can switch every year.

Always calculate tax under both regimes before choosing one.`,
    author: "CA Vivek Jain",
    image: "/blogs/six.jpg"
  },
  {
    slug: "how-freelancers-should-manage-their-taxes",
    title: "How Freelancers Should Manage Their Taxes",
    date: "2025-03-28",
    summary: "Freelancing full-time or part-time? Here’s how to stay tax compliant.",
    content: `Freelancers in India must be proactive about taxes. Here's how:

- Declare All Income: Whether through UPI, bank, or PayPal—everything is taxable.
- Presumptive Tax Scheme: Under Section 44ADA, you can declare 50% of your income as profit.
- GST Registration: Mandatory if turnover exceeds ₹20 lakh (₹10 lakh in some states).
- Maintain Records: Keep invoices and payment proofs for audit readiness.
- Advance Tax: Pay taxes quarterly if liability exceeds ₹10,000 annually.

Stay compliant and avoid penalties by planning ahead.`,
    author: "Team EZY Tax",
    image: "/blogs/seven.jpg"
  },
  {
    slug: "what-is-form-26as-and-why-it-matters",
    title: "What is Form 26AS and Why It Matters",
    date: "2025-03-21",
    summary: "Learn how to access and read your tax credit statement with ease.",
    content: `Form 26AS is your consolidated annual tax statement. It shows:

- TDS/TCS: Tax deducted or collected by others on your behalf.
- Advance Tax: Any advance tax or self-assessment tax paid.
- Refunds: Income Tax refunds received.
- High-Value Transactions: Like mutual fund investments, credit card bills, etc.

You can access it via the Income Tax portal. It helps verify if your taxes have been correctly credited.`,
    author: "Anjali Sharma",
    image: "/blogs/eight.jpg"
  },

];


export default function BlogsPage() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="blogs-wrapper">
      <div className="blogs-hero">
        <h1>Our Latest Insights</h1>
        <p>Stay informed with expert tax advice, policy updates, and tech trends</p>
      </div>

      <div className="blogs-grid fixed-two-columns">
        {dummyBlogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <Image
              src={blog.image}
              alt={blog.title}
              width={380}
              height={240}
              className="blog-image"
            />
            <h3>{blog.title}</h3>
            <p>{blog.summary}</p>
            <div className="blog-footer">
              <span>{blog.author}</span>
              <span>{blog.date}</span>
            </div>
            <button className="learn-more" onClick={() => setSelected(blog)}>
              Read More
            </button>
          </div>
        ))}
      </div>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{selected.title}</h2>
            <p className="modal-meta">
              By <strong>{selected.author}</strong> | {selected.date}
            </p>
            <Image
              src={selected.image}
              alt={selected.title}
              width={600}
              height={300}
              className="modal-image"
            />
            <div className="modal-content">
              <p style={{ whiteSpace: "pre-wrap" }}>{selected.content}</p>
            </div>
            <button onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
