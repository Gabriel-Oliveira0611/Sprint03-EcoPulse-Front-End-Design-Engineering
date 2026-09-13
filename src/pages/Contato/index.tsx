import TituloPagina from "../../components/TituloPagina";

export default function Contato() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
      <TituloPagina
        etiqueta="ESPAÇO PARA CONVERSAR"
        titulo="Fale com a gente"
        descricao="Dúvidas, sugestões ou ideias para o projeto? Veja como foi pensada a experiência de contato do EcoPulse."
      />
      <div className="grid items-start gap-8 lg:grid-cols-2">
        <section className="rounded-2xl bg-teal-950 p-7 text-white md:p-9">
          <h2 className="text-2xl font-semibold">
            Uma boa ideia começa com diálogo.
          </h2>
          <p className="mb-8 mt-4 leading-relaxed text-teal-100">
            O formulário ao lado é uma demonstração acadêmica. Preencha os
            campos para testar a validação básica, sem enviar informações a
            nenhum serviço.
          </p>
          <dl className="space-y-6 border-t border-teal-800 pt-7 text-sm">
            <div>
              <dt className="mb-2 text-teal-200">
                E-mail ilustrativo do projeto original
              </dt>
              <dd className="font-medium">suporte@ecopulse.com</dd>
            </div>
            <div>
              <dt className="mb-2 text-teal-200">Localização do projeto</dt>
              <dd className="font-medium">FIAP · São Paulo, Brasil</dd>
            </div>
            <div>
              <dt className="mb-2 text-teal-200">
                Horário de atendimento proposto
              </dt>
              <dd className="font-medium">Segunda a sexta, das 9h às 18h</dd>
            </div>
          </dl>
          <p className="mt-8 text-xs leading-relaxed text-teal-200">
            Os dados acima fazem parte da simulação. Não representam um canal de
            suporte ativo.
          </p>
        </section>

        <section
          className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8"
          aria-labelledby="titulo-formulario"
        >
          <h2
            id="titulo-formulario"
            className="mb-2 text-xl font-bold text-teal-950"
          >
            Teste o formulário
          </h2>
          <p
            id="aviso-formulario"
            className="mb-7 text-sm leading-relaxed text-slate-500"
          >
            Todos os campos são obrigatórios. Use dados fictícios; nada será
            enviado ou armazenado.
          </p>
          {/* Validação HTML nativa: NÃO substitui o React Hook Form exigido no PDF. */}
          <form
            aria-describedby="aviso-formulario"
            className="space-y-5"
            onSubmit={(event) => {
              event.preventDefault();
              window.alert(
                "Demonstração concluída! Os campos passaram pela validação básica do navegador. Nenhuma mensagem foi enviada e nenhum dado foi armazenado.",
              );
            }}
          >
            <div>
              <label
                htmlFor="nome"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Nome completo
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                autoComplete="name"
                required
                minLength={3}
                maxLength={100}
                placeholder="Ex.: Alex Silva"
                className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-base focus:border-teal-700 focus:outline-2 focus:outline-teal-700"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={150}
                placeholder="Ex.: alex@example.com"
                className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-base focus:border-teal-700 focus:outline-2 focus:outline-teal-700"
              />
            </div>
            <div>
              <label
                htmlFor="telefone"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Telefone
              </label>
              <input
                id="telefone"
                name="telefone"
                type="tel"
                autoComplete="tel"
                inputMode="numeric"
                required
                pattern="[0-9]{10,11}"
                maxLength={11}
                title="Digite o DDD e o telefone, com 10 ou 11 números, sem espaços."
                aria-describedby="ajuda-telefone"
                placeholder="Ex.: 11999999999"
                className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-base focus:border-teal-700 focus:outline-2 focus:outline-teal-700"
              />
              <p id="ajuda-telefone" className="mt-2 text-xs text-slate-500">
                DDD + telefone: 10 ou 11 números, sem espaços.
              </p>
            </div>
            <div>
              <label
                htmlFor="mensagem"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                required
                minLength={10}
                maxLength={2000}
                rows={5}
                placeholder="Escreva uma mensagem fictícia para testar..."
                className="w-full resize-y rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-base focus:border-teal-700 focus:outline-2 focus:outline-teal-700"
              />
            </div>
            <button
              type="submit"
              className="w-full cursor-pointer rounded-xl bg-teal-800 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
            >
              Testar preenchimento
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
