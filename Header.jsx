import Button from './Button';

function Header() {
  return (
    <header className="bg-sky-800 text-white py-4 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 ">
        <div className="text-2xl font-bold text-gray-800">
          <a href="#" className="flex justify-center gap-2 p-8">MACHINERY</a>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-300 hover:text-yellow-500">Home</a>
          <a href="#" className="text-gray-300 hover:text-yellow-500">About</a>
          <a href="#" className="text-gray-300 hover:text-yellow-500">Services</a>
          <a href="#" className="text-gray-300 hover:text-yellow-500">Contact</a>
        </div>
        <div>
          <Button variant="primary">Get a Quote</Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
