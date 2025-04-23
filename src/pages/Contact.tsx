import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const Contact = () => {
  return (
    <>
      <PageHeader 
        title="Contact" 
        subtitle="Prenez contact avec nous pour échanger sur vos besoins et problématiques." 
      />
      
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;