import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import ContactForm from './Components/ContactForm'
import Footer from './Components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage.jsx'
import ProfilePage from './pages/ProfilePage'
import NotFoundPage from './pages/NotFoundPage'
import Menu from './Components/Menu.jsx'


function App ()  {

let marks = 70;
  const city = ["Dhaka","Rangpur","Rajshahi"]
  const status = true;

  const itemObj = {
    name : "Romicha",
    age : 20,
    city : "Rangpur"
  }
  
   const btnClick = () => {
    alert("I am Programmer")
   } 

   const PostFormateData = (event) => {
      event.preventDefault();
   }

   let myHeadLine = useRef();

   const change = () => {
    myHeadLine.current.innetHTML = "<ul><li>A</li> <li>B </li></ul>";
   }
//useref img
   let myImg = useRef();
   const click = () => {
     myImg.current.src="https://placehold.co/600x400/png";
     myImg.current.setAtribute("height", '100');
     myImg.current.setAtribute('width', '100')
   }
    
   //useref input
   let firstName = useRef("");
   let lastName = useRef("");
    const Click = () => {
      let fName = firstName.current.value;
      let lName = lastName.current.value;
      alert(fName + "" + lName)
    }

    //useref css cls
    let  headLine = useRef();
    const changeLine = () => {
      headLine.current.classList.remove("text-success");
      headLine.current.classList.add("text-danger")
    }

    //useref number
    let number = useRef(0)
    const changeNumber =() => {
      number.current++;
      console.log(number.current)
    }

    //APi Fetch
    let APIData = useRef(0)
    let myPTag = useRef();

    const fetchData = async () => {
      const response = await fetch('https://dummyjson.com/products/1');
      APIData.current = await response.json();
    }
    const showData = () => {
      myPTag.current.innerTEXT = JSON.stringify(APIData);
    }

    //usestate a 1 kore barano
    let [numbr, setNumbr] = useState(10)

    //usestate obj
    let [myObj, setMyObj] = useState({
      key1 : "value 1",
      key2 : "value 2",
      key3 : "value 3",
      key4 : "value 4",
      key5 : "value 5"
    });
    const changee = () => {
      setMyObj(
        prevObj =>({
          ...prevObj,
          key1 : "new value for key one",
          key2 : "new value for key two"

      
        })
      )
    }
   
    //add item
    let [list,setList] = useState([]);
    let [item,setItem] = useState();
    const addToList = () => {
      list.push(item);
      setList([...list])
    }

    //add item and remove
    const [listt, setListt] = useState([]);
    const [iteem, setIteem] = useState("")
  
   const AddToList = () => {
    listt.push(iteem)
    setListt ([...listt])
   }
  
   const RemoveItem = (index) =>{
       list.splice(index,1)
       setList([...list])
   }

   //form
let [FromObj,setFormObj] = useState({fName:"", lName:"",city:"", gender:""})

const inputOnChange = (property,value) => {
   setFormObj(prevObj =>({
         ...prevObj,
         [property]:value
   }))
 

}

const formSubmit = (e) => {
      e.preventDefault();
      console.log(FromObj)
}


 



  return (
    <div>
   
      <h1>I am learning React</h1>
      <input type="text" placeholder='My Name' /> <br />
     
      <h2>{2+2}</h2> <br />
      /* date */
     <h1>{new Date().getTime()}</h1><br />
     <button onClick={()=> alert("Hello" )} style={{
      color:'red'
     }}>Submit</button><br />
      {
      marks>80?<h1>Brillian Result</h1>:<h1>Avarage Result</h1>
}

    /* if else */
      {(()=> {
    if(marks=>80 && marks<100){
      return <h1>A+</h1>
    }
    else if(marks=>70 && marks<80){
      return <h1>A</h1>
    }
    else if(marks => 60 && marks<70){
      return <h1>A-</h1>
    }
    else if(marks=>50 && marks<60){
      return <h1>B</h1>
    }
   else if(marks => 40 && marks<50){
      return <h1>B+</h1>
    }
    else if(marks=>30 && marks<40){
      return <h1>C</h1>
    }
    else{
      return <h1>F</h1>
    }
  })()}


/*lopp */
    <br />
    <ol>

   
    {
    city.map((item,i)=>{
      return <li key={i.toString}>{item}</li>
    })
   }
   </ol>


  //tarnari 
  <br />
{
  status?
  <button>Logout</button>:
  <button>Login</button>
}
 <br />
   /* logical &&*/ <br />
<h1>Login button</h1>
  {status &&<button>Logout Button</button>} <br />


    /* Props*/ <br />

    <Hero item={itemObj} childBtnClick={btnClick}></Hero>
    
    /* Managing form submit */ <br />

    <form onSubmit={PostFormateData}>
  
      <input type="text" placeholder='name'/>
      <button type='submit'>Submit</button>
    </form>

    //React Hock useRef
    <h1 ref={myHeadLine}></h1>
    <button onClick={change}>Click</button> <br />
         
         //useRef Atribute

    <img ref={myImg} src="https://placehold.co/400" alt="" /> <br />
    <button onClick={click}>Submit</button> <br />

    //useRef input 
    <input  ref={firstName} type="text"  placeholder='first name'/>
    <input ref={lastName} type="text" placeholder='last name' />
    <button onClick={Click}>submit</button> <br />

    //usereff css
    <h1 className='text-success' ref={headLine}>This is Head tag</h1>
    <button onClick={changeLine}>Button</button><br />
    
    //useref number
    <button onClick={changeNumber}>click</button><br />

      //API Fetch
      <br />
      <p ref={myPTag}></p>
      <button onClick={fetchData}>Call API</button>
      <button onClick={showData}>Show Data</button><br />

      //useState 1 kore barano
      <h1>Number: {numbr} </h1>
      <button onClick={()=>setNumbr(numbr + 1)}>Click</button> <br />

      // usestate obj
      <h1>{myObj.key1}</h1>
      <h2>{myObj.key2}</h2>
      <button onClick={changee}>Click</button><br />

      //add itemObj
      <br />
      <h1> {list.length} </h1>
      <p>{item}</p>
      <input onChange={(e) => setItem(e.target.value)} type="text" placeholder='item' />
      <button onClick={addToList}> Add</button><br />
      //add item and remove 
      <br />
      <table>
  <tbody>
   {
     listt.length!==0?(
      listt.map((element,index) => {
       return(
          <tr>
           <td> {element}</td>
           <td><button onClick={()=>{
             RemoveItem(index)
           }}>Remove</button></td>
          </tr>
       )
      })
     ):(<tr></tr>)
     }
  </tbody>
</table>
<input onChange={(e) => setIteem(e.target.value)} placeholder='item'/>
<button onClick={AddToList}>Add</button><br />

<div className='container'>

         <form onSubmit={formSubmit}>
          <input onChange={(e) =>{inputOnChange("fName", e.target.value)}} value={FromObj.fName} placeholder='First Name' /><br></br>
          <input onChange={(e) =>{inputOnChange("lName", e.target.value)}} value={FromObj.lName} placeholder='Last Name' /><br />
          <select onChange={(e) =>{inputOnChange("city", e.target.value)}} value={FromObj.city}>
            <option value="">Choose City</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Rangpur">Rangpur</option>
          </select>
          <br />
          <input onChange={(e) =>{inputOnChange("gender",'Male')}} checked={FromObj.gender==="Male"} type="radio" name='gender' />Male
          <input onChange={(e) =>{inputOnChange("gender", 'Female')}} checked={FromObj.gender==="Female"} type="radio" name='gender' />Female
          <br />
          <button type='submit'>Submit</button>
         </form>
      </div>

      <BrowserRouter>
      <Routes>
      <Route path='/' element={<HomePage></HomePage>}></Route>
      <Route path='/product' element={<ProductPage></ProductPage>}></Route>
       <Route path='/profile' element={<ProfilePage/>}></Route>
       <Route path='/notfound' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
     </BrowserRouter>   
    
     
    </div>

   
    

              )
              }

export default App
