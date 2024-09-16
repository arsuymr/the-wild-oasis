import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import { useState } from "react";

export default function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add New Cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
      {/* <Modal.Open opens="table">
        <Button>Show Table</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CreateCabinForm />
      </Modal.Window> */}
    </Modal>
  );
  //   const [isOpenModal, setIsOpenModal] = useState(false);
  //   return (
  //     <>
  //       <Button onClick={() => setIsOpenModal((show) => !show)}>
  //         Add new cabin
  //       </Button>
  //       {isOpenModal && (
  //         <Modal onClose={() => setIsOpenModal(false)}>
  //           <CreateCabinForm onClose={() => setIsOpenModal(false)} />
  //         </Modal>
  //       )}
  //     </>
  //   );
}
