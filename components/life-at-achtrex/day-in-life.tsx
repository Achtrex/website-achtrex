import Image from 'next/image';

export function DayInLife() {
  const activities = [
    {
      image: "/life-at-achtrex/collaborative.png",
      title: "Collaborative Team Meetings",
      description: "Our team meetings are dynamic and collaborative, fostering open communication and idea sharing."
    },
    {
      image: "/life-at-achtrex/Rectangle 789.png",
      title: "Creative Brainstorming Sessions",
      description: "We encourage creative thinking and brainstorming to generate innovative solutions for our clients."
    },
    {
      image: "/life-at-achtrex/focused.png",
      title: "Focused Project Work",
      description: "Our project work is focused and efficient, ensuring we deliver high-quality results on time."
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 font-manrope text-gray-900">A Day in the Life</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {activities.map((activity, index) => (
          <div key={index} className="group">
            <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
              <Image
                src={activity.image}
                alt={activity.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 font-manrope">{activity.title}</h3>
            <p className="text-gray-800 text-sm leading-relaxed font-manrope">
              {activity.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
