
import { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import Footer from "../components/Footer";
import Header from "../components/Header";

const TermosDeUso = () => {
  const { language, translations } = useLanguage();
  
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold mb-8 text-gray-900">{translations.terms_title}</h1>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
            <div className="prose max-w-none">
              <p className="mb-4">{translations.terms_intro}</p>
              <h2 className="text-xl font-bold my-4">{translations.terms_eula_title}</h2>
              
              <p className="mb-4">{translations.terms_acceptance}</p>
              <p className="mb-4">{translations.terms_service_description}</p>
              
              <p className="mb-4">{translations.terms_eula_agreement}</p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">{translations.terms_declaration_title}</h3>
              <p className="mb-4">{translations.terms_declaration_desc}</p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">{translations.terms_license_title}</h3>
              <p className="mb-4">{translations.terms_license_desc_1}</p>
              
              <p className="mb-4">{translations.terms_license_desc_2}</p>
              
              <p className="mb-4">{translations.terms_license_desc_3}</p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">{translations.terms_duration_title}</h3>
              <p className="mb-4">{translations.terms_duration_1}</p>
              
              <p className="mb-4">{translations.terms_duration_2}</p>
              
              <p className="mb-4">{translations.terms_duration_3}</p>
              
              <p className="mb-4">{translations.terms_duration_4}</p>
              
              <p className="mb-4">{translations.terms_duration_5}</p>
              
              <p className="mb-4">{translations.terms_duration_6}</p>
              
              <p className="mb-4">{translations.terms_duration_7}</p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">{translations.terms_payment_title}</h3>
              <p className="mb-4">{translations.terms_payment_1}</p>
              
              <p className="mb-4">{translations.terms_payment_2}</p>
              
              <p className="mb-4">{translations.terms_payment_3}</p>
              
              <p className="mb-4">{translations.terms_payment_4}</p>
              
              <p className="mb-4">{translations.terms_payment_5}</p>
              
              <p className="mb-4">{translations.terms_payment_6}</p>
              
              <p className="mb-4">{translations.terms_payment_7}</p>
              
              <p className="mb-4">{translations.terms_payment_8}</p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">{translations.terms_user_obligations_title}</h3>
              <p className="mb-4">{translations.terms_user_obligations_intro}</p>
              <p className="mb-4">{translations.terms_user_obligations_1}</p>
              
              <p className="mb-4">{translations.terms_user_obligations_2}</p>
              
              <p className="mb-4">{translations.terms_user_obligations_3}</p>
              
              <p className="mb-4">{translations.terms_user_obligations_4}</p>
              
              <p className="mb-4">{translations.terms_user_obligations_5}</p>
              
              <p className="mb-4">5.6. Manter equipe capacitada para a operação do SOFTWARE e para a comunicação com a LICENCIANTE e prover, sempre que ocorrerem quaisquer problemas com o SOFTWARE, toda a documentação e informações que relatem as circunstâncias em que os problemas ocorreram, objetivando facilitar e agilizar os trabalhos, assim como quaisquer detalhes solicitados pela LICENCIANTE;</p>
              
              <p className="mb-4">5.7. Relatar de forma clara a ocorrência qualquer problema de natureza técnica e, caso necessário, prover relatórios, acesso ao SOFTWARE e informações necessárias para o LICENCIANTE oferecer suporte técnico;</p>
              
              <p className="mb-4">5.8. Responder por toda e qualquer informação ou conteúdos inseridos no SOFTWARE, pelo cadastramento, permissões, senhas e modo de uso de seus clientes. A LICENCIANTE em hipótese alguma será responsável pelo conteúdo (informações, senhas, cópias de informações, etc) sobre o SOFTWARE, não sendo, portanto, estas informações revisadas em momento algum. A responsabilidade pelas informações do SOFTWARE é sempre do USUÁRIO;</p>
              
              <p className="mb-4">5.9. Realizar manutenção preventiva e corretiva de seus equipamentos, promovendo a instalação e atualização periódica de softwares de segurança que identifiquem, combatam e inviabilizam a atuação de vírus nas operações eletrônicas realizadas, respondendo o USUÁRIO, na forma da lei, por eventuais danos que venha a causar a seus Clientes e a quaisquer terceiros, bem como à LICENCIANTE;</p>
              
              <p className="mb-4">5.10. Não publicar, por intermédio do SOFTWARE, material racista, pornográfico, ofensivo, protegido por direitos autorais, calunioso ou difamatório.</p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">6. DAS OBRIGAÇÕES DA LICENCIANTE</h3>
              <p className="mb-4">Obriga-se a LICENCIADORA a:</p>
              <p className="mb-4">6.1. Manter o SOFTWARE funcionando regularmente, desde que o USUÁRIO siga as orientações da LICENCIANTE e respeite as condições de uso definidas neste instrumento;</p>
              
              <p className="mb-4">6.2. Esforçar-se para corrigir prontamente possíveis falhas do SOFTWARE;</p>
              
              <p className="mb-4">6.3. Aplicar melhorias contínuas ao SOFTWARE, alterando quando necessário, especificações e orientações anteriores;</p>
              
              <p className="mb-4">6.4. Suspender o acesso ao SOFTWARE caso haja violação ou desrespeito às regras deste EULA ou legislação vigente, independente de aviso prévio;</p>
              
              <p className="mb-4">6.5. Dar suporte a utilização do SOFTWARE em horário comercial via correio eletrônico no endereço suporte@monitoriesuasobras.net ou pelo telefone (00)0000-0000. Para contato por telefone, atende em horário comercial (das 09:00h às 12:00h, 13:00h às 17:00h) no fuso horário de Brasília, de acordo com a ordem e disponibilidade dos atendentes.</p>
              
              <p className="mb-4">6.6. Manter sigilo absoluto sobre toda e qualquer informação, que de qualquer forma ou em qualquer época lhe for confiada pelo USUÁRIO.</p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">7. NÍVEL DE SERVIÇO (SLA)</h3>
              <p className="mb-4">7.1. A LICENCIANTE empreenderá esforços comercialmente razoáveis para tornar o SOFTWARE disponível, no mínimo, 90% (noventa por cento) durante cada ANO DE SERVIÇO;</p>
              
              <p className="mb-4">7.2. Na hipótese da LICENCIANTE não cumprir o mínimo de 90% de disponibilidade, o USUÁRIO terá direito a um crédito correspondente a 1 (uma) mensalidade;</p>
              
              <p className="mb-4">7.3. O ANO DE SERVIÇO compreende os 365 dias precedentes à data de uma reivindicação de indisponibilidade;</p>
              
              <p className="mb-4">7.4. Se o período de utilização do SOFTWARE pelo USUÁRIO for inferior a 365 dias, os dias de não utilização serão considerados como tendo 100% de disponibilidade;</p>
              
              <p className="mb-4">7.5. Após o pagamento do crédito referente à reivindicação de indisponibilidade, o período será considerado 100% disponível para efeito de futuras reivindicações;</p>
              
              <p className="mb-4">7.6. Não serão consideradas indisponibilidades para este SLA:</p>
              <ul className="list-disc pl-8 mb-4">
                <li>manutenções emergenciais entre as 23:00h e 7:00h que não ultrapassem 5 (cinco) horas;</li>
                <li>eventos de força maior;</li>
                <li>problemas correlacionados a conectividade da Internet como um todo;</li>
                <li>quaisquer atos ou omissões do USUÁRIO, de seus Clientes ou de terceiros que provoquem a indisponibilidade;</li>
                <li>equipamentos, softwares e outras tecnologias que por sua falha impeçam o acesso do USUÁRIO ao SOFTWARE e que não estejam na esfera de responsabilidade da LICENCIANTE;</li>
                <li>falhas de instâncias individuais não relacionadas com indisponibilidade do serviço, mas sim com a instância do USUÁRIO.</li>
              </ul>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">8. DAS GARANTIAS LIMITADAS</h3>
              <p className="mb-4">8.1. O estágio tecnológico não permite garantir que o SOFTWARE contratado, desenvolvido sobre plataformas de diversos fornecedores, não apresente erros, incorreções, vícios e defeitos, ou que a operação será ininterrupta, assim sendo a LICENCIANTE também não os garante;</p>
              
              <p className="mb-4">8.2. Por ter sido, o SOFTWARE, desenvolvido para atender as mais diversas demandas dos mais diversos usuários, a LICENCIANTE não garante que o mesmo atenda a uma necessidade específica;</p>
              
              <p className="mb-4">8.3. A LICENCIANTE não garante que o SOFTWARE seja compatível com qualquer outro;</p>
              
              <p className="mb-4">8.4. O USUÁRIO reconhece que o SOFTWARE não deve ser utilizado em ambientes nos quais a falha, a indisponibilidade, ou atraso, ou erro ou a inexatidão de conteúdo possam ocasionar morte, danos pessoais, físicos ou ambientais.</p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">9. DAS RESPONSABILIDADES</h3>
              <p className="mb-4">9.1. Sob nenhuma circunstância a responsabilidade integral da LICENCIANTE em relação ao USUÁRIO por todos os danos excederá a quantia paga pelo USUÁRIO à LICENCIANTE para a obtenção da presente licença;</p>
              
              <p className="mb-4">9.2. A LICENCIANTE isenta-se expressamente de qualquer responsabilidade e indenizações, perdas e danos, lucros cessantes, prejuízos de qualquer natureza ou sob quaisquer outros danos diretos, porventura causados ao USUÁRIO ou seus Clientes, decorrentes da má utilização do SOFTWARE, tanto pelo USUÁRIO como por seus Clientes.</p>
              
              <p className="mb-4">9.3. A LICENCIANTE não será responsabilizada por atos de omissão, ou ainda pelas providências não tomadas tempestivamente por instituições e/ou demais empresas que detenham a responsabilidade de executá-las;</p>
              
              <p className="mb-4">9.4. A LICENCIANTE não será responsabilizada por falhas de funcionamento ou inoperância dos equipamentos em virtude de conflitos entre os SOFTWARE de outras procedências e o SOFTWARE contratado e instalado no mesmo equipamento;</p>
              
              <p className="mb-4">9.5. A LICENCIANTE não será responsabilizada por falha de operação, operação por pessoas não autorizadas ou qualquer outra causa em que não exista culpa da LICENCIANTE;</p>
              
              <p className="mb-4">9.6. O USUÁRIO reconhece, também, que em nenhuma hipótese os indicadores fornecidos pelo SOFTWARE serão ou poderão ser a causa única de erros de ordem administrativa, assim jamais poderá imputar a LICENCIANTE essa responsabilidade;</p>
              
              <p className="mb-4">9.7. A utilização, inadequada ou não, do SOFTWARE jamais será a causa de prejuízos de toda e qualquer ordem, aí incluídos: perda de lucro, cessante ou não, esporádico ou não, perda de negócios, ou qualquer outra perda, inclusive os de ordem técnica tais como: dados corrompidos ou deletados, arquivos não transmitidos ou não recebidos, enfim de toda e qualquer ordem.</p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">10. DA PROPRIEDADE INTELECTUAL</h3>
              <p className="mb-4">10.1. O USUÁRIO e seus Clientes não adquirem, pelo presente instrumento, nenhum direito de propriedade intelectual ou direito sobre o SOFTWARE e seus componentes, assim não terá, em nenhuma hipótese, acesso ao seu código fonte e banco de dados;</p>
              
              <p className="mb-4">10.2. O SOFTWARE, o logotipo, a marca, as insígnias, os símbolos, os manuais, a documentação técnica ou qualquer outro material correlato ao SOFTWARE, constituem direitos autorais, segredos comerciais de propriedades da LICENCIANTE;</p>
              
              <p className="mb-4">10.3. É terminantemente proibido ao USUÁRIO e seus Clientes ceder, doar, alugar, vender, arrendar, emprestar, reproduzir, modificar, adaptar, traduzir o código fonte, disponibilizar o acesso a terceiros via online, acesso remoto ou de outra forma qualquer, incorporar a outros programas ou sistemas, próprios ou de terceiros, oferecer em garantia ou penhor, alienar ou transferir, total ou parcialmente o SOFTWARE ou parte dele. O USUÁRIO se responsabiliza integralmente por qualquer infração à propriedade intelectual da LICENCIANTE causada por seus Clientes e/ou terceiros que se vinculem ao USUÁRIO;</p>
              
              <p className="mb-4">10.4. Quaisquer direitos não expressamente concedidos sob o presente instrumento são reservados inteiramente à LICENCIANTE.</p>
              
              <p className="mb-4">10.5. Quaisquer violações à propriedade intelectual da LICENCIANTE sujeitará o USUÁRIO à imediata suspensão da utilização do SOFTWARE e à rescisão deste EULA, sem quaisquer restituições contratuais por parte da LICENCIANTE e sem prejuízo do ressarcimento das eventuais perdas e danos causados à LICENCIANTE.</p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">11. DAS DISPOSIÇÕES GERAIS</h3>
              <p className="mb-4">11.1. Este EULA tem por objetivo regular as ações de ambas as partes, todavia qualquer uma delas poderá tolerar algum descumprimento de algum item, sem que isso implique em novação ou renúncia de direito. A parte tolerante poderá, a qualquer tempo, exigir da outra parte o fiel e cabal cumprimento deste EULA;</p>
              
              <p className="mb-4">11.2. As alterações que, a critério da LICENCIANTE, sejam realizadas neste EULA serão consideradas aplicáveis a partir da data de veiculação da nova versão, sendo, portanto, responsabilidade do USUÁRIO manter-se atualizado. O uso contínuo do SOFTWARE após a realização de qualquer mudança neste EULA implicará na aceitação tácita das alterações por parte do USUÁRIO;</p>
              
              <p className="mb-4">11.3. Não constituem causa de rescisão contratual, o não cumprimento das obrigações aqui assumidas em decorrência de fatos que independam da vontade das partes, tais como os que configuram o caso fortuito e a força maior previstos no artigo 393 do Código Civil Brasileiro;</p>
              
              <p className="mb-4">11.4. A LICENCIANTE, na execução do presente EULA, sem prejuízo de suas responsabilidades contratuais e legais poderá utilizar, se necessário, o apoio técnico especializado de terceiros, pessoas físicas ou jurídicas independentemente de prévia notificação ao USUÁRIO, desde que não haja custos posteriores ao USUÁRIO;</p>
              
              <p className="mb-4">11.5. Caso o USUÁRIO venha a desenvolver um novo módulo ou produto que caracterize cópia, de todo ou em parte, quer seja do dicionário de dados, quer seja do programa, será considerado como parte do software fornecido pela LICENCIANTE, ficando, portanto, sua propriedade incorporada pela LICENCIANTE e seu uso condicionado a estas cláusulas contratuais;</p>
              
              <p className="mb-4">11.6. Este EULA obriga as partes e seus sucessores e somente o USUÁRIO possui licença não exclusiva para a utilização do SOFTWARE, sendo-lhe, entretanto, vedado transferir os direitos e obrigações impostos por este instrumento. Tal limitação, no entanto, não atinge a LICENCIANTE, que poderá, a qualquer tempo, ceder, no todo ou em parte, os direitos e obrigações inerentes ao presente EULA;</p>
              
              <p className="mb-4">11.7. Se qualquer disposição deste EULA for considerada nula, anulável, inválida ou inoperante, nenhuma outra disposição deste EULA será afetada como consequência disso e, portanto, as disposições restantes deste EULA permanecerão em pleno vigor e efeito como se tal disposição nula, anulável, inválida ou inoperante não estivesse contida neste EULA;</p>
              
              <p className="mb-4">11.8. O USUÁRIO concorda que a LICENCIANTE possa utilizar a marca e o nome do USUÁRIO para fins comerciais, podendo, inclusive, divulgar mensagens enviadas de forma escrita ou oral, por telefone, para uso em sites, jornais, revistas e outras campanhas, enquanto vigorar o presente EULA;</p>
              
              <p className="mb-4">11.9. A LICENCIANTE reserva-se o direito de comunicar as atividades de treinamento, as campanhas publicitárias, e todos os demais eventos, por ela patrocinados, via correio eletrônico, com o que concorda o USUÁRIO;</p>
              
              <p className="mb-4">11.10. A LICENCIANTE visando desenvolver melhorias ao SOFTWARE poderá, com o fim específico de estudar, analisar dados, elaborar estatística e, sempre sem identificação pessoal ou comercial, utilizar as informações do SOFTWARE, com o quer concorda e autoriza o USUÁRIO;</p>
              
              <p className="mb-4">11.11. A LICENCIANTE reserva-se o direito de ceder licenças de uso do SOFTWARE a tantos USUÁRIOS quantos entender conveniente.</p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">12. ALTERAÇÕES PARA ESSE CONTRATO</h3>
              <p className="mb-4">12.1. A presente versão desta EULA foi atualizada pela última vez em: 07/12/2023.</p>
              
              <p className="mb-4">12.2. O editor se reserva o direito de modificar, a qualquer momento, o site as presentes normas, especialmente para adaptá-las às evoluções do serviço App Monitorie Suas Obras, seja pela disponibilização de novas funcionalidades, seja pela supressão ou modificação daquelas já existentes.</p>
              
              <p className="mb-4">12.3. Qualquer alteração e/ou atualização destes Termos de Uso e Política de Privacidade passará a vigorar a partir da data de sua publicação no sítio do serviço e deverá ser integralmente observada pelos Usuários.</p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">13. JURISDIÇÃO PARA RESOLUÇÃO DE CONFLITOS</h3>
              <p className="mb-4">13.1. Essa EULA será regida e interpretada de acordo com as leis da República Federativa do Brasil.</p>
              
              <p className="mb-4">13.2. Fica eleito o foro da da Comarca de Santa Luzia em Minas Gerais, para dirimir qualquer dúvida na aplicação destes Termos de Uso e Política de Privacidade, com expressa renúncia de qualquer outro que venha a existir.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermosDeUso;
