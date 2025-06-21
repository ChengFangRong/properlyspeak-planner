export default function Home() {
  return (
    // Outer container: Added px-4 (or px-6) for horizontal padding on all screen sizes
    <div className="flex flex-col items-center min-h-screen bg-purple-100 pt-10 pb-50 px-4 sm:px-6 md:px-8">
      
      <div className="w-full">
        <h2 className='text-center'>SpeakProperly</h2>
      </div>

      {/* The Card: Keep w-full and max-w classes */}
      <div className='mx-auto w-full md:max-w-md lg:max-w-lg xl:max-w-xl bg-white p-6 shadow-md pb-15 rounded-3xl text-center mt-8 mb-8'>
        <h3 className='pb-2'>Links:</h3>
        <h5 className="mt-4 mb-2">Planning</h5>
        <div className="mb-2">
          <a target="_blank" rel="noopener noreferrer" href='https://design.penpot.app/#/dashboard/recent?team-id=d27e272d-6b22-8014-8006-5e619dc52a7c'>
            Penpot
          </a>
        </div>
        <div className="mb-4">
          <a target="_blank" rel="noopener noreferrer" href='https://app.diagrams.net/#G1TqgjCPreJzxc5lPbeIdlFuPyR1HDMntB#%7B%22pageId%22%3A%22ACr57oHHJw1U8olHCRNs%22%7D'>
            draw.io
          </a>
        </div>
        <h5 className="mt-4 mb-2">Socials</h5>
        <div>
          <a target="_blank" rel="noopener noreferrer" href='https://www.tiktok.com/@properlyspeak?lang=en'>
            TikTok
          </a>
        </div>
      </div>
    </div>
  );
}