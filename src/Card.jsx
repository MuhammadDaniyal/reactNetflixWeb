import React from 'react'

// props ki values idhr as a object ki values Card(props)  ma save horhi then phir issy props.attribute krka card ma access krrha
function Card(props) {
    return (<>
        <div className='cards'>
            <div className="card">
                <img src={props.img_src} alt="myPic" className="card_img" />
                <div className="card_info">
                    <span className="card_category">{props.title}</span>
                    <h3 className="card_title">{props.sname}</h3>
                    <a href={props.link} target={'_blank'} rel="noreferrer">
                        <button> Watch Now</button>
                    </a>
                </div>
            </div>
        </div>
    </>);
}

export default Card;