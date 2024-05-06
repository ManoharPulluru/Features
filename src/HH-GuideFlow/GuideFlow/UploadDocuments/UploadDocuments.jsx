import React from "react";
import "../Guide.css";
import "./UploadDocuments.css";

const UploadDocuments = () => {
  return (
    <>
      <div className="UploadDoc">
        <div className="guideFormTitle">Upload documents</div>
        <div className="GuidePhoto">Upload tour guide photo</div>
        <label className="fileUploadButton">
          <input
            type="file"
            // onChange={handleFileUpload}
            className="uploadMedia"
          />
          
        </label>{" "}
        <div className="GuidePhoto">Upload professional guide card</div>
        <input type="file" placeholder="Add Document" className="uploadMedia" />
      </div>
    </>
  );
};

export default UploadDocuments;
