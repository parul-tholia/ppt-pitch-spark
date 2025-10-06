import { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-tech.jpg';
import problemImage from '@/assets/problem-visual.jpg';
import solutionImage from '@/assets/solution-agents.jpg';
import impactImage from '@/assets/impact-visual.jpg';

const TOTAL_DURATION = 30000; // 30 seconds
const SECTIONS = [
  { id: 'intro', duration: 4000 },
  { id: 'problem', duration: 7000 },
  { id: 'team', duration: 4000 },
  { id: 'solution', duration: 8000 },
  { id: 'impact', duration: 7000 },
];

export const VideoPresentation = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed / TOTAL_DURATION) * 100;

      if (newProgress >= 100) {
        setProgress(100);
        setIsPlaying(false);
        clearInterval(interval);
        return;
      }

      setProgress(newProgress);

      // Calculate current section
      let accumulatedTime = 0;
      for (let i = 0; i < SECTIONS.length; i++) {
        accumulatedTime += SECTIONS[i].duration;
        if (elapsed < accumulatedTime) {
          setCurrentSection(i);
          break;
        }
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleReset = () => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentSection(0);
  };

  const handlePlayPause = () => {
    if (progress >= 100) {
      handleReset();
      setTimeout(() => setIsPlaying(true), 100);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-full h-screen bg-background overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />

      {/* Content sections */}
      <div className="relative z-10 h-full flex items-center justify-center p-8">
        {/* Intro Section */}
        {currentSection === 0 && (
          <div className="animate-fade-in text-center space-y-8">
            <div className="relative inline-block">
              <img
                src={heroImage}
                alt="Tech visualization"
                className="w-96 h-96 object-cover rounded-2xl shadow-glow-blue"
              />
              <div className="absolute inset-0 bg-gradient-electric opacity-20 rounded-2xl" />
            </div>
            <h1 className="text-7xl font-bold bg-gradient-electric bg-clip-text text-transparent">
              GitHub Repository
              <br />
              Analysis Dashboard
            </h1>
            <p className="text-2xl text-primary">
              Powered by AI • Built for Developers
            </p>
          </div>
        )}

        {/* Problem Section */}
        {currentSection === 1 && (
          <div className="animate-slide-in max-w-6xl grid grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-primary">The Problem</h2>
              <div className="space-y-4 text-xl text-muted-foreground">
                <p className="text-secondary text-2xl font-semibold">
                  Modern software projects are complex with sprawling dependencies and hidden risks.
                </p>
                <ul className="space-y-3 list-disc list-inside">
                  <li>Understanding repo architecture quickly</li>
                  <li>Identifying dead or useless code</li>
                  <li>Predicting risks before failures</li>
                  <li>Getting quick answers about repo health</li>
                </ul>
                <p className="text-accent font-medium">
                  Existing tools are fragmented, manual, and lack intelligence.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={problemImage}
                alt="Problem visualization"
                className="w-full h-auto rounded-2xl shadow-glow-pink animate-float"
              />
            </div>
          </div>
        )}

        {/* Team Section */}
        {currentSection === 2 && (
          <div className="animate-fade-in text-center space-y-12">
            <h2 className="text-6xl font-bold bg-gradient-vibrant bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-4 gap-8 max-w-5xl mx-auto">
              {['Developer 1', 'Developer 2', 'Developer 3', 'Developer 4'].map((name, idx) => (
                <div
                  key={idx}
                  className="space-y-4 animate-slide-in"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-tech shadow-glow-blue flex items-center justify-center">
                    <span className="text-5xl font-bold text-background">{idx + 1}</span>
                  </div>
                  <p className="text-xl font-semibold text-foreground">{name}</p>
                  <p className="text-sm text-muted-foreground">Team Member</p>
                </div>
              ))}
            </div>
            <p className="text-2xl text-primary">Four passionate developers united by innovation</p>
          </div>
        )}

        {/* Solution Section */}
        {currentSection === 3 && (
          <div className="animate-slide-in max-w-6xl grid grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={solutionImage}
                alt="AI agents solution"
                className="w-full h-auto rounded-2xl shadow-glow-orange animate-float"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-secondary">Our Solution</h2>
              <div className="space-y-4">
                <p className="text-2xl text-primary font-semibold">
                  Streamlit-based AI Dashboard powered by multiple specialized AI agents
                </p>
                <div className="space-y-3 text-lg">
                  <div className="p-4 rounded-lg bg-card border border-primary/20">
                    <p className="font-semibold text-primary">🎯 Architecture Visualization</p>
                    <p className="text-muted-foreground text-sm">Map modules and dependencies</p>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-secondary/20">
                    <p className="font-semibold text-secondary">🔍 Code Analysis</p>
                    <p className="text-muted-foreground text-sm">Scan quality, tests, and style</p>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-accent/20">
                    <p className="font-semibold text-accent">⚠️ Risk Prediction</p>
                    <p className="text-muted-foreground text-sm">Forecast vulnerabilities and debt</p>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-primary/20">
                    <p className="font-semibold text-primary">💬 Developer Chatbot</p>
                    <p className="text-muted-foreground text-sm">Explain issues and suggest fixes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Impact Section */}
        {currentSection === 4 && (
          <div className="animate-fade-in text-center space-y-12 max-w-6xl">
            <h2 className="text-6xl font-bold text-accent">The Impact</h2>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                <div className="text-5xl mb-4">⏱️</div>
                <h3 className="text-2xl font-bold text-primary mb-3">Time Savings</h3>
                <p className="text-muted-foreground">
                  Saves hours of manual analysis → instant repo health insights
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-2xl font-bold text-secondary mb-3">Risk Reduction</h3>
                <p className="text-muted-foreground">
                  Reduces technical debt by proactively identifying risks
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                <div className="text-5xl mb-4">💪</div>
                <h3 className="text-2xl font-bold text-accent mb-3">Empowered Decisions</h3>
                <p className="text-muted-foreground">
                  Empowers developers to make faster, safer decisions
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20">
                <div className="text-5xl mb-4">📊</div>
                <h3 className="text-2xl font-bold text-primary mb-3">Quality Tracking</h3>
                <p className="text-muted-foreground">
                  Helps managers and auditors track repo quality trends
                </p>
              </div>
            </div>
            <div className="relative mt-8">
              <img
                src={impactImage}
                alt="Impact visualization"
                className="w-full max-w-2xl mx-auto h-64 object-cover rounded-2xl shadow-glow-blue"
              />
            </div>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-20 px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Progress bar */}
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-electric transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Control buttons */}
          <div className="flex items-center justify-center gap-4">
            <Button
              onClick={handlePlayPause}
              size="lg"
              className="bg-gradient-electric hover:opacity-90 text-background font-semibold px-8"
            >
              {isPlaying ? (
                <>
                  <Pause className="mr-2 h-5 w-5" />
                  Pause
                </>
              ) : (
                <>
                  <Play className="mr-2 h-5 w-5" />
                  {progress >= 100 ? 'Replay' : 'Play'}
                </>
              )}
            </Button>
            <Button
              onClick={handleReset}
              variant="outline"
              size="lg"
              className="border-primary/20 hover:bg-primary/10"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset
            </Button>
          </div>

          {/* Section indicators */}
          <div className="flex justify-center gap-2">
            {SECTIONS.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 w-12 rounded-full transition-all ${
                  idx === currentSection
                    ? 'bg-primary shadow-glow-blue'
                    : idx < currentSection
                    ? 'bg-primary/50'
                    : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
