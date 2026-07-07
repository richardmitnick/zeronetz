import { motion } from 'motion/react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How quickly can you start?",
    answer: "Most engagements begin within 4-6 weeks of initial consultation. For urgent pre-launch assessments, we offer expedited onboarding."
  },
  {
    question: "What information do you need to get started?",
    answer: "We will need a brief overview of your game/platform, infrastructure details, launch timeline, and specific security concerns."
  },
  {
    question: "Do you work under NDA?",
    answer: "Yes. All consultations and engagements are automatically covered by our standard NDA. We can also work under your company's NDA if preferred."
  },
  {
    question: "What are typical engagement costs?",
    answer: "Every project we handle is custom-scoped to your specific infrastructure. The most efficient way to get accurate pricing is to book a brief, no-commitment consultation. We can typically provide a clear price indication during our first call so you can plan accordingly."
  }
];

export default function FAQSection() {
  return (
    <section className="py-24 md:py-32 border-t border-white/[0.03] bg-black/35 backdrop-blur-lg" id="faq-section">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 space-y-3 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Common Questions</h2>
          <p className="text-sm text-zinc-400 font-medium">
            Quick answers before you reach out
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-2xl border border-white/[0.04] bg-[#0c0c0e]/60 backdrop-blur-md p-6 transition-all duration-300 hover:border-white/[0.08] hover:bg-[#0c0c0e]/80"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <h3 className="text-sm font-bold text-zinc-100 mb-2">
                {item.question}
              </h3>
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-sans">
                {item.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
