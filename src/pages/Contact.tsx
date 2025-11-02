import { BUSINESS_INFO, getHoursForDay } from '../data/businessInfo';

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <section className="contact-info">
        <div>
          <h3>Location</h3>
          <p>{BUSINESS_INFO.name}</p>
          <p>{BUSINESS_INFO.address.street}</p>
          <p>{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state}</p>
        </div>

        <div>
          <h3>Hours</h3>
          <p>Monday - Thursday: {getHoursForDay('Monday')}</p>
          <p>Friday & Saturday: {getHoursForDay('Friday')}</p>
          <p>Sunday: {getHoursForDay('Sunday')}</p>
        </div>

        <div>
          <h3>Contact</h3>
          <p>Phone: {BUSINESS_INFO.phone}</p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
