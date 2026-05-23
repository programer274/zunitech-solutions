import Contact from '@/components/sections/Contact';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-8 px-6 bg-gradient-to-b from-dark-900 to-dark-800">
        <div className="container-max text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4"
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Ready to start your project? We&apos;d love to hear from you.
          </motion.p>
        </div>
      </section>
      <Contact showMap />
    </>
  );
}
