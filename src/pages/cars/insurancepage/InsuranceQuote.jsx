import { useState } from "react";
import BaseLayout from "../../../layouts/baselayout/BaseLayout";
import styles from "./InsuranceQuote.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";

function InsuranceQuote() {
  const [image, setImage] = useState(null);
  const [results, setResults] = useState(null);
  const [annualPremiums, setAP] = useState(null);

  const predictionEndpoint =
    "https://turners-vehicle-recognition.cognitiveservices.azure.com/";
  const predictionKey =
    "3QwkxGV2tYNHj8nJuWVQp237iUQ4qUai24DW0jNLu4nsMiLZdZcXJQQJ99AKACL93NaXJ3w3AAAIACOGnIcS";
  const projectId = "09beff9f-ef9e-47d6-a384-83c277fb30e4";
  const iterationName = "Iteration3";
  const finalURL = `${predictionEndpoint}/customvision/v3.0/Prediction/${projectId}/classify/iterations/${iterationName}/image`;

  // handle file input
  const handleFileInput = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
      sendToPredictionAPI(file);
    }
  };

  // DRAG and DROP Handling
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
  };

  // send image to api
  const sendToPredictionAPI = async (file) => {
    fetchInsurancePremium();
    try {
      // const formData = new FormData();
      // formData.append("file", file);

      // const res = await fetch(
      //   `${predictionEndpoint}/customvision/v3.0/Prediction/${projectId}/classify/iterations/${iterationName}/image`,
      //   {
      //     method: "POST",
      //     headers: { "Prediction-Key": predictionKey },
      //     body: formData,
      //   }
      // );

      const res = await fetch(finalURL, {
        method: "POST",
        headers: {
          "Prediction-Key": predictionKey,
          "Content-Type": "application/octet-stream",
        },
        body: file,
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await res.json();

      // process response
      setResults(data.predictions);
    } catch (err) {
      console.error("Error calling Prediction API: ", err);
      setResults(null);
    }
  };

  const fetchInsurancePremium = async () => {
    try {
      const res = await fetch("http://localhost:4000/");
      const data = await res.json();
      console.log(data);
      setAP(data);
    } catch (e) {
      console.error(`Error fetching Inusrance Premiums: ${e}`);
    }
  };

  return (
    <BaseLayout>
      <div className={styles.mainContainer}>
        <div
          className={styles.leftSection}
          onDrop={handleDrop}
          onDragOver={handleDrag}
        >
          <div className={styles.imageContainer}>
            {image ? (
              <img
                src={image}
                alt="Uploaded User Vehicle"
                className={styles.previewImg}
              />
            ) : (
              <div className={styles.uploadImgPrompt}>
                <FontAwesomeIcon
                  icon={faCloudArrowDown}
                  className={styles.uploadIcon}
                />
                <p>Drag and Drop your vehicle image here, or click to upload</p>
              </div>
            )}

            <input
              type="file"
              accept="image/*"
              className={styles.hiddenInput}
              id="fileInput"
              onChange={handleFileInput}
            />

            <label htmlFor="fileInput" className={styles.customButton}>
              Choose file to upload
            </label>
          </div>
        </div>

        <hr />

        <div className={styles.rightSection}>
          <div className={styles.insurancePremiumAmount}>
            <div className={styles.ipContainer}></div>
          </div>
          <div className={styles.predictionResultsCont}>
            <h3>Prediction Results</h3>
            {results ? (
              <ul>
                {results.map((prediction, index) => (
                  <li key={index} className={styles.list}>
                    <h5>{prediction.tagName}</h5>
                    <h5 className={styles.resultPercentage}>
                      {(prediction.probability * 100).toFixed(2)}%
                    </h5>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Upload an image to get predictions.</p>
            )}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

export default InsuranceQuote;
