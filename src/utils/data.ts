import type { IAppNavigation, IDocsList } from '@utils/types';

export const appNavigation: IAppNavigation[] = [
	{ title: 'Головна', path: '/' },
	{ title: 'Контакти', path: '/#contacts' },
	{
		title: 'Електроенергія',
		group: [
			{ title: 'Договори', path: '/electricity-contracts' },
			{ title: 'Врегулювання спорів', path: '/electricity-dispute-resolution' },
			{ title: 'Нормативна база', path: '/electricity-laws' },
			{
				title: 'Про вплив на довкілля',
				path: '/electricity-environmental-impact',
			},
			{ title: 'Інші документи', path: '/other-docs' },
		],
	},
	{
		title: 'Природний газ',
		group: [
			{ title: 'Договори', path: '/gas-contracts' },
			{ title: 'Врегулювання спорів', path: '/gas-dispute-resolution' },
			{ title: 'Загальні умови', path: '/gas-general-conditions' },
			{ title: 'Нормативна база', path: '/gas-laws' },
		],
	},
];

export const electricityContracts: IDocsList[] = [
	{
		title: 'Заява-приєднання',
		path:
			'publichnyj_dogovir_pro_postachannya_elektrychnoyi_energiyi_spozhyvachu.doc',
	},
	{
		title: 'Публічний договір про постачання',
		path: 'zayava_pryyednannya_EE-Upsilum.doc',
	},
];

export const electricityDisputeResolution: IDocsList[] = [
	{
		title: 'ЗАКОН УКРАЇНИ Про доступ до публічної інформації',
		path: 'http://zakon.rada.gov.ua/laws/show/2939-17',
	},
	{
		title: 'ЗАКОН УКРАЇНИ Про ліцензування видів господарської діяльності',
		path: 'http://zakon2.rada.gov.ua/laws/show/222-19/page',
	},
	{
		title: 'ЗАКОН УКРАЇНИ Про захист персональних даних',
		path: 'http://zakon.rada.gov.ua/laws/show/2297-17',
	},
	{
		title: 'ЗАКОН УКРАЇНИ Про захист прав споживачів',
		path: 'http://zakon.rada.gov.ua/laws/show/1023-12',
	},
	{
		title: 'ЗАКОН УКРАЇНИ Про ціни і ціноутворення',
		path: 'http://zakon.rada.gov.ua/laws/show/5007-17',
	},
	{
		title: 'Кодекс законів про працю України',
		path: 'http://zakon.rada.gov.ua/laws/show/322-08',
	},
];

export const lawsSupplyOfElectricEnergy: IDocsList[] = [
	{
		title:
			'ЗАКОН УКРАЇНИ Про Національну комісію, що здійснює державне' +
			' регулювання у сферах енергетики та комунальних послуг',
		path: 'http://zakon2.rada.gov.ua/laws/show/1540-19',
	},
	{
		title: 'ЗАКОН УКРАЇНИ Про ринок електричної енергії',
		path: 'http://zakon2.rada.gov.ua/laws/show/2019-19/print1475741107613080',
	},
	{
		title:
			'ЗАКОН УКРАЇНИ «Про особливості\n' +
			'\tдоступу до інформації у сферах постачання електричної енергії, природного\n' +
			'газу, теплопостачання, централізованого постачання гарячої води,\n' +
			'\tцентралізованого питного водопостачання та водовідведення»',
		path: 'http://zakon2.rada.gov.ua/laws/show/887-19',
	},
];

export const resolutionsOfTheNcrecp: IDocsList[] = [
	{
		title: 'ПОСТАНОВА НКРЕКП від 14.03.2018 №307 «Правила ринку»',
		path: 'http://zakon.rada.gov.ua/laws/show/v0307874-18',
	},
	{
		title:
			'ПОСТАНОВА НКРЕКП від 14.03.2018 №308 Про затвервердження Правил ринку «на добу наперед» та внутрішньодобового ринку»\n',
		path: 'http://zakon.rada.gov.ua/laws/show/v0308874-18',
	},
	{
		title:
			'ПОСТАНОВА НКРЕКП від 14.03.2018 №309 «Про затвердження Кодексу системи передачі»',
		path: 'http://zakon.rada.gov.ua/laws/show/v0309874-18',
	},
	{
		title:
			'ПОСТАНОВА НКРЕКП від 14.03.2018 №310 «Про затвердження Кодексу систем розподілу»',
		path: 'http://zakon3.rada.gov.ua/laws/show/v0310874-18',
	},
	{
		title:
			'ПОСТАНОВА НКРЕКП від 27.12.2017 № 1469 Ліцензійні умови провадження господарської діяльності з постачання електричної енергії споживачу, затверджені постановою Національної комісії, що здійснює державне регулювання у сферах енергетики та комунальних послуг',
		path: 'http://zakon3.rada.gov.ua/laws/show/v1469874-17',
	},
	{
		title:
			'ПОСТАНОВА НКРЕКП від 14.03.2018 №311 «Про затвердження Кодексу комерційного обліку електричної енергії',
		path: 'http://zakon3.rada.gov.ua/laws/show/v0311874-18',
	},
	{
		title:
			'ПОСТАНОВА НКРЕКП від 14.03.2018 №312 «Про затвердження Правил роздрібного ринку електричної енергії»',
		path: 'http://zakon3.rada.gov.ua/laws/show/v0312874-18',
	},
];

