import { Button } from "@/components/buttons";


export const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to write your own success story?</h2>
        <p className="text-lg mb-8 opacity-90">
          Let's collaborate to bring your vision to life with innovative solutions
        </p>
        <Button variant="outline">Let's talk</Button>
      </div>
    </section>
  );
};
