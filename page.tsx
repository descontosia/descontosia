export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center">DescontosIA 🔎</h1>
      <input
        type="text"
        placeholder="Digite o que procura (ex: fone bluetooth)"
        className="w-full max-w-md p-3 border rounded-xl shadow mb-6"
      />
      <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
        Caçar Desconto com IA 🚀
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 w-full max-w-6xl">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white p-4 rounded-xl shadow">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Produto"
              className="w-full h-auto rounded-lg mb-2"
            />
            <h2 className="text-lg font-semibold">Fone Bluetooth X1000</h2>
            <p className="text-sm text-gray-600">Loja: Shopee</p>
            <p className="text-green-600 font-bold text-lg">R$ 89,90</p>
            <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
              Comprar com Desconto
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}