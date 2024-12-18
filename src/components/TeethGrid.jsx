
import { Fragment } from 'react';

import React, { useEffect, useRef, useState } from 'react';

import Teeth from './Teeth';
import '../styles/Teeth.css'

// NOTE: Add two different refs for each h2 so I can handle the animation whenever they're visible.

const getUpperTeeth = (path) => {
  const upperTeeth = [
    {
      name: 'Incisivo central', objUrl: `${path}/Human_Teeth_Top_1.obj`, mtlUrl: `${path}/Human_Teeth_Top_1.mtl`, cards: [
        {
          title: "Cara labial o vestibular",
          content: "Es la cara que esta orientada hacia los labios y el vestibulo, es decir orientada en el sentido de la apertura de la boca"
        },
        {
          title: "Cara palatina",
          content: "Orientada hacia el paladar"
        },
        {
          title: "Cara mesial",
          content: "Cara interproximal mas cercana al eje medio"
        },
        {
          title: "Cara distal",
          content: "Cara interproximal mas lejana al eje medio"
        },
        {
          title: "Borde incisal",
          content: "Es el margen de los dientes anteriores"
        },
        {
          title: "Raiz del diente",
          content: "Parte que se sujeta en el hueso alveolar"
        },
        {
          title: "Cingulo",
          content: "Localizada en el tercio cervical o cara palatina"
        },
        {
          title: "Funcion",
          content: "Cortar alimentos"
        }

      ]
    },
    { name: 'Incisivo lateral', objUrl: `${path}/Human_Teeth_Top_2.obj`, mtlUrl: `${path}/Human_Teeth_Top_2.mtl`, cards: [
      {
        title: "Cara labial o vestibular",
        content: "Es la cara que esta orientada hacia los labios y el vestibulo, es decir orientada en el sentido de la apertura de la boca"
      },
      {
        title: "Cara palatina",
        content: "Orientada hacia el paladar"
      },
      {
        title: "Cara mesial",
        content: "Cara interproximal mas cercana al eje medio"
      },
      {
        title: "Cara distal",
        content: "Cara interproximal mas lejana al eje medio"
      },
      {
        title: "Borde incisal",
        content: "Es el margen de los dientes anteriores"
      },
      {
        title: "Raiz del diente",
        content: "Parte que se sujeta en el hueso alveolar"
      },
      {
        title: "Cingulo",
        content: "Localizada en el tercio cervical o cara palatina"
      },
      {
        title: "Funcion",
        content: "Cortar alimentos"
      },
    ] },
    { name: 'Canino', objUrl: `${path}/Human_Teeth_Top_3.obj`, mtlUrl: `${path}/Human_Teeth_Top_3.mtl`, cards: [
      {
        title: "Cara labial o vestibular",
        content: "Es la cara que esta orientada hacia los labios y el vestibulo, es decir orientada en el sentido de la apertura de la boca"
      },
      {
        title: "Cara palatina",
        content: "Orientada hacia el paladar"
      },
      {
        title: "Cara mesial",
        content: "Cara interproximal mas cercana al eje medio"
      },
      {
        title: "Cara distal",
        content: "Cara interproximal mas lejana al eje medio"
      },
      {
        title: "Borde incisal",
        content: "Es el margen de los dientes anteriores"
      },
      {
        title: "Raiz del diente",
        content: "Parte que se sujeta en el hueso alveolar"
      },
      {
        title: "Cingulo",
        content: "Localizada en el tercio cervical o cara palatina"
      },
      {
        title: "Funcion",
        content: "Corte y desgarro"
      },
    ] },
    { name: 'Primer premolar', objUrl: `${path}/Human_Teeth_Top_4.obj`, mtlUrl: `${path}/Human_Teeth_Top_4.mtl`, cards: [
      {
        title: "Cara labial o vestibular",
        content: "Es la cara que esta orientada hacia los labios y el vestibulo, es decir orientada en el sentido de la apertura de la boca"
      },
      {
        title: "Cara palatina",
        content: "Orientada hacia el paladar"
      },
      {
        title: "Cara mesial",
        content: "Cara interproximal mas cercana al eje medio"
      },
      {
        title: "Cara distal",
        content: "Cara interproximal mas lejana al eje medio"
      },
      {
        title: "Cara oclusal",
        content: "Superficie de masticacion que presenta fosas, surcos, cuspide, crestas marginales y triangulares"
      },
      {
        title: "Raiz del diente",
        content: "Parte que se sujeta en el hueso alveolar"
      },
      {
        title: "Funcion",
        content: "Morder y desgarrar la comida"
      }
    ] },
    { name: 'Segundo premolar', objUrl: `${path}/Human_Teeth_Top_5.obj`, mtlUrl: `${path}/Human_Teeth_Top_5.mtl`, cards: [
      {
        title: "Cara labial o vestibular",
        content: "Es la cara que esta orientada hacia los labios y el vestibulo, es decir orientada en el sentido de la apertura de la boca"
      },
      {
        title: "Cara palatina",
        content: "Orientada hacia el paladar"
      },
      {
        title: "Cara mesial",
        content: "Cara interproximal mas cercana al eje medio"
      },
      {
        title: "Cara distal",
        content: "Cara interproximal mas lejana al eje medio"
      },
      {
        title: "Cara oclusal",
        content: "Superficie de masticacion que presenta fosas, surcos, cuspide, crestas marginales y triangulares"
      },
      {
        title: "Raiz del diente",
        content: "Parte que se sujeta en el hueso alveolar"
      },
      {
        title: "Funcion",
        content: "Triturar la comida"
      },
    ] },
    { name: 'Terer molar', objUrl: `${path}/Human_Teeth_Top_6.obj`, mtlUrl: `${path}/Human_Teeth_Top_6.mtl`, cards: [
      {
        title: "Cara labial o vestibular",
        content: "Es la cara que esta orientada hacia los labios y el vestibulo, es decir orientada en el sentido de la apertura de la boca"
      },
      {
        title: "Cara palatina",
        content: "Orientada hacia el paladar"
      },
      {
        title: "Cara mesial",
        content: "Cara interproximal mas cercana al eje medio"
      },
      {
        title: "Cara distal",
        content: "Cara interproximal mas lejana al eje medio"
      },
      {
        title: "Cara oclusal",
        content: "Superficie de masticacion que presenta fosas, surcos, cuspide, crestas marginales y triangulares"
      },
      {
        title: "Raiz del diente",
        content: "Parte que se sujeta en el hueso alveolar y suele presentar tres raices"
      },
      {
        title: "Funcion",
        content: "Moler o triturar la comida"
      }
    ] },
    { name: 'Segundo molar', objUrl: `${path}/Human_Teeth_Top_7.obj`, mtlUrl: `${path}/Human_Teeth_Top_7.mtl`, cards: [
      {
        title: "Cara labial o vestibular",
        content: "Es la cara que esta orientada hacia los labios y el vestibulo, es decir orientada en el sentido de la apertura de la boca"
      },
      {
        title: "Cara palatina",
        content: "Orientada hacia el paladar"
      },
      {
        title: "Cara mesial",
        content: "Cara interproximal mas cercana al eje medio"
      },
      {
        title: "Cara distal",
        content: "Cara interproximal mas lejana al eje medio"
      },
      {
        title: "Cara oclusal",
        content: "Superficie de masticacion que presenta fosas, surcos, cuspide, crestas marginales y triangulares"
      },
      {
        title: "Raiz del diente",
        content: "Parte que se sujeta en el hueso alveolar y suele presentar tres raices"
      },
      {
        title: "Funcion",
        content: "Moler o triturar la comida"
      }
    ] },
    { name: 'Primer molar', objUrl: `${path}/Human_Teeth_Top_8.obj`, mtlUrl: `${path}/Human_Teeth_Top_8.mtl`, cards: [
      {
        title: "Cara labial o vestibular",
        content: "Es la cara que esta orientada hacia los labios y el vestibulo, es decir orientada en el sentido de la apertura de la boca"
      },
      {
        title: "Cara palatina",
        content: "Orientada hacia el paladar"
      },
      {
        title: "Cara mesial",
        content: "Cara interproximal mas cercana al eje medio"
      },
      {
        title: "Cara distal",
        content: "Cara interproximal mas lejana al eje medio"
      },
      {
        title: "Cara oclusal",
        content: "Superficie de masticacion que presenta fosas, surcos, cuspide, crestas marginales y triangulares"
      },
      {
        title: "Raiz del diente",
        content: "Parte que se sujeta en el hueso alveolar y suele presentar tres raices"
      },
      {
        title: "Funcion",
        content: "Masticar la comida  y es fundamental en la oclusion para alinear bien los dientes."
      }
    ] },
  ];

  return upperTeeth;
}


