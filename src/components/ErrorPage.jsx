import React from 'react';

const ErrorPage = ({ kodeError, deskripsiError, gambarError }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <img src={gambarError} alt={`Error ${kodeError}`} className="w-64 h-64 mb-4" />
      <h1 className="text-4xl font-bold mb-2">Error {kodeError}</h1>
      <p className="text-lg text-gray-600">{deskripsiError}</p>
    </div>
  );
};

export default ErrorPage;
