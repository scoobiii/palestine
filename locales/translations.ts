export interface TranslationSet {
    headerTitle: string;
    unitySymbolTooltip: string;
    openMenu: string;
    navMore: string;

    heroTitle: string;
    heroSubtitle: string;
    heroAlt: string;

    conceptTitle: string;
    projectDescription: string;

    integratedInfrastructureTitle: string;

    featureEnergyTitle: string;
    featureEnergyTitleShort: string;
    featureEnergyDesc: string;
    featureEnergyPrompt: string;
    
    featureWaterTitle: string;
    featureWaterTitleShort: string;
    featureWaterDesc: string;
    featureWaterPrompt: string;

    featureCommunicationsTitle: string;
    featureCommunicationsTitleShort: string;
    featureCommunicationsDesc: string;
    featureCommunicationsPrompt: string;

    featureHealthTitle: string;
    featureHealthTitleShort: string;
    featureHealthDesc: string;
    featureHealthPrompt: string;

    featureEducationTitle: string;
    featureEducationTitleShort: string;
    featureEducationDesc: string;
    featureEducationPrompt: string;

    featureEconomyTitle: string;
    featureEconomyTitleShort: string;
    featureEconomyDesc: string;
    featureEconomyPrompt: string;

    modalTitle: string;
    modalAITitle: string;
    modalClose: string;
    
    errorTitle: string;
    errorFallback: string;

    analyticsTitle: string;
    analyticsSelectorLabel: string;
    analyticsSelectorOption: string;
    chartPopulationTitle: string;
    chartEnergyTitle: string;
    chartWaterTitle: string;
    yAxisPopulation: string;
    legendEnergyGeneration: string;
    legendEnergyConsumption: string;
    waterResidential: string;
    waterFarming: string;
    waterCommercial: string;

    imageGenerationTitle: string;
    imageGenerationLoading: string;
    imageGenerationPlaceholder: string;
    imageGenerationPromptBase: string;

    footerConcept: string;
    footerRights: string;
}

