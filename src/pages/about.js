import React from "react";
//import { Document, Page, pdfjs } from '@react-pdf/renderer';
/*
 <div className="text-center my-4">
        <h1 className="text-3xl font-bold text-white">
          Portfolio by Nathan Morelli
        </h1>
      </div>

      <div className="w-11/12 h-5/6 bg-gray-100 rounded shadow-lg overflow-auto">
        <Document
          file="../../public/documents/MorelliResume.pdf" // Path to your PDF file
          onLoadError={(error) => console.error("Error while loading PDF:", error)}
        >
          <Page pageNumber={1} />
        </Document>
      </div>
      */

// Set the worker source to avoid issues with loading the PDF worker.
//pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      {/* Title Section */}
     
    </div>
  );
}