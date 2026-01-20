
import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Zap, 
  Globe, 
  Code, 
  Users, 
  CreditCard, 
  Smartphone, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X, 
  Sun, 
  Moon,
  TrendingUp,
  Cpu,
  Lock,
  Clock,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Sub-components ---

const Navbar = ({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: (v: boolean) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-dark py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-accent rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Zap className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-accent bg-clip-text text-transparent">FlowPay</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
          <a href="#developers" className="hover:text-cyan-400 transition-colors">Developers</a>
          <a href="#security" className="hover:text-cyan-400 transition-colors">Security</a>
          <a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-indigo-900" />}
          </button>
          <a href="#signup" className="hidden sm:block px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-indigo-950 font-bold rounded-full transition-all text-sm shadow-lg shadow-cyan-500/20">
            Sign In
          </a>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full glass-dark border-t border-white/10 p-4 space-y-4"
          >
            <a href="#features" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>Features</a>
            <a href="#developers" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>Developers</a>
            <a href="#security" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>Security</a>
            <a href="#pricing" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>Pricing</a>
            <a href="#signup" className="block w-full text-center px-5 py-3 bg-cyan-500 text-indigo-950 font-bold rounded-xl" onClick={() => setIsOpen(false)}>
              Start Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full"></div>
      <div className="absolute top-1/2 -left-24 w-72 h-72 bg-accent/10 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-4 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-bold uppercase tracking-widest">
              Available in 120+ Countries
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight text-slate-900 dark:text-white">
              The Future of Global <br />
              <span className="bg-gradient-to-r from-cyan-400 via-accent to-blue-500 bg-clip-text text-transparent">
                Payments is Flow.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Instant settlements, near-zero fees, and bank-grade security. Scale your business globally with a single integration that supports 100+ payment methods.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="#signup" className="w-full sm:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-indigo-950 font-extrabold rounded-2xl transition-all text-lg shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 group">
              Start Accepting Payments - Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#developers" className="w-full sm:w-auto px-8 py-4 glass-dark text-white font-bold rounded-2xl transition-all text-lg flex items-center justify-center gap-2 border border-white/10 hover:bg-white/5">
              View API Docs
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 flex flex-wrap justify-center items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
          >
            <p className="w-full text-sm font-medium mb-2 uppercase tracking-widest text-slate-500">Trusted by modern companies</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              <span className="text-2xl font-bold">VISA</span>
              <span className="text-2xl font-bold italic">Mastercard</span>
              <span className="text-2xl font-bold tracking-tighter">USDC</span>
              <span className="text-2xl font-bold italic">stripe</span>
              <span className="text-2xl font-bold">Square</span>
            </div>
          </motion.div>
        </div>

        {/* Mockup Dashboard */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative max-w-5xl mx-auto rounded-3xl p-1 bg-gradient-to-br from-cyan-400/20 via-accent/20 to-transparent shadow-2xl"
        >
          <div className="glass-dark rounded-[22px] overflow-hidden border border-white/10">
            <div className="h-8 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <div className="p-4 md:p-8 flex flex-col md:flex-row gap-8">
              <div className="flex-1 space-y-6">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-slate-400 text-sm">Monthly Volume</p>
                    <h3 className="text-3xl font-bold text-white">$1,420,500.00</h3>
                  </div>
                  <div className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-bold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +24%
                  </div>
                </div>
                <div className="h-32 w-full bg-gradient-to-t from-cyan-500/10 to-transparent rounded-lg relative overflow-hidden">
                   {/* Simplified wave svg */}
                   <svg className="absolute bottom-0 left-0 w-full h-16" viewBox="0 0 1440 320">
                     <path fill="rgba(0, 240, 255, 0.2)" fillOpacity="1" d="M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,213.3C672,235,768,245,864,229.3C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                   </svg>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <p className="text-slate-400 text-xs mb-1">Success Rate</p>
                    <p className="text-xl font-bold text-white">99.98%</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <p className="text-slate-400 text-xs mb-1">Avg. Latency</p>
                    <p className="text-xl font-bold text-white">412ms</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-64 space-y-4">
                <p className="text-slate-400 text-sm font-bold">Recent Transactions</p>
                {[
                  { name: 'Apple Store', amt: '-$1,299', status: 'Success' },
                  { name: 'SaaS Billing', amt: '+$4,500', status: 'Success' },
                  { name: 'Payout #923', amt: '-$12,000', status: 'Processing' },
                  { name: 'Card Checkout', amt: '+$124', status: 'Success' },
                ].map((t, i) => (
                  <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-white/5 border border-white/5">
                    <div>
                      <p className="text-sm font-bold text-white">{t.name}</p>
                      <p className="text-xs text-slate-500">{t.status}</p>
                    </div>
                    <p className={`text-sm font-bold ${t.amt.startsWith('+') ? 'text-cyan-400' : 'text-slate-300'}`}>{t.amt}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Comparison = () => {
  return (
    <section id="comparison" className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why leave traditional systems?</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">We've built the modern infrastructure you actually need.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center font-bold">X</span>
              Traditional Providers
            </h3>
            <div className="space-y-4">
              {[
                "2.9% + $0.30 fixed per transaction",
                "3-7 business day settlement times",
                "Fragmented local support",
                "Basic AI fraud detection with high false positives",
                "Clunky, legacy documentation"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 opacity-60">
                  <div className="w-5 h-5 rounded-full border border-slate-300 mt-0.5"></div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-3xl glass-dark border border-cyan-500/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl"></div>
            <h3 className="text-2xl font-bold flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-full bg-cyan-500 text-indigo-950 flex items-center justify-center font-bold">✓</span>
              FlowPay Solution
            </h3>
            <div className="space-y-4">
              {[
                "Flat 0.8% - 1.5% maximum fees",
                "T+0 Instant settlement for most currencies",
                "Support for 100+ local payment methods",
                "Neural-net fraud shield (0.01% error rate)",
                "One SDK for Web, Mobile, and IoT"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <p className="font-medium text-white">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-sm font-bold text-cyan-400 mb-1">THE IMPACT</p>
              <p className="text-2xl font-black text-white">Save 30-70% on processing fees.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-8 rounded-3xl glass border border-white/10 hover:border-cyan-500/30 transition-all group"
  >
    <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-500 group-hover:text-indigo-950 transition-all">
      <Icon className="w-7 h-7 text-cyan-400 group-hover:text-inherit" />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
  </motion.div>
);

const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-bold uppercase tracking-widest text-sm">Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Built for scale, speed, and safety.</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Everything you need to accept global payments, manage risk, and payout instantly.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            icon={Zap} 
            title="Instant Settlements" 
            desc="Don't wait weeks for your money. Receive funds in your local bank or wallet in real-time with T+0 settlements."
          />
          <FeatureCard 
            icon={Shield} 
            title="AI Fraud Shield" 
            desc="Our proprietary neural network analyzes 200+ signals per second to block fraud before it happens."
          />
          <FeatureCard 
            icon={Globe} 
            title="Global Support" 
            desc="Accept cards, mobile money, bank transfers, and even stablecoins across 120+ countries and 50+ currencies."
          />
          <FeatureCard 
            icon={Smartphone} 
            title="One-Click Checkout" 
            desc="Boost conversions by 40% with our hosted, mobile-optimized checkout pages that remember your customers."
          />
          <FeatureCard 
            icon={Code} 
            title="Developer First" 
            desc="Integrate in minutes with our clean SDKs for React, Node, Python, and Ruby. Powerful webhooks included."
          />
          <FeatureCard 
            icon={Users} 
            title="No-Code Links" 
            desc="No website? No problem. Create beautiful payment links and share them via WhatsApp, Instagram, or Email."
          />
        </div>
      </div>
    </section>
  );
};

const Workflow = () => {
  const steps = [
    { num: '01', title: 'Customer Pays', desc: 'They use their preferred method (Card, Crypto, or Bank).' },
    { num: '02', title: 'FlowPay Verifies', desc: 'AI fraud shield validates the transaction in under 200ms.' },
    { num: '03', title: 'Funds Arrive', desc: 'Your merchant dashboard updates with the instant settlement.' },
    { num: '04', title: 'You Scale', desc: 'Automate payouts to vendors and suppliers globally.' },
  ];

  return (
    <section className="py-24 bg-indigo-950 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="grid grid-cols-6 h-full">
          {Array.from({length: 36}).map((_, i) => (
            <div key={i} className="border border-white/10"></div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8">How it works. <br />Simplified for humans.</h2>
            <div className="space-y-12">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6 relative group">
                  {i !== steps.length - 1 && (
                    <div className="absolute left-[23px] top-12 bottom-[-48px] w-0.5 bg-gradient-to-b from-cyan-500 to-transparent"></div>
                  )}
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center font-bold text-cyan-400 group-hover:bg-cyan-500 group-hover:text-indigo-950 transition-colors shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-slate-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-accent/20 blur-2xl rounded-3xl"></div>
            <div className="glass-dark border border-white/10 rounded-3xl p-8 shadow-3xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse"></div>
                  <span className="text-sm font-bold uppercase tracking-widest text-cyan-400">Live Transaction Flow</span>
                </div>
                <Smartphone className="w-5 h-5 text-slate-500" />
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center animate-pulse">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center"><CreditCard className="w-5 h-5 text-indigo-400" /></div>
                    <div>
                      <p className="text-sm font-bold">New Payment</p>
                      <p className="text-xs text-slate-500">via Apple Pay</p>
                    </div>
                  </div>
                  <p className="font-bold text-white">$450.00</p>
                </div>
                <div className="p-4 rounded-xl bg-cyan-500 text-indigo-950 flex justify-between items-center scale-105 shadow-xl shadow-cyan-500/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center"><Shield className="w-5 h-5" /></div>
                    <div>
                      <p className="text-sm font-black">AI Verified</p>
                      <p className="text-xs font-bold opacity-70">Secured with FlowPay</p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center opacity-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center"><TrendingUp className="w-5 h-5 text-green-400" /></div>
                    <div>
                      <p className="text-sm font-bold">Settled</p>
                      <p className="text-xs text-slate-500">Instant payout available</p>
                    </div>
                  </div>
                  <p className="font-bold text-white">$450.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DeveloperSection = () => {
  const [activeTab, setActiveTab] = useState('react');
  
  const snippets = {
    react: `import { FlowPay } from '@flowpay/react';

const Checkout = () => {
  const handlePayment = async () => {
    const session = await FlowPay.createSession({
      amount: 45000,
      currency: 'USD',
      metadata: { orderId: 'FLW_12345' }
    });
    
    session.open();
  };

  return (
    <button onClick={handlePayment}>
      Pay with FlowPay
    </button>
  );
};`,
    node: `const flow = require('flowpay')('sk_live_...');

app.post('/webhook', (req, res) => {
  const event = flow.webhooks.constructEvent(
    req.body,
    req.headers['flow-signature'],
    process.env.WEBHOOK_SECRET
  );

  if (event.type === 'payment.succeeded') {
    const payment = event.data.object;
    // Payout triggered instantly
  }
});`,
    cli: `$ npm install @flowpay/sdk
$ flowpay login
$ flowpay keys create --type secret
$ flowpay webhooks listen --forward-to localhost:3000/webhook`
  };

  return (
    <section id="developers" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="glass-dark rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="bg-white/5 border-b border-white/5 px-6 py-4 flex justify-between items-center">
                <div className="flex gap-4">
                  {(['react', 'node', 'cli'] as const).map(tab => (
                    <button 
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`text-sm font-bold uppercase tracking-widest transition-colors ${activeTab === tab ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : 'text-slate-500'}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-white/10"></div>
                  <div className="w-3 h-3 rounded-full bg-white/10"></div>
                  <div className="w-3 h-3 rounded-full bg-white/10"></div>
                </div>
              </div>
              <div className="p-6 bg-[#0f172a] font-mono text-sm leading-relaxed overflow-x-auto">
                <pre className="text-cyan-400">
                  <code>{snippets[activeTab]}</code>
                </pre>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold mb-6">
              <Code className="w-4 h-4" /> INTEGRATE IN MINUTES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Designed by developers, for developers.</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8 text-lg">Our API is built on REST principles, featuring predictable resource-oriented URLs, form-encoded requests, and JSON responses. It's the most powerful payment SDK you'll ever use.</p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="space-y-2">
                <CheckCircle2 className="text-cyan-400 w-5 h-5" />
                <p className="font-bold">Webhook Events</p>
                <p className="text-sm text-slate-500">Real-time alerts for 50+ event types.</p>
              </div>
              <div className="space-y-2">
                <CheckCircle2 className="text-cyan-400 w-5 h-5" />
                <p className="font-bold">Smart Retries</p>
                <p className="text-sm text-slate-500">Automatic exponential backoff logic.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-cyan-500 text-indigo-950 font-bold rounded-xl hover:bg-cyan-400 transition-all flex items-center gap-2">
                Read Documentation <ExternalLink className="w-4 h-4" />
              </button>
              <button className="px-6 py-3 border border-white/10 rounded-xl hover:bg-white/5 transition-all font-bold">
                Get API Key
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const items = [
    { 
      quote: "The instant settlement feature changed our cash flow. We no longer wait 7 days for funds to clear.", 
      author: "Sarah Jenkins", 
      role: "Founder, LuxeEcom", 
      metric: "+47% Conversion",
      img: "https://picsum.photos/seed/sarah/100/100"
    },
    { 
      quote: "FlowPay's API is the cleanest we've integrated. We went live in 2 days and saved $18k in monthly fees.", 
      author: "Markus Chen", 
      role: "CTO, SaaSly", 
      metric: "Saved $18k/mo",
      img: "https://picsum.photos/seed/markus/100/100"
    },
    { 
      quote: "The fraud protection is unmatched. Our chargeback rate dropped to near zero within a month.", 
      author: "Elena Rodriguez", 
      role: "Operations, GlobalShop", 
      metric: "2.3s Faster Checkout",
      img: "https://picsum.photos/seed/elena/100/100"
    },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Loved by the next generation of commerce.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="p-8 rounded-3xl glass border border-white/10 dark:bg-indigo-950/50 relative">
              <div className="absolute top-8 right-8 text-cyan-400 opacity-20"><Zap className="w-12 h-12" /></div>
              <div className="flex items-center gap-4 mb-6">
                <img src={item.img} alt={item.author} className="w-12 h-12 rounded-full border-2 border-cyan-400/30" />
                <div>
                  <p className="font-bold">{item.author}</p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
              </div>
              <p className="text-lg italic text-slate-600 dark:text-slate-300 mb-8">"{item.quote}"</p>
              <div className="pt-6 border-t border-white/5">
                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-black uppercase tracking-widest">
                  {item.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Security = () => {
  return (
    <section id="security" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="glass-dark border border-white/10 rounded-[40px] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-500/5 to-transparent pointer-events-none"></div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center mb-8 shadow-2xl shadow-cyan-500/20">
                <Lock className="w-8 h-8 text-indigo-950" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Enterprise-grade security as a standard.</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">We protect your funds and data with the most advanced security protocols in the financial industry. From PCI-DSS Level 1 compliance to military-grade encryption.</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {[
                  { icon: Shield, text: "PCI-DSS Level 1" },
                  { icon: CheckCircle2, text: "ISO 27001" },
                  { icon: Globe, text: "GDPR Ready" },
                  { icon: Lock, text: "AES-256 Auth" },
                  { icon: Cpu, text: "SOC 2 Type II" },
                  { icon: Zap, text: "2FA Everywhere" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/5">
                    <item.icon className="w-6 h-6 text-cyan-400" />
                    <span className="text-xs font-bold text-slate-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex justify-center">
               <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border border-cyan-500/20 flex items-center justify-center relative">
                  <div className="w-48 h-48 md:w-72 md:h-72 rounded-full border border-cyan-500/40 flex items-center justify-center">
                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border border-cyan-500/60 flex items-center justify-center">
                      <Shield className="w-16 h-16 md:w-24 md:h-24 text-cyan-400 animate-pulse" />
                    </div>
                  </div>
                  {/* Floating dots for effect */}
                  <div className="absolute top-10 left-10 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-10 right-10 w-3 h-3 bg-accent rounded-full animate-ping delay-700"></div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, transparent pricing.</h2>
          <p className="text-slate-500">No hidden fees. No monthly contracts. Scale with us.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              tier: "Starter", 
              price: "Free", 
              sub: "Best for freelancers", 
              features: ["1.5% processing fee", "Next-day settlement", "Basic support", "5 payment methods"],
              btn: "Get Started",
              popular: false
            },
            { 
              tier: "Growth", 
              price: "0.8%", 
              sub: "For scaling businesses", 
              features: ["0.8% processing fee", "Instant settlement", "24/7 priority support", "100+ payment methods", "Custom checkout branding"],
              btn: "Start Free Trial",
              popular: true
            },
            { 
              tier: "Enterprise", 
              price: "Custom", 
              sub: "For high volume", 
              features: ["Volume-based discounts", "Dedicated account manager", "Custom settlement terms", "Whitelabel dashboard"],
              btn: "Talk to Sales",
              popular: false
            }
          ].map((plan, i) => (
            <div key={i} className={`p-8 rounded-[32px] glass border transition-all ${plan.popular ? 'border-cyan-500 scale-105 shadow-2xl relative' : 'border-white/10 opacity-80'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-cyan-500 text-indigo-950 text-xs font-black rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.tier}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-black">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-slate-500">/txn</span>}
              </div>
              <p className="text-sm text-slate-500 mb-8">{plan.sub}</p>
              <div className="space-y-4 mb-10">
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <CheckCircle2 className={`w-5 h-5 ${plan.popular ? 'text-cyan-400' : 'text-slate-500'}`} />
                    <span className="text-sm font-medium">{f}</span>
                  </div>
                ))}
              </div>
              <button className={`w-full py-4 rounded-2xl font-black transition-all ${plan.popular ? 'bg-cyan-500 text-indigo-950 shadow-lg shadow-cyan-500/20 hover:bg-cyan-400' : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'}`}>
                {plan.btn}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section id="signup" className="py-24 relative overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-950 pointer-events-none"></div>
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent opacity-50"></div>
       
       <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">Ready to get paid <br /><span className="text-cyan-400">faster?</span></h2>
          <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto">Join 15,000+ businesses using FlowPay to handle their global infrastructure. Start for free today.</p>
          
          <form className="bg-white/5 p-2 rounded-3xl border border-white/10 flex flex-col sm:flex-row gap-2 backdrop-blur-xl mb-8">
            <input 
              type="email" 
              placeholder="Enter your business email" 
              className="flex-1 bg-transparent border-none focus:ring-0 px-6 py-4 text-white font-medium outline-none"
            />
            <select className="bg-white/10 border-none text-white px-4 py-4 rounded-xl font-bold outline-none cursor-pointer">
              <option className="bg-indigo-950">E-commerce</option>
              <option className="bg-indigo-950">SaaS</option>
              <option className="bg-indigo-950">Marketplace</option>
              <option className="bg-indigo-950">Freelancer</option>
            </select>
            <button className="px-10 py-4 bg-cyan-500 text-indigo-950 font-black rounded-2xl hover:bg-cyan-400 transition-all shadow-xl shadow-cyan-500/20 whitespace-nowrap">
              Create Free Account
            </button>
          </form>
          
          <p className="text-slate-500 font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" /> No Credit Card Required • Setup in 2 minutes
          </p>
       </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 border-t border-white/5 bg-indigo-950 text-slate-400">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-12">
        <div className="col-span-2 lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Zap className="text-cyan-400 w-6 h-6" />
            <span className="text-2xl font-black text-white">FlowPay</span>
          </div>
          <p className="max-w-xs mb-8 text-sm leading-relaxed">Modern payments infrastructure for the internet. Fast, secure, and developer-first.</p>
          <div className="flex gap-4">
            {/* Social Icons Placeholders */}
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors"><Globe className="w-4 h-4" /></div>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors"><Zap className="w-4 h-4" /></div>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors"><Users className="w-4 h-4" /></div>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Product</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Checkout</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Integrations</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Smart Retries</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Fraud Protection</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Developers</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-cyan-400 transition-colors">API Docs</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">SDKs</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Webhooks</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">System Status</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Company</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-cyan-400 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Legal</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>&copy; 2025 FlowPay Technologies Inc. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen selection:bg-cyan-500/30">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main>
        <Hero />
        <Comparison />
        <Features />
        <Workflow />
        <DeveloperSection />
        <Testimonials />
        <Security />
        <Pricing />
        <FinalCTA />
      </main>

      <Footer />

      {/* Floating Mobile CTA */}
      <div className="fixed bottom-6 right-6 sm:hidden z-50">
        <button className="w-14 h-14 bg-cyan-500 text-indigo-950 rounded-full shadow-2xl flex items-center justify-center animate-bounce">
          <Zap className="w-6 h-6 fill-current" />
        </button>
      </div>
    </div>
  );
}
