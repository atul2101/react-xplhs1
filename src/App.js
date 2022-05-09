import { useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

import "./styles.css";

const App = () => {
  const inputRef = useRef(null);
  const printDocument = () => {
    html2canvas(inputRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save("download.pdf");
    });
  };
  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <div className="mb5">
          <button onClick={printDocument}>Print</button>
        </div>
        <div id="divToPrint" ref={inputRef}>
          <div>Note: Here the dimensions of div are same as A4</div>
          <div>You Can add any component here</div>
        </div>
      </div>
    </>
  );
};
export default App;
