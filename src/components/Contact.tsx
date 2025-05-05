
import { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert("Thank you for your message! In a real implementation, this would send an email.");
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="section-transition">
          <h2 className="section-heading">Get In Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="mb-8 text-muted-foreground">
                Feel free to reach out if you're looking for a motivated developer, have questions, 
                or just want to connect.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full text-primary mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">dineshdavuluri1@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full text-primary mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">+91 7032032570</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full text-primary mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">Guntur, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium mb-4">Connect With Me</h3>
                <div className="flex items-center gap-4">
                  <a 
                    href="https://linkedin.com/in/dinesh-davuluri-189x45268" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary/10 p-2 rounded-full text-primary hover:bg-primary/20 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  
                  <a 
                    href="https://github.com/DineshDavuluri" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary/10 p-2 rounded-full text-primary hover:bg-primary/20 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  
                  <a 
                    href="https://leetcode.com/u/ddinesh100" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary/10 p-2 rounded-full text-primary hover:bg-primary/20 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.111.744 1.715.744 1.314 0 2.387-1.094 2.387-2.387 0-.722-.311-1.442-.925-2.056l-2.725-2.725c-1.357-1.357-3.194-2.08-5.132-2.08-1.915 0-3.752.723-5.132 2.056l-4.33 4.363C1.055 12.278.334 14.133.334 16.049c0 1.915.722 3.752 2.083 5.132l4.33 4.332c1.357 1.357 3.194 2.08 5.132 2.08 1.915 0 3.752-.723 5.132-2.08l2.725-2.725c.613-.613.924-1.333.924-2.055 0-1.293-1.073-2.387-2.387-2.387-.604 0-1.202.229-1.715.744l.052-.062z" />
                    </svg>
                  </a>
                  
                  <a 
                    href="https://codechef.com/users/ddinesh49" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary/10 p-2 rounded-full text-primary hover:bg-primary/20 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.2574.0039c-.37.0087-.7353.041-1.1016.0973-2.0791.3201-3.8934 1.9216-4.5206 3.9707-.3989 1.3018-.4213 2.1903-.0817 3.2656.2546.8136.7566 1.4584 1.4727 1.9004.3547.2194.4999.2524 1.0507.2325.534-.0186.6543-.042.9004-.1836.3716-.2139.6566-.5159.8164-.8731.1657-.3705.1838-.9599.041-1.3613-.1397-.3942-.4239-.6759-.8633-.8515-.6371-.2546-.826-.6144-.623-1.1856.1956-.5475.5501-.957 1.0487-1.2128.6097-.3129 1.4391-.3177 2.0468-.0118.5436.2742.963.7911 1.1406 1.4043.0771.2679.0893.4208.0723.8692-.0212.5587-.0456.6518-.2559 1.0312-.2.3614-.1996.3618-.0078.0078-.5692.9518-1.1737 1.5982-2.0566 2.1973-.6854.4659-1.912.9948-2.4524 1.0566-.9185.1049-1.3294.2929-1.7031.7813-.4439.5784-.5953 1.4818-.3848 2.291.1644.63.7103 1.1729 1.3477 1.3418.4592.1222.7158.1136 1.3242-.0469.4818-.1273 1.0659-.4683 1.0723-.629.0039-.1051-.1199-.3242-.2754-.4883-.5196-.5486-.3164-1.3699.4102-1.6582.2818-.112.3734-.1172 1.3359-.0664.9768.0518 1.0664.043 1.836-.1894.893-.2701 1.3448-.2544 2.0879.0664.6483.2804 1.1442.3644 2.1171.3613 1.0796-.0034 1.5241-.0775 2.5469-.4238.7396-.2508 1.0312-.2497 1.8672.0078.4201.1296.5134.1371 1.502.1289.9739-.0083 1.0887-.0189 1.4024-.1367.4219-.1591.6036-.334.7539-.7266.1354-.3534.1348-.7551-.002-1.1094-.1724-.4461-.4555-.6837-.9746-.8203-.9185-.2416-1.2358-.4915-1.9767-1.5586-.6838-.983-1.5781-1.8332-2.5215-2.4004-.4511-.2704-1.3215-.6348-1.4492-.6075-.1094.0235-.0892.1372.0527.3066.4482.5356.8861 1.2989.9492 1.6387.1329.7163-.1629 1.4487-.7852 1.9336-.5876.4578-1.5292.5245-2.1171.1504-.3317-.2116-.5131-.4839-.6328-.9512-.079-.3067-.0713-.4443.0488-1.0273.126-.6059.1265-.7346.0059-1.1895-.1346-.5081-.3937-.9912-.75-1.4024-.208-.2398-.6661-.6033-.8164-.648-.1345-.0402-.1386-.0392-.164.0352-.0487.1428-.0666.8021-.0254.9824.0483.211.267.7531.3789.9335.1092.177.5545.6453.6367.6602.0422.0077.084.0465.0937.084.0097.0376-.084.1913-.207.3438-.3642.4534-.7577 1.123-.9961 1.6973-.1016.2449-.2128.4828-.248.5312-.0986.136-.315.2617-.6055.353-.4355.1368-.6297.3074-.7715.6797-.0849.2234-.0937.3031-.0644.586.0983.9547.9401 1.5766 1.9355 1.4277.2109-.0315.5238-.1443.6934-.25.4463-.2782.5525-.6559.3418-1.2129-.1416-.3746-.0992-.543.1797-.7187.5042-.3167.8619-.8385 1.0938-1.6016.4419-1.4498.5273-1.6307.959-2.0156.3028-.2697.3525-.293.7012-.3106.3837-.0195.786-.1324 1.0352-.291.244-.1544.6582-.5934.6582-.6992 0-.045.0524-.0625.1641-.0625.2231 0 .529-.1324.7051-.3066.1727-.1704.1875-.2125.1875-.5156 0-.27-.0177-.3619-.125-.6153-.4523-1.0658-1.4598-1.7344-2.5976-1.7304-.374.0013-.4947.0178-.8477.1132-1.9376.5237-2.2902.5984-2.3965.5118-.0677-.0555-.0334-.172.002-.7364.0312-.4963.0242-.9642-.0156-1.0332-.0397-.069-.3254-.1255-.8633-.1718-.0701-.006-.1438-.0083-.2207-.0059Zm5.8984 6.9707c.2793.0122.4932.288.4063.5253-.1759.4798-.8299.4179-.914-.0859-.0663-.3973.1778-.4584.5078-.4394Zm1.4844.127.3262.2055-.1113.1914c-.1964.3379-.4945.4628-.8418.3535-.3687-.116-.5444-.4292-.3965-.7089.0378-.0716.1085-.1113.2207-.1152.0939-.0033.1343.0047.2793.082.4519.2405.3819.2113.5234.2832Zm-8.6055.5761c.4232.0012.8916.1469 1.219.3301.5206.2917.8843.7492 1.0684 1.3457.0696.2259.084.4446.084.8066-.0006 1.0545-.6783 2.0415-1.7129 2.5-1.0542.4666-2.3518.3527-3.2754-.2871-.9087-.6287-1.3588-1.6948-1.1699-2.7637.0611-.3452.1495-.5733.3437-.8789.4264-.6746 1.0036-1.0098 1.8164-1.0527a2.834 2.834 0 01.1797-.0039c.1198-.0022.285-.0035.4472-.0039Zm13.8691.2012c.4117.0341.5663.389.334.7656-.0891.1441-.2457.2347-.4086.2363-.2548.0026-.5019-.2057-.5019-.4218 0-.3064.2417-.632.5765-.5801Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="bg-card border border-border p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-4">Send Me a Message</h3>
                
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2 text-sm">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="contact-input"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 text-sm">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="contact-input"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-sm">Your Message</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="contact-input min-h-[120px]"
                    placeholder="Hello, I'd like to talk about..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-lg transition-all w-full flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
