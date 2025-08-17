import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowDown, Download, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Database, Globe, Smartphone, Award, Calendar, GraduationCap, Building, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import profilePhoto from '@/assets/profile-image.jpg';
import heroBg from '@/assets/hero-bg.jpg';
import techToolkitImage from '@/assets/tech-toolkit-preview.png';
import techmartImage from '@/assets/techmart-preview.png';

const Portfolio = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'achievements', 'services', 'contact'];
      const scrollY = window.scrollY;
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Initialize EmailJS with your public key
      await emailjs.send(
        'service_zbyrq7s', // Service ID
        'template_t705hc3', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Fayaz Basha',
        },
        'mUEcCfofniJH7zJJ3' // Public Key
      );
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    }
  };

  const skills = [
    { name: 'Java', level: 85, icon: Code },
    { name: 'JavaScript', level: 80, icon: Code },
    { name: 'HTML/CSS', level: 90, icon: Globe },
    { name: 'Python', level: 60, icon: Code },
    { name: 'MySQL', level: 75, icon: Database },
    { name: 'React', level: 70, icon: Code },
  ];

  const experiences = [
    {
      title: 'Artificial Intelligence Machine Learning Intern',
      company: 'SmartBridge',
      period: 'May 2025 - Jul 2025',
      description: 'Collaborated with SmartBridge Educational Services and the AP State Council of Higher Education on innovative projects while participating in a structured, government-endorsed 2-month professional development program in Artificial Intelligence and Machine Learning.',
      icon: Building,
      certificateUrl: 'https://i.postimg.cc/8CTq4gGZ/Edunet-2025-april-10-may-10-Foundations-of-AI.png',
    },
    {
      title: 'Java Full Stack Intern',
      company: 'Vaultsphere AI Technologies Pvt. Ltd.',
      period: 'May 2025 - Jul 2025',
      description: 'Interned as a Java Full Stack Developer at Vaultsphere AI Technologies, building web applications and working across the technology stack. Enhanced coding skills by working with REST APIs and databases while contributing to real-world projects under expert guidance.',
      icon: Building,
      certificateUrl: 'https://i.postimg.cc/YCBsbB7J/valut-of-code-2025-6-7-java-programming.png',
    },
    {
      title: 'Application Developer Intern – Web & Mobile',
      company: 'Rooman Technologies',
      period: 'May 2025 - Jul 2025',
      description: 'Undertook a 2-month web & mobile app development internship at Rooman Technologies with IBM, Nasscom, NSDC, and Skill India. Earned Certificate (ID: CAN_36542946) and gained hands-on experience in design, testing, and deployment.',
      icon: Building,
      certificateUrl: 'https://i.postimg.cc/W4yq8WRv/Rooman-Certificate.png',
    },
    {
      title: 'Java Programming Intern',
      company: 'VaultofCodes.in',
      period: 'Jun 2025 - Jul 2025',
      description: 'Developed Java applications and learned advanced programming concepts.',
      icon: Building,
      certificateUrl: 'https://i.postimg.cc/YCBsbB7J/valut-of-code-2025-6-7-java-programming.png',
    },
    {
      title: 'Foundations of AI Intern',
      company: 'Microsoft Initiative (Edunet Foundation/AICTE)',
      period: 'Apr 2025 - May 2025',
      description: 'Gained expertise in artificial intelligence fundamentals and machine learning.',
      icon: Building,
      certificateUrl: 'https://i.postimg.cc/8CTq4gGZ/Edunet-2025-april-10-may-10-Foundations-of-AI.png',
    },
    {
      title: 'Software Engineering Intern',
      company: 'YBI Foundation',
      period: 'Jun 2024 - Aug 2024',
      description: 'Worked on software development projects and team collaboration.',
      icon: Building,
      certificateUrl: 'https://i.postimg.cc/qRL6pbzL/ybi-2024-aug-Python-Programming-Internship-60days.png',
    },
    {
      title: 'Web Development Intern',
      company: 'System Tron',
      period: 'Jun 2024',
      description: 'Built responsive web applications using modern technologies.',
      icon: Building,
      certificateUrl: 'https://i.postimg.cc/8PQ2n6BK/system-tron-2024-june-web-development.png',
    },
  ];

  const projects = [
    {
      title: 'Tech Academic Toolkit',
      description: 'A comprehensive PDF resource website built with HTML, CSS, and JavaScript. Features study materials, video tutorials, and coding platform integrations.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      link: 'https://sayyadfayazbasha.github.io/Tech-Academic-Toolkit/',
      image: techToolkitImage,
    },
    {
      title: 'TechMart E-commerce Application',
      description: 'Full-stack e-commerce application with user management, product catalog, and admin dashboard. Built using Java, JSP/Servlets, and MySQL.',
      technologies: ['Java', 'JSP/Servlets', 'MySQL', 'Bootstrap'],
      link: 'https://sayyadfayazbasha.github.io/TechMart-E-commerce-Application-/',
      image: techmartImage,
    },
  ];

  const achievements = [
    { 
      title: 'The Java Language', 
      issuer: 'Certified by Coursera', 
      year: '2024', 
      icon: Award,
      certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/NK3QEHZM2BZP'
    },
    { 
      title: 'MS Office Course', 
      issuer: 'Certified by Udemy', 
      year: '2024', 
      icon: Award,
      certificateUrl: 'https://www.udemy.com/certificate/UC-57929309-4feb-4c8c-95c6-c66d8e47df91/'
    },
    { 
      title: 'Data Structures and Algorithms using Java', 
      issuer: 'Certified by Infosys Springboard', 
      year: '2024', 
      icon: Award,
      certificateUrl: 'https://i.postimg.cc/15rGhkwx/dsa-infosys-spring-board.png'
    },
    { 
      title: 'Front-End Fusion Winner', 
      issuer: 'PRESTO 2K25', 
      year: '2025', 
      icon: Star,
      certificateUrl: 'https://i.postimg.cc/ZY2Bhy2b/achievement-1.jpg'
    },
    { 
      title: 'TCS ION Career Edge', 
      issuer: 'TCS', 
      year: '2024', 
      icon: Award,
      certificateUrl: 'https://i.postimg.cc/50fJGFVW/tcs-ion-2023-sep-career-edge-young-professional.png'
    },
  ];

  const services = [
    {
      title: 'Java Full Stack Development',
      description: 'End-to-end web application development using Java, Spring Boot, and modern front-end frameworks.',
      icon: Code,
    },
    {
      title: 'Front-End UI/UX Design',
      description: 'Creating responsive, user-friendly interfaces with modern design principles and best practices.',
      icon: Smartphone,
    },
    {
      title: 'Web App Prototyping',
      description: 'Rapid prototyping and MVP development for testing ideas and concepts.',
      icon: Globe,
    },
    {
      title: 'PDF Resource Development',
      description: 'Building educational resource websites with document management and user-friendly interfaces.',
      icon: Database,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold gradient-text">SAYYAD FAYAZ BASHA</div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        </div>
        
        {/* Floating Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-primary/30 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-accent/30 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-40 w-16 h-16 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-40 left-40 w-20 h-20 border border-primary/20 rotate-12 animate-pulse delay-700"></div>
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-8 gap-8 h-full">
              {[...Array(64)].map((_, i) => (
                <div key={i} className="border border-primary/20 animate-pulse" style={{ animationDelay: `${i * 100}ms` }}></div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          {/* Main Content */}
          <div className="hero-text-slide">
            {/* Profile Image with Glassmorphism */}
            <div className="relative w-56 h-56 mx-auto mb-12 group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full p-1 animate-pulse">
                <div className="w-full h-full bg-background rounded-full p-2">
                  <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl">
                    <img 
                      src="https://i.postimg.cc/VLknGwJH/profesional.jpg" 
                      alt="Sayyad Fayaz Basha" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                Available
              </div>
            </div>
            
            {/* Animated Title */}
            <div className="mb-8">
              <div className="text-lg md:text-xl text-muted-foreground mb-4 tracking-wider font-medium">
                Welcome to my portfolio
              </div>
               <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-tight">
                 Hi, I'm{' '}
                 <span className="relative inline-block group">
                   <span className="gradient-text animate-fade-in hover:animate-pulse bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-300% animate-[gradient_3s_ease-in-out_infinite] hover:scale-110 transition-transform duration-300 cursor-default">
                     Fayaz Basha
                   </span>
                   <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent blur opacity-30 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
                   <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 </span>
               </h1>
              <div className="relative">
                <h2 className="text-2xl md:text-4xl font-semibold text-primary mb-2">
                  Java Full Stack Developer
                </h2>
                <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
              </div>
            </div>
            
            {/* Enhanced Description */}
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-6">
                Passionate about creating <span className="text-primary font-semibold">innovative tech solutions</span> that bridge 
                the gap between elegant design and robust functionality
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <Badge variant="secondary" className="px-4 py-2 text-sm">⚡ Java Expert</Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">🎨 UI/UX Focused</Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">🚀 Innovation Driven</Badge>
              </div>
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                size="lg"
                className="btn-primary group relative overflow-hidden px-8 py-4 text-lg font-semibold"
                onClick={() => window.open('https://i.postimg.cc/vZbqk9b6/S-3-2.png', '_blank')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <Download className="mr-3 h-5 w-5 relative z-10 group-hover:animate-bounce" />
                <span className="relative z-10">View Resume</span>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="btn-outline group relative px-8 py-4 text-lg font-semibold border-2"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="mr-3 h-5 w-5 group-hover:animate-pulse" />
                Let's Connect
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-12">
              <a 
                href="https://github.com/SAYYADFAYAZBASHA" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-background/20 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
              >
                <Github className="h-6 w-6 text-primary" />
              </a>
              <a 
                href="https://www.linkedin.com/in/sayyadfayazbasha-9703029115-2003-developer/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-background/20 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
              >
                <Linkedin className="h-6 w-6 text-primary" />
              </a>
              <a 
                href="mailto:fayaz1234basha@gmail.com" 
                className="p-3 rounded-full bg-background/20 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
              >
                <Mail className="h-6 w-6 text-primary" />
              </a>
            </div>
          </div>
          
          {/* Enhanced Scroll Indicator */}
          <div className="scroll-indicator relative">
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-muted-foreground font-medium">Scroll to explore</span>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur animate-pulse"></div>
                <ArrowDown 
                  className="relative h-8 w-8 text-primary cursor-pointer hover:scale-110 transition-transform duration-300 animate-bounce"
                  onClick={() => scrollToSection('about')}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 fade-in-up">
            <div className="inline-block mb-4">
              <Badge variant="outline" className="px-6 py-2 text-sm font-medium border-primary/30">
                🚀 About Me
              </Badge>
            </div>
            <h2 className="section-title mb-6">Building Digital Excellence</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Passionate developer with a strong foundation in computer science and full-stack development, 
              committed to creating impactful solutions that make a difference.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Bio & Contact */}
            <div className="fade-in-up">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-xl"></div>
                <Card className="relative bg-background/80 backdrop-blur-sm border-primary/20">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-4 gradient-text">Hi there! 👋</h3>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                          I'm <span className="text-primary font-semibold">Sayyad Fayaz Basha</span>, a Computer Science Engineering student at 
                          Sri Venkateswara Institute of Technology with a <span className="text-primary font-semibold">CGPA of 8.8</span>. 
                          I am passionate about Java full stack development, blending strong front-end design with robust backend logic.
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                          Eager to contribute to innovative tech solutions with a growth mindset and problem-solving focus. 
                          I believe in continuous learning and applying new technologies to create meaningful applications that solve real-world problems.
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-4 pt-6">
                        <div className="flex items-center space-x-4 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                          <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                            <Phone className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Phone</p>
                            <p className="font-medium">+91 9703029115</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                          <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                            <Mail className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Email</p>
                            <p className="font-medium">fayaz1234basha@gmail.com</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                          <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                            <MapPin className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Location</p>
                            <p className="font-medium">Dharmavaram, AP</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Education Timeline */}
            <div className="fade-in-up">
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-2">Educational Journey</h3>
                <p className="text-muted-foreground">Academic excellence and continuous growth</p>
              </div>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary to-accent"></div>
                
                <div className="space-y-8">
                  <div className="relative flex items-start space-x-6">
                    <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center shadow-lg">
                      <GraduationCap className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1 pb-8">
                      <Card className="bg-background/50 backdrop-blur-sm border-primary/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-xl font-bold">B.Tech CSE</h4>
                            <Badge className="bg-green-500/20 text-green-700 dark:text-green-300">
                              CGPA: 8.8
                            </Badge>
                          </div>
                          <p className="text-primary font-medium mb-1">SVIT, Anantapur</p>
                          <p className="text-sm text-muted-foreground">2022 – Present</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start space-x-6">
                    <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-accent to-accent rounded-xl flex items-center justify-center shadow-lg">
                      <GraduationCap className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div className="flex-1 pb-8">
                      <Card className="bg-background/50 backdrop-blur-sm border-primary/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-xl font-bold">Intermediate</h4>
                            <Badge className="bg-blue-500/20 text-blue-700 dark:text-blue-300">
                              CGPA: 9.4
                            </Badge>
                          </div>
                          <p className="text-primary font-medium mb-1">Sri Sai Krupa Junior College</p>
                          <p className="text-sm text-muted-foreground">2020 – 2022</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start space-x-6">
                    <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-secondary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                      <GraduationCap className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div className="flex-1">
                      <Card className="bg-background/50 backdrop-blur-sm border-primary/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-xl font-bold">10th Grade</h4>
                            <Badge className="bg-purple-500/20 text-purple-700 dark:text-purple-300">
                              CGPA: 9.2
                            </Badge>
                          </div>
                          <p className="text-primary font-medium mb-1">Layola English Medium School</p>
                          <p className="text-sm text-muted-foreground">2019 – 2020</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 fade-in-up">
            <div className="inline-block mb-4">
              <Badge variant="outline" className="px-6 py-2 text-sm font-medium border-primary/30">
                💻 Technical Skills
              </Badge>
            </div>
            <h2 className="section-title mb-6">Skills & Technologies</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Proficient in modern development technologies and frameworks, 
              constantly expanding my technical expertise to stay current with industry standards.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="fade-in-up group">
                <Card className="card-hover bg-background/50 backdrop-blur-sm border-primary/20 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-primary/20 rounded-xl group-hover:bg-primary/30 transition-colors">
                          <skill.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <span className="font-bold text-lg">{skill.name}</span>
                          <p className="text-sm text-muted-foreground">Professional Level</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-primary">{skill.level}%</span>
                      </div>
                    </div>
                    
                    {/* Enhanced Progress Bar */}
                    <div className="relative">
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground mt-2">
                        <span>Beginner</span>
                        <span>Expert</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Additional Skills Tags */}
          <div className="mt-16 text-center fade-in-up">
            <h3 className="text-xl font-semibold mb-6">Additional Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Spring Boot', 'JSP/Servlets', 'Bootstrap', 'Git', 'VS Code', 'Eclipse', 'Responsive Design', 'API Integration'].map((tech, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="px-4 py-2 text-sm font-medium hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-gradient-to-br from-muted/20 via-background to-muted/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 fade-in-up">
            <div className="inline-block mb-4">
              <Badge variant="outline" className="px-6 py-2 text-sm font-medium border-primary/30">
                🚀 Professional Journey
              </Badge>
            </div>
            <h2 className="section-title mb-6">Experience & Internships</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Professional internships and hands-on learning experiences that shaped my development journey, 
              providing real-world exposure to industry practices and technologies.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-16 bottom-16 w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full"></div>
              
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative fade-in-up group">
                    <div className="flex items-start space-x-8">
                      {/* Timeline Node */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <exp.icon className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-background"></div>
                      </div>
                      
                      {/* Content Card */}
                      <div className="flex-1 pb-12">
                        <Card className="bg-background/80 backdrop-blur-sm border-primary/20 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group-hover:scale-[1.02]">
                          <CardContent className="p-8">
                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                              <div>
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                  {exp.title}
                                </h3>
                                <p className="text-primary font-semibold text-lg mb-1">{exp.company}</p>
                              </div>
                              <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2 w-fit">
                                <Calendar className="h-4 w-4 mr-2" />
                                {exp.period}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                              {exp.description}
                            </p>
                            
                            {/* Skills gained */}
                            <div className="mt-6 flex flex-wrap gap-2">
                              {index === 0 && ['AI/ML', 'Machine Learning Algorithms', 'Python', 'Data Analysis'].map((skill, i) => (
                                <Badge key={i} variant="outline" className="text-xs">{skill}</Badge>
                              ))}
                              {index === 1 && ['Java Full Stack', 'RESTful APIs', 'Database Integration', 'Web Applications'].map((skill, i) => (
                                <Badge key={i} variant="outline" className="text-xs">{skill}</Badge>
                              ))}
                              {index === 2 && ['Web Development', 'Mobile Development', 'Design', 'Testing'].map((skill, i) => (
                                <Badge key={i} variant="outline" className="text-xs">{skill}</Badge>
                              ))}
                              {index === 3 && ['Java', 'OOP', 'Problem Solving'].map((skill, i) => (
                                <Badge key={i} variant="outline" className="text-xs">{skill}</Badge>
                              ))}
                              {index === 4 && ['AI/ML', 'Python', 'Data Analysis'].map((skill, i) => (
                                <Badge key={i} variant="outline" className="text-xs">{skill}</Badge>
                              ))}
                              {index === 5 && ['Software Development', 'Team Work', 'Agile'].map((skill, i) => (
                                <Badge key={i} variant="outline" className="text-xs">{skill}</Badge>
                              ))}
                              {index === 6 && ['HTML/CSS', 'JavaScript', 'Responsive Design'].map((skill, i) => (
                                <Badge key={i} variant="outline" className="text-xs">{skill}</Badge>
                              ))}
                            </div>
                            
                            {/* View Certificate Button */}
                            <div className="mt-6">
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="group relative overflow-hidden border-primary/50 hover:border-primary bg-gradient-to-r from-primary/5 to-accent/5 hover:from-primary/20 hover:to-accent/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                                onClick={() => window.open(exp.certificateUrl, '_blank')}
                              >
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                <ExternalLink className="w-4 h-4 mr-2 relative z-10 group-hover:animate-pulse" />
                                <span className="relative z-10">View Certificate</span>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-primary rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-purple-500 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-cyan-500 rounded-full"></div>
          <div className="absolute top-20 right-1/3 w-20 h-20 border border-accent rounded-square rotate-45"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 fade-in-up">
            <div className="inline-block mb-4">
              <Badge variant="outline" className="px-6 py-2 text-sm font-medium border-primary/30">
                💼 Portfolio
              </Badge>
            </div>
            <h2 className="section-title mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="section-subtitle max-w-3xl mx-auto">
              Showcasing my technical skills through real-world applications that demonstrate 
              innovation, problem-solving, and modern development practices.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="card-hover card-glow fade-in-up bg-background/80 backdrop-blur-sm border-primary/20 overflow-hidden group">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-purple-600/20 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                      Featured Project
                    </Badge>
                  </div>
                  {/* Project Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                      {project.title}
                    </h3>
                  </div>
                  {/* Tech Stack Preview */}
                  <div className="absolute bottom-4 right-4">
                    <div className="flex gap-2">
                      {project.technologies.slice(0, 2).map((tech, techIndex) => (
                        <div key={techIndex} className="w-2 h-2 bg-white/60 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center justify-between text-xl group-hover:text-primary transition-colors">
                    {project.title}
                    <ExternalLink className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs hover:bg-primary/10 hover:border-primary/50 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                   <div className="flex gap-3">
                     <Button 
                       size="sm" 
                       variant="outline" 
                       className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex-1"
                       onClick={() => window.open(project.link, '_blank')}
                     >
                       <ExternalLink className="w-4 h-4 mr-2" />
                       Live Demo
                     </Button>
                   </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16 fade-in-up">
            <p className="text-muted-foreground mb-6">Want to see more of my work?</p>
            <Button 
              variant="outline" 
              size="lg" 
              className="group"
              onClick={() => window.open('https://github.com/SAYYADFAYAZBASHA', '_blank')}
            >
              <Github className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="section-title">Achievements & Certifications</h2>
            <p className="section-subtitle">
              Recognition for technical excellence and continuous learning
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="card-hover fade-in-up bg-card border-border cursor-pointer group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 border-primary/20 hover:border-primary/60 bg-gradient-to-br from-card via-card/90 to-card/80"
                onClick={() => window.open(achievement.certificateUrl, '_blank')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-6 text-center relative z-10">
                  <achievement.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:animate-pulse" />
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1 group-hover:text-foreground transition-colors duration-300">{achievement.issuer}</p>
                  <p className="text-sm text-primary mb-3">{achievement.year}</p>
                  <Badge variant="outline" className="text-xs hover:bg-primary/10 group-hover:bg-primary/20 group-hover:text-primary transition-colors duration-300">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    View Certificate
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="section-title">Services</h2>
            <p className="section-subtitle">
              Comprehensive development solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover fade-in-up bg-card border-border text-center">
                <CardContent className="p-6">
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-4">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="section-title">Let's Connect</h2>
            <p className="section-subtitle">
              Ready to collaborate? Get in touch and let's build something amazing together
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="fade-in-up">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+91 9703029115</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">fayaz1234basha@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Dharmavaram, Andhra Pradesh</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('https://github.com/SAYYADFAYAZBASHA', '_blank')}
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('https://www.linkedin.com/in/sayyadfayazbasha-9703029115-2003-developer/', '_blank')}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('mailto:fayaz1234basha@gmail.com')}
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <Card className="fade-in-up bg-card border-border">
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-background border-border"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  <Button type="submit" className="btn-primary w-full">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Sayyad Fayaz Basha. Designed & Developed with ❤️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
