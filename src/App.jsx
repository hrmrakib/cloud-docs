const App = () => {
  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <div>
        <h1 className='text-rose-500 font-bold text-3xl'>
          Hello, Bangladesh 2.0
        </h1>
        <div className='flex items-center justify-center gap-3 mt-3'>
          <a
            href='/CV.pdf'
            target='_blank'
            className='border bg-blue-500 text-white rounded px-3 py-2'
          >
            CV
          </a>
          <a
            href='/R.pdf'
            target='_blank'
            className='border bg-blue-500 text-white rounded px-3 py-2'
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
