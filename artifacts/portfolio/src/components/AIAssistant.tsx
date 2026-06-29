import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolio';

type Message = {
  id: string;
  sender: 'bot' | 'user';
  text: React.ReactNode;
  isTyping?: boolean;
};

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Hi there! I am an AI assistant for Nidhish. Ask me anything about his projects, skills, or experience!',
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (query: string): React.ReactNode => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('who') || lowerQuery.includes('about')) {
      return "Nidhish is a 2nd-year CSE (AI & ML) student at Acropolis Institute. He's a passionate Backend Developer with interests in AI and Cybersecurity. He loves building secure, scalable systems.";
    }
    if (lowerQuery.includes('project')) {
      return (
        <div className="space-y-2">
          <p>Here are his featured projects:</p>
          <ul className="list-disc pl-4 text-sm space-y-1">
            <li><strong>PhishGuard AI:</strong> AI phishing detection (React, Node, Gemini)</li>
            <li><strong>DSA Tracker:</strong> Productivity platform for coders</li>
            <li><strong>Career Copilot:</strong> AI career guidance platform</li>
            <li><strong>Face Recognition Attendance:</strong> Computer vision with OpenCV</li>
          </ul>
        </div>
      );
    }
    if (lowerQuery.includes('skill') || lowerQuery.includes('tech')) {
      return "He's proficient in Python, C++, React, Node.js, and databases like MongoDB. For AI/Data Science, he uses NumPy, Pandas, OpenCV, and TensorFlow.";
    }
    if (lowerQuery.includes('hackathon') || lowerQuery.includes('achievement')) {
      return "He won 2nd Place at the Intel AI Hackathon as Team Leader! He also published a research paper in the GACC Book on Panini's Astadhyayi.";
    }
    if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('hire')) {
      return `You can reach him at ${PORTFOLIO_DATA.personal.email} or connect on LinkedIn. He's currently open to technical internships!`;
    }
    if (lowerQuery.includes('resume') || lowerQuery.includes('cv')) {
      return (
        <a href={PORTFOLIO_DATA.personal.resumeUrl} target="_blank" rel="noreferrer" className="text-primary hover:underline font-medium flex items-center gap-1">
          Click here to download his Resume <Sparkles className="w-3 h-3" />
        </a>
      );
    }
    
    return "I'm a simple bot, so I might not understand everything. Try asking about his 'skills', 'projects', 'hackathons', or 'resume'!";
  };

  const handleSend = (e?: React.FormEvent, chipText?: string) => {
    e?.preventDefault();
    const userQuery = (chipText ?? input).trim();
    if (!userQuery) return;
    const newUserMsg: Message = { id: Date.now().toString(), sender: 'user', text: userQuery };
    
    setMessages(prev => [...prev, newUserMsg]);
    setInput('');

    // Simulate typing
    const typingId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, { id: typingId, sender: 'bot', text: '...', isTyping: true }]);

    setTimeout(() => {
      setMessages(prev => prev.map(msg => 
        msg.id === typingId 
          ? { id: typingId, sender: 'bot', text: generateResponse(userQuery) }
          : msg
      ));
    }, 1000);
  };

  const suggestionChips = ['Show projects', 'Skills', 'Download Resume', 'Contact info'];

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-2xl flex items-center justify-center z-[60] hover-target"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, originX: 1, originY: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 h-[500px] max-h-[70vh] glass-card rounded-2xl flex flex-col overflow-hidden z-[60] border border-border/50 shadow-2xl shadow-primary/10"
          >
            {/* Header */}
            <div className="bg-primary/10 border-b border-border/50 p-4 flex items-center gap-3 backdrop-blur-md">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground shrink-0">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Portfolio Assistant</h3>
                <p className="text-xs text-green-500 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Online
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
              {messages.map((msg) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={msg.id}
                  className={`flex items-start gap-2 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1 ${
                    msg.sender === 'user' ? 'bg-secondary text-secondary-foreground' : 'bg-primary/20 text-primary'
                  }`}>
                    {msg.sender === 'user' ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
                  </div>
                  
                  <div className={`px-4 py-2 rounded-2xl text-sm max-w-[80%] ${
                    msg.sender === 'user' 
                      ? 'bg-secondary text-secondary-foreground rounded-tr-sm' 
                      : 'bg-muted text-foreground rounded-tl-sm'
                  }`}>
                    {msg.isTyping ? (
                      <div className="flex gap-1 items-center h-4">
                        <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce" />
                        <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                    ) : (
                      msg.text
                    )}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {messages.length < 3 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {suggestionChips.map(chip => (
                  <button
                    key={chip}
                    onClick={() => { const e = { preventDefault: () => {} } as React.FormEvent; setInput(chip); setTimeout(() => handleSend(e, chip), 0); }}
                    className="text-xs px-2 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 transition-colors"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSend} className="p-3 border-t border-border/50 bg-background/50 backdrop-blur-md flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                className="flex-1 bg-muted rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover-target"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
