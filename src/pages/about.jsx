import React, { useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set the worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function About() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-white">
          Resume
        </h1>
      </div>

      <div className="w-11/12 max-w-4xl bg-white rounded-lg shadow-lg p-4 overflow-auto">
        <Document
          file="/documents/MorelliResume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(error) => console.error("Error while loading PDF:", error)}
          className="flex justify-center"
        >
          <Page 
            pageNumber={pageNumber} 
            renderTextLayer={true}
            renderAnnotationLayer={true}
            className="max-w-full"
            scale={1.2}
          />
        </Document>

        {numPages && (
          <div className="text-center mt-4 text-gray-700">
            <p>
              Page {pageNumber} of {numPages}
            </p>
            <div className="flex justify-center gap-4 mt-2">
              <button
                onClick={() => setPageNumber(pageNumber - 1)}
                disabled={pageNumber <= 1}
                className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
              >
                Previous
              </button>
              <button
                onClick={() => setPageNumber(pageNumber + 1)}
                disabled={pageNumber >= numPages}
                className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}