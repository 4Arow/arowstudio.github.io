const games = [
  {
    title: "Cook Food",
    image: "https://ext.same-assets.com/3486221358/3558734755.webp",
    playing: "1.4K+ playing",
    active: "1.4K+",
    visits: "2.3M+",
    playUrl: "https://www.roblox.com/games/140394439509533/Cook-Food",
  },
  {
    title: "[EP78]Bathroom Attack",
    image: "https://ext.same-assets.com/4211761806/1988287695.webp",
    playing: "3.1K+ playing",
    active: "3.1K+",
    visits: "443.5M+",
    playUrl: "https://www.roblox.com/games/13698105873/EP78-Bathroom-Attack",
  },
  {
    title: "⚽Soccer Ball",
    image: "https://ext.same-assets.com/2386082360/1849593653.webp",
    playing: "17 playing",
    active: "17",
    visits: "31.4M+",
    playUrl: "https://www.roblox.com/games/7192060644/Soccer-Ball#ropro-quick-search",
  },
  {
    title: "Block Eaters",
    image: "https://ext.same-assets.com/599397622/1355909673.webp",
    playing: "421 playing",
    active: "421",
    visits: "41.9M+",
    playUrl: "https://www.roblox.com/games/16178787698/Block-Eaters",
  },
  {
    title: "Who chewed me",
    image: "https://ext.same-assets.com/3533191910/1146916693.gif",
    playing: "617 playing",
    active: "617",
    visits: "15.9M+",
    playUrl: "https://www.roblox.com/games/93566697482224/Who-chewed-me#ropro-quick-search",
  },
  {
    title: "Squid Game 2",
    image: "https://ext.same-assets.com/245303082/4138839318.webp",
    playing: "955 playing",
    active: "955",
    visits: "1.9B+",
    playUrl: "https://www.roblox.com/games/7549229959/Squid-Game",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white font-sans">
      {/* Navigation bar */}
      <nav className="fixed w-full top-4 z-50 px-4 transition-all duration-300">
        <div className="container mx-auto bg-zinc-800/90 backdrop-blur-lg rounded-2xl border border-zinc-700/50 shadow-lg transition-all duration-300 py-3">
          <div className="flex justify-between items-center px-4">
            <a className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent" href="/">Arow Studio</a>
            <div className="hidden md:flex items-center space-x-4">
              <a className="bg-blue-600 text-white px-4 py-2 rounded-xl transition-all transform hover:scale-105" href="/">Home</a>
              <a className="bg-zinc-700/50 hover:bg-zinc-600 text-white px-4 py-2 rounded-xl transition-all transform hover:scale-105" href="/games">Our Games</a>
              <a href="https://discord.com/invite/2kvC8CpjDz" target="_blank" rel="noopener noreferrer" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl transition-all transform hover:scale-105 flex items-center gap-2"><span className="inline-block align-middle"><svg height="20" width="20" viewBox="0 0 20 20" fill="currentColor"><path d="M16.472 3.785A16.89 16.89 0 0 0 13.807 3c-.084.144-.18.334-.246.484a16.231 16.231 0 0 0-4.122 0 12.048 12.048 0 0 0-.248-.484 16.894 16.894 0 0 0-2.665.785C2.053 7.247.347 10.612.176 14.046a16.783 16.783 0 0 0 4.92 2.501c.395-.527.748-1.085 1.033-1.671a10.785 10.785 0 0 1-1.624-.785c.137-.099.271-.201.401-.307a11.945 11.945 0 0 0 10.187 0c.13.106.264.208.401.307a10.556 10.556 0 0 1-1.628.785c.287.587.64 1.144 1.034 1.671a16.785 16.785 0 0 0 4.92-2.501c-.2-3.434-1.906-6.799-5.279-10.261ZM7.462 13.215c-.789 0-1.436-.724-1.436-1.612s.637-1.612 1.436-1.612c.803 0 1.454.728 1.436 1.612 0 .888-.633 1.612-1.436 1.612Zm5.076 0c-.789 0-1.434-.724-1.434-1.612s.638-1.612 1.438-1.612c.803 0 1.453.728 1.437 1.612 0 .888-.634 1.612-1.438 1.612Z" /></svg></span>Talk to us</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="pt-32 mb-8">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-10">
            <h1 className="text-6xl font-bold mb-4">Arow Studio</h1>
            <p className="text-xl mb-4 text-gray-300">Top Roblox Graphic Artist</p>
          </div>

          {/* Featured Games Section */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-center mb-8">Featured Games</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {games.map((game) => (
                <div key={game.title} className="bg-zinc-800 rounded-lg overflow-hidden transform hover:scale-105 transition-all">
                  <div className="w-full h-48 relative">
                    <img src={game.image} alt={game.title} className="w-full h-48 object-cover" />
                    <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-sm">{game.playing}</div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-3">{game.title}</h3>
                    <div className="flex justify-between items-center mb-4 text-sm text-gray-300">
                      <div className="flex items-center gap-1"><span>Active: {game.active}</span></div>
                      <div className="flex items-center gap-1"><span>Visits: {game.visits}</span></div>
                    </div>
                    <a href={game.playUrl} target="_blank" rel="noopener noreferrer" className="w-full block bg-zinc-700 hover:bg-zinc-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-center">Play Game</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-zinc-800 p-8 rounded-lg text-center transform hover:scale-105 transition-all">
              <div className="text-4xl font-bold mb-2">2B+</div>
              <div className="text-gray-400">Total Visits</div>
            </div>
            <div className="bg-zinc-800 p-8 rounded-lg text-center transform hover:scale-105 transition-all">
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="bg-zinc-800 p-8 rounded-lg text-center transform hover:scale-105 transition-all">
              <div className="text-4xl font-bold mb-2">7,3K+</div>
              <div className="text-gray-400">Active Players</div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-4">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-zinc-800 p-8 rounded-lg text-center transform hover:scale-105 transition-all">
                <h3 className="text-xl font-bold mb-2">Professional Graphics</h3>
                <p className="text-gray-400">High-quality 3D models and textures that bring your games to life</p>
              </div>
              <div className="bg-zinc-800 p-8 rounded-lg text-center transform hover:scale-105 transition-all">
                <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
                <p className="text-gray-400">Quick turnaround times without compromising on quality</p>
              </div>
              <div className="bg-zinc-800 p-8 rounded-lg text-center transform hover:scale-105 transition-all">
                <h3 className="text-xl font-bold mb-2">Client Satisfaction</h3>
                <p className="text-gray-400">Working closely with you to achieve your vision</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
