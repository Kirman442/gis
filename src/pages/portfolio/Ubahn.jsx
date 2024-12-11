import React from "react";
import { Link } from "react-router-dom";
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import Head from '../../components/Head';

const isWebpSupported = () => {
    const elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d')) && elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};
const webpSupported = isWebpSupported();

const UbahnFoto = `${import.meta.env.BASE_URL}images/ubahn/1902ca_buelowstr.${webpSupported ? 'webp' : 'jpg'}`

const PortfolioUbahn = () => {
    return (
        <div>
            <Head
                title="GIS-Projekte | Berliner U-Bahn Geschichte"
                description="Interaktive Karte über die Entwicklung und den Bau der Berliner U-Bahn."
                keywords="gis services, qgis expertise, kartographie, geoinformation, programmierung, visualisierung"
            />
            {/* <!-- start about product section --> */}
            <section className="p-0 bg-extra-dark-gray top-space">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7 p-0 cover-background md-h-500px sm-h-300px"
                            style={{ background: `url(${UbahnFoto})` }}></div>
                        <div className="col-xl-4 col-lg-5 p-0">
                            <div
                                className="padding-seventeen-lr padding-twenty-tb lg-padding-40px-lr md-padding-50px-tb sm-padding-30px-all">
                                <h3 className="alt-font text-extra-light-gray font-weight-600 mb-0">Berliner U-Bahn Geschichte</h3>
                                <div className="bg-deep-green separator-line-horrizontal-full d-inline-block margin-25px-tb"></div>
                                <p className="text-medium-gray w-90 w-100 margin-35px-bottom text-medium line-height-28">Interaktive Karte über die
                                    Entwicklung und den Bau der Berliner U-Bahn.</p>
                                <span className="text-light-gray opacity6 alt-font mb-0 text-uppercase text-small">19
                                    Dezember 2023&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                                    Programmierung,
                                    Datenbearbeitung</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end about product section -->
            <!-- start about product section --> */}
            <section className="wow animate__fadeIn">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <h4 className="alt-font text-green">U-Bahn Geschichte</h4>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Die erste Untergrundbahn Berlins entstand 1895 als Verbindungstunnel zwischen zwei
                                AEG-Fabriken.Dennoch setzte sich
                                später Siemens mit seinem preiswerteren Modell beim Tunnelbau durch. Im Jahr 1902 nahm in Berlin
                                die erste elektrische
                                Untergrundbahn für den öffentlichen Personenverkehr ihren Betrieb auf. Die Bahn, die großteils
                                als Hochbahn ausgeführt
                                war, reichte von Berlin bis in die damals selbstständige Nachbarstadt Charlottenburg. Auf einem
                                kurzen Stück berührte
                                sie auch das Territorium der ebenfalls damals noch selbstständigen Stadt Schöneberg.</p>
                            <blockquote className="border-color-dark-gray">
                                <p>Von diesem Moment an begann eine neue Ära in der Geschichte der Stadt, in der die U-Bahn
                                    sicherlich eine wichtige Rolle
                                    spielt.</p>
                            </blockquote>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">Ein kurioses Detail ist, dass
                                das U-Bahn-System in den folgenden Jahrzehnten auf dem Stadtplan mit Bezug auf den
                                tatsächlichen Standort dargestellt wurde. Und nach den Daten, die ich finden konnte, begann man
                                erst im
                                sechsundfünfzigsten Jahr des letzten Jahrhunderts, als sich die Gesamtzahl der Stationen der
                                Hundertgrenze näherte, eine
                                schematische Darstellung der U-Bahn-Linien zu verwenden, die sich als praktischer und für die
                                Fahrgäste leichter
                                wahrnehmbar erwies.
                            </p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">Das vereinfachte Schema ist
                                schneller zu lesen. Gleichzeitig vermittelt es aber keine Vorstellung von der tatsächlichen
                                Lage der Linien und verbirgt Details. Lange U-Bahn-Strecken unterscheiden sich nicht von kurzen.
                                Es gibt keine
                                Verbindung zur Geografie.
                            </p>
                            <p className="text-center text-medium text-dark-gray line-height-28 sm-line-height-26">Wischen nach
                                links/rechts über das Bild.
                            </p>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <style className="darkreader darkreader--sync" media="screen"></style>
                                        <ImgComparisonSlider
                                            className="slider-example-focus slider-example-opacity-and-size"
                                            value="50"
                                            style={{ cursor: "pointer" }}
                                        >
                                            <img slot="first" src={`${import.meta.env.BASE_URL}images/ubahn/ubahn_schemamap.${webpSupported ? 'webp' : 'jpg'}`} alt="Berliner Ubahn Schemamap" />
                                            <img slot="second" src={`${import.meta.env.BASE_URL}images/ubahn/ubahn_geomap3.${webpSupported ? 'webp' : 'jpg'}`} alt="Berliner Ubahn Geomap" />
                                        </ImgComparisonSlider>
                                    </div>
                                </div>
                            </div>

                            <p className="padding-25px-top text-medium text-dark-gray line-height-28 sm-line-height-26">Erstellen
                                wir eine
                                interaktive Karte der Berliner U-Bahn-Linien und schauen wir uns ihre Geschichte an - wie sich
                                eines
                                der größten Netze Europas entwickelt hat.
                            </p>

                            <h4 className="alt-font text-green">Karte Erstellung</h4>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">Um eine solche Karte zu
                                erstellen, benötigen wir:
                            </p>
                            <ul className="p-md-0 list-style-2">
                                <li className="text-medium line-height-28">einen Anzeigedatenverfahren für die Karte</li>
                                <li className="text-medium line-height-28">ein geeignetes Modell zur Datenspeicherung</li>
                                <li className="text-medium line-height-28">daten</li>
                            </ul>
                            <h5 className="alt-font text-green">Anzeigedatenverfahren</h5>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Lassen Sie uns zunächst die Anforderungen an den Anzeigeverfahren definieren. Er sollte in der
                                Lage sein:</p>

                            <ul className="p-md-0 list-style-2">
                                <li className="text-medium line-height-28">eine Basisebene mit einer "normalen" Karte - Straßen,
                                    Gewässer, Straßen, Gebäude usw. anzeigen;</li>
                                <li className="text-medium line-height-28">Kreise und Linien auf der Basisebene anzeigen, die
                                    Bahnhöfe bzw. U-Bahn-Linien darstellen sollen;</li>
                                <li className="text-medium line-height-28">Aktualisierung der gezeichneten Bahnhöfe und
                                    U-Bahn-Linien in Abhängigkeit vom gewählten Datum;
                                </li>
                                <li className="text-medium line-height-28">Umschalten des aktuellen Datums zwischen dem 15. Februar
                                    1902 (Eröffnung der ersten U-Bahn-Linie) und dem heutigen Tag.
                                </li>
                            </ul>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Die ersten drei Punkte sind in verschiedenen Open-Source-Bibliotheken und geografischen
                                Informationssystemen verfügbar.
                                Ich werde QGIS für die Datenaggregation und -bereinigung, ArcGIS Javascript SDK und React.JS für
                                die Visualisierung
                                verwenden. Für den vierten Punkt gibt es eine einfache Möglichkeit, das ArcGIS Javascript SDK zu
                                implementieren, wir
                                müssen nur die notwendigen Anpassungen für unsere Daten vornehmen.</p>
                            <h6 className="alt-font text-green">Kartengrundlage</h6>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Eine kleine Erklärung für diejenigen, die noch nie mit den Konzepten von Kacheln und
                                Kachelserver in Berührung gekommen
                                sind.
                                <br />
                                Die Online-Karten, an die die meisten Nutzer gewöhnt sind - OpenStreetMap, Google und Apple maps
                                usw. - bestehen aus
                                Kacheln: Quadrate mit einer Seitenlänge von 256 Pixeln.
                            </p>
                            <p className="text-medium text-green line-height-28 sm-line-height-26">
                                <b>Jede Kachel hat x-, y- und z-Koordinaten:</b>
                            </p>

                            <div className="row">
                                <div className="col-lg-12">
                                    <img className="alignright" src={`${import.meta.env.BASE_URL}images/ubahn/2200_1343.${webpSupported ? 'webp' : 'png'}`} alt="Kachel Foto" data-no-retina />

                                    <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">z ist der Maßstab, in
                                        dem sie angezeigt wird (je größer der z-Wert, desto größer die Vergrößerung);
                                        x - Seriennummer der Kachel in horizontaler Richtung im gewählten Maßstab z;
                                        y - fortlaufende Nummer der Kachel in vertikaler Richtung im gewählten Maßstab z.
                                        Eine Kachel mit den Koordinaten x=2200, y=1343 und z=12 sieht zum Beispiel so aus wie
                                        das Bild auf der rechten Seite. </p>

                                    <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                        <a href="https://tile.openstreetmap.org/12/2200/1343.png" target="_blank"><strong
                                            className="text-decoration-underline">openstreetmaps</strong></a>
                                    </p>

                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-lg-12 margin-four-bottom">
                                    <p className="text-extra-large  text-dark-gray text-center line-height-28">Das Gesamtbild, das
                                        wir letztendlich sehen, wird aus vielen Kacheln zu einem einzigen Bild zusammengefügt:
                                    </p>
                                    <img src={`${import.meta.env.BASE_URL}images/ubahn/tile_map_story.${webpSupported ? 'webp' : 'jpg'}`} alt="Kachel Gesamtbild" className="w-100" data-no-retina />
                                </div>
                            </div>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Wenn wir die Karte in einem Browser bearbeiten - hineinzoomen oder seitwärts scrollen - werden
                                die erforderlichen
                                Kacheln bei Bedarf vom Server heruntergeladen. In unserem Fall werden ArcGIS-Datenserver als
                                Kachelserver verwendet.</p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Der nächste Schritt besteht darin, der Karte Stationen und U-Bahn-Linien hinzuzufügen. Jede
                                Linie entspricht einer
                                eigenen historischen Farbe.<br />

                                Als Nächstes müssen wir einen Slider mit einem Bereich vom 15. Februar 1902 bis zum heutigen Tag
                                "anzuschrauben". Mit
                                ihm stellen wir das "aktuelle" Datum für die Anzeige des U-Bahn-Schemas so ein, wie es an diesem
                                Tag war.
                            </p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Um feststellen zu können, welche Objekte an einem bestimmten Tag vorhanden waren, sind
                                entsprechend aufbereitete Daten
                                erforderlich. OpenStreetMap ist so konzipiert und entwickelt worden, dass es die tatsächlichen
                                Details zeigt - das, was
                                im Moment existiert. Für einige Arten von Objekten ist es möglich, das Jahr ihrer Entstehung
                                anzugeben (z. B. das
                                Baujahr eines Gebäudes). Aber für Objekte, die nicht mehr existieren oder die sich in der
                                Vergangenheit verändert haben,
                                gibt es keine Daten. Um dies zu beheben, fügen wir jedem Objekt, das auf der Karte angezeigt
                                werden kann, zwei Merkmale
                                hinzu:<br /><br />
                                <b><i>from_date</i></b> - das Datum, ab dem das Objekt auf der Karte
                                erscheint<br />
                                <b><i>to_date</i></b> - das Datum, ab dem das Objekt nicht mehr auf der Karte erscheinen
                                soll.<br /><br />
                                Mit Hilfe dieser Merkmale ist es möglich, die auf der Karte angezeigten Daten in Abhängigkeit
                                vom gewählten Datum zu
                                steuern.
                            </p>

                            <h5 className="alt-font text-green">Ergebnis</h5>

                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Das Ergebnis ist eine interaktive Karte der Berliner U-Bahn, auf der man sehen kann, wie sich
                                das Netz entwickelt hat.
                                Zum Beispiel, in welche Richtungen es sich entwickelt hat, mit welcher Geschwindigkeit neue
                                Bahnhöfe eröffnet wurden,
                                und einfach um nostalgisch zu werden.
                            </p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Der Slider ist für Zeiträume von 10 Jahren eingestellt. Man kann auf die U-Bahn-Linien und
                                Haltestellen klicken, um
                                kurze Informationen zu erhalten.
                            </p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26 margin-35px-top">
                                Web-App in einem <a href="https://kirman442.github.io/ookla/" target="_blank"><strong
                                    className="text-decoration-underline">neuen Fenster öffnen.</strong></a>.
                            </p>
                        </div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <iframe className="w-100 h-700px" src="https://kirman442.github.io/berlinmetro/" title="Web-App"></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 text-center margin-10px-bottom md-margin-50px-bottom sm-margin-30px-bottom">
                                    <h6 className="font-weight-300 margin-15px-bottom">Datenquellen und Anwendungen:</h6>
                                </div>

                                <div className="col-lg-8 ">
                                    <ul className="p-0 list-style-5">
                                        <li className="margin-5px-bottom"><label className="datenquelle w-40 d-inline-block">Historische
                                            Karten und
                                            Dokumente</label><a className="text-decoration-underline"
                                                href="http://www.u-bahn-archiv.de/index.html" target="_blank">Das
                                                BerlinerU-Bahn-Archiv</a>
                                        </li>
                                        <li className="margin-5px-bottom"><label className="datenquelle w-40 d-inline-block">Berliner
                                            U-Bahnhöfe</label><a className="text-decoration-underline"
                                                href="http://www.u-bahn-archiv.de/index.html" target="_blank">Wikipedia</a>
                                        </li>
                                        <li className="margin-5px-bottom"><label className="datenquelle w-40 d-inline-block">Datenmodell
                                        </label><a className="text-decoration-underline"
                                            href="https://www.openstreetmap.org/#map=11/52.5070/13.3388"
                                            target="_blank">OpenStreetMap</a>
                                        </li>
                                        <li className="margin-5px-bottom"><label className="datenquelle w-40 d-inline-block">"Rohdaten"
                                            Verarbeitung

                                        </label><a className="text-decoration-underline" href="https://qgis.org/de/site/"
                                            target="_blank">QGIS</a>
                                        </li>
                                        <li className="margin-5px-bottom"><label
                                            className="datenquelle w-40 d-inline-block">Datenvorbereitung</label><a
                                                className="text-decoration-underline" href="https://developers.arcgis.com/"
                                                target="_blank">ArcGIS
                                                Maps SDK JS</a>
                                        </li>
                                        <li className="margin-5px-bottom"><label className="datenquelle w-40 d-inline-block">Image
                                            comparsion slider
                                        </label><a className="text-decoration-underline"
                                            href="https://img-comparison-slider.sneas.io/" target="_blank">Slider Component
                                                for Comparing Images</a>
                                        </li>
                                        <li className="margin-5px-bottom"><label className="datenquelle w-40 d-inline-block">Frontend
                                            JS-Anwendung
                                        </label><a className="text-decoration-underline" href="https://react.dev/"
                                            target="_blank">React JS</a>
                                        </li>
                                        <li className="margin-5px-bottom"><label className="datenquelle w-40 d-inline-block">GitHub
                                            Pages</label><a className="text-decoration-underline"
                                                href="https://pages.github.com/" target="_blank">Website
                                                erstellen</a>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="wow animate__fadeIn border-top border-color-medium-gray no-padding"
                style={{ visibility: "visible", animationName: "fadeIn" }}>
                <div className="container-fluid p-0">
                    <div className="row justify-content-between align-items-center g-0 padding-30px-lr md-padding-15px-lr">
                        <div className="w-45 text-start">
                            <div className="blog-nav-link blog-nav-link-prev text-extra-dark-gray">
                                <span className="text-dark-gray text-extra-small text-uppercase d-none d-md-block">Previous
                                    Project</span>
                                <Link className="blog-nav-home" to="/portfolio/Flusssystem" ><i className="ti-arrow-left blog-nav-icon"></i>Die Visualisierung des Flusssystem</Link>
                            </div>
                        </div>
                        <div className="w-10 text-center">
                            <div className="text-extra-dark-gray">
                                <span className="text-dark-gray text-extra-small text-uppercase d-none d-md-block">Home</span>
                                <Link className="blog-nav-home" to="/" aria-label="Home page link" ><i className="ti-layout-grid2-alt"></i></Link>
                            </div>
                        </div>
                        <div className="w-45 text-end">
                            <div className="blog-nav-link blog-nav-link-next text-extra-dark-gray">
                                <span className="text-dark-gray text-extra-small text-uppercase d-none d-md-block">Next
                                    Project</span>
                                <Link className="blog-nav-home" to="/portfolio/Bergbau" ><i className="ti-arrow-right blog-nav-icon"></i>Risikomanagement oberflächennaher Strukturen</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div >
    );
};

export default PortfolioUbahn;