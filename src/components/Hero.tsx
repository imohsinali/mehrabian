export default function Hero() {
  return (
    <section
      className='relative bg-cover bg-center h-[70vh] flex items-center justify-center text-white'
      style={{ backgroundImage: "url('/home-img1.jpg')" }}
    >
      <div className='bg-black/50 absolute inset-0' />
      <div className='relative z-10 text-center px-6'>
        <h2 className='text-4xl md:text-5xl font-bold mb-4'>
          ORIGINAL & OEM SPARE PARTS SUPPLIER
        </h2>
        <p className='text-lg mb-6 max-w-xl mx-auto'>
          Your one-stop solution for heavy equipment parts & services.
        </p>
        <a
          href='#contact'
          className='inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm font-semibold'
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
