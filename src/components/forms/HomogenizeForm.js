import { Button, Form, Modal } from "react-bootstrap";
import { useEffect, useReducer, useState, Text } from "react";
import { allRulesValid } from "../../utils/helpers";
import { setUseProxies } from "immer";

const HomogenizeForm = ({
  showHomogenizeModal,
  handleCloseHomogenizeModal,
  handleHomogenize,
  handleError,
}) => {
  const handleClose = () => {
    handleCloseHomogenizeModal();
  };

  return (
    <Modal show={showHomogenizeModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Choose Homogenization Type</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            type="submit"
            variant="primary"
            data-testid="edit-node-submit-button"
            onClick={() => {
              handleHomogenize(0);
              handleClose();
            }}
          >
            Type 2 Subsystem Scaling
          </Button>
          <div style={{ width: 50 }}></div>
          <Button
            type="submit"
            variant="primary"
            data-testid="edit-node-submit-button"
            onClick={() => {
              handleHomogenize(1);
              handleClose();
            }}
          >
            Released Spike Scaling
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default HomogenizeForm;
