import NewCardBtn from "./NewCardBtn";

export default function Sidebar() {
  const category = ["All", "Sport", "Luxury", "Fashion"];
  return (
    <main className="w-52 h-screen bg-gray-500 flex flex-col items-center justify-between py-10">
      <div>
        <ul className="flex flex-col gap-5 items-center text-white">
          {category.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <NewCardBtn />
      </div>
    </main>
  );
}