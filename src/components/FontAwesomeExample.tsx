"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faCode, faShield } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";

export default function FontAwesomeExample() {
  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Font Awesome Icons</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
          <FontAwesomeIcon icon={faRocket} className="text-primary text-3xl mb-2" />
          <span>Solid Icon (faRocket)</span>
        </div>
        
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
          <FontAwesomeIcon icon={faTwitter} className="text-blue-400 text-3xl mb-2" />
          <span>Brand Icon (faTwitter)</span>
        </div>
        
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
          <FontAwesomeIcon icon={faLightbulb} className="text-yellow-500 text-3xl mb-2" />
          <span>Regular Icon (faLightbulb)</span>
        </div>
        
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
          <FontAwesomeIcon icon={faCode} className="text-green-500 text-3xl mb-2" />
          <span>Solid Icon (faCode)</span>
        </div>
        
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
          <FontAwesomeIcon icon={faTelegram} className="text-blue-500 text-3xl mb-2" />
          <span>Brand Icon (faTelegram)</span>
        </div>
        
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
          <FontAwesomeIcon icon={faShield} className="text-purple-500 text-3xl mb-2" />
          <span>Solid Icon (faShield)</span>
        </div>
      </div>
    </div>
  );
} 