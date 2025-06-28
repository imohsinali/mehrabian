const data = [
  {
    name: 'Abella Smith',
    role: 'Assistant Manager',
    text: 'Exceeded our expectations with quality and support.',
  },
  {
    name: 'Joel Dawson',
    role: 'Sales Manager',
    text: 'Professional service and reliable delivery.',
  },
  {
    name: 'Misha Cross',
    role: 'Manager',
    text: 'Genuine parts at a fair price, great service too.',
  },
];

export default function Testimonials() {
  return (
    <section className='py-20 bg-gray-100'>
      <div className='max-w-6xl mx-auto px-6 text-center'>
        <h3 className='text-2xl font-bold mb-12 text-blue-700'>
          What People Say
        </h3>
        <div className='grid md:grid-cols-3 gap-10'>
          {data.map((t, i) => (
            <div key={i} className='bg-white p-6 shadow rounded text-left'>
              <p className='italic mb-4 text-gray-700'>
                &ldquo;{t.text}&rdquo;
              </p>
              <p className='font-semibold'>{t.name}</p>
              <p className='text-sm text-gray-500'>{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
