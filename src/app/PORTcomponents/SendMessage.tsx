'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function SendMessage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('Email sent successfully!');
        toast.success('Email sent successfully!');
        reset();
      } else {
        setMessage(result.error || 'Failed to send email.');
        toast.error('Something went wrong!');
      }
    } catch (error) {
      toast.error('Something went wrong!');
      setMessage('Something went wrong.');
    }

    setLoading(false);
  };

  return (
    <section className="relative p-6 rounded-lg shadow-md bg-white overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-5 w-56 h-56 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-20 right-5 w-56 h-56 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-20 w-56 h-56 bg-accent-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <Toaster position="top-right" />
      
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xl font-semibold text-gray-900 mb-4 flex items-center"
      >
        <CheckCircle size={20} className="text-secondary mr-2" />
        Send a Message
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <input
            {...register('name', { required: 'Name is required' })}
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email address',
              },
            })}
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div>
          <textarea
            {...register('message', { required: 'Message is required' })}
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg h-28 focus:outline-none focus:ring-2 focus:ring-primary-300"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
        </div>

        <motion.button
          type="submit"
          className="w-full bg-primary text-white p-3 rounded-lg flex items-center justify-center gap-2 hover:bg-primary-700 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={loading}
        >
          {loading ? 'Sending...' : <>
            Send
            <ArrowRight size={18} />
          </>}
        </motion.button>

        {message && <p className="text-green-600 mt-2">{message}</p>}
      </motion.form>
    </section>
  );
}
