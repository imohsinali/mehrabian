export default function Footer() {
  return (
    <footer className='bg-blue-700 text-white text-center py-8' id='contact'>
      <div className='max-w-4xl mx-auto px-4 space-y-2'>
        <p>📍 Offoice no 8 b, 2nd floor,Imtiaz Plaza the Mall road Lahore </p>
        <p>📞 +923352639410 &nbsp;|&nbsp; ✉ info@mehrabian.com.pk</p>
        <p className='text-sm text-gray-200'>
          © {new Date().getFullYear()} Mehrabian
        </p>
      </div>
    </footer>
  );
}
