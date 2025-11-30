import Button from './Button';

function Hero() {
  return (
    <section
      className="relative bg-sky-800 text-white py-32 px-6 text-center"
      style={{ backgroundImage: "url('https://images01.nicepage.com/c461c07a441a5d220e8feb1a/8153997e52a752a185150c45/f.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 container mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Machinery Parks for Industrial</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          We are a team of professionals who are passionate about creating beautiful and functional websites.
        </p>
        <Button variant="primary">Read More</Button>
      </div>
    </section>
  );
}

export default Hero;
