import React, { useState, useEffect } from "react";

const BarcodeScanner: React.FC = () => {
  const [scannedCode, setScannedCode] = useState<string>("");
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [buffer, setBuffer] = useState<string>("");

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        setScannedCode(buffer);
        setBuffer(""); 
        setIsScanning(false);
      } else {
        setBuffer((prev: any) => prev + event.key);
        setIsScanning(true);
      }
    };

    document.addEventListener("keypress", handleKeyPress);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [buffer]);

  return (
    <div>
      <h2>Barcode Scanner Integration</h2>
      {isScanning ? <p>Scanning...</p> : <p>Waiting for scan...</p>}
      {scannedCode && (
        <div>
          <h3>Scanned Code:</h3>
          <p>{scannedCode}</p>
        </div>
      )}
    </div>
  );
};

export default BarcodeScanner;
