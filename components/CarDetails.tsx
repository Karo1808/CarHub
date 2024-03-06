"use client";

import { Fragment, useState } from "react";
import { CarProps } from "@/types";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { generateCarImageUrl } from "@/utils";
import CarImage from "./CarImage";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  const [isOpenMain, setIsOpenMain] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                  <button
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                    type="button"
                    onClick={closeModal}
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>
                  <div className="flex-1 flex flex-col gap-3">
                    <div
                      className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg"
                      onClick={() => setIsOpenMain(true)}
                    >
                      <Image
                        src={generateCarImageUrl(car, "1")}
                        fill
                        alt="car model"
                        className="object-contain"
                      />
                    </div>
                    <CarImage
                      src={generateCarImageUrl(car, "1")}
                      car={car}
                      isOpen={isOpenMain}
                      closeModal={() => setIsOpenMain(false)}
                    />
                    <div className="flex gap-3">
                      <div
                        className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg"
                        onClick={() => setIsOpen1(true)}
                      >
                        <Image
                          src={generateCarImageUrl(car, "29")}
                          fill
                          alt="car model"
                          className="object-contain"
                        />
                      </div>
                      <CarImage
                        src={generateCarImageUrl(car, "29")}
                        car={car}
                        isOpen={isOpen1}
                        closeModal={() => setIsOpen1(false)}
                      />
                      <div
                        className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg"
                        onClick={() => setIsOpen2(true)}
                      >
                        <Image
                          src={generateCarImageUrl(car, "21")}
                          fill
                          alt="car model"
                          className="object-contain"
                        />
                      </div>
                      <CarImage
                        src={generateCarImageUrl(car, "21")}
                        car={car}
                        isOpen={isOpen2}
                        closeModal={() => setIsOpen2(false)}
                      />
                      <div
                        className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg"
                        onClick={() => setIsOpen3(true)}
                      >
                        <Image
                          src={generateCarImageUrl(car, "13")}
                          fill
                          alt="car model"
                          className="object-contain"
                        />
                      </div>
                      <CarImage
                        src={generateCarImageUrl(car, "13")}
                        car={car}
                        isOpen={isOpen3}
                        closeModal={() => setIsOpen3(false)}
                      />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-semibold text-xl capitalize">
                      {car?.make} {car?.model}
                    </h2>

                    <div className="mt-3 flex flex-wrap gap-4">
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          className="flex justify-between gap-5 w-full text-right"
                          key={key}
                        >
                          <h4 className="text-grey capitalize">
                            {key.split("_").join(" ")}
                          </h4>
                          <p className="text-black-100 font-semibold">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
