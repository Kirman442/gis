const isWebpSupported = () => {
    const elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d')) && elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

const webpSupported = isWebpSupported();

export const PortfolioSliderFotos = [
    {
        image: `${import.meta.env.BASE_URL}images/about/aboutPekin1000.${webpSupported ? 'webp' : 'jpg'}`,
        link: '/portfolio/Kunstkarten',
        header: 'Kunstkarten mit Python erstellen',
        text: 'Programmierung, Datenbearbeitung, Visualisierung',
        id: 1
    },
    {
        image: `${import.meta.env.BASE_URL}images/about/aboutFluss1000.${webpSupported ? 'webp' : 'jpg'}`,
        link: '/portfolio/Flusssystem',
        header: 'Die Visualisierung des Flusssystems',
        text: 'Programmierung, Datenbearbeitung',
        id: 2
    },
    {
        image: `${import.meta.env.BASE_URL}images/home/brabutor.${webpSupported ? 'webp' : 'jpg'}`,
        link: '/portfolio/Ubahn',
        header: 'Berliner U-Bahn',
        text: 'Programmierung, Datenbearbeitung',
        id: 3
    },
    {
        image: `${import.meta.env.BASE_URL}images/home/risikomanagement.${webpSupported ? 'webp' : 'jpg'}`,
        link: '/portfolio/Bergbau',
        header: 'Risikomanagement oberflächennaher Strukturen',
        text: 'Programmierung, Datenbearbeitung, 3D-Modellierung',
        id: 4
    },
    {
        image: `${import.meta.env.BASE_URL}images/home/clustering2.${webpSupported ? 'webp' : 'jpg'}`,
        link: '/portfolio/Clustering',
        header: 'Clustering',
        text: 'Programmierung, Datenbearbeitung, Web-App',
        id: 5
    },
    {
        image: `${import.meta.env.BASE_URL}images/home/Dresden-hc.${webpSupported ? 'webp' : 'jpg'}`,
        link: '/portfolio/Dresden',
        header: 'Infrastruktur um Dresden',
        text: 'Programmierung, Datenbearbeitung, Web-App',
        id: 6
    }
];

export const KunstkartenOldImages = [
    {
        src: `${import.meta.env.BASE_URL}images/kunstkarten/city-of-Dortmund_1.${webpSupported ? 'webp' : 'jpg'}`,
        thumb: `${import.meta.env.BASE_URL}images/kunstkarten/city-of-Dortmund_1.${webpSupported ? 'webp' : 'jpg'}`,
        alt: 'Dortmund',
    },
    {
        src: `${import.meta.env.BASE_URL}images/kunstkarten/city-of-Koln_1.${webpSupported ? 'webp' : 'jpg'}`,
        thumb: `${import.meta.env.BASE_URL}images/kunstkarten/city-of-Koln_1.${webpSupported ? 'webp' : 'jpg'}`,
        alt: "Köln",
    },
    {
        src: `${import.meta.env.BASE_URL}images/kunstkarten/city-of-Paris_1.${webpSupported ? 'webp' : 'jpg'}`,
        thumb: `${import.meta.env.BASE_URL}images/kunstkarten/city-of-Paris_1.${webpSupported ? 'webp' : 'jpg'}`,
        alt: "Paris",
    }
];


export const KunstkartenNewImages = [
    {
        src: `${import.meta.env.BASE_URL}images/kunstkarten/Dortmund_final_9500_211011.${webpSupported ? 'webp' : 'jpg'}`,
        thumb: `${import.meta.env.BASE_URL}images/kunstkarten/Dortmund_final_9500_211011.${webpSupported ? 'webp' : 'jpg'}`,
        alt: 'Dortmund',
    },
    {
        src: `${import.meta.env.BASE_URL}images/kunstkarten/Tripoly_final_12500_20052.${webpSupported ? 'webp' : 'jpg'}`,
        thumb: `${import.meta.env.BASE_URL}images/kunstkarten/Tripoly_final_12500_20052.${webpSupported ? 'webp' : 'jpg'}`,
        alt: "Tripoli"
    },
    {
        src: `${import.meta.env.BASE_URL}images/kunstkarten/Dubai_final_12500_211042.${webpSupported ? 'webp' : 'jpg'}`,
        thumb: `${import.meta.env.BASE_URL}images/kunstkarten/Dubai_final_12500_211042.${webpSupported ? 'webp' : 'jpg'}`,
        alt: "Dubai",
    },
    {
        src: `${import.meta.env.BASE_URL}images/kunstkarten/Ho-Chi-Minh_final_7000_211042.${webpSupported ? 'webp' : 'jpg'}`,
        thumb: `${import.meta.env.BASE_URL}images/kunstkarten/Ho-Chi-Minh_final_7000_211042.${webpSupported ? 'webp' : 'jpg'}`,
        alt: "Ho-Chi-Minh",
    },
    {
        src: `${import.meta.env.BASE_URL}images/kunstkarten/Istanbul_final_19500_211042.${webpSupported ? 'webp' : 'jpg'}`,
        thumb: `${import.meta.env.BASE_URL}images/kunstkarten/Istanbul_final_19500_211042.${webpSupported ? 'webp' : 'jpg'}`,
        alt: "Istanbul",
    },
    {
        src: `${import.meta.env.BASE_URL}images/kunstkarten/Moscow_final_19000_211042.${webpSupported ? 'webp' : 'jpg'}`,
        thumb: `${import.meta.env.BASE_URL}images/kunstkarten/Moscow_final_19000_211042.${webpSupported ? 'webp' : 'jpg'}`,
        alt: "Moscow",
    },
    {
        src: `${import.meta.env.BASE_URL}images/kunstkarten/Paris_final_19500_111052.${webpSupported ? 'webp' : 'jpg'}`,
        thumb: `${import.meta.env.BASE_URL}images/kunstkarten/Paris_final_19500_111052.${webpSupported ? 'webp' : 'jpg'}`,
        alt: "Paris",
    },
    {
        src: `${import.meta.env.BASE_URL}images/kunstkarten/Stockholm_final_7500_20112.${webpSupported ? 'webp' : 'jpg'}`,
        thumb: `${import.meta.env.BASE_URL}images/kunstkarten/Stockholm_final_7500_20112.${webpSupported ? 'webp' : 'jpg'}`,
        alt: "Stockholm",
    }
];


export const AboutSkills = [
    {
        value: '70',
        header: 'GIS-Open Source',
        text: 'QGIS, GeoServer, PostgreSQL, PostGIS, Leaflet, OSM..',
        id: 1
    },
    {
        value: '65',
        header: 'GIS-Entwicklung',
        text: 'ArcGIS SDK JS, ArcPy, Python, Arcade, OpenLayers, Geopandas..',
        id: 2
    },
    {
        value: '65',
        header: 'ArcGIS Software',
        text: 'ArcGIS Application (PRO, Online, AppStudio, Experience Builder, Storymaps)',
        id: 3
    },
    {
        value: '55',
        header: 'Web-Entwicklung',
        text: 'HTML, CSS, Flask, GIT, Vite, React.js, Node.js',
        id: 4
    }
];

export const HomeProjectFotos = [
    {
        image: `${import.meta.env.BASE_URL}images/home/Pekin_1_1_1_0_5_1.${webpSupported ? 'webp' : 'jpg'}`,
        alt: 'Kunstkarten',
        data: '18 April 2024',
        link: '/portfolio/Kunstkarten',
        header: 'Kunstkarten mit Python erstellen',
        text: 'Sehen wir uns an, wie wir mit Python und OpenStreetMap-Daten schöne Karten erstellen können.',
        id: 1
    },
    {
        image: `${import.meta.env.BASE_URL}images/home/Fluss_Germany.${webpSupported ? 'webp' : 'jpg'}`,
        alt: 'Flusssystemstkarten',
        data: '25 Mai 2024',
        link: '/portfolio/Flusssystem',
        header: 'Die Visualisierung des Flusssystems',
        text: 'Filtern und stilisieren das globale Flusssystem eines ganzen Kontinents oder eines bestimmten Landes.',
        id: 2
    },
    {
        image: `${import.meta.env.BASE_URL}images/home/brabutor.${webpSupported ? 'webp' : 'jpg'}`,
        alt: 'Berliner U-Bahn Geschichte',
        data: '19 Dezember 2023',
        link: '/portfolio/Ubahn',
        header: 'Berliner U-Bahn Geschichte',
        text: 'Interaktive Karte über die Entwicklung und den Bau der Berliner U-Bahn.',
        id: 3
    },
    {
        image: `${import.meta.env.BASE_URL}images/home/risikomanagement.${webpSupported ? 'webp' : 'jpg'}`,
        alt: 'Bergbau Risikomanagement',
        data: '25 August 2022 | Kirill Lisochenko & Martin Burzynski',
        link: '/portfolio/Bergbau',
        header: 'Risikomanagement oberflächennaher Strukturen',
        text: 'GIS-technische Umsetzung eines vorgegebenen Workflows zur Erstellung von 3D-Bergbaustrukturen.',
        id: 4
    },
    {
        image: `${import.meta.env.BASE_URL}images/home/clustering2.${webpSupported ? 'webp' : 'jpg'}`,
        alt: 'Infrastruktur um Dresden',
        data: '25 März 2024',
        link: '/portfolio/Clustering',
        header: 'Clustering',
        text: 'Manchmal müssen wir eine große Menge an Daten auf der Karte anzeigen. Und in diesem Fall ist es besser, Clustering zu verwenden',
        id: 5
    },
    {
        image: `${import.meta.env.BASE_URL}images/home/Dresden-hc.${webpSupported ? 'webp' : 'jpg'}`,
        alt: 'Clustering',
        data: '25 September 2023',
        link: '/portfolio/Dresden',
        header: 'Infrastruktur um Dresden',
        text: 'Projekt zur Digitalisierung der Verkehrs-, Elektro-, Kataster- und Landschaftsinfrastruktur rund um Dresden.',
        id: 6
    }
];


export const FlusssystemImages = [
    {
        src: `${import.meta.env.BASE_URL}images/flusssystem/France.${webpSupported ? 'webp' : 'jpg'}`,
        thumb: `${import.meta.env.BASE_URL}images/flusssystem/France.${webpSupported ? 'webp' : 'jpg'}`,
        alt: 'France',
    },
    {
        src: `${import.meta.env.BASE_URL}images/flusssystem/Germany.${webpSupported ? 'webp' : 'jpg'}`,
        thumb: `${import.meta.env.BASE_URL}images/flusssystem/Germany.${webpSupported ? 'webp' : 'jpg'}`,
        alt: "Germany"
    },
    {
        src: `${import.meta.env.BASE_URL}images/flusssystem/Uruguay.${webpSupported ? 'webp' : 'jpg'}`,
        thumb: `${import.meta.env.BASE_URL}images/flusssystem/Uruguay.${webpSupported ? 'webp' : 'jpg'}`,
        alt: "Uruguay",
    },
    {
        src: `${import.meta.env.BASE_URL}images/flusssystem/Venezuela.${webpSupported ? 'webp' : 'jpg'}`,
        thumb: `${import.meta.env.BASE_URL}images/flusssystem/Venezuela.${webpSupported ? 'webp' : 'jpg'}`,
        alt: "Venezuela",
    },
    {
        src: `${import.meta.env.BASE_URL}images/flusssystem/South_America_upland50_ord_flow6.${webpSupported ? 'webp' : 'jpg'}`,
        thumb: `${import.meta.env.BASE_URL}images/flusssystem/South_America_upland50_ord_flow6.${webpSupported ? 'webp' : 'jpg'}`,
        alt: "South America",
    }
];

export const AboutWeiterbildung = [
    {
        header: 'Weiterbildungen im GIS Fachbereich',
        desc: 'Selbständige Durchführung mehrerer kleiner Projekte',
        text: 'Programmierung, Datenbearbeitung, Visualisierung, 3D-Modellierung',
        id: 1
    },
    {
        header: 'Universität Helsinki',
        desc: 'Fakultät für Geowissenschafteften und Geographie',
        text: 'Geo-Python und Datenanalyse, manage and visualise spatial data using Python',
        id: 2
    },
    {
        header: 'ESRI-zertifizierte Schulungen',
        desc: 'Weiterbildung als Geodatenspezialist',
        text: 'Geo Application, Cartography, Spatial Analysis ...',
        id: 3
    },
    {
        header: 'Universität Helsinki',
        desc: 'Fakultät für Informatik',
        text: 'Python Programmierung, JavaScript-basierte Web-Entwicklung',
        id: 4
    },
    {
        header: 'GIS-Spezialist für Softwftware- Entwicklung',
        desc: 'ZECK GmbH',
        text: 'Softwftware- Entwicklung GIS- basierte Application',
        id: 5
    },
    {
        header: 'GIS- Akademie',
        desc: 'Weiterbildung als GIS- und Geodatenspezialist',
        text: 'Desktop-GIS, WebGIS, Projektarbeit, Prakrtikum',
        id: 6
    }
];