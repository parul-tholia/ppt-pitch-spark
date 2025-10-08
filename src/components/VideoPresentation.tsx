import { useState, useEffect } from 'react';
import { Play, Sparkles, Zap, Shield, TrendingUp, Users, Network, FileX, AlertTriangle, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-tech.jpg';
import problemImage from '@/assets/problem-visual.jpg';
import solutionImage from '@/assets/solution-agents.jpg';
import impactImage from '@/assets/impact-visual.jpg';
import ahishaImage from '@/assets/team-ahisha.jpeg';
import tanuImage from '@/assets/team-tanu-original.png';
import faizaImage from '@/assets/team-faiza.jpeg';
import parulImage from '@/assets/team-parul-cropped.jpg';

const TOTAL_DURATION = 20000; // 20 seconds
const SECTIONS = [
  { id: 'intro', duration: 3000 },
  { id: 'problem', duration: 4500 },
  { id: 'team', duration: 3000 },
  { id: 'solution', duration: 5000 },
  { id: 'impact', duration: 4500 },
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
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
        <div className="absolute top-20 right-20 w-3 h-3 bg-secondary rounded-full animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-accent rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-10 right-40 w-3 h-3 bg-primary rounded-full animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-40 left-1/3 w-2 h-2 bg-secondary rounded-full animate-pulse-glow" style={{ animationDelay: '0.7s' }} />
        <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-accent rounded-full animate-pulse-glow" style={{ animationDelay: '1.2s' }} />
      </div>
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />

      {/* Content sections */}
      <div className="relative z-10 h-full flex items-center justify-center p-8">
        {/* Intro Section */}
        {currentSection === 0 && (
          <div className="animate-fade-in text-center space-y-8">
            <div className="relative inline-block group">
              <img
                src={heroImage}
                alt="Tech visualization"
                className="w-96 h-96 object-cover rounded-2xl shadow-glow-blue transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-electric opacity-20 rounded-2xl animate-pulse-glow" />
              <Sparkles className="absolute top-4 right-4 text-primary w-8 h-8 animate-pulse-glow" />
              <Zap className="absolute bottom-4 left-4 text-accent w-8 h-8 animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
            </div>
            <h1 className="text-7xl font-bold bg-gradient-electric bg-clip-text text-transparent animate-slide-in">
              GitHub Repository
              <br />
              Analysis Dashboard
            </h1>
            <div className="flex items-center justify-center gap-3 text-2xl text-primary animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Sparkles className="w-6 h-6" />
              <span>Powered by AI</span>
              <span>•</span>
              <span>Built for Developers</span>
              <Zap className="w-6 h-6" />
            </div>
          </div>
        )}

        {/* Problem Section */}
        {currentSection === 1 && (
          <div className="animate-fade-in text-center space-y-10 max-w-6xl">
            <h2 className="text-6xl font-bold text-primary flex items-center justify-center gap-4">
              <Zap className="w-12 h-12" />
              The Problem
            </h2>
            <p className="text-2xl text-secondary font-semibold animate-fade-in">
              Complex repos with hidden risks and fragmented tools
            </p>
            <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-glow-blue animate-slide-in group cursor-pointer">
                <Network className="text-primary w-12 h-12 mb-4 mx-auto transition-transform duration-300 group-hover:rotate-12" />
                <h3 className="text-xl font-bold text-primary">Complex Architecture</h3>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 transition-all duration-300 hover:scale-105 hover:shadow-glow-pink animate-slide-in group cursor-pointer" style={{ animationDelay: '0.1s' }}>
                <FileX className="text-secondary w-12 h-12 mb-4 mx-auto transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-bold text-secondary">Dead Code</h3>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 transition-all duration-300 hover:scale-105 hover:shadow-glow-orange animate-slide-in group cursor-pointer" style={{ animationDelay: '0.2s' }}>
                <AlertTriangle className="text-accent w-12 h-12 mb-4 mx-auto transition-transform duration-300 group-hover:rotate-[-12deg]" />
                <h3 className="text-xl font-bold text-accent">Hidden Risks</h3>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/5 border border-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-glow-blue animate-slide-in group cursor-pointer" style={{ animationDelay: '0.3s' }}>
                <HelpCircle className="text-primary w-12 h-12 mb-4 mx-auto transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-bold text-primary">No Quick Answers</h3>
              </div>
            </div>
          </div>
        )}

        {/* Team Section */}
        {currentSection === 2 && (
          <div className="animate-fade-in text-center space-y-12">
            <h2 className="text-6xl font-bold bg-gradient-vibrant bg-clip-text text-transparent flex items-center justify-center gap-4">
              <Users className="w-12 h-12 text-secondary" />
              Meet Our Team
            </h2>
            <div className="grid grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { name: 'Ahisha', image: ahishaImage },
                { name: 'Tanu', image: tanuImage },
                { name: 'Faiza', image: faizaImage },
                { name: 'Parul', image: parulImage }
              ].map((member, idx) => (
                <div
                  key={idx}
                  className="space-y-4 animate-slide-in group cursor-pointer"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden shadow-glow-blue transition-transform duration-300 group-hover:scale-110 group-hover:shadow-glow-pink">
                    {currentSection === 2 && (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover object-center"
                      />
                    )}
                    <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-pulse-glow" />
                  </div>
                  <p className="text-xl font-semibold text-foreground">{member.name}</p>
                  <p className="text-sm text-muted-foreground">Team Member</p>
                </div>
              ))}
            </div>
            <p className="text-2xl text-primary flex items-center justify-center gap-3 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Sparkles className="w-6 h-6" />
              Four passionate developers united by innovation
              <Sparkles className="w-6 h-6" />
            </p>
          </div>
        )}

        {/* Solution Section */}
        {currentSection === 3 && (
          <div className="animate-slide-in max-w-6xl grid grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-tech opacity-20 rounded-3xl blur-xl animate-pulse-glow" />
              <img
                src={solutionImage}
                alt="AI agents solution"
                className="relative w-full h-auto rounded-2xl shadow-glow-orange animate-float"
              />
              <Sparkles className="absolute top-4 right-4 text-accent w-10 h-10 animate-pulse-glow" />
            </div>
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-secondary flex items-center gap-3">
                <Zap className="w-10 h-10" />
                Our Solution
              </h2>
              <div className="space-y-4">
                <p className="text-2xl text-primary font-semibold animate-fade-in">
                  Streamlit-based AI Dashboard powered by multiple specialized AI agents
                </p>
                <div className="space-y-3 text-lg">
                  <div className="p-4 rounded-lg bg-card border border-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-glow-blue animate-slide-in cursor-pointer" style={{ animationDelay: '0.1s' }}>
                    <p className="font-semibold text-primary flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      Architecture Visualization
                    </p>
                    <p className="text-muted-foreground text-sm">Map modules and dependencies</p>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-secondary/20 transition-all duration-300 hover:scale-105 hover:shadow-glow-pink animate-slide-in cursor-pointer" style={{ animationDelay: '0.2s' }}>
                    <p className="font-semibold text-secondary flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      Code Analysis
                    </p>
                    <p className="text-muted-foreground text-sm">Scan quality, tests, and style</p>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-accent/20 transition-all duration-300 hover:scale-105 hover:shadow-glow-orange animate-slide-in cursor-pointer" style={{ animationDelay: '0.3s' }}>
                    <p className="font-semibold text-accent flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      Risk Prediction
                    </p>
                    <p className="text-muted-foreground text-sm">Forecast vulnerabilities and debt</p>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-glow-blue animate-slide-in cursor-pointer" style={{ animationDelay: '0.4s' }}>
                    <p className="font-semibold text-primary flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      Developer Chatbot
                    </p>
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
            <h2 className="text-6xl font-bold text-accent flex items-center justify-center gap-4">
              <TrendingUp className="w-12 h-12" />
              The Impact
            </h2>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-glow-blue animate-slide-in group cursor-pointer">
                <Zap className="text-primary w-12 h-12 mb-4 mx-auto transition-transform duration-300 group-hover:rotate-12" />
                <h3 className="text-2xl font-bold text-primary mb-3">Time Savings</h3>
                <p className="text-muted-foreground">
                  Saves hours of manual analysis → instant repo health insights
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 transition-all duration-300 hover:scale-105 hover:shadow-glow-pink animate-slide-in group cursor-pointer" style={{ animationDelay: '0.1s' }}>
                <Shield className="text-secondary w-12 h-12 mb-4 mx-auto transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-2xl font-bold text-secondary mb-3">Risk Reduction</h3>
                <p className="text-muted-foreground">
                  Reduces technical debt by proactively identifying risks
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 transition-all duration-300 hover:scale-105 hover:shadow-glow-orange animate-slide-in group cursor-pointer" style={{ animationDelay: '0.2s' }}>
                <Sparkles className="text-accent w-12 h-12 mb-4 mx-auto transition-transform duration-300 group-hover:rotate-180" />
                <h3 className="text-2xl font-bold text-accent mb-3">Empowered Decisions</h3>
                <p className="text-muted-foreground">
                  Empowers developers to make faster, safer decisions
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-glow-blue animate-slide-in group cursor-pointer" style={{ animationDelay: '0.3s' }}>
                <TrendingUp className="text-primary w-12 h-12 mb-4 mx-auto transition-transform duration-300 group-hover:translate-y-[-4px]" />
                <h3 className="text-2xl font-bold text-primary mb-3">Quality Tracking</h3>
                <p className="text-muted-foreground">
                  Helps managers and auditors track repo quality trends
                </p>
              </div>
            </div>
            <div className="relative mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="absolute -inset-4 bg-gradient-electric opacity-20 rounded-3xl blur-xl animate-pulse-glow" />
              <img
                src={impactImage}
                alt="Impact visualization"
                className="relative w-full max-w-2xl mx-auto h-64 object-cover rounded-2xl shadow-glow-blue"
              />
            </div>
          </div>
        )}
      </div>

      {/* Controls - Only show when not playing */}
      {!isPlaying && (
        <div className="absolute bottom-8 left-0 right-0 z-20 px-8 animate-fade-in">
          <div className="max-w-4xl mx-auto space-y-4">
            {/* Progress bar */}
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden shadow-glow-blue">
              <div
                className="h-full bg-gradient-electric transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Control button */}
            <div className="flex items-center justify-center">
              <Button
                onClick={handlePlayPause}
                size="lg"
                className="bg-gradient-electric hover:opacity-90 text-background font-semibold px-12 py-6 text-xl shadow-glow-blue transition-all duration-300 hover:scale-110"
              >
                <Play className="mr-3 h-6 w-6" />
                {progress >= 100 ? 'Replay Presentation' : 'Start Presentation'}
              </Button>
            </div>

            {/* Section indicators */}
            <div className="flex justify-center gap-3">
              {SECTIONS.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-3 w-16 rounded-full transition-all duration-300 ${
                    idx === currentSection
                      ? 'bg-primary shadow-glow-blue scale-110'
                      : idx < currentSection
                      ? 'bg-primary/50'
                      : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Minimal progress indicator while playing */}
      {isPlaying && (
        <div className="absolute bottom-4 left-0 right-0 z-20 px-8 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <div className="w-full h-1 bg-muted/30 rounded-full overflow-hidden backdrop-blur-sm">
              <div
                className="h-full bg-gradient-electric transition-all duration-100 shadow-glow-blue"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
