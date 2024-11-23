import { useState } from "react";
import BaseLayout from "../../../layouts/baselayout/BaseLayout";
import styles from "./InsuranceQuote.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";

function InsuranceQuote() {
  const [image, setImage] = useState(null);

  const handleFileInput = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

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
          This will give breakdown of costs
        </div>
      </div>
    </BaseLayout>
  );
}

export default InsuranceQuote;
