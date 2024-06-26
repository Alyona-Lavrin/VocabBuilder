import { ContainerAddWordModal } from "./addWordModal.styled";
import ButtonClose from "helpers/icons/x-modal.svg?react";
import Ukraine from "helpers/icons/ukraine.svg?react";
import England from "helpers/icons/united kingdom.svg?react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createWord } from "../../../redux/data/data-operation";
import { useFormik } from "formik";
import { ShowRules } from "helpers/utils/showRules";
import { AddWordSchema } from "helpers/utils/validationSchemas";

const AddWordModal = ({ handleClickClose }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.data.categories);

  useEffect(() => {
    const customInput = document.querySelector(".custom-inputAdd");
    const input = customInput.querySelector("input");
    const dropdown = customInput.querySelector(".dropdownAdd");
    const dropdownItems = dropdown.querySelectorAll("li");

    const handleClick = () => {
      dropdown.style.display = "grid";
    };

    const handleDropdownItemClick = (item) => {
      const selectedCategory = item.textContent;
      handleChange({
        target: {
          name: "category",
          value: selectedCategory,
        },
      });
      dropdown.style.display = "none";
    };

    const handleDocumentClick = (e) => {
      if (!customInput.contains(e.target)) {
        dropdown.style.display = "none";
      }
    };

    input.addEventListener("click", handleClick);

    dropdownItems.forEach((item) => {
      item.addEventListener("click", () => handleDropdownItemClick(item));
    });

    document.addEventListener("click", handleDocumentClick);

    return () => {
      input.removeEventListener("click", handleClick);
      dropdownItems.forEach((item) =>
        item.removeEventListener("click", handleDropdownItemClick)
      );
      document.removeEventListener("click", handleDocumentClick);
    };
  });

  const { values, errors, touched, isValid, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        en: "",
        ua: "",
        category: "",
        isIrregular: undefined,
      },

      validationSchema: AddWordSchema,

      onSubmit: (values) => {
        console.log(values);
        dispatch(createWord(values)).then((response) => {
          isNaN(response.payload) && handleClickClose();
        });
      },
    });

  const handleIrregular = () => {
    if (values.isIrregular && values.category === "verb") {
      const pattern = /^\w+-\w+-\w+$/;
      if (!pattern.test(values.en)) {
        return (
          <p className="EnInputMistake">Must be example: "know-knew-known"</p>
        );
      }
    }
  };

  const { getInputAlert, getInputClass } = ShowRules(values, touched, errors);

  return (
    <ContainerAddWordModal>
      <img src={ButtonClose} alt="ButtonClose" className="ButtonClose" onClick={handleClickClose} />
      <div className="TextContainer">
        <h2 className="Title">Add word</h2>
        <p className="Text">
          Adding a new word to the dictionary is an important step in enriching
          the language base and expanding the vocabulary.
        </p>
      </div>
      <form className="Form" onSubmit={handleSubmit}>
        <div className="custom-inputAdd">
          <input
            id="statistics"
            name="category"
            className={getInputClass("Category")}
            type="text"
            placeholder="Categories"
            value={values.category}
            onChange={handleChange}
            required
            readOnly
          />
          <ul className="dropdownAdd">
            {categories &&
              categories.map((item) => (
                <li className="ListItem" key={item}>
                  {item}
                </li>
              ))}
          </ul>
        </div>
        <ul
          className="RadioButtonList"
          style={{ display: values.category === "verb" ? "flex" : "none" }}
        >
          <li className="RadioButtonItem">
            <input
              className="RadioButton"
              id="regular"
              name="isIrregular"
              type="radio"
              onChange={() =>
                handleChange({ target: { name: "isIrregular", value: false } })
              }
              value={false}
              checked={values.isIrregular === false}
            />
            Regular
          </li>
          <li className="RadioButtonItem">
            <input
              className="RadioButton"
              id="reason"
              name="isIrregular"
              type="radio"
              onChange={() =>
                handleChange({ target: { name: "isIrregular", value: true } })
              }
              value={true}
              checked={values.isIrregular === true}
            />
            Irregular
          </li>
        </ul>

        <div className="UkrainianContainer" id="ukrainian">
          <div className="InputImagContainer">
            <img src={Ukraine} alt="Ukraine" className="IconCountry" /> Ukrainian
          </div>
          <input
            id="ukrainian"
            className={getInputClass("Ua")}
            type="text"
            placeholder="Слово Українською"
            name="ua"
            value={values.ua}
            onChange={handleChange}
            required
          />
          {getInputAlert("ua")}
        </div>
        <div className="EnglishContainer">
          <div className="InputImagContainer">
            <img src={England} alt="England" className="IconCountry" /> English
          </div>
          <input
            id="english"
            className={getInputClass("En")}
            type="text"
            placeholder="Word in English"
            name="en"
            value={values.en}
            onChange={handleChange}
            required
          />

          {handleIrregular() ? handleIrregular() : getInputAlert("en")}
        </div>

        <ul className="ButtonList">
          <li
            className="ButtonAdd"
            type="submit"
            disabled={!isValid}
            onClick={handleSubmit}
          >
            Add
          </li>
          <li className="ButtonCancel" onClick={handleClickClose}>
            Cancel
          </li>
        </ul>
      </form>
    </ContainerAddWordModal>
  );
};

export default AddWordModal;
