import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function AIGenieLanding() {
  const features = [
    {
      title: "Custom GPT Creation",
      description: "Build specialized AI tools like the ones I've made — from legal translators to brand builders.",
      link: "https://chatgpt.com/g/g-6750d272af4c8191ace9294460026f8e-ease-legalese"
    },
    {
      title: "Productivity with AI",
      description: "Automate research, summarization, email, and more with everyday AI workflows.",
      link: "https://chatgpt.com/g/g-67fe9d1e663081918cb423983cea4d4f-quickread"
    },
    {
      title: "No-Code AI Integration",
      description: "Use tools like Zapier and Make to connect GPTs and APIs without writing code.",
      link: "https://chatgpt.com/g/g-67d241239a88819195fd319fa422d375-ai-startup-disruptor"
    },
    {
      title: "Media Literacy & Critical Thinking",
      description: "Learn to use AI like Counterpoint to uncover bias and think more independently.",
      link: "https://chrome.google.com/webstore/detail/counterpoint/opposing-views/"
    },
    {
      title: "Ethical AI Use",
      description: "Understand the responsibilities of wielding powerful AI tools in a socially aware way.",
      link: "https://chatgpt.com/g/g-vJeDKxK4E-ai-risk"
    },
    {
      title: "AI for Your Career",
      description: "Apply AI to your specific job or business — whether you're in marketing, education, or beyond.",
      link: "https://chatgpt.com/g/g-aSFUXywWM-linkedin-luminary"
    },
  ];

  return (
    <div className="min-h-screen relative text-gray-800 px-6 py-12 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-64 -left-64 w-[700px] h-[700px] bg-green-200 rounded-full opacity-30 blur-3xl animate-pulse-slow" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-300 rounded-full opacity-20 blur-[160px] animate-bounce-slow" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-to-br from-green-100 via-white to-green-200 rounded-full opacity-40 blur-[180px] animate-spin-slow" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative">
        <div className="relative flex flex-col items-center justify-center mb-6 min-h-[100px] pt-12">
          <motion.div
            className="absolute bottom-0 flex flex-wrap justify-center gap-2"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
          >
            {"The AI Genie is Out of the Bottle".split(" ").map((word, index) => (
              <motion.span
                key={index}
                className="text-4xl sm:text-5xl font-extrabold tracking-tight gradient-text animate-gradient-flow"
                initial={{ y: 80, opacity: 0, scale: 0.8 }}
                animate={{ y: -20, opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <p className="text-xl text-gray-600 mt-6 mb-10">
          Learn how to use AI to supercharge your critical thinking, productivity, and creativity, like this site that was entirely generated with AI in just minutes.
        </p>

        <form
          action="https://formspree.io/f/mrbpnklr"
          method="POST"
          className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            className="p-3 border border-green-300 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <Button type="submit" className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700">
            Join the Bootcamp
          </Button>
        </form>
      </div>

      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-10">Choose Your AI Genie Bootcamp</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition">
                <CardContent className="p-6 flex flex-col h-full justify-between">
                  <div className="flex items-start space-x-3 mb-4">
                    <CheckCircle className="text-green-600 w-6 h-6 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-green-800">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                  <Button
                    className="mt-auto bg-green-500 text-white hover:bg-green-600 transition rounded-xl"
                    onClick={() => window.open(feature.link, "_blank")}
                  >
                    See Example
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
