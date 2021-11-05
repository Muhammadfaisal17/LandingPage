import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function App() {
  return (

    <div class="container-fluid">
 
 <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
  <a ><img  src="https://www.vectorlogo.zone/logos/alibabagroup/alibabagroup-icon.svg" alt="" /><b>Alibaba</b><span className="logotxt" >.com</span></a>

    <form class="d-flex">
      <input style={{width:"220px"}} class="form-control me-2" type="search" placeholder="What are you looking for..." aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    <div><img width="40px" src="https://img.icons8.com/ios/50/000000/sign-in-form-password.png" /> <p>sign in</p></div>
   <div>
    <img  width="40px" src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-message-love-those-icons-lineal-those-icons-2.png"/>
   <p>message</p>
    </div>
    <div>
    <img  width="40px" src="https://img.icons8.com/ios/50/000000/purchase-order.png"/>
    <p>order</p>
    </div>
    <div>
    <img  width="40px" src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-cart-black-friday-flatart-icons-outline-flatarticons.png"/>
  <p>cart</p>
    </div>
  </div>
</nav> 
<Carousel style={{marginBottom:"10px"}}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://s.alicdn.com/@img/imgextra/i1/O1CN01aX23AE1uRABJ4InsG_!!6000000006033-0-tps-990-400.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://s.alicdn.com/@img/imgextra/i2/O1CN01tzlNNl28xaqEZItHA_!!6000000007999-0-tps-990-400.jpg"
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://s.alicdn.com/@img/imgextra/i3/O1CN01VNUdjq1ftoijrNU7P_!!6000000004065-2-tps-990-400.png"
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
<div style={{display:'flex'}}>
<h3 style={{display:"inline-block"}}>JUST FOR YOU</h3><hr style={{display:"inline-block",height:"6px", width:"1000px"}} />
</div>
<Container >
  
  <Row style={{textAlign:"center"}}>
    <Col sm={6}md={2}><Card>
    <Card.Img variant="top"  src="https://img.alicdn.com/tfs/TB1J5jev7voK1RjSZPfXXXPKFXa-300-320.png" />
    <Card.Body>
      <Card.Title>Whole sale christmas gift</Card.Title>
      <Card.Text>
        <b>$1.90-$2.90</b><br />120 pieces min
      </Card.Text>
    </Card.Body>
    
  </Card></Col>
    <Col sm={6}md={2}><Card >
    <Card.Img variant="top" src="https://s.alicdn.com/@sc04/kf/H06951797beb940b0bb99916ed4f3cee6x.jpg" />
    <Card.Body>
    <Card.Title>Whole sale christmas gift</Card.Title>
      <Card.Text>
        <b>$1.90-$2.90</b><br />120 pieces min
      </Card.Text>
    </Card.Body>
    
  </Card></Col>
    <Col sm={6}md={2}><Card >
    <Card.Img variant="top" src="https://s.alicdn.com/@sc04/kf/Hbe20edbaf6c440fc9263656f9f80ce77O.jpg" />
    <Card.Title>Whole sale christmas gift</Card.Title>
    <Card.Body>

      <Card.Text>
        <b>$1.90-$2.90</b><br />120 pieces min
      </Card.Text>
    </Card.Body>
    </Card></Col>
    <Col sm={6}md={2}><Card>
    <Card.Img variant="top" src="https://s.alicdn.com/@sc04/kf/Hbafb145b7bd2461a816de2f86e9b6fe4n.jpg" />
    <Card.Body>
    <Card.Title>Whole sale christmas gift</Card.Title>
      <Card.Text>
        <b>$1.90-$2.90</b><br />120 pieces min
      </Card.Text>
    </Card.Body>
    
  </Card></Col>
    <Col sm={6}md={2}><Card  >
    <Card.Img v
    ariant="top" src="https://s.alicdn.com/@sc04/kf/Haa75ae67f08048b7ac6f8afc8941d09b1.jpg" />
    <Card.Body>
    <Card.Title>Whole sale christmas gift</Card.Title>
      <Card.Text>
        <b>$1.90-$2.90</b><br />120 pieces min
      </Card.Text>
    </Card.Body>
    </Card></Col>
    <Col sm={6}md={2}><Card>
    <Card.Img variant="top" src="https://s.alicdn.com/@sc04/kf/H7b771568448c4b78bcbb99f5f7eaea1eE.jpg" />
    <Card.Body>
    <Card.Title>Whole sale christmas gift</Card.Title>
      <Card.Text>
        <b>$1.90-$2.90</b><br />120 pieces min
      </Card.Text>
    </Card.Body>
  </Card></Col>
  <Col sm={6}md={2}><Card>
    <Card.Img variant="top"  src="https://img.alicdn.com/tfs/TB1J5jev7voK1RjSZPfXXXPKFXa-300-320.png" />
    <Card.Body>
      <Card.Title>Whole sale christmas gift</Card.Title>
      <Card.Text>
        <b>$1.90-$2.90</b><br />120 pieces min
      </Card.Text>
    </Card.Body>
    
  </Card></Col>
    <Col sm={6}md={2}><Card >
    <Card.Img variant="top" src="https://s.alicdn.com/@sc04/kf/H06951797beb940b0bb99916ed4f3cee6x.jpg" />
    <Card.Body>
    <Card.Title>Whole sale christmas gift</Card.Title>
      <Card.Text>
        <b>$1.90-$2.90</b><br />120 pieces min
      </Card.Text>
    </Card.Body>
    
  </Card></Col>
    <Col sm={6}md={2}><Card >
    <Card.Img variant="top" src="https://s.alicdn.com/@sc04/kf/Hbe20edbaf6c440fc9263656f9f80ce77O.jpg" />
    <Card.Title>Whole sale christmas gift</Card.Title>
    <Card.Body>

      <Card.Text>
        <b>$1.90-$2.90</b><br />120 pieces min
      </Card.Text>
    </Card.Body>
    </Card></Col>
    <Col sm={6}md={2}><Card>
    <Card.Img variant="top" src="https://s.alicdn.com/@sc04/kf/Hbafb145b7bd2461a816de2f86e9b6fe4n.jpg" />
    <Card.Body>
    <Card.Title>Whole sale christmas gift</Card.Title>
      <Card.Text>
        <b>$1.90-$2.90</b><br />120 pieces min
      </Card.Text>
    </Card.Body>
    
  </Card></Col>
    <Col sm={6}md={2}><Card  >
    <Card.Img v
    ariant="top" src="https://s.alicdn.com/@sc04/kf/Haa75ae67f08048b7ac6f8afc8941d09b1.jpg" />
    <Card.Body>
    <Card.Title>Whole sale christmas gift</Card.Title>
      <Card.Text>
        <b>$1.90-$2.90</b><br />120 pieces min
      </Card.Text>
    </Card.Body>
    </Card></Col>
    <Col sm={6}md={2}><Card>
    <Card.Img variant="top" src="https://s.alicdn.com/@sc04/kf/H7b771568448c4b78bcbb99f5f7eaea1eE.jpg" />
    <Card.Body>
    <Card.Title>Whole sale christmas gift</Card.Title>
      <Card.Text>
        <b>$1.90-$2.90</b><br />120 pieces min
      </Card.Text>
    </Card.Body>
  </Card></Col>
  </Row>
</Container>
<div style={{paddingLeft:"15px"}}>
  <a   className="a1" style={{fontSize:"20px",textDecoration:"none"}} href="">CHOOSE YOUR SUPPLIERS BY REGIONS</a>
</div>


<container style={{padding:"10px"}}>
  <Row style={{textAlign:"center"}}>
    <Col><a style={{textDecoration:"none"}} href="">  <img width="40px" src="https://img.alicdn.com/imgextra/i3/O1CN01Sbi1Tm28po6huT3zL_!!6000000007982-2-tps-48-48.png" alt="" />
 Russia</a></Col>
<Col><a style={{textDecoration:"none"}} href="">  <img width="40px"  src="https://img.alicdn.com/tfs/TB18omIbIrI8KJjy0FhXXbfnpXa-48-48.png" alt="" />
USA</a></Col>
<Col><a style={{textDecoration:"none"}} href="">  <img width="40px"  src="https://img.alicdn.com/tfs/TB1U8_xAeH2gK0jSZJnXXaT1FXa-268-179.jpg_50x50.jpg" alt="" />
Italy</a></Col>
<Col><a style={{textDecoration:"none"}} href="">  <img width="40px"  src="https://img.alicdn.com/tps/TB1QwGEPFXXXXXUaXXXXXXXXXXX-48-48.png" alt="" />
USA</a></Col>
<Col><a style={{textDecoration:"none"}} href="">  <img width="40px"  src="https://img.alicdn.com/tps/TB1xQi8PFXXXXaRXpXXXXXXXXXX-48-48.png" alt="" />
USA</a></Col>
<Col><a style={{textDecoration:"none"}} href="">  <img width="40px"  src="https://img.alicdn.com/tps/TB1tQC4PFXXXXaOXpXXXXXXXXXX-48-48.png" alt="" />
USA</a></Col>
<Col><a style={{textDecoration:"none"}} href="">
More Region</a></Col>
  </Row>
</container>
<div class="footer">
<p style={{textAlign:"center"}}>Trade Alert - Delivering the latest product trends and industry news straight to your inbox.</p>
<container class="f1">
<input type="text"  placeholder="Your email" />
<button>Subscribe</button>
</container>
<p style={{textAlign:"center"}}>
We’ll never share your email address with a third-party.
</p>
<container class="a4" style={{textAlign:"center"}}>
  <Row>
    <Col  >
    <h5>Customer Services</h5>
<a href="">HelpCenter</a><br />
<a href="">HelpCenter</a><br />
<a href="">HelpCenter</a><br />
<a href="">HelpCenter</a><br />
<a href="">HelpCenter</a>

    </Col>
    <Col >
    <h5>Customer Services</h5>
<a href="">HelpCenter</a><br />
<a href="">HelpCenter</a><br />
<a href="">HelpCenter</a><br />
<a href="">HelpCenter</a><br />
<a href="">HelpCenter</a>
    </Col>
    <Col  ><h5>Customer Services</h5>
<a href="">HelpCenter</a><br />
<a href="">HelpCenter</a><br />
<a href="">HelpCenter</a><br />
<a href="">HelpCenter</a><br />
<a href="">HelpCenter</a></Col>
    
    <Col  >
    <h5>Customer Services</h5>
<a href="">HelpCenter</a><br />
<a href="">HelpCenter</a><br />
<a href="">HelpCenter</a><br />
<a href="">HelpCenter</a><br />
<a href="">HelpCenter</a>
    </Col>
    <Col >
    <h5>Customer Services</h5>
<a href="">HelpCenter</a><br />
<a href="">HelpCenter</a><br />
<a href="">HelpCenter</a><br />
<a href="">HelpCenter</a><br />
<a href="">HelpCenter</a>
</Col>
  </Row>
</container>
<hr style={{textAlign:"center",color:"black" ,height:"3px" }} />
<container class="a4" >
  <Row style={{textAlign:"center"}}>
    <Col>
    <div style={{display:"flex"}}>
<p>Download:</p>
<p><a href="https://app.alibaba.com/?spm=a2700.8293689.0.0.4faf67af0pmZxs&tracelog=footer_app_ios">App Store</a></p>
<p><a href="https://app.alibaba.com/?spm=a2700.8293689.0.0.4faf67af0pmZxs&tracelog=footer_app_android">Google Play</a></p>

    </div>
    </Col>
    <Col>
    <p>Alibaba Supplier App </p>
    </Col>
    <Col>
    <p>Follow us: F T Y L</p>
    </Col>
  </Row>
  <p style={{textAlign:"center"}} > Alibaba.com Site: International - Español - Português - Deutsch - Français - Italiano - हिंदी - Pусский - 한국어 - 日本語 - اللغة العربية - ภาษาไทย - Türk - Nederlands - tiếng Việt - Indonesian - עברית

Alibaba Group | Taobao Marketplace | Tmall.com | Juhuasuan | AliExpress | Alibaba.com | 1688.com | Alimama | Fliggy | Tmall Taobao World
Alibaba Cloud | AliOS | AliTelecom | Autonavi | UCWeb | Umeng | Xiami | DingTalk | Alipay | Lazada | Alibaba Security

Browse Alphabetically: Onetouch | Showroom | Country Search | Suppliers | Affiliate

Product Listing Policy - Intellectual Property Protection - Privacy Policy - Terms of Use - User Information Legal Enquiry Guide</p>
<p style={{textAlign:"center"}}>© 1999-2021 Alibaba.com. All rights reserved. 浙公网安备 33010002000092号 浙B2-20120091-4</p>
</container>
</div>
</div>
          );
}
 
export default App;  