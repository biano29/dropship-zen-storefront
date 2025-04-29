
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Policies: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-4xl font-bold text-center mb-10">Políticas e Termos</h1>
      
      <Tabs defaultValue="delivery" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="delivery">Entrega</TabsTrigger>
          <TabsTrigger value="return">Devolução</TabsTrigger>
          <TabsTrigger value="terms">Termos de Uso</TabsTrigger>
          <TabsTrigger value="privacy">Privacidade</TabsTrigger>
        </TabsList>
        
        {/* Delivery Policy */}
        <TabsContent value="delivery" className="mt-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-4">Política de Entrega</h2>
            
            <div className="prose max-w-none text-shop-gray">
              <p>
                Na ZenDrop, nos esforçamos para garantir que você receba seus produtos no prazo e em perfeitas condições.
                Abaixo estão os detalhes da nossa política de entrega:
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-2">Prazos de Entrega</h3>
              <p>
                Os prazos de entrega podem variar de acordo com a sua localização. Após o processamento do pedido, 
                os prazos estimados são:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Capitais e regiões metropolitanas: 3 a 7 dias úteis</li>
                <li>Demais localidades: 7 a 15 dias úteis</li>
                <li>Regiões remotas: até 20 dias úteis</li>
              </ul>
              
              <h3 className="text-xl font-medium mt-6 mb-2">Rastreamento</h3>
              <p>
                Todos os pedidos são enviados com código de rastreamento, que será enviado para o seu e-mail
                assim que o produto for despachado. Você também pode acompanhar o status do seu pedido
                através da sua conta em nosso site.
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-2">Frete Grátis</h3>
              <p>
                Oferecemos frete grátis para compras acima de R$ 200,00 para todo o Brasil, com exceção 
                de algumas localidades remotas onde pode haver uma taxa adicional.
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-2">Entrega Internacional</h3>
              <p>
                Atualmente, realizamos entregas apenas para o Brasil. Estamos trabalhando para 
                expandir nossas operações para outros países em breve.
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-2">Problemas com a Entrega</h3>
              <p>
                Caso ocorra algum problema com a sua entrega, como atraso significativo, produto danificado
                ou entrega incorreta, entre em contato com nossa equipe de suporte em até 7 dias após o recebimento
                (ou a data prevista de recebimento, em caso de atraso).
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-2">Horário de Entrega</h3>
              <p>
                As entregas são realizadas de segunda a sexta-feira, das 8h às 18h. Em alguns casos,
                podem ocorrer entregas aos sábados, dependendo da transportadora e da região.
              </p>
            </div>
            
            {/* FAQ */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">Perguntas Frequentes sobre Entregas</h3>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Como saber se meu pedido já foi enviado?
                  </AccordionTrigger>
                  <AccordionContent>
                    Você receberá um e-mail com o código de rastreamento quando seu pedido for despachado.
                    Além disso, você pode verificar o status do seu pedido acessando "Meus Pedidos" em sua conta.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Posso alterar o endereço de entrega após a confirmação do pedido?
                  </AccordionTrigger>
                  <AccordionContent>
                    A alteração do endereço de entrega só é possível se o pedido ainda não tiver sido 
                    despachado. Caso o pedido já tenha sido enviado, não será possível alterar o endereço.
                    Entre em contato com nosso suporte o mais rápido possível para verificar essa possibilidade.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    O que acontece se eu não estiver em casa no momento da entrega?
                  </AccordionTrigger>
                  <AccordionContent>
                    Se você não estiver em casa, a transportadora tentará realizar a entrega por mais duas vezes.
                    Após a terceira tentativa sem sucesso, o pacote será devolvido para nosso centro de distribuição
                    e entraremos em contato para agendar uma nova entrega (podendo haver cobrança adicional de frete).
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    É possível agendar uma data específica para entrega?
                  </AccordionTrigger>
                  <AccordionContent>
                    Atualmente não oferecemos o serviço de agendamento de entrega para uma data específica.
                    O prazo informado no momento da compra é uma estimativa baseada na localidade de entrega.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </TabsContent>
        
        {/* Return Policy */}
        <TabsContent value="return" className="mt-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-4">Política de Devolução</h2>
            
            <div className="prose max-w-none text-shop-gray">
              <p>
                Queremos que você fique completamente satisfeito com sua compra. Se por algum motivo você
                não estiver satisfeito, nossa política de devolução foi projetada para ser simples e justa.
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-2">Prazo para Devolução</h3>
              <p>
                Você tem até 7 dias corridos, a partir da data de recebimento, para solicitar a devolução
                de qualquer produto comprado na ZenDrop, conforme o Código de Defesa do Consumidor.
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-2">Condições para Devolução</h3>
              <p>Para que o produto seja elegível para devolução, ele deve atender aos seguintes requisitos:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Estar na embalagem original</li>
                <li>Incluir todos os acessórios e manuais</li>
                <li>Não apresentar sinais de uso</li>
                <li>Estar acompanhado da nota fiscal de compra</li>
              </ul>
              
              <h3 className="text-xl font-medium mt-6 mb-2">Motivos para Devolução</h3>
              <p>Aceitamos devoluções pelos seguintes motivos:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Arrependimento da compra (dentro do prazo de 7 dias)</li>
                <li>Produto com defeito ou danificado</li>
                <li>Produto recebido diferente do solicitado</li>
                <li>Produto incompleto</li>
              </ul>
              
              <h3 className="text-xl font-medium mt-6 mb-2">Processo de Devolução</h3>
              <ol className="list-decimal pl-6 space-y-3 mt-2">
                <li>
                  <strong>Solicite a devolução:</strong> Entre em contato com nosso serviço de atendimento 
                  ao cliente através do formulário na página de Contato ou pelo e-mail devoluções@zendrop.com.
                </li>
                <li>
                  <strong>Avaliação:</strong> Nossa equipe analisará sua solicitação e, se aprovada, 
                  enviaremos as instruções para devolução do produto.
                </li>
                <li>
                  <strong>Envio do produto:</strong> Embale o produto adequadamente e envie para o endereço 
                  fornecido. O custo do frete de devolução será por nossa conta em caso de defeito ou envio incorreto, 
                  ou por conta do cliente em caso de arrependimento.
                </li>
                <li>
                  <strong>Análise do produto:</strong> Ao receber o produto, nossa equipe técnica realizará 
                  uma análise para verificar se as condições de devolução foram atendidas.
                </li>
                <li>
                  <strong>Reembolso ou troca:</strong> Se a devolução for aprovada, você poderá optar pelo 
                  reembolso do valor pago ou pela troca por outro produto.
                </li>
              </ol>
              
              <h3 className="text-xl font-medium mt-6 mb-2">Reembolsos</h3>
              <p>
                Os reembolsos serão realizados pela mesma forma de pagamento utilizada na compra:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>
                  <strong>Cartão de crédito:</strong> O estorno aparecerá em até 2 faturas subsequentes, 
                  dependendo da data de fechamento.
                </li>
                <li>
                  <strong>Boleto/PIX/Transferência:</strong> O valor será devolvido via transferência 
                  bancária em até 10 dias úteis.
                </li>
              </ul>
            </div>
            
            {/* FAQ */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">Perguntas Frequentes sobre Devoluções</h3>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Posso devolver apenas parte do meu pedido?
                  </AccordionTrigger>
                  <AccordionContent>
                    Sim, você pode devolver produtos específicos de um pedido, desde que cada item 
                    atenda às condições de devolução. O reembolso será proporcional aos itens devolvidos.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    O frete de devolução é gratuito?
                  </AccordionTrigger>
                  <AccordionContent>
                    O frete de devolução será gratuito apenas nos casos em que o motivo for defeito do produto, 
                    envio de produto errado ou produto danificado. Para devoluções por arrependimento, 
                    o custo do frete ficará por conta do cliente.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Quanto tempo leva para receber o reembolso?
                  </AccordionTrigger>
                  <AccordionContent>
                    Após a aprovação da devolução, o prazo para reembolso depende da forma de pagamento:
                    para cartões de crédito, pode levar até 2 faturas; para outras formas de pagamento,
                    até 10 dias úteis para crédito em conta bancária.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    E se eu receber um produto com defeito?
                  </AccordionTrigger>
                  <AccordionContent>
                    Se você receber um produto com defeito, entre em contato conosco imediatamente
                    com fotos e descrição do problema. Avaliaremos o caso e, se confirmado o defeito,
                    enviaremos um substituto ou realizaremos o reembolso integral, incluindo fretes.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </TabsContent>
        
        {/* Terms of Service */}
        <TabsContent value="terms" className="mt-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-4">Termos de Uso</h2>
            
            <div className="prose max-w-none text-shop-gray">
              <p>
                Bem-vindo aos Termos de Uso da ZenDrop. Por favor, leia com atenção estes termos antes
                de utilizar nossa plataforma. Ao acessar ou utilizar nosso site, você concorda em cumprir
                e estar sujeito a estes termos e condições.
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-2">1. Aceitação dos Termos</h3>
              <p>
                Ao acessar ou usar o site da ZenDrop, você concorda em ficar vinculado por estes Termos de Uso,
                todas as leis e regulamentos aplicáveis, e concorda que é responsável pelo cumprimento
                de todas as leis locais aplicáveis.
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-2">2. Conta de Usuário</h3>
              <p>
                Para acessar determinados recursos do nosso site, você pode precisar criar uma conta.
                Você é responsável por manter a confidencialidade da sua conta e senha
                e por restringir o acesso ao seu computador.
              </p>
              <p>
                Você concorda em aceitar a responsabilidade por todas as atividades que ocorrem em sua
                conta ou senha. A ZenDrop reserva-se o direito de recusar serviço, encerrar contas,
                remover ou editar conteúdo a seu critério exclusivo.
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-2">3. Propriedade Intelectual</h3>
              <p>
                Todo o conteúdo incluído ou disponível através do site da ZenDrop, incluindo texto,
                gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais, compilações
                de dados e software, é propriedade da ZenDrop ou de seus fornecedores de conteúdo e
                protegido pelas leis de direitos autorais brasileiras e internacionais.
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-2">4. Uso do Site</h3>
              <p>
                Você concorda em usar o site apenas para fins legais e de maneira que não infrinja os direitos de,
                restrinja ou iniba o uso e aproveitamento do site por qualquer terceiro.
              </p>
              <p>
                É proibido o uso do site de qualquer maneira que possa causar danos ao site
                ou prejudicar a disponibilidade ou acessibilidade do mesmo.
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-2">5. Limitação de Responsabilidade</h3>
              <p>
                A ZenDrop não será responsável por quaisquer danos diretos, indiretos, incidentais,
                consequentes ou punitivos resultantes do seu acesso ou uso do site, ou da sua incapacidade
                de acessar ou usar o site.
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-2">6. Alterações nos Termos</h3>
              <p>
                A ZenDrop pode revisar estes termos de serviço do site a qualquer momento sem aviso prévio.
                Ao usar este site, você concorda em ficar vinculado pela versão atual destes Termos de Uso.
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-2">7. Legislação Aplicável</h3>
              <p>
                Estes termos e condições são regidos e interpretados de acordo com as leis brasileiras,
                e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais brasileiros.
              </p>
            </div>
          </div>
        </TabsContent>
        
        {/* Privacy Policy */}
        <TabsContent value="privacy" className="mt-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-4">Política de Privacidade</h2>
            
            <div className="prose max-w-none text-shop-gray">
              <p>
                A ZenDrop valoriza a privacidade dos seus usuários e está comprometida em proteger suas
                informações pessoais. Esta Política de Privacidade descreve como coletamos, usamos e
                protegemos suas informações quando você utiliza nosso site.
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-2">1. Informações que Coletamos</h3>
              <p>
                Podemos coletar os seguintes tipos de informações pessoais:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Informações de identificação (nome, e-mail, telefone, endereço)</li>
                <li>Informações de pagamento (número de cartão de crédito, dados de faturamento)</li>
                <li>Informações demográficas (idade, gênero, localização)</li>
                <li>Informações de comportamento (histórico de navegação, produtos visualizados)</li>
              </ul>
              
              <h3 className="text-xl font-medium mt-6 mb-2">2. Como Usamos suas Informações</h3>
              <p>
                Utilizamos suas informações pessoais para os seguintes fins:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Processar e entregar seus pedidos</li>
                <li>Enviar confirmações de compra e atualizações de status do pedido</li>
                <li>Comunicar ofertas especiais, promoções e novos produtos (se você optar por recebê-los)</li>
                <li>Melhorar nosso site, produtos e serviços</li>
                <li>Responder às suas perguntas, comentários e solicitações</li>
              </ul>
              
              <h3 className="text-xl font-medium mt-6 mb-2">3. Compartilhamento de Informações</h3>
              <p>
                Não vendemos, alugamos ou comercializamos suas informações pessoais com terceiros.
                No entanto, podemos compartilhar suas informações nas seguintes circunstâncias:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Com prestadores de serviços que trabalham em nosso nome (processadores de pagamento, serviços de entrega)</li>
                <li>Para cumprir obrigações legais (ordens judiciais, intimações)</li>
                <li>Para proteger e defender nossos direitos e propriedade</li>
                <li>Com sua autorização explícita</li>
              </ul>
              
              <h3 className="text-xl font-medium mt-6 mb-2">4. Segurança dos Dados</h3>
              <p>
                Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra
                acesso não autorizado, alteração, divulgação ou destruição. Utilizamos criptografia SSL
                para proteger dados sensíveis transmitidos online.
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-2">5. Cookies e Tecnologias Similares</h3>
              <p>
                Utilizamos cookies e tecnologias similares para melhorar sua experiência em nosso site,
                analisar como os usuários navegam e personalizar conteúdo e anúncios.
                Você pode controlar ou excluir cookies através das configurações do seu navegador.
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-2">6. Seus Direitos</h3>
              <p>
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Acesso às suas informações pessoais</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados</li>
                <li>Eliminação dos dados pessoais</li>
                <li>Portabilidade dos dados</li>
                <li>Revogação do consentimento</li>
              </ul>
              
              <h3 className="text-xl font-medium mt-6 mb-2">7. Alterações na Política de Privacidade</h3>
              <p>
                Podemos atualizar esta política periodicamente. Recomendamos que você revise esta página
                regularmente para estar ciente de quaisquer alterações. Alterações significativas
                serão notificadas através de um aviso em destaque em nosso site.
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-2">8. Contato</h3>
              <p>
                Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou sobre nossas
                práticas de tratamento de dados, entre em contato conosco através do e-mail:
                privacidade@zendrop.com.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Policies;
