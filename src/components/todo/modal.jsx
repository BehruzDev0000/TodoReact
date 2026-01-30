function Modal({children,showModal,setShowModal}){
    return (
        <div id="wrapper" onClick={(e)=>e.target.id==="wrapper" &&setShowModal(false)} className={`fixed top-0 ${showModal? '': 'scale-0'}  duration-300 left-0 right-0 bottom-0 bg-[#RRGGBBAA] backdrop-blur-md flex items-center justify-center`}>
            <div className="absolute w-[450px] m-auto  left-0 right-0  h-auto rounded-2xl p-5 bg-white">
                {children}

            </div>
        </div>
    )
}
export default Modal