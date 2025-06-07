import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';

interface ContactPageProps {
  darkMode: boolean;
}

const ContactPage: React.FC<ContactPageProps> = ({ darkMode }) => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <div className="lg:col-span-2">
          <section className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} rounded-lg shadow-md p-6 transition-colors duration-200`}>
            <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'} flex items-center`}>
              <Phone className="mr-2" size={24} />
              Contact Us
            </h2>
            <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Have questions or feedback about our Mumbai Local Train Helper? We'd love to hear from you!
              Fill out the form below and our team will get back to you as soon as possible.
            </p>
            <ContactForm darkMode={darkMode} />
          </section>
        </div>
        
        <div>
          <section className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} rounded-lg shadow-md p-6 mb-6 transition-colors duration-200`}>
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} mt-1 mr-3 flex-shrink-0`} size={18} />
                <div>
                  <p className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Email</p>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>info@mumbaitrainhelper.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} mt-1 mr-3 flex-shrink-0`} size={18} />
                <div>
                  <p className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Phone</p>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>+91 22 1234 5678</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} mt-1 mr-3 flex-shrink-0`} size={18} />
                <div>
                  <p className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Office</p>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    123 Railway Avenue, <br />
                    Near CST Station, <br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <section className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} rounded-lg shadow-md p-6 transition-colors duration-200`}>
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Office Hours</h3>
            <div className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <p className="mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="mb-2">Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ContactPage;