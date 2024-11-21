import React from "react";
import { Link } from "react-router-dom";

import Code from "../../components/code";
import { Cluster1, Cluster2, Cluster3, Cluster4, Cluster5, Cluster6 } from "./kartenCode";

import ClusteringFoto from "/images/clustering/clustering_main.jpg"

const PortfolioClustering = () => {
    return (
        <div>

            {/* <!-- start about product section --> */}
            <section className="p-0 bg-extra-dark-gray top-space">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7 p-0 cover-background md-h-500px sm-h-300px"
                            style={{ background: `url(${ClusteringFoto})` }}></div>
                        <div className="col-xl-4 col-lg-5 p-0">
                            <div
                                className="padding-seventeen-lr padding-twenty-tb lg-padding-40px-lr md-padding-50px-tb sm-padding-30px-all">
                                <h3 className="alt-font text-extra-light-gray font-weight-600 mb-0">Clustering</h3>
                                <div className="bg-deep-green separator-line-horrizontal-full d-inline-block margin-25px-tb"></div>
                                <p className="w-90 w-100 margin-35px-bottom text-medium line-height-28">Manchmal müssen wir eine
                                    große Menge an Daten auf der Karte anzeigen. Und in diesem Fall ist es besser, Clustering zu
                                    verwenden.</p>
                                <span className="text-dark-gray opacity6 alt-font mb-0 text-uppercase text-small">25
                                    März 2024&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
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
                            <h5 className="alt-font text-green">Einleitung</h5>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Clustering ist eine Methode zur Reduzierung von Punkten in einer Ebene, indem sie auf der
                                Grundlage ihrer räumlichen
                                Nähe zueinander in Clustern gruppiert werden. Die Größe der Cluster ist in der Regel
                                proportional zur Anzahl der Objekte
                                in jedem Cluster. Mit Hilfe von Clustern kann man effektiv sichtbar machen, wo sich Punkte
                                überschneiden oder sehr nahe
                                beieinander liegen.</p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">Für mein Beispiel habe ich
                                Daten im Geojson-Format über die weltweiten Standorte von Mobilfunkmasten mit 5G-Sendern
                                genommen und aus dem Datensatz nur diejenigen herausgeschnitten, die sich ausschließlich in
                                Deutschland befinden.
                            </p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Der ursprüngliche Datensatz enthielt die folgenden Felder: Name des Mobilfunkbetreibers, Name
                                der Stadt, Einsatzart und
                                Nutzungsstatus, aber kein Feld, in welchem Bundesland sich der Turm befindet. Vielleicht
                                brauchen wir es für weitere
                                Analysen. Und natürlich das Feld mit der Geometrie.</p>
                            <Code code={Cluster1} language="python" />
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Zuerst dachte ich, es wäre eine gute Idee, den Datensatz nach deutschen Städten zu filtern und
                                gleichzeitig ein neues
                                Feld für die Turmzugehörigkeit zu Bundesland hinzuzufügen. Ich habe eine Liste von Städten
                                heruntergeladen, die zum
                                Zeitpunkt 2024 bereits 2056 umfasste und in der eine Korrelation der Stadt des entsprechenden
                                Bundeslandes vorhanden
                                war.</p>
                            <Code code={Cluster2} language="python" />
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Ich filterte den ursprünglichen Datensatz nach den Städten, wobei ich ein neues Feld hinzufügte,
                                und nun sieht das
                                Objektverzeichnis wie folgt aus:</p>
                            <Code code={Cluster3} language="python" />
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Es hat alles geklappt, jetzt haben wir ein Feld "land_type", aber unerwartet habe ich
                                herausgefunden, dass es in einigen
                                Ländern Städte gibt, deren Namen die gleiche Schreibweise wie die deutschen haben, oder dass es
                                in Deutschland Städte
                                mit Namen aus anderen Ländern gibt. Man könnte in aller Ruhe deren Geschichte nachschlagen, das
                                wäre sicher interessant.</p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Aus dem Original-Sabset geht hervor, dass es in England solche Städte gibt, die dem deutschen
                                Marlow, Norden, Kirn
                                entsprechen. Wer hätte gedacht, dass es in Frankreich, wenn auch eher in Deutschland, eine Stadt
                                namens "Barby" * mit
                                demselben französischen Namen gibt. Überraschenderweise tauchten die Doppelgänger von Minden,
                                Waldeck, Linden und
                                Warburg in Kanada auf. Ich mein's ernst, Australien hat berühmte Städte wie Münster, Heidelberg
                                und Coburg.</p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Nach dem Filtern machte ich also einige unerwartete geografische Entdeckungen und reiste
                                virtuell durch diese Städte.
                            </p>
                            <h5 className="alt-font text-green">Räumliche Verbindung</h5>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Da wir sie aber für unsere Karte nicht brauchen, werden wir sie auf viel zuverlässigere Weise
                                los, indem wir eine
                                räumliche Verknüpfung (Spatial Join / Räumliche Verbindung) verwenden. Räumliche Verbindung -
                                vereinigt Attribute eines
                                Features basierend auf der räumlichen Beziehung mit den Attributen eines anderen. Die
                                Ziel-Features und die vereinigten
                                Attribute aus den Verbindungs-Features werden in die Ausgabe-Feature-Class geschrieben.
                            </p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Zu diesem Zweck benötigen wir Deutschlands Grenzen in Form eines Polygons. Wir können sie finden
                                und aus öffentlichen
                                Daten herunterladen, aber die Suche kann lange dauern und es ist nicht sicher, dass das Ergebnis
                                für uns geeignet ist.
                            </p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Mit unserer Erfahrung und der ausgezeichneten OSMnx-Bibliothek, die ich bereits im Projekt
                                'Kunstkarten mit Python'
                                erwähnt habe. Ein paar Zeilen Code und schon haben wir die genauen Grenzen Deutschlands aus
                                OpenStreetMaps in Form eines
                                Polygons in der Tasche, oder besser gesagt in Programmspeicher.
                            </p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Wir verknüpfen die Daten mit unserer neuen Liste von Funkmasten und schreiben das Ergebnis in
                                eine neue geojson-Datei.
                            </p>
                            <Code code={Cluster4} language="python" />
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Es ist auf jeden Fall einfacher, genauer und schneller als die Suche nach den Grenzen einer
                                Verwaltungseinheit, z. B.
                                des Landes Algerien oder der Stadt Barby in Frankreich :)
                            </p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Wir können die neue Datei überall verarbeiten, aber in diesem Fall möchte ich sie auf mein
                                ArcGIS Developers-Konto
                                hochladen, um sie später zu visualisieren und eine einseitige React- Webanwendung zu erstellen.
                            </p>
                            <h5 className="alt-font text-green">Daten Hochladen</h5>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Dazu benötigen wir die Python-API, die ich ganz am Anfang importiert habe. Logge ein, fülle die
                                Daten unseres Layers
                                aus, von denen wir einige für die weitere Identifizierung benötigen. Der Parameter
                                item_properties ermöglicht uns dies.
                            </p>
                            <Code code={Cluster5} language="python" />
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Dann müssen wir prüfen, ob eine solche Ebene bereits geladen ist oder nicht, damit wir sie im
                                Falle einer
                                Datenaktualisierung überschreiben können. Aus diesem Grund müssen wir eine eindeutige
                                Beschreibung für unsere Ebene
                                angeben. Wenn die Ebene existiert, wird sie überschrieben, wenn nicht, wird sie neu erstellt.
                            </p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Beim Überschreiben ist es wichtig, dass die Ebene dieselbe ID hat, da unsere Karte diese Ebene
                                ständig verwenden wird.
                            </p>
                            <Code code={Cluster6} language="python" />
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Sobald die Geojson-Daten hochgeladen sind, werden sie automatisch als Feature Layer (gehostet)
                                veröffentlicht und wir
                                können damit arbeiten. Es ist möglich, nur mit Geojson zu arbeiten, aber der gehostete
                                Feature-Layer gibt uns mehr
                                Möglichkeiten.
                            </p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Installieren wir React mit Vite, installieren wir die Abhängigkeiten und notwendigen
                                Bibliotheken. Das dauert etwa 10
                                Minuten. Dann fügen wir die erforderlichen Module ein, visualisieren die Ebene auf schnelle und
                                unterhaltsame Weise. Das
                                nimmt natürlich mehr Zeit in Anspruch, vor allem, wenn Sie die Visualisierung nach eindeutigen
                                Werten verwenden, wie ich
                                es in meinem Beispiel getan habe, aber es kostet auch nicht viel Mühe.
                            </p>
                            <h5 className="alt-font text-green">Web-App</h5>

                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Laden alles auf Github hoch und voila, unsere Karte ist jetzt eine Webanwendung und jeder kann
                                sie sehen.
                            </p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                <sup>*</sup> Barby ist eine französische Gemeinde mit 3553 Einwohnern im Département Savoie in
                                der Region Auvergne-Rhône-Alpes. Die
                                Bewohner werden Barbysins und Barbysines genannt.
                            </p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                <sup>**</sup> Anfang März gab es folgende Mobilfunkmasten: Telekom Deutschland - 1736, O2 - 940,
                                Vodafone - 858.
                            </p>

                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26 margin-35px-top">
                                Web-App in einem <a href="https://kirman442.github.io/ookla/" target="_blank"><strong
                                    className="text-decoration-underline">neuen Fenster öffnen. 5G Netz
                                    Deutschland</strong></a>.
                            </p>
                        </div>

                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <iframe className="w-100 h-800px" src="https://kirman442.github.io/ookla/"></iframe>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 text-center margin-10px-bottom md-margin-50px-bottom sm-margin-30px-bottom">
                                    <h6 className="font-weight-300 margin-15px-bottom">Datenquellen und Anwendungen:</h6>
                                </div>

                                <div className="col-lg-8 col-md-10">
                                    <ul className="p-0 list-style-5">
                                        <li className="margin-5px-bottom"><label className="datenquelle w-50 d-inline-block">Python
                                            packages
                                            and
                                            libraries:
                                        </label>Geopandas , Json , Osmnx , ArcGIS API for Python
                                        </li>
                                        <li className="margin-5px-bottom"><label className="datenquelle w-50 d-inline-block">5G GeoJSON
                                            Source
                                            data</label><a className="text-decoration-underline"
                                                href="https://www.speedtest.net/ookla-5g-map" target="_blank">Ookla 5G Map™</a>
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
                                                target="_blank">React library for web interfaces
                                            </a>
                                        </li>
                                        <li className="margin-5px-bottom"><label className="datenquelle w-50 d-inline-block">ArcGIS Maps
                                            SDK
                                            for
                                            JavaScript:</label><a className="text-decoration-underline"
                                                href="https://developers.arcgis.com/javascript/latest/" target="_blank">Data
                                                visualisation and hosting</a>
                                        </li>
                                        <li className="margin-5px-bottom"><label className="datenquelle w-50 d-inline-block">Website
                                            erstellen:</label><a className="text-decoration-underline"
                                                href="https://pages.github.com/" target="_blank">GitHub
                                                Pages</a>
                                        </li>
                                    </ul>
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
                                <Link className="blog-nav-home" to="/portfolio/Bergbau" ><i className="ti-arrow-left blog-nav-icon"></i>Risikomanagement oberflächennaher Strukturen</Link>
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
                                <Link className="blog-nav-home" to="/portfolio/Dresden" ><i className="ti-arrow-right blog-nav-icon"></i>Infrastruktur um Dresden</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end blog navigation bar section --> */}


        </div >
    );
};

export default PortfolioClustering;