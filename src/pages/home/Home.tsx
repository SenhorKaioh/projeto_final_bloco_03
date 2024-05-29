function Home(){
    return(
      <>
      <div className="bg-cyan-700 w-screen flex justify-center py-12 ">
         <div className=" container grid grid-cols-2 text-white">
            <div className=" gap-4 flex flex-col items-center  justify-center py-4">
              <h2 className=" text-5xl font-bold">Seja Bem Vindo!</h2>
              <p className="text-xl">Conheça a farmária Carioca</p>
              <div className="">
         </div>
            </div>
            <div className="flex">
              <img src="https://ik.imagekit.io/SenhorKaioh/HheNdw7.png?updatedAt=1716987266717"
              alt="Imagem da Página da Home" 
              width="400px"
              />
            </div>   
         </div> 
      </div>
      </>
    );
    }
    export default Home;