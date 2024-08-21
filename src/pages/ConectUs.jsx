import React, { useState } from 'react';
import Header from '../componants/Header';
import Footer from '../componants/Footer';
import 'leaflet/dist/leaflet.css';

const faqData = [
  {
    id: 'technical-issues',
    category: 'Technical Issues',
    questions: [
      {
        id: 'technical-steps',
        question: 'Steps and information gathering when the game crashes without errors',
        answer: 'Follow these steps: Check logs, ensure system meets requirements, update drivers, and contact support with detailed information.'
      },
      {
        id: 'technical-long-analysis',
        question: 'Long analysis of files in the launcher during game updates',
        answer: 'Ensure your launcher and game files are not corrupted. Check disk space and try restarting the launcher or PC.'
      },
      {
        id: 'technical-mac-os',
        question: 'Installing War Thunder on MAC OS systems',
        answer: 'Use a compatible emulator or boot into Windows. Currently, War Thunder does not support native MAC OS installation.'
      },
      {
        id: 'technical-steam-updates',
        question: 'Problems with game updates in Steam',
        answer: 'Verify game files through Steam, check your internet connection, and ensure Steam is up to date.'
      },
      {
        id: 'technical-system-requirements',
        question: 'System requirements for War Thunder',
        answer: 'Visit the official War Thunder website or Steam page for the latest system requirements.'
      },
      {
        id: 'technical-error-8222000b',
        question: 'Error 8222000B: Fatal sockets initialization error',
        answer: 'Check your network settings, ensure your firewall is not blocking the game, and restart your router.'
      }
    ]
  },
  {
    id: 'account-management',
    category: 'Account Management',
    questions: [
      {
        id: 'account-link-steam',
        question: 'Linking a Gaijin account to a Steam account',
        answer: 'Log into your Gaijin account and follow the instructions in the account settings to link to Steam.'
      },
      {
        id: 'account-pc-to-playstation',
        question: 'Transferring an account from PC to PlayStation',
        answer: 'Log into your Gaijin account and use the account transfer option in the settings menu.'
      },
      {
        id: 'account-pc-to-xbox',
        question: 'Transferring an account from PC to Xbox',
        answer: 'Log into your Gaijin account and follow the instructions for account transfer to Xbox in the settings.'
      },
      {
        id: 'account-playstation-to-pc',
        question: 'Transferring an account from PlayStation to PC',
        answer: 'Log into your Gaijin account and use the account transfer feature to move from PlayStation to PC.'
      },
      {
        id: 'account-xbox-to-pc',
        question: 'Transferring an account from Xbox to PC',
        answer: 'Access your Gaijin account settings to transfer your account from Xbox to PC.'
      },
      {
        id: 'account-link-playstation-email',
        question: 'How to link a PlayStation game account to your email',
        answer: 'Go to your account settings on the PlayStation network and add your email address in the linked accounts section.'
      }
    ]
  },
  {
    id: 'financial-issues',
    category: 'Financial Issues',
    questions: [
      {
        id: 'financial-send-gift',
        question: 'How to send a gift through the wishlist in War Thunder',
        answer: 'Go to the wishlist section, select the item, and choose the gift option to send it to another player.'
      },
      {
        id: 'financial-did-not-receive',
        question: 'Did not receive Eagles / did not get the purchase / item not credited',
        answer: 'Contact support with your transaction details and proof of purchase to resolve the issue.'
      },
      {
        id: 'financial-payment-not-received',
        question: 'Payment not received via payment terminals / Incorrect number of Eagles received',
        answer: 'Check your payment confirmation and contact support for discrepancies or issues with the payment.'
      },
      {
        id: 'financial-buy-golden-eagles',
        question: 'How to buy Golden Eagles',
        answer: 'Purchase Golden Eagles through the in-game store or website using available payment methods.'
      },
      {
        id: 'financial-mobile-payment',
        question: 'Payment not received from mobile phone account',
        answer: 'Ensure your payment was processed correctly and contact support if the issue persists.'
      },
      {
        id: 'financial-premium-day',
        question: 'Premium for a whole day',
        answer: 'Purchase a premium subscription from the in-game store or website for daily premium benefits.'
      }
    ]
  },
  {
    id: 'gameplay-issues',
    category: 'Gameplay Issues',
    questions: [
      {
        id: 'gameplay-saving-progress',
        question: 'Saving progress for daily logins through the mobile version of the game',
        answer: 'Ensure you are logged into the same account on both mobile and PC versions to sync progress.'
      },
      {
        id: 'gameplay-find-game-masters',
        question: 'How to find game masters / Game rules questions',
        answer: 'Check the official War Thunder forums or contact support for information on game masters and rules.'
      },
      {
        id: 'gameplay-report-behavior',
        question: 'Reporting unsportsmanlike behavior or the use of prohibited modifications',
        answer: 'Submit a report through the in-game reporting system or contact support with detailed information.'
      },
      {
        id: 'gameplay-prohibited-modifications',
        question: 'Prohibited War Thunder modifications (cheats)',
        answer: 'Avoid using cheats and report any instances of cheating to maintain fair play in the game.'
      },
      {
        id: 'gameplay-team-killing',
        question: 'Team killing (killing allies)',
        answer: 'Report team killing incidents through the in-game report system to address the issue.'
      },
      {
        id: 'gameplay-aiming-control',
        question: 'Tank battles: aiming control',
        answer: 'Consult the in-game tutorials or settings to adjust aiming controls and improve your gameplay experience.'
      }
    ]
  }
];

const ContactUs = () => {
  const [open, setOpen] = useState(null);

  const toggleOpen = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <>
      <Header title="Contact Us" />
      <div className="bg-gray-700 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
            <p className="text-lg text-center mb-8">Feel free to reach out to us with any questions or concerns. We're here to help!</p>

            <div className="flex flex-col md:flex-row justify-center gap-8">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                <p className="mb-4">Email: support@war-thunder-shop.com</p>
                <p className="mb-4">Phone: +1 (234) 567-890</p>
                <p className="mb-4">Address: 123 War Thunder Ave, Gaming City, GC 12345</p>
              </div>

              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">Send Us a Message</h3>
                <form action="#" method="POST" className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-center mb-4">Frequently Asked Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqData.map((category) => (
                <div key={category.id} className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3 bg-gray-950 py-4 px-20 text-center rounded-full">{category.category}</h4>
                  {category.questions.map((item) => (
                    <div key={item.id} className="border-t border-gray-600 pt-4 rounded-xl">
                      <button
                        onClick={() => toggleOpen(item.id)}
                        className="w-full text-left py-2 px-4 text-lg font-semibold focus:outline-none"
                      >
                        {item.question}
                        <span className={`ml-2 ${open === item.id ? 'text-gray-400' : 'text-gray-600'}`}>
                          {open === item.id ? '-' : '+'}
                        </span>
                      </button>
                      {open === item.id && (
                        <div className="pt-2 text-gray-300">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default ContactUs;
