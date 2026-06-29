import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { ThemeProvider } from '@/components/theme-provider';
import { Loader } from '@/components/Loader';
import { CustomCursor } from '@/components/CustomCursor';
import { ScrollProgress } from '@/components/ScrollProgress';
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider';

// Import components (we will create these next)
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Education } from '@/components/sections/Education';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Certifications } from '@/components/sections/Certifications';
import { Hackathons } from '@/components/sections/Hackathons';
import { CodingProfiles } from '@/components/sections/CodingProfiles';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { AIAssistant } from '@/components/AIAssistant';

const queryClient = new QueryClient();

function Portfolio() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <Loader />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      
      <main className="w-full">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Hackathons />
        <Certifications />
        <CodingProfiles />
        <Contact />
      </main>
      
      <Footer />
      <AIAssistant />
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 font-heading clip-text-gradient">404</h1>
        <p className="text-xl text-muted-foreground">Page not found</p>
        <a href="/" className="mt-8 inline-block px-6 py-3 bg-primary text-primary-foreground rounded-full">
          Return Home
        </a>
      </div>
    </div>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
        <SmoothScrollProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
            <Switch>
              <Route path="/" component={Portfolio} />
              <Route component={NotFound} />
            </Switch>
          </WouterRouter>
        </SmoothScrollProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