const getBottomTeeth = (path) => {

  const lowerTeeth = [
    { name: 'Incisivo central', objUrl: `${path}/Human_Teeth_Bottom_1.obj`, mtlUrl: `${path}/Human_Teeth_Bottom_1.mtl`, cards: [
      {
        title: "Cara labial o vestibular",
        content: "Es la cara que esta orientada hacia los labios y el vestibulo, es decir orientada en el sentido de la apertura de la boca"
      },
      {
        title: "Cara lingual",
        content: "Orientada hacia la lengua"
      },
      {
        title: "Cara mesial",
        content: "Cara interproximal mas cercana al eje medio"
      },
      {
        title: "Cara distal",
        content: "Cara interproximal mas lejana al eje medio"
      },
      {
        title: "Borde incisal",
        content: "Es el margen de los dientes anteriores"
      },
      {
        title: "Raiz del diente",
        content: "Parte que se sujeta en el hueso alveolar"
      },
      {
        title: "Cingulo",
        content: "Localizada en el tercio cervical o cara lingual"
      },
      {
        title: "Funcion",
        content: "Cortar alimentos"
      }
    ]},
    { name: 'Incisivo lateral', objUrl: `${path}/Human_Teeth_Bottom_2.obj`, mtlUrl: `${path}/Human_Teeth_Bottom_2.mtl`, cards: [
      {
        title: "Cara labial o vestibular",
        content: "Es la cara que esta orientada hacia los labios y el vestibulo, es decir orientada en el sentido de la apertura de la boca"
      },
      {
        title: "Cara lingual",
        content: "Orientada hacia la lengua"
      },
      {
        title: "Cara mesial",
        content: "Cara interproximal mas cercana al eje medio"
      },
      {
        title: "Cara distal",
        content: "Cara interproximal mas lejana al eje medio"
      },
      {
        title: "Borde incisal",
        content: "Es el margen de los dientes anteriores"
      },
      {
        title: "Raiz del diente",
        content: "Parte que se sujeta en el hueso alveolar"
      },
      {
        title: "Cingulo",
        content: "Localizada en el tercio cervical o cara lingual"
      },
      {
        title: "Funcion",
        content: "Cortar alimentos"
      }
    ]},
    { name: 'Canino', objUrl: `${path}/Human_Teeth_Bottom_3.obj`, mtlUrl: `${path}/Human_Teeth_Bottom_3.mtl`          , cards: [
      {
        title: "Cara labial o vestibular",
        content: "Es la cara que esta orientada hacia los labios y el vestibulo, es decir orientada en el sentido de la apertura de la boca"
      },
      {
        title: "Cara lingual",
        content: "Orientada hacia la lengua"
      },
      {
        title: "Cara mesial",
        content: "Cara interproximal mas cercana al eje medio"
      },
      {
        title: "Cara distal",
        content: "Cara interproximal mas lejana al eje medio"
      },
      {
        title: "Borde incisal",
        content: "Es el margen de los dientes anteriores"
      },
      {
        title: "Raiz del diente",
        content: "Parte que se sujeta en el hueso alveolar"
      },
      {
        title: "Cingulo",
        content: "Localizada en el tercio cervical o cara lingual"
      },
      {
        title: "Funcion",
        content: "Corte y desgarro"
      },
    ]},
    { name: 'Primer premolar', objUrl: `${path}/Human_Teeth_Bottom_4.obj`, mtlUrl: `${path}/Human_Teeth_Bottom_4.mtl` , cards: [
      {
        title: "Cara labial o vestibular",
        content: "Es la cara que esta orientada hacia los labios y el vestibulo, es decir orientada en el sentido de la apertura de la boca"
      },
      {
        title: "Cara lingual",
        content: "Orientada hacia la lengua"
      },
      {
        title: "Cara mesial",
        content: "Cara interproximal mas cercana al eje medio"
      },
      {
        title: "Cara distal",
        content: "Cara interproximal mas lejana al eje medio"
      },
      {
        title: "Cara oclusal",
        content: "Superficie de masticacion que presenta fosas, surcos, cuspide, crestas marginales y triangulares"
      },
      {
        title: "Raiz del diente",
        content: "Parte que se sujeta en el hueso alveolar"
      },
      {
        title: "Funcion",
        content: "Morder y desgarrar la comida"
      }
    ]},
    { name: 'Segundo premolar', objUrl: `${path}/Human_Teeth_Bottom_5.obj`, mtlUrl: `${path}/Human_Teeth_Bottom_5.mtl`, cards: [
      {
        title: "Cara labial o vestibular",
        content: "Es la cara que esta orientada hacia los labios y el vestibulo, es decir orientada en el sentido de la apertura de la boca"
      },
      {
        title: "Cara lingual",
        content: "Orientada hacia la lengua"
      },
      {
        title: "Cara mesial",
        content: "Cara interproximal mas cercana al eje medio"
      },
      {
        title: "Cara distal",
        content: "Cara interproximal mas lejana al eje medio"
      },
      {
        title: "Cara oclusal",
        content: "Superficie de masticacion que presenta fosas, surcos, cuspide, crestas marginales y triangulares"
      },
      {
        title: "Raiz del diente",
        content: "Parte que se sujeta en el hueso alveolar"
      },
      {
        title: "Funcion",
        content: "Triturar la comida"
      },
    ]},
    { name: 'Tercer molar', objUrl: `${path}/Human_Teeth_Bottom_6.obj`, mtlUrl: `${path}/Human_Teeth_Top_6.mtl`       , cards: [
      {
        title: "Cara labial o vestibular",
        content: "Es la cara que esta orientada hacia los labios y el vestibulo, es decir orientada en el sentido de la apertura de la boca"
      },
      {
        title: "Cara lingual",
        content: "Orientada hacia la lengua"
      },
      {
        title: "Cara mesial",
        content: "Cara interproximal mas cercana al eje medio"
      },
      {
        title: "Cara distal",
        content: "Cara interproximal mas lejana al eje medio"
      },
      {
        title: "Cara oclusal",
        content: "Superficie de masticacion que presenta fosas, surcos, cuspide, crestas marginales y triangulares"
      },
      {
        title: "Raiz del diente",
        content: "Parte que se sujeta en el hueso alveolar y presentan dos raices"
      },
      {
        title: "Funcion",
        content: "Moler o triturar la comida"
      }
    ]},
    { name: 'Segundo molar', objUrl: `${path}/Human_Teeth_Bottom_7.obj`, mtlUrl: `${path}/Human_Teeth_Bottom_7.mtl`   , cards: [
      {
        title: "Cara labial o vestibular",
        content: "Es la cara que esta orientada hacia los labios y el vestibulo, es decir orientada en el sentido de la apertura de la boca"
      },
      {
        title: "Cara lingual",
        content: "Orientada hacia la lengua"
      },
      {
        title: "Cara mesial",
        content: "Cara interproximal mas cercana al eje medio"
      },
      {
        title: "Cara distal",
        content: "Cara interproximal mas lejana al eje medio"
      },
      {
        title: "Cara oclusal",
        content: "Superficie de masticacion que presenta fosas, surcos, cuspide, crestas marginales y triangulares"
      },
      {
        title: "Raiz del diente",
        content: "Parte que se sujeta en el hueso alveolar y presentan dos raices"
      },
      {
        title: "Funcion",
        content: "Moler o triturar la comida"
      }
    ]},
    { name: 'Primer molar', objUrl: `${path}/Human_Teeth_Bottom_8.obj`, mtlUrl: `${path}/Human_Teeth_Bottom_8.mtl`    , cards: [
      {
        title: "Cara labial o vestibular",
        content: "Es la cara que esta orientada hacia los labios y el vestibulo, es decir orientada en el sentido de la apertura de la boca"
      },
      {
        title: "Cara lingual",
        content: "Orientada hacia la lengua"
      },
      {
        title: "Cara mesial",
        content: "Cara interproximal mas cercana al eje medio"
      },
      {
        title: "Cara distal",
        content: "Cara interproximal mas lejana al eje medio"
      },
      {
        title: "Cara oclusal",
        content: "Superficie de masticacion que presenta fosas, surcos, cuspide, crestas marginales y triangulares"
      },
      {
        title: "Raiz del diente",
        content: "Parte que se sujeta en el hueso alveolar y presentan dos raices"
      },
      {
        title: "Funcion",
        content: "Masticar la comida  y es fundamental en la oclusion para alinear bien los dientes."
      }
    ]},
  ];

  return lowerTeeth;
};

