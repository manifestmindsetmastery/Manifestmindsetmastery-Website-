import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Brain, Sparkles, Target, Mail, CheckCircle, Bot, Rocket, BarChart3, Zap, Workflow, Globe, Database } from "lucide-react";
import { useState } from "react";

export default function ManifestMindsetMastery() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email.includes("@")) setSubmitted(true);
  };

  return (
    <>
      {/* SEO META TAGS */}
      <head>
        <title>Manifest Mindset Mastery | Fully Autonomous AI Business System</title>
        <meta
          name="description"
          content="A fully autonomous AI-powered business system that generates content, drives traffic, captures leads, and automates sales through psychology-driven funnels and automation pipelines."
        />
      </head>

      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white p-6 overflow-hidden">

        {/* HERO */}
        <div className="text-center py-24 z-10 relative">
          <motion.h1 className="text-6xl font-bold">
            Fully Autonomous AI Business System
          </motion.h1>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            An end-to-end self-operating digital business that generates content, attracts traffic, builds audiences, and converts sales — automatically.
          </p>
        </div>

        {/* CORE LOOP */}
        <div className="max-w-4xl mx-auto text-center mt-16">
          <h2 className="text-3xl font-bold">Autonomous Growth Loop</h2>
          <p className="text-gray-400 mt-4">
            AI Generation → Content Distribution → Traffic Capture → Email Automation → Sales Conversion → Data Feedback → Optimization
          </p>
        </div>

        {/* SYSTEM ARCHITECTURE */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-20">

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <Bot className="mb-3" />
              <h2 className="text-xl font-semibold">AI Content Agent</h2>
              <p className="text-gray-400 mt-2">
                Generates viral scripts, hooks, and long-form content using psychological conversion models.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <Rocket className="mb-3" />
              <h2 className="text-xl font-semibold">Autonomous Distribution Engine</h2>
              <p className="text-gray-400 mt-2">
                Automatically pushes content across TikTok, YouTube Shorts, Instagram, and SEO blog channels.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <Mail className="mb-3" />
              <h2 className="text-xl font-semibold">AI Email Sales System</h2>
              <p className="text-gray-400 mt-2">
                7–14 day automated persuasion sequences that convert subscribers into buyers.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <BarChart3 className="mb-3" />
              <h2 className="text-xl font-semibold">Conversion Intelligence Dashboard</h2>
              <p className="text-gray-400 mt-2">
                Tracks viral content, engagement signals, and sales performance to optimize scaling decisions.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <Workflow className="mb-3" />
              <h2 className="text-xl font-semibold">Automation Orchestration Layer</h2>
              <p className="text-gray-400 mt-2">
                Connects APIs, webhooks, and scheduled workflows into one self-running system.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <Globe className="mb-3" />
              <h2 className="text-xl font-semibold">Multi-Platform Deployment</h2>
              <p className="text-gray-400 mt-2">
                Deploys content and funnels across global platforms for continuous traffic acquisition.
              </p>
            </CardContent>
          </Card>

        </div>

        {/* AUTONOMOUS LOOP EXPLANATION */}
        <div className="max-w-4xl mx-auto text-center mt-24">
          <h2 className="text-3xl font-bold">How the System Runs Itself</h2>
          <p className="text-gray-400 mt-4">
            1. AI generates high-performing content daily
            <br />
            2. System auto-distributes across platforms
            <br />
            3. Traffic flows into landing pages
            <br />
            4. Email sequences automatically nurture leads
            <br />
            5. Sales funnels convert without manual input
            <br />
            6. Analytics feed back into AI optimization
          </p>
        </div>

        {/* DATA LAYER */}
        <div className="max-w-4xl mx-auto text-center mt-20">
          <h2 className="text-3xl font-bold">Intelligence Layer</h2>
          <p className="text-gray-400 mt-4">
            The system continuously learns from engagement data, click-through rates, and conversions to refine future outputs automatically.
          </p>
        </div>

        {/* EMAIL CAPTURE */}
        <div className="max-w-xl mx-auto mt-20 bg-gray-900 p-6 rounded-xl text-center">
          {!submitted ? (
            <>
              <h2 className="text-xl font-semibold">Join the Autonomous System</h2>
              <Input
                className="mt-4"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button className="mt-4" onClick={handleSubmit}>Get Access</Button>
            </>
          ) : (
            <CheckCircle className="text-green-400 mx-auto" />
          )}
        </div>

        {/* FINAL CTA */}
        <div className="text-center mt-24 mb-10">
          <h3 className="text-2xl font-semibold">
            You are no longer building a business. You are building an autonomous system.
          </h3>
          <Button className="mt-4 px-10 py-4 text-lg">
            Activate AI Business System
          </Button>
        </div>

      </div>
    </>
  );
}