export const otherDocs = [
	{
		title: 'Повідомлення про загрозу електробезпеки',
		path: 'Повідомлення_про_загрозу_електробезпеки.pdf',
	},
];

export const gasContracts = [
	{
		title: 'АНКЕТА-контрагента',
		path: 'АНКЕТА-контрагента.docx',
	},
	{
		title: 'Договір постачання газу',
		path: 'Договір_постачання_газу_Апсилум_Трайдинг.docx',
	},
];

export const gasDisputeResolution = [
	{
		title: 'Врегулювання спрорів',
		path: 'Врегулювання-спрорів.docx',
	},
];

export const gasGeneralConditions = [
	{
		title: 'Права та обов’язки',
		path: 'Права-та-обовязки.docx',
	},
	{
		title: 'Загальний порядок постачання природного газу споживачам',
		path: 'Загальний_порядок_постачання_природного_газу_споживачам.docx',
	},
	{
		title: 'Порядок зміни постачальника споживачем',
		path: 'Порядок_зміни_постачальника_споживачем.docx',
	},
];

export const gasLaws = [
	{
		title: 'Закон України «Про ринок природного газу»',
		path: 'http://zakon2.rada.gov.ua/laws/show/329-19',
	},
	{
		title: 'Правила постачання природного газу',
		path: 'http://zakon5.rada.gov.ua/laws/show/z1382-15',
	},
	{
		title: 'Кодекс газорозподільних систем',
		path: 'http://zakon5.rada.gov.ua/laws/show/z1379-15',
	},
	{
		title: 'Кодекс газотранспортної системи',
		path: 'http://zakon.rada.gov.ua/laws/show/z1378-15',
	},
	{
		title:
			'Мінімальні стандарти та вимоги до якості обслуговування споживачів та постачання природного газу',
		path: 'http://zakon.rada.gov.ua/laws/show/v1156874-17',
	},
	{
		title: 'Права та обов’язки Постачальника природного газу',
		path: 'http://www.nerc.gov.ua/?id=18969',
	},
	{
		title: 'Права і обов’язки Споживача природного газу',
		path: 'http://www.nerc.gov.ua/?id=18966',
	},
	{
		title:
			'Закон України «Про особливості доступу до інформації у сферах постачання електричної енергії, природного газу, теплопостачання, централізованого постачання гарячої води, централізованого питного водопостачання та водовідведення»\n',
		path: 'https://zakon.rada.gov.ua/laws/show/887-19#Text',
	},
	{
		title:
			'Закон України «Про Національну комісію, що здійснює державне регулювання у сферах енергетики та комунальних послуг»',
		path: 'https://zakon.rada.gov.ua/laws/show/1540-19#Text',
	},
	{
		title:
			'Порядок пооб’єктового припинення (обмеження) газопостачання споживачам, крім населення, затверджений Постановою КМУ від 08.12.2006 №1687',
		path: 'https://zakon.rada.gov.ua/laws/show/1687-2006-%D0%BF#Text',
	},
	{
		title:
			'Ліцензійні умови провадження господарської діяльності з постачання природного газу, затверджені Постановою НКРЕКП від 16.02.2017 №201',
		path: 'https://zakon.rada.gov.ua/laws/show/v0201874-17#n324',
	},
	{
		title:
			'Постанова НКРЕКП від 24.12.2019 № 3013 «Про встановлення тарифів для ТОВ «ОПЕРАТОР ГТС УКРАЇНИ» на послуги транспортування природного газу для точок входу і точок виходу на регуляторний період 2020-2024 роки»',
		path: 'https://zakon.rada.gov.ua/laws/show/v3013874-19#Text',
	},
	{
		title:
			'Правила безпеки систем газопостачання, затверджені Наказом Міністерства енергетики та вугільної промисловості України від 15.05.2015 №285',
		path: 'https://zakon.rada.gov.ua/laws/show/z0674-15#Text',
	},
];
