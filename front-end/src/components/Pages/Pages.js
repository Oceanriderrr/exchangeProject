import "./Pages.css"
import "./css/Register.css"
import "./css/Swap.css"
import  {useState} from "react";
import {Route,Routes} from "react-router-dom";


import Posts from '../Posts/Posts'
import Post from '../Posts/Post'
function MainContent(){
    return(

<Routes>
    <Route path = "/" element={<Home/>}/>
    <Route path = "/about" element={<About/>}/>
    <Route path = "/products" element={<Products/>}/>
    <Route path = "/details/product/:productId" element={<ProductDetails/>}/>
    <Route path = "/collections" element={<Collections/>}/>
    <Route path = "/swap" element={<Swap/>}/>
    <Route path = "/contact" element={<Contact/>}/>
    <Route path = "/login" element={<Login/>}/>
    <Route path = "/register" element={<Register/>}/>
    <Route path = "/faq" element={<FAQ/>}/>
    <Route path = "/documentation" element={<Documentation/>}/>
    <Route path = "/404" element={<PageNotFound/>}/>
    <Route path = "/newPage" element={<NewPage/>}/>
    </Routes>  

    );
}
function Home(props) {
<div>

</div>
  }
  
  function About(props) {
    return(
  
  <div>
    <h1>About our shop</h1>

    <img src="https://via.placeholder.com/500x200"></img>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aliquam magnam similique tempora veniam vero expedita obcaecati at temporibus corrupti, pariatur et totam? Dolor delectus dolorem sapiente, assumenda ex harum.</p>
  </div>
     

  
    );
  }
  
  function Products(props){
    const posts = [
      {productName:"Product 1",
      imageURL : "https://via.placeholder.com /150" ,
      seo:["tag1","tag2","tag3"],
      description:"lorem ipsum dolor sit amet consecector adipscing elit na arak keboura nyebiyeb nehmeed ketral",
      price:23.05,
      vendor:"Leumas",
      productId:1
    }, 
  
      {productName:"Product 2",
      imageURL : "https://placeholder.com/150x150" ,
      seo:["tag1","tag2","tag3"],
      description:"lorem ipsum dolor sit amet consecector adipscing elit na arak keboura nyebiyeb nehmeed ketral",
      price:19.95,
      vendor:"Leumas"},
  
      {productName:"Product 3",
      imageURL : "https://placeholder.com/150x150" ,
      seo:["tag1","tag2","tag3"],
      description:"lorem ipsum dolor sit amet consecector adipscing elit na arak keboura nyebiyeb nehmeed ketral",
      price:23,
      vendor:"Leumas"},
  
      {productName:"Product 4",
      imageURL : "https://placeholder.com/150x150" ,
      seo:["tag1","tag2","tag3"],
      description:"lorem ipsum dolor sit amet consecector adipscing elit na arak keboura nyebiyeb nehmeed ketral",
      price:4300,
      vendor:"Leumas"},
    ]
  
  
    const loadPosts = posts.map((post,index)=>{
      return( <Post key={index} productName = {post.productName}  imageURL = {post.imageURL}  seo = {post.seo}  price = {post.price} description={`${index} -  ${post.description}`} vendor={post.vendor} productId={post.productId} />)
    })
  
  
  
      return(
    
    <div>      
    <div className="Main">

    <Posts>
      {loadPosts}
    </Posts>
    </div>
    </div>
    
    
      );
  }
  
  function ProductDetails(props) {
    return(
      <div class = "productDetailsPage">
        <h1>{props.productName}</h1>
        <div>
          <img src={props.imageURL} alt="product image"></img>
          <p>{props.seo}</p>
        </div>
        <div>
          <h3>Description</h3>
          <p>{props.description}</p>
        </div>
        <div>
          <h3>Specification</h3>
          <ul>
            <li>Template</li>
            <li>Three</li>
            <li>or Four</li>
            <li>specifications</li>
          </ul>
        </div>
        <div>
          Space for cutomer reviews 
        </div>
        <div>
          <h3>Price: {props.price}</h3>
          <btn>ADD TO CART</btn>
        </div>
      
        
      </div>
     );
  }
  
  function Collections(props) {
    return(
<div>
    <h1>This is the Collections page</h1>
</div>


  
    );
  }
  
  
  function Swap(props){
    return(
      <div>
<div className="swapwindow"> 
      <li class="nav-item">
            <button id="login_button" class="btn btn-outline-primary my-2 my-sm-0" type="submit">Sign in with MetaMask</button>
          </li>
             <div class ="container">
        <div class="row">
            <div class="col col-md-6 offset-md-3" id="window">
                <h4>Swap</h4>
                <div id="form">
                    <div class="swapbox">
                        <div class="swapbox_select token_select" id="from_token_select">
                            <img class="token_img" id="from_token_img"></img>
                            <span id="from_token_text"></span>
                        </div>
                        <div class="swapbox_select">
                            <input class="number form-control" placeholder="amount" id="from_amount"></input>
                        </div>
                    </div>
                    <div class="swapbox">
                        <div class="swapbox_select token_select" id="to_token_select">
                            <img class="token_img" id="to_token_img"></img>
                            <span id="to_token_text"></span>
                        </div>
                         <div class="swapbox_select">
                            <input class="number form-control" placeholder="amount" id="to_amount"></input>
                        </div>
                    </div>  
                    <div class="gas_estimate_label">Estimated Gas: <span id="gas_estimate"></span></div>
                    <button disabled class="btn btn-large btn-primary btn-block" id="swap_button">Swap</button>                
                </div>
            </div>
        </div>
    </div>
      </div>
      <div class="modal" id="token_modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Select a Token</h5>
            <button id="modal_close" type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div id="token_list"></div>
          </div>
        </div>
      </div>
    </div>
    </div>
    );
  }
  
  function Contact(props){
    return(

        <h1>This is the Contact page</h1>

    );
  }

  // Login Page ......................................................................
  
  //TODO....AFTER LOGIN A LOG OUT BUTTON NEEDS RENDERED.....
  // TODO ADD IN THE LOGIN SERVICE

  function Login(){

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const handleInputChange = (e) => {
      const {id , value} = e.target;
      if(id === "userName"){
          setUserName(value);
      }
      if(id === "password"){
          setPassword(value);
      }
  }
  return(
    <div>
      <div className="heading">
      <h1><b>LOGIN </b></h1>
      </div>
          <div className="form-body">
              <div className="userName">
                  <label className="form__label" for="userName"><i><b>User Name:</b></i></label>
                  <br></br>
                  <input className="form__input" type="text" name="userName" id="userName" placeholder="User Name" value={userName} onChange = {(e) => handleInputChange(e)}/>
              </div>
              <div className="password">
                  <label className="form__label" for="password"><i><b>Password:</b></i></label>
                  <br></br>
                  <input className="form__input" type="password" name="password" id="password" placeholder="Password" value={password} onChange = {(e) => handleInputChange(e)}/>
              </div>
              <br></br>
              <div className="login">
            <button type="submit" class="btn">Login</button>
              </div>
          </div>
    </div>
  );
};

