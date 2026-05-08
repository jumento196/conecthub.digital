        /* ================================================================
           ██████████████████████████████████████████████████████████████
           █ SISTEMA DE INTERNACIONALIZAÇÃO (i18n) – 7 IDIOMAS        █
           ██████████████████████████████████████████████████████████████
           ================================================================ */
        (() => {
            const translations = {
                'pt-BR': {
                    feed: 'Feed',
                    shorts: 'Shorts',
                    messages: 'Chat',
                    news: 'Notícias',
                    exchange: 'Corretora',
                    search: 'Buscar',
                    aiInvest: 'IA Invest',
                    nfts: 'NFTs',
                    dao: 'DAO',
                    profile: 'Perfil',
                    articles: 'Artigos',
                    connectWallet: 'Conectar Carteira',
                    terms: 'Termos',
                    postPlaceholder: 'O que está acontecendo?',
                    post: 'Postar',
                    feedTitle: '📰 Feed Universal',
                    shortsTitle: '🎬 Vídeos Curtos',
                    uploadShort: 'Enviar Short',
                    messagesTitle: '💬 Mensagens',
                    selectContact: 'Selecione um contato',
                    typeMessage: 'Digite sua mensagem…',
                    send: 'Enviar',
                    newsTitle: '🌍 Notícias do Mundo',
                    highlights: 'Destaques',
                    business: 'Negócios',
                    technology: 'Tecnologia',
                    science: 'Ciência',
                    sports: 'Esportes',
                    entertainment: 'Entretenimento',
                    health: 'Saúde',
                    exchangeTitle: '📈 Corretora Cripto',
                    searchCoin: 'Buscar moeda…',
                    selectCoin: 'Selecione uma moeda',
                    buy: 'Comprar',
                    sell: 'Vender',
                    price: 'Preço',
                    quantity: 'Qtd.',
                    total: 'Total',
                    execute: 'Executar Ordem',
                    searchTitle: '🔎 Buscar na Internet',
                    searchPlaceholder: 'Pesquisar…',
                    searchBtn: 'Buscar',
                    aiTitle: '🤖 IA – Consultor de Investimentos',
                    aiPlaceholder: 'Pergunte sobre investimentos em cripto…',
                    aiWelcome: '👋 Olá! Sou o consultor de investimentos IA do UniverseOS. Pergunte-me sobre qualquer criptomoeda e darei minha análise baseada em dados de mercado. Lembre-se: isso NÃO é aconselhamento financeiro profissional.',
                    marketplaceTitle: '🖼️ Marketplace NFT',
                    daoTitle: '🗳️ Votação DAO',
                    proposal: 'Proposta',
                    yes: 'Sim',
                    no: 'Não',
                    abstain: 'Abstém',
                    vote: 'Votar',
                    profileTitle: '👤 Meu Perfil',
                    editProfile: 'Editar',
                    save: 'Salvar',
                    cancel: 'Cancelar',
                    karma: 'Karma',
                    tokens: 'Tokens',
                    endorsements: 'Endossos',
                    followers: 'Seguidores',
                    followingLabel: 'Seguindo',
                    portfolio: '💼 Portfólio',
                    history: '📜 Histórico',
                    watchlist: '⭐ Watchlist',
                    alerts: '🚨 Alertas de Preço',
                    converter: '💱 Conversor',
                    analytics: '📊 Analytics',
                    trends: '🔥 Tendências',
                    articlesTitle: '📝 Artigos',
                    publishTxt: '📄 Publicar .txt',
                    articlePreview: '📋 Preview do Artigo',
                    articleTitlePlaceholder: 'Título do artigo',
                    tagsPlaceholder: 'Tags separadas por vírgula',
                    publish: '✅ Publicar Artigo',
                    readFull: '📖 Ler completo',
                    download: '📥 Baixar .txt',
                    delete: '🗑️ Excluir',
                    bookmark: '📑 Salvar',
                    share: '🔗 Compartilhar',
                    like: '👍',
                    comment: '💬',
                    endorse: '✅ Endosso',
                    follow: '+ Seguir',
                    following: 'Seguindo ✓',
                    noArticles: 'Nenhum artigo encontrado.',
                    publishFirst: 'Publique seu primeiro artigo carregando um arquivo .txt!',
                    loading: 'Carregando…',
                    error: 'Erro',
                    success: 'Sucesso',
                    warning: 'Aviso',
                    info: 'Info',
                    about: 'Sobre',
                    privacy: 'Privacidade',
                    contact: 'Contato',
                    allRights: '© 2026 UniverseOS – Todos os direitos reservados',
                    cookieMsg: '🔒 Usamos cookies para melhorar sua experiência.',
                    accept: 'Aceitar',
                    termsTitle: '📜 Termos de Uso',
                    termsAccept: 'Li e Aceito os Termos',
                    welcome: 'Bem-vindo ao UniverseOS! 🌌',
                    insufficientBalance: 'Saldo insuficiente.',
                    selectCoinFirst: 'Selecione uma moeda primeiro.',
                    enterQuantity: 'Informe a quantidade.',
                    linkCopied: 'Link copiado!',
                    endorseRegistered: 'Endosso registrado!',
                    profileUpdated: 'Perfil atualizado!',
                    voteRegistered: 'Voto registrado!',
                    selectVoteOption: 'Selecione uma opção de voto.',
                    installMetamask: 'Instale a MetaMask.',
                    connectionFailed: 'Falha na conexão.',
                    swapCompleted: 'Operação concluída!',
                    noResults: 'Nenhum resultado.',
                    articlePublished: 'Artigo publicado com sucesso! 📝',
                    articleDeleted: 'Artigo excluído.',
                    storyPublished: 'Sua story foi publicada! 📸',
                    alertCreated: 'Alerta criado!',
                    alertTriggered: '🚨 ALERTA!',
                    addedToWatchlist: 'adicionado à watchlist ⭐',
                    notFinancialAdvice: '⚠️ Isso NÃO é aconselhamento financeiro.',
                    general: 'Geral',
                    opinion: 'Opinião',
                    tutorial: 'Tutorial',
                    gaming: 'Games',
                    art: 'Arte',
                    education: 'Educação',
                    finance: 'Finanças',
                    crypto: 'Criptomoedas',
                    newest: 'Mais recentes',
                    oldest: 'Mais antigos',
                    popular: 'Mais curtidos',
                    allCategories: 'Todas categorias',
                    searchArticles: 'Buscar artigos…',
                    notifications: '🔔 Notificações',
                    noNotifications: 'Nenhuma notificação.',
                    emptyPortfolio: 'Portfólio vazio.',
                    noTransactions: 'Nenhuma transação.',
                    noWatchlist: 'Nenhuma moeda na watchlist.',
                    noAlerts: 'Nenhum alerta definido.',
                    above: 'Acima',
                    below: 'Abaixo',
                    addAlert: '+ Alerta',
                    targetPrice: 'Preço alvo',
                    posts: 'Posts',
                    likes: 'Likes',
                    trades: 'Trades',
                    connected: 'Conectado',
                    uploadMedia: '📎 Clique ou arraste para enviar vídeo/imagem',
                    writeComment: 'Escreva seu comentário:',
                    editPostText: 'Editar texto do post:',
                    confirmDelete: 'Confirmar exclusão?',
                    buyConfirm: 'Compra executada!',
                    sellConfirm: 'Venda executada!',
                    name: 'Nome',
                    bio: 'Bio',
                    changeCover: '📷 Trocar Capa',
                    aiAnalyzing: 'Analisando...',
                    aiAdvice: 'Com base nos dados atuais',
                    dyor: 'Faça sua própria pesquisa (DYOR)',
                },

                'en-US': {
                    feed: 'Feed',
                    shorts: 'Shorts',
                    messages: 'Chat',
                    news: 'News',
                    exchange: 'Exchange',
                    search: 'Search',
                    aiInvest: 'AI Invest',
                    nfts: 'NFTs',
                    dao: 'DAO',
                    profile: 'Profile',
                    articles: 'Articles',
                    connectWallet: 'Connect Wallet',
                    terms: 'Terms',
                    postPlaceholder: "What's happening?",
                    post: 'Post',
                    feedTitle: '📰 Universal Feed',
                    shortsTitle: '🎬 Short Videos',
                    uploadShort: 'Upload Short',
                    messagesTitle: '💬 Messages',
                    selectContact: 'Select a contact',
                    typeMessage: 'Type your message…',
                    send: 'Send',
                    newsTitle: '🌍 World News',
                    highlights: 'Highlights',
                    business: 'Business',
                    technology: 'Technology',
                    science: 'Science',
                    sports: 'Sports',
                    entertainment: 'Entertainment',
                    health: 'Health',
                    exchangeTitle: '📈 Crypto Exchange',
                    searchCoin: 'Search coin…',
                    selectCoin: 'Select a coin',
                    buy: 'Buy',
                    sell: 'Sell',
                    price: 'Price',
                    quantity: 'Qty.',
                    total: 'Total',
                    execute: 'Execute Order',
                    searchTitle: '🔎 Search the Web',
                    searchPlaceholder: 'Search…',
                    searchBtn: 'Search',
                    aiTitle: '🤖 AI – Investment Advisor',
                    aiPlaceholder: 'Ask about crypto investments…',
                    aiWelcome: "👋 Hello! I'm UniverseOS AI investment advisor. Ask me about any cryptocurrency and I'll analyze market data. Remember: this is NOT professional financial advice.",
                    marketplaceTitle: '🖼️ NFT Marketplace',
                    daoTitle: '🗳️ DAO Voting',
                    proposal: 'Proposal',
                    yes: 'Yes',
                    no: 'No',
                    abstain: 'Abstain',
                    vote: 'Vote',
                    profileTitle: '👤 My Profile',
                    editProfile: 'Edit',
                    save: 'Save',
                    cancel: 'Cancel',
                    karma: 'Karma',
                    tokens: 'Tokens',
                    endorsements: 'Endorsements',
                    followers: 'Followers',
                    followingLabel: 'Following',
                    portfolio: '💼 Portfolio',
                    history: '📜 History',
                    watchlist: '⭐ Watchlist',
                    alerts: '🚨 Price Alerts',
                    converter: '💱 Converter',
                    analytics: '📊 Analytics',
                    trends: '🔥 Trending',
                    articlesTitle: '📝 Articles',
                    publishTxt: '📄 Publish .txt',
                    articlePreview: '📋 Article Preview',
                    articleTitlePlaceholder: 'Article title',
                    tagsPlaceholder: 'Tags separated by comma',
                    publish: '✅ Publish Article',
                    readFull: '📖 Read full',
                    download: '📥 Download .txt',
                    delete: '🗑️ Delete',
                    bookmark: '📑 Save',
                    share: '🔗 Share',
                    like: '👍',
                    comment: '💬',
                    endorse: '✅ Endorse',
                    follow: '+ Follow',
                    following: 'Following ✓',
                    noArticles: 'No articles found.',
                    publishFirst: 'Publish your first article by uploading a .txt file!',
                    loading: 'Loading…',
                    error: 'Error',
                    success: 'Success',
                    warning: 'Warning',
                    info: 'Info',
                    about: 'About',
                    privacy: 'Privacy',
                    contact: 'Contact',
                    allRights: '© 2026 UniverseOS – All rights reserved',
                    cookieMsg: '🔒 We use cookies to improve your experience.',
                    accept: 'Accept',
                    termsTitle: '📜 Terms of Use',
                    termsAccept: 'I Read and Accept the Terms',
                    welcome: 'Welcome to UniverseOS! 🌌',
                    insufficientBalance: 'Insufficient balance.',
                    selectCoinFirst: 'Select a coin first.',
                    enterQuantity: 'Enter the quantity.',
                    linkCopied: 'Link copied!',
                    endorseRegistered: 'Endorsement registered!',
                    profileUpdated: 'Profile updated!',
                    voteRegistered: 'Vote registered!',
                    selectVoteOption: 'Select a vote option.',
                    installMetamask: 'Install MetaMask.',
                    connectionFailed: 'Connection failed.',
                    swapCompleted: 'Operation completed!',
                    noResults: 'No results.',
                    articlePublished: 'Article published successfully! 📝',
                    articleDeleted: 'Article deleted.',
                    storyPublished: 'Your story has been published! 📸',
                    alertCreated: 'Alert created!',
                    alertTriggered: '🚨 ALERT!',
                    addedToWatchlist: 'added to watchlist ⭐',
                    notFinancialAdvice: '⚠️ This is NOT financial advice.',
                    general: 'General',
                    opinion: 'Opinion',
                    tutorial: 'Tutorial',
                    gaming: 'Gaming',
                    art: 'Art',
                    education: 'Education',
                    finance: 'Finance',
                    crypto: 'Crypto',
                    newest: 'Newest',
                    oldest: 'Oldest',
                    popular: 'Most liked',
                    allCategories: 'All categories',
                    searchArticles: 'Search articles…',
                    notifications: '🔔 Notifications',
                    noNotifications: 'No notifications.',
                    emptyPortfolio: 'Empty portfolio.',
                    noTransactions: 'No transactions.',
                    noWatchlist: 'No coins in watchlist.',
                    noAlerts: 'No alerts set.',
                    above: 'Above',
                    below: 'Below',
                    addAlert: '+ Alert',
                    targetPrice: 'Target price',
                    posts: 'Posts',
                    likes: 'Likes',
                    trades: 'Trades',
                    connected: 'Connected',
                    uploadMedia: '📎 Click or drag to upload video/image',
                    writeComment: 'Write your comment:',
                    editPostText: 'Edit post text:',
                    confirmDelete: 'Confirm deletion?',
                    buyConfirm: 'Buy executed!',
                    sellConfirm: 'Sell executed!',
                    name: 'Name',
                    bio: 'Bio',
                    changeCover: '📷 Change Cover',
                    aiAnalyzing: 'Analyzing...',
                    aiAdvice: 'Based on current data',
                    dyor: 'Do Your Own Research (DYOR)',
                },

                'es-ES': {
                    feed:'Feed',shorts:'Cortos',messages:'Chat',news:'Noticias',exchange:'Exchange',search:'Buscar',aiInvest:'IA Inversión',nfts:'NFTs',dao:'DAO',profile:'Perfil',articles:'Artículos',connectWallet:'Conectar Billetera',terms:'Términos',postPlaceholder:'¿Qué está pasando?',post:'Publicar',feedTitle:'📰 Feed Universal',shortsTitle:'🎬 Videos Cortos',uploadShort:'Subir Corto',messagesTitle:'💬 Mensajes',selectContact:'Selecciona un contacto',typeMessage:'Escribe tu mensaje…',send:'Enviar',newsTitle:'🌍 Noticias del Mundo',highlights:'Destacados',business:'Negocios',technology:'Tecnología',science:'Ciencia',sports:'Deportes',entertainment:'Entretenimiento',health:'Salud',exchangeTitle:'📈 Exchange Cripto',searchCoin:'Buscar moneda…',selectCoin:'Selecciona una moneda',buy:'Comprar',sell:'Vender',price:'Precio',quantity:'Cant.',total:'Total',execute:'Ejecutar Orden',searchTitle:'🔎 Buscar en Internet',searchPlaceholder:'Buscar…',searchBtn:'Buscar',aiTitle:'🤖 IA – Asesor de Inversiones',aiPlaceholder:'Pregunta sobre inversiones cripto…',aiWelcome:'👋 ¡Hola! Soy el asesor de inversiones IA de UniverseOS. Pregúntame sobre cualquier criptomoneda. Recuerda: esto NO es asesoría financiera profesional.',marketplaceTitle:'🖼️ Marketplace NFT',daoTitle:'🗳️ Votación DAO',proposal:'Propuesta',yes:'Sí',no:'No',abstain:'Abstención',vote:'Votar',profileTitle:'👤 Mi Perfil',editProfile:'Editar',save:'Guardar',cancel:'Cancelar',karma:'Karma',tokens:'Tokens',endorsements:'Respaldos',followers:'Seguidores',followingLabel:'Siguiendo',portfolio:'💼 Portafolio',history:'📜 Historial',watchlist:'⭐ Watchlist',alerts:'🚨 Alertas de Precio',converter:'💱 Conversor',analytics:'📊 Analytics',trends:'🔥 Tendencias',articlesTitle:'📝 Artículos',publishTxt:'📄 Publicar .txt',publish:'✅ Publicar',readFull:'📖 Leer completo',download:'📥 Descargar .txt',delete:'🗑️ Eliminar',bookmark:'📑 Guardar',share:'🔗 Compartir',like:'👍',comment:'💬',endorse:'✅ Respaldo',follow:'+ Seguir',following:'Siguiendo ✓',loading:'Cargando…',error:'Error',success:'Éxito',about:'Acerca de',privacy:'Privacidad',contact:'Contacto',allRights:'© 2026 UniverseOS – Todos los derechos reservados',cookieMsg:'🔒 Usamos cookies para mejorar tu experiencia.',accept:'Aceptar',welcome:'¡Bienvenido a UniverseOS! 🌌',notFinancialAdvice:'⚠️ Esto NO es asesoría financiera.',
                },

                'fr-FR': {
                    feed:'Fil',shorts:'Courts',messages:'Chat',news:'Actualités',exchange:'Échange',search:'Rechercher',aiInvest:'IA Invest',nfts:'NFTs',dao:'DAO',profile:'Profil',articles:'Articles',connectWallet:'Connecter Portefeuille',terms:'Conditions',postPlaceholder:'Quoi de neuf ?',post:'Publier',feedTitle:'📰 Fil Universel',shortsTitle:'🎬 Vidéos Courtes',uploadShort:'Télécharger Court',messagesTitle:'💬 Messages',selectContact:'Sélectionnez un contact',typeMessage:'Tapez votre message…',send:'Envoyer',newsTitle:'🌍 Actualités Mondiales',highlights:'À la une',business:'Affaires',technology:'Technologie',science:'Science',sports:'Sports',entertainment:'Divertissement',health:'Santé',exchangeTitle:'📈 Échange Crypto',searchCoin:'Rechercher monnaie…',selectCoin:'Sélectionnez une monnaie',buy:'Acheter',sell:'Vendre',price:'Prix',quantity:'Qté.',total:'Total',execute:'Exécuter Ordre',searchTitle:'🔎 Rechercher sur Internet',searchPlaceholder:'Rechercher…',searchBtn:'Rechercher',aiTitle:'🤖 IA – Conseiller en Investissements',aiPlaceholder:'Demandez sur les investissements crypto…',aiWelcome:'👋 Bonjour ! Je suis le conseiller IA de UniverseOS. Posez-moi des questions sur les crypto-monnaies. Rappel : ce n\'est PAS un conseil financier professionnel.',marketplaceTitle:'🖼️ Marketplace NFT',daoTitle:'🗳️ Vote DAO',proposal:'Proposition',yes:'Oui',no:'Non',abstain:'Abstention',vote:'Voter',profileTitle:'👤 Mon Profil',editProfile:'Modifier',save:'Sauvegarder',cancel:'Annuler',karma:'Karma',tokens:'Jetons',endorsements:'Endorsements',followers:'Abonnés',followingLabel:'Abonnements',portfolio:'💼 Portefeuille',history:'📜 Historique',watchlist:'⭐ Watchlist',alerts:'🚨 Alertes de Prix',converter:'💱 Convertisseur',analytics:'📊 Analyses',trends:'🔥 Tendances',articlesTitle:'📝 Articles',publishTxt:'📄 Publier .txt',publish:'✅ Publier',readFull:'📖 Lire tout',download:'📥 Télécharger .txt',delete:'🗑️ Supprimer',bookmark:'📑 Sauvegarder',share:'🔗 Partager',like:'👍',comment:'💬',endorse:'✅ Endosser',follow:'+ Suivre',following:'Suivi ✓',loading:'Chargement…',error:'Erreur',success:'Succès',about:'À propos',privacy:'Confidentialité',contact:'Contact',allRights:'© 2026 UniverseOS – Tous droits réservés',cookieMsg:'🔒 Nous utilisons des cookies.',accept:'Accepter',welcome:'Bienvenue sur UniverseOS ! 🌌',notFinancialAdvice:'⚠️ Ce n\'est PAS un conseil financier.',
                },

                'de-DE': {
                    feed:'Feed',shorts:'Kurzvideos',messages:'Chat',news:'Nachrichten',exchange:'Börse',search:'Suche',aiInvest:'KI Invest',nfts:'NFTs',dao:'DAO',profile:'Profil',articles:'Artikel',connectWallet:'Wallet verbinden',terms:'AGB',postPlaceholder:'Was gibt es Neues?',post:'Posten',feedTitle:'📰 Universal Feed',shortsTitle:'🎬 Kurzvideos',uploadShort:'Kurzvideo hochladen',messagesTitle:'💬 Nachrichten',selectContact:'Kontakt auswählen',typeMessage:'Nachricht eingeben…',send:'Senden',newsTitle:'🌍 Weltnachrichten',highlights:'Highlights',business:'Wirtschaft',technology:'Technologie',science:'Wissenschaft',sports:'Sport',entertainment:'Unterhaltung',health:'Gesundheit',exchangeTitle:'📈 Krypto-Börse',searchCoin:'Münze suchen…',selectCoin:'Münze auswählen',buy:'Kaufen',sell:'Verkaufen',price:'Preis',quantity:'Menge',total:'Gesamt',execute:'Order ausführen',searchTitle:'🔎 Im Internet suchen',searchPlaceholder:'Suchen…',searchBtn:'Suchen',aiTitle:'🤖 KI – Investitionsberater',aiPlaceholder:'Fragen Sie nach Krypto-Investitionen…',aiWelcome:'👋 Hallo! Ich bin der KI-Investitionsberater von UniverseOS. Fragen Sie mich zu Kryptowährungen. Hinweis: Dies ist KEINE professionelle Finanzberatung.',marketplaceTitle:'🖼️ NFT Marktplatz',daoTitle:'🗳️ DAO Abstimmung',proposal:'Vorschlag',yes:'Ja',no:'Nein',abstain:'Enthaltung',vote:'Abstimmen',profileTitle:'👤 Mein Profil',editProfile:'Bearbeiten',save:'Speichern',cancel:'Abbrechen',karma:'Karma',tokens:'Token',endorsements:'Empfehlungen',followers:'Follower',followingLabel:'Folge ich',portfolio:'💼 Portfolio',history:'📜 Verlauf',watchlist:'⭐ Watchlist',alerts:'🚨 Preisalarme',converter:'💱 Umrechner',analytics:'📊 Analysen',trends:'🔥 Trends',articlesTitle:'📝 Artikel',publishTxt:'📄 .txt veröffentlichen',publish:'✅ Veröffentlichen',readFull:'📖 Vollständig lesen',download:'📥 .txt herunterladen',delete:'🗑️ Löschen',bookmark:'📑 Speichern',share:'🔗 Teilen',like:'👍',comment:'💬',endorse:'✅ Empfehlen',follow:'+ Folgen',following:'Folge ich ✓',loading:'Laden…',error:'Fehler',success:'Erfolg',about:'Über uns',privacy:'Datenschutz',contact:'Kontakt',allRights:'© 2026 UniverseOS – Alle Rechte vorbehalten',cookieMsg:'🔒 Wir verwenden Cookies.',accept:'Akzeptieren',welcome:'Willkommen bei UniverseOS! 🌌',notFinancialAdvice:'⚠️ Dies ist KEINE Finanzberatung.',
                },

                'zh-CN': {
                    feed:'动态',shorts:'短视频',messages:'聊天',news:'新闻',exchange:'交易所',search:'搜索',aiInvest:'AI投资',nfts:'NFTs',dao:'DAO',profile:'个人资料',articles:'文章',connectWallet:'连接钱包',terms:'条款',postPlaceholder:'有什么新鲜事？',post:'发布',feedTitle:'📰 全球动态',shortsTitle:'🎬 短视频',uploadShort:'上传短视频',messagesTitle:'💬 消息',selectContact:'选择联系人',typeMessage:'输入消息…',send:'发送',newsTitle:'🌍 全球新闻',highlights:'头条',business:'商业',technology:'科技',science:'科学',sports:'体育',entertainment:'娱乐',health:'健康',exchangeTitle:'📈 加密交易所',searchCoin:'搜索币种…',selectCoin:'选择币种',buy:'买入',sell:'卖出',price:'价格',quantity:'数量',total:'总计',execute:'执行订单',searchTitle:'🔎 搜索互联网',searchPlaceholder:'搜索…',searchBtn:'搜索',aiTitle:'🤖 AI投资顾问',aiPlaceholder:'询问加密投资…',aiWelcome:'👋 您好！我是UniverseOS的AI投资顾问。请问我关于任何加密货币的问题。请注意：这不是专业的财务建议。',marketplaceTitle:'🖼️ NFT市场',daoTitle:'🗳️ DAO投票',proposal:'提案',yes:'是',no:'否',abstain:'弃权',vote:'投票',profileTitle:'👤 我的资料',editProfile:'编辑',save:'保存',cancel:'取消',karma:'声望',tokens:'代币',endorsements:'认可',followers:'关注者',followingLabel:'正在关注',portfolio:'💼 投资组合',history:'📜 历史记录',watchlist:'⭐ 关注列表',alerts:'🚨 价格提醒',converter:'💱 转换器',analytics:'📊 分析',trends:'🔥 趋势',articlesTitle:'📝 文章',publishTxt:'📄 发布.txt',publish:'✅ 发布文章',readFull:'📖 阅读全文',download:'📥 下载.txt',delete:'🗑️ 删除',bookmark:'📑 收藏',share:'🔗 分享',like:'👍',comment:'💬',endorse:'✅ 认可',follow:'+ 关注',following:'已关注 ✓',loading:'加载中…',error:'错误',success:'成功',about:'关于',privacy:'隐私',contact:'联系',allRights:'© 2026 UniverseOS – 保留所有权利',cookieMsg:'🔒 我们使用cookies来改善您的体验。',accept:'接受',welcome:'欢迎来到UniverseOS！🌌',notFinancialAdvice:'⚠️ 这不是财务建议。',
                },

                'ja-JP': {
                    feed:'フィード',shorts:'ショート',messages:'チャット',news:'ニュース',exchange:'取引所',search:'検索',aiInvest:'AI投資',nfts:'NFTs',dao:'DAO',profile:'プロフィール',articles:'記事',connectWallet:'ウォレット接続',terms:'利用規約',postPlaceholder:'何が起きていますか？',post:'投稿',feedTitle:'📰 ユニバーサルフィード',shortsTitle:'🎬 ショート動画',uploadShort:'ショートをアップロード',messagesTitle:'💬 メッセージ',selectContact:'連絡先を選択',typeMessage:'メッセージを入力…',send:'送信',newsTitle:'🌍 世界のニュース',highlights:'ハイライト',business:'ビジネス',technology:'テクノロジー',science:'科学',sports:'スポーツ',entertainment:'エンタメ',health:'健康',exchangeTitle:'📈 仮想通貨取引所',searchCoin:'通貨を検索…',selectCoin:'通貨を選択',buy:'購入',sell:'売却',price:'価格',quantity:'数量',total:'合計',execute:'注文実行',searchTitle:'🔎 インターネット検索',searchPlaceholder:'検索…',searchBtn:'検索',aiTitle:'🤖 AI投資アドバイザー',aiPlaceholder:'仮想通貨投資について質問…',aiWelcome:'👋 こんにちは！UniverseOSのAI投資アドバイザーです。仮想通貨について何でもお聞きください。注意：これは専門的な財務アドバイスではありません。',marketplaceTitle:'🖼️ NFTマーケットプレイス',daoTitle:'🗳️ DAO投票',proposal:'提案',yes:'はい',no:'いいえ',abstain:'棄権',vote:'投票',profileTitle:'👤 マイプロフィール',editProfile:'編集',save:'保存',cancel:'キャンセル',karma:'カルマ',tokens:'トークン',endorsements:'推薦',followers:'フォロワー',followingLabel:'フォロー中',portfolio:'💼 ポートフォリオ',history:'📜 履歴',watchlist:'⭐ ウォッチリスト',alerts:'🚨 価格アラート',converter:'💱 コンバーター',analytics:'📊 分析',trends:'🔥 トレンド',articlesTitle:'📝 記事',publishTxt:'📄 .txtを公開',publish:'✅ 記事を公開',readFull:'📖 全文を読む',download:'📥 .txtをダウンロード',delete:'🗑️ 削除',bookmark:'📑 保存',share:'🔗 共有',like:'👍',comment:'💬',endorse:'✅ 推薦',follow:'+ フォロー',following:'フォロー中 ✓',loading:'読み込み中…',error:'エラー',success:'成功',about:'概要',privacy:'プライバシー',contact:'お問い合わせ',allRights:'© 2026 UniverseOS – All rights reserved',cookieMsg:'🔒 Cookieを使用しています。',accept:'同意',welcome:'UniverseOSへようこそ！🌌',notFinancialAdvice:'⚠️ これは財務アドバイスではありません。',
                }
            };

            // Idioma atual
            let currentLang = localStorage.getItem('lang') || 'pt-BR';
            const langSelect = $('#lang-select');
            langSelect.value = currentLang;

            // Função de tradução
            window.t = key => {
                const lang = translations[currentLang];
                return lang?.[key] || translations['pt-BR']?.[key] || key;
            };

            // Mapeamento de elementos traduzíveis
            const translatableMap = {
                // Navbar links
                '.nav-links a[data-tab="feed"]': 'feed',
                '.nav-links a[data-tab="shorts"]': 'shorts',
                '.nav-links a[data-tab="messages"]': 'messages',
                '.nav-links a[data-tab="news"]': 'news',
                '.nav-links a[data-tab="exchange"]': 'exchange',
                '.nav-links a[data-tab="search"]': 'search',
                '.nav-links a[data-tab="ai"]': 'aiInvest',
                '.nav-links a[data-tab="marketplace"]': 'nfts',
                '.nav-links a[data-tab="governance"]': 'dao',
                '.nav-links a[data-tab="profile"]': 'profile',
                '.nav-links a[data-tab="articles"]': 'articles',
                '#terms-btn': 'terms',
                '#connect-wallet': 'connectWallet',
            };

            // Aplicar traduções
            const applyTranslations = () => {
                document.documentElement.lang = currentLang;

                Object.entries(translatableMap).forEach(([selector, key]) => {
                    const el = $(selector);
                    if (el) el.textContent = t(key);
                });

                // Placeholders
                if ($('#post-input')) $('#post-input').placeholder = t('postPlaceholder');
                if ($('#msg-input')) $('#msg-input').placeholder = t('typeMessage');
                if ($('#crypto-search')) $('#crypto-search').placeholder = t('searchCoin');
                if ($('#search-input')) $('#search-input').placeholder = t('searchPlaceholder');
                if ($('#ai-input')) $('#ai-input').placeholder = t('aiPlaceholder');
                if ($('#article-search')) $('#article-search').placeholder = t('searchArticles');

                // Títulos de seção
                const titleMap = {
                    '#feed-section .section-hdr h2': 'feedTitle',
                    '#shorts-section .section-hdr h2': 'shortsTitle',
                    '#messages-section .section-hdr h2': 'messagesTitle',
                    '#news-section .section-hdr h2': 'newsTitle',
                    '#exchange-section .section-hdr h2': 'exchangeTitle',
                    '#search-section .search-box h3': 'searchTitle',
                    '#ai-section .ai-box h3': 'aiTitle',
                    '#profile-section .section-hdr h2': 'profileTitle',
                };
                Object.entries(titleMap).forEach(([sel, key]) => {
                    const el = $(sel);
                    if (el) el.textContent = t(key);
                });

                // Botões
                if ($('#post-btn')) $('#post-btn').textContent = t('post');
                if ($('#msg-send')) $('#msg-send').textContent = t('send');
                if ($('#search-btn')) $('#search-btn').textContent = t('searchBtn');
                if ($('#ai-send')) $('#ai-send').textContent = t('send');
                if ($('#upload-short-btn')) $('#upload-short-btn').textContent = t('uploadShort');
                if ($('#edit-profile-btn')) $('#edit-profile-btn').textContent = t('editProfile');
                if ($('#save-profile')) $('#save-profile').textContent = t('save');
                if ($('#cancel-profile')) $('#cancel-profile').textContent = t('cancel');

                // Footer
                const footerLinks = $$('#footer a');
                const footerKeys = ['terms', 'privacy', 'about', 'contact'];
                footerLinks.forEach((a, i) => { if (footerKeys[i]) a.textContent = t(footerKeys[i]); });

                // Meta description dinâmica
                const metaDesc = document.querySelector('meta[name="description"]');
                if (metaDesc) {
                    const descriptions = {
                        'pt-BR': 'UniverseOS – A rede social Web3 definitiva com corretora de criptomoedas, vídeos curtos, notícias globais, IA de investimentos e muito mais.',
                        'en-US': 'UniverseOS – The ultimate Web3 social network with crypto exchange, short videos, global news, investment AI and much more.',
                        'es-ES': 'UniverseOS – La red social Web3 definitiva con exchange de criptomonedas, videos cortos, noticias globales e IA de inversiones.',
                        'fr-FR': 'UniverseOS – Le réseau social Web3 ultime avec échange crypto, vidéos courtes, actualités mondiales et IA d\'investissement.',
                        'de-DE': 'UniverseOS – Das ultimative Web3 soziale Netzwerk mit Krypto-Börse, Kurzvideos, Weltnachrichten und Investment-KI.',
                        'zh-CN': 'UniverseOS – 终极Web3社交网络，集成加密货币交易所、短视频、全球新闻和AI投资顾问。',
                        'ja-JP': 'UniverseOS – 仮想通貨取引所、ショート動画、グローバルニュース、AI投資アドバイザーを備えた究極のWeb3ソーシャルネットワーク。'
                    };
                    metaDesc.content = descriptions[currentLang] || descriptions['pt-BR'];
                }

                console.log(`🌐 Idioma alterado para: ${currentLang}`);
            };

            langSelect.onchange = () => {
                currentLang = langSelect.value;
                localStorage.setItem('lang', currentLang);
                applyTranslations();
            };

            applyTranslations();
        })();

        /* ================================================================
           ██████████████████████████████████████████████████████████████
           █ BACKEND EMBUTIDO (IndexedDB + API REST simulada)          █
           ██████████████████████████████████████████████████████████████
           ================================================================ */
        (() => {
            const DB_NAME = 'UniverseOS_DB';
            const DB_VERSION = 3;
            let db = null;

            // Abrir/Criar banco de dados
            const openDB = () => new Promise((resolve, reject) => {
                const req = indexedDB.open(DB_NAME, DB_VERSION);

                req.onupgradeneeded = e => {
                    const database = e.target.result;

                    // Users
                    if (!database.objectStoreNames.contains('users')) {
                        const users = database.createObjectStore('users', { keyPath: 'wallet' });
                        users.createIndex('username', 'username', { unique: false });
                        users.createIndex('created', 'created', { unique: false });
                    }

                    // Posts
                    if (!database.objectStoreNames.contains('posts')) {
                        const posts = database.createObjectStore('posts', { keyPath: 'id', autoIncrement: true });
                        posts.createIndex('author', 'author', { unique: false });
                        posts.createIndex('created', 'created', { unique: false });
                        posts.createIndex('category', 'category', { unique: false });
                    }

                    // Articles
                    if (!database.objectStoreNames.contains('articles')) {
                        const articles = database.createObjectStore('articles', { keyPath: 'id', autoIncrement: true });
                        articles.createIndex('author', 'author', { unique: false });
                        articles.createIndex('created', 'created', { unique: false });
                        articles.createIndex('category', 'category', { unique: false });
                    }

                    // Messages
                    if (!database.objectStoreNames.contains('messages')) {
                        const msgs = database.createObjectStore('messages', { keyPath: 'id', autoIncrement: true });
                        msgs.createIndex('from', 'from', { unique: false });
                        msgs.createIndex('to', 'to', { unique: false });
                        msgs.createIndex('timestamp', 'timestamp', { unique: false });
                    }

                    // Trades
                    if (!database.objectStoreNames.contains('trades')) {
                        const trades = database.createObjectStore('trades', { keyPath: 'id', autoIncrement: true });
                        trades.createIndex('user', 'user', { unique: false });
                        trades.createIndex('timestamp', 'timestamp', { unique: false });
                    }

                    // Followers
                    if (!database.objectStoreNames.contains('followers')) {
                        const follows = database.createObjectStore('followers', { keyPath: 'id', autoIncrement: true });
                        follows.createIndex('follower', 'follower', { unique: false });
                        follows.createIndex('following', 'following', { unique: false });
                    }

                    // Notifications
                    if (!database.objectStoreNames.contains('notifications')) {
                        const notifs = database.createObjectStore('notifications', { keyPath: 'id', autoIncrement: true });
                        notifs.createIndex('user', 'user', { unique: false });
                        notifs.createIndex('read', 'read', { unique: false });
                    }

                    // Analytics
                    if (!database.objectStoreNames.contains('analytics')) {
                        const analytics = database.createObjectStore('analytics', { keyPath: 'id', autoIncrement: true });
                        analytics.createIndex('event', 'event', { unique: false });
                        analytics.createIndex('timestamp', 'timestamp', { unique: false });
                    }
                };

                req.onsuccess = e => { db = e.target.result; resolve(db); };
                req.onerror = e => reject(e.target.error);
            });

            // CRUD genérico
            const dbAdd = (store, data) => new Promise((resolve, reject) => {
                const tx = db.transaction(store, 'readwrite');
                const req = tx.objectStore(store).add({ ...data, created: Date.now() });
                req.onsuccess = () => resolve(req.result);
                req.onerror = () => reject(req.error);
            });

            const dbGetAll = (store, index, range) => new Promise((resolve, reject) => {
                const tx = db.transaction(store, 'readonly');
                const objectStore = tx.objectStore(store);
                const req = index
                    ? objectStore.index(index).getAll(range)
                    : objectStore.getAll();
                req.onsuccess = () => resolve(req.result);
                req.onerror = () => reject(req.error);
            });

            const dbGet = (store, key) => new Promise((resolve, reject) => {
                const tx = db.transaction(store, 'readonly');
                const req = tx.objectStore(store).get(key);
                req.onsuccess = () => resolve(req.result);
                req.onerror = () => reject(req.error);
            });

            const dbUpdate = (store, data) => new Promise((resolve, reject) => {
                const tx = db.transaction(store, 'readwrite');
                const req = tx.objectStore(store).put(data);
                req.onsuccess = () => resolve(req.result);
                req.onerror = () => reject(req.error);
            });

            const dbDelete = (store, key) => new Promise((resolve, reject) => {
                const tx = db.transaction(store, 'readwrite');
                const req = tx.objectStore(store).delete(key);
                req.onsuccess = () => resolve();
                req.onerror = () => reject(req.error);
            });

            const dbCount = store => new Promise((resolve, reject) => {
                const tx = db.transaction(store, 'readonly');
                const req = tx.objectStore(store).count();
                req.onsuccess = () => resolve(req.result);
                req.onerror = () => reject(req.error);
            });

            // API REST simulada
            window.BackendAPI = {
                // Users
                createUser: async userData => await dbAdd('users', userData),
                getUser: async wallet => await dbGet('users', wallet),
                updateUser: async userData => await dbUpdate('users', userData),
                getAllUsers: async () => await dbGetAll('users'),

                // Posts
                createPost: async postData => {
                    const id = await dbAdd('posts', postData);
                    await dbAdd('analytics', { event: 'post_created', data: { postId: id }, timestamp: Date.now() });
                    return id;
                },
                getAllPosts: async () => {
                    const posts = await dbGetAll('posts');
                    return posts.sort((a, b) => b.created - a.created);
                },
                getPostsByAuthor: async author => await dbGetAll('posts', 'author', IDBKeyRange.only(author)),
                deletePost: async id => await dbDelete('posts', id),
                updatePost: async postData => await dbUpdate('posts', postData),

                // Articles
                createArticle: async articleData => {
                    const id = await dbAdd('articles', articleData);
                    await dbAdd('analytics', { event: 'article_published', data: { articleId: id }, timestamp: Date.now() });
                    return id;
                },
                getAllArticles: async () => {
                    const articles = await dbGetAll('articles');
                    return articles.sort((a, b) => b.created - a.created);
                },
                deleteArticle: async id => await dbDelete('articles', id),
                updateArticle: async articleData => await dbUpdate('articles', articleData),

                // Messages
                sendMessage: async msgData => await dbAdd('messages', msgData),
                getMessages: async (from, to) => {
                    const all = await dbGetAll('messages');
                    return all.filter(m => (m.from === from && m.to === to) || (m.from === to && m.to === from))
                              .sort((a, b) => a.timestamp - b.timestamp);
                },

                // Trades
                recordTrade: async tradeData => {
                    const id = await dbAdd('trades', tradeData);
                    await dbAdd('analytics', { event: 'trade_executed', data: tradeData, timestamp: Date.now() });
                    return id;
                },
                getTradeHistory: async user => {
                    const trades = await dbGetAll('trades');
                    return trades.filter(t => t.user === user).sort((a, b) => b.timestamp - a.timestamp);
                },

                // Followers
                follow: async (follower, following) => await dbAdd('followers', { follower, following }),
                unfollow: async (follower, following) => {
                    const all = await dbGetAll('followers');
                    const match = all.find(f => f.follower === follower && f.following === following);
                    if (match) await dbDelete('followers', match.id);
                },
                getFollowers: async user => {
                    const all = await dbGetAll('followers');
                    return all.filter(f => f.following === user);
                },
                getFollowing: async user => {
                    const all = await dbGetAll('followers');
                    return all.filter(f => f.follower === user);
                },

                // Notifications
                addNotification: async notifData => await dbAdd('notifications', notifData),
                getNotifications: async user => {
                    const all = await dbGetAll('notifications');
                    return all.filter(n => n.user === user).sort((a, b) => b.created - a.created);
                },
                markRead: async id => {
                    const n = await dbGet('notifications', id);
                    if (n) { n.read = true; await dbUpdate('notifications', n); }
                },

                // Analytics
                trackEvent: async (event, data) => await dbAdd('analytics', { event, data, timestamp: Date.now() }),
                getAnalytics: async () => await dbGetAll('analytics'),
                getAnalyticsByEvent: async event => {
                    const all = await dbGetAll('analytics');
                    return all.filter(a => a.event === event);
                },
                getStats: async () => ({
                    users: await dbCount('users'),
                    posts: await dbCount('posts'),
                    articles: await dbCount('articles'),
                    messages: await dbCount('messages'),
                    trades: await dbCount('trades'),
                    followers: await dbCount('followers'),
                    notifications: await dbCount('notifications'),
                }),

                // Export / Import
                exportAll: async () => {
                    const data = {};
                    const stores = ['users', 'posts', 'articles', 'messages', 'trades', 'followers', 'notifications', 'analytics'];
                    for (const store of stores) {
                        data[store] = await dbGetAll(store);
                    }
                    return data;
                },
                importAll: async data => {
                    for (const [store, items] of Object.entries(data)) {
                        for (const item of items) {
                            try { await dbAdd(store, item); } catch (_) { await dbUpdate(store, item); }
                        }
                    }
                }
            };

            // Inicializar DB
            openDB().then(() => {
                console.log('✅ IndexedDB (Backend) inicializado com sucesso');
                // Botões de export/import
                const dbControls = document.createElement('div');
                dbControls.style.cssText = 'position:fixed;bottom:3rem;left:.5rem;display:flex;flex-direction:column;gap:.3rem;z-index:600';
                dbControls.innerHTML = `
                    <button id="db-export" class="bs" style="font-size:.65rem;padding:.25rem .4rem">💾 Export DB</button>
                    <button id="db-import" class="bs" style="font-size:.65rem;padding:.25rem .4rem">📂 Import DB</button>
                    <button id="db-stats" class="bs" style="font-size:.65rem;padding:.25rem .4rem">📊 DB Stats</button>
                `;
                document.body.appendChild(dbControls);

                $('#db-export').onclick = async () => {
                    const data = await BackendAPI.exportAll();
                    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
                    const a = document.createElement('a');
                    a.href = URL.createObjectURL(blob);
                    a.download = `universeos-backup-${Date.now()}.json`;
                    a.click();
                    addNotification('Backup exportado com sucesso! 💾', 'success');
                };

                $('#db-import').onclick = () => {
                    const inp = document.createElement('input');
                    inp.type = 'file';
                    inp.accept = '.json';
                    inp.onchange = async e => {
                        const file = e.target.files[0];
                        if (!file) return;
                        const text = await file.text();
                        const data = JSON.parse(text);
                        await BackendAPI.importAll(data);
                        addNotification('Backup importado com sucesso! 📂', 'success');
                    };
                    inp.click();
                };

                $('#db-stats').onclick = async () => {
                    const stats = await BackendAPI.getStats();
                    alert(`📊 Estatísticas do Banco de Dados:\n\n` +
                        `👤 Usuários: ${stats.users}\n` +
                        `📝 Posts: ${stats.posts}\n` +
                        `📄 Artigos: ${stats.articles}\n` +
                        `💬 Mensagens: ${stats.messages}\n` +
                        `📈 Trades: ${stats.trades}\n` +
                        `👥 Seguidores: ${stats.followers}\n` +
                        `🔔 Notificações: ${stats.notifications}`
                    );
                };
            }).catch(e => console.error('❌ Erro ao abrir IndexedDB:', e));
        })();

        /* ================================================================
           ██████████████████████████████████████████████████████████████
           █ IA AVANÇADA – ANÁLISE TÉCNICA + SENTIMENTO + PREVISÃO     █
           ██████████████████████████████████████████████████████████████
           ================================================================ */
        (() => {
            // Substituir a IA básica por uma avançada
            const aiChat = $('#ai-chat');
            const aiInput = $('#ai-input');
            const aiSend = $('#ai-send');

            // Limpar chat anterior e adicionar welcome avançado
            aiChat.innerHTML = '';
            const addAiMsg = (role, text) => {
                const d = document.createElement('div');
                d.className = `ai-msg ${role === 'user' ? 'ai-user' : 'ai-bot'}`;
                // Suportar HTML no bot
                if (role === 'bot') {
                    d.innerHTML = text;
                } else {
                    d.textContent = text;
                }
                aiChat.appendChild(d);
                aiChat.scrollTop = aiChat.scrollHeight;
            };

            addAiMsg('bot', `
                <strong>🤖 UniverseOS AI – Consultor Avançado</strong><br><br>
                Capacidades:<br>
                • 📊 <strong>Análise Técnica</strong> (RSI, médias móveis, suporte/resistência)<br>
                • 📈 <strong>Previsão de preço</strong> (baseada em tendências)<br>
                • 🧠 <strong>Análise de sentimento</strong> de mercado<br>
                • 💰 <strong>Recomendações de portfólio</strong><br>
                • 🔮 <strong>Comparação entre moedas</strong><br><br>
                <em>⚠️ NÃO é aconselhamento financeiro. DYOR.</em><br><br>
                Experimente: "Analise o Bitcoin" ou "Compare ETH vs SOL"
            `);

            // -------------------- FUNÇÕES DE ANÁLISE --------------------

            /**
             * Calcula RSI simplificado a partir de sparkline
             */
            const calculateRSI = (prices, period = 14) => {
                if (!prices || prices.length < period + 1) return 50;
                const changes = [];
                for (let i = 1; i < prices.length; i++) {
                    changes.push(prices[i] - prices[i - 1]);
                }
                const recent = changes.slice(-period);
                let gains = 0, losses = 0;
                recent.forEach(c => {
                    if (c > 0) gains += c;
                    else losses += Math.abs(c);
                });
                const avgGain = gains / period;
                const avgLoss = losses / period;
                if (avgLoss === 0) return 100;
                const rs = avgGain / avgLoss;
                return 100 - (100 / (1 + rs));
            };

            /**
             * Calcula média móvel simples
             */
            const calculateSMA = (prices, period) => {
                if (!prices || prices.length < period) return null;
                const slice = prices.slice(-period);
                return slice.reduce((a, b) => a + b, 0) / period;
            };

            /**
             * Detecta suporte e resistência
             */
            const findSupportResistance = prices => {
                if (!prices || prices.length < 10) return { support: 0, resistance: 0 };
                const sorted = [...prices].sort((a, b) => a - b);
                const low10 = sorted.slice(0, Math.ceil(sorted.length * 0.1));
                const high10 = sorted.slice(-Math.ceil(sorted.length * 0.1));
                return {
                    support: low10.reduce((a, b) => a + b, 0) / low10.length,
                    resistance: high10.reduce((a, b) => a + b, 0) / high10.length
                };
            };

            /**
             * Análise de sentimento simplificada
             */
            const analyzeSentiment = coin => {
                const ch1h = coin.price_change_percentage_1h_in_currency || 0;
                const ch24h = coin.price_change_percentage_24h || 0;
                const ch7d = coin.price_change_percentage_7d_in_currency || 0;

                let score = 0;
                if (ch1h > 0) score += 1; else score -= 1;
                if (ch24h > 0) score += 2; else score -= 2;
                if (ch7d > 0) score += 3; else score -= 3;

                if (score >= 4) return { label: '🟢 Muito Positivo', score, emoji: '🚀' };
                if (score >= 2) return { label: '🟢 Positivo', score, emoji: '📈' };
                if (score >= 0) return { label: '🟡 Neutro', score, emoji: '➡️' };
                if (score >= -2) return { label: '🔴 Negativo', score, emoji: '📉' };
                return { label: '🔴 Muito Negativo', score, emoji: '⚠️' };
            };

            /**
             * Previsão de preço simplificada (tendência linear)
             */
            const predictPrice = (prices, days = 7) => {
                if (!prices || prices.length < 10) return null;
                const n = prices.length;
                let sumX = 0, sumY = 0, sumXY = 0, sumXX = 0;
                prices.forEach((y, x) => {
                    sumX += x; sumY += y; sumXY += x * y; sumXX += x * x;
                });
                const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
                const intercept = (sumY - slope * sumX) / n;
                const predicted = slope * (n + days) + intercept;
                const confidence = Math.min(85, Math.max(15, 50 + (Math.abs(slope) / prices[prices.length - 1]) * 1000));
                return { predicted, slope, confidence: confidence.toFixed(0) };
            };

            /**
             * Gera análise técnica completa para uma moeda
             */
            const generateFullAnalysis = coin => {
                const sparkline = coin.sparkline_in_7d?.price || [];
                const rsi = calculateRSI(sparkline);
                const sma7 = calculateSMA(sparkline, Math.min(7, sparkline.length));
                const sma25 = calculateSMA(sparkline, Math.min(25, sparkline.length));
                const { support, resistance } = findSupportResistance(sparkline);
                const sentiment = analyzeSentiment(coin);
                const prediction = predictPrice(sparkline);
                const ch1h = coin.price_change_percentage_1h_in_currency || 0;
                const ch24h = coin.price_change_percentage_24h || 0;
                const ch7d = coin.price_change_percentage_7d_in_currency || 0;

                let rsiSignal = '➡️ Neutro';
                if (rsi > 70) rsiSignal = '🔴 Sobrecomprado (possível correção)';
                else if (rsi < 30) rsiSignal = '🟢 Sobrevendido (possível recuperação)';
                else if (rsi > 50) rsiSignal = '🟢 Tendência de alta';
                else rsiSignal = '🔴 Tendência de baixa';

                let smaSignal = '➡️ Sem sinal';
                if (sma7 && sma25) {
                    smaSignal = sma7 > sma25 ? '🟢 Golden Cross (alta)' : '🔴 Death Cross (baixa)';
                }

                return `
                    <strong>📊 Análise Técnica: ${coin.name} (${coin.symbol.toUpperCase()})</strong><br><br>
                    
                    <strong>💵 Preço Atual:</strong> $${coin.current_price.toLocaleString()}<br>
                    <strong>📈 Market Cap:</strong> $${(coin.market_cap / 1e9).toFixed(2)}B<br>
                    <strong>📊 Volume 24h:</strong> $${(coin.total_volume / 1e6).toFixed(1)}M<br><br>
                    
                    <strong>📉 Variação:</strong><br>
                    • 1h: <span style="color:${ch1h >= 0 ? 'var(--ok)' : 'var(--err)'}">${ch1h >= 0 ? '+' : ''}${ch1h.toFixed(2)}%</span><br>
                    • 24h: <span style="color:${ch24h >= 0 ? 'var(--ok)' : 'var(--err)'}">${ch24h >= 0 ? '+' : ''}${ch24h.toFixed(2)}%</span><br>
                    • 7d: <span style="color:${ch7d >= 0 ? 'var(--ok)' : 'var(--err)'}">${ch7d >= 0 ? '+' : ''}${ch7d.toFixed(2)}%</span><br><br>
                    
                    <strong>📐 Indicadores Técnicos:</strong><br>
                    • RSI (14): <strong>${rsi.toFixed(1)}</strong> → ${rsiSignal}<br>
                    • SMA 7: $${sma7 ? sma7.toFixed(2) : 'N/A'}<br>
                    • SMA 25: $${sma25 ? sma25.toFixed(2) : 'N/A'}<br>
                    • Sinal SMA: ${smaSignal}<br>
                    • Suporte: <span style="color:var(--ok)">$${support.toFixed(2)}</span><br>
                    • Resistência: <span style="color:var(--err)">$${resistance.toFixed(2)}</span><br><br>
                    
                    <strong>🧠 Sentimento:</strong> ${sentiment.label} ${sentiment.emoji}<br><br>
                    
                    ${prediction ? `
                    <strong>🔮 Previsão (7 dias):</strong><br>
                    • Preço estimado: <strong>$${prediction.predicted.toFixed(2)}</strong><br>
                    • Tendência: ${prediction.slope > 0 ? '📈 Alta' : '📉 Baixa'}<br>
                    • Confiança: ${prediction.confidence}%<br><br>
                    ` : ''}
                    
                    <strong>💡 Recomendação:</strong><br>
                    ${rsi < 30 && sentiment.score > 0 ? '🟢 <strong>Potencial oportunidade de compra</strong> – RSI sobrevendido com sentimento positivo.' :
                      rsi > 70 && sentiment.score < 0 ? '🔴 <strong>Considere realizar lucros</strong> – RSI sobrecomprado com sentimento negativo.' :
                      '🟡 <strong>Manter posição / Observar</strong> – Indicadores mistos.'}
                    <br><br>
                    <em style="color:var(--m)">⚠️ Esta análise é baseada em dados históricos e indicadores técnicos. NÃO constitui aconselhamento financeiro profissional. Sempre faça sua própria pesquisa (DYOR) antes de investir.</em>
                `;
            };

            /**
             * Compara duas moedas
             */
            const compareCryptos = (coin1, coin2) => {
                const s1 = analyzeSentiment(coin1);
                const s2 = analyzeSentiment(coin2);
                const sparkline1 = coin1.sparkline_in_7d?.price || [];
                const sparkline2 = coin2.sparkline_in_7d?.price || [];
                const rsi1 = calculateRSI(sparkline1);
                const rsi2 = calculateRSI(sparkline2);
                const pred1 = predictPrice(sparkline1);
                const pred2 = predictPrice(sparkline2);

                return `
                    <strong>⚔️ Comparação: ${coin1.name} vs ${coin2.name}</strong><br><br>
                    <table style="width:100%;font-size:.82rem;border-collapse:collapse">
                        <tr style="border-bottom:1px solid var(--m)">
                            <td></td>
                            <td style="color:var(--p);font-weight:600">${coin1.symbol.toUpperCase()}</td>
                            <td style="color:var(--acc);font-weight:600">${coin2.symbol.toUpperCase()}</td>
                        </tr>
                        <tr><td>Preço</td><td>$${coin1.current_price.toLocaleString()}</td><td>$${coin2.current_price.toLocaleString()}</td></tr>
                        <tr><td>Market Cap</td><td>$${(coin1.market_cap/1e9).toFixed(1)}B</td><td>$${(coin2.market_cap/1e9).toFixed(1)}B</td></tr>
                        <tr><td>24h</td><td style="color:${(coin1.price_change_percentage_24h||0)>=0?'var(--ok)':'var(--err)'}">${(coin1.price_change_percentage_24h||0).toFixed(2)}%</td><td style="color:${(coin2.price_change_percentage_24h||0)>=0?'var(--ok)':'var(--err)'}">${(coin2.price_change_percentage_24h||0).toFixed(2)}%</td></tr>
                        <tr><td>RSI</td><td>${rsi1.toFixed(1)}</td><td>${rsi2.toFixed(1)}</td></tr>
                        <tr><td>Sentimento</td><td>${s1.emoji}</td><td>${s2.emoji}</td></tr>
                        ${pred1 && pred2 ? `<tr><td>Previsão 7d</td><td>$${pred1.predicted.toFixed(2)}</td><td>$${pred2.predicted.toFixed(2)}</td></tr>` : ''}
                    </table><br>
                    <strong>🏆 Vencedor:</strong> ${s1.score > s2.score ? coin1.name : s2.score > s1.score ? coin2.name : 'Empate'}<br><br>
                    <em style="color:var(--m)">⚠️ NÃO é aconselhamento financeiro. DYOR.</em>
                `;
            };

            /**
             * Gera recomendação de portfólio
             */
            const generatePortfolioAdvice = () => {
                if (!allCoins.length) return '<p>Carregue os dados de mercado primeiro (vá para Corretora).</p>';
                const top10 = allCoins.slice(0, 10);
                const scored = top10.map(c => {
                    const s = analyzeSentiment(c);
                    const sparkline = c.sparkline_in_7d?.price || [];
                    const rsi = calculateRSI(sparkline);
                    let score = s.score;
                    if (rsi < 40) score += 2;
                    if (rsi > 60) score -= 1;
                    if (c.market_cap > 100e9) score += 1; // large cap bonus
                    return { ...c, finalScore: score };
                }).sort((a, b) => b.finalScore - a.finalScore);

                const top3 = scored.slice(0, 3);
                const allocations = [50, 30, 20];

                return `
                    <strong>💼 Sugestão de Portfólio (${new Date().toLocaleDateString()}):</strong><br><br>
                    ${top3.map((c, i) => `
                        <strong>${allocations[i]}%</strong> – ${c.name} (${c.symbol.toUpperCase()}) – $${c.current_price.toLocaleString()}<br>
                        <span style="font-size:.75rem;color:var(--m)">Score: ${c.finalScore} | RSI: ${calculateRSI(c.sparkline_in_7d?.price || []).toFixed(0)} | Sentimento: ${analyzeSentiment(c).label}</span><br><br>
                    `).join('')}
                    <strong>📌 Estratégia:</strong> DCA (Dollar Cost Averaging) – investir pequenas quantias regularmente.<br><br>
                    <em style="color:var(--m)">⚠️ NÃO é aconselhamento financeiro. Diversifique e nunca invista mais do que pode perder.</em>
                `;
            };

            // -------------------- PROCESSADOR DE COMANDOS IA --------------------

            const processAiQuery = query => {
                const q = query.toLowerCase();

                // Análise de moeda específica
                const analyzeMatch = q.match(/(?:analis|analyz|análise|analyse)\w*\s+(?:o\s+|a\s+|the\s+)?(\w+)/i);
                if (analyzeMatch) {
                    const name = analyzeMatch[1].toLowerCase();
                    const coin = allCoins.find(c =>
                        c.name.toLowerCase() === name ||
                        c.symbol.toLowerCase() === name ||
                        c.id.toLowerCase() === name
                    );
                    if (coin) return generateFullAnalysis(coin);
                    return `Moeda "${analyzeMatch[1]}" não encontrada. Tente com o nome completo ou símbolo.`;
                }

                // Comparação
                const compareMatch = q.match(/compar\w*\s+(\w+)\s+(?:vs|versus|com|with|e|and|と)\s+(\w+)/i);
                if (compareMatch) {
                    const c1 = allCoins.find(c => c.name.toLowerCase() === compareMatch[1].toLowerCase() || c.symbol.toLowerCase() === compareMatch[1].toLowerCase());
                    const c2 = allCoins.find(c => c.name.toLowerCase() === compareMatch[2].toLowerCase() || c.symbol.toLowerCase() === compareMatch[2].toLowerCase());
                    if (c1 && c2) return compareCryptos(c1, c2);
                    return `Não encontrei uma ou ambas as moedas. Tente: "Compare BTC vs ETH"`;
                }

                // Portfólio
                if (q.includes('portf') || q.includes('portfolio') || q.includes('recomend') || q.includes('suggest')) {
                    return generatePortfolioAdvice();
                }

                // Melhor investimento
                if (q.includes('melhor') || q.includes('best') || q.includes('top')) {
                    const best = allCoins.slice(0, 5).reduce((a, b) =>
                        (b.price_change_percentage_24h || 0) > (a.price_change_percentage_24h || 0) ? b : a
                    );
                    return generateFullAnalysis(best);
                }

                // Preço de uma moeda
                const priceMatch = q.match(/(?:preço|price|valor|value|quanto|how much)\s+(?:do|da|de|of|the)?\s*(\w+)/i);
                if (priceMatch) {
                    const coin = allCoins.find(c =>
                        c.name.toLowerCase() === priceMatch[1].toLowerCase() ||
                        c.symbol.toLowerCase() === priceMatch[1].toLowerCase()
                    );
                    if (coin) {
                        return `<strong>${coin.name}</strong>: $${coin.current_price.toLocaleString()} (24h: ${(coin.price_change_percentage_24h || 0).toFixed(2)}%)`;
                    }
                }

                // RSI de uma moeda
                if (q.includes('rsi')) {
                    const rsiMatch = q.match(/rsi\s+(?:do|da|de|of|the)?\s*(\w+)/i);
                    if (rsiMatch) {
                        const coin = allCoins.find(c =>
                            c.name.toLowerCase() === rsiMatch[1].toLowerCase() ||
                            c.symbol.toLowerCase() === rsiMatch[1].toLowerCase()
                        );
                        if (coin) {
                            const rsi = calculateRSI(coin.sparkline_in_7d?.price || []);
                            return `RSI (14) de ${coin.name}: <strong>${rsi.toFixed(1)}</strong> ${rsi > 70 ? '🔴 Sobrecomprado' : rsi < 30 ? '🟢 Sobrevendido' : '➡️ Neutro'}`;
                        }
                    }
                }

                // Fallback – tentar Gemini API
                return null; // null = tentar API externa
            };

            // -------------------- HANDLER PRINCIPAL --------------------

            const AI_API_KEY = 'YOUR_GEMINI_API_KEY';
            const AI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${AI_API_KEY}`;

            aiSend.onclick = async () => {
                const q = aiInput.value.trim();
                if (!q) return;
                addAiMsg('user', q);
                aiInput.value = '';

                // Tentar análise local primeiro
                const localResult = processAiQuery(q);

                if (localResult) {
                    addAiMsg('bot', localResult);
                    return;
                }

                // Se não houver resultado local, tentar Gemini
                addAiMsg('bot', '<em style="animation:pulse 1s infinite">🤖 Analisando...</em>');

                const top10 = allCoins.slice(0, 10).map(c =>
                    `${c.name}(${c.symbol}): $${c.current_price} (24h: ${(c.price_change_percentage_24h || 0).toFixed(2)}%, RSI: ${calculateRSI(c.sparkline_in_7d?.price || []).toFixed(0)})`
                ).join(', ');

                const systemPrompt = `Você é um analista financeiro especializado em criptomoedas. Responda em ${document.documentElement.lang === 'en-US' ? 'inglês' : document.documentElement.lang === 'es-ES' ? 'espanhol' : document.documentElement.lang === 'fr-FR' ? 'francês' : document.documentElement.lang === 'de-DE' ? 'alemão' : document.documentElement.lang === 'zh-CN' ? 'chinês' : document.documentElement.lang === 'ja-JP' ? 'japonês' : 'português'} de forma clara e objetiva. Dados atuais do mercado: ${top10}. Sempre inclua aviso de que não é aconselhamento financeiro.`;

                try {
                    const r = await fetch(AI_ENDPOINT, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            contents: [{ parts: [{ text: systemPrompt + '\n\n' + q }] }],
                            generationConfig: { temperature: 0.7, maxOutputTokens: 1000 }
                        })
                    });
                    if (!r.ok) throw new Error(r.status);
                    const d = await r.json();
                    const answer = d.candidates?.[0]?.content?.parts?.[0]?.text || t('noResults');

                    // Remover "Analisando..."
                    aiChat.removeChild(aiChat.lastChild);
                    addAiMsg('bot', answer.replace(/\n/g, '<br>'));
                } catch (e) {
                    console.error('Gemini API error:', e);
                    aiChat.removeChild(aiChat.lastChild);

                    // Fallback final
                    const fallback = generatePortfolioAdvice();
                    addAiMsg('bot', `<em>API externa indisponível. Usando análise local:</em><br><br>${fallback}`);
                }
            };

            aiInput.onkeydown = e => { if (e.key === 'Enter') aiSend.click(); };

        })();