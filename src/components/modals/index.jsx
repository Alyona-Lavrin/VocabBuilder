import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModalAddWord,
  closeModalClickWord,
  closeModalConfirmation,
  closeModalEdit,
  closeModalMobile,
  closeModalWellDone,
} from "../../redux/modals/modal-slice";
import MobileModal from "./mobileModal";
import { BackdropClickWord, BackdropStyle } from "./modals.styled";
import AddWordModal from "./addWordModal";
import ClickWord from "./clickWord";
import EditModal from "./editModal";
import ConfirmModal from "./confirm";
import WellDoneModal from "./wellDoneModal";

const modalRoot = document.querySelector("#modal-root");

const Modals = () => {
  const dispatch = useDispatch();
  const isMobileModalOpen = useSelector(
    (state) => state.modal.isModalOpenMobile
  );
  const isModalOpenAddWord = useSelector(
    (state) => state.modal.isModalOpenAddWord
  );
  const isModalOpenClickWord = useSelector(
    (state) => state.modal.isModalOpenClickWord
  );
  const isModalOpenConfirmation = useSelector(
    (state) => state.modal.isModalOpenConfirmation
  );
  const isModalOpenEdit = useSelector((state) => state.modal.isModalOpenEdit);
  const isModalOpenWellDone = useSelector(
    (state) => state.modal.isModalOpenWellDone
  );

  const handleClickClose = useCallback(() => {
    dispatch(closeModalMobile());
    dispatch(closeModalAddWord());
    dispatch(closeModalClickWord());
    dispatch(closeModalEdit());
    dispatch(closeModalConfirmation());
    dispatch(closeModalWellDone());
  }, [dispatch]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClickClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        handleClickClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.cssText = `overflow: hidden; `;

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.cssText = `overflow: auto; `;
    };
  }, [
    isMobileModalOpen,
    isModalOpenAddWord,
    isModalOpenClickWord,
    isModalOpenConfirmation,
    isModalOpenEdit,
    isModalOpenWellDone,
    handleClickClose,
    dispatch,
  ]);
  return createPortal(
    <>
      {(isMobileModalOpen ||
        isModalOpenAddWord ||
        isModalOpenEdit ||
        isModalOpenConfirmation ||
        isModalOpenWellDone) && (
        <BackdropStyle onClick={handleBackdropClick}>
          {isMobileModalOpen && (
            <MobileModal handleClickClose={handleClickClose} />
          )}
          {isModalOpenAddWord && (
            <AddWordModal handleClickClose={handleClickClose} />
          )}
          {isModalOpenConfirmation && (
            <ConfirmModal handleClickClose={handleClickClose} />
          )}
          {isModalOpenEdit && <EditModal handleClickClose={handleClickClose} />}
          {isModalOpenWellDone && (
            <WellDoneModal handleClickClose={handleClickClose} />
          )}
        </BackdropStyle>
      )}
      {isModalOpenClickWord && (
        <BackdropClickWord onClick={handleBackdropClick}>
          <ClickWord handleClickClose={handleClickClose} />
        </BackdropClickWord>
      )}
    </>,
    modalRoot
  );
};

export default Modals;
