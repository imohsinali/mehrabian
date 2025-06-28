export default function Services() {
  return (
    <section className='py-20'>
      <div className='max-w-6xl mx-auto px-6 text-center'>
        <h3 className='text-2xl font-bold mb-12 text-blue-700'>Our Services</h3>
        <div className='grid md:grid-cols-3 gap-10 text-left'>
          <div className='bg-gray-50 p-6 rounded shadow'>
            <h4 className='font-semibold text-lg mb-2'>Packaging & Storage</h4>
            <p className='text-gray-600'>Secure handling of every order.</p>
          </div>
          <div className='bg-gray-50 p-6 rounded shadow'>
            <h4 className='font-semibold text-lg mb-2'>Warehouse Service</h4>
            <p className='text-gray-600'>
              Central UAE hub for faster dispatch.
            </p>
          </div>
          <div className='bg-gray-50 p-6 rounded shadow'>
            <h4 className='font-semibold text-lg mb-2'>Delivery Services</h4>
            <p className='text-gray-600'>
              Cost-effective or express delivery options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
