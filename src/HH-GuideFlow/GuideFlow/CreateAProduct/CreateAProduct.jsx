import React, { useState } from "react";
import "../Guide.css";
import "./CreateAProduct.css";

const CreateAProduct = ({
  productFullName,
  setProductFullName,
  productEmail,
  setProductEmail,
  productCountry,
  setProductCountry,
  productCity,
  setProductCity,
  selectedActivity,
  setSelectedActivity,
  selectedDuration,
  setSelectedDuration,
  productTags,
  setProductTags,
  productDescription,
  setProductDescription,
  tag,
  setTag,
}) => {
  const [isActivityClicked, setIsActivityClicked] = useState(false);
  const [isDurationClicked, setIsDurationClicked] = useState(false);

  const triggerTag = (e) => {
    if (!e.target.value.includes(",")) {
      setTag(e.target.value);
    }
  };

  const createTag = (e) => {
    if (e.key === " " && tag.trim() !== "") {
      setProductTags([...productTags, tag.trim()]);
      setTag("");
    }
  };

  const removeTag = (index) => {
    const updatedTags = productTags.filter((_, idx) => idx !== index);
    setProductTags(updatedTags);
  };

  // const [isActivityClicked, setIsActivityClicked] = useState(false);

  const handleActivityClick = (activity) => {
    setSelectedActivity(activity);
    setIsActivityClicked(false); // Hide the activity options after selection
  };

  const handleDurationClick = (duration) => {
    setSelectedDuration(duration);
    setIsDurationClicked(false); // Hide the duration options after selection
  };

  return (
    <div
      className="CreateProductParent"
      style={{ height: "100%", width: "100%", overflowY: "scroll" }}
    >
      <div className="guideFormTitle">Create a Product</div>
      <input
        type="text"
        placeholder="Full Name"
        className="guideFullName"
        value={productFullName}
        onChange={(e) => setProductFullName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        className="guideFullName"
        value={productEmail}
        onChange={(e) => setProductEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Country"
        className="guideFullName"
        value={productCountry}
        onChange={(e) => setProductCountry(e.target.value)}
      />
      <input
        type="text"
        placeholder="City"
        className="guideFullName"
        value={productCity}
        onChange={(e) => setProductCity(e.target.value)}
      />
      {/* <div
        onClick={() => {
          setIsActivityClicked(!isActivityClicked);
        }}
        className="guideFullName"
      >
        {selectedActivity || "Type of activity"}
      </div> */}
      <div
        onClick={() => {
          setIsActivityClicked(!isActivityClicked);
        }}
        className="guideFullName"
      >
        {selectedActivity || "Type of activity"}
      </div>
      <div className={`activityOptions ${isActivityClicked ? "visible" : ""}`}>
        <div className="activity" onClick={() => handleActivityClick("Bike")}>
          Bike
        </div>
        <div className="activity" onClick={() => handleActivityClick("Cruise")}>
          Cruise
        </div>
        <div className="activity" onClick={() => handleActivityClick("Tour")}>
          Tour
        </div>
        <div
          className="activity"
          onClick={() => handleActivityClick("Food and Drinks")}
        >
          Food and Drinks
        </div>
      </div>

      <div
        onClick={() => {
          setIsDurationClicked(!isDurationClicked);
        }}
        className="guideFullName"
      >
        {selectedDuration || "Activity Duration"}
      </div>
      {/* <div
        onClick={() => {
          setIsDurationClicked(!isDurationClicked);
        }}
        className="guideFullName"
      >
        {selectedDuration || "Activity Duration"}
      </div> */}
      <div className={`durationOptions ${isDurationClicked ? "visible" : ""}`}>
        <div className="duration" onClick={() => handleDurationClick("30 min")}>
          30 min
        </div>
        <div className="duration" onClick={() => handleDurationClick("45 min")}>
          45 min
        </div>
        <div className="duration" onClick={() => handleDurationClick("1 hour")}>
          1 hour
        </div>
        <div
          className="duration"
          onClick={() => handleDurationClick("1 hour 30 mins")}
        >
          1 hour 30 mins
        </div>
      </div>

      <div className="tagsDiv">
        <div className="tagsTitle">Tags</div>
        <div className="showTags">
          {productTags.map((tag, index) => (
            <div className="tag" key={index}>
              <>{tag}</>
              <button className="removeTagBtn" onClick={() => removeTag(index)}>
                x
              </button>
            </div>
          ))}
        </div>
        <input
          placeholder="Eg - Activity highlights, keywords etc"
          className="textAreaForTags"
          value={tag}
          onChange={triggerTag}
          onKeyDown={createTag}
        />
        <div className="addTagNote">max 8 tags</div>
      </div>
      <div className="tagsDiv">
        <div className="tagsTitle">Description</div>
        <textarea
          className="descriptionTextArea"
          placeholder="Eg - Unique description of the tour"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          rows={1}
        />
        <div className="addTagNote">upto 250 words</div>
      </div>
    </div>
  );
};

export default CreateAProduct;