// Login Page ......................................................................

// Registration Page................................................................

  // TODO....REDIRECT USER TO LOGIN PAGE AFTER REGISTRATION.....


function Register(){

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "userName"){
        setUserName(value);
    }
    if(id === "email"){
        setEmail(value);
    }
    if(id === "password"){
        setPassword(value);
    }
    if(id === "confirmPassword"){
      setConfirmPassword(value);
    }

}
  return(
  
<div>
      <div className="heading">
      <h1><b>REGISTER HERE</b></h1>
      </div>
      <div className="form-body">
            <div className="userName">
                <label className="form__label" for="userName"><i><b>User Name:</b></i></label>
                <br></br>
                <input className="form__input" type="text" name="userName" id="userName" placeholder="User Name" value={userName} onChange = {(e) => handleInputChange(e)}/>
            </div>
            <div className="email">
                <label className="form__label" for="email"><i><b>Email:</b></i></label>
                <br></br>
                <input className="form__input" type="email" name="email" id="email" placeholder="Email" value={email} onChange = {(e) => handleInputChange(e)}/>
            </div>
            <div className="password">
                <label className="form__label" for="password"><i><b>Password:</b></i></label>
                <br></br>
                <input className="form__input" type="password" name="password" id="password" placeholder="Password" value={password} onChange = {(e) => handleInputChange(e)}/>
            </div>
            <div className="confirm-password">
                <label className="form__label" for="confirmPassword"><i><b>Confirm Password:</b></i></label>
                <br></br>
                <input className="form__input" type="password" name="repassword" id="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange = {(e) => handleInputChange(e)}/>
            </div>
            <br></br>
            <div className="register">
            <button type="submit" class="btn">Register</button>
            </div>
        </div>
</div>

  );
}
// Registration Page................................................................

  function FAQ(props){
    return(

        <h1>Question</h1>
   

    );
  }
  
  function Documentation(props){
    return(
   
        <h1>This is the Documentation page</h1>

    );
  }
  
  function PageNotFound(props){
    return(

        <h1>Error 404 page not found please navigate to <a href='/'>Home</a></h1>

    );
  }
  function NewPage(props){
    return(
 
      <h1>This is the new page page</h1>

    );
  }
export default MainContent