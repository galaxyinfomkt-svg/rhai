import Link from "next/link";
import { FileText, Users, DollarSign, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-slate-900">Construction Invoice System</h1>
          </div>
          <nav className="flex gap-4">
            <Link
              href="/auth/login"
              className="px-4 py-2 text-slate-600 hover:text-slate-900 transition"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Cadastrar
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            Gerencie suas faturas de construção
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Sistema completo para criar, gerenciar e acompanhar faturas de projetos de construção
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Link
              href="/auth/register"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Começar Agora
            </Link>
            <Link
              href="#features"
              className="px-8 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-white transition font-semibold"
            >
              Saiba Mais
            </Link>
          </div>
        </div>

        {/* Features */}
        <div id="features" className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Criação de Faturas
            </h3>
            <p className="text-slate-600">
              Crie faturas profissionais com facilidade e rapidez
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Gestão de Clientes
            </h3>
            <p className="text-slate-600">
              Mantenha todos os dados dos seus clientes organizados
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <DollarSign className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Controle Financeiro
            </h3>
            <p className="text-slate-600">
              Acompanhe pagamentos e status das suas faturas
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Relatórios
            </h3>
            <p className="text-slate-600">
              Visualize estatísticas e gere relatórios detalhados
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-slate-600">
          <p>&copy; 2024 Construction Invoice System. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
