import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Especialidades',
      links: [
        {
          text: 'Terapia Individual',
          href: getPermalink('/terapia-individual'),
        },
        {
          text: 'Terapia de Casal',
          href: getPermalink('/terapia-de-casal'),
        },
        {
          text: 'Terapia Familiar',
          href: getPermalink('/terapia-familiar'),
        },
        {
          text: 'Terapia Infantil e Adolescente',
          href: getPermalink('/terapia-infantil-adolescente'),
        },
        {
          text: 'Psiquiatria',
          href: getPermalink('/psiquiatria'),
        },
        {
          text: 'Avaliações Psicológicas',
          href: getPermalink('/avaliacoes-psicologicas'),
        },
      ],
    },
    {
      text: 'Profissionais',
      href: getPermalink('/profissionais'),
    },
    {
      text: 'Sobre Nós',
      href: getPermalink('/sobre-nos'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Contato',
      href: getPermalink('/contato'),
    },
  ],
  actions: [
    { 
      text: 'Agendar Consulta', 
      href: 'https://wa.me/5511985946105?text=Olá! Gostaria de agendar uma consulta.', 
      target: '_blank',
      variant: 'primary',
      icon: 'tabler:brand-whatsapp'
    }
  ],
};

export const footerData = {
  links: [
    {
      title: 'Especialidades',
      links: [
        { text: 'Terapia Individual', href: getPermalink('/terapia-individual') },
        { text: 'Terapia de Casal', href: getPermalink('/terapia-de-casal') },
        { text: 'Terapia Familiar', href: getPermalink('/terapia-familiar') },
        { text: 'Terapia Infantil e Adolescente', href: getPermalink('/terapia-infantil-adolescente') },
        { text: 'Psiquiatria', href: getPermalink('/psiquiatria') },
        { text: 'Avaliações Psicológicas', href: getPermalink('/avaliacoes-psicologicas') },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { text: 'Sobre Nós', href: getPermalink('/sobre-nos') },
        { text: 'Profissionais', href: getPermalink('/profissionais') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Contato', href: getPermalink('/contato') },
      ],
    },
    {
      title: 'Contato',
      links: [
        { text: 'WhatsApp: (11) 98594-6105', href: 'https://wa.me/5511985946105', target: '_blank' },
        { text: 'contato@psicovilaolimpia.com.br', href: 'mailto:contato@psicovilaolimpia.com.br' },
        { text: 'Rua Helena, 285 - 10º andar', href: 'https://maps.google.com/?q=Rua+Helena+285+Vila+Olimpia+São+Paulo', target: '_blank' },
        { text: 'Vila Olímpia - São Paulo/SP', href: 'https://maps.google.com/?q=Rua+Helena+285+Vila+Olimpia+São+Paulo', target: '_blank' },
      ],
    },
    {
      title: 'Horários',
      links: [
        { text: 'Segunda a Sexta: 8h às 20h' },
        { text: 'Sábado: 8h às 12h' },
        { text: 'Domingo: Fechado' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Política de Privacidade', href: getPermalink('/politica-privacidade') },
    { text: 'Termos de Uso', href: getPermalink('/termos-uso') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/psicovilaolimpia/', target: '_blank' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/psicovilaolimpia/', target: '_blank' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://br.linkedin.com/company/psico-vila-ol%C3%ADmpia', target: '_blank' },
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/5511985946105?text=Olá! Gostaria de mais informações.', target: '_blank' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="${getAsset('/favicons/favicon-32x32.png')}" alt="Psico Vila Olimpia logo" loading="lazy"></img>
    Feito com ❤️ pela <a class="text-gray-300 underline hover:text-gray-100" href="https://psicovilaolimpia.com.br/"> Psico Vila Olimpia</a> · Todos os direitos reservados.
  `,
};