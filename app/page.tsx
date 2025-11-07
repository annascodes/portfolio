
export default function Home() {
  return (
    <div className="flex md:flex-row flex-col items-center gap-2 md:gap-0 justify-center h-svh  ">
      <div className="w-1/3   flex items-center justify-center   mx-auto">
        <div>
          <h1 className="text-6xl font-thin">Hello!</h1>
          <h1 className="italic text-center tracking-widest text-sm">its me,</h1>
        </div>
      </div>
      <div className="w-2/3   flex items-center justify-center   mx-auto">
        <h1 className="text-9xl font-extrabold">Anas </h1>
      </div>
    </div>
  );
}
