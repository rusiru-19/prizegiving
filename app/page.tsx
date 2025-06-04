'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
const profiles = [
  { name: "MAHA DURAGE SADUL CHATHSARA JAYASENA", image: "/images/IMG_0484.png" },
  { name: "VIDUNITHA THEWJAN GODEVITHANA", image: "/images/IMG_0484.png" },
  { name: "LAKIRA VINUTH KUMARASIRI JAYAWARDENA", image: "/images/IMG_0685.png" },
  { name: "RATHNAYAKATHUDUGODA BADALGE SADUPA MANSADA", image: "/images/IMG_0475.png" },
  { name: "PETHTHADURA SANUL DULNITHA", image: "/images/IMG_0479.png" },
  { name: "NAIDA BADUGE INUKA MANULDITH", image: "/images/IMG_0671.png" },
  { name: "PEMITHA RIYON HETTIARACHCHI", image: "/images/IMG_0481.png" },
  { name: "KEMIDU SEHAS THISRAKA KARUNARATHNA", image: "/images/IMG_0488.png" },
  { name: "KAMARE ARACHCHIGE ROCHAKA JIGYOOSH", image: "/images/IMG_0489.png" },
  { name: "ELABADAGE NINUK KULAN ABHIMANYU", image: "/images/IMG_0493.png" },
  { name: "HETTIHANDI KALUHEWA USARA AKAIN MENDIS", image: "/images/IMG_0497.png" },
  { name: "JUWANWADU SHANE UDHEERA", image: "/images/IMG_0470.png" },
  { name: "PANDITHA VIDHANA BIHANDU THATHSANDA GUNAWARDHANA", image: "/images/IMG_0494.png" },
  { name: "MUHUDUGAMUWA NANAYAKKARA LOKU HETTIGE SANUKA DULSANA", image: "/images/IMG_0500.png" },
  { name: "DON SIMON PATABANDI THENU THISATH DINSARA", image: "/images/IMG_0498.png" },
  { name: "MAHADURAGE LUSANDA RANHIRU PERERA", image: "/images/IMG_0695.png" },
  { name: "SAYUL DINSARA BOVITHANTHRI KARIYAWASAM", image: "/images/IMG_0502.png" },
  { name: "JAYAWARDENA GAMACHCHIGE SANIJA MANUMITHA JAYAWARDENA", image: "/images/IMG_0473.png" },
  { name: "KALUPAHANAGE VIDUN HANSANA SETHVIN", image: "/images/IMG_0689.png" },
  { name: "SENUJA RANDILU RANASINGHE", image: "/images/IMG_0506.png" },
  { name: "PATHEGAMAGE AKINDU LAKDULA", image: "/images/IMG_0510.png" },
  { name: "CHANULA DULEN THIRIMAWITHANA", image: "/images/IMG_0874.png" },
  { name: "SANDAPPERUMA ARCHCHIGE REJINALD SEHANSITH RANMUTHU", image: "/images/IMG_0701.png" },
  { name: "MALDENIYA HIBUTUGODAGE LOSHITHA NETHMAHAL VIJAYARATHNA", image: "/images/IMG_0515.png" },
  { name: "RATHNAWEERA HEWAWITHARANAGE YASINDU HANSAKA", image: "/images/IMG_3668.png" },
  { name: "DODAMPE KANKANAMAGE MENULA YETHUM SATHVIDU", image: "/images/IMG_0521.png" },
  { name: "VINUSH YASHEN FERNANDO", image: "/images/IMG_0538.png" },
  { name: "KUDAGE RESHAN SATHSINDU", image: "/images/IMG_0524.png" },
  { name: "SANDEW SASVIDU WALAWEGE", image: "/images/IMG_0527.png" },
  { name: "PAHALA GAMAGE GIHANSITH AVINDA", image: "/images/IMG_0532.png" },
  { name: "DORALAGODA KANKANAMGE NIDUKA DEWMINA", image: "/images/IMG_0541.png" },
  { name: "UDUWAKA HEWAGE GANIDU KAWISHNA", image: "/images/IMG_0544.png" },
  { name: "THISEW GAYATHSEN WEWALAGEDARA", image: "/images/IMG_0547.png" },
  { name: "KOTAGODA HETTIARACHCHI JENULA SANDEW", image: "/images/IMG_0551.png" },
  { name: "SENUL SETHVIN LOKUMALAGE", image: "/images/IMG_0554.png" },
  { name: "AHANGAMA WALAWEGE THIVEN SEDAS", image: "/images/IMG_0559.png" },
  { name: "NABADAWA GAMAGE LESANDUL SENULA AMARAKEERTHI", image: "/images/IMG_0698.png" },
  { name: "KORALEGAMA HEWAGE VINUGA SANDIV", image: "/images/IMG_0662.png" },
  { name: "HEWA ALANKARAGE NETHULA HARASARA ABEYSIRIWARDHANA SENARATH YAPA", image: "/images/IMG_0562.png" },
  { name: "SETHSANDU THINETH BATHEEGAMA", image: "/images/IMG_0567.png" },
  { name: "KANDAVINNE MUDIYANSELAGE IMIRA SUHAS WEERAWARDHANA", image: "/images/IMG_0573.png" },
  { name: "KARIYAWASAM BOVITHANTHRI DEVIN THESHAKA ABEYSEKARA", image: "/images/IMG_0575.png" },
  { name: "KANKANAM MANAGE JANIRU JITHSEN", image: "/images/IMG_0577.png" },
  { name: "RATHNAYAKA KORALE MUDALIGE SENULA VINDILA", image: "/images/IMG_0589.png" },
  { name: "KARIYAWASAM WARUGODAGE OVINDU VINSARA", image: "/images/IMG_0570.png" },
  { name: "KAHANDA KORALAGE CHENITHA MINDIV", image: "/images/IMG_0592.png" },
  { name: "YADDEHI WATHTHAGE SHENUTH THEJAN", image: "/images/IMG_0600.png" },
  { name: "LALPE DON MODHYA TATHMIRA WICKAMAGE", image: "/images/IMG_0595.png" },
  { name: "DAPANA DURAGE ADEESHA INDUMINA AMARAWANSHA", image: "/images/IMG_0612.png" },
  { name: "MAJUWANE GAMAGE KAVINSA SANDEEPA", image: "/images/IMG_0585.png" },
  { name: "WELAGE NIRMITH MINSITHU PRASANTHIKA", image: "/images/IMG_0579.png" },
  { name: "VIDAS SEYMIN GUNATHUNGA", image: "/images/IMG_0606.png" },
  { name: "DINTHARU LOSATH ABEYWICKRAMA GUNARATHNE", image: "/images/IMG_0471.png" },
  { name: "AYOD NEDISA RUPARATHNE", image: "/images/IMG_0615.png" },
  { name: "MIHINDU RIDMIKA DISANAYAKE", image: "/images/IMG_0623.png" },
  { name: "KAKGODA NETHULA ABHINAW THANTHRIGE", image: "/images/IMG_0656.png" },
  { name: "MANAMENDRA ACHARIGE THINUKA RAKMITHA", image: "/images/IMG_0640.png" },
  { name: "BIHANDU BINUWARA SETUNGA", image: "/images/IMG_0630.png" },
  { name: "CHENIRAU HANSANA HETTIARACHCHI", image: "/images/IMG_0659.png" },
  { name: "DANUJA DINSARA GALGANAGE DEVINUWARA", image: "/images/IMG_0635.png" },
  { name: "MALAWEERA ARACHCHIGE RUSANDU THEJAKA", image: "/images/IMG_0626.png" },
  { name: "WATAREKA GAMAGE IMETH CHANULKA", image: "/images/IMG_0664.png" },
  { name: "ISHIL INDUMINA VITHANAGE", image: "/images/IMG_0617.png" }
];

