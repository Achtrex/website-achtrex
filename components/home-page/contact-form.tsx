import { Button } from "@/components/buttons";

const ContactForm = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get in touch with us.<br/>We're here to assist you.</h2>
        </div>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-cyan-500"
            />
            <input 
              type="email" 
              placeholder="E-mail Address" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-cyan-500"
            />
          </div>
          <input 
            type="text" 
            placeholder="Message" 
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-cyan-500"
          />
          <textarea 
            placeholder="Phone number (Optional)" 
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-cyan-500"
          ></textarea>
          <Button variant="primary" className="w-full md:w-auto">
            Submit Now
          </Button>
        </form>
      </div>
    </section>
  );
};


export default ContactForm;