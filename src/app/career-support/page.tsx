import HiringPartners from "@/components/HiringPartners";

export default function CareerSupportPage() {
  return (
    <div className="pt-32 pb-20 min-h-[70vh] bg-[#050505]">
      <div className="container mx-auto px-6 text-center mb-20 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-outfit font-black mb-6 text-white drop-shadow-lg">Career <span className="text-red-500">Support</span></h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Your success forms the core metrics of our platform. Explore our placement process, dedicated mentorship networks, and our exclusive hiring partners.
        </p>
      </div>
      
      <HiringPartners />
    </div>
  );
}
