import { Switch, Route, useLocation } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import CV from "@/pages/CV";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CursorPatternBackground from "@/components/CursorPatternBackground";
import NeonBubbles from "@/components/NeonBubbles";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/skills" component={Skills} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      <Route path="/cv" component={CV} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [location] = useLocation();
  
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <Router />
      </main>
      <Footer />
      <ScrollToTop />
      <Toaster />
      <CursorPatternBackground 
        color="#ff6b00"
        particleCount={70}
        lineLength={100}
        speed={0.3}
      />
      <NeonBubbles 
        bubbleCount={15}
        colors={['#ff6b00', '#ff9500', '#ffb700', '#ff5100', '#ff3c00']}
        minSize={10}
        maxSize={60}
        speed={0.5}
      />
    </div>
  );
}

export default App;
