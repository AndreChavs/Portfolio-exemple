import React from "react"

const Card = ({image, category, totalLike, title, handleModal, modal}) => {

  return <>
    <div className='box btn_shadow '>
      <div className='img'>
        <img src={image} alt='' onClick={handleModal} />
      </div>
      <div className='category dflex'>
        <span onClick={handleModal}>{category}</span>
        <label>
          <i className='far fa-heart'></i> {totalLike}
        </label>
      </div>
      <div className='title'>
        <h2 onClick={handleModal}>{title}</h2>
        <a href='#popup' className='arrow' onClick={handleModal}>
          <i className='fas fa-arrow-right'></i>
        </a>
      </div>
    </div>

    {/* MODAL ON */}
    {modal && <div className='modal on'>
            <div className="modal-wrapper">
                <div className="modal_content dflex">
                    <div className="modal-img flex1">
                        <img src={image} alt='' />
                    </div>
                    <div className="modal-text flex1">
                        <span>Featured - Design</span>
                        <h1>{title}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>
                        <p>Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>
                        <div className='button dflex'>
                            <button className='btn_shadow'>
                            LIKE THIS <i className='far fa-thumbs-up'></i>
                            </button>
                            <button className='btn_shadow'>
                            VIEW PROJECT<i className='fas fa-chevron-right'></i>
                            </button>
                        </div>
                    </div>
                    <button className='close-modal btn_shadow' 
                    onClick={handleModal}>
                        <i className='fas fa-times'></i>
                    </button>
                </div>
            </div>
        </div>}
  </>
  
}

export default Card



// if (modal) {
  //   document.body.classList.add("active-modal")
  // } else {
  //   document.body.classList.remove("active-modal")
  // }
  // // 

  //   <>
  //     

  //     {/* Popup box */}
  //     {modal && (
  //       <div className='modal'>
  //         <div onClick={toggleModal} className='overlay'></div>
  //         <div className='modal-content dflex'>
  //           <div className='modal-img left'>
  //             <img src={image} alt='' />
  //           </div>
  //           <div className='modal-text right'>
  //             <span>Featured - Design</span>
  //             <h1>{title}</h1>
  //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>
  //             <p>Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>
  //             <div className='button f_flex mtop'>
  //               <button className='btn_shadow'>
  //                 LIKE THIS <i class='far fa-thumbs-up'></i>
  //               </button>
  //               <button className='btn_shadow'>
  //                 VIEW PROJECT<i class='fas fa-chevron-right'></i>
  //               </button>
  //             </div>
  //             <button className='close-modal btn_shadow' onClick={toggleModal}>
  //               <i class='fas fa-times'></i>
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     )}
  //   </>
