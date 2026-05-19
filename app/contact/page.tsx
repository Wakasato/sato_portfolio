export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Get in Touch</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>

      <form className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium">Name</label>
          <input 
            type="text" 
            id="name" 
            className="px-4 py-2 border border-gray-200 dark:border-gray-800 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            placeholder="Your name"
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <input 
            type="email" 
            id="email" 
            className="px-4 py-2 border border-gray-200 dark:border-gray-800 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            placeholder="your@email.com"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium">Message</label>
          <textarea 
            id="message" 
            rows={5}
            className="px-4 py-2 border border-gray-200 dark:border-gray-800 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow resize-y"
            placeholder="Your message..."
          />
        </div>

        <button 
          type="button" 
          className="mt-4 px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
