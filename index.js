import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>DescontosIA</title>
        <meta name="description" content="Busque produtos com desconto com ajuda da IA!" />
      </Head>

      <main className="text-center">
        <h1 className="text-4xl font-bold mb-4">DescontosIA</h1>
        <p className="mb-8">Digite o nome de um produto e veja os melhores preços de lojas como Amazon, Shopee e MercadoLivre.</p>
        <input
          type="text"
          placeholder="Ex: Fone Bluetooth"
          className="border px-4 py-2 rounded w-80"
        />
        <div className="mt-6">
          <p>🔎 Resultados aparecerão aqui...</p>
        </div>
      </main>
    </div>
  )
}