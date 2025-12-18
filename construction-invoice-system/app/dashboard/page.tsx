import Link from "next/link";
import { FileText, Users, DollarSign, Clock, Plus } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-8 w-8 text-blue-600" />
            <h1 className="text-xl font-bold text-slate-900">Construction Invoice System</h1>
          </div>
          <nav className="flex gap-4">
            <Link
              href="/dashboard"
              className="px-4 py-2 text-blue-600 font-semibold"
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/invoices"
              className="px-4 py-2 text-slate-600 hover:text-slate-900"
            >
              Faturas
            </Link>
            <Link
              href="/dashboard/customers"
              className="px-4 py-2 text-slate-600 hover:text-slate-900"
            >
              Clientes
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-sm text-slate-600">Este mês</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900">0</h3>
            <p className="text-slate-600">Total de Faturas</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <span className="text-sm text-slate-600">Este mês</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900">R$ 0,00</h3>
            <p className="text-slate-600">Receita Total</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <span className="text-sm text-slate-600">Pendentes</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900">0</h3>
            <p className="text-slate-600">Faturas Pendentes</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <span className="text-sm text-slate-600">Total</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900">0</h3>
            <p className="text-slate-600">Clientes</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Ações Rápidas</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/dashboard/invoices/new"
              className="flex items-center gap-3 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition"
            >
              <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Plus className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Nova Fatura</h3>
                <p className="text-sm text-slate-600">Criar uma nova fatura</p>
              </div>
            </Link>

            <Link
              href="/dashboard/customers/new"
              className="flex items-center gap-3 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition"
            >
              <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Plus className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Novo Cliente</h3>
                <p className="text-sm text-slate-600">Adicionar um cliente</p>
              </div>
            </Link>

            <Link
              href="/dashboard/invoices"
              className="flex items-center gap-3 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition"
            >
              <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <FileText className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Ver Faturas</h3>
                <p className="text-sm text-slate-600">Gerenciar suas faturas</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Recent Invoices */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Faturas Recentes</h2>
          <div className="text-center py-12 text-slate-500">
            <FileText className="h-12 w-12 mx-auto mb-4 text-slate-300" />
            <p>Nenhuma fatura criada ainda</p>
            <Link
              href="/dashboard/invoices/new"
              className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-semibold"
            >
              Criar sua primeira fatura
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