const bottomImages = [
  '/images/bottom/Human_Teeth_Bottom_1.obj.JPEG',
  '/images/bottom/Human_Teeth_Bottom_2.obj.JPEG',
  '/images/bottom/Human_Teeth_Bottom_3.obj.JPEG',
  '/images/bottom/Human_Teeth_Bottom_4.obj.JPEG',
  '/images/bottom/Human_Teeth_Bottom_5.obj.JPEG',
  '/images/bottom/Human_Teeth_Bottom_6.obj.JPEG',
  '/images/bottom/Human_Teeth_Bottom_7.obj.JPEG',
  '/images/bottom/Human_Teeth_Bottom_8.obj.JPEG'
];


const TeethGrid = () => {

  const elementRef = useRef(null); // Ref to target the component
  const [isVisible, setIsVisible] = useState(false); // State to track visibility

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Check if the element is intersecting the viewport
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Set visibility to true when visible
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    // Attach observer to the target element
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const upperTeeth = getUpperTeeth('/models/top');
  const bottomTeeth = getBottomTeeth('/models/bottom');
  
 

  return (
    <Fragment>
              <h2 ref={elementRef} className={`animate__animated ${isVisible ? 'animate__backInLeft' : ''
          }`}>Dientes del maxilar superior</h2>
      <div className="container">

        <div className="teethContainer">
          {
            upperTeeth.map((value, index) => (
              <div key={index} className={`teeth-${index + 1}`}>
                <p>{value.name}</p>
                <Teeth objPath={value.objUrl} mtlPath={value.mtlUrl} teethInfo={value.cards} />
              </div>
            ))
          }
        </div>


      </div>

      <h2 ref={elementRef} className={`animate__animated ${isVisible ? 'animate__backInLeft' : ''
          }`}>
          Dientes del maxilar inferior
        </h2>

      <div className="container">
        <div className="teethContainer">
          {
            bottomTeeth.map((value, index) => (
              <div key={index} className={`teeth-${index + 1}`}>
                <p>{value.name}</p>
                <Teeth objPath={value.objUrl} mtlPath={value.mtlUrl} teethInfo={value.cards} />
              </div>
            ))
          }
        </div>
      </div>

    </Fragment>
  );

};

export default TeethGrid;