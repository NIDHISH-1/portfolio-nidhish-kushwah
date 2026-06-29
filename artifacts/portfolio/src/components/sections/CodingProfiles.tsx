import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Github, Linkedin, Code2, TerminalSquare } from 'lucide-react';
import { MagneticButton } from '../MagneticButton';

export function CodingProfiles() {
  const profiles = [
    {
      name: "GitHub",
      url: PORTFOLIO_DATA.social.github,
      icon: <Github className="w-8 h-8" />,
      color: "hover:border-gray-500 dark:hover:border-white",
      bg: "group-hover:bg-gray-500/10 dark:group-hover:bg-white/10",
      username: "@NIDHISH-1"
    },
    {
      name: "LinkedIn",
      url: PORTFOLIO_DATA.social.linkedin,
      icon: <Linkedin className="w-8 h-8" />,
      color: "hover:border-blue-500",
      bg: "group-hover:bg-blue-500/10",
      username: "nidhish-kushwah"
    },
    {
      name: "LeetCode",
      url: PORTFOLIO_DATA.social.leetcode,
      icon: <Code2 className="w-8 h-8" />,
      color: "hover:border-yellow-500",
      bg: "group-hover:bg-yellow-500/10",
      username: "IY8Bpo8Zm7"
    },
    {
      name: "HackerRank",
      url: PORTFOLIO_DATA.social.hackerrank,
      icon: <TerminalSquare className="w-8 h-8" />,
      color: "hover:border-green-500",
      bg: "group-hover:bg-green-500/10",
      username: "kushwahnidhish"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 inline-block relative">
            Connect & Review Code
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-primary rounded-full" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {profiles.map((profile, index) => (
            <motion.a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`group glass-card p-6 rounded-3xl flex flex-col items-center justify-center text-center transition-all duration-300 ${profile.color} hover:-translate-y-2 hover:shadow-2xl hover-target`}
            >
              <div className={`w-16 h-16 rounded-full glass flex items-center justify-center mb-4 transition-colors duration-300 ${profile.bg}`}>
                {profile.icon}
              </div>
              <h3 className="font-bold text-lg mb-1">{profile.name}</h3>
              <p className="text-sm text-muted-foreground font-mono truncate w-full px-2">{profile.username}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
