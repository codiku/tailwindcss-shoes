export const Sidebar = ({ isOpen, onClickClose, children }) => {
  return (
    <>
      <div
        className={`fixed right-0 top-0 z-50 h-full w-full transform overflow-auto bg-white p-5 shadow-lg transition duration-300 dark:bg-night dark:text-white md:w-[50%] lg:w-[35%]  ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={onClickClose}
          className="absolute right-4 top-4  rounded-full p-2 text-black hover:text-gray-800 dark:text-white"
        >
          X
        </button>
        {children}
      </div>
      {/*Overlay*/}
      {isOpen && (
        <div className="fixed left-0 top-0 z-20 h-full w-full bg-black opacity-50"></div>
      )}
    </>
  );
};
