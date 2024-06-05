import React from "react";

const MapDetails = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <p className="text-3xl font-bold text-emerald-500 mb-4 mt-4 box-border shadow-md shadow-emerald-400 drop-shadow-xl rounded-md">
          Map
        </p>
        <address className="text-2xl font-semibold text-orange-950 mb-4">
          Karaundi
        </address>
        <div className="p-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1294.7604121220331!2d83.73546279733016!3d26.379539593627857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993d1f84fe8c167%3A0x9e59e53c9a35abc4!2sRamjanki%20Mandir!5e0!3m2!1sen!2sin!4v1712993131871!5m2!1sen!2sin"
            className="w-full h-64 sm:h-72 md:h-96 rounded-md shadow-lg"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default MapDetails;
