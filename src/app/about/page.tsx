export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6 text-center min-h-[70vh]">
      <h1 className="text-5xl font-outfit font-bold mb-6">About <span className="gradient-text">YUKTA VERSE</span></h1>
      <p className="text-gray-400 max-w-2xl mx-auto mb-8">Our vision: Democratizing premium AI and technical education for the world.</p>
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-lg mx-auto backdrop-blur-md">
        <h2 className="text-2xl font-bold font-outfit mb-4 text-white">Get in Touch</h2>
        <div className="flex flex-col gap-4 text-gray-300">
          <p className="flex items-center justify-center gap-3"><span className="text-red-500 font-bold">Email:</span> connect@yuktaverse.com</p>
          <p className="flex items-center justify-center gap-3"><span className="text-red-500 font-bold">Phone:</span> +91 91107 29595</p>
        </div>
      </div>
    </div>
  );
}
