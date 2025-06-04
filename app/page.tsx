'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
const profiles = [
  { name: "MAHA DURAGE SADUL CHATHSARA JAYASENA", image: "/IMG_0484.webp" },
  { name: "VIDUNITHA THEWJAN GODEVITHANA", image: "/IMG_0686.webp" },
  { name: "LAKIRA VINUTH KUMARASIRI JAYAWARDENA", image: "/IMG_0685.webp" },
  { name: "RATHNAYAKATHUDUGODA BADALGE SADUPA MANSADA", image: "/IMG_0475.webp" },
  { name: "PETHTHADURA SANUL DULNITHA", image: "/IMG_0479.webp" },
  { name: "NAIDA BADUGE INUKA MANULDITH", image: "/IMG_0671.webp" },
  { name: "PEMITHA RIYON HETTIARACHCHI", image: "/IMG_0481.webp" },
  { name: "KEMIDU SEHAS THISRAKA KARUNARATHNA", image: "/IMG_0488.webp" },
  { name: "KAMARE ARACHCHIGE ROCHAKA JIGYOOSH", image: "/IMG_0489.webp" },
  { name: "ELABADAGE VINUK KULAN ABHIMANYU", image: "/IMG_0493.webp" },
  { name: "HETTIHANDI KALUHEWA USARA AKAIN MENDIS", image: "/IMG_0497.webp" },
  { name: "JUWANWADU SHANE UDHEERA", image: "/IMG_0470.webp" },
  { name: "PANDITHA VIDHANA BIHANDU THATHSANDA GUNAWARDHANA", image: "/IMG_0494.webp" },
  { name: "MUHUDUGAMUWA NANAYAKKARA LOKU HETTIGE SANUKA DULSANA", image: "/IMG_0500.webp" },
  { name: "DON SIMON PATABANDI THENU THISATH DINSARA", image: "/IMG_0498.webp" },
  { name: "MAHADURAGE LUSANDA RANHIRU PERERA", image: "/IMG_0695.webp" },
  { name: "SAYUL DINSARA BOVITHANTHRI KARIYAWASAM", image: "/IMG_0502.webp" },
  { name: "JAYAWARDENA GAMACHCHIGE SANIJA MANUMITHA JAYAWARDENA", image: "/IMG_0473.webp" },
  { name: "KALUPAHANAGE VIDUN HANSANA SETHVIN", image: "/IMG_0689.webp" },
  { name: "SENUJA RANDILU RANASINGHE", image: "/IMG_0506.webp" },
  { name: "PATHEGAMAGE AKINDU LAKDULA", image: "/IMG_0510.webp" },
  { name: "CHANULA DULEN THIRIMAWITHANA", image: "/IMG_0674.webp" },
  { name: "THARUL DINHAS BHUPATHI HIKKADUWA VITHANAGE", image: "/IMG_0555.webp" },
  { name: "SANDAPPERUMA ARCHCHIGE REJINALD SEHANSITH RANMUTHU", image: "/IMG_0701.webp" },
  { name: "HIBUTUGODAGE LOSHITHA NETHMAHAL VIJAYARATHNA", image: "/IMG_0515.webp" },
  { name: "RATHNAWEERA HEWAWITHARANAGE YASINDU HANSAKA", image: "/IMG_0668.webp" },
  { name: "SUHAS VINVIDU UDALAMATHTHA GAMAGE", image: "/IMG_0883.webp" },
  { name: "DODAMPE KANKANAMAGE MENULA YETHUM SATHVIDU", image: "/IMG_0521.webp" },
  { name: "VINUSH YASHEN FERNANDO", image: "/IMG_0538.webp" },
  { name: "KUDAGE RESHAN SATHSINDU", image: "/IMG_0524.webp" },
  { name: "SANDEW SASVIDU WALAWEGE", image: "/IMG_0527.webp" },
  { name: "WATHALA GITHSARA", image: "/IMG_0534.webp" },
  { name: "PAHALA GAMAGE GIHANSITH AVINDA", image: "/IMG_0532.webp" },
  { name: "DORALAGODA KANKANAMGE NIDUKA DEWMINA", image: "/IMG_0541.webp" },
  { name: "UDUWAKA HEWAGE GANIDU KAWISHNA", image: "/IMG_0544.webp" },
  { name: "THISEW GAYATHSEN WEWALAGEDARA", image: "/IMG_0547.webp" },
  { name: "KOTAGODA HETTIARACHCHI JENULA SANDEW", image: "/IMG_0551.webp" },
  { name: "SENUL SETHVIN LOKUMALAGE", image: "/IMG_0554.webp" },
  { name: "AHANGAMA WALAWEGE THIVEN SEDAS", image: "/IMG_0559.webp" },
  { name: "NABADAWA GAMAGE LESANDUL SENULA AMARAKEERTHI", image: "/IMG_0698.webp" },
  { name: "KORALEGAMA HEWAGE VINUGA SANDIV", image: "/IMG_0662.webp" },
  { name: "HEWA ALANKARAGE NETHULA HARASARA ABEYSIRIWARDHANA SENARATH YAPA", image: "/IMG_0562.webp" },
  { name: "SETHSANDU THINETH BATHEEGAMA", image: "/IMG_0567.webp" },
  { name: "KANDAVINNE MUDIYANSELAGE IMIRA SUHAS WEERAWARDHANA", image: "/IMG_0573.webp" },
  { name: "KARIYAWASAM BOVITHANTHRI DEVIN THESHAKA ABEYSEKARA", image: "/IMG_0575.webp" },
  { name: "KANKANAM MANAGE JANIRU JITHSEN", image: "/IMG_0577.webp" },
  { name: "RATHNAYAKA KORALE MUDALIGE SENULA VINDILA", image: "/IMG_0589.webp" },
  { name: "KARIYAWASAM WARUGODAGE OVINDU VINSARA", image: "/IMG_0570.webp" },
  { name: "KAHANDA KORALAGE CHENITHA MINDIV", image: "/IMG_0592.webp" },
  { name: "YADDEHI WATHTHAGE SHENUTH THEJAN", image: "/IMG_0600.webp" },
  { name: "LALPE DON MODHYA TATHMIRA WICKAMAGE", image: "/IMG_0595.webp" },
  { name: "DAPANA DURAGE ADEESHA INDUMINA AMARAWANSHA", image: "/IMG_0612.webp" },
  { name: "MAJUWANE GAMAGE KAVINSA SANDEEPA", image: "/IMG_0585.webp" },
  { name: "WELAGE NIRMITH MINSITHU PRASANTHIKA", image: "/IMG_0579.webp" },
  { name: "VIDAS SEYMIN GUNATHUNGA", image: "/IMG_0606.webp" },
  { name: "DINTHARU LOSATH ABEYWICKRAMA GUNARATHNE", image: "/IMG_0471.webp" },
  { name: "AYOD NEDISA RUPARATHNE", image: "/IMG_0615.webp" },
  { name: "MIHINDU RIDMIKA DISANAYAKE", image: "/IMG_0623.webp" },
  { name: "KAKGODA NETHULA ABHINAW THANTHRIGE", image: "/IMG_0656.webp" },
  { name: "MANAMENDRA ACHARIGE THINUKA RAKMITHA", image: "/IMG_0640.webp" },
  { name: "BIHANDU BINUWARA SETUNGA", image: "/IMG_0630.webp" },
  { name: "CHENIRAU HANSANA HETTIARACHCHI", image: "/IMG_0659.webp" },
  { name: "DANUJA DINSARA GALGANAGE DEVINUWARA", image: "/IMG_0635.webp" },
  { name: "CHENUL SEHITHA HALLINNA LOKUGE", image: "/IMG_0674 MISSING.webp" },//MISSING IMAGE HERE
  { name: "MALAWEERA ARACHCHIGE RUSANDU THEJAKA", image: "/IMG_0626.webp" },
  { name: "WATAREKA GAMAGE IMETH CHANULKA", image: "/IMG_0664.webp" },
  { name: "ISHIL INDUMINA VITHANAGE", image: "/IMG_0617.webp" }
];

export default function ProfileCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProfile = profiles[currentIndex];

  // Handle left/right arrow key navigation
  useEffect(() => {
    const handleKeyDown = (e:any) => {
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
              {currentProfile.name}
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
            <div className="w-96 h-96 bg-white rounded-full shadow-2xl relative overflow-hidden border-8 border-red-900 group-hover:shadow-3xl transition-all duration-300 group-hover:scale-105">
              <img 
                src={currentProfile.image}
                alt={currentProfile.name}
                className="w-full h-full object-cover"
                onError={(e:any) => {
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