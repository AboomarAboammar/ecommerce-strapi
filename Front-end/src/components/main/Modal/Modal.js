import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaShoppingCart } from "react-icons/fa";
import buttomRightImg from "../../../images/banner-16.jpg";
import "./modal.css";
import { ColorModeContext } from "../../../mode/ThemeContext.js";
import { useContext, useEffect } from 'react';
export default function MyVerticallyCenteredModal(props) {
  const colorMode = useContext(ColorModeContext);
  // mode effect
  useEffect(() => {
    document.body.className = colorMode.mode;
  }, [colorMode.mode]);

  return (
    <div className={`{content ${colorMode.mode}`} >
    <Modal className={colorMode.mode}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    
    >
      <Modal.Header className={colorMode.mode} closeButton>
      </Modal.Header>
      
      <div className="model-container border" >
     
          <img width={300}  src={buttomRightImg} alt=""/>
          
        <div className='model-desc'>
          <div className="title-pric">
        <h4> Category Name</h4>
        <span>$12,99</span>
        </div>
        
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
       
         
            <div className='footer-model'>
              <div className="footer-model-img">
              <img width={90} src={buttomRightImg} alt=""/>
            <img width={90} src={buttomRightImg} alt=""/>
            <img width={90} src={buttomRightImg} alt=""/>
              </div>
            
             <Button>
           
              <FaShoppingCart size={17} style={{ marginRight: "10px" }} />
              Buy Now
            </Button>
              </div>
             
        </div>
        
     </div>
    
        
 
    </Modal>
    </div>
  );
}