export const translations: { [key: string]: TranslationSet } = {
  pt: {
    headerTitle: "GAZA: Renascimento Digital",
    unitySymbolTooltip: "Símbolo de unidade: Palestina e o Mundo",
    openMenu: "Abrir menu principal",
    navMore: "Mais...",
    heroTitle: "Reconstruindo Gaza, Um Bloco de Cada Vez",
    heroSubtitle: "Explorando um plano conceitual para a revitalização da infraestrutura de Gaza através da tecnologia e inovação.",
    heroAlt: "Visão conceitual de uma cidade vertical futurista com arquitetura sustentável e espaços verdes exuberantes, inspirando o futuro de Gaza.",
    conceptTitle: "O Conceito",
    projectDescription: `Gere uma descrição detalhada e esperançosa para um projeto conceitual chamado 'GAZA: Renascimento Digital'. O projeto imagina um futuro onde a tecnologia de ponta e o planejamento sustentável reconstroem a infraestrutura vital de Gaza. Explique que não é um plano de construção real, mas uma visão para inspirar discussões, demonstrar o potencial da inovação e simbolizar solidariedade. Detalhe como setores críticos (energia, água, comunicações, saúde, educação) são projetados para serem resilientes, sustentáveis e centrados no ser humano, visando criar uma base próspera para futuras gerações.`,
    integratedInfrastructureTitle: "Infraestrutura Integrada",
    featureEnergyTitle: "Energia Sustentável",
    featureEnergyTitleShort: "Energia",
    featureEnergyDesc: "Redes inteligentes, energia solar e soluções de armazenamento para independência energética.",
    featureEnergyPrompt: "Gere uma análise técnica detalhada sobre um plano conceitual para a infraestrutura de 'Energia Sustentável' em Gaza. Detalhe os três pilares: geração (predominantemente solar, com fazendas fotovoltaicas), distribuição (redes elétricas inteligentes) e armazenamento (sistemas de baterias em grande escala). Explique como este sistema integrado garante autonomia energética e um futuro sustentável.",
    featureWaterTitle: "Água e Saneamento",
    featureWaterTitleShort: "Água",
    featureWaterDesc: "Dessalinização avançada e sistemas inteligentes de gestão de água.",
    featureWaterPrompt: "Gere uma análise técnica detalhada sobre um plano conceitual para 'Água e Saneamento' em Gaza. Descreva o uso de usinas de dessalinização por osmose reversa alimentadas por energia solar, uma rede de distribuição de água inteligente com sensores IoT e IA, e instalações de tratamento de águas residuais para reciclagem e irrigação.",
    featureCommunicationsTitle: "Conectividade Digital",
    featureCommunicationsTitleShort: "Conectividade",
    featureCommunicationsDesc: "Infraestrutura de fibra ótica e 5G para acesso universal à internet.",
    featureCommunicationsPrompt: "Gere uma análise técnica detalhada sobre um plano conceitual para 'Conectividade Digital' em Gaza. Explique a implementação de uma espinha dorsal de fibra ótica de alta capacidade e uma rede 5G robusta para garantir acesso universal à internet de alta velocidade, destacando a importância para e-learning, telemedicina e a economia digital, bem como a redundância do sistema.",
    featureHealthTitle: "Saúde Digital",
    featureHealthTitleShort: "Saúde",
    featureHealthDesc: "Hospitais conectados e plataformas de telemedicina para cuidados acessíveis.",
    featureHealthPrompt: "Gere uma análise técnica detalhada sobre um plano conceitual para 'Saúde Digital' em Gaza. Descreva um sistema de saúde descentralizado com clínicas conectadas, registros de saúde eletrônicos unificados e uma plataforma de telemedicina robusta para consultas virtuais e monitoramento remoto, tornando os cuidados mais acessíveis e proativos.",
    featureEducationTitle: "Educação Conectada",
    featureEducationTitleShort: "Educação",
    featureEducationDesc: "Plataformas de e-learning e escolas inteligentes para a próxima geração.",
    featureEducationPrompt: "Gere uma análise técnica detalhada sobre um plano conceitual para 'Educação Conectada' em Gaza. Descreva 'Escolas Inteligentes' com salas de aula interativas e Fab Labs, e uma plataforma nacional de e-learning com currículos personalizados e aprendizado adaptativo baseado em IA para capacitar os alunos para a economia do século XXI.",
    featureEconomyTitle: "Economia Digital",
    featureEconomyTitleShort: "Economia",
    featureEconomyDesc: "Hubs de tecnologia e plataformas de e-commerce para impulsionar o crescimento local.",
    featureEconomyPrompt: "Gere uma análise técnica detalhada sobre um plano conceitual para a 'Economia Digital' em Gaza. Descreva a criação de hubs de tecnologia e espaços de coworking, uma plataforma de e-commerce nacional para conectar produtores locais a mercados globais e programas de treinamento intensivo para qualificar a força de trabalho.",
    modalTitle: "Análise Conceitual",
    modalAITitle: "Descrição Gerada por IA",
    modalClose: "Fechar",
    errorTitle: "Erro!",
    errorFallback: "Por favor, tente novamente mais tarde.",
    analyticsTitle: "Análise do Complexo Vertical",
    analyticsSelectorLabel: "Selecione um Complexo",
    analyticsSelectorOption: "Complexo Vertical",
    chartPopulationTitle: "Projeção de Densidade Populacional (por km²)",
    chartEnergyTitle: "Previsão de Energia (GWh/ano)",
    chartWaterTitle: "Distribuição do Uso de Água",
    yAxisPopulation: "Densidade",
    legendEnergyGeneration: "Geração",
    legendEnergyConsumption: "Consumo",
    waterResidential: "Residencial",
    waterFarming: "Agricultura Vertical",
    waterCommercial: "Comercial",
    imageGenerationTitle: "Visualizador Conceitual de Arquitetura",
    imageGenerationLoading: "Gerando imagem conceitual com IA... Isso pode levar um momento.",
    imageGenerationPlaceholder: "Selecione um complexo para gerar uma visão arquitetônica.",
    imageGenerationPromptBase: "Arte conceitual cinematográfica e ultra-realista de um complexo de cidade vertical futurista em uma Gaza reinventada. O complexo tem 600m de altura e 200m de largura, com uma fachada de vidro maciça com filme fotovoltaico integrado. Contém fazendas verticais, usinas sustentáveis de etanol e biodiesel, um data center vertical em nuvem, áreas comerciais multiuso, escolas avançadas e está interconectado com outras torres por meio de pontes suspensas. Na base, há um parque verde exuberante e expansivo com 'rios verticais' fluindo (cascatas descendo por elementos arquitetônicos).",
    footerConcept: "Um projeto conceitual por entusiastas da tecnologia em solidariedade.",
    footerRights: "mex energia. mex.eco.br. todos os direitos reservados.",
  },
  en: {
    headerTitle: "GAZA: Digital Rebirth",
    unitySymbolTooltip: "Symbol of unity: Palestine and the World",
    openMenu: "Open main menu",
    navMore: "More...",
    heroTitle: "Rebuilding Gaza, One Block at a Time",
    heroSubtitle: "Exploring a conceptual blueprint for the revitalization of Gaza's infrastructure through technology and innovation.",
    heroAlt: "Conceptual vision of a futuristic vertical city with sustainable architecture and lush green spaces, inspiring Gaza's future.",
    conceptTitle: "The Concept",
    projectDescription: `Generate a detailed and hopeful description for a conceptual project named 'GAZA: Digital Rebirth'. The project envisions a future where cutting-edge technology and sustainable planning rebuild Gaza's vital infrastructure. Explain that it is not an actual construction plan but a vision to inspire discussion, demonstrate innovation's potential, and symbolize solidarity. Detail how critical sectors (energy, water, communications, health, education) are designed to be resilient, sustainable, and human-centered, aiming to create a thriving foundation for future generations.`,
    integratedInfrastructureTitle: "Integrated Infrastructure",
    featureEnergyTitle: "Sustainable Energy",
    featureEnergyTitleShort: "Energy",
    featureEnergyDesc: "Smart grids, solar power, and storage solutions for energy independence.",
    featureEnergyPrompt: "Generate a detailed technical analysis for a conceptual plan for 'Sustainable Energy' infrastructure in Gaza. Detail the three pillars: generation (predominantly solar with photovoltaic farms), distribution (smart grids), and storage (large-scale battery systems). Explain how this integrated system ensures energy autonomy and a sustainable future.",
    featureWaterTitle: "Water & Sanitation",
    featureWaterTitleShort: "Water",
    featureWaterDesc: "Advanced desalination and smart water management systems.",
    featureWaterPrompt: "Generate a detailed technical analysis for a conceptual plan for 'Water & Sanitation' in Gaza. Describe the use of solar-powered reverse osmosis desalination plants, a smart water distribution network with IoT sensors and AI, and state-of-the-art wastewater treatment facilities for recycling and irrigation.",
    featureCommunicationsTitle: "Digital Connectivity",
    featureCommunicationsTitleShort: "Connectivity",
    featureCommunicationsDesc: "Fiber optic and 5G infrastructure for universal internet access.",
    featureCommunicationsPrompt: "Generate a detailed technical analysis for a conceptual plan for 'Digital Connectivity' in Gaza. Explain the implementation of a high-capacity fiber optic backbone and a robust 5G network to ensure universal high-speed internet access, highlighting its importance for e-learning, telemedicine, and the digital economy, as well as system redundancy.",
    featureHealthTitle: "Digital Health",
    featureHealthTitleShort: "Health",
    featureHealthDesc: "Connected hospitals and telemedicine platforms for accessible care.",
    featureHealthPrompt: "Generate a detailed technical analysis for a conceptual plan for 'Digital Health' in Gaza. Describe a decentralized healthcare system with connected clinics, unified electronic health records, and a robust telemedicine platform for virtual consultations and remote monitoring, making care more accessible and proactive.",
    featureEducationTitle: "Connected Education",
    featureEducationTitleShort: "Education",
    featureEducationDesc: "E-learning platforms and smart schools for the next generation.",
    featureEducationPrompt: "Generate a detailed technical analysis for a conceptual plan for 'Connected Education' in Gaza. Describe 'Smart Schools' with interactive classrooms and Fab Labs, and a national e-learning platform with personalized curricula and AI-based adaptive learning to empower students for the 21st-century economy.",
    featureEconomyTitle: "Digital Economy",
    featureEconomyTitleShort: "Economy",
    featureEconomyDesc: "Tech hubs and e-commerce platforms to boost local growth.",
    featureEconomyPrompt: "Generate a detailed technical analysis for a conceptual plan for the 'Digital Economy' in Gaza. Describe the creation of tech hubs and co-working spaces, a national e-commerce platform to connect local producers to global markets, and intensive training programs to upskill the workforce.",
    modalTitle: "Conceptual Analysis",
    modalAITitle: "AI-Generated Description",
    modalClose: "Close",
    errorTitle: "Error!",
    errorFallback: "Please try again later.",
    analyticsTitle: "Vertical Complex Analytics",
    analyticsSelectorLabel: "Select a Complex",
    analyticsSelectorOption: "Vertical Complex",
    chartPopulationTitle: "Population Density Projection (per km²)",
    chartEnergyTitle: "Energy Forecast (GWh/year)",
    chartWaterTitle: "Water Usage Breakdown",
    yAxisPopulation: "Density",
    legendEnergyGeneration: "Generation",
    legendEnergyConsumption: "Consumption",
    waterResidential: "Residential",
    waterFarming: "Vertical Farming",
    waterCommercial: "Commercial",
    imageGenerationTitle: "Conceptual Architecture Visualizer",
    imageGenerationLoading: "Generating conceptual image with AI... This may take a moment.",
    imageGenerationPlaceholder: "Select a complex to generate an architectural vision.",
    imageGenerationPromptBase: "An ultra-photorealistic, cinematic concept art of a futuristic vertical city complex in a reimagined Gaza. The complex is 600m high and 200m wide, featuring a massive glass facade with integrated photovoltaic film. It contains vertical farms, sustainable ethanol and biodiesel plants, a vertical cloud data center, multi-use shopping areas, advanced schools, and is interconnected with other towers via sky-bridges. At the base, there is a lush, expansive green park with flowing 'vertical rivers' (waterfalls cascading down architectural elements).",
    footerConcept: "A conceptual project by tech enthusiasts in solidarity.",
    footerRights: "mex energia. mex.eco.br. all rights reserved.",
  },
  ar: {
    headerTitle: "غزة: ولادة رقمية جديدة",
    unitySymbolTooltip: "رمز الوحدة: فلسطين والعالم",
    openMenu: "افتح القائمة الرئيسية",
    navMore: "المزيد...",
    heroTitle: "إعادة بناء غزة، لبنة لبنة",
    heroSubtitle: "استكشاف مخطط مفاهيمي لتنشيط البنية التحتية في غزة من خلال التكنولوجيا والابتكار.",
    heroAlt: "رؤية مفاهيمية لمدينة عمودية مستقبلية ذات هندسة معمارية مستدامة ومساحات خضراء مورقة، تلهم مستقبل غزة.",
    conceptTitle: "المفهوم",
    projectDescription: `أنشئ وصفًا مفصلاً ومفعمًا بالأمل لمشروع مفاهيمي يسمى 'غزة: ولادة رقمية جديدة'. يتصور المشروع مستقبلاً حيث تعيد التكنولوجيا المتطورة والتخطيط المستدام بناء البنية التحتية الحيوية في غزة. اشرح أنها ليست خطة بناء فعلية ولكنها رؤية لإلهام النقاش وإظهار إمكانات الابتكار وترميز التضامن. فصّل كيف تم تصميم القطاعات الحيوية (الطاقة، المياه، الاتصالات، الصحة، التعليم) لتكون مرنة ومستدامة ومتمحورة حول الإنسان، بهدف خلق أساس مزدهر للأجيال القادمة.`,
    integratedInfrastructureTitle: "البنية التحتية المتكاملة",
    featureEnergyTitle: "الطاقة المستدامة",
    featureEnergyTitleShort: "الطاقة",
    featureEnergyDesc: "شبكات ذكية وطاقة شمسية وحلول تخزين لتحقيق استقلال الطاقة.",
    featureEnergyPrompt: "أنشئ تحليلاً فنياً مفصلاً لخطة مفاهيمية للبنية التحتية لـ 'الطاقة المستدامة' في غزة. فصّل الركائز الثلاث: التوليد (بشكل أساسي شمسي مع مزارع كهروضوئية)، والتوزيع (شبكات ذكية)، والتخزين (أنظمة بطاريات واسعة النطاق). اشرح كيف يضمن هذا النظام المتكامل استقلالية الطاقة ومستقبلًا مستدامًا.",
    featureWaterTitle: "المياه والصرف الصحي",
    featureWaterTitleShort: "المياه",
    featureWaterDesc: "تحلية متقدمة وأنظمة إدارة مياه ذكية.",
    featureWaterPrompt: "أنشئ تحليلاً فنياً مفصلاً لخطة مفاهيمية لـ 'المياه والصرف الصحي' في غزة. صف استخدام محطات تحلية المياه بالتناضح العكسي التي تعمل بالطاقة الشمسية، وشبكة توزيع مياه ذكية مع مستشعرات إنترنت الأشياء والذكاء الاصطناعي، ومنشآت معالجة مياه الصرف الصحي الحديثة لإعادة التدوير والري.",
    featureCommunicationsTitle: "الاتصال الرقمي",
    featureCommunicationsTitleShort: "الاتصال",
    featureCommunicationsDesc: "بنية تحتية للألياف البصرية و 5G للوصول الشامل إلى الإنترنت.",
    featureCommunicationsPrompt: "أنشئ تحليلاً فنياً مفصلاً لخطة مفاهيمية لـ 'الاتصال الرقمي' في غزة. اشرح تنفيذ بنية تحتية من الألياف البصرية عالية السعة وشبكة 5G قوية لضمان الوصول الشامل إلى الإنترنت عالي السرعة، مع تسليط الضوء على أهميتها للتعلم الإلكتروني والتطبيب عن بعد والاقتصاد الرقمي، بالإضافة إلى تكرار النظام.",
    featureHealthTitle: "الصحة الرقمية",
    featureHealthTitleShort: "الصحة",
    featureHealthDesc: "مستشفيات متصلة ومنصات للتطبيب عن بعد لرعاية يسهل الوصول إليها.",
    featureHealthPrompt: "أنشئ تحليلاً فنياً مفصلاً لخطة مفاهيمية لـ 'الصحة الرقمية' في غزة. صف نظام رعاية صحية لامركزي مع عيادات متصلة، وسجلات صحية إلكترونية موحدة، ومنصة تطبيب عن بعد قوية للاستشارات الافتراضية والمراقبة عن بعد، مما يجعل الرعاية أكثر سهولة واستباقية.",
    featureEducationTitle: "التعليم المتصل",
    featureEducationTitleShort: "التعليم",
    featureEducationDesc: "منصات التعلم الإلكتروني والمدارس الذكية للجيل القادم.",
    featureEducationPrompt: "أنشئ تحليلاً فنياً مفصلاً لخطة مفاهيمية لـ 'التعليم المتصل' في غزة. صف 'المدارس الذكية' مع فصول دراسية تفاعلية ومختبرات تصنيع رقمية، ومنصة تعلم إلكتروني وطنية مع مناهج مخصصة وتعلم تكيفي قائم على الذكاء الاصطناعي لتمكين الطلاب من مواكبة اقتصاد القرن الحادي والعشرين.",
    featureEconomyTitle: "الاقتصاد الرقمي",
    featureEconomyTitleShort: "الاقتصاد",
    featureEconomyDesc: "مراكز تقنية ومنصات تجارة إلكترونية لتعزيز النمو المحلي.",
    featureEconomyPrompt: "أنشئ تحليلاً فنياً مفصلاً لخطة مفاهيمية لـ 'الاقتصاد الرقمي' في غزة. صف إنشاء مراكز تقنية ومساحات عمل مشتركة، ومنصة تجارة إلكترونية وطنية لربط المنتجين المحليين بالأسواق العالمية، وبرامج تدريب مكثفة لرفع مهارات القوى العاملة.",
    modalTitle: "تحليل مفاهيمي",
    modalAITitle: "وصف تم إنشاؤه بواسطة الذكاء الاصطناعي",
    modalClose: "إغلاق",
    errorTitle: "خطأ!",
    errorFallback: "يرجى المحاولة مرة أخرى في وقت لاحق.",
    analyticsTitle: "تحليلات المجمع العمودي",
    analyticsSelectorLabel: "اختر مجمعًا",
    analyticsSelectorOption: "المجمع العمودي",
    chartPopulationTitle: "إسقاط الكثافة السكانية (لكل كيلومتر مربع)",
    chartEnergyTitle: "توقعات الطاقة (جيجاوات ساعة/سنة)",
    chartWaterTitle: "توزيع استخدام المياه",
    yAxisPopulation: "الكثافة",
    legendEnergyGeneration: "الإنتاج",
    legendEnergyConsumption: "الاستهلاك",
    waterResidential: "سكني",
    waterFarming: "زراعة عمودية",
    waterCommercial: "تجاري",
    imageGenerationTitle: "متخيل العمارة المفاهيمي",
    imageGenerationLoading: "جاري إنشاء صورة مفاهيمية بالذكاء الاصطناعي... قد يستغرق هذا بعض الوقت.",
    imageGenerationPlaceholder: "اختر مجمعًا لإنشاء رؤية معمارية.",
    imageGenerationPromptBase: "فن مفاهيمي سينمائي واقعي للغاية لمجمع مدينة عمودي مستقبلي في غزة متخيلة. يبلغ ارتفاع المجمع 600 متر وعرضه 200 متر، ويتميز بواجهة زجاجية ضخمة مع فيلم ضوئي مدمج. يحتوي على مزارع عمودية، ومصانع إيثانول وديزل حيوي مستدامة، ومركز بيانات سحابي عمودي، ومناطق تسوق متعددة الاستخدامات، ومدارس متطورة، وهو متصل بأبراج أخرى عبر جسور سماوية. عند القاعدة، توجد حديقة خضراء مورقة وواسعة مع 'أنهار عمودية' متدفقة (شلالات تتساقط على العناصر المعمارية).",
    footerConcept: "مشروع مفاهيمي من قبل عشاق التكنولوجيا تضامناً.",
    footerRights: "mex energia. mex.eco.br. كل الحقوق محفوظة.",
  },
};