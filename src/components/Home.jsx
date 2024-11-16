import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Home = () => {
  const characters = [
    {
      name: 'Walter White',
      alias: 'Heisenberg',
      occupation: 'Chemistry Teacher / Meth Manufacturer',
      image: 'https://th.bing.com/th/id/OIP.cRRUrvy3jhgkL2Fb7fyMAQHaE3?rs=1&pid=ImgDetMain',
    },
    {
      name: 'Jesse Pinkman',
      alias: "Cap'n Cook",
      occupation: 'Meth Manufacturer / Drug Dealer',
      image: 'https://th.bing.com/th/id/R.f502c625b532fde30f2d3e71942153a8?rik=BrR7%2b4l4w14ZsQ&riu=http%3a%2f%2fimages.amcnetworks.com%2fbreakingbad.amctv.com.br%2fwp-content%2fuploads%2f2015%2f01%2fJesse1.jpg&ehk=8LPwEwDije%2buzsYMLFFvX5CDZ%2fmQu2xJ8qq1nk4WKTU%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      name: 'Skyler White',
      alias: 'Sky',
      occupation: 'Accountant / Car Wash Manager',
      image: 'https://th.bing.com/th/id/OIP.nd_-nrAp8eOwizrYpB2v8QHaE6?rs=1&pid=ImgDetMain',
    },
    {
      name: 'Hank Schrader',
      alias: 'ASAC Schrader',
      occupation: 'DEA Agent',
      image: 'https://th.bing.com/th/id/R.f405c022be0ee7ad5cf848d47a671d18?rik=qZ6gtysSkO0Q3A&riu=http%3a%2f%2fimages.amcnetworks.com%2famc.com%2fwp-content%2fuploads%2f2015%2f04%2fcast_bb_800x600_hank-schrader.jpg&ehk=u7CncLtA0dOIsBTLg6SRnGZPXkcV%2fZmN%2f%2b3DZR%2fLYQY%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      name: 'Mike Ehrmantraut',
      alias: 'ASAC Schrader',
      occupation: 'DEA Agent',
      image: 'https://th.bing.com/th/id/OIP.F5BvgnF1LUOcFJobS6MA0AHaEX?rs=1&pid=ImgDetMain',
    },
    {
      name: 'Gus Fring',
      alias: 'Giancarlo Esposito',
      occupation: 'Drug Mafia/Restaurant Owner',
      image: 'https://i.pinimg.com/736x/35/17/6d/35176d112f29a10f13f6e87165067b37.jpg',
    },
    {
      name: 'Saul Goodman',
      alias: 'Bob Odenkirk',
      occupation: 'Lawyer',
      image: 'https://www.slashfilm.com/img/gallery/the-16-best-saul-goodman-moments-in-better-call-saul-and-breaking-bad/l-intro-1660832678.jpg',
    },
    {
    name: 'Tod',
    alias: 'Jesse Plemons',
    occupation: 'Gangster',
    image: 'https://th.bing.com/th/id/OIP.FuHypVgyjvFU7cD3Dy-uvgHaDt?rs=1&pid=ImgDetMain',
    },
  ];

  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const navigate = useNavigate()
  const handleClick =()=>{
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-zinc-900">
      <header className="bg-black p-4 shadow-lg border-b border-green-600">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className="text-4xl font-extrabold">
              <span className="text-green-500">B</span>
              <span className="text-yellow-500">B</span>
            </h1>
            <div className="text-white">
              <div className="text-sm">Breaking</div>
              <div className="text-sm -mt-1">Bad</div>
            </div>
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors" onClick={handleClick}>
            Logout
          </button>
        </div>
      </header>


      <main className="max-w-6xl mx-auto p-8">
        <h2 className="text-center text-5xl font-bold mb-12">
          <span className="text-green-500">Breaking</span>
          <span className="text-yellow-500 ml-2">Bad</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {characters.map((character) => (
            <div
              key={character.name}
              onClick={() => setSelectedCharacter(character)}
              className="bg-zinc-800 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer border border-zinc-700 hover:border-green-500"
            >
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-green-500">{character.name}</h3>
                <p className="text-gray-400">Alias: {character.alias}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

    
      {selectedCharacter && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-zinc-800 rounded-lg max-w-2xl w-full p-6">
            <div className="flex justify-between mb-4">
              <h2 className="text-2xl font-bold text-green-500">{selectedCharacter.name}</h2>
              <button
                onClick={() => setSelectedCharacter(null)}
                className="text-gray-400 hover:text-white"
              >
                Close
              </button>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={selectedCharacter.image}
                alt={selectedCharacter.name}
                className="w-full md:w-1/3 h-64 object-cover rounded-lg"
              />
              <div>
                <p className="text-gray-300 mb-2">
                  <span className="font-bold">Alias:</span> {selectedCharacter.alias}
                </p>
                <p className="text-gray-300 mb-2">
                  <span className="font-bold">Occupation:</span> {selectedCharacter.occupation}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black text-gray-400 p-4 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          © 2023 Breaking Bad Fan Site. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
