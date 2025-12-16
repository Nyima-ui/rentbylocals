"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

interface MapModalProps {
  isMapModalOpen: boolean;
  setisMapModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MapModal = ({ isMapModalOpen, setisMapModalOpen }: MapModalProps) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isMapModalOpen) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.close();
      document.body.style.overflow = "";
    }

    function handleCancel(e: Event) {
      e.preventDefault();
      setisMapModalOpen(false);
    }
    dialog.addEventListener("cancel", handleCancel);
    return () => {
      dialog.removeEventListener("cancel", handleCancel);
      document.body.style.overflow = "";
    };
  }, [isMapModalOpen, setisMapModalOpen]);
  return (
    <dialog
      ref={dialogRef}
      className="bg-main-blue text-white rounded-sm open:backdrop:bg-black/40 items-center justify-center fixed inset-0 m-auto py-5 px-[15px]"
    >
      <header className="flex justify-between items-center select-none">
        <h2 className="text-lg">Pick and drop off location</h2>
        <button
          onClick={() => setisMapModalOpen(false)}
          className="cursor-pointer"
        >
          <Image
            height={30}
            width={30}
            src={"/svg/X.svg"}
            alt="Close map model icon"
          />
        </button>
      </header>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184532.0586637162!2d-79.92435155028221!3d43.72481560254592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b15eaa5d05abf%3A0x352d31667cc38677!2sBrampton%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sin!4v1765871875863!5m2!1sen!2sin"
        className="mt-2.5 rounded-sm"
        width="376"
        height="450"
        style={{ border: "0px" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </dialog>
  );
};

export default MapModal;
