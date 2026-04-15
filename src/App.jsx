import { useState } from "react";
import {
  Brain,
  Sparkles,
  Target,
  Mail,
  CheckCircle,
  Bot,
  Rocket,
  BarChart3,
  Zap,
  Workflow,
  Globe,
  Database,
} from "lucide-react";

export default function ManifestMindsetMastery() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email.includes("@")) setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white p-6 overflow-hidden">

      {/* HERO */}
      <div className="text-center py-24 relative">
        <h1 className="text-4xl md:text-6xl font-bold">
          Fully Autonomous AI Business System
        </h1>
        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
          An end-to-end self-operating digital business that generates content,
          attracts traffic, builds audiences, and converts sales — automatically.
        </p>
      </div>

      {/* CORE LOOP */}
      <div className="max-w-4xl mx-auto text-center mt-16">
        <h2 className="text-2xl md:text-3xl font-bold">Autonomous Growth Loop</h2>
        <p className="text-gray-400 mt-4">
          AI Generation → Content Distribution → Traffic Capture → Email Automation → Sales Conversion → Data Feedback → Optimization
        </p>
      </div>

      {/* SYSTEM ARCHITECTURE */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-20">

        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          <Bot className="mb-3" />
          <h2 className="text-xl font-semibold">AI Content Agent</h2>
          <p className="text-gray-400 mt-2">
            Generates viral scripts, hooks, and long-form content using psychological conversion models.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          <Rocket className="mb-3" />
          <h2 className="text-xl font-semibold">Autonomous Distribution Engine</h2>
          <p className="text-gray-400 mt-2">
            Automatically pushes content across TikTok, YouTube Shorts, Instagram, and SEO blog channels.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          <Mail className="mb-3" />
          <h2 className="text-xl font-semibold">AI Email Sales System</h2>
          <p className="text-gray-400 mt-2">
            7–14 day automated persuasion sequences that convert subscribers into buyers.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          <BarChart3 className="mb-3" />
          <h2 className="text-xl font-semibold">Conversion Intelligence Dashboard</h2>
          <p className="text-gray-400 mt-2">
            Tracks viral content, engagement signals, and sales performance to optimize scaling decisions.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          <Workflow className="mb-3" />
          <h2 className="text-xl font-semibold">Automation Orchestration Layer</h2>
          <p className="text-gray-400 mt-2">
            Connects APIs, webhooks, and scheduled workflows into one self-running system.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          <Globe className="mb-3" />
          <h2 className="text-xl font-semibold">Multi-Platform Deployment</h2>
          <p className="text-gray-400 mt-2">
            Deploys content and funnels across global platforms for continuous traffic acquisition.
          </p>
        </div>
      </div>

      {/* AUTONOMOUS LOOP */}
      <div className="max-w-4xl mx-auto text-center mt-24">
        <h2 className="text-2xl md:text-3xl font-bold">How the System Runs Itself</h2>
        <p className="text-gray-400 mt-4 leading-7">
          1. AI generates high-performing content daily <br />
          2. System auto-distributes across platforms <br />
          3. Traffic flows into landing pages <br />
          4. Email sequences nurture leads <br />
          5. Funnels convert automatically <br />
          6. Data feeds back into optimization
        </p>
      </div>

      {/* EMAIL CAPTURE */}
      <div className="max-w-xl mx-auto mt-20 bg-gray-900 p-6 rounded-xl text-center border border-gray-800">
        {!submitted ? (
          <>
            <h2 className="text-xl font-semibold">Join the Autonomous System</h2>

            <input
              className="mt-4 w-full p-3 rounded bg-black border border-gray-700 text-white"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              className="mt-4 px-6 py-3 bg-white text-black rounded font-semibold hover:opacity-80"
              onClick={handleSubmit}
            >
              Get Access
            </button>
          </>
        ) : (
          <CheckCircle className="text-green-400 mx-auto w-10 h-10" />
        )}
      </div>

      {/* FINAL CTA */}
      <div className="text-center mt-24 mb-10">
        <h3 className="text-xl md:text-2xl font-semibold">
          You are no longer building a business. You are building an autonomous system.
        </h3>

        <button className="mt-4 px-10 py-4 text-lg bg-white text-black rounded font-semibold hover:opacity-80">
          Activate AI Business System
        </button>
      </div>

    </div>
  );
}
