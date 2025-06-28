const features = [
  {
    title: 'Large Stock',
    text: 'New, used and reconditioned parts available.',
  },
  {
    title: 'Fast Delivery',
    text: 'Swift on-site & off-site equipment repair.',
  },
  { title: 'Pack & Store', text: 'Careful packaging, storage, and shipping.' },
];

export default function Features() {
  return (
    <section className='py-20 bg-gray-100'>
      <div className='max-w-6xl mx-auto px-6 text-center'>
        <h3 className='text-2xl font-bold mb-12 text-blue-700'>
          Why Choose Us
        </h3>
        <div className='grid md:grid-cols-3 gap-10'>
          {features.map((f, i) => (
            <div key={i} className='bg-white shadow-md rounded-lg p-6'>
              <h4 className='text-lg font-semibold mb-2'>{f.title}</h4>
              <p className='text-gray-600'>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
