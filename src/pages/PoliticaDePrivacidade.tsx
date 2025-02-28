import { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import Footer from "../components/Footer";
import Header from "../components/Header";

const PoliticaDePrivacidade = () => {
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
          <h1 className="text-3xl font-bold mb-8 text-gray-900">{translations.privacy_title}</h1>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
            <div className="prose max-w-none">
              <h2 className="text-xl font-bold my-4">{translations.privacy_general_info}</h2>
              
              <p className="mb-4">A presente Política de Privacidade contém informações sobre coleta, uso, armazenamento, tratamento e proteção dos dados pessoais dos usuários e visitantes do App Monitorie Suas Obras ou site https://monitoriesuasobras.com.br, com a finalidade de demonstrar absoluta transparência quanto ao assunto e esclarecer a todos interessados sobre os tipos de dados que são coletados, os motivos da coleta e a forma como os usuários podem gerenciar ou excluir as suas informações pessoais.</p>
              
              <p className="mb-4">Esta Política de Privacidade aplica-se a todos os usuários e visitantes do App Monitorie Suas Obras ou site https://monitoriesuasobras.com.br e integra os Termos e Condições Gerais de Uso da empresa Update Digital Tecnologia da Informação LTDA, devidamente inscrita no CNPJ sob o nº 21.600.669/0001-94, com sede na cidade Santa Luzia, no endereço sito à Rua Teófilo Otoni, nº 106, 33025-270, doravante nominada Update Digital.</p>
              
              <p className="mb-4">O presente documento foi elaborado em conformidade com a Lei Federal n. 12.965 de 23 de abril de 2014 (Marco Civil da Internet) e com a Lei Federal n. 13.709, de 14 de agosto de 2018 (Lei de Proteção de Dados Pessoais).</p>
              
              <p className="mb-4">Esta Política de Privacidade poderá ser atualizada em decorrência de eventual atualização normativa, razão pela qual se convida o usuário a consultar periodicamente esta seção.</p>
              
              <p className="mb-4">A nossa Política de Privacidade abaixo esclarece como a Update Digital coleta e trata seus dados individuais:</p>
              
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Qualquer informação fornecida pelos usuários será coletada e guardada de acordo com os mais rígidos padrões de segurança e confiabilidade;</li>
                <li>Todas as informações coletadas dos usuários trafegam de forma segura, utilizando processo de criptografia padrão da Internet;</li>
                <li>As informações pessoais que nos forem fornecidas pelos usuários serão coletadas por meios éticos e legais;</li>
                <li>As informações pessoais requeridas no processo de solicitação do cadastro são previstas em lei e/ou regulamentação específica. Outros dados poderão ser solicitados para identificação do usuário, para acesso ao aplicativo ou a conteúdo e/ou serviços restritos, ou ainda para melhorar os serviços prestados e a experiência dos usuários;</li>
                <li>Será solicitada autorização prévia para a coleta automática de dados dos usuários, informando também sobre os usos desses dados, ficando a seu critério fornecê-la ou não;</li>
                <li>A menos que haja uma determinação legal ou judicial, as informações dos usuários jamais serão transferidas a terceiros ou usadas para finalidades diferentes daquelas para as quais foram coletadas;</li>
                <li>O acesso às informações coletadas está restrito a funcionários autorizados para o uso adequado desses dados;</li>
                <li>Os funcionários que se utilizarem indevidamente dessas informações, ferindo nossa Política de Privacidade e demais políticas internas, estarão sujeitos às penalidades previstas em nosso processo disciplinar e em lei;</li>
                <li>Manteremos a integridade das informações que nos forem fornecidas;</li>
                <li>Nossos sites contêm links para outros sites externos cujos conteúdos e políticas de privacidade não são de responsabilidade da Update Digital;</li>
                <li>A Update Digital poderá utilizar, formatar e divulgar depoimentos de usuários postados nas redes sociais, juntamente com seu nome e imagens (incluindo fotos de perfil), na página do App Monitorie Suas Obras, aplicativo e/ou materiais institucionais e publicitários para a divulgação dos serviços prestados pela empresa com base na opinião de seus usuários;</li>
                <li>Eventualmente, poderemos utilizar cookies (*) para confirmar sua identidade, personalizar seu acesso e acompanhar a utilização de nosso website visando o aprimoramento de sua navegação e funcionalidade;</li>
                <li>A Update Digital coloca à disposição de seus usuários, canais de atendimento ao cliente (telefone: (31) 3642-7595, e-mail: suporte@monitoriesuasobras.com.br e chat online: https://monitoriesuasobras.com.br) para esclarecer qualquer dúvida.</li>
              </ul>
              
              <p className="mb-4">O App Monitorie Suas Obras se compromete a cumprir as normas previstas na Lei Geral de Proteção de Dados (LGPD), e respeitar os princípios dispostos no Art. 6º:</p>
              
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>finalidade:</strong> realização do tratamento para propósitos legítimos, específicos, explícitos e informados ao titular, sem possibilidade de tratamento posterior de forma incompatível com essas finalidades;</li>
                <li><strong>adequação:</strong> compatibilidade do tratamento com as finalidades informadas ao titular, de acordo com o contexto do tratamento;</li>
                <li><strong>necessidade:</strong> limitação do tratamento ao mínimo necessário para a realização de suas finalidades, com abrangência dos dados pertinentes, proporcionais e não excessivos em relação às finalidades do tratamento de dados;</li>
                <li><strong>livre acesso:</strong> garantia, aos titulares, de consulta facilitada e gratuita sobre a forma e a duração do tratamento, bem como sobre a integralidade de seus dados pessoais;</li>
                <li><strong>qualidade dos dados:</strong> garantia, aos titulares, de exatidão, clareza, relevância e atualização dos dados, de acordo com a necessidade e para o cumprimento da finalidade de seu tratamento;</li>
                <li><strong>transparência:</strong> garantia, aos titulares, de informações claras, precisas e facilmente acessíveis sobre a realização do tratamento e os respectivos agentes de tratamento, observados os segredos comercial e industrial;</li>
                <li><strong>segurança:</strong> utilização de medidas técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou difusão;</li>
                <li><strong>prevenção:</strong> adoção de medidas para prevenir a ocorrência de danos em virtude do tratamento de dados pessoais;</li>
                <li><strong>não discriminação:</strong> impossibilidade de realização do tratamento para fins discriminatórios ilícitos ou abusivos;</li>
                <li><strong>responsabilização e prestação de contas:</strong> demonstração, pelo agente, da adoção de medidas eficazes e capazes de comprovar a observância e o cumprimento das normas de proteção de dados pessoais e, inclusive, da eficácia dessas medidas.</li>
              </ul>
              
              <h2 className="text-xl font-bold my-4">{translations.privacy_treatment_agents}</h2>
              
              <p className="mb-4">A quem compete as decisões referentes ao tratamento de dados pessoais realizado no âmbito do App Monitorie Suas Obras:</p>
              
              <p className="mb-4"><strong>{translations.privacy_controller}</strong></p>
              <p className="mb-4">Update Digital Tecnologia da Informação LTDA, pessoa jurídica de direito privado, inscrita no CNPJ sob nº 21.600.669/0001-94, com sede na cidade Santa Luzia, no endereço sito à Rua Teófilo Otoni, nº 106, 33025-270.</p>
              
              <p className="mb-4"><strong>{translations.privacy_dpo}</strong></p>
              <p className="mb-4">Departamento de Proteção de Dados da Update Digital, que pode ser contatado pelo e-mail: dpo@monitoriesuasobras.com.br.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaDePrivacidade;