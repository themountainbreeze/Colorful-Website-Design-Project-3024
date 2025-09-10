import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPlus, FiMinus } = FiIcons;

function FAQs() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      category: 'Booking & Reservations',
      questions: [
        {
          question: 'How do I make a reservation?',
          answer: 'You can book directly through WhatsApp at +94 77 514 5131 or use our online booking form. We provide instant confirmation and personalized service.'
        },
        {
          question: 'What is your cancellation policy?',
          answer: 'We offer flexible cancellation up to 24 hours before check-in. For special packages or during peak seasons, different terms may apply. Please contact us for specific details.'
        },
        {
          question: 'Do you require a deposit?',
          answer: 'A 50% deposit is required to secure your booking, with the balance payable upon arrival. We accept cash, bank transfers, and major credit cards.'
        },
        {
          question: 'Can I modify my booking after confirmation?',
          answer: 'Yes, we accommodate changes subject to availability. Contact us via WhatsApp or phone as soon as possible to modify your reservation.'
        }
      ]
    },
    {
      category: 'Check-in & Check-out',
      questions: [
        {
          question: 'What are your check-in and check-out times?',
          answer: 'Standard check-in is at 2:00 PM and check-out is at 10:00 AM. Different packages may have flexible timing - Full Board offers 10:00 AM or 5:00 PM check-in options.'
        },
        {
          question: 'Can I request early check-in or late check-out?',
          answer: 'Subject to availability, we can arrange early check-in or late check-out. Additional charges may apply for late check-out beyond 12:00 PM.'
        },
        {
          question: 'What do I need to bring for check-in?',
          answer: 'Please bring a valid photo ID (passport for international guests, NIC for locals) and your booking confirmation.'
        }
      ]
    },
    {
      category: 'Amenities & Services',
      questions: [
        {
          question: 'Do you provide Wi-Fi?',
          answer: 'Yes, complimentary high-speed Wi-Fi is available throughout the property, including all cabanas and common areas.'
        },
        {
          question: 'Is parking available?',
          answer: 'Yes, we provide free private parking for all guests. Your vehicle will be secure within our property grounds.'
        },
        {
          question: 'Do you offer airport transportation?',
          answer: 'We provide paid airport shuttle service to/from Koggala Airport (17km away). Please arrange this in advance when making your booking.'
        },
        {
          question: 'Is the hot tub shared or private?',
          answer: 'The hot tub/Jacuzzi is a shared facility located in our beautiful garden setting. It\'s available for all guests to enjoy during their stay.'
        }
      ]
    },
    {
      category: 'Dining & Meals',
      questions: [
        {
          question: 'What breakfast options do you offer?',
          answer: 'We serve Full English/Irish, Asian (Sri Lankan specialties), and Halal breakfast options. Please specify your preference when booking.'
        },
        {
          question: 'Can you accommodate dietary restrictions?',
          answer: 'Absolutely! We can accommodate vegetarian, vegan, gluten-free, and other dietary requirements. Please inform us in advance.'
        },
        {
          question: 'Do you offer room service?',
          answer: 'Yes, room service is available for meals and refreshments. Contact our staff for the current menu and timing.'
        },
        {
          question: 'What are your meal times?',
          answer: 'Breakfast: 7:00-10:00 AM, Lunch: 12:00-2:00 PM, Dinner: 6:00-9:00 PM, Tea & Snacks: 3:00-5:00 PM'
        }
      ]
    },
    {
      category: 'Pet Policy',
      questions: [
        {
          question: 'Are pets allowed?',
          answer: 'Yes! We are pet-friendly and welcome your furry companions at no additional charge. Pets must be well-behaved and supervised at all times.'
        },
        {
          question: 'Are there any restrictions for pets?',
          answer: 'Pets should be kept on a leash in common areas and owners are responsible for cleaning up after them. Additional cleaning fees may apply for excessive pet hair or damage.'
        }
      ]
    },
    {
      category: 'Location & Transportation',
      questions: [
        {
          question: 'How far are you from Galle Fort?',
          answer: 'We are approximately 5.4km (10-15 minutes) from Galle Fort and other major attractions in Galle city center.'
        },
        {
          question: 'Do you arrange local tours?',
          answer: 'Yes, we have a tour desk that can arrange local excursions, attraction tickets, and transportation. Contact us for available options and pricing.'
        },
        {
          question: 'Can I rent a vehicle?',
          answer: 'We offer both car and bicycle rental services. This is perfect for exploring the local area at your own pace.'
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const faqId = `${categoryIndex}-${questionIndex}`;
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-canopy to-ocean-teal text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipNFJ7s18OqqIOZeqGk1ZVKIEnntyeULruVnl_q9=w1200"
            alt="FAQs"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl font-playfair font-bold mb-6"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Find answers to common questions about your stay at The Mountain Breeze Galle Cabanas.
          </motion.p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-playfair font-bold text-night-charcoal mb-8 text-center">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const faqId = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openFAQ === faqId;
                  
                  return (
                    <div
                      key={questionIndex}
                      className="bg-gradient-to-br from-ivory-mist to-white rounded-lg shadow-md overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-emerald-canopy/5 transition-colors duration-200"
                      >
                        <span className="text-lg font-semibold text-night-charcoal pr-4">
                          {faq.question}
                        </span>
                        <SafeIcon
                          icon={isOpen ? FiMinus : FiPlus}
                          className={`w-5 h-5 flex-shrink-0 transition-colors duration-200 ${
                            isOpen ? 'text-emerald-canopy' : 'text-gray-400'
                          }`}
                        />
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-6 pb-4 border-t border-gray-100">
                              <p className="text-gray-600 leading-relaxed pt-4">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact for More Questions */}
      <section className="py-20 bg-gradient-to-br from-emerald-canopy/10 to-ocean-teal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold text-night-charcoal mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our friendly team is here to help! Contact us directly for personalized assistance 
                with your booking or any other inquiries.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/94775145131?text=Hello! I have some questions about The Mountain Breeze Galle Cabanas."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-emerald-canopy to-ocean-teal text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  WhatsApp Us
                </a>
                <a
                  href="tel:+94775145131"
                  className="px-8 py-4 border-2 border-emerald-canopy text-emerald-canopy font-semibold rounded-lg hover:bg-emerald-canopy hover:text-white transition-all duration-200"
                >
                  Call Us
                </a>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-600">
                  <strong>Phone:</strong> +94 77 514 5131<br />
                  <strong>Email:</strong> contact@themountainbreezegalle.com
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default FAQs;