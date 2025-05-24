'use client';

import { useState } from 'react';
import {
  Mail,
  Linkedin,
  ExternalLink,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { personalData, services } from '../../lib/data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your actual Formspree endpoint
      const response = await fetch('https://formspree.io/f/movdzozl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          projectType: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
          Let&apos;s Connect
        </h2>

        <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
          Ready to discuss your next enterprise architecture challenge?
          Let&apos;s explore how innovative solutions can transform your
          business.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-6 text-orange-400">
              Send me a message
            </h3>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-green-300">
                  Thanks! I&apos;ll get back to you within 24 hours.
                </span>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center">
                <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                <span className="text-red-300">
                  Something went wrong. Please try again or email me directly.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-orange-400 focus:outline-none"
                  >
                    <option value="">Select a service</option>
                    <option value="architecture-review">
                      Architecture Review
                    </option>
                    <option value="digital-transformation">
                      Digital Transformation
                    </option>
                    <option value="technical-due-diligence">
                      Technical Due Diligence
                    </option>
                    <option value="consulting">General Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none resize-none"
                  placeholder="Tell me about your project or challenge..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-500/50 text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info & Services */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-orange-400">
                Direct Contact
              </h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${personalData.email}`}
                  className="flex items-center space-x-3 text-gray-300 hover:text-orange-400 transition-colors"
                >
                  <Mail className="w-5 h-5 text-orange-400" />
                  <span>{personalData.email}</span>
                </a>

                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-orange-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-orange-400" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-orange-400">
                Services I Offer
              </h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="text-orange-400 text-xl mt-1">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        {service.title}
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-xl p-6 border border-orange-400/30">
              <h4 className="font-bold text-white mb-2">⚡ Quick Response</h4>
              <p className="text-gray-300 text-sm">
                I typically respond to inquiries within 24 hours. For urgent
                matters, feel free to mention it in your message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
