import { dictionary, locale, _ } from 'svelte-i18n';

function setupI18n({ withLocale: _locale } = { withLocale: 'nl' }) {
	dictionary.set({
		nl: {
			hero: {
				title: 'FRESH FINANCE PERSPECTIVE',
				subtitle:
					'Op zoek naar interim controller of CFO professionals? ' + 'Wij brengen je finance naar',
				subtitleHighlight: 'the next level',
				button: 'Neem direct contact op',
				buttonSubtitle: 'Kennismaken is altijd GRATIS'
			},
			intro: {
				title: 'Wat biedt Corpor',
				titleHighlight: 'Aid',
				text: 'CorporAid helpt alle soorten ondernemingen met passie en professionaliteit naar een hoger plan. Van kleine zelfstandigen tot beurs genoteerde bedrijven, van start-ups tot gevestigde spelers in de markt, elke organisatie is gebaat bij een frisse financiële blik die alle bestaande processen en communicatielijnen tegen het licht houdt en de verbeterkansen in kaart brengt: CorporAid geeft jouw een Fresh Finance Perspective, om jouw ambities te realiseren.',
				column1: {
					title: 'Fresh Finance Perspective',
					text: 'De visie, doelen en ambities bepalen we door een uitgebreide analyse van de cijfers, processen, systemen en informatiestroom en door in gesprek te gaan met de mensen binnen de organisatie. Hier rolt een plan van aanpak uit met een presentatie van de bevindingen en kansrijke acties. Benieuwd naar wij jou kunnen helpen?',
					button: 'Bekijk Diensten'
				},
				column2: {
					title: 'Interim Controller / part time CFO',
					text: 'Tijdelijk je finance team versterken? Onze finance specialisten met ruime ervaring zorgen voor een vergroot capaciteit en kwaliteit in jou organisatie. Met de juiste inzicht en overzicht worden priorieiten gesteld om snel je informatiestromen te optimaliseren. Benieuwd naar hoe wij dat doen?',
					button: 'Bekijk Diensten'
				},
				column3: {
					title: 'Project Management',
					text: 'Wil jij succesvol zijn, en blijven? Dan moet je als bedrijf inventief, vooruitstrevend en relevant zijn; de beste klantervaring bieden; en data en technologie slim inzetten voor continue verbeteringen. Het is onze grootste passie je daar bij te helpen. Vrijblijvend kennis maken?',
					button: 'Bekijk Diensten'
				}
			},
			onzeDiensten: {
				title: 'Onze diensten',
				text1:
					'Ben jij op zoek naar een tijdelijke/interim controller of CFO? Wij bieden jou de mogelijkheid om snel je finance team te versterken door het tijdelijk opvullen van een vacature. Ook bieden wij projectmanagers die je helpen specifieke projecten tot een succes te maken waarbij draagvlak binnen de organisatie een belangrijk aandachtspunt is.',
				text2:
					'Als ondernemer wil je graag je mensen en middelen zo effectief mogelijk inzetten. Wil jij weten hoe jouw bedrijf verder kan professionaliseren en optimaliseren? Laat ons een aantal dagen meedraaien. Met onze bedrijfsscan brengen we in beeld waar de kansen liggen om de effectiviteit te vergroten. Met een beperkte investering verkrijg jij de inzichten die je nodig hebt om de groei en toekomstbestendigheid van je bedrijf te realiseren.',
				button: 'Bekijk Diensten'
			},
			logosSectie: {
				title: 'We werkten eerder o.a. voor',
				subtitle: 'En nog 100+ MKB bedrijven'
			},
			quote: {
				text: 'Hier kan een een super leuke quote komen van een tevreden klant die op een leuke wijze zijn of haar ervaringen met jullie kan delen op jullie website',
				name: 'Amy Goudoever',
				company: 'CEO Coca Cola'
			},
			question: {
				title: 'Vraag?',
				text: 'Stel hier misschien nog 1 of twee korte vragen met als doen dat de bezoeker hieronder contact opneemt. Het contact opnemen zou ook kunnen met een contact formulier waarin de bezoeker eventueel een onderwerp kan kiezen.',
				page: 'Contact pagina'
			}
		}
	});
	locale.set('nl');
}

export { _, setupI18n };
