'use client';

import { useState, useEffect } from 'react';
import { Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function NewsletterSignup({
  title = 'Stay Updated',
  description = 'Get insights on enterprise architecture, cloud innovation, and digital transformation delivered directly to your inbox.',
  className = '',
}) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'
  const [message, setMessage] = useState('');
  const [isClient, setIsClient] = useState(false);

  // Ensure we're on the client side before doing DOM manipulation
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    // Check if we're on the client side
    if (!isClient || typeof document === 'undefined') {
      setStatus('error');
      setMessage('Please try again in a moment');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      // Use a traditional form submission approach that bypasses CORS
      const form = document.createElement('form');
      form.action =
        'https://ramym.us12.list-manage.com/subscribe/post?u=28a898ef8932cae9b4907ef06&id=8228a6509b&f_id=0015e4e0f0';
      form.method = 'POST';
      form.target = '_blank'; // Open in new window
      form.style.display = 'none';

      // Email field
      const emailInput = document.createElement('input');
      emailInput.type = 'email';
      emailInput.name = 'EMAIL';
      emailInput.value = email;
      form.appendChild(emailInput);

      // Anti-bot field
      const botInput = document.createElement('input');
      botInput.type = 'text';
      botInput.name = 'b_28a898ef8932cae9b4907ef06_8228a6509b';
      botInput.value = '';
      botInput.style.position = 'absolute';
      botInput.style.left = '-5000px';
      form.appendChild(botInput);

      // Add to page, submit, then remove
      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);

      // Show success message
      setTimeout(() => {
        setStatus('success');
        setMessage(
          'Perfect! A new tab opened to complete your subscription. Please check it and confirm your email.'
        );
        setEmail('');
      }, 500);
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div
      className={`bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-xl p-8 border border-orange-400/30 ${className}`}
    >
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-4">
          <Mail className="w-8 h-8 text-orange-400 mr-3" />
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6">{description}</p>
      </div>

      {/* Newsletter Form */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            disabled={status === 'loading' || !isClient}
            className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none disabled:opacity-50 focus:ring-2 focus:ring-orange-400/50"
            required
          />
          <button
            type="submit"
            disabled={status === 'loading' || !email || !isClient}
            className="bg-orange-500 hover:bg-orange-600 disabled:bg-orange-500/50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center min-w-[120px] shadow-lg hover:shadow-xl"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Joining...
              </>
            ) : (
              <>
                <Mail className="w-5 h-5 mr-2" />
                Subscribe
              </>
            )}
          </button>
        </div>

        {/* Status Messages */}
        {status === 'success' && (
          <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center animate-in fade-in duration-300">
            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
            <span className="text-green-300">{message}</span>
          </div>
        )}

        {status === 'error' && (
          <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center animate-in fade-in duration-300">
            <AlertCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
            <span className="text-red-300">{message}</span>
          </div>
        )}
      </form>

      <p className="text-gray-400 text-sm mb-6 text-center">
        No spam. Unsubscribe anytime. Usually 1-2 emails per month with insights
        on enterprise architecture and innovation.
      </p>

      {/* Value Proposition */}
      <div className="grid md:grid-cols-3 gap-4 text-center">
        <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
          <div className="text-orange-400 text-xl mb-2">🏗️</div>
          <h4 className="font-semibold text-white text-sm">
            Architecture Insights
          </h4>
          <p className="text-gray-400 text-xs mt-1">
            Real-world patterns and lessons from enterprise implementations
          </p>
        </div>
        <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
          <div className="text-orange-400 text-xl mb-2">🚀</div>
          <h4 className="font-semibold text-white text-sm">
            Innovation Stories
          </h4>
          <p className="text-gray-400 text-xs mt-1">
            Behind-the-scenes look at award-winning solutions
          </p>
        </div>
        <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
          <div className="text-orange-400 text-xl mb-2">📈</div>
          <h4 className="font-semibold text-white text-sm">Industry Trends</h4>
          <p className="text-gray-400 text-xs mt-1">
            What&apos;s coming next in enterprise technology
          </p>
        </div>
      </div>
    </div>
  );
}
