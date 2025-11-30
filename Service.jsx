const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
    <div className="text-yellow-500 text-5xl mb-4 inline-block">{icon}</div>
    <h3 className="text-2xl font-bold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

function Services() {
  const services = [
    { icon: '🏭', title: 'Industrial', description: 'Sample text. Click to select the text box. Click again or double click to start editing the text.' },
    { icon: '🔧', title: 'Maintenance', description: 'Sample text. Click to select the text box. Click again or double click to start editing the text.' },
    { icon: '🏗️', title: 'Construction', description: 'Sample text. Click to select the text box. Click again or double click to start editing the text.' },
  ];

  return (
    <section className="bg-gray-100 py-20">                                                                                                                                                                              
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">What We Do</h2>
          <p className="text-lg text-gray-600">Our main services</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map(service => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