export default function ProfileCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProfile = profiles[currentIndex];

  // Handle left/right arrow key navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % profiles.length);
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + profiles.length) % profiles.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleClick = () => {
    setCurrentIndex((prev) => (prev + 1) % profiles.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-slate-700 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full flex items-center justify-between">
        {/* Left Side - Logo and Name */}
        <div className="flex-1 space-y-12 max-w-2xl">
          {/* Logo */}
          <div className="flex justify-start">
            <div className=" flex items-center justify-center">
        <Image 
          src="/logo.svg" 
          alt="School Logo" 
          width={80} 
          height={80} 
        />

            </div>
          </div>

          {/* Name */}
          <div className="space-y-4">
            <div className="w-2 h-24 bg-slate-700 rounded-full"></div>
            <h1 className="text-4xl font-light text-gray-900 leading-tight tracking-wide">
              {currentProfile.name.toLowerCase()}
            </h1>
            <p className="text-lg text-gray-600 font-light">
              Profile {currentIndex + 1} of {profiles.length}
            </p>
          </div>
        </div>

        {/* Right Side - Profile Photo */}
        <div className="flex flex-col items-center space-y-8">
          <div className="relative cursor-pointer group" onClick={handleClick}>
            {/* White circular background with enhanced styling */}
            <div className="w-96 h-96 bg-white rounded-full shadow-2xl relative overflow-hidden border-8 border-white group-hover:shadow-3xl transition-all duration-300 group-hover:scale-105">
              <img 
                src={currentProfile.image}
                alt={currentProfile.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjE2MCIgcj0iNjAiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTEwMCAzMDBDMTAwIDI1MCA1MCAyMDAgMjAwIDIwMFMzMDAgMjUwIDMwMCAzMDBIMTAwWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K';
                }}
              />
            </div>
            
            {/* Hover instruction */}
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm text-gray-600 whitespace-nowrap bg-white px-4 py-2 rounded-full shadow-lg">
                Click or use arrow keys to navigate
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}