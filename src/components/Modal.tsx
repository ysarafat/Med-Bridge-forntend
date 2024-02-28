/* eslint-disable @typescript-eslint/ban-ts-comment */
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import {
  MouseEvent,
  ReactNode,
  createContext,
  useContext,
  useRef,
} from "react";
import { createPortal } from "react-dom";
type TModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};
type TModalContext = {
  onClose: () => void;
};
const ModalContext = createContext<TModalContext | null>(null);
const Modal = ({ isOpen, onClose, children }: TModalProps) => {
  const modalContainerRef = useRef<HTMLDivElement>(null);
  const handleModalClose = (e: MouseEvent) => {
    if (!modalContainerRef.current?.contains(e.target as Node)) {
      onClose();
    }
  };
  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div
        className={cn(
          "fixed inset-0 bg-black/50 invisible backdrop-blur-[5px]",
          isOpen && "visible"
        )}
        onClick={handleModalClose}
      >
        <div className="h-screen w-full flex justify-center items-center gap-x-5">
          <div
            ref={modalContainerRef}
            className="bg-slate-100 dark:bg-slate-900 p-5 rounded-lg md:w-1/2 lg:w-1/3 w-full mx-6"
          >
            {children}
          </div>
        </div>
      </div>
    </ModalContext.Provider>,
    document.getElementById("modal") as Element
  );
};
const ModalCloseButton = () => {
  const { onClose } = useContext(ModalContext) as TModalContext;
  return (
    <button onClick={onClose}>
      <X className="bg-rose-50 p-1 text-rose-500 border-rose-500 border rounded-md hover:bg-rose-500 hover:text-white" />
    </button>
  );
};
const ModalHeader = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="flex items-center justify-between mb-2">{children}</div>
  );
};

Modal.ModalCloseButton = ModalCloseButton;
Modal.ModalHeader = ModalHeader;
export default Modal;
