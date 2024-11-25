import React from "react";
import { Link } from "react-router-dom";
import Head from '../../components/Head';

const isWebpSupported = () => {
    const elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d')) && elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};
const webpSupported = isWebpSupported();

const DresdenFoto = `${import.meta.env.BASE_URL}images/dresden/geodata_around_dresden.${webpSupported ? 'webp' : 'jpg'}`

const PortfolioDresden = () => {
    return (
        <div>
            <Head
                title="GIS-Projekte | Infrastruktur um Dresden"
                description="Projekt zur Digitalisierung
                                    der Verkehrs-, Elektro-, Kataster- und Landschaftsinfrastruktur rund um Dresden."
                keywords="gis services, qgis expertise, kartographie, geoinformation, programmierung, visualisierung"
            />
            {/* <!-- start about product section --> */}
            <section className="p-0 bg-extra-dark-gray top-space">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7 p-0 cover-background md-h-500px sm-h-300px"
                            style={{ background: `url(${DresdenFoto})` }}></div>
                        <div className="col-xl-4 col-lg-5 p-0">
                            <div
                                className="padding-seventeen-lr padding-twenty-tb lg-padding-40px-lr md-padding-50px-tb sm-padding-30px-all">
                                <h3 className="alt-font text-extra-light-gray font-weight-600 mb-0">Infrastruktur um Dresden</h3>
                                <div className="bg-deep-green separator-line-horrizontal-full d-inline-block margin-25px-tb"></div>
                                <p className="w-90 w-100 margin-35px-bottom text-medium line-height-28">Projekt zur Digitalisierung
                                    der Verkehrs-, Elektro-, Kataster- und Landschaftsinfrastruktur rund um Dresden.</p>
                                <span className="text-dark-gray opacity6 alt-font mb-0 text-uppercase text-small">25
                                    September 2023&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                                    Programmierung,
                                    Datenbearbeitung, Web-App erstellen</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end about product section --> */}

            {/* <!-- start about product section --> */}
            <section className="wow animate__fadeIn">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <h5 className="alt-font text-green">Projekthintergrund und Ziele</h5>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Die fortschreitende Digitalisierung bietet die Möglichkeit, die Effizienz und Nachhaltigkeit
                                städtischer Infrastrukturen
                                erheblich zu verbessern. Im Raum Dresden soll ein umfassendes Projekt zur Digitalisierung der
                                Verkehrs-, Elektro-,
                                Kataster- und Landschaftsinfrastruktur initiiert werden, um die Lebensqualität der Bürger zu
                                steigern und die
                                Entwicklung der Region voranzutreiben.</p>
                            {/* <!-- start features box section --> */}
                            <div className="row row-cols-lg-2">
                                {/* <!-- start features box item --> */}
                                <div className="col margin-six-bottom md-margin-50px-bottom sm-margin-40px-bottom  last-paragraph-no-margin"
                                    style={{ visibility: "visible" }}>
                                    <div className="feature-box-1 position-relative">
                                        <div className="feature-content">
                                            <div className="text-green text-large margin-10px-bottom alt-font font-weight-600">
                                                Verkehrsinfrastruktur
                                            </div>
                                            <ul className="p-md-0 list-style-2">
                                                <li className="text-medium line-height-28">Planung und Umsetzung neuer
                                                    Straßenprojekte, um die
                                                    Verkehrsinfrastruktur im Raum Dresden zu erweitern und Engpässe zu
                                                    reduzieren.
                                                </li>
                                                <li className="text-medium line-height-28">Gezielte Optimierung bestehender
                                                    Straßenabschnitte zur
                                                    Verbesserung des Verkehrsflusses und der Zugänglichkeit.</li>
                                                <li className="text-medium line-height-28">Integration von Radwegen und
                                                    Fußgängerzonen für eine
                                                    nachhaltige und umweltfreundliche Mobilität.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end features box item -->
                                <!-- start features box item --> */}
                                <div className="col margin-six-bottom md-margin-50px-bottom sm-margin-40px-bottom  last-paragraph-no-margin"
                                    style={{ visibility: "visible" }}>
                                    <div className="feature-box-1 position-relative">
                                        <div className="feature-content">
                                            <div className="text-green text-large margin-10px-bottom alt-font font-weight-600">
                                                Elektroinfrastruktur
                                            </div>
                                            <ul className="p-md-0 list-style-2">
                                                <li className="text-medium line-height-28">Aufbau eines flächendeckenden Netzwerks
                                                    von Ladestationen für Elektrofahrzeuge.

                                                </li>
                                                <li className="text-medium line-height-28">Integration von Smart-Grid-Technologien
                                                    zur effizienten Energieverteilung.
                                                </li>
                                                <li className="text-medium line-height-28">Förderung der Elektromobilität als
                                                    umweltfreundliche Alternative.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end features box item -->
                                <!-- start features box item --> */}
                                <div className="col margin-six-bottom md-margin-50px-bottom sm-margin-40px-bottom  last-paragraph-no-margin"
                                    style={{ visibility: "visible" }}>
                                    <div className="feature-box-1 position-relative">
                                        <div className="feature-content">
                                            <div className="text-green text-large margin-10px-bottom alt-font font-weight-600">
                                                Katasterinfrastruktur
                                            </div>
                                            <ul className="p-md-0 list-style-2">
                                                <li className="text-medium line-height-28">Digitalisierung und Aktualisierung des
                                                    Katasterwesens für eine präzise Grundstücksverwaltung.
                                                </li>
                                                <li className="text-medium line-height-28">Einführung von digitalen Lösungen für die
                                                    Verwaltung von Grundbuchdaten.
                                                </li>
                                                <li className="text-medium line-height-28">Verbesserung der Effizienz in Prozessen
                                                    rund um Grundstücksvermessung und -registrierung.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end features box item -->
                                <!-- start features box item --> */}
                                <div className="col margin-six-bottom md-margin-50px-bottom sm-margin-40px-bottom  last-paragraph-no-margin"
                                    style={{ visibility: "visible" }}>
                                    <div className="feature-box-1 position-relative">
                                        <div className="feature-content">
                                            <div className="text-green text-large margin-10px-bottom alt-font font-weight-600">
                                                Landschaftsinfrastruktur
                                            </div>
                                            <ul className="p-md-0 list-style-2">
                                                <li className="text-medium line-height-28">Aufbau einer digitalen Plattform für die
                                                    Verwaltung von Grünflächen und Naturschutzgebieten.

                                                </li>
                                                <li className="text-medium line-height-28">Integration von Umweltdaten für eine
                                                    nachhaltige Planung von Landschaftsprojekten.
                                                </li>
                                                <li className="text-medium line-height-28">Förderung von Maßnahmen zur Erhaltung
                                                    und Entwicklung der Umweltqualität.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end features box item --> */}
                            </div>
                            {/* <!-- end features box Section --> */}

                            <h5 className="alt-font text-green">Vorbereitung für die Projektumsetzung</h5>



                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">Eines der Ziele des Projekts
                                ist es, eine Webanwendung zu erstellen, über die Mitarbeiter der betreffenden
                                Organisationen oder Mitarbeiter der Organisation, die für die Digitalisierung der Infrastruktur
                                verantwortlich sein
                                wird, zeitnah mit Geodaten arbeiten können: Änderungen vornehmen, Georeferenzierung, Speichern
                                der Änderungen in einer
                                gemeinsamen Datenbank, usw.
                            </p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Für die Umsetzung des Projekts wurde die Infrastruktur von ESRI gewählt - ArcGIS Pro, Online,
                                Javascript SDK und React
                                JS von Meta für die Visualisierung. Die Daten für die Anwendung werden dem OpenDataPortal der
                                Landeshauptstadt Dresden
                                entnommen, ggf. in das Shapefile-Format konvertiert und in die ArcGIS Javascript SDK Cloud
                                Entwicklungsumgebung
                                hochgeladen, um damit weiter zu arbeiten.</p>

                            <h6 className="alt-font text-green">Die in diesem Projekt präsentierten Daten bestehen aus:</h6>

                            {/* <!-- start features box section --> */}
                            <div className="row row-cols-lg-2">
                                {/* <!-- start features box item --> */}
                                <div className="col margin-six-bottom md-margin-50px-bottom sm-margin-40px-bottom  last-paragraph-no-margin"
                                    style={{ visibility: "visible" }}>
                                    <div className="feature-box-1 position-relative">
                                        <div className="feature-content">
                                            <div className="text-green text-large margin-10px-bottom alt-font font-weight-600">
                                                Katasterdaten:
                                            </div>
                                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                                Bauwerke, grundstücke und ihre Zweckbestimmung (Bauernhof, Parkanlage,
                                                Industriegebiet usw.)</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end features box item -->
                                <!-- start features box item --> */}
                                <div className="col margin-six-bottom md-margin-50px-bottom sm-margin-40px-bottom  last-paragraph-no-margin"
                                    style={{ visibility: "visible" }}>
                                    <div className="feature-box-1 position-relative">
                                        <div className="feature-content">
                                            <div className="text-green text-large margin-10px-bottom alt-font font-weight-600">
                                                Verkehrsdaten:
                                            </div>
                                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                                Autobahnen, Verkehrsknotenpunkte, Straßen von regionaler Bedeutung, Radwege,
                                                Haltestellen öffentlicher Verkehrsmittel</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end features box item -->
                                <!-- start features box item --> */}
                                <div className="col margin-six-bottom md-margin-50px-bottom sm-margin-40px-bottom  last-paragraph-no-margin"
                                    style={{ visibility: "visible" }}>
                                    <div className="feature-box-1 position-relative">
                                        <div className="feature-content">
                                            <div className="text-green text-large margin-10px-bottom alt-font font-weight-600">
                                                Landschaftliche Daten:
                                            </div>
                                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                                Vegetation und Wasserinfrastruktur (Teiche, Seen, Flüsse)</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end features box item -->
                                <!-- start features box item --> */}
                                <div className="col margin-six-bottom md-margin-50px-bottom sm-margin-40px-bottom  last-paragraph-no-margin"
                                    style={{ visibility: "visible" }}>
                                    <div className="feature-box-1 position-relative">
                                        <div className="feature-content">
                                            <div className="text-green text-large margin-10px-bottom alt-font font-weight-600">
                                                Stromtechnische Daten:
                                            </div>
                                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                                Daten über Stromnetze, deren Eigentümer, Strommasten, Transformatoren,
                                                Umspannwerke usw.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end features box item --> */}
                            </div>
                            {/* <!-- end features box Section --> */}




                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Wir laden alle unsere Daten auf den Server, gruppieren sie nach Typen (Katasterdaten,
                                Verkehrsdaten usw.) und fügen sie
                                der Karte hinzu. Aber alle Daten sind nicht so beschriftet, dass wir sie verstehen können, d. h.
                                ohne Visualisierung von
                                Grundstücken, Stromleitungen, Verkehr. Wir müssen all dies richtig anzeigen, damit die
                                Interaktion mit den Daten und die
                                Verwaltung der Karte und damit unserer Anwendung bequem wird.</p>

                            {/* <!-- start features box section --> */}
                            <div className="row row-cols-lg-3">
                                {/* <!-- start features box item --> */}
                                <div className="col margin-six-bottom md-margin-50px-bottom sm-margin-40px-bottom  last-paragraph-no-margin"
                                    style={{ visibility: "visible" }}>
                                    <div className="feature-box-1 position-relative">
                                        <div className="feature-content">
                                            <div className="text-green text-large margin-10px-bottom alt-font font-weight-600">
                                                Datenbearbeitung:
                                            </div>
                                            <ul className="p-md-0 list-style-2">
                                                <li className="text-medium line-height-28">Implementierung der Möglichkeit, Daten zu
                                                    bearbeiten - bestehende Werte zu ändern, das Objekt zu visualisieren und
                                                    Änderungen in die Datenbank zu speichern.
                                                </li>
                                                <li className="text-medium line-height-28">Realisieren der Möglichkeit, Dateien
                                                    (pdf, jpg, mp4) zu einzelnen Werten hinzuzufügen. Beispielsweise kann man
                                                    einen
                                                    Katasterdaten pdf Datei hinzufügen oder die Spezifikationen eines
                                                    Strommastes aktualisieren.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end features box item -->
                                <!-- start features box item --> */}
                                <div className="col margin-six-bottom md-margin-50px-bottom sm-margin-40px-bottom  last-paragraph-no-margin"
                                    style={{ visibility: "visible" }}>
                                    <div className="feature-box-1 position-relative">
                                        <div className="feature-content">
                                            <div className="text-green text-large margin-10px-bottom alt-font font-weight-600">
                                                Mit Ebenen arbeiten:
                                            </div>
                                            <ul className="p-md-0 list-style-2">
                                                <li className="text-medium line-height-28">Transparenzeinstellungen vornehmen und
                                                    nicht benötigte Ebenen deaktivieren;
                                                </li>
                                                <li className="text-medium line-height-28">Visualisierung von Ebenen in Abhängigkeit
                                                    von Objekteigenschaften;
                                                </li>
                                                <li className="text-medium line-height-28">Implementieren einer automatischen
                                                    Aktualisierung der Objekteigenschaften nach der Bearbeitung.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end features box item -->
                                <!-- start features box item --> */}
                                <div className="col margin-six-bottom md-margin-50px-bottom sm-margin-40px-bottom  last-paragraph-no-margin"
                                    style={{ visibility: "visible" }}>
                                    <div className="feature-box-1 position-relative">
                                        <div className="feature-content">
                                            <div className="text-green text-large margin-10px-bottom alt-font font-weight-600">
                                                Kartenbearbeitung:
                                            </div>
                                            <ul className="p-md-0 list-style-2">
                                                <li className="text-medium line-height-28">Die Möglichkeit vorsehen, die Basiskarte
                                                    zu ändern;
                                                </li>
                                                <li className="text-medium line-height-28">Funktionsweise der Anwendung im 2D- und
                                                    3D-Ansichten;
                                                </li>
                                                <li className="text-medium line-height-28">Umschalten zwischen 2D- und 3D-Ansichten
                                                    ohne Aktualisierung der Karte und der Anwendung;
                                                </li>
                                                <li className="text-medium line-height-28">Kartennavigation in beiden Zuständen;
                                                </li>
                                                <li className="text-medium line-height-28">Im 3D-Ansicht, implementieren die
                                                    Möglichkeit, den Blickwinkel der Karte manuell und programmiert zu ändern.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end features box item --> */}
                            </div>
                            {/* <!-- end features box Section --> */}


                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26 margin-35px-top">
                                Web-App in einem <a href="https://kirman442.github.io/dresden/" target="_blank"><strong
                                    className="text-decoration-underline">neuen Fenster öffnen.</strong></a>.
                            </p>
                        </div>

                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <iframe className="w-100 h-700px" src="https://kirman442.github.io/dresden/"></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-10">

                            <h5 className="alt-font text-green">Erwartete Ergebnisse</h5>

                            {/* <!-- start features box section --> */}
                            <div className="row row-cols-lg-2">
                                {/* <!-- start features box item --> */}
                                <div className="col margin-six-bottom md-margin-50px-bottom sm-margin-40px-bottom  last-paragraph-no-margin"
                                    style={{ visibility: "visible" }}>
                                    <div className="feature-box-1 position-relative">
                                        <div className="feature-content">
                                            <div className="text-green text-large margin-10px-bottom alt-font font-weight-600">
                                                Effizienterer Verkehr
                                            </div>
                                            <ul className="p-md-0 list-style-2">
                                                <li className="text-medium line-height-28">Reduzierung von Staus und
                                                    Verkehrsbehinderungen.
                                                </li>
                                                <li className="text-medium line-height-28">Förderung nachhaltiger Verkehrsmittel.
                                                </li>
                                                <li className="text-medium line-height-28">Identifikation und Umsetzung von
                                                    Maßnahmen
                                                    zur Verbesserung lokaler Straßenverbindungen.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end features box item -->
                                <!-- start features box item --> */}
                                <div className="col margin-six-bottom md-margin-50px-bottom sm-margin-40px-bottom  last-paragraph-no-margin"
                                    style={{ visibility: "visible" }}>
                                    <div className="feature-box-1 position-relative">
                                        <div className="feature-content">
                                            <div className="text-green text-large margin-10px-bottom alt-font font-weight-600">
                                                Förderung der Elektromobilität und Stromleitungsbau.
                                            </div>
                                            <ul className="p-md-0 list-style-2">
                                                <li className="text-medium line-height-28">Auswahl von Standorten für den Bau von
                                                    Stromleitungen und Stromstationen.
                                                </li>
                                                <li className="text-medium line-height-28">Erhöhte Anzahl von Elektrofahrzeugen auf
                                                    den
                                                    Straßen.
                                                </li>
                                                <li className="text-medium line-height-28">Verbesserte Ladeinfrastruktur.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end features box item -->
                                <!-- start features box item --> */}
                                <div className="col margin-six-bottom md-margin-50px-bottom sm-margin-40px-bottom  last-paragraph-no-margin"
                                    style={{ visibility: "visible" }}>
                                    <div className="feature-box-1 position-relative">
                                        <div className="feature-content">
                                            <div className="text-green text-large margin-10px-bottom alt-font font-weight-600">
                                                Optimiertes Katasterwesen
                                            </div>
                                            <ul className="p-md-0 list-style-2">
                                                <li className="text-medium line-height-28">Schnellere und präzisere
                                                    Grundstücksverwaltung.
                                                </li>
                                                <li className="text-medium line-height-28">Digitale Prozesse für Grundbuchdaten.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end features box item -->
                                <!-- start features box item --> */}
                                <div className="col margin-six-bottom md-margin-50px-bottom sm-margin-40px-bottom  last-paragraph-no-margin"
                                    style={{ visibility: "visible" }}>
                                    <div className="feature-box-1 position-relative">
                                        <div className="feature-content">
                                            <div className="text-green text-large margin-10px-bottom alt-font font-weight-600">
                                                Nachhaltige Landschaftsplanung
                                            </div>
                                            <ul className="p-md-0 list-style-2">
                                                <li className="text-medium line-height-28">Bessere Verwaltung von Grünflächen und
                                                    Naturschutzgebieten.

                                                </li>
                                                <li className="text-medium line-height-28">Integration von Umweltdaten für
                                                    nachhaltige
                                                    Landschaftsentwicklung.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end features box item --> */}
                            </div>

                            <div className="container">
                                <div className="row justify-content-center">
                                    <div
                                        className="col-10 text-left margin-10px-bottom md-margin-50px-bottom sm-margin-30px-bottom">
                                        <h6 className="font-weight-300 margin-15px-bottom">Datenquellen und Anwendungen:</h6>
                                    </div>

                                    <div className="col-lg-10 col-md-10">
                                        <ul className="p-0 list-style-5">
                                            <li className="margin-5px-bottom"><label
                                                className="datenquelle w-50 d-inline-block">OpenDataPortal der
                                                Landeshauptstadt Dresden</label><a className="text-decoration-underline"
                                                    href="https://opendata.dresden.de/informationsportal/#app/startpage//"
                                                    target="_blank">OpenDataPortal Dresden</a>
                                            </li>
                                            <li className="margin-5px-bottom"><label
                                                className="datenquelle w-50 d-inline-block">Vitejs.dev</label><a
                                                    className="text-decoration-underline" href="https://vitejs.dev/"
                                                    target="_blank">Next
                                                    Generation Frontend Tooling</a>
                                            </li>
                                            <li className="margin-5px-bottom"><label
                                                className="datenquelle w-50 d-inline-block">React.js</label><a
                                                    className="text-decoration-underline" href="https://react.dev/"
                                                    target="_blank">React library for web interfaces </a>
                                            </li>
                                            <li className="margin-5px-bottom"><label className="datenquelle w-50 d-inline-block">ArcGIS
                                                Maps
                                                SDK
                                                for
                                                JavaScript:</label><a className="text-decoration-underline"
                                                    href="https://developers.arcgis.com/javascript/latest/" target="_blank">Data
                                                    visualisation and hosting</a>
                                            </li>
                                            <li className="margin-5px-bottom"><label className="datenquelle w-50 d-inline-block">Website
                                                erstellen:</label><a className="text-decoration-underline"
                                                    href="https://pages.github.com/" target="_blank">GitHub Pages</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- start blog navigation bar section --> */}
            <section className="wow animate__fadeIn border-top border-color-medium-gray no-padding"
                style={{ visibility: "visible", animationName: "fadeIn" }}>
                <div className="container-fluid p-0">
                    <div className="row justify-content-between align-items-center g-0 padding-30px-lr md-padding-15px-lr">
                        <div className="w-45 text-start">
                            <div className="blog-nav-link blog-nav-link-prev text-extra-dark-gray">
                                <span className="text-medium-gray text-extra-small text-uppercase d-none d-md-block">Previous
                                    Project</span>
                                <Link className="blog-nav-home" to="/portfolio/Clustering" ><i className="ti-arrow-left blog-nav-icon"></i>Clustering</Link>
                            </div>
                        </div>
                        <div className="w-10 text-center">
                            <div className="text-extra-dark-gray">
                                <span className="text-medium-gray text-extra-small text-uppercase d-none d-md-block">Home</span>
                                <Link className="blog-nav-home" to="/" ><i className="ti-layout-grid2-alt"></i></Link>
                            </div>
                        </div>
                        <div className="w-45 text-end">
                            <div className="blog-nav-link blog-nav-link-next text-extra-dark-gray">
                                <span className="text-medium-gray text-extra-small text-uppercase d-none d-md-block">Next
                                    Project</span>
                                <Link className="blog-nav-home" to="/portfolio/Kunstkarten" ><i className="ti-arrow-right blog-nav-icon"></i>Kunstkarten mit Python erstellen</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end blog navigation bar section --> */}
            {/* <a className="scroll-top-arrow" href="javascript:void(0);" style={{ display: "inline" }}><i class="ti-arrow-up"></i></a> */}
        </div >
    );
};

export default PortfolioDresden;