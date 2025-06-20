import React from 'react';
import { Shield, CheckCircle, Users, Clock, Phone, Mail, MapPin, Star, ArrowRight, Lock, AlertTriangle, FileText, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">SecureGuard Consulting</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Free Consultation
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Protect Your Business from Cyber Threats
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Expert cybersecurity consulting for small and medium businesses. 
                We make security simple, affordable, and effective.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Get Free Security Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: (555) 123-4567
                </Button>
              </div>
              <div className="mt-8 flex items-center space-x-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Free 30-min consultation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">No long-term contracts</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="text-center mb-6">
                  <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Security Dashboard</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium">Firewall Status</span>
                    <span className="text-green-600 font-semibold">Protected</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium">Backup System</span>
                    <span className="text-green-600 font-semibold">Active</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <span className="text-sm font-medium">Software Updates</span>
                    <span className="text-yellow-600 font-semibold">2 Pending</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium">Team Training</span>
                    <span className="text-green-600 font-semibold">Complete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Business is Under Attack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cybercriminals target small businesses because they often lack proper security measures. 
              Don't become another statistic.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-red-500 mb-2">43%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">of cyber attacks</div>
              <div className="text-gray-600">target small businesses</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-red-500 mb-2">60%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">of small businesses</div>
              <div className="text-gray-600">close within 6 months of an attack</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-red-500 mb-2">$2.98M</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">average cost</div>
              <div className="text-gray-600">of a data breach for SMBs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Cybersecurity Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive security solutions designed specifically for small and medium businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Lock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Vulnerability Assessment</h3>
              <p className="text-gray-600 mb-4">
                Identify and prioritize security weaknesses in your systems before hackers find them.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Network security scanning</li>
                <li>• Web application testing</li>
                <li>• System configuration review</li>
                <li>• Detailed remediation plan</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Incident Response</h3>
              <p className="text-gray-600 mb-4">
                Prepare for and respond to cyber attacks with proven incident response planning.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Custom response plans</li>
                <li>• Team training & drills</li>
                <li>• 24/7 emergency support</li>
                <li>• Post-incident analysis</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Security Training</h3>
              <p className="text-gray-600 mb-4">
                Educate your team to recognize and prevent the most common cyber threats.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Phishing awareness training</li>
                <li>• Password security education</li>
                <li>• Social engineering prevention</li>
                <li>• Regular security updates</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compliance Consulting</h3>
              <p className="text-gray-600 mb-4">
                Navigate complex regulations and achieve compliance without the headaches.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• GDPR compliance guidance</li>
                <li>• HIPAA security requirements</li>
                <li>• PCI DSS for payment processing</li>
                <li>• Audit preparation support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose SecureGuard Consulting?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With a background in Business Information Technology and specialized cybersecurity training, 
                I understand both the technical and business sides of security. I translate complex security 
                challenges into practical, affordable solutions that work for real businesses.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Business-First Approach</h4>
                    <p className="text-gray-600">Security solutions that align with your business goals and budget</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Plain English Explanations</h4>
                    <p className="text-gray-600">No confusing technical jargon - just clear, actionable advice</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Proven Results</h4>
                    <p className="text-gray-600">85% reduction in security incidents for our clients on average</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Responsive Support</h4>
                    <p className="text-gray-600">Quick response times when you need help most</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Your Security Expert</h3>
                <p className="text-gray-600">Business Information Technology Professional</p>
                <p className="text-gray-600">Cybersecurity Specialist</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Clients Protected</span>
                  <span className="font-semibold text-gray-900">50+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Security Incidents Prevented</span>
                  <span className="font-semibold text-gray-900">200+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Compliance Success Rate</span>
                  <span className="font-semibold text-gray-900">100%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Average Response Time</span>
                  <span className="font-semibold text-gray-900">&lt; 4 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real businesses, real results, real peace of mind
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "SecureGuard helped us identify critical vulnerabilities we didn't even know existed. 
                Their practical approach and clear explanations made implementing security measures straightforward."
              </p>
              <div className="font-semibold text-gray-900">Sarah Johnson</div>
              <div className="text-sm text-gray-600">CEO, Johnson Manufacturing</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "When we faced a potential ransomware attack, our incident response plan worked perfectly. 
                Zero downtime, zero data loss. The training was worth every penny."
              </p>
              <div className="font-semibold text-gray-900">Mike Chen</div>
              <div className="text-sm text-gray-600">IT Manager, Chen & Associates</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Finally, cybersecurity that makes sense for a small business. No overwhelming technical jargon, 
                just practical solutions that fit our budget and actually work."
              </p>
              <div className="font-semibold text-gray-900">Lisa Rodriguez</div>
              <div className="text-sm text-gray-600">Owner, Rodriguez Dental Practice</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Protect Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Don't wait for a cyber attack to take action. Get your free security assessment today 
            and discover how to protect your business without breaking the bank.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Clock className="mr-2 h-5 w-5" />
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Phone className="mr-2 h-5 w-5" />
              Call (555) 123-4567
            </Button>
          </div>
          <p className="text-blue-100 mt-4 text-sm">
            Free 30-minute consultation • No obligation • Immediate value
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to secure your business? Contact us today for a free consultation 
                and discover how we can protect your digital assets.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <div className="font-semibold text-gray-900">(555) 123-4567</div>
                    <div className="text-gray-600">Available 24/7 for emergencies</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <div className="font-semibold text-gray-900">contact@secureguardconsulting.com</div>
                    <div className="text-gray-600">We respond within 4 hours</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <div className="font-semibold text-gray-900">Serving Your Local Area</div>
                    <div className="text-gray-600">On-site and remote consultations available</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Request Your Free Security Assessment</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">How can we help?</label>
                  <textarea 
                    rows="4" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your cybersecurity concerns..."
                  ></textarea>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Request Free Assessment
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">SecureGuard Consulting</span>
              </div>
              <p className="text-gray-400">
                Protecting small and medium businesses from cyber threats with practical, 
                affordable security solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Vulnerability Assessment</li>
                <li>Incident Response</li>
                <li>Security Training</li>
                <li>Compliance Consulting</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Case Studies</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>(555) 123-4567</li>
                <li>contact@secureguardconsulting.com</li>
                <li>24/7 Emergency Support</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SecureGuard Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

