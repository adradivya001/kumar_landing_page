"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      category: "Bone Health",
      title: "Osteoporosis Prevention: Keeping Bones Strong in Your Golden Years",
      summary: "Learn about essential calcium intake, weight-bearing exercise protocols, and early bone density indicators to prevent fractures as you age.",
      date: "May 15, 2026",
      readTime: "4 min read",
    },
    {
      category: "Sports Medicine",
      title: "Preventing Sports Injuries: Essential Warm-up & Ligament Safety",
      summary: "A practical guide for school runners and local athletes on protecting their ACL/PCL joint ligaments through alignment drills and muscle loading.",
      date: "May 08, 2026",
      readTime: "5 min read",
    },
    {
      category: "Recovery Care",
      title: "Post-Surgical Rehab: Active Pathways to Rapid Mobility Recovery",
      summary: "Understand why starting controlled motion therapy within 24-48 hours of joint replacement or bone pinning surgery reduces long-term stiffness.",
      date: "Apr 28, 2026",
      readTime: "3 min read",
    },
  ];

  return (
    <section id="health-tips" className="py-24 bg-white dark:bg-zinc-900 font-sans relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 px-3 py-1.5 rounded-md">
            Health Awareness
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 dark:text-white mt-4 tracking-tight">
            Latest Health Tips &amp; Medical Insights
          </h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 dark:text-zinc-400 mt-4 text-sm sm:text-base">
            Empowering our community in Anantapur with practical guidelines on bone health, injury avoidance, and recovery routines.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-50 dark:bg-zinc-850 rounded-2xl border border-gray-150 dark:border-zinc-800/80 p-6 flex flex-col justify-between hover:shadow-md hover:border-teal-500/10 transition-all duration-300 group"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between gap-2 mb-4 text-xs font-bold">
                  <span className="text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-gray-400 font-medium">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-navy-800 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors leading-snug">
                  {post.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-gray-500 dark:text-zinc-450 leading-relaxed mb-6">
                  {post.summary}
                </p>
              </div>

              {/* Read button / Date */}
              <div className="border-t border-gray-200/50 dark:border-zinc-800/60 pt-4 flex items-center justify-between text-xs mt-auto">
                <span className="text-gray-400 font-medium">{post.date}</span>
                <span className="inline-flex items-center gap-1 font-bold text-navy-700 dark:text-zinc-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  <span>Read Article</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>

            </motion.article>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 dark:text-zinc-400">
            Need customized wellness guidelines or physical training advice?{" "}
            <a href="#contact" className="text-teal-600 dark:text-teal-400 font-bold hover:underline">
              Speak to our physiotherapists.
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
