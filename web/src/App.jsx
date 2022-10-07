function app () {


  return (

    <div className="h-screen bg-red-700 p-4 text-white flex flex-col items-center space-y-6">

      <header className="p-4">
        <img src="imgs/logo-fundo.svg" className="w-40" />
      </header>
      
      <div className="container p-6 flex-1 flex flex-col items-center  md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <img src="imgs/img.png"  className="w-full max-w-md"/>
      <div className=" md:flex-1 flex items-center ">
       
      </div>
      

      <div className=" md:flex-1 flex flex-col space-y-6">
       <h1 className="text-3xl text-center font-bold md:text-left">Dê o seu palpite na Copa do Mundo do Catar 2022! </h1>


        <button className="text-red-700 bg-white text-xl px-8 py-4 rounded-xl ">
           Criar minha conta
        </button>
        <button className="text-white border border-white  text-xl px-8 py-4 rounded-xl ">
            Fazer Login
        </button>
        </div>
    </div>
    </div>
  )
}

export default app