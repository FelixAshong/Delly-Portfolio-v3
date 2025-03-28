import { Switch, Route } from "wouter";
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
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-[72px] md:pt-[88px]">
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
    </div>
  );
}

export default App;
