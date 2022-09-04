function displayExcuseSNCF(){
    //exemple : Votre train TER n°6703, à destination de Paris Montparnasse, partira avec un retard de 20mn en raison d'une panne dans le réseau de notre fournisseur d'eau fraiche
    var res="Votre train";
    var typesTrains=["TER","Intercité","TGV","OuiGo","Inoui"];
    var gares=["Bordeau Saint-Jean", "Marseilles Saint-Charles", "Paris Montparnasse","Paris Gare de Lyon","Lyon Pardieu", "Lyon Perrache", "Montpellier Saint-Roch", "Montpellier Sud de France","Nantes", "Brest", "Lille Flandres", "Lille Europe", "Toulouse Matabiau", "Strasbourg","Cherbourg","Quimper","Saint-Malo","La Rochelle","Nice","Dunkerque"];
    var typesRetard=["partira", "arrivera"];
    // mn multiple de 5

    var typeProblemeDe=["d'une panne","d'une avarie", "d'un défaut", "d'un problème", "de difficultés", "d'un accident","d'un conflit"];
    var typeProblemeSur=typeProblemeDe.concat(["de travaux",]);// sur, dans ou chez
    var typeProblemeChez=typeProblemeSur.concat(["d'une grêve",]); //dans ou Chez
    var typeProblemeAvec=["d'une collision", "d'un problème","de difficultés","d'un accident","d'un conflit"];//avec quoi

    var deQuoi=["électrique","technique","de la météo","de signalisation","de matériel","d'un système","informatique","de chargement"];
    var surQuoi=["sur le réseau","sur un matériel","sur une voie","sur un caténaire"];
    var dansQuoi=["dans une gare", "dans une usine","dans un technicentre", "dans un centre opérationnel", "dans un centre d'aiguillage",];
    var avecQuoi=["avec un animal","avec du gibier","avec un sanglier","avec un faisan","avec un voyageur","avec un concurrent","avec le personnel","avec un client"];//Pas de chez

    var chezQui=["chez le gestionnaire du réseau","chez notre fournisseur d'énergie","chez le gestionnaire d'infrastructures","chez une entreprise concurrente","chez notre fournisseur de bouteilles d'eau","chez nous","chez Michel","chez transilien"];

    var typeTrain=random_item(typesTrains);
    res+=" "+typeTrain+" numéro ";
    var numeroTrain=Math.floor(10000*(Math.random())+1)
    res+=numeroTrain+" à destination de ";
    var gare=random_item(gares);
    res+=gare+", ";
    var typeRetard=random_item(typesRetard);
    res+=typeRetard+" avec un retard de ";
    var retard=5*(Math.floor(20*(Math.random())+0.02));
    res+=retard+"mn, en raison ";
    var type=random_item([1,2,3,4]);
    var typeProbleme;
    var possibleComplement;
    switch (type){
        case 1://en raison de .. de, sur, dans, chez
            typeProbleme=random_item(typeProblemeDe);
            possibleComplement=[1,2,3,5];
            break;
        case 2://en raison de.. sur, dans, chez
            typeProbleme=random_item(typeProblemeSur);
            possibleComplement=[2,3,5];
            break;
        case 3://en raison de .. chez ou dans
            typeProbleme=random_item(typeProblemeChez);
            possibleComplement=[3,5];
            break;
        case 4://en raison de .. avec
            typeProbleme=random_item(typeProblemeAvec);
            possibleComplement=[4,];
            break;
    }
    res+=typeProbleme;
    if (random_item([1,2])==1){
        var typeComplement=random_item(possibleComplement);
        var complement;
        var suite;
        switch (typeComplement){
            case 1:
                complement=random_item(deQuoi);
                suite=true;
                break;
            case 2:
                complement=random_item(surQuoi);
                suite=true;
                break;
            case 3:
                complement=random_item(dansQuoi);
                suite=true;
                break;
            case 4:
                complement=random_item(avecQuoi);
                suite=true;
                break;
            case 5:
                complement=random_item(chezQui);
                suite=false;
                break;
        }
        res+=" "+complement+" ";
        if (suite && random_item([1,2])==1) res+=random_item(chezQui);
    }
    res+=".</br>La SNCF vous présente toutes ses excuses pour ce désagrément.";
    document.getElementById("excuseSNCF").style.border="5px grey outset";//#4169E1
    document.getElementById("excuseSNCF").innerHTML=res;
}
function displayExcuseAirFrance(){
    document.getElementById("excuseAirFrance").innerText="Test d'excuse Air France";
}
function displayExcuseRATP(){
    document.getElementById("excuseRATP").innerText="Test d'excuse RATP";
}
function displayExcuseTravail(){
    document.getElementById("excuseTravail").innerText="Test d'excuse Travail";
}

function random_item(items)
{
    return items[Math.floor(Math.random()*items.length)];    
}
