"use client";
import React, { useState } from "react";
//image
import Image from "next/image";
//modal
import Modal from "react-modal";
//components
import PizzaDetails from "./PizzaDetails";
//icons
import { IoCloseOutline } from "react-icons/io5";

// bind modal to body
Modal.setAppElement("body");

//modal styles
const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
};

const Pizza = ({ pizza }) => {
  //modal state
  const [modal, setModal] = useState(false);
  // open modal
  const openModal = () => {
    setModal(true);
  };
  // open modal
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="group py-2 px-4 xl:py-4 xl:px-2 rounded-xl">
      <Image
        className="lg:group-hover:translate-y-3 transition-all duration-300 mb-8 cursor-pointer"
        width={270}
        height={270}
        src={pizza.image}
        alt=""
        priority={"1"}
      />
      {/* title */}
      <div onClick={openModal}>
        <div className="text-xl font-bold mb-3 capitalize cursor-pointer line-clamp-2">
          {pizza.name}
        </div>
      </div>
      {/* description */}
      <div>
        <div className="text-sm font-medium mb-6 line-clamp-3">
          {pizza.description}
        </div>
      </div>
      {/* price & btn */}
      <div className="mb-6 flex items-center justify-between">
        {/* price -> hidden (sm) - visible (lg)  */}
        <div
          onClick={openModal}
          className="hidden lg:flex text-x1 font-semibold"
        >
          start at {pizza.priceSm}
        </div>
      </div>
      {/* btn -> hidden (sm) - visible (lg) */}
      <button
        onClick={openModal}
        className="hidden lg:flex gradient text-white rounded-lg btn-sm font-semibold text-sm"
      >
        Add to cart
      </button>
      {/* btn -> visible (sm) - hidden (lg)  */}
      <button
        onClick={openModal}
        className="btn btn-sm gradient text-sm lg:hidden px-3"
      >
        Add to cart
      </button>
      {/* modal */}
      {modal && (
        <Modal
          isOpen={modal}
          style={modalStyles}
          onRequestClose={closeModal}
          contentLabel="Pizza Modal"
          className={
            "bg-white w-full h-full lg:max-w-[900px] lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none"
          }
        >
          <div
            onClick={closeModal}
            className="absolute z-30 right-2 top-2 hover:scale-110 duration-200 cursor-pointer"
          >
            <IoCloseOutline className="text-4xl text-orange" />
          </div>
          {/* pizza detail */}
          <PizzaDetails pizza={pizza} modal={modal} setModal={setModal} />
        </Modal>
      )}
    </div>
  );
};

export default Pizza;
