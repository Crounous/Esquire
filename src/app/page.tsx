export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-6 text-foreground">
      <div className="flex flex-col justify-center items-center w-full px-35">

        {/* Hero Section */}
        <div className="flex flex-col w-full min-h-128 gap-y-30 items-end justify-center bg-contain bg-center bg-no-repeat px-30 md:px-30" 
        style={{backgroundImage: "url('/home/images/HeroBackground.png')"}} >
          <div className="rounded-full bg-white h-30 w-30"> </div>
          <div className="ml-auto w-full max-w-3xl text-right flex flex-col gap-y-4">
          <h1 className="font-sans text-5xl font-semibold text-white">IT IS DIFFICULT ENOUGH TO LOSE A HOME TO FORECLOSURE</h1>
          <p className="font-sans text-4xl tracking-tighter text-white">You should not also lose your home equity</p>
        </div>
        </div>

        {/* Banner Section */}
        <div className="flex flex-col w-full h-40 items-center justify-center bg-primary mt-10 rounded-lg">
          
        </div>




      </div>
    </main>
  );
}
