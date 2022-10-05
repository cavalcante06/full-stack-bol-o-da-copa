const Title =({ children,...props}) => (
<h1 {...props}>{children}</h1>

)



function App (){

return (
  
<div className="app">
<Title>OLaMundo</Title>
<Title>OLaMundo</Title>
<Title>OLaMundo</Title>

</div>

)

}

export default App