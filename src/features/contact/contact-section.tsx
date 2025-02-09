'use client';

import * as z from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { AnimatedDots } from '@/components/shared/animated-dots';
import { Button } from '@/components/ui/button';
import { submitContactInfo } from './submit-contact.api';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

const contactFormSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  first_name: z
    .string({
      required_error: 'First name is required',
    })
    .min(2, 'First name must be at least 2 characters'),
  last_name: z
    .string({
      required_error: 'Last name is required',
    })
    .optional(),
  message: z
    .string({
      required_error: 'Message is required',
    })
    .min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactSection = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true);
      await submitContactInfo(data);
      toast.success(
        'Your message has been sent successfully, I will get back to you as soon as possible.',
      );
      router.push('/');
    } catch (error) {
      console.error(error);
      toast.error('Failed to submit contact');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='relative min-h-screen bg-backgrounds-light-e000 dark:bg-backgrounds-dark-e000 flex items-center justify-center py-20 overflow-hidden'>
      <AnimatedDots />
      <div className='container px-4 mx-auto'>
        <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12'>
          {/* Left Column - Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email*</FormLabel>
                    <FormControl>
                      <input
                        type='email'
                        className='w-full p-3 rounded-md bg-backgrounds-light-e100 dark:bg-backgrounds-dark-e100 border border-borders-light-e100 dark:border-borders-dark-e100 focus:border-primary-light-200 dark:focus:border-primary-dark-200 outline-none transition-colors text-text-light-h1_body dark:text-text-dark-h1_body'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <FormField
                  control={form.control}
                  name='first_name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name*</FormLabel>
                      <FormControl>
                        <input
                          type='text'
                          className='w-full p-3 rounded-md bg-backgrounds-light-e100 dark:bg-backgrounds-dark-e100 border border-borders-light-e100 dark:border-borders-dark-e100 focus:border-primary-light-200 dark:focus:border-primary-dark-200 outline-none transition-colors text-text-light-h1_body dark:text-text-dark-h1_body'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='last_name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <input
                          type='text'
                          className='w-full p-3 rounded-md bg-backgrounds-light-e100 dark:bg-backgrounds-dark-e100 border border-borders-light-e100 dark:border-borders-dark-e100 focus:border-primary-light-200 dark:focus:border-primary-dark-200 outline-none transition-colors text-text-light-h1_body dark:text-text-dark-h1_body'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name='message'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>How can we help you today?*</FormLabel>
                    <FormControl>
                      <textarea
                        rows={6}
                        className='w-full p-3 rounded-md bg-backgrounds-light-e100 dark:bg-backgrounds-dark-e100 border border-borders-light-e100 dark:border-borders-dark-e100 focus:border-primary-light-200 dark:focus:border-primary-dark-200 outline-none transition-colors resize-none text-text-light-h1_body dark:text-text-dark-h1_body'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className='text-sm text-text-light-h3_captions dark:text-text-dark-h3_captions'>
                {`I'll will never share your data with anyone else.`}
              </div>

              <Button
                type='submit'
                className='w-full bg-gradient-to-r from-primary-light-200 to-primary-light-100 dark:from-primary-dark-200 dark:to-primary-dark-100 hover:opacity-90 text-white py-6 rounded-md font-semibold transition-all duration-300'
              >
                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
              </Button>
            </form>
          </Form>

          {/* Right Column - Content */}
          <div className='space-y-8'>
            <div>
              <h1 className='text-4xl sm:text-5xl font-bold mb-6 text-text-light-h1_body dark:text-text-dark-h1_body'>
                Contact me
              </h1>
              <p className='text-base sm:text-lg text-text-light-h2 dark:text-text-dark-h2'>
                Why Work With Me?
              </p>
            </div>

            <div className='space-y-8'>
              <div>
                <h3 className='text-xl sm:text-2xl font-semibold mb-4 text-text-light-h1_body dark:text-text-dark-h1_body'>
                  Focus on Results, Not Overhead
                </h3>
                <p className='text-text-light-h3_captions dark:text-text-dark-h3_captions'>
                  {`Leverage modern tools (React, Next.js, Node.js, MongoDB) to
                  ship faster, smarter solutions—without reinventing the wheel.`}
                </p>
              </div>

              <div>
                <h3 className='text-xl sm:text-2xl font-semibold mb-4 text-text-light-h1_body dark:text-text-dark-h1_body'>
                  Custom Solutions, No Compromises
                </h3>
                <p className='text-text-light-h3_captions dark:text-text-dark-h3_captions'>
                  Skip the agency markup. Get tailored, full-stack development
                  that aligns perfectly with your goals and budget.
                </p>
              </div>

              <div>
                <h3 className='text-xl sm:text-2xl font-semibold mb-4 text-text-light-h1_body dark:text-text-dark-h1_body'>
                  Full-Stack Expertise
                </h3>
                <p className='text-text-light-h3_captions dark:text-text-dark-h3_captions'>
                  End-to-end ownership: responsive UIs, scalable APIs, real-time
                  features, and seamless integrations—all under one roof.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